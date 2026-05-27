import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InvoiceModel = runtime.Types.Result.DefaultSelection<Prisma.$InvoicePayload>;
export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null;
    _avg: InvoiceAvgAggregateOutputType | null;
    _sum: InvoiceSumAggregateOutputType | null;
    _min: InvoiceMinAggregateOutputType | null;
    _max: InvoiceMaxAggregateOutputType | null;
};
export type InvoiceAvgAggregateOutputType = {
    rentAmount: number | null;
    electricityAmount: number | null;
    waterAmount: number | null;
    serviceAmount: number | null;
    totalAmount: number | null;
};
export type InvoiceSumAggregateOutputType = {
    rentAmount: number | null;
    electricityAmount: number | null;
    waterAmount: number | null;
    serviceAmount: number | null;
    totalAmount: number | null;
};
export type InvoiceMinAggregateOutputType = {
    id: string | null;
    contractId: string | null;
    title: string | null;
    rentAmount: number | null;
    electricityAmount: number | null;
    waterAmount: number | null;
    serviceAmount: number | null;
    totalAmount: number | null;
    issueDate: Date | null;
    dueDate: Date | null;
    status: $Enums.InvoiceStatus | null;
    paymentMethod: string | null;
    paidAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type InvoiceMaxAggregateOutputType = {
    id: string | null;
    contractId: string | null;
    title: string | null;
    rentAmount: number | null;
    electricityAmount: number | null;
    waterAmount: number | null;
    serviceAmount: number | null;
    totalAmount: number | null;
    issueDate: Date | null;
    dueDate: Date | null;
    status: $Enums.InvoiceStatus | null;
    paymentMethod: string | null;
    paidAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type InvoiceCountAggregateOutputType = {
    id: number;
    contractId: number;
    title: number;
    rentAmount: number;
    electricityAmount: number;
    waterAmount: number;
    serviceAmount: number;
    totalAmount: number;
    issueDate: number;
    dueDate: number;
    status: number;
    paymentMethod: number;
    paidAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type InvoiceAvgAggregateInputType = {
    rentAmount?: true;
    electricityAmount?: true;
    waterAmount?: true;
    serviceAmount?: true;
    totalAmount?: true;
};
export type InvoiceSumAggregateInputType = {
    rentAmount?: true;
    electricityAmount?: true;
    waterAmount?: true;
    serviceAmount?: true;
    totalAmount?: true;
};
export type InvoiceMinAggregateInputType = {
    id?: true;
    contractId?: true;
    title?: true;
    rentAmount?: true;
    electricityAmount?: true;
    waterAmount?: true;
    serviceAmount?: true;
    totalAmount?: true;
    issueDate?: true;
    dueDate?: true;
    status?: true;
    paymentMethod?: true;
    paidAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type InvoiceMaxAggregateInputType = {
    id?: true;
    contractId?: true;
    title?: true;
    rentAmount?: true;
    electricityAmount?: true;
    waterAmount?: true;
    serviceAmount?: true;
    totalAmount?: true;
    issueDate?: true;
    dueDate?: true;
    status?: true;
    paymentMethod?: true;
    paidAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type InvoiceCountAggregateInputType = {
    id?: true;
    contractId?: true;
    title?: true;
    rentAmount?: true;
    electricityAmount?: true;
    waterAmount?: true;
    serviceAmount?: true;
    totalAmount?: true;
    issueDate?: true;
    dueDate?: true;
    status?: true;
    paymentMethod?: true;
    paidAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type InvoiceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceWhereInput;
    orderBy?: Prisma.InvoiceOrderByWithRelationInput | Prisma.InvoiceOrderByWithRelationInput[];
    cursor?: Prisma.InvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InvoiceCountAggregateInputType;
    _avg?: InvoiceAvgAggregateInputType;
    _sum?: InvoiceSumAggregateInputType;
    _min?: InvoiceMinAggregateInputType;
    _max?: InvoiceMaxAggregateInputType;
};
export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
    [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInvoice[P]> : Prisma.GetScalarType<T[P], AggregateInvoice[P]>;
};
export type InvoiceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceWhereInput;
    orderBy?: Prisma.InvoiceOrderByWithAggregationInput | Prisma.InvoiceOrderByWithAggregationInput[];
    by: Prisma.InvoiceScalarFieldEnum[] | Prisma.InvoiceScalarFieldEnum;
    having?: Prisma.InvoiceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvoiceCountAggregateInputType | true;
    _avg?: InvoiceAvgAggregateInputType;
    _sum?: InvoiceSumAggregateInputType;
    _min?: InvoiceMinAggregateInputType;
    _max?: InvoiceMaxAggregateInputType;
};
export type InvoiceGroupByOutputType = {
    id: string;
    contractId: string;
    title: string;
    rentAmount: number;
    electricityAmount: number;
    waterAmount: number;
    serviceAmount: number;
    totalAmount: number;
    issueDate: Date;
    dueDate: Date;
    status: $Enums.InvoiceStatus;
    paymentMethod: string | null;
    paidAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: InvoiceCountAggregateOutputType | null;
    _avg: InvoiceAvgAggregateOutputType | null;
    _sum: InvoiceSumAggregateOutputType | null;
    _min: InvoiceMinAggregateOutputType | null;
    _max: InvoiceMaxAggregateOutputType | null;
};
export type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InvoiceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InvoiceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InvoiceGroupByOutputType[P]>;
}>>;
export type InvoiceWhereInput = {
    AND?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[];
    OR?: Prisma.InvoiceWhereInput[];
    NOT?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[];
    id?: Prisma.UuidFilter<"Invoice"> | string;
    contractId?: Prisma.UuidFilter<"Invoice"> | string;
    title?: Prisma.StringFilter<"Invoice"> | string;
    rentAmount?: Prisma.FloatFilter<"Invoice"> | number;
    electricityAmount?: Prisma.FloatFilter<"Invoice"> | number;
    waterAmount?: Prisma.FloatFilter<"Invoice"> | number;
    serviceAmount?: Prisma.FloatFilter<"Invoice"> | number;
    totalAmount?: Prisma.FloatFilter<"Invoice"> | number;
    issueDate?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    dueDate?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    status?: Prisma.EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus;
    paymentMethod?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    paidAt?: Prisma.DateTimeNullableFilter<"Invoice"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    Contract?: Prisma.XOR<Prisma.ContractScalarRelationFilter, Prisma.ContractWhereInput>;
};
export type InvoiceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    contractId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    rentAmount?: Prisma.SortOrder;
    electricityAmount?: Prisma.SortOrder;
    waterAmount?: Prisma.SortOrder;
    serviceAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    issueDate?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrderInput | Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    Contract?: Prisma.ContractOrderByWithRelationInput;
};
export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[];
    OR?: Prisma.InvoiceWhereInput[];
    NOT?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[];
    contractId?: Prisma.UuidFilter<"Invoice"> | string;
    title?: Prisma.StringFilter<"Invoice"> | string;
    rentAmount?: Prisma.FloatFilter<"Invoice"> | number;
    electricityAmount?: Prisma.FloatFilter<"Invoice"> | number;
    waterAmount?: Prisma.FloatFilter<"Invoice"> | number;
    serviceAmount?: Prisma.FloatFilter<"Invoice"> | number;
    totalAmount?: Prisma.FloatFilter<"Invoice"> | number;
    issueDate?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    dueDate?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    status?: Prisma.EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus;
    paymentMethod?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    paidAt?: Prisma.DateTimeNullableFilter<"Invoice"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    Contract?: Prisma.XOR<Prisma.ContractScalarRelationFilter, Prisma.ContractWhereInput>;
}, "id">;
export type InvoiceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    contractId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    rentAmount?: Prisma.SortOrder;
    electricityAmount?: Prisma.SortOrder;
    waterAmount?: Prisma.SortOrder;
    serviceAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    issueDate?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrderInput | Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.InvoiceCountOrderByAggregateInput;
    _avg?: Prisma.InvoiceAvgOrderByAggregateInput;
    _max?: Prisma.InvoiceMaxOrderByAggregateInput;
    _min?: Prisma.InvoiceMinOrderByAggregateInput;
    _sum?: Prisma.InvoiceSumOrderByAggregateInput;
};
export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: Prisma.InvoiceScalarWhereWithAggregatesInput | Prisma.InvoiceScalarWhereWithAggregatesInput[];
    OR?: Prisma.InvoiceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InvoiceScalarWhereWithAggregatesInput | Prisma.InvoiceScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Invoice"> | string;
    contractId?: Prisma.UuidWithAggregatesFilter<"Invoice"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Invoice"> | string;
    rentAmount?: Prisma.FloatWithAggregatesFilter<"Invoice"> | number;
    electricityAmount?: Prisma.FloatWithAggregatesFilter<"Invoice"> | number;
    waterAmount?: Prisma.FloatWithAggregatesFilter<"Invoice"> | number;
    serviceAmount?: Prisma.FloatWithAggregatesFilter<"Invoice"> | number;
    totalAmount?: Prisma.FloatWithAggregatesFilter<"Invoice"> | number;
    issueDate?: Prisma.DateTimeWithAggregatesFilter<"Invoice"> | Date | string;
    dueDate?: Prisma.DateTimeWithAggregatesFilter<"Invoice"> | Date | string;
    status?: Prisma.EnumInvoiceStatusWithAggregatesFilter<"Invoice"> | $Enums.InvoiceStatus;
    paymentMethod?: Prisma.StringNullableWithAggregatesFilter<"Invoice"> | string | null;
    paidAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Invoice"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Invoice"> | Date | string;
};
export type InvoiceCreateInput = {
    id?: string;
    title: string;
    rentAmount: number;
    electricityAmount: number;
    waterAmount: number;
    serviceAmount: number;
    totalAmount: number;
    issueDate?: Date | string;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    paymentMethod?: string | null;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Contract: Prisma.ContractCreateNestedOneWithoutInvoiceInput;
};
export type InvoiceUncheckedCreateInput = {
    id?: string;
    contractId: string;
    title: string;
    rentAmount: number;
    electricityAmount: number;
    waterAmount: number;
    serviceAmount: number;
    totalAmount: number;
    issueDate?: Date | string;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    paymentMethod?: string | null;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InvoiceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    rentAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    electricityAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    waterAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    serviceAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    paymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Contract?: Prisma.ContractUpdateOneRequiredWithoutInvoiceNestedInput;
};
export type InvoiceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contractId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    rentAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    electricityAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    waterAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    serviceAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    paymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceCreateManyInput = {
    id?: string;
    contractId: string;
    title: string;
    rentAmount: number;
    electricityAmount: number;
    waterAmount: number;
    serviceAmount: number;
    totalAmount: number;
    issueDate?: Date | string;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    paymentMethod?: string | null;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InvoiceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    rentAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    electricityAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    waterAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    serviceAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    paymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contractId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    rentAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    electricityAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    waterAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    serviceAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    paymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceListRelationFilter = {
    every?: Prisma.InvoiceWhereInput;
    some?: Prisma.InvoiceWhereInput;
    none?: Prisma.InvoiceWhereInput;
};
export type InvoiceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InvoiceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contractId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    rentAmount?: Prisma.SortOrder;
    electricityAmount?: Prisma.SortOrder;
    waterAmount?: Prisma.SortOrder;
    serviceAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    issueDate?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InvoiceAvgOrderByAggregateInput = {
    rentAmount?: Prisma.SortOrder;
    electricityAmount?: Prisma.SortOrder;
    waterAmount?: Prisma.SortOrder;
    serviceAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
};
export type InvoiceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contractId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    rentAmount?: Prisma.SortOrder;
    electricityAmount?: Prisma.SortOrder;
    waterAmount?: Prisma.SortOrder;
    serviceAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    issueDate?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InvoiceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contractId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    rentAmount?: Prisma.SortOrder;
    electricityAmount?: Prisma.SortOrder;
    waterAmount?: Prisma.SortOrder;
    serviceAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    issueDate?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InvoiceSumOrderByAggregateInput = {
    rentAmount?: Prisma.SortOrder;
    electricityAmount?: Prisma.SortOrder;
    waterAmount?: Prisma.SortOrder;
    serviceAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
};
export type InvoiceCreateNestedManyWithoutContractInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutContractInput, Prisma.InvoiceUncheckedCreateWithoutContractInput> | Prisma.InvoiceCreateWithoutContractInput[] | Prisma.InvoiceUncheckedCreateWithoutContractInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutContractInput | Prisma.InvoiceCreateOrConnectWithoutContractInput[];
    createMany?: Prisma.InvoiceCreateManyContractInputEnvelope;
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
};
export type InvoiceUncheckedCreateNestedManyWithoutContractInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutContractInput, Prisma.InvoiceUncheckedCreateWithoutContractInput> | Prisma.InvoiceCreateWithoutContractInput[] | Prisma.InvoiceUncheckedCreateWithoutContractInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutContractInput | Prisma.InvoiceCreateOrConnectWithoutContractInput[];
    createMany?: Prisma.InvoiceCreateManyContractInputEnvelope;
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
};
export type InvoiceUpdateManyWithoutContractNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutContractInput, Prisma.InvoiceUncheckedCreateWithoutContractInput> | Prisma.InvoiceCreateWithoutContractInput[] | Prisma.InvoiceUncheckedCreateWithoutContractInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutContractInput | Prisma.InvoiceCreateOrConnectWithoutContractInput[];
    upsert?: Prisma.InvoiceUpsertWithWhereUniqueWithoutContractInput | Prisma.InvoiceUpsertWithWhereUniqueWithoutContractInput[];
    createMany?: Prisma.InvoiceCreateManyContractInputEnvelope;
    set?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    disconnect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    delete?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    update?: Prisma.InvoiceUpdateWithWhereUniqueWithoutContractInput | Prisma.InvoiceUpdateWithWhereUniqueWithoutContractInput[];
    updateMany?: Prisma.InvoiceUpdateManyWithWhereWithoutContractInput | Prisma.InvoiceUpdateManyWithWhereWithoutContractInput[];
    deleteMany?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
};
export type InvoiceUncheckedUpdateManyWithoutContractNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutContractInput, Prisma.InvoiceUncheckedCreateWithoutContractInput> | Prisma.InvoiceCreateWithoutContractInput[] | Prisma.InvoiceUncheckedCreateWithoutContractInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutContractInput | Prisma.InvoiceCreateOrConnectWithoutContractInput[];
    upsert?: Prisma.InvoiceUpsertWithWhereUniqueWithoutContractInput | Prisma.InvoiceUpsertWithWhereUniqueWithoutContractInput[];
    createMany?: Prisma.InvoiceCreateManyContractInputEnvelope;
    set?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    disconnect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    delete?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    update?: Prisma.InvoiceUpdateWithWhereUniqueWithoutContractInput | Prisma.InvoiceUpdateWithWhereUniqueWithoutContractInput[];
    updateMany?: Prisma.InvoiceUpdateManyWithWhereWithoutContractInput | Prisma.InvoiceUpdateManyWithWhereWithoutContractInput[];
    deleteMany?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
};
export type EnumInvoiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvoiceStatus;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type InvoiceCreateWithoutContractInput = {
    id?: string;
    title: string;
    rentAmount: number;
    electricityAmount: number;
    waterAmount: number;
    serviceAmount: number;
    totalAmount: number;
    issueDate?: Date | string;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    paymentMethod?: string | null;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InvoiceUncheckedCreateWithoutContractInput = {
    id?: string;
    title: string;
    rentAmount: number;
    electricityAmount: number;
    waterAmount: number;
    serviceAmount: number;
    totalAmount: number;
    issueDate?: Date | string;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    paymentMethod?: string | null;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InvoiceCreateOrConnectWithoutContractInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutContractInput, Prisma.InvoiceUncheckedCreateWithoutContractInput>;
};
export type InvoiceCreateManyContractInputEnvelope = {
    data: Prisma.InvoiceCreateManyContractInput | Prisma.InvoiceCreateManyContractInput[];
    skipDuplicates?: boolean;
};
export type InvoiceUpsertWithWhereUniqueWithoutContractInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvoiceUpdateWithoutContractInput, Prisma.InvoiceUncheckedUpdateWithoutContractInput>;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutContractInput, Prisma.InvoiceUncheckedCreateWithoutContractInput>;
};
export type InvoiceUpdateWithWhereUniqueWithoutContractInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateWithoutContractInput, Prisma.InvoiceUncheckedUpdateWithoutContractInput>;
};
export type InvoiceUpdateManyWithWhereWithoutContractInput = {
    where: Prisma.InvoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateManyMutationInput, Prisma.InvoiceUncheckedUpdateManyWithoutContractInput>;
};
export type InvoiceScalarWhereInput = {
    AND?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
    OR?: Prisma.InvoiceScalarWhereInput[];
    NOT?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
    id?: Prisma.UuidFilter<"Invoice"> | string;
    contractId?: Prisma.UuidFilter<"Invoice"> | string;
    title?: Prisma.StringFilter<"Invoice"> | string;
    rentAmount?: Prisma.FloatFilter<"Invoice"> | number;
    electricityAmount?: Prisma.FloatFilter<"Invoice"> | number;
    waterAmount?: Prisma.FloatFilter<"Invoice"> | number;
    serviceAmount?: Prisma.FloatFilter<"Invoice"> | number;
    totalAmount?: Prisma.FloatFilter<"Invoice"> | number;
    issueDate?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    dueDate?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    status?: Prisma.EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus;
    paymentMethod?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    paidAt?: Prisma.DateTimeNullableFilter<"Invoice"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
};
export type InvoiceCreateManyContractInput = {
    id?: string;
    title: string;
    rentAmount: number;
    electricityAmount: number;
    waterAmount: number;
    serviceAmount: number;
    totalAmount: number;
    issueDate?: Date | string;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    paymentMethod?: string | null;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InvoiceUpdateWithoutContractInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    rentAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    electricityAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    waterAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    serviceAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    paymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceUncheckedUpdateWithoutContractInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    rentAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    electricityAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    waterAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    serviceAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    paymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceUncheckedUpdateManyWithoutContractInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    rentAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    electricityAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    waterAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    serviceAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    paymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contractId?: boolean;
    title?: boolean;
    rentAmount?: boolean;
    electricityAmount?: boolean;
    waterAmount?: boolean;
    serviceAmount?: boolean;
    totalAmount?: boolean;
    issueDate?: boolean;
    dueDate?: boolean;
    status?: boolean;
    paymentMethod?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Contract?: boolean | Prisma.ContractDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["invoice"]>;
export type InvoiceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contractId?: boolean;
    title?: boolean;
    rentAmount?: boolean;
    electricityAmount?: boolean;
    waterAmount?: boolean;
    serviceAmount?: boolean;
    totalAmount?: boolean;
    issueDate?: boolean;
    dueDate?: boolean;
    status?: boolean;
    paymentMethod?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Contract?: boolean | Prisma.ContractDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["invoice"]>;
export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contractId?: boolean;
    title?: boolean;
    rentAmount?: boolean;
    electricityAmount?: boolean;
    waterAmount?: boolean;
    serviceAmount?: boolean;
    totalAmount?: boolean;
    issueDate?: boolean;
    dueDate?: boolean;
    status?: boolean;
    paymentMethod?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Contract?: boolean | Prisma.ContractDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["invoice"]>;
export type InvoiceSelectScalar = {
    id?: boolean;
    contractId?: boolean;
    title?: boolean;
    rentAmount?: boolean;
    electricityAmount?: boolean;
    waterAmount?: boolean;
    serviceAmount?: boolean;
    totalAmount?: boolean;
    issueDate?: boolean;
    dueDate?: boolean;
    status?: boolean;
    paymentMethod?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type InvoiceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "contractId" | "title" | "rentAmount" | "electricityAmount" | "waterAmount" | "serviceAmount" | "totalAmount" | "issueDate" | "dueDate" | "status" | "paymentMethod" | "paidAt" | "createdAt" | "updatedAt", ExtArgs["result"]["invoice"]>;
export type InvoiceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Contract?: boolean | Prisma.ContractDefaultArgs<ExtArgs>;
};
export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Contract?: boolean | Prisma.ContractDefaultArgs<ExtArgs>;
};
export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Contract?: boolean | Prisma.ContractDefaultArgs<ExtArgs>;
};
export type $InvoicePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Invoice";
    objects: {
        Contract: Prisma.$ContractPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        contractId: string;
        title: string;
        rentAmount: number;
        electricityAmount: number;
        waterAmount: number;
        serviceAmount: number;
        totalAmount: number;
        issueDate: Date;
        dueDate: Date;
        status: $Enums.InvoiceStatus;
        paymentMethod: string | null;
        paidAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["invoice"]>;
    composites: {};
};
export type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InvoicePayload, S>;
export type InvoiceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InvoiceCountAggregateInputType | true;
};
export interface InvoiceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Invoice'];
        meta: {
            name: 'Invoice';
        };
    };
    findUnique<T extends InvoiceFindUniqueArgs>(args: Prisma.SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InvoiceFindFirstArgs>(args?: Prisma.SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InvoiceFindManyArgs>(args?: Prisma.SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InvoiceCreateArgs>(args: Prisma.SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InvoiceCreateManyArgs>(args?: Prisma.SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InvoiceDeleteArgs>(args: Prisma.SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InvoiceUpdateArgs>(args: Prisma.SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: Prisma.SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InvoiceUpdateManyArgs>(args: Prisma.SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InvoiceUpsertArgs>(args: Prisma.SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InvoiceCountArgs>(args?: Prisma.Subset<T, InvoiceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InvoiceCountAggregateOutputType> : number>;
    aggregate<T extends InvoiceAggregateArgs>(args: Prisma.Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>;
    groupBy<T extends InvoiceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InvoiceGroupByArgs['orderBy'];
    } : {
        orderBy?: InvoiceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InvoiceFieldRefs;
}
export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Contract<T extends Prisma.ContractDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ContractDefaultArgs<ExtArgs>>): Prisma.Prisma__ContractClient<runtime.Types.Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InvoiceFieldRefs {
    readonly id: Prisma.FieldRef<"Invoice", 'String'>;
    readonly contractId: Prisma.FieldRef<"Invoice", 'String'>;
    readonly title: Prisma.FieldRef<"Invoice", 'String'>;
    readonly rentAmount: Prisma.FieldRef<"Invoice", 'Float'>;
    readonly electricityAmount: Prisma.FieldRef<"Invoice", 'Float'>;
    readonly waterAmount: Prisma.FieldRef<"Invoice", 'Float'>;
    readonly serviceAmount: Prisma.FieldRef<"Invoice", 'Float'>;
    readonly totalAmount: Prisma.FieldRef<"Invoice", 'Float'>;
    readonly issueDate: Prisma.FieldRef<"Invoice", 'DateTime'>;
    readonly dueDate: Prisma.FieldRef<"Invoice", 'DateTime'>;
    readonly status: Prisma.FieldRef<"Invoice", 'InvoiceStatus'>;
    readonly paymentMethod: Prisma.FieldRef<"Invoice", 'String'>;
    readonly paidAt: Prisma.FieldRef<"Invoice", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Invoice", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Invoice", 'DateTime'>;
}
export type InvoiceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InvoiceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InvoiceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InvoiceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvoiceCreateInput, Prisma.InvoiceUncheckedCreateInput>;
};
export type InvoiceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InvoiceCreateManyInput | Prisma.InvoiceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InvoiceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    data: Prisma.InvoiceCreateManyInput | Prisma.InvoiceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InvoiceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InvoiceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvoiceUpdateInput, Prisma.InvoiceUncheckedUpdateInput>;
    where: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InvoiceUpdateManyMutationInput, Prisma.InvoiceUncheckedUpdateManyInput>;
    where?: Prisma.InvoiceWhereInput;
    limit?: number;
};
export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvoiceUpdateManyMutationInput, Prisma.InvoiceUncheckedUpdateManyInput>;
    where?: Prisma.InvoiceWhereInput;
    limit?: number;
    include?: Prisma.InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InvoiceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where: Prisma.InvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceCreateInput, Prisma.InvoiceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InvoiceUpdateInput, Prisma.InvoiceUncheckedUpdateInput>;
};
export type InvoiceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceWhereInput;
    limit?: number;
};
export type InvoiceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
};
