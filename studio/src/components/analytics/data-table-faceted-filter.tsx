import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { PlusCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { CheckIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { Column } from "@tanstack/react-table";
import { ComponentType, useState } from "react";
import { Input } from "../ui/input";
import { AnalyticsFilter } from "./filters";

interface DataTableFacetedFilter<TData, TValue> {
  column?: Column<TData, TValue>;
  id: string;
  onSelect?: (value?: any) => void;
  selectedOptions?: string[];
  title?: string;
  options: {
    label: string;
    value: string;
    icon?: ComponentType<{ className?: string }>;
  }[];
  customOptions: boolean;
}

export function DataTableFilterCommands<TData, TValue>({
  onSelect,
  selectedOptions,
  title,
  options,
  customOptions,
}: DataTableFacetedFilter<TData, TValue>) {
  const selectedValues = new Set(selectedOptions);

  const [input, setInput] = useState("");

  return (
    <Command className="w-64">
      {!customOptions && (
        <>
          <CommandInput placeholder={title} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option, index) => {
                const isSelected = selectedValues.has(option.value);
                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => {
                      if (isSelected) {
                        selectedValues.delete(option.value);
                      } else {
                        selectedValues.add(option.value);
                      }
                      const filterValues = Array.from(selectedValues);
                      onSelect?.(
                        filterValues.length ? filterValues : undefined,
                      );
                    }}
                  >
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "opacity-50 [&_svg]:invisible",
                      )}
                    >
                      <CheckIcon className={cn("h-4 w-4")} />
                    </div>
                    {option.icon && (
                      <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                    )}
                    <span className="hidden">{index}</span>
                    <span className="truncate">{option.label}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
            {selectedValues.size > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={() => onSelect?.(undefined)}
                    className="justify-center text-center"
                  >
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </>
      )}
      {customOptions && (
        <div className="flex flex-col py-2">
          <p className="px-2 text-xs text-muted-foreground">Custom Input</p>
          <div className="flex items-center gap-x-2 px-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Enter ${title}`}
              className="border-none p-0 focus-visible:ring-0"
            />
            <Button
              size="icon-sm"
              variant="ghost"
              className="flex-shrink-0"
              disabled={!input}
              onClick={() => {
                selectedValues.add(
                  JSON.stringify({
                    label: input,
                    value: input,
                    operator: 0,
                  }),
                );
                const filterValues = Array.from(selectedValues);
                onSelect?.(filterValues);
                setInput("");
              }}
            >
              <PlusCircleIcon className="h-5 w-5" />
            </Button>
          </div>
          <Separator />
          {selectedValues.size > 0 && (
            <>
              <div className="mt-2 flex flex-col px-2">
                {Array.from(selectedValues).map((val) => {
                  const selected = JSON.parse(
                    val,
                  ) as AnalyticsFilter["options"][number];

                  return (
                    <div
                      className="flex w-full items-center justify-between gap-x-4 text-sm"
                      key={selected.value}
                    >
                      <span className="w-full truncate">{selected.label}</span>
                      <Button
                        size="icon-sm"
                        variant="ghost"
                        className="flex-shrink-0 text-muted-foreground"
                        onClick={() => {
                          selectedValues.delete(JSON.stringify(selected));
                          const filterValues = Array.from(selectedValues);
                          onSelect?.(
                            filterValues.length ? filterValues : undefined,
                          );
                        }}
                      >
                        <XCircleIcon className="h-5 w-5" />
                      </Button>
                    </div>
                  );
                })}
              </div>
              <Button
                className="mx-1 mt-2"
                variant="ghost"
                size="sm"
                onClick={() => {
                  onSelect?.(undefined);
                  setInput("");
                }}
              >
                Clear Filters
              </Button>
            </>
          )}
        </div>
      )}
    </Command>
  );
}

export function DataTableFacetedFilter<TData, TValue>({
  id,
  onSelect,
  selectedOptions,
  title,
  options,
  customOptions,
}: DataTableFacetedFilter<TData, TValue>) {
  const selectedValues = new Set(selectedOptions);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="border-dashed px-2 text-sm">
          <PlusCircledIcon className="mr-2 h-4 w-4" />
          {title}
          {selectedValues?.size > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Badge
                variant="muted"
                className="rounded-sm px-1 font-normal lg:hidden"
              >
                {selectedValues.size}
              </Badge>
              <div className="hidden space-x-1 lg:flex">
                {selectedValues.size > 1 ? (
                  <Badge
                    variant="muted"
                    className="rounded-sm px-1 font-normal"
                  >
                    {selectedValues.size} selected
                  </Badge>
                ) : (
                  <Badge
                    variant="muted"
                    className="rounded-sm px-1 font-normal"
                  >
                    {JSON.parse(Array.from(selectedValues)[0]).label}
                  </Badge>
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <DataTableFilterCommands
          id={id}
          onSelect={onSelect}
          selectedOptions={selectedOptions}
          title={title}
          options={options}
          customOptions={customOptions}
        />
      </PopoverContent>
    </Popover>
  );
}
