// https://protobuf.dev/programming-guides/style/

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        (unknown)
// source: wg/cosmo/graphqlmetrics/v1/graphqlmetrics.proto

package graphqlmetricsv1

import (
	_ "github.com/wundergraph/cosmo/graphqlmetrics/gen/proto/wg/cosmo/common"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type SchemaUsageInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	OperationDocument string                `protobuf:"bytes,1,opt,name=OperationDocument,proto3" json:"OperationDocument,omitempty"`
	TypeFieldMetrics  []*TypeFieldUsageInfo `protobuf:"bytes,2,rep,name=TypeFieldMetrics,proto3" json:"TypeFieldMetrics,omitempty"`
	OperationInfo     *OperationInfo        `protobuf:"bytes,3,opt,name=OperationInfo,proto3" json:"OperationInfo,omitempty"`
	RequestInfo       *RequestInfo          `protobuf:"bytes,4,opt,name=RequestInfo,proto3" json:"RequestInfo,omitempty"`
	Attributes        map[string]string     `protobuf:"bytes,6,rep,name=Attributes,proto3" json:"Attributes,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *SchemaUsageInfo) Reset() {
	*x = SchemaUsageInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SchemaUsageInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SchemaUsageInfo) ProtoMessage() {}

func (x *SchemaUsageInfo) ProtoReflect() protoreflect.Message {
	mi := &file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SchemaUsageInfo.ProtoReflect.Descriptor instead.
func (*SchemaUsageInfo) Descriptor() ([]byte, []int) {
	return file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_rawDescGZIP(), []int{0}
}

func (x *SchemaUsageInfo) GetOperationDocument() string {
	if x != nil {
		return x.OperationDocument
	}
	return ""
}

func (x *SchemaUsageInfo) GetTypeFieldMetrics() []*TypeFieldUsageInfo {
	if x != nil {
		return x.TypeFieldMetrics
	}
	return nil
}

func (x *SchemaUsageInfo) GetOperationInfo() *OperationInfo {
	if x != nil {
		return x.OperationInfo
	}
	return nil
}

func (x *SchemaUsageInfo) GetRequestInfo() *RequestInfo {
	if x != nil {
		return x.RequestInfo
	}
	return nil
}

func (x *SchemaUsageInfo) GetAttributes() map[string]string {
	if x != nil {
		return x.Attributes
	}
	return nil
}

type OperationInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	OperationHash string `protobuf:"bytes,1,opt,name=OperationHash,proto3" json:"OperationHash,omitempty"`
	OperationName string `protobuf:"bytes,2,opt,name=OperationName,proto3" json:"OperationName,omitempty"`
	OperationType string `protobuf:"bytes,3,opt,name=OperationType,proto3" json:"OperationType,omitempty"`
}

func (x *OperationInfo) Reset() {
	*x = OperationInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *OperationInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*OperationInfo) ProtoMessage() {}

func (x *OperationInfo) ProtoReflect() protoreflect.Message {
	mi := &file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use OperationInfo.ProtoReflect.Descriptor instead.
func (*OperationInfo) Descriptor() ([]byte, []int) {
	return file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_rawDescGZIP(), []int{1}
}

func (x *OperationInfo) GetOperationHash() string {
	if x != nil {
		return x.OperationHash
	}
	return ""
}

func (x *OperationInfo) GetOperationName() string {
	if x != nil {
		return x.OperationName
	}
	return ""
}

func (x *OperationInfo) GetOperationType() string {
	if x != nil {
		return x.OperationType
	}
	return ""
}

type RequestInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// FederatedGraphID and OrganizationID are transport over JWT
	RouterConfigVersion string `protobuf:"bytes,3,opt,name=RouterConfigVersion,proto3" json:"RouterConfigVersion,omitempty"`
}

func (x *RequestInfo) Reset() {
	*x = RequestInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RequestInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RequestInfo) ProtoMessage() {}

func (x *RequestInfo) ProtoReflect() protoreflect.Message {
	mi := &file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RequestInfo.ProtoReflect.Descriptor instead.
func (*RequestInfo) Descriptor() ([]byte, []int) {
	return file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_rawDescGZIP(), []int{2}
}

func (x *RequestInfo) GetRouterConfigVersion() string {
	if x != nil {
		return x.RouterConfigVersion
	}
	return ""
}

type TypeFieldUsageInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	OperationType string           `protobuf:"bytes,1,opt,name=OperationType,proto3" json:"OperationType,omitempty"`
	Path          []string         `protobuf:"bytes,2,rep,name=Path,proto3" json:"Path,omitempty"`
	TypeNames     []string         `protobuf:"bytes,3,rep,name=TypeNames,proto3" json:"TypeNames,omitempty"`
	Source        *TypeFieldSource `protobuf:"bytes,7,opt,name=Source,proto3" json:"Source,omitempty"`
	Count         uint64           `protobuf:"varint,8,opt,name=Count,proto3" json:"Count,omitempty"`
}

func (x *TypeFieldUsageInfo) Reset() {
	*x = TypeFieldUsageInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TypeFieldUsageInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TypeFieldUsageInfo) ProtoMessage() {}

func (x *TypeFieldUsageInfo) ProtoReflect() protoreflect.Message {
	mi := &file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TypeFieldUsageInfo.ProtoReflect.Descriptor instead.
func (*TypeFieldUsageInfo) Descriptor() ([]byte, []int) {
	return file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_rawDescGZIP(), []int{3}
}

func (x *TypeFieldUsageInfo) GetOperationType() string {
	if x != nil {
		return x.OperationType
	}
	return ""
}

func (x *TypeFieldUsageInfo) GetPath() []string {
	if x != nil {
		return x.Path
	}
	return nil
}

func (x *TypeFieldUsageInfo) GetTypeNames() []string {
	if x != nil {
		return x.TypeNames
	}
	return nil
}

func (x *TypeFieldUsageInfo) GetSource() *TypeFieldSource {
	if x != nil {
		return x.Source
	}
	return nil
}

func (x *TypeFieldUsageInfo) GetCount() uint64 {
	if x != nil {
		return x.Count
	}
	return 0
}

type TypeFieldSource struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	SubgraphID string `protobuf:"bytes,1,opt,name=SubgraphID,proto3" json:"SubgraphID,omitempty"`
}

func (x *TypeFieldSource) Reset() {
	*x = TypeFieldSource{}
	if protoimpl.UnsafeEnabled {
		mi := &file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TypeFieldSource) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TypeFieldSource) ProtoMessage() {}

func (x *TypeFieldSource) ProtoReflect() protoreflect.Message {
	mi := &file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TypeFieldSource.ProtoReflect.Descriptor instead.
func (*TypeFieldSource) Descriptor() ([]byte, []int) {
	return file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_rawDescGZIP(), []int{4}
}

func (x *TypeFieldSource) GetSubgraphID() string {
	if x != nil {
		return x.SubgraphID
	}
	return ""
}

type PublishGraphQLRequestMetricsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	SchemaUsage []*SchemaUsageInfo `protobuf:"bytes,1,rep,name=SchemaUsage,proto3" json:"SchemaUsage,omitempty"`
}

func (x *PublishGraphQLRequestMetricsRequest) Reset() {
	*x = PublishGraphQLRequestMetricsRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PublishGraphQLRequestMetricsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PublishGraphQLRequestMetricsRequest) ProtoMessage() {}

func (x *PublishGraphQLRequestMetricsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PublishGraphQLRequestMetricsRequest.ProtoReflect.Descriptor instead.
func (*PublishGraphQLRequestMetricsRequest) Descriptor() ([]byte, []int) {
	return file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_rawDescGZIP(), []int{5}
}

func (x *PublishGraphQLRequestMetricsRequest) GetSchemaUsage() []*SchemaUsageInfo {
	if x != nil {
		return x.SchemaUsage
	}
	return nil
}

type PublishOperationCoverageReportResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *PublishOperationCoverageReportResponse) Reset() {
	*x = PublishOperationCoverageReportResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PublishOperationCoverageReportResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PublishOperationCoverageReportResponse) ProtoMessage() {}

func (x *PublishOperationCoverageReportResponse) ProtoReflect() protoreflect.Message {
	mi := &file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PublishOperationCoverageReportResponse.ProtoReflect.Descriptor instead.
func (*PublishOperationCoverageReportResponse) Descriptor() ([]byte, []int) {
	return file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_rawDescGZIP(), []int{6}
}

var File_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto protoreflect.FileDescriptor

var file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_rawDesc = []byte{
	0x0a, 0x2f, 0x77, 0x67, 0x2f, 0x63, 0x6f, 0x73, 0x6d, 0x6f, 0x2f, 0x67, 0x72, 0x61, 0x70, 0x68,
	0x71, 0x6c, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2f, 0x76, 0x31, 0x2f, 0x67, 0x72, 0x61,
	0x70, 0x68, 0x71, 0x6c, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x1a, 0x77, 0x67, 0x2e, 0x63, 0x6f, 0x73, 0x6d, 0x6f, 0x2e, 0x67, 0x72, 0x61, 0x70,
	0x68, 0x71, 0x6c, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2e, 0x76, 0x31, 0x1a, 0x1c, 0x77,
	0x67, 0x2f, 0x63, 0x6f, 0x73, 0x6d, 0x6f, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x63,
	0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xd3, 0x03, 0x0a, 0x0f,
	0x53, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x55, 0x73, 0x61, 0x67, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x12,
	0x2c, 0x0a, 0x11, 0x4f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x6f, 0x63, 0x75,
	0x6d, 0x65, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x11, 0x4f, 0x70, 0x65, 0x72,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x12, 0x5a, 0x0a,
	0x10, 0x54, 0x79, 0x70, 0x65, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63,
	0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x2e, 0x2e, 0x77, 0x67, 0x2e, 0x63, 0x6f, 0x73,
	0x6d, 0x6f, 0x2e, 0x67, 0x72, 0x61, 0x70, 0x68, 0x71, 0x6c, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63,
	0x73, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x79, 0x70, 0x65, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x55, 0x73,
	0x61, 0x67, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x10, 0x54, 0x79, 0x70, 0x65, 0x46, 0x69, 0x65,
	0x6c, 0x64, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x12, 0x4f, 0x0a, 0x0d, 0x4f, 0x70, 0x65,
	0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x6e, 0x66, 0x6f, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x29, 0x2e, 0x77, 0x67, 0x2e, 0x63, 0x6f, 0x73, 0x6d, 0x6f, 0x2e, 0x67, 0x72, 0x61, 0x70,
	0x68, 0x71, 0x6c, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x4f, 0x70,
	0x65, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x0d, 0x4f, 0x70, 0x65,
	0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x49, 0x0a, 0x0b, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x27, 0x2e, 0x77, 0x67, 0x2e, 0x63, 0x6f, 0x73, 0x6d, 0x6f, 0x2e, 0x67, 0x72, 0x61, 0x70, 0x68,
	0x71, 0x6c, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x0b, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x5b, 0x0a, 0x0a, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75,
	0x74, 0x65, 0x73, 0x18, 0x06, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x3b, 0x2e, 0x77, 0x67, 0x2e, 0x63,
	0x6f, 0x73, 0x6d, 0x6f, 0x2e, 0x67, 0x72, 0x61, 0x70, 0x68, 0x71, 0x6c, 0x6d, 0x65, 0x74, 0x72,
	0x69, 0x63, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x55, 0x73, 0x61,
	0x67, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x2e, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65,
	0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x0a, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74,
	0x65, 0x73, 0x1a, 0x3d, 0x0a, 0x0f, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73,
	0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38,
	0x01, 0x22, 0x81, 0x01, 0x0a, 0x0d, 0x4f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49,
	0x6e, 0x66, 0x6f, 0x12, 0x24, 0x0a, 0x0d, 0x4f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x48, 0x61, 0x73, 0x68, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x4f, 0x70, 0x65, 0x72,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x48, 0x61, 0x73, 0x68, 0x12, 0x24, 0x0a, 0x0d, 0x4f, 0x70, 0x65,
	0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x4e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x0d, 0x4f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x4e, 0x61, 0x6d, 0x65, 0x12,
	0x24, 0x0a, 0x0d, 0x4f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x54, 0x79, 0x70, 0x65,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x4f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x54, 0x79, 0x70, 0x65, 0x22, 0x3f, 0x0a, 0x0b, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x49, 0x6e, 0x66, 0x6f, 0x12, 0x30, 0x0a, 0x13, 0x52, 0x6f, 0x75, 0x74, 0x65, 0x72, 0x43, 0x6f,
	0x6e, 0x66, 0x69, 0x67, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x13, 0x52, 0x6f, 0x75, 0x74, 0x65, 0x72, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x56,
	0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x22, 0xc7, 0x01, 0x0a, 0x12, 0x54, 0x79, 0x70, 0x65, 0x46,
	0x69, 0x65, 0x6c, 0x64, 0x55, 0x73, 0x61, 0x67, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x24, 0x0a,
	0x0d, 0x4f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x54, 0x79, 0x70, 0x65, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x4f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x54,
	0x79, 0x70, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x50, 0x61, 0x74, 0x68, 0x18, 0x02, 0x20, 0x03, 0x28,
	0x09, 0x52, 0x04, 0x50, 0x61, 0x74, 0x68, 0x12, 0x1c, 0x0a, 0x09, 0x54, 0x79, 0x70, 0x65, 0x4e,
	0x61, 0x6d, 0x65, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x09, 0x52, 0x09, 0x54, 0x79, 0x70, 0x65,
	0x4e, 0x61, 0x6d, 0x65, 0x73, 0x12, 0x43, 0x0a, 0x06, 0x53, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x18,
	0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2b, 0x2e, 0x77, 0x67, 0x2e, 0x63, 0x6f, 0x73, 0x6d, 0x6f,
	0x2e, 0x67, 0x72, 0x61, 0x70, 0x68, 0x71, 0x6c, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2e,
	0x76, 0x31, 0x2e, 0x54, 0x79, 0x70, 0x65, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x53, 0x6f, 0x75, 0x72,
	0x63, 0x65, 0x52, 0x06, 0x53, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x43, 0x6f,
	0x75, 0x6e, 0x74, 0x18, 0x08, 0x20, 0x01, 0x28, 0x04, 0x52, 0x05, 0x43, 0x6f, 0x75, 0x6e, 0x74,
	0x22, 0x31, 0x0a, 0x0f, 0x54, 0x79, 0x70, 0x65, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x53, 0x6f, 0x75,
	0x72, 0x63, 0x65, 0x12, 0x1e, 0x0a, 0x0a, 0x53, 0x75, 0x62, 0x67, 0x72, 0x61, 0x70, 0x68, 0x49,
	0x44, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x53, 0x75, 0x62, 0x67, 0x72, 0x61, 0x70,
	0x68, 0x49, 0x44, 0x22, 0x74, 0x0a, 0x23, 0x50, 0x75, 0x62, 0x6c, 0x69, 0x73, 0x68, 0x47, 0x72,
	0x61, 0x70, 0x68, 0x51, 0x4c, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x4d, 0x65, 0x74, 0x72,
	0x69, 0x63, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x4d, 0x0a, 0x0b, 0x53, 0x63,
	0x68, 0x65, 0x6d, 0x61, 0x55, 0x73, 0x61, 0x67, 0x65, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x2b, 0x2e, 0x77, 0x67, 0x2e, 0x63, 0x6f, 0x73, 0x6d, 0x6f, 0x2e, 0x67, 0x72, 0x61, 0x70, 0x68,
	0x71, 0x6c, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x63, 0x68,
	0x65, 0x6d, 0x61, 0x55, 0x73, 0x61, 0x67, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x0b, 0x53, 0x63,
	0x68, 0x65, 0x6d, 0x61, 0x55, 0x73, 0x61, 0x67, 0x65, 0x22, 0x28, 0x0a, 0x26, 0x50, 0x75, 0x62,
	0x6c, 0x69, 0x73, 0x68, 0x4f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x43, 0x6f, 0x76,
	0x65, 0x72, 0x61, 0x67, 0x65, 0x52, 0x65, 0x70, 0x6f, 0x72, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x32, 0xb8, 0x01, 0x0a, 0x15, 0x47, 0x72, 0x61, 0x70, 0x68, 0x51, 0x4c, 0x4d,
	0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x9e, 0x01,
	0x0a, 0x15, 0x50, 0x75, 0x62, 0x6c, 0x69, 0x73, 0x68, 0x47, 0x72, 0x61, 0x70, 0x68, 0x51, 0x4c,
	0x4d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x12, 0x3f, 0x2e, 0x77, 0x67, 0x2e, 0x63, 0x6f, 0x73,
	0x6d, 0x6f, 0x2e, 0x67, 0x72, 0x61, 0x70, 0x68, 0x71, 0x6c, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63,
	0x73, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x75, 0x62, 0x6c, 0x69, 0x73, 0x68, 0x47, 0x72, 0x61, 0x70,
	0x68, 0x51, 0x4c, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63,
	0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x42, 0x2e, 0x77, 0x67, 0x2e, 0x63, 0x6f,
	0x73, 0x6d, 0x6f, 0x2e, 0x67, 0x72, 0x61, 0x70, 0x68, 0x71, 0x6c, 0x6d, 0x65, 0x74, 0x72, 0x69,
	0x63, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x75, 0x62, 0x6c, 0x69, 0x73, 0x68, 0x4f, 0x70, 0x65,
	0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x43, 0x6f, 0x76, 0x65, 0x72, 0x61, 0x67, 0x65, 0x52, 0x65,
	0x70, 0x6f, 0x72, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0xa3,
	0x02, 0x0a, 0x1e, 0x63, 0x6f, 0x6d, 0x2e, 0x77, 0x67, 0x2e, 0x63, 0x6f, 0x73, 0x6d, 0x6f, 0x2e,
	0x67, 0x72, 0x61, 0x70, 0x68, 0x71, 0x6c, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2e, 0x76,
	0x31, 0x42, 0x13, 0x47, 0x72, 0x61, 0x70, 0x68, 0x71, 0x6c, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63,
	0x73, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x61, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62,
	0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x77, 0x75, 0x6e, 0x64, 0x65, 0x72, 0x67, 0x72, 0x61, 0x70, 0x68,
	0x2f, 0x63, 0x6f, 0x73, 0x6d, 0x6f, 0x2f, 0x67, 0x72, 0x61, 0x70, 0x68, 0x71, 0x6c, 0x6d, 0x65,
	0x74, 0x72, 0x69, 0x63, 0x73, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f,
	0x77, 0x67, 0x2f, 0x63, 0x6f, 0x73, 0x6d, 0x6f, 0x2f, 0x67, 0x72, 0x61, 0x70, 0x68, 0x71, 0x6c,
	0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2f, 0x76, 0x31, 0x3b, 0x67, 0x72, 0x61, 0x70, 0x68,
	0x71, 0x6c, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x57, 0x43,
	0x47, 0xaa, 0x02, 0x1a, 0x57, 0x67, 0x2e, 0x43, 0x6f, 0x73, 0x6d, 0x6f, 0x2e, 0x47, 0x72, 0x61,
	0x70, 0x68, 0x71, 0x6c, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2e, 0x56, 0x31, 0xca, 0x02,
	0x1a, 0x57, 0x67, 0x5c, 0x43, 0x6f, 0x73, 0x6d, 0x6f, 0x5c, 0x47, 0x72, 0x61, 0x70, 0x68, 0x71,
	0x6c, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x26, 0x57, 0x67,
	0x5c, 0x43, 0x6f, 0x73, 0x6d, 0x6f, 0x5c, 0x47, 0x72, 0x61, 0x70, 0x68, 0x71, 0x6c, 0x6d, 0x65,
	0x74, 0x72, 0x69, 0x63, 0x73, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61,
	0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x1d, 0x57, 0x67, 0x3a, 0x3a, 0x43, 0x6f, 0x73, 0x6d, 0x6f,
	0x3a, 0x3a, 0x47, 0x72, 0x61, 0x70, 0x68, 0x71, 0x6c, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73,
	0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_rawDescOnce sync.Once
	file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_rawDescData = file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_rawDesc
)

func file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_rawDescGZIP() []byte {
	file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_rawDescOnce.Do(func() {
		file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_rawDescData = protoimpl.X.CompressGZIP(file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_rawDescData)
	})
	return file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_rawDescData
}

var file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_msgTypes = make([]protoimpl.MessageInfo, 8)
var file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_goTypes = []interface{}{
	(*SchemaUsageInfo)(nil),                        // 0: wg.cosmo.graphqlmetrics.v1.SchemaUsageInfo
	(*OperationInfo)(nil),                          // 1: wg.cosmo.graphqlmetrics.v1.OperationInfo
	(*RequestInfo)(nil),                            // 2: wg.cosmo.graphqlmetrics.v1.RequestInfo
	(*TypeFieldUsageInfo)(nil),                     // 3: wg.cosmo.graphqlmetrics.v1.TypeFieldUsageInfo
	(*TypeFieldSource)(nil),                        // 4: wg.cosmo.graphqlmetrics.v1.TypeFieldSource
	(*PublishGraphQLRequestMetricsRequest)(nil),    // 5: wg.cosmo.graphqlmetrics.v1.PublishGraphQLRequestMetricsRequest
	(*PublishOperationCoverageReportResponse)(nil), // 6: wg.cosmo.graphqlmetrics.v1.PublishOperationCoverageReportResponse
	nil, // 7: wg.cosmo.graphqlmetrics.v1.SchemaUsageInfo.AttributesEntry
}
var file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_depIdxs = []int32{
	3, // 0: wg.cosmo.graphqlmetrics.v1.SchemaUsageInfo.TypeFieldMetrics:type_name -> wg.cosmo.graphqlmetrics.v1.TypeFieldUsageInfo
	1, // 1: wg.cosmo.graphqlmetrics.v1.SchemaUsageInfo.OperationInfo:type_name -> wg.cosmo.graphqlmetrics.v1.OperationInfo
	2, // 2: wg.cosmo.graphqlmetrics.v1.SchemaUsageInfo.RequestInfo:type_name -> wg.cosmo.graphqlmetrics.v1.RequestInfo
	7, // 3: wg.cosmo.graphqlmetrics.v1.SchemaUsageInfo.Attributes:type_name -> wg.cosmo.graphqlmetrics.v1.SchemaUsageInfo.AttributesEntry
	4, // 4: wg.cosmo.graphqlmetrics.v1.TypeFieldUsageInfo.Source:type_name -> wg.cosmo.graphqlmetrics.v1.TypeFieldSource
	0, // 5: wg.cosmo.graphqlmetrics.v1.PublishGraphQLRequestMetricsRequest.SchemaUsage:type_name -> wg.cosmo.graphqlmetrics.v1.SchemaUsageInfo
	5, // 6: wg.cosmo.graphqlmetrics.v1.GraphQLMetricsService.PublishGraphQLMetrics:input_type -> wg.cosmo.graphqlmetrics.v1.PublishGraphQLRequestMetricsRequest
	6, // 7: wg.cosmo.graphqlmetrics.v1.GraphQLMetricsService.PublishGraphQLMetrics:output_type -> wg.cosmo.graphqlmetrics.v1.PublishOperationCoverageReportResponse
	7, // [7:8] is the sub-list for method output_type
	6, // [6:7] is the sub-list for method input_type
	6, // [6:6] is the sub-list for extension type_name
	6, // [6:6] is the sub-list for extension extendee
	0, // [0:6] is the sub-list for field type_name
}

func init() { file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_init() }
func file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_init() {
	if File_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SchemaUsageInfo); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*OperationInfo); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RequestInfo); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TypeFieldUsageInfo); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TypeFieldSource); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PublishGraphQLRequestMetricsRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PublishOperationCoverageReportResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   8,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_goTypes,
		DependencyIndexes: file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_depIdxs,
		MessageInfos:      file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_msgTypes,
	}.Build()
	File_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto = out.File
	file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_rawDesc = nil
	file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_goTypes = nil
	file_wg_cosmo_graphqlmetrics_v1_graphqlmetrics_proto_depIdxs = nil
}
