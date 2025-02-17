// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

import (
	"fmt"
	"io"
	"strconv"
)

type IProduct interface {
	IsIProduct()
	GetUpc() string
	GetEngineers() []*Employee
}

type Identifiable interface {
	IsIdentifiable()
	GetID() int
}

type Products interface {
	IsProducts()
}

type RoleType interface {
	IsRoleType()
	GetDepartment() Department
	GetTitle() []string
}

type Consultancy struct {
	Upc  string    `json:"upc"`
	Lead *Employee `json:"lead"`
	Test string    `json:"test"`
}

func (Consultancy) IsProducts() {}

func (Consultancy) IsEntity() {}

type Cosmo struct {
	Upc       string      `json:"upc"`
	Engineers []*Employee `json:"engineers"`
	Lead      *Employee   `json:"lead"`
}

func (Cosmo) IsProducts() {}

func (Cosmo) IsIProduct()         {}
func (this Cosmo) GetUpc() string { return this.Upc }
func (this Cosmo) GetEngineers() []*Employee {
	if this.Engineers == nil {
		return nil
	}
	interfaceSlice := make([]*Employee, 0, len(this.Engineers))
	for _, concrete := range this.Engineers {
		interfaceSlice = append(interfaceSlice, concrete)
	}
	return interfaceSlice
}

func (Cosmo) IsEntity() {}

type Details struct {
	Forename string  `json:"forename"`
	Location Country `json:"location"`
	Surname  string  `json:"surname"`
}

type Employee struct {
	Details *Details `json:"details"`
	ID      int      `json:"id"`
	Role    RoleType `json:"role"`
	Notes   string   `json:"notes"`
}

func (Employee) IsIdentifiable() {}
func (this Employee) GetID() int { return this.ID }

func (Employee) IsEntity() {}

type Engineer struct {
	Department   Department   `json:"department"`
	EngineerType EngineerType `json:"engineerType"`
	Title        []string     `json:"title"`
}

func (Engineer) IsRoleType()                    {}
func (this Engineer) GetDepartment() Department { return this.Department }
func (this Engineer) GetTitle() []string {
	if this.Title == nil {
		return nil
	}
	interfaceSlice := make([]string, 0, len(this.Title))
	for _, concrete := range this.Title {
		interfaceSlice = append(interfaceSlice, concrete)
	}
	return interfaceSlice
}

type Marketer struct {
	Department Department `json:"department"`
	Title      []string   `json:"title"`
}

func (Marketer) IsRoleType()                    {}
func (this Marketer) GetDepartment() Department { return this.Department }
func (this Marketer) GetTitle() []string {
	if this.Title == nil {
		return nil
	}
	interfaceSlice := make([]string, 0, len(this.Title))
	for _, concrete := range this.Title {
		interfaceSlice = append(interfaceSlice, concrete)
	}
	return interfaceSlice
}

type Operator struct {
	Department   Department      `json:"department"`
	OperatorType []OperationType `json:"operatorType"`
	Title        []string        `json:"title"`
}

func (Operator) IsRoleType()                    {}
func (this Operator) GetDepartment() Department { return this.Department }
func (this Operator) GetTitle() []string {
	if this.Title == nil {
		return nil
	}
	interfaceSlice := make([]string, 0, len(this.Title))
	for _, concrete := range this.Title {
		interfaceSlice = append(interfaceSlice, concrete)
	}
	return interfaceSlice
}

type Sdk struct {
	Upc       string      `json:"upc"`
	Engineers []*Employee `json:"engineers"`
	Owner     *Employee   `json:"owner"`
}

func (Sdk) IsProducts() {}

func (Sdk) IsIProduct()         {}
func (this Sdk) GetUpc() string { return this.Upc }
func (this Sdk) GetEngineers() []*Employee {
	if this.Engineers == nil {
		return nil
	}
	interfaceSlice := make([]*Employee, 0, len(this.Engineers))
	for _, concrete := range this.Engineers {
		interfaceSlice = append(interfaceSlice, concrete)
	}
	return interfaceSlice
}

func (Sdk) IsEntity() {}

type Time struct {
	UnixTime  int    `json:"unixTime"`
	TimeStamp string `json:"timeStamp"`
}

type Country string

const (
	CountryAmerica     Country = "AMERICA"
	CountryEngland     Country = "ENGLAND"
	CountryGermany     Country = "GERMANY"
	CountryIndia       Country = "INDIA"
	CountryNetherlands Country = "NETHERLANDS"
	CountryPortugal    Country = "PORTUGAL"
	CountrySpain       Country = "SPAIN"
	CountryUkraine     Country = "UKRAINE"
)

var AllCountry = []Country{
	CountryAmerica,
	CountryEngland,
	CountryGermany,
	CountryIndia,
	CountryNetherlands,
	CountryPortugal,
	CountrySpain,
	CountryUkraine,
}

func (e Country) IsValid() bool {
	switch e {
	case CountryAmerica, CountryEngland, CountryGermany, CountryIndia, CountryNetherlands, CountryPortugal, CountrySpain, CountryUkraine:
		return true
	}
	return false
}

func (e Country) String() string {
	return string(e)
}

func (e *Country) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = Country(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid Country", str)
	}
	return nil
}

func (e Country) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type Department string

const (
	DepartmentEngineering Department = "ENGINEERING"
	DepartmentMarketing   Department = "MARKETING"
	DepartmentOperations  Department = "OPERATIONS"
)

var AllDepartment = []Department{
	DepartmentEngineering,
	DepartmentMarketing,
	DepartmentOperations,
}

func (e Department) IsValid() bool {
	switch e {
	case DepartmentEngineering, DepartmentMarketing, DepartmentOperations:
		return true
	}
	return false
}

func (e Department) String() string {
	return string(e)
}

func (e *Department) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = Department(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid Department", str)
	}
	return nil
}

func (e Department) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type EngineerType string

const (
	EngineerTypeFrontend  EngineerType = "FRONTEND"
	EngineerTypeBackend   EngineerType = "BACKEND"
	EngineerTypeFullstack EngineerType = "FULLSTACK"
)

var AllEngineerType = []EngineerType{
	EngineerTypeFrontend,
	EngineerTypeBackend,
	EngineerTypeFullstack,
}

func (e EngineerType) IsValid() bool {
	switch e {
	case EngineerTypeFrontend, EngineerTypeBackend, EngineerTypeFullstack:
		return true
	}
	return false
}

func (e EngineerType) String() string {
	return string(e)
}

func (e *EngineerType) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = EngineerType(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid EngineerType", str)
	}
	return nil
}

func (e EngineerType) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type OperationType string

const (
	OperationTypeFinance        OperationType = "FINANCE"
	OperationTypeHumanResources OperationType = "HUMAN_RESOURCES"
)

var AllOperationType = []OperationType{
	OperationTypeFinance,
	OperationTypeHumanResources,
}

func (e OperationType) IsValid() bool {
	switch e {
	case OperationTypeFinance, OperationTypeHumanResources:
		return true
	}
	return false
}

func (e OperationType) String() string {
	return string(e)
}

func (e *OperationType) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = OperationType(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid OperationType", str)
	}
	return nil
}

func (e OperationType) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}
