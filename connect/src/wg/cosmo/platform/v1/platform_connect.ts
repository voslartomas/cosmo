// https://protobuf.dev/programming-guides/style/

// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=ts"
// @generated from file wg/cosmo/platform/v1/platform.proto (package wg.cosmo.platform.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CheckFederatedGraphRequest, CheckFederatedGraphResponse, CheckSubgraphSchemaRequest, CheckSubgraphSchemaResponse, CreateAPIKeyRequest, CreateAPIKeyResponse, CreateFederatedGraphRequest, CreateFederatedGraphResponse, CreateFederatedGraphTokenRequest, CreateFederatedGraphTokenResponse, CreateFederatedSubgraphRequest, CreateFederatedSubgraphResponse, CreateIntegrationRequest, CreateIntegrationResponse, CreateOIDCProviderRequest, CreateOIDCProviderResponse, CreateOrganizationWebhookConfigRequest, CreateOrganizationWebhookConfigResponse, DeleteAPIKeyRequest, DeleteAPIKeyResponse, DeleteFederatedGraphRequest, DeleteFederatedGraphResponse, DeleteFederatedSubgraphRequest, DeleteFederatedSubgraphResponse, DeleteIntegrationRequest, DeleteIntegrationResponse, DeleteOIDCProviderRequest, DeleteOIDCProviderResponse, DeleteOrganizationRequest, DeleteOrganizationResponse, DeleteOrganizationWebhookConfigRequest, DeleteOrganizationWebhookConfigResponse, DeleteRouterTokenRequest, DeleteRouterTokenResponse, FixSubgraphSchemaRequest, FixSubgraphSchemaResponse, ForceCheckSuccessRequest, ForceCheckSuccessResponse, GetAnalyticsViewRequest, GetAnalyticsViewResponse, GetAPIKeysRequest, GetAPIKeysResponse, GetCheckDetailsRequest, GetCheckDetailsResponse, GetCheckOperationsRequest, GetCheckOperationsResponse, GetChecksByFederatedGraphNameRequest, GetChecksByFederatedGraphNameResponse, GetCheckSummaryRequest, GetCheckSummaryResponse, GetClientsRequest, GetClientsResponse, GetDashboardAnalyticsViewRequest, GetDashboardAnalyticsViewResponse, GetFederatedGraphByNameRequest, GetFederatedGraphByNameResponse, GetFederatedGraphChangelogRequest, GetFederatedGraphChangelogResponse, GetFederatedGraphSDLByNameRequest, GetFederatedGraphSDLByNameResponse, GetFederatedGraphsRequest, GetFederatedGraphsResponse, GetFieldUsageRequest, GetFieldUsageResponse, GetGraphMetricsRequest, GetGraphMetricsResponse, GetLatestValidSubgraphSDLByNameRequest, GetLatestValidSubgraphSDLByNameResponse, GetMetricsErrorRateRequest, GetMetricsErrorRateResponse, GetOIDCProviderRequest, GetOIDCProviderResponse, GetOperationContentRequest, GetOperationContentResponse, GetOrganizationIntegrationsRequest, GetOrganizationIntegrationsResponse, GetOrganizationMembersRequest, GetOrganizationMembersResponse, GetOrganizationRequestsCountRequest, GetOrganizationRequestsCountResponse, GetOrganizationWebhookConfigsRequest, GetOrganizationWebhookConfigsResponse, GetOrganizationWebhookMetaRequest, GetOrganizationWebhookMetaResponse, GetRouterTokensRequest, GetRouterTokensResponse, GetSubgraphByNameRequest, GetSubgraphByNameResponse, GetSubgraphsRequest, GetSubgraphsResponse, GetTraceRequest, GetTraceResponse, InviteUserRequest, InviteUserResponse, IsGitHubAppInstalledRequest, IsGitHubAppInstalledResponse, LeaveOrganizationRequest, LeaveOrganizationResponse, MigrateFromApolloRequest, MigrateFromApolloResponse, PublishFederatedSubgraphRequest, PublishFederatedSubgraphResponse, PublishPersistedOperationsRequest, PublishPersistedOperationsResponse, RemoveInvitationRequest, RemoveInvitationResponse, UpdateFederatedGraphRequest, UpdateFederatedGraphResponse, UpdateIntegrationConfigRequest, UpdateIntegrationConfigResponse, UpdateOrganizationDetailsRequest, UpdateOrganizationDetailsResponse, UpdateOrganizationWebhookConfigRequest, UpdateOrganizationWebhookConfigResponse, UpdateOrgMemberRoleRequest, UpdateOrgMemberRoleResponse, UpdateSubgraphRequest, UpdateSubgraphResponse, WhoAmIRequest, WhoAmIResponse } from "./platform_pb.js";
import { MethodIdempotency, MethodKind } from "@bufbuild/protobuf";
import { GetConfigRequest, GetConfigResponse } from "../../node/v1/node_pb.js";

/**
 * @generated from service wg.cosmo.platform.v1.PlatformService
 */
export const PlatformService = {
  typeName: "wg.cosmo.platform.v1.PlatformService",
  methods: {
    /**
     * CreateFederatedGraph creates a federated graph on the control plane.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.CreateFederatedGraph
     */
    createFederatedGraph: {
      name: "CreateFederatedGraph",
      I: CreateFederatedGraphRequest,
      O: CreateFederatedGraphResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CreateFederatedSubgraph creates a federated subgraph on the control plane.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.CreateFederatedSubgraph
     */
    createFederatedSubgraph: {
      name: "CreateFederatedSubgraph",
      I: CreateFederatedSubgraphRequest,
      O: CreateFederatedSubgraphResponse,
      kind: MethodKind.Unary,
    },
    /**
     * PublishFederatedSubgraph pushes the schema of the subgraph to the control plane.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.PublishFederatedSubgraph
     */
    publishFederatedSubgraph: {
      name: "PublishFederatedSubgraph",
      I: PublishFederatedSubgraphRequest,
      O: PublishFederatedSubgraphResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteFederatedGraph deletes a federated graph from the control plane.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.DeleteFederatedGraph
     */
    deleteFederatedGraph: {
      name: "DeleteFederatedGraph",
      I: DeleteFederatedGraphRequest,
      O: DeleteFederatedGraphResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteFederatedSubgraph deletes a federated subgraph from the control plane.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.DeleteFederatedSubgraph
     */
    deleteFederatedSubgraph: {
      name: "DeleteFederatedSubgraph",
      I: DeleteFederatedSubgraphRequest,
      O: DeleteFederatedSubgraphResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CheckSubgraphSchema checks if the schema is valid and if it can be composed without conflicts with the provided new subgraph schema.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.CheckSubgraphSchema
     */
    checkSubgraphSchema: {
      name: "CheckSubgraphSchema",
      I: CheckSubgraphSchemaRequest,
      O: CheckSubgraphSchemaResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.FixSubgraphSchema
     */
    fixSubgraphSchema: {
      name: "FixSubgraphSchema",
      I: FixSubgraphSchemaRequest,
      O: FixSubgraphSchemaResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateFederatedGraph updates a federated graph with new labels and routing url
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.UpdateFederatedGraph
     */
    updateFederatedGraph: {
      name: "UpdateFederatedGraph",
      I: UpdateFederatedGraphRequest,
      O: UpdateFederatedGraphResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateSubgraph updates a subgraph with new labels and routing url
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.UpdateSubgraph
     */
    updateSubgraph: {
      name: "UpdateSubgraph",
      I: UpdateSubgraphRequest,
      O: UpdateSubgraphResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CheckFederatedGraph checks if the federated graph can be composed with the new labels provided.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.CheckFederatedGraph
     */
    checkFederatedGraph: {
      name: "CheckFederatedGraph",
      I: CheckFederatedGraphRequest,
      O: CheckFederatedGraphResponse,
      kind: MethodKind.Unary,
    },
    /**
     * WhoAmI returns the identity of the user currently logged in.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.WhoAmI
     */
    whoAmI: {
      name: "WhoAmI",
      I: WhoAmIRequest,
      O: WhoAmIResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetRouterTokens returns the router tokens of a federated graph.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetRouterTokens
     */
    getRouterTokens: {
      name: "GetRouterTokens",
      I: GetRouterTokensRequest,
      O: GetRouterTokensResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteRouterToken deletes the router token of a federated graph.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.DeleteRouterToken
     */
    deleteRouterToken: {
      name: "DeleteRouterToken",
      I: DeleteRouterTokenRequest,
      O: DeleteRouterTokenResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Add persisted operations
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.PublishPersistedOperations
     */
    publishPersistedOperations: {
      name: "PublishPersistedOperations",
      I: PublishPersistedOperationsRequest,
      O: PublishPersistedOperationsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetFederatedGraphs returns the list of federated graphs.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetFederatedGraphs
     */
    getFederatedGraphs: {
      name: "GetFederatedGraphs",
      I: GetFederatedGraphsRequest,
      O: GetFederatedGraphsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetFederatedGraphByName returns the federated graph by name.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetFederatedGraphByName
     */
    getFederatedGraphByName: {
      name: "GetFederatedGraphByName",
      I: GetFederatedGraphByNameRequest,
      O: GetFederatedGraphByNameResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetFederatedGraphSDLByName returns the latest valid SDL of the federated graph by name.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetFederatedGraphSDLByName
     */
    getFederatedGraphSDLByName: {
      name: "GetFederatedGraphSDLByName",
      I: GetFederatedGraphSDLByNameRequest,
      O: GetFederatedGraphSDLByNameResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetSubgraphs returns the list of subgraphs.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetSubgraphs
     */
    getSubgraphs: {
      name: "GetSubgraphs",
      I: GetSubgraphsRequest,
      O: GetSubgraphsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetSubgraphByName returns the subgraph by name.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetSubgraphByName
     */
    getSubgraphByName: {
      name: "GetSubgraphByName",
      I: GetSubgraphByNameRequest,
      O: GetSubgraphByNameResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetFederatedSubgraphSDLByName returns the SDL of the subgraph by name.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetLatestValidSubgraphSDLByName
     */
    getLatestValidSubgraphSDLByName: {
      name: "GetLatestValidSubgraphSDLByName",
      I: GetLatestValidSubgraphSDLByNameRequest,
      O: GetLatestValidSubgraphSDLByNameResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetChecksByFederatedGraphName return schema and composition checks that concern a federated graph
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetChecksByFederatedGraphName
     */
    getChecksByFederatedGraphName: {
      name: "GetChecksByFederatedGraphName",
      I: GetChecksByFederatedGraphNameRequest,
      O: GetChecksByFederatedGraphNameResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetCheckSummary returns top level information about a schema check
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetCheckSummary
     */
    getCheckSummary: {
      name: "GetCheckSummary",
      I: GetCheckSummaryRequest,
      O: GetCheckSummaryResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetCheckDetails returns changes and composition errors recorded for a check
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetCheckDetails
     */
    getCheckDetails: {
      name: "GetCheckDetails",
      I: GetCheckDetailsRequest,
      O: GetCheckDetailsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetCheckOperations returns affected operations for a check
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetCheckOperations
     */
    getCheckOperations: {
      name: "GetCheckOperations",
      I: GetCheckOperationsRequest,
      O: GetCheckOperationsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ForceCheckSuccess forces a failed check to be marked as successful
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.ForceCheckSuccess
     */
    forceCheckSuccess: {
      name: "ForceCheckSuccess",
      I: ForceCheckSuccessRequest,
      O: ForceCheckSuccessResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetOperationContent returns the operation body by searching using the hash
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetOperationContent
     */
    getOperationContent: {
      name: "GetOperationContent",
      I: GetOperationContentRequest,
      O: GetOperationContentResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetFederatedGraphChangelog returns the changelog of the federated graph.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetFederatedGraphChangelog
     */
    getFederatedGraphChangelog: {
      name: "GetFederatedGraphChangelog",
      I: GetFederatedGraphChangelogRequest,
      O: GetFederatedGraphChangelogResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CreateFederatedGraphToken creates a federated graph token that is consumed by the router to authenticate requests.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.CreateFederatedGraphToken
     */
    createFederatedGraphToken: {
      name: "CreateFederatedGraphToken",
      I: CreateFederatedGraphTokenRequest,
      O: CreateFederatedGraphTokenResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetOrganizationMembers returns the list of organization members
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetOrganizationMembers
     */
    getOrganizationMembers: {
      name: "GetOrganizationMembers",
      I: GetOrganizationMembersRequest,
      O: GetOrganizationMembersResponse,
      kind: MethodKind.Unary,
    },
    /**
     * InviteUser invites an user to join the organization
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.InviteUser
     */
    inviteUser: {
      name: "InviteUser",
      I: InviteUserRequest,
      O: InviteUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetAPIKeys returns a list of API keys of the organization
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetAPIKeys
     */
    getAPIKeys: {
      name: "GetAPIKeys",
      I: GetAPIKeysRequest,
      O: GetAPIKeysResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CreateAPIKey creates an API key for the organization
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.CreateAPIKey
     */
    createAPIKey: {
      name: "CreateAPIKey",
      I: CreateAPIKeyRequest,
      O: CreateAPIKeyResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteAPIKey deletes an API key for the organization
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.DeleteAPIKey
     */
    deleteAPIKey: {
      name: "DeleteAPIKey",
      I: DeleteAPIKeyRequest,
      O: DeleteAPIKeyResponse,
      kind: MethodKind.Unary,
    },
    /**
     * RemoveOrganizationMember removes the user from the organization
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.RemoveInvitation
     */
    removeInvitation: {
      name: "RemoveInvitation",
      I: RemoveInvitationRequest,
      O: RemoveInvitationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetLatestValidRouterConfig returns the router config for the federated graph
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetLatestValidRouterConfig
     */
    getLatestValidRouterConfig: {
      name: "GetLatestValidRouterConfig",
      I: GetConfigRequest,
      O: GetConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * MigrateFromApollo migrates the graphs from apollo to cosmo
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.MigrateFromApollo
     */
    migrateFromApollo: {
      name: "MigrateFromApollo",
      I: MigrateFromApolloRequest,
      O: MigrateFromApolloResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CreateOrganizationWebhookConfig create a new webhook config for the organization
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.CreateOrganizationWebhookConfig
     */
    createOrganizationWebhookConfig: {
      name: "CreateOrganizationWebhookConfig",
      I: CreateOrganizationWebhookConfigRequest,
      O: CreateOrganizationWebhookConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetOrganizationWebhookConfigs returns all webhooks for the organization
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetOrganizationWebhookConfigs
     */
    getOrganizationWebhookConfigs: {
      name: "GetOrganizationWebhookConfigs",
      I: GetOrganizationWebhookConfigsRequest,
      O: GetOrganizationWebhookConfigsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetOrganizationWebhookMeta returns the meta data for a particular webhook
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetOrganizationWebhookMeta
     */
    getOrganizationWebhookMeta: {
      name: "GetOrganizationWebhookMeta",
      I: GetOrganizationWebhookMetaRequest,
      O: GetOrganizationWebhookMetaResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateOrganizationWebhookConfig updates an existing webhook for the organization
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.UpdateOrganizationWebhookConfig
     */
    updateOrganizationWebhookConfig: {
      name: "UpdateOrganizationWebhookConfig",
      I: UpdateOrganizationWebhookConfigRequest,
      O: UpdateOrganizationWebhookConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteOrganizationWebhookConfig deletes an organization webhook
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.DeleteOrganizationWebhookConfig
     */
    deleteOrganizationWebhookConfig: {
      name: "DeleteOrganizationWebhookConfig",
      I: DeleteOrganizationWebhookConfigRequest,
      O: DeleteOrganizationWebhookConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CreateIntegration create a new integration for the organization
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.CreateIntegration
     */
    createIntegration: {
      name: "CreateIntegration",
      I: CreateIntegrationRequest,
      O: CreateIntegrationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetOrganizationIntegrations returns all integrations of the organization
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetOrganizationIntegrations
     */
    getOrganizationIntegrations: {
      name: "GetOrganizationIntegrations",
      I: GetOrganizationIntegrationsRequest,
      O: GetOrganizationIntegrationsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateIntegrationConfig updates an existing integration of the organization
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.UpdateIntegrationConfig
     */
    updateIntegrationConfig: {
      name: "UpdateIntegrationConfig",
      I: UpdateIntegrationConfigRequest,
      O: UpdateIntegrationConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteIntegration deletes an organization webhintegrationook
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.DeleteIntegration
     */
    deleteIntegration: {
      name: "DeleteIntegration",
      I: DeleteIntegrationRequest,
      O: DeleteIntegrationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteOrganization deletes an organization 
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.DeleteOrganization
     */
    deleteOrganization: {
      name: "DeleteOrganization",
      I: DeleteOrganizationRequest,
      O: DeleteOrganizationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * LeaveOrganization removes a member from the organization
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.LeaveOrganization
     */
    leaveOrganization: {
      name: "LeaveOrganization",
      I: LeaveOrganizationRequest,
      O: LeaveOrganizationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateOrganizationDetails updates the name and slug of the organization
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.UpdateOrganizationDetails
     */
    updateOrganizationDetails: {
      name: "UpdateOrganizationDetails",
      I: UpdateOrganizationDetailsRequest,
      O: UpdateOrganizationDetailsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateOrgMemberRole updates the role of an org member
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.UpdateOrgMemberRole
     */
    updateOrgMemberRole: {
      name: "UpdateOrgMemberRole",
      I: UpdateOrgMemberRoleRequest,
      O: UpdateOrgMemberRoleResponse,
      kind: MethodKind.Unary,
    },
    /**
     * IsGitHubAppInstalled checks if the cosmo github app is installed to a repository
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.IsGitHubAppInstalled
     */
    isGitHubAppInstalled: {
      name: "IsGitHubAppInstalled",
      I: IsGitHubAppInstalledRequest,
      O: IsGitHubAppInstalledResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CreateOIDCProvider adds an oidc provider to the organization
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.CreateOIDCProvider
     */
    createOIDCProvider: {
      name: "CreateOIDCProvider",
      I: CreateOIDCProviderRequest,
      O: CreateOIDCProviderResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetOIDCProvider gets the oidc provider connected the organization
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetOIDCProvider
     */
    getOIDCProvider: {
      name: "GetOIDCProvider",
      I: GetOIDCProviderRequest,
      O: GetOIDCProviderResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteOIDCProvider deletes the oidc provider connected the organization
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.DeleteOIDCProvider
     */
    deleteOIDCProvider: {
      name: "DeleteOIDCProvider",
      I: DeleteOIDCProviderRequest,
      O: DeleteOIDCProviderResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetClients returns all the clients of the organization
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetClients
     */
    getClients: {
      name: "GetClients",
      I: GetClientsRequest,
      O: GetClientsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetAnalyticsView
     */
    getAnalyticsView: {
      name: "GetAnalyticsView",
      I: GetAnalyticsViewRequest,
      O: GetAnalyticsViewResponse,
      kind: MethodKind.Unary,
      idempotency: MethodIdempotency.NoSideEffects,
    },
    /**
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetDashboardAnalyticsView
     */
    getDashboardAnalyticsView: {
      name: "GetDashboardAnalyticsView",
      I: GetDashboardAnalyticsViewRequest,
      O: GetDashboardAnalyticsViewResponse,
      kind: MethodKind.Unary,
      idempotency: MethodIdempotency.NoSideEffects,
    },
    /**
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetTrace
     */
    getTrace: {
      name: "GetTrace",
      I: GetTraceRequest,
      O: GetTraceResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetGraphMetrics
     */
    getGraphMetrics: {
      name: "GetGraphMetrics",
      I: GetGraphMetricsRequest,
      O: GetGraphMetricsResponse,
      kind: MethodKind.Unary,
      idempotency: MethodIdempotency.NoSideEffects,
    },
    /**
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetMetricsErrorRate
     */
    getMetricsErrorRate: {
      name: "GetMetricsErrorRate",
      I: GetMetricsErrorRateRequest,
      O: GetMetricsErrorRateResponse,
      kind: MethodKind.Unary,
      idempotency: MethodIdempotency.NoSideEffects,
    },
    /**
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetFieldUsage
     */
    getFieldUsage: {
      name: "GetFieldUsage",
      I: GetFieldUsageRequest,
      O: GetFieldUsageResponse,
      kind: MethodKind.Unary,
      idempotency: MethodIdempotency.NoSideEffects,
    },
    /**
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetOrganizationRequestsCount
     */
    getOrganizationRequestsCount: {
      name: "GetOrganizationRequestsCount",
      I: GetOrganizationRequestsCountRequest,
      O: GetOrganizationRequestsCountResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

