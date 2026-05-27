import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ContractModel = runtime.Types.Result.DefaultSelection<Prisma.$ContractPayload>;
export type AggregateContract = {
    _count: ContractCountAggregateOutputType | null;
    _avg: ContractAvgAggregateOutputType | null;
    _sum: ContractSumAggregateOutputType | null;
    _min: ContractMinAggregateOutputType | null;
    _max: ContractMaxAggregateOutputType | null;
};
export type ContractAvgAggregateOutputType = {
    monthlyPrice: number | null;
    depositAmount: number | null;
};
export type ContractSumAggregateOutputType = {
    monthlyPrice: number | null;
    depositAmount: number | null;
};
export type ContractMinAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    landlordId: string | null;
    propertyId: string | null;
    startDate: Date | null;
    endDate: Date | null;
    monthlyPrice: number | null;
    depositAmount: number | null;
    eSignatureUrl: string | null;
    status: $Enums.ContractStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ContractMaxAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    landlordId: string | null;
    propertyId: string | null;
    startDate: Date | null;
    endDate: Date | null;
    monthlyPrice: number | null;
    depositAmount: number | null;
    eSignatureUrl: string | null;
    status: $Enums.ContractStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ContractCountAggregateOutputType = {
    id: number;
    tenantId: number;
    landlordId: number;
    propertyId: number;
    startDate: number;
    endDate: number;
    monthlyPrice: number;
    depositAmount: number;
    eSignatureUrl: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ContractAvgAggregateInputType = {
    monthlyPrice?: true;
    depositAmount?: true;
};
export type ContractSumAggregateInputType = {
    monthlyPrice?: true;
    depositAmount?: true;
};
export type ContractMinAggregateInputType = {
    id?: true;
    tenantId?: true;
    landlordId?: true;
    propertyId?: true;
    startDate?: true;
    endDate?: true;
    monthlyPrice?: true;
    depositAmount?: true;
    eSignatureUrl?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ContractMaxAggregateInputType = {
    id?: true;
    tenantId?: true;
    landlordId?: true;
    propertyId?: true;
    startDate?: true;
    endDate?: true;
    monthlyPrice?: true;
    depositAmount?: true;
    eSignatureUrl?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ContractCountAggregateInputType = {
    id?: true;
    tenantId?: true;
    landlordId?: true;
    propertyId?: true;
    startDate?: true;
    endDate?: true;
    monthlyPrice?: true;
    depositAmount?: true;
    eSignatureUrl?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ContractAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContractWhereInput;
    orderBy?: Prisma.ContractOrderByWithRelationInput | Prisma.ContractOrderByWithRelationInput[];
    cursor?: Prisma.ContractWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ContractCountAggregateInputType;
    _avg?: ContractAvgAggregateInputType;
    _sum?: ContractSumAggregateInputType;
    _min?: ContractMinAggregateInputType;
    _max?: ContractMaxAggregateInputType;
};
export type GetContractAggregateType<T extends ContractAggregateArgs> = {
    [P in keyof T & keyof AggregateContract]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContract[P]> : Prisma.GetScalarType<T[P], AggregateContract[P]>;
};
export type ContractGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContractWhereInput;
    orderBy?: Prisma.ContractOrderByWithAggregationInput | Prisma.ContractOrderByWithAggregationInput[];
    by: Prisma.ContractScalarFieldEnum[] | Prisma.ContractScalarFieldEnum;
    having?: Prisma.ContractScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContractCountAggregateInputType | true;
    _avg?: ContractAvgAggregateInputType;
    _sum?: ContractSumAggregateInputType;
    _min?: ContractMinAggregateInputType;
    _max?: ContractMaxAggregateInputType;
};
export type ContractGroupByOutputType = {
    id: string;
    tenantId: string;
    landlordId: string;
    propertyId: string;
    startDate: Date;
    endDate: Date;
    monthlyPrice: number;
    depositAmount: number;
    eSignatureUrl: string | null;
    status: $Enums.ContractStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: ContractCountAggregateOutputType | null;
    _avg: ContractAvgAggregateOutputType | null;
    _sum: ContractSumAggregateOutputType | null;
    _min: ContractMinAggregateOutputType | null;
    _max: ContractMaxAggregateOutputType | null;
};
export type GetContractGroupByPayload<T extends ContractGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContractGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContractGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContractGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContractGroupByOutputType[P]>;
}>>;
export type ContractWhereInput = {
    AND?: Prisma.ContractWhereInput | Prisma.ContractWhereInput[];
    OR?: Prisma.ContractWhereInput[];
    NOT?: Prisma.ContractWhereInput | Prisma.ContractWhereInput[];
    id?: Prisma.UuidFilter<"Contract"> | string;
    tenantId?: Prisma.UuidFilter<"Contract"> | string;
    landlordId?: Prisma.UuidFilter<"Contract"> | string;
    propertyId?: Prisma.UuidFilter<"Contract"> | string;
    startDate?: Prisma.DateTimeFilter<"Contract"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"Contract"> | Date | string;
    monthlyPrice?: Prisma.FloatFilter<"Contract"> | number;
    depositAmount?: Prisma.FloatFilter<"Contract"> | number;
    eSignatureUrl?: Prisma.StringNullableFilter<"Contract"> | string | null;
    status?: Prisma.EnumContractStatusFilter<"Contract"> | $Enums.ContractStatus;
    createdAt?: Prisma.DateTimeFilter<"Contract"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Contract"> | Date | string;
    User_Contract_landlordIdToUser?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    Property?: Prisma.XOR<Prisma.PropertyScalarRelationFilter, Prisma.PropertyWhereInput>;
    User_Contract_tenantIdToUser?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    Invoice?: Prisma.InvoiceListRelationFilter;
};
export type ContractOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    landlordId?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    monthlyPrice?: Prisma.SortOrder;
    depositAmount?: Prisma.SortOrder;
    eSignatureUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    User_Contract_landlordIdToUser?: Prisma.UserOrderByWithRelationInput;
    Property?: Prisma.PropertyOrderByWithRelationInput;
    User_Contract_tenantIdToUser?: Prisma.UserOrderByWithRelationInput;
    Invoice?: Prisma.InvoiceOrderByRelationAggregateInput;
};
export type ContractWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ContractWhereInput | Prisma.ContractWhereInput[];
    OR?: Prisma.ContractWhereInput[];
    NOT?: Prisma.ContractWhereInput | Prisma.ContractWhereInput[];
    tenantId?: Prisma.UuidFilter<"Contract"> | string;
    landlordId?: Prisma.UuidFilter<"Contract"> | string;
    propertyId?: Prisma.UuidFilter<"Contract"> | string;
    startDate?: Prisma.DateTimeFilter<"Contract"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"Contract"> | Date | string;
    monthlyPrice?: Prisma.FloatFilter<"Contract"> | number;
    depositAmount?: Prisma.FloatFilter<"Contract"> | number;
    eSignatureUrl?: Prisma.StringNullableFilter<"Contract"> | string | null;
    status?: Prisma.EnumContractStatusFilter<"Contract"> | $Enums.ContractStatus;
    createdAt?: Prisma.DateTimeFilter<"Contract"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Contract"> | Date | string;
    User_Contract_landlordIdToUser?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    Property?: Prisma.XOR<Prisma.PropertyScalarRelationFilter, Prisma.PropertyWhereInput>;
    User_Contract_tenantIdToUser?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    Invoice?: Prisma.InvoiceListRelationFilter;
}, "id">;
export type ContractOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    landlordId?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    monthlyPrice?: Prisma.SortOrder;
    depositAmount?: Prisma.SortOrder;
    eSignatureUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ContractCountOrderByAggregateInput;
    _avg?: Prisma.ContractAvgOrderByAggregateInput;
    _max?: Prisma.ContractMaxOrderByAggregateInput;
    _min?: Prisma.ContractMinOrderByAggregateInput;
    _sum?: Prisma.ContractSumOrderByAggregateInput;
};
export type ContractScalarWhereWithAggregatesInput = {
    AND?: Prisma.ContractScalarWhereWithAggregatesInput | Prisma.ContractScalarWhereWithAggregatesInput[];
    OR?: Prisma.ContractScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ContractScalarWhereWithAggregatesInput | Prisma.ContractScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Contract"> | string;
    tenantId?: Prisma.UuidWithAggregatesFilter<"Contract"> | string;
    landlordId?: Prisma.UuidWithAggregatesFilter<"Contract"> | string;
    propertyId?: Prisma.UuidWithAggregatesFilter<"Contract"> | string;
    startDate?: Prisma.DateTimeWithAggregatesFilter<"Contract"> | Date | string;
    endDate?: Prisma.DateTimeWithAggregatesFilter<"Contract"> | Date | string;
    monthlyPrice?: Prisma.FloatWithAggregatesFilter<"Contract"> | number;
    depositAmount?: Prisma.FloatWithAggregatesFilter<"Contract"> | number;
    eSignatureUrl?: Prisma.StringNullableWithAggregatesFilter<"Contract"> | string | null;
    status?: Prisma.EnumContractStatusWithAggregatesFilter<"Contract"> | $Enums.ContractStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Contract"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Contract"> | Date | string;
};
export type ContractCreateInput = {
    id?: string;
    startDate: Date | string;
    endDate: Date | string;
    monthlyPrice: number;
    depositAmount: number;
    eSignatureUrl?: string | null;
    status?: $Enums.ContractStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    User_Contract_landlordIdToUser: Prisma.UserCreateNestedOneWithoutContract_Contract_landlordIdToUserInput;
    Property: Prisma.PropertyCreateNestedOneWithoutContractInput;
    User_Contract_tenantIdToUser: Prisma.UserCreateNestedOneWithoutContract_Contract_tenantIdToUserInput;
    Invoice?: Prisma.InvoiceCreateNestedManyWithoutContractInput;
};
export type ContractUncheckedCreateInput = {
    id?: string;
    tenantId: string;
    landlordId: string;
    propertyId: string;
    startDate: Date | string;
    endDate: Date | string;
    monthlyPrice: number;
    depositAmount: number;
    eSignatureUrl?: string | null;
    status?: $Enums.ContractStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Invoice?: Prisma.InvoiceUncheckedCreateNestedManyWithoutContractInput;
};
export type ContractUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    monthlyPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    depositAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    eSignatureUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User_Contract_landlordIdToUser?: Prisma.UserUpdateOneRequiredWithoutContract_Contract_landlordIdToUserNestedInput;
    Property?: Prisma.PropertyUpdateOneRequiredWithoutContractNestedInput;
    User_Contract_tenantIdToUser?: Prisma.UserUpdateOneRequiredWithoutContract_Contract_tenantIdToUserNestedInput;
    Invoice?: Prisma.InvoiceUpdateManyWithoutContractNestedInput;
};
export type ContractUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    landlordId?: Prisma.StringFieldUpdateOperationsInput | string;
    propertyId?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    monthlyPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    depositAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    eSignatureUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Invoice?: Prisma.InvoiceUncheckedUpdateManyWithoutContractNestedInput;
};
export type ContractCreateManyInput = {
    id?: string;
    tenantId: string;
    landlordId: string;
    propertyId: string;
    startDate: Date | string;
    endDate: Date | string;
    monthlyPrice: number;
    depositAmount: number;
    eSignatureUrl?: string | null;
    status?: $Enums.ContractStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ContractUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    monthlyPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    depositAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    eSignatureUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContractUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    landlordId?: Prisma.StringFieldUpdateOperationsInput | string;
    propertyId?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    monthlyPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    depositAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    eSignatureUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContractCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    landlordId?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    monthlyPrice?: Prisma.SortOrder;
    depositAmount?: Prisma.SortOrder;
    eSignatureUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ContractAvgOrderByAggregateInput = {
    monthlyPrice?: Prisma.SortOrder;
    depositAmount?: Prisma.SortOrder;
};
export type ContractMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    landlordId?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    monthlyPrice?: Prisma.SortOrder;
    depositAmount?: Prisma.SortOrder;
    eSignatureUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ContractMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    landlordId?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    monthlyPrice?: Prisma.SortOrder;
    depositAmount?: Prisma.SortOrder;
    eSignatureUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ContractSumOrderByAggregateInput = {
    monthlyPrice?: Prisma.SortOrder;
    depositAmount?: Prisma.SortOrder;
};
export type ContractScalarRelationFilter = {
    is?: Prisma.ContractWhereInput;
    isNot?: Prisma.ContractWhereInput;
};
export type ContractListRelationFilter = {
    every?: Prisma.ContractWhereInput;
    some?: Prisma.ContractWhereInput;
    none?: Prisma.ContractWhereInput;
};
export type ContractOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnumContractStatusFieldUpdateOperationsInput = {
    set?: $Enums.ContractStatus;
};
export type ContractCreateNestedOneWithoutInvoiceInput = {
    create?: Prisma.XOR<Prisma.ContractCreateWithoutInvoiceInput, Prisma.ContractUncheckedCreateWithoutInvoiceInput>;
    connectOrCreate?: Prisma.ContractCreateOrConnectWithoutInvoiceInput;
    connect?: Prisma.ContractWhereUniqueInput;
};
export type ContractUpdateOneRequiredWithoutInvoiceNestedInput = {
    create?: Prisma.XOR<Prisma.ContractCreateWithoutInvoiceInput, Prisma.ContractUncheckedCreateWithoutInvoiceInput>;
    connectOrCreate?: Prisma.ContractCreateOrConnectWithoutInvoiceInput;
    upsert?: Prisma.ContractUpsertWithoutInvoiceInput;
    connect?: Prisma.ContractWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ContractUpdateToOneWithWhereWithoutInvoiceInput, Prisma.ContractUpdateWithoutInvoiceInput>, Prisma.ContractUncheckedUpdateWithoutInvoiceInput>;
};
export type ContractCreateNestedManyWithoutPropertyInput = {
    create?: Prisma.XOR<Prisma.ContractCreateWithoutPropertyInput, Prisma.ContractUncheckedCreateWithoutPropertyInput> | Prisma.ContractCreateWithoutPropertyInput[] | Prisma.ContractUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: Prisma.ContractCreateOrConnectWithoutPropertyInput | Prisma.ContractCreateOrConnectWithoutPropertyInput[];
    createMany?: Prisma.ContractCreateManyPropertyInputEnvelope;
    connect?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
};
export type ContractUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: Prisma.XOR<Prisma.ContractCreateWithoutPropertyInput, Prisma.ContractUncheckedCreateWithoutPropertyInput> | Prisma.ContractCreateWithoutPropertyInput[] | Prisma.ContractUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: Prisma.ContractCreateOrConnectWithoutPropertyInput | Prisma.ContractCreateOrConnectWithoutPropertyInput[];
    createMany?: Prisma.ContractCreateManyPropertyInputEnvelope;
    connect?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
};
export type ContractUpdateManyWithoutPropertyNestedInput = {
    create?: Prisma.XOR<Prisma.ContractCreateWithoutPropertyInput, Prisma.ContractUncheckedCreateWithoutPropertyInput> | Prisma.ContractCreateWithoutPropertyInput[] | Prisma.ContractUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: Prisma.ContractCreateOrConnectWithoutPropertyInput | Prisma.ContractCreateOrConnectWithoutPropertyInput[];
    upsert?: Prisma.ContractUpsertWithWhereUniqueWithoutPropertyInput | Prisma.ContractUpsertWithWhereUniqueWithoutPropertyInput[];
    createMany?: Prisma.ContractCreateManyPropertyInputEnvelope;
    set?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    disconnect?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    delete?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    connect?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    update?: Prisma.ContractUpdateWithWhereUniqueWithoutPropertyInput | Prisma.ContractUpdateWithWhereUniqueWithoutPropertyInput[];
    updateMany?: Prisma.ContractUpdateManyWithWhereWithoutPropertyInput | Prisma.ContractUpdateManyWithWhereWithoutPropertyInput[];
    deleteMany?: Prisma.ContractScalarWhereInput | Prisma.ContractScalarWhereInput[];
};
export type ContractUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: Prisma.XOR<Prisma.ContractCreateWithoutPropertyInput, Prisma.ContractUncheckedCreateWithoutPropertyInput> | Prisma.ContractCreateWithoutPropertyInput[] | Prisma.ContractUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: Prisma.ContractCreateOrConnectWithoutPropertyInput | Prisma.ContractCreateOrConnectWithoutPropertyInput[];
    upsert?: Prisma.ContractUpsertWithWhereUniqueWithoutPropertyInput | Prisma.ContractUpsertWithWhereUniqueWithoutPropertyInput[];
    createMany?: Prisma.ContractCreateManyPropertyInputEnvelope;
    set?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    disconnect?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    delete?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    connect?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    update?: Prisma.ContractUpdateWithWhereUniqueWithoutPropertyInput | Prisma.ContractUpdateWithWhereUniqueWithoutPropertyInput[];
    updateMany?: Prisma.ContractUpdateManyWithWhereWithoutPropertyInput | Prisma.ContractUpdateManyWithWhereWithoutPropertyInput[];
    deleteMany?: Prisma.ContractScalarWhereInput | Prisma.ContractScalarWhereInput[];
};
export type ContractCreateNestedManyWithoutUser_Contract_landlordIdToUserInput = {
    create?: Prisma.XOR<Prisma.ContractCreateWithoutUser_Contract_landlordIdToUserInput, Prisma.ContractUncheckedCreateWithoutUser_Contract_landlordIdToUserInput> | Prisma.ContractCreateWithoutUser_Contract_landlordIdToUserInput[] | Prisma.ContractUncheckedCreateWithoutUser_Contract_landlordIdToUserInput[];
    connectOrCreate?: Prisma.ContractCreateOrConnectWithoutUser_Contract_landlordIdToUserInput | Prisma.ContractCreateOrConnectWithoutUser_Contract_landlordIdToUserInput[];
    createMany?: Prisma.ContractCreateManyUser_Contract_landlordIdToUserInputEnvelope;
    connect?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
};
export type ContractCreateNestedManyWithoutUser_Contract_tenantIdToUserInput = {
    create?: Prisma.XOR<Prisma.ContractCreateWithoutUser_Contract_tenantIdToUserInput, Prisma.ContractUncheckedCreateWithoutUser_Contract_tenantIdToUserInput> | Prisma.ContractCreateWithoutUser_Contract_tenantIdToUserInput[] | Prisma.ContractUncheckedCreateWithoutUser_Contract_tenantIdToUserInput[];
    connectOrCreate?: Prisma.ContractCreateOrConnectWithoutUser_Contract_tenantIdToUserInput | Prisma.ContractCreateOrConnectWithoutUser_Contract_tenantIdToUserInput[];
    createMany?: Prisma.ContractCreateManyUser_Contract_tenantIdToUserInputEnvelope;
    connect?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
};
export type ContractUncheckedCreateNestedManyWithoutUser_Contract_landlordIdToUserInput = {
    create?: Prisma.XOR<Prisma.ContractCreateWithoutUser_Contract_landlordIdToUserInput, Prisma.ContractUncheckedCreateWithoutUser_Contract_landlordIdToUserInput> | Prisma.ContractCreateWithoutUser_Contract_landlordIdToUserInput[] | Prisma.ContractUncheckedCreateWithoutUser_Contract_landlordIdToUserInput[];
    connectOrCreate?: Prisma.ContractCreateOrConnectWithoutUser_Contract_landlordIdToUserInput | Prisma.ContractCreateOrConnectWithoutUser_Contract_landlordIdToUserInput[];
    createMany?: Prisma.ContractCreateManyUser_Contract_landlordIdToUserInputEnvelope;
    connect?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
};
export type ContractUncheckedCreateNestedManyWithoutUser_Contract_tenantIdToUserInput = {
    create?: Prisma.XOR<Prisma.ContractCreateWithoutUser_Contract_tenantIdToUserInput, Prisma.ContractUncheckedCreateWithoutUser_Contract_tenantIdToUserInput> | Prisma.ContractCreateWithoutUser_Contract_tenantIdToUserInput[] | Prisma.ContractUncheckedCreateWithoutUser_Contract_tenantIdToUserInput[];
    connectOrCreate?: Prisma.ContractCreateOrConnectWithoutUser_Contract_tenantIdToUserInput | Prisma.ContractCreateOrConnectWithoutUser_Contract_tenantIdToUserInput[];
    createMany?: Prisma.ContractCreateManyUser_Contract_tenantIdToUserInputEnvelope;
    connect?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
};
export type ContractUpdateManyWithoutUser_Contract_landlordIdToUserNestedInput = {
    create?: Prisma.XOR<Prisma.ContractCreateWithoutUser_Contract_landlordIdToUserInput, Prisma.ContractUncheckedCreateWithoutUser_Contract_landlordIdToUserInput> | Prisma.ContractCreateWithoutUser_Contract_landlordIdToUserInput[] | Prisma.ContractUncheckedCreateWithoutUser_Contract_landlordIdToUserInput[];
    connectOrCreate?: Prisma.ContractCreateOrConnectWithoutUser_Contract_landlordIdToUserInput | Prisma.ContractCreateOrConnectWithoutUser_Contract_landlordIdToUserInput[];
    upsert?: Prisma.ContractUpsertWithWhereUniqueWithoutUser_Contract_landlordIdToUserInput | Prisma.ContractUpsertWithWhereUniqueWithoutUser_Contract_landlordIdToUserInput[];
    createMany?: Prisma.ContractCreateManyUser_Contract_landlordIdToUserInputEnvelope;
    set?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    disconnect?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    delete?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    connect?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    update?: Prisma.ContractUpdateWithWhereUniqueWithoutUser_Contract_landlordIdToUserInput | Prisma.ContractUpdateWithWhereUniqueWithoutUser_Contract_landlordIdToUserInput[];
    updateMany?: Prisma.ContractUpdateManyWithWhereWithoutUser_Contract_landlordIdToUserInput | Prisma.ContractUpdateManyWithWhereWithoutUser_Contract_landlordIdToUserInput[];
    deleteMany?: Prisma.ContractScalarWhereInput | Prisma.ContractScalarWhereInput[];
};
export type ContractUpdateManyWithoutUser_Contract_tenantIdToUserNestedInput = {
    create?: Prisma.XOR<Prisma.ContractCreateWithoutUser_Contract_tenantIdToUserInput, Prisma.ContractUncheckedCreateWithoutUser_Contract_tenantIdToUserInput> | Prisma.ContractCreateWithoutUser_Contract_tenantIdToUserInput[] | Prisma.ContractUncheckedCreateWithoutUser_Contract_tenantIdToUserInput[];
    connectOrCreate?: Prisma.ContractCreateOrConnectWithoutUser_Contract_tenantIdToUserInput | Prisma.ContractCreateOrConnectWithoutUser_Contract_tenantIdToUserInput[];
    upsert?: Prisma.ContractUpsertWithWhereUniqueWithoutUser_Contract_tenantIdToUserInput | Prisma.ContractUpsertWithWhereUniqueWithoutUser_Contract_tenantIdToUserInput[];
    createMany?: Prisma.ContractCreateManyUser_Contract_tenantIdToUserInputEnvelope;
    set?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    disconnect?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    delete?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    connect?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    update?: Prisma.ContractUpdateWithWhereUniqueWithoutUser_Contract_tenantIdToUserInput | Prisma.ContractUpdateWithWhereUniqueWithoutUser_Contract_tenantIdToUserInput[];
    updateMany?: Prisma.ContractUpdateManyWithWhereWithoutUser_Contract_tenantIdToUserInput | Prisma.ContractUpdateManyWithWhereWithoutUser_Contract_tenantIdToUserInput[];
    deleteMany?: Prisma.ContractScalarWhereInput | Prisma.ContractScalarWhereInput[];
};
export type ContractUncheckedUpdateManyWithoutUser_Contract_landlordIdToUserNestedInput = {
    create?: Prisma.XOR<Prisma.ContractCreateWithoutUser_Contract_landlordIdToUserInput, Prisma.ContractUncheckedCreateWithoutUser_Contract_landlordIdToUserInput> | Prisma.ContractCreateWithoutUser_Contract_landlordIdToUserInput[] | Prisma.ContractUncheckedCreateWithoutUser_Contract_landlordIdToUserInput[];
    connectOrCreate?: Prisma.ContractCreateOrConnectWithoutUser_Contract_landlordIdToUserInput | Prisma.ContractCreateOrConnectWithoutUser_Contract_landlordIdToUserInput[];
    upsert?: Prisma.ContractUpsertWithWhereUniqueWithoutUser_Contract_landlordIdToUserInput | Prisma.ContractUpsertWithWhereUniqueWithoutUser_Contract_landlordIdToUserInput[];
    createMany?: Prisma.ContractCreateManyUser_Contract_landlordIdToUserInputEnvelope;
    set?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    disconnect?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    delete?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    connect?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    update?: Prisma.ContractUpdateWithWhereUniqueWithoutUser_Contract_landlordIdToUserInput | Prisma.ContractUpdateWithWhereUniqueWithoutUser_Contract_landlordIdToUserInput[];
    updateMany?: Prisma.ContractUpdateManyWithWhereWithoutUser_Contract_landlordIdToUserInput | Prisma.ContractUpdateManyWithWhereWithoutUser_Contract_landlordIdToUserInput[];
    deleteMany?: Prisma.ContractScalarWhereInput | Prisma.ContractScalarWhereInput[];
};
export type ContractUncheckedUpdateManyWithoutUser_Contract_tenantIdToUserNestedInput = {
    create?: Prisma.XOR<Prisma.ContractCreateWithoutUser_Contract_tenantIdToUserInput, Prisma.ContractUncheckedCreateWithoutUser_Contract_tenantIdToUserInput> | Prisma.ContractCreateWithoutUser_Contract_tenantIdToUserInput[] | Prisma.ContractUncheckedCreateWithoutUser_Contract_tenantIdToUserInput[];
    connectOrCreate?: Prisma.ContractCreateOrConnectWithoutUser_Contract_tenantIdToUserInput | Prisma.ContractCreateOrConnectWithoutUser_Contract_tenantIdToUserInput[];
    upsert?: Prisma.ContractUpsertWithWhereUniqueWithoutUser_Contract_tenantIdToUserInput | Prisma.ContractUpsertWithWhereUniqueWithoutUser_Contract_tenantIdToUserInput[];
    createMany?: Prisma.ContractCreateManyUser_Contract_tenantIdToUserInputEnvelope;
    set?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    disconnect?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    delete?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    connect?: Prisma.ContractWhereUniqueInput | Prisma.ContractWhereUniqueInput[];
    update?: Prisma.ContractUpdateWithWhereUniqueWithoutUser_Contract_tenantIdToUserInput | Prisma.ContractUpdateWithWhereUniqueWithoutUser_Contract_tenantIdToUserInput[];
    updateMany?: Prisma.ContractUpdateManyWithWhereWithoutUser_Contract_tenantIdToUserInput | Prisma.ContractUpdateManyWithWhereWithoutUser_Contract_tenantIdToUserInput[];
    deleteMany?: Prisma.ContractScalarWhereInput | Prisma.ContractScalarWhereInput[];
};
export type ContractCreateWithoutInvoiceInput = {
    id?: string;
    startDate: Date | string;
    endDate: Date | string;
    monthlyPrice: number;
    depositAmount: number;
    eSignatureUrl?: string | null;
    status?: $Enums.ContractStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    User_Contract_landlordIdToUser: Prisma.UserCreateNestedOneWithoutContract_Contract_landlordIdToUserInput;
    Property: Prisma.PropertyCreateNestedOneWithoutContractInput;
    User_Contract_tenantIdToUser: Prisma.UserCreateNestedOneWithoutContract_Contract_tenantIdToUserInput;
};
export type ContractUncheckedCreateWithoutInvoiceInput = {
    id?: string;
    tenantId: string;
    landlordId: string;
    propertyId: string;
    startDate: Date | string;
    endDate: Date | string;
    monthlyPrice: number;
    depositAmount: number;
    eSignatureUrl?: string | null;
    status?: $Enums.ContractStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ContractCreateOrConnectWithoutInvoiceInput = {
    where: Prisma.ContractWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContractCreateWithoutInvoiceInput, Prisma.ContractUncheckedCreateWithoutInvoiceInput>;
};
export type ContractUpsertWithoutInvoiceInput = {
    update: Prisma.XOR<Prisma.ContractUpdateWithoutInvoiceInput, Prisma.ContractUncheckedUpdateWithoutInvoiceInput>;
    create: Prisma.XOR<Prisma.ContractCreateWithoutInvoiceInput, Prisma.ContractUncheckedCreateWithoutInvoiceInput>;
    where?: Prisma.ContractWhereInput;
};
export type ContractUpdateToOneWithWhereWithoutInvoiceInput = {
    where?: Prisma.ContractWhereInput;
    data: Prisma.XOR<Prisma.ContractUpdateWithoutInvoiceInput, Prisma.ContractUncheckedUpdateWithoutInvoiceInput>;
};
export type ContractUpdateWithoutInvoiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    monthlyPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    depositAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    eSignatureUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User_Contract_landlordIdToUser?: Prisma.UserUpdateOneRequiredWithoutContract_Contract_landlordIdToUserNestedInput;
    Property?: Prisma.PropertyUpdateOneRequiredWithoutContractNestedInput;
    User_Contract_tenantIdToUser?: Prisma.UserUpdateOneRequiredWithoutContract_Contract_tenantIdToUserNestedInput;
};
export type ContractUncheckedUpdateWithoutInvoiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    landlordId?: Prisma.StringFieldUpdateOperationsInput | string;
    propertyId?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    monthlyPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    depositAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    eSignatureUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContractCreateWithoutPropertyInput = {
    id?: string;
    startDate: Date | string;
    endDate: Date | string;
    monthlyPrice: number;
    depositAmount: number;
    eSignatureUrl?: string | null;
    status?: $Enums.ContractStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    User_Contract_landlordIdToUser: Prisma.UserCreateNestedOneWithoutContract_Contract_landlordIdToUserInput;
    User_Contract_tenantIdToUser: Prisma.UserCreateNestedOneWithoutContract_Contract_tenantIdToUserInput;
    Invoice?: Prisma.InvoiceCreateNestedManyWithoutContractInput;
};
export type ContractUncheckedCreateWithoutPropertyInput = {
    id?: string;
    tenantId: string;
    landlordId: string;
    startDate: Date | string;
    endDate: Date | string;
    monthlyPrice: number;
    depositAmount: number;
    eSignatureUrl?: string | null;
    status?: $Enums.ContractStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Invoice?: Prisma.InvoiceUncheckedCreateNestedManyWithoutContractInput;
};
export type ContractCreateOrConnectWithoutPropertyInput = {
    where: Prisma.ContractWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContractCreateWithoutPropertyInput, Prisma.ContractUncheckedCreateWithoutPropertyInput>;
};
export type ContractCreateManyPropertyInputEnvelope = {
    data: Prisma.ContractCreateManyPropertyInput | Prisma.ContractCreateManyPropertyInput[];
    skipDuplicates?: boolean;
};
export type ContractUpsertWithWhereUniqueWithoutPropertyInput = {
    where: Prisma.ContractWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContractUpdateWithoutPropertyInput, Prisma.ContractUncheckedUpdateWithoutPropertyInput>;
    create: Prisma.XOR<Prisma.ContractCreateWithoutPropertyInput, Prisma.ContractUncheckedCreateWithoutPropertyInput>;
};
export type ContractUpdateWithWhereUniqueWithoutPropertyInput = {
    where: Prisma.ContractWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContractUpdateWithoutPropertyInput, Prisma.ContractUncheckedUpdateWithoutPropertyInput>;
};
export type ContractUpdateManyWithWhereWithoutPropertyInput = {
    where: Prisma.ContractScalarWhereInput;
    data: Prisma.XOR<Prisma.ContractUpdateManyMutationInput, Prisma.ContractUncheckedUpdateManyWithoutPropertyInput>;
};
export type ContractScalarWhereInput = {
    AND?: Prisma.ContractScalarWhereInput | Prisma.ContractScalarWhereInput[];
    OR?: Prisma.ContractScalarWhereInput[];
    NOT?: Prisma.ContractScalarWhereInput | Prisma.ContractScalarWhereInput[];
    id?: Prisma.UuidFilter<"Contract"> | string;
    tenantId?: Prisma.UuidFilter<"Contract"> | string;
    landlordId?: Prisma.UuidFilter<"Contract"> | string;
    propertyId?: Prisma.UuidFilter<"Contract"> | string;
    startDate?: Prisma.DateTimeFilter<"Contract"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"Contract"> | Date | string;
    monthlyPrice?: Prisma.FloatFilter<"Contract"> | number;
    depositAmount?: Prisma.FloatFilter<"Contract"> | number;
    eSignatureUrl?: Prisma.StringNullableFilter<"Contract"> | string | null;
    status?: Prisma.EnumContractStatusFilter<"Contract"> | $Enums.ContractStatus;
    createdAt?: Prisma.DateTimeFilter<"Contract"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Contract"> | Date | string;
};
export type ContractCreateWithoutUser_Contract_landlordIdToUserInput = {
    id?: string;
    startDate: Date | string;
    endDate: Date | string;
    monthlyPrice: number;
    depositAmount: number;
    eSignatureUrl?: string | null;
    status?: $Enums.ContractStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Property: Prisma.PropertyCreateNestedOneWithoutContractInput;
    User_Contract_tenantIdToUser: Prisma.UserCreateNestedOneWithoutContract_Contract_tenantIdToUserInput;
    Invoice?: Prisma.InvoiceCreateNestedManyWithoutContractInput;
};
export type ContractUncheckedCreateWithoutUser_Contract_landlordIdToUserInput = {
    id?: string;
    tenantId: string;
    propertyId: string;
    startDate: Date | string;
    endDate: Date | string;
    monthlyPrice: number;
    depositAmount: number;
    eSignatureUrl?: string | null;
    status?: $Enums.ContractStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Invoice?: Prisma.InvoiceUncheckedCreateNestedManyWithoutContractInput;
};
export type ContractCreateOrConnectWithoutUser_Contract_landlordIdToUserInput = {
    where: Prisma.ContractWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContractCreateWithoutUser_Contract_landlordIdToUserInput, Prisma.ContractUncheckedCreateWithoutUser_Contract_landlordIdToUserInput>;
};
export type ContractCreateManyUser_Contract_landlordIdToUserInputEnvelope = {
    data: Prisma.ContractCreateManyUser_Contract_landlordIdToUserInput | Prisma.ContractCreateManyUser_Contract_landlordIdToUserInput[];
    skipDuplicates?: boolean;
};
export type ContractCreateWithoutUser_Contract_tenantIdToUserInput = {
    id?: string;
    startDate: Date | string;
    endDate: Date | string;
    monthlyPrice: number;
    depositAmount: number;
    eSignatureUrl?: string | null;
    status?: $Enums.ContractStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    User_Contract_landlordIdToUser: Prisma.UserCreateNestedOneWithoutContract_Contract_landlordIdToUserInput;
    Property: Prisma.PropertyCreateNestedOneWithoutContractInput;
    Invoice?: Prisma.InvoiceCreateNestedManyWithoutContractInput;
};
export type ContractUncheckedCreateWithoutUser_Contract_tenantIdToUserInput = {
    id?: string;
    landlordId: string;
    propertyId: string;
    startDate: Date | string;
    endDate: Date | string;
    monthlyPrice: number;
    depositAmount: number;
    eSignatureUrl?: string | null;
    status?: $Enums.ContractStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Invoice?: Prisma.InvoiceUncheckedCreateNestedManyWithoutContractInput;
};
export type ContractCreateOrConnectWithoutUser_Contract_tenantIdToUserInput = {
    where: Prisma.ContractWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContractCreateWithoutUser_Contract_tenantIdToUserInput, Prisma.ContractUncheckedCreateWithoutUser_Contract_tenantIdToUserInput>;
};
export type ContractCreateManyUser_Contract_tenantIdToUserInputEnvelope = {
    data: Prisma.ContractCreateManyUser_Contract_tenantIdToUserInput | Prisma.ContractCreateManyUser_Contract_tenantIdToUserInput[];
    skipDuplicates?: boolean;
};
export type ContractUpsertWithWhereUniqueWithoutUser_Contract_landlordIdToUserInput = {
    where: Prisma.ContractWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContractUpdateWithoutUser_Contract_landlordIdToUserInput, Prisma.ContractUncheckedUpdateWithoutUser_Contract_landlordIdToUserInput>;
    create: Prisma.XOR<Prisma.ContractCreateWithoutUser_Contract_landlordIdToUserInput, Prisma.ContractUncheckedCreateWithoutUser_Contract_landlordIdToUserInput>;
};
export type ContractUpdateWithWhereUniqueWithoutUser_Contract_landlordIdToUserInput = {
    where: Prisma.ContractWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContractUpdateWithoutUser_Contract_landlordIdToUserInput, Prisma.ContractUncheckedUpdateWithoutUser_Contract_landlordIdToUserInput>;
};
export type ContractUpdateManyWithWhereWithoutUser_Contract_landlordIdToUserInput = {
    where: Prisma.ContractScalarWhereInput;
    data: Prisma.XOR<Prisma.ContractUpdateManyMutationInput, Prisma.ContractUncheckedUpdateManyWithoutUser_Contract_landlordIdToUserInput>;
};
export type ContractUpsertWithWhereUniqueWithoutUser_Contract_tenantIdToUserInput = {
    where: Prisma.ContractWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContractUpdateWithoutUser_Contract_tenantIdToUserInput, Prisma.ContractUncheckedUpdateWithoutUser_Contract_tenantIdToUserInput>;
    create: Prisma.XOR<Prisma.ContractCreateWithoutUser_Contract_tenantIdToUserInput, Prisma.ContractUncheckedCreateWithoutUser_Contract_tenantIdToUserInput>;
};
export type ContractUpdateWithWhereUniqueWithoutUser_Contract_tenantIdToUserInput = {
    where: Prisma.ContractWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContractUpdateWithoutUser_Contract_tenantIdToUserInput, Prisma.ContractUncheckedUpdateWithoutUser_Contract_tenantIdToUserInput>;
};
export type ContractUpdateManyWithWhereWithoutUser_Contract_tenantIdToUserInput = {
    where: Prisma.ContractScalarWhereInput;
    data: Prisma.XOR<Prisma.ContractUpdateManyMutationInput, Prisma.ContractUncheckedUpdateManyWithoutUser_Contract_tenantIdToUserInput>;
};
export type ContractCreateManyPropertyInput = {
    id?: string;
    tenantId: string;
    landlordId: string;
    startDate: Date | string;
    endDate: Date | string;
    monthlyPrice: number;
    depositAmount: number;
    eSignatureUrl?: string | null;
    status?: $Enums.ContractStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ContractUpdateWithoutPropertyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    monthlyPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    depositAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    eSignatureUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User_Contract_landlordIdToUser?: Prisma.UserUpdateOneRequiredWithoutContract_Contract_landlordIdToUserNestedInput;
    User_Contract_tenantIdToUser?: Prisma.UserUpdateOneRequiredWithoutContract_Contract_tenantIdToUserNestedInput;
    Invoice?: Prisma.InvoiceUpdateManyWithoutContractNestedInput;
};
export type ContractUncheckedUpdateWithoutPropertyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    landlordId?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    monthlyPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    depositAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    eSignatureUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Invoice?: Prisma.InvoiceUncheckedUpdateManyWithoutContractNestedInput;
};
export type ContractUncheckedUpdateManyWithoutPropertyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    landlordId?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    monthlyPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    depositAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    eSignatureUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContractCreateManyUser_Contract_landlordIdToUserInput = {
    id?: string;
    tenantId: string;
    propertyId: string;
    startDate: Date | string;
    endDate: Date | string;
    monthlyPrice: number;
    depositAmount: number;
    eSignatureUrl?: string | null;
    status?: $Enums.ContractStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ContractCreateManyUser_Contract_tenantIdToUserInput = {
    id?: string;
    landlordId: string;
    propertyId: string;
    startDate: Date | string;
    endDate: Date | string;
    monthlyPrice: number;
    depositAmount: number;
    eSignatureUrl?: string | null;
    status?: $Enums.ContractStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ContractUpdateWithoutUser_Contract_landlordIdToUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    monthlyPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    depositAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    eSignatureUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Property?: Prisma.PropertyUpdateOneRequiredWithoutContractNestedInput;
    User_Contract_tenantIdToUser?: Prisma.UserUpdateOneRequiredWithoutContract_Contract_tenantIdToUserNestedInput;
    Invoice?: Prisma.InvoiceUpdateManyWithoutContractNestedInput;
};
export type ContractUncheckedUpdateWithoutUser_Contract_landlordIdToUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    propertyId?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    monthlyPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    depositAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    eSignatureUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Invoice?: Prisma.InvoiceUncheckedUpdateManyWithoutContractNestedInput;
};
export type ContractUncheckedUpdateManyWithoutUser_Contract_landlordIdToUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    propertyId?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    monthlyPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    depositAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    eSignatureUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContractUpdateWithoutUser_Contract_tenantIdToUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    monthlyPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    depositAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    eSignatureUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User_Contract_landlordIdToUser?: Prisma.UserUpdateOneRequiredWithoutContract_Contract_landlordIdToUserNestedInput;
    Property?: Prisma.PropertyUpdateOneRequiredWithoutContractNestedInput;
    Invoice?: Prisma.InvoiceUpdateManyWithoutContractNestedInput;
};
export type ContractUncheckedUpdateWithoutUser_Contract_tenantIdToUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    landlordId?: Prisma.StringFieldUpdateOperationsInput | string;
    propertyId?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    monthlyPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    depositAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    eSignatureUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Invoice?: Prisma.InvoiceUncheckedUpdateManyWithoutContractNestedInput;
};
export type ContractUncheckedUpdateManyWithoutUser_Contract_tenantIdToUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    landlordId?: Prisma.StringFieldUpdateOperationsInput | string;
    propertyId?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    monthlyPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    depositAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    eSignatureUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContractCountOutputType = {
    Invoice: number;
};
export type ContractCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Invoice?: boolean | ContractCountOutputTypeCountInvoiceArgs;
};
export type ContractCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContractCountOutputTypeSelect<ExtArgs> | null;
};
export type ContractCountOutputTypeCountInvoiceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceWhereInput;
};
export type ContractSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    landlordId?: boolean;
    propertyId?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    monthlyPrice?: boolean;
    depositAmount?: boolean;
    eSignatureUrl?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    User_Contract_landlordIdToUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
    User_Contract_tenantIdToUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Invoice?: boolean | Prisma.Contract$InvoiceArgs<ExtArgs>;
    _count?: boolean | Prisma.ContractCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contract"]>;
export type ContractSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    landlordId?: boolean;
    propertyId?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    monthlyPrice?: boolean;
    depositAmount?: boolean;
    eSignatureUrl?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    User_Contract_landlordIdToUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
    User_Contract_tenantIdToUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contract"]>;
export type ContractSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    landlordId?: boolean;
    propertyId?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    monthlyPrice?: boolean;
    depositAmount?: boolean;
    eSignatureUrl?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    User_Contract_landlordIdToUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
    User_Contract_tenantIdToUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contract"]>;
export type ContractSelectScalar = {
    id?: boolean;
    tenantId?: boolean;
    landlordId?: boolean;
    propertyId?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    monthlyPrice?: boolean;
    depositAmount?: boolean;
    eSignatureUrl?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ContractOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "landlordId" | "propertyId" | "startDate" | "endDate" | "monthlyPrice" | "depositAmount" | "eSignatureUrl" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["contract"]>;
export type ContractInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    User_Contract_landlordIdToUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
    User_Contract_tenantIdToUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Invoice?: boolean | Prisma.Contract$InvoiceArgs<ExtArgs>;
    _count?: boolean | Prisma.ContractCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ContractIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    User_Contract_landlordIdToUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
    User_Contract_tenantIdToUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ContractIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    User_Contract_landlordIdToUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
    User_Contract_tenantIdToUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ContractPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Contract";
    objects: {
        User_Contract_landlordIdToUser: Prisma.$UserPayload<ExtArgs>;
        Property: Prisma.$PropertyPayload<ExtArgs>;
        User_Contract_tenantIdToUser: Prisma.$UserPayload<ExtArgs>;
        Invoice: Prisma.$InvoicePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tenantId: string;
        landlordId: string;
        propertyId: string;
        startDate: Date;
        endDate: Date;
        monthlyPrice: number;
        depositAmount: number;
        eSignatureUrl: string | null;
        status: $Enums.ContractStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["contract"]>;
    composites: {};
};
export type ContractGetPayload<S extends boolean | null | undefined | ContractDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ContractPayload, S>;
export type ContractCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ContractFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContractCountAggregateInputType | true;
};
export interface ContractDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Contract'];
        meta: {
            name: 'Contract';
        };
    };
    findUnique<T extends ContractFindUniqueArgs>(args: Prisma.SelectSubset<T, ContractFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ContractClient<runtime.Types.Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ContractFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ContractFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContractClient<runtime.Types.Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ContractFindFirstArgs>(args?: Prisma.SelectSubset<T, ContractFindFirstArgs<ExtArgs>>): Prisma.Prisma__ContractClient<runtime.Types.Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ContractFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ContractFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContractClient<runtime.Types.Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ContractFindManyArgs>(args?: Prisma.SelectSubset<T, ContractFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ContractCreateArgs>(args: Prisma.SelectSubset<T, ContractCreateArgs<ExtArgs>>): Prisma.Prisma__ContractClient<runtime.Types.Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ContractCreateManyArgs>(args?: Prisma.SelectSubset<T, ContractCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ContractCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ContractCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ContractDeleteArgs>(args: Prisma.SelectSubset<T, ContractDeleteArgs<ExtArgs>>): Prisma.Prisma__ContractClient<runtime.Types.Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ContractUpdateArgs>(args: Prisma.SelectSubset<T, ContractUpdateArgs<ExtArgs>>): Prisma.Prisma__ContractClient<runtime.Types.Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ContractDeleteManyArgs>(args?: Prisma.SelectSubset<T, ContractDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ContractUpdateManyArgs>(args: Prisma.SelectSubset<T, ContractUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ContractUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ContractUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ContractUpsertArgs>(args: Prisma.SelectSubset<T, ContractUpsertArgs<ExtArgs>>): Prisma.Prisma__ContractClient<runtime.Types.Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ContractCountArgs>(args?: Prisma.Subset<T, ContractCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContractCountAggregateOutputType> : number>;
    aggregate<T extends ContractAggregateArgs>(args: Prisma.Subset<T, ContractAggregateArgs>): Prisma.PrismaPromise<GetContractAggregateType<T>>;
    groupBy<T extends ContractGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ContractGroupByArgs['orderBy'];
    } : {
        orderBy?: ContractGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ContractFieldRefs;
}
export interface Prisma__ContractClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    User_Contract_landlordIdToUser<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    Property<T extends Prisma.PropertyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PropertyDefaultArgs<ExtArgs>>): Prisma.Prisma__PropertyClient<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    User_Contract_tenantIdToUser<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    Invoice<T extends Prisma.Contract$InvoiceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Contract$InvoiceArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ContractFieldRefs {
    readonly id: Prisma.FieldRef<"Contract", 'String'>;
    readonly tenantId: Prisma.FieldRef<"Contract", 'String'>;
    readonly landlordId: Prisma.FieldRef<"Contract", 'String'>;
    readonly propertyId: Prisma.FieldRef<"Contract", 'String'>;
    readonly startDate: Prisma.FieldRef<"Contract", 'DateTime'>;
    readonly endDate: Prisma.FieldRef<"Contract", 'DateTime'>;
    readonly monthlyPrice: Prisma.FieldRef<"Contract", 'Float'>;
    readonly depositAmount: Prisma.FieldRef<"Contract", 'Float'>;
    readonly eSignatureUrl: Prisma.FieldRef<"Contract", 'String'>;
    readonly status: Prisma.FieldRef<"Contract", 'ContractStatus'>;
    readonly createdAt: Prisma.FieldRef<"Contract", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Contract", 'DateTime'>;
}
export type ContractFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContractSelect<ExtArgs> | null;
    omit?: Prisma.ContractOmit<ExtArgs> | null;
    include?: Prisma.ContractInclude<ExtArgs> | null;
    where: Prisma.ContractWhereUniqueInput;
};
export type ContractFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContractSelect<ExtArgs> | null;
    omit?: Prisma.ContractOmit<ExtArgs> | null;
    include?: Prisma.ContractInclude<ExtArgs> | null;
    where: Prisma.ContractWhereUniqueInput;
};
export type ContractFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContractSelect<ExtArgs> | null;
    omit?: Prisma.ContractOmit<ExtArgs> | null;
    include?: Prisma.ContractInclude<ExtArgs> | null;
    where?: Prisma.ContractWhereInput;
    orderBy?: Prisma.ContractOrderByWithRelationInput | Prisma.ContractOrderByWithRelationInput[];
    cursor?: Prisma.ContractWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContractScalarFieldEnum | Prisma.ContractScalarFieldEnum[];
};
export type ContractFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContractSelect<ExtArgs> | null;
    omit?: Prisma.ContractOmit<ExtArgs> | null;
    include?: Prisma.ContractInclude<ExtArgs> | null;
    where?: Prisma.ContractWhereInput;
    orderBy?: Prisma.ContractOrderByWithRelationInput | Prisma.ContractOrderByWithRelationInput[];
    cursor?: Prisma.ContractWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContractScalarFieldEnum | Prisma.ContractScalarFieldEnum[];
};
export type ContractFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContractSelect<ExtArgs> | null;
    omit?: Prisma.ContractOmit<ExtArgs> | null;
    include?: Prisma.ContractInclude<ExtArgs> | null;
    where?: Prisma.ContractWhereInput;
    orderBy?: Prisma.ContractOrderByWithRelationInput | Prisma.ContractOrderByWithRelationInput[];
    cursor?: Prisma.ContractWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContractScalarFieldEnum | Prisma.ContractScalarFieldEnum[];
};
export type ContractCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContractSelect<ExtArgs> | null;
    omit?: Prisma.ContractOmit<ExtArgs> | null;
    include?: Prisma.ContractInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContractCreateInput, Prisma.ContractUncheckedCreateInput>;
};
export type ContractCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ContractCreateManyInput | Prisma.ContractCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ContractCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContractSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContractOmit<ExtArgs> | null;
    data: Prisma.ContractCreateManyInput | Prisma.ContractCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ContractIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ContractUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContractSelect<ExtArgs> | null;
    omit?: Prisma.ContractOmit<ExtArgs> | null;
    include?: Prisma.ContractInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContractUpdateInput, Prisma.ContractUncheckedUpdateInput>;
    where: Prisma.ContractWhereUniqueInput;
};
export type ContractUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ContractUpdateManyMutationInput, Prisma.ContractUncheckedUpdateManyInput>;
    where?: Prisma.ContractWhereInput;
    limit?: number;
};
export type ContractUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContractSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContractOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContractUpdateManyMutationInput, Prisma.ContractUncheckedUpdateManyInput>;
    where?: Prisma.ContractWhereInput;
    limit?: number;
    include?: Prisma.ContractIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ContractUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContractSelect<ExtArgs> | null;
    omit?: Prisma.ContractOmit<ExtArgs> | null;
    include?: Prisma.ContractInclude<ExtArgs> | null;
    where: Prisma.ContractWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContractCreateInput, Prisma.ContractUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ContractUpdateInput, Prisma.ContractUncheckedUpdateInput>;
};
export type ContractDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContractSelect<ExtArgs> | null;
    omit?: Prisma.ContractOmit<ExtArgs> | null;
    include?: Prisma.ContractInclude<ExtArgs> | null;
    where: Prisma.ContractWhereUniqueInput;
};
export type ContractDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContractWhereInput;
    limit?: number;
};
export type Contract$InvoiceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where?: Prisma.InvoiceWhereInput;
    orderBy?: Prisma.InvoiceOrderByWithRelationInput | Prisma.InvoiceOrderByWithRelationInput[];
    cursor?: Prisma.InvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvoiceScalarFieldEnum | Prisma.InvoiceScalarFieldEnum[];
};
export type ContractDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContractSelect<ExtArgs> | null;
    omit?: Prisma.ContractOmit<ExtArgs> | null;
    include?: Prisma.ContractInclude<ExtArgs> | null;
};
