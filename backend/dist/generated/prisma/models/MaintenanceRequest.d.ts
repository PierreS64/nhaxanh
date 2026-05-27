import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MaintenanceRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$MaintenanceRequestPayload>;
export type AggregateMaintenanceRequest = {
    _count: MaintenanceRequestCountAggregateOutputType | null;
    _min: MaintenanceRequestMinAggregateOutputType | null;
    _max: MaintenanceRequestMaxAggregateOutputType | null;
};
export type MaintenanceRequestMinAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    propertyId: string | null;
    title: string | null;
    description: string | null;
    imageUrl: string | null;
    status: $Enums.MaintenanceStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MaintenanceRequestMaxAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    propertyId: string | null;
    title: string | null;
    description: string | null;
    imageUrl: string | null;
    status: $Enums.MaintenanceStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MaintenanceRequestCountAggregateOutputType = {
    id: number;
    tenantId: number;
    propertyId: number;
    title: number;
    description: number;
    imageUrl: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MaintenanceRequestMinAggregateInputType = {
    id?: true;
    tenantId?: true;
    propertyId?: true;
    title?: true;
    description?: true;
    imageUrl?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MaintenanceRequestMaxAggregateInputType = {
    id?: true;
    tenantId?: true;
    propertyId?: true;
    title?: true;
    description?: true;
    imageUrl?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MaintenanceRequestCountAggregateInputType = {
    id?: true;
    tenantId?: true;
    propertyId?: true;
    title?: true;
    description?: true;
    imageUrl?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MaintenanceRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MaintenanceRequestWhereInput;
    orderBy?: Prisma.MaintenanceRequestOrderByWithRelationInput | Prisma.MaintenanceRequestOrderByWithRelationInput[];
    cursor?: Prisma.MaintenanceRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MaintenanceRequestCountAggregateInputType;
    _min?: MaintenanceRequestMinAggregateInputType;
    _max?: MaintenanceRequestMaxAggregateInputType;
};
export type GetMaintenanceRequestAggregateType<T extends MaintenanceRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateMaintenanceRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMaintenanceRequest[P]> : Prisma.GetScalarType<T[P], AggregateMaintenanceRequest[P]>;
};
export type MaintenanceRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MaintenanceRequestWhereInput;
    orderBy?: Prisma.MaintenanceRequestOrderByWithAggregationInput | Prisma.MaintenanceRequestOrderByWithAggregationInput[];
    by: Prisma.MaintenanceRequestScalarFieldEnum[] | Prisma.MaintenanceRequestScalarFieldEnum;
    having?: Prisma.MaintenanceRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MaintenanceRequestCountAggregateInputType | true;
    _min?: MaintenanceRequestMinAggregateInputType;
    _max?: MaintenanceRequestMaxAggregateInputType;
};
export type MaintenanceRequestGroupByOutputType = {
    id: string;
    tenantId: string;
    propertyId: string;
    title: string;
    description: string;
    imageUrl: string | null;
    status: $Enums.MaintenanceStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: MaintenanceRequestCountAggregateOutputType | null;
    _min: MaintenanceRequestMinAggregateOutputType | null;
    _max: MaintenanceRequestMaxAggregateOutputType | null;
};
export type GetMaintenanceRequestGroupByPayload<T extends MaintenanceRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MaintenanceRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MaintenanceRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MaintenanceRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MaintenanceRequestGroupByOutputType[P]>;
}>>;
export type MaintenanceRequestWhereInput = {
    AND?: Prisma.MaintenanceRequestWhereInput | Prisma.MaintenanceRequestWhereInput[];
    OR?: Prisma.MaintenanceRequestWhereInput[];
    NOT?: Prisma.MaintenanceRequestWhereInput | Prisma.MaintenanceRequestWhereInput[];
    id?: Prisma.UuidFilter<"MaintenanceRequest"> | string;
    tenantId?: Prisma.UuidFilter<"MaintenanceRequest"> | string;
    propertyId?: Prisma.UuidFilter<"MaintenanceRequest"> | string;
    title?: Prisma.StringFilter<"MaintenanceRequest"> | string;
    description?: Prisma.StringFilter<"MaintenanceRequest"> | string;
    imageUrl?: Prisma.StringNullableFilter<"MaintenanceRequest"> | string | null;
    status?: Prisma.EnumMaintenanceStatusFilter<"MaintenanceRequest"> | $Enums.MaintenanceStatus;
    createdAt?: Prisma.DateTimeFilter<"MaintenanceRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MaintenanceRequest"> | Date | string;
    Property?: Prisma.XOR<Prisma.PropertyScalarRelationFilter, Prisma.PropertyWhereInput>;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type MaintenanceRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    Property?: Prisma.PropertyOrderByWithRelationInput;
    User?: Prisma.UserOrderByWithRelationInput;
};
export type MaintenanceRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MaintenanceRequestWhereInput | Prisma.MaintenanceRequestWhereInput[];
    OR?: Prisma.MaintenanceRequestWhereInput[];
    NOT?: Prisma.MaintenanceRequestWhereInput | Prisma.MaintenanceRequestWhereInput[];
    tenantId?: Prisma.UuidFilter<"MaintenanceRequest"> | string;
    propertyId?: Prisma.UuidFilter<"MaintenanceRequest"> | string;
    title?: Prisma.StringFilter<"MaintenanceRequest"> | string;
    description?: Prisma.StringFilter<"MaintenanceRequest"> | string;
    imageUrl?: Prisma.StringNullableFilter<"MaintenanceRequest"> | string | null;
    status?: Prisma.EnumMaintenanceStatusFilter<"MaintenanceRequest"> | $Enums.MaintenanceStatus;
    createdAt?: Prisma.DateTimeFilter<"MaintenanceRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MaintenanceRequest"> | Date | string;
    Property?: Prisma.XOR<Prisma.PropertyScalarRelationFilter, Prisma.PropertyWhereInput>;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type MaintenanceRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MaintenanceRequestCountOrderByAggregateInput;
    _max?: Prisma.MaintenanceRequestMaxOrderByAggregateInput;
    _min?: Prisma.MaintenanceRequestMinOrderByAggregateInput;
};
export type MaintenanceRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.MaintenanceRequestScalarWhereWithAggregatesInput | Prisma.MaintenanceRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.MaintenanceRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MaintenanceRequestScalarWhereWithAggregatesInput | Prisma.MaintenanceRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"MaintenanceRequest"> | string;
    tenantId?: Prisma.UuidWithAggregatesFilter<"MaintenanceRequest"> | string;
    propertyId?: Prisma.UuidWithAggregatesFilter<"MaintenanceRequest"> | string;
    title?: Prisma.StringWithAggregatesFilter<"MaintenanceRequest"> | string;
    description?: Prisma.StringWithAggregatesFilter<"MaintenanceRequest"> | string;
    imageUrl?: Prisma.StringNullableWithAggregatesFilter<"MaintenanceRequest"> | string | null;
    status?: Prisma.EnumMaintenanceStatusWithAggregatesFilter<"MaintenanceRequest"> | $Enums.MaintenanceStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MaintenanceRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"MaintenanceRequest"> | Date | string;
};
export type MaintenanceRequestCreateInput = {
    id?: string;
    title: string;
    description: string;
    imageUrl?: string | null;
    status?: $Enums.MaintenanceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Property: Prisma.PropertyCreateNestedOneWithoutMaintenanceRequestInput;
    User: Prisma.UserCreateNestedOneWithoutMaintenanceRequestInput;
};
export type MaintenanceRequestUncheckedCreateInput = {
    id?: string;
    tenantId: string;
    propertyId: string;
    title: string;
    description: string;
    imageUrl?: string | null;
    status?: $Enums.MaintenanceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MaintenanceRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Property?: Prisma.PropertyUpdateOneRequiredWithoutMaintenanceRequestNestedInput;
    User?: Prisma.UserUpdateOneRequiredWithoutMaintenanceRequestNestedInput;
};
export type MaintenanceRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    propertyId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MaintenanceRequestCreateManyInput = {
    id?: string;
    tenantId: string;
    propertyId: string;
    title: string;
    description: string;
    imageUrl?: string | null;
    status?: $Enums.MaintenanceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MaintenanceRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MaintenanceRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    propertyId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MaintenanceRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MaintenanceRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MaintenanceRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MaintenanceRequestListRelationFilter = {
    every?: Prisma.MaintenanceRequestWhereInput;
    some?: Prisma.MaintenanceRequestWhereInput;
    none?: Prisma.MaintenanceRequestWhereInput;
};
export type MaintenanceRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EnumMaintenanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.MaintenanceStatus;
};
export type MaintenanceRequestCreateNestedManyWithoutPropertyInput = {
    create?: Prisma.XOR<Prisma.MaintenanceRequestCreateWithoutPropertyInput, Prisma.MaintenanceRequestUncheckedCreateWithoutPropertyInput> | Prisma.MaintenanceRequestCreateWithoutPropertyInput[] | Prisma.MaintenanceRequestUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: Prisma.MaintenanceRequestCreateOrConnectWithoutPropertyInput | Prisma.MaintenanceRequestCreateOrConnectWithoutPropertyInput[];
    createMany?: Prisma.MaintenanceRequestCreateManyPropertyInputEnvelope;
    connect?: Prisma.MaintenanceRequestWhereUniqueInput | Prisma.MaintenanceRequestWhereUniqueInput[];
};
export type MaintenanceRequestUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: Prisma.XOR<Prisma.MaintenanceRequestCreateWithoutPropertyInput, Prisma.MaintenanceRequestUncheckedCreateWithoutPropertyInput> | Prisma.MaintenanceRequestCreateWithoutPropertyInput[] | Prisma.MaintenanceRequestUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: Prisma.MaintenanceRequestCreateOrConnectWithoutPropertyInput | Prisma.MaintenanceRequestCreateOrConnectWithoutPropertyInput[];
    createMany?: Prisma.MaintenanceRequestCreateManyPropertyInputEnvelope;
    connect?: Prisma.MaintenanceRequestWhereUniqueInput | Prisma.MaintenanceRequestWhereUniqueInput[];
};
export type MaintenanceRequestUpdateManyWithoutPropertyNestedInput = {
    create?: Prisma.XOR<Prisma.MaintenanceRequestCreateWithoutPropertyInput, Prisma.MaintenanceRequestUncheckedCreateWithoutPropertyInput> | Prisma.MaintenanceRequestCreateWithoutPropertyInput[] | Prisma.MaintenanceRequestUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: Prisma.MaintenanceRequestCreateOrConnectWithoutPropertyInput | Prisma.MaintenanceRequestCreateOrConnectWithoutPropertyInput[];
    upsert?: Prisma.MaintenanceRequestUpsertWithWhereUniqueWithoutPropertyInput | Prisma.MaintenanceRequestUpsertWithWhereUniqueWithoutPropertyInput[];
    createMany?: Prisma.MaintenanceRequestCreateManyPropertyInputEnvelope;
    set?: Prisma.MaintenanceRequestWhereUniqueInput | Prisma.MaintenanceRequestWhereUniqueInput[];
    disconnect?: Prisma.MaintenanceRequestWhereUniqueInput | Prisma.MaintenanceRequestWhereUniqueInput[];
    delete?: Prisma.MaintenanceRequestWhereUniqueInput | Prisma.MaintenanceRequestWhereUniqueInput[];
    connect?: Prisma.MaintenanceRequestWhereUniqueInput | Prisma.MaintenanceRequestWhereUniqueInput[];
    update?: Prisma.MaintenanceRequestUpdateWithWhereUniqueWithoutPropertyInput | Prisma.MaintenanceRequestUpdateWithWhereUniqueWithoutPropertyInput[];
    updateMany?: Prisma.MaintenanceRequestUpdateManyWithWhereWithoutPropertyInput | Prisma.MaintenanceRequestUpdateManyWithWhereWithoutPropertyInput[];
    deleteMany?: Prisma.MaintenanceRequestScalarWhereInput | Prisma.MaintenanceRequestScalarWhereInput[];
};
export type MaintenanceRequestUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: Prisma.XOR<Prisma.MaintenanceRequestCreateWithoutPropertyInput, Prisma.MaintenanceRequestUncheckedCreateWithoutPropertyInput> | Prisma.MaintenanceRequestCreateWithoutPropertyInput[] | Prisma.MaintenanceRequestUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: Prisma.MaintenanceRequestCreateOrConnectWithoutPropertyInput | Prisma.MaintenanceRequestCreateOrConnectWithoutPropertyInput[];
    upsert?: Prisma.MaintenanceRequestUpsertWithWhereUniqueWithoutPropertyInput | Prisma.MaintenanceRequestUpsertWithWhereUniqueWithoutPropertyInput[];
    createMany?: Prisma.MaintenanceRequestCreateManyPropertyInputEnvelope;
    set?: Prisma.MaintenanceRequestWhereUniqueInput | Prisma.MaintenanceRequestWhereUniqueInput[];
    disconnect?: Prisma.MaintenanceRequestWhereUniqueInput | Prisma.MaintenanceRequestWhereUniqueInput[];
    delete?: Prisma.MaintenanceRequestWhereUniqueInput | Prisma.MaintenanceRequestWhereUniqueInput[];
    connect?: Prisma.MaintenanceRequestWhereUniqueInput | Prisma.MaintenanceRequestWhereUniqueInput[];
    update?: Prisma.MaintenanceRequestUpdateWithWhereUniqueWithoutPropertyInput | Prisma.MaintenanceRequestUpdateWithWhereUniqueWithoutPropertyInput[];
    updateMany?: Prisma.MaintenanceRequestUpdateManyWithWhereWithoutPropertyInput | Prisma.MaintenanceRequestUpdateManyWithWhereWithoutPropertyInput[];
    deleteMany?: Prisma.MaintenanceRequestScalarWhereInput | Prisma.MaintenanceRequestScalarWhereInput[];
};
export type MaintenanceRequestCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MaintenanceRequestCreateWithoutUserInput, Prisma.MaintenanceRequestUncheckedCreateWithoutUserInput> | Prisma.MaintenanceRequestCreateWithoutUserInput[] | Prisma.MaintenanceRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MaintenanceRequestCreateOrConnectWithoutUserInput | Prisma.MaintenanceRequestCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MaintenanceRequestCreateManyUserInputEnvelope;
    connect?: Prisma.MaintenanceRequestWhereUniqueInput | Prisma.MaintenanceRequestWhereUniqueInput[];
};
export type MaintenanceRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MaintenanceRequestCreateWithoutUserInput, Prisma.MaintenanceRequestUncheckedCreateWithoutUserInput> | Prisma.MaintenanceRequestCreateWithoutUserInput[] | Prisma.MaintenanceRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MaintenanceRequestCreateOrConnectWithoutUserInput | Prisma.MaintenanceRequestCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MaintenanceRequestCreateManyUserInputEnvelope;
    connect?: Prisma.MaintenanceRequestWhereUniqueInput | Prisma.MaintenanceRequestWhereUniqueInput[];
};
export type MaintenanceRequestUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MaintenanceRequestCreateWithoutUserInput, Prisma.MaintenanceRequestUncheckedCreateWithoutUserInput> | Prisma.MaintenanceRequestCreateWithoutUserInput[] | Prisma.MaintenanceRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MaintenanceRequestCreateOrConnectWithoutUserInput | Prisma.MaintenanceRequestCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MaintenanceRequestUpsertWithWhereUniqueWithoutUserInput | Prisma.MaintenanceRequestUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MaintenanceRequestCreateManyUserInputEnvelope;
    set?: Prisma.MaintenanceRequestWhereUniqueInput | Prisma.MaintenanceRequestWhereUniqueInput[];
    disconnect?: Prisma.MaintenanceRequestWhereUniqueInput | Prisma.MaintenanceRequestWhereUniqueInput[];
    delete?: Prisma.MaintenanceRequestWhereUniqueInput | Prisma.MaintenanceRequestWhereUniqueInput[];
    connect?: Prisma.MaintenanceRequestWhereUniqueInput | Prisma.MaintenanceRequestWhereUniqueInput[];
    update?: Prisma.MaintenanceRequestUpdateWithWhereUniqueWithoutUserInput | Prisma.MaintenanceRequestUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MaintenanceRequestUpdateManyWithWhereWithoutUserInput | Prisma.MaintenanceRequestUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MaintenanceRequestScalarWhereInput | Prisma.MaintenanceRequestScalarWhereInput[];
};
export type MaintenanceRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MaintenanceRequestCreateWithoutUserInput, Prisma.MaintenanceRequestUncheckedCreateWithoutUserInput> | Prisma.MaintenanceRequestCreateWithoutUserInput[] | Prisma.MaintenanceRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MaintenanceRequestCreateOrConnectWithoutUserInput | Prisma.MaintenanceRequestCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MaintenanceRequestUpsertWithWhereUniqueWithoutUserInput | Prisma.MaintenanceRequestUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MaintenanceRequestCreateManyUserInputEnvelope;
    set?: Prisma.MaintenanceRequestWhereUniqueInput | Prisma.MaintenanceRequestWhereUniqueInput[];
    disconnect?: Prisma.MaintenanceRequestWhereUniqueInput | Prisma.MaintenanceRequestWhereUniqueInput[];
    delete?: Prisma.MaintenanceRequestWhereUniqueInput | Prisma.MaintenanceRequestWhereUniqueInput[];
    connect?: Prisma.MaintenanceRequestWhereUniqueInput | Prisma.MaintenanceRequestWhereUniqueInput[];
    update?: Prisma.MaintenanceRequestUpdateWithWhereUniqueWithoutUserInput | Prisma.MaintenanceRequestUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MaintenanceRequestUpdateManyWithWhereWithoutUserInput | Prisma.MaintenanceRequestUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MaintenanceRequestScalarWhereInput | Prisma.MaintenanceRequestScalarWhereInput[];
};
export type MaintenanceRequestCreateWithoutPropertyInput = {
    id?: string;
    title: string;
    description: string;
    imageUrl?: string | null;
    status?: $Enums.MaintenanceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutMaintenanceRequestInput;
};
export type MaintenanceRequestUncheckedCreateWithoutPropertyInput = {
    id?: string;
    tenantId: string;
    title: string;
    description: string;
    imageUrl?: string | null;
    status?: $Enums.MaintenanceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MaintenanceRequestCreateOrConnectWithoutPropertyInput = {
    where: Prisma.MaintenanceRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.MaintenanceRequestCreateWithoutPropertyInput, Prisma.MaintenanceRequestUncheckedCreateWithoutPropertyInput>;
};
export type MaintenanceRequestCreateManyPropertyInputEnvelope = {
    data: Prisma.MaintenanceRequestCreateManyPropertyInput | Prisma.MaintenanceRequestCreateManyPropertyInput[];
    skipDuplicates?: boolean;
};
export type MaintenanceRequestUpsertWithWhereUniqueWithoutPropertyInput = {
    where: Prisma.MaintenanceRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.MaintenanceRequestUpdateWithoutPropertyInput, Prisma.MaintenanceRequestUncheckedUpdateWithoutPropertyInput>;
    create: Prisma.XOR<Prisma.MaintenanceRequestCreateWithoutPropertyInput, Prisma.MaintenanceRequestUncheckedCreateWithoutPropertyInput>;
};
export type MaintenanceRequestUpdateWithWhereUniqueWithoutPropertyInput = {
    where: Prisma.MaintenanceRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.MaintenanceRequestUpdateWithoutPropertyInput, Prisma.MaintenanceRequestUncheckedUpdateWithoutPropertyInput>;
};
export type MaintenanceRequestUpdateManyWithWhereWithoutPropertyInput = {
    where: Prisma.MaintenanceRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.MaintenanceRequestUpdateManyMutationInput, Prisma.MaintenanceRequestUncheckedUpdateManyWithoutPropertyInput>;
};
export type MaintenanceRequestScalarWhereInput = {
    AND?: Prisma.MaintenanceRequestScalarWhereInput | Prisma.MaintenanceRequestScalarWhereInput[];
    OR?: Prisma.MaintenanceRequestScalarWhereInput[];
    NOT?: Prisma.MaintenanceRequestScalarWhereInput | Prisma.MaintenanceRequestScalarWhereInput[];
    id?: Prisma.UuidFilter<"MaintenanceRequest"> | string;
    tenantId?: Prisma.UuidFilter<"MaintenanceRequest"> | string;
    propertyId?: Prisma.UuidFilter<"MaintenanceRequest"> | string;
    title?: Prisma.StringFilter<"MaintenanceRequest"> | string;
    description?: Prisma.StringFilter<"MaintenanceRequest"> | string;
    imageUrl?: Prisma.StringNullableFilter<"MaintenanceRequest"> | string | null;
    status?: Prisma.EnumMaintenanceStatusFilter<"MaintenanceRequest"> | $Enums.MaintenanceStatus;
    createdAt?: Prisma.DateTimeFilter<"MaintenanceRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MaintenanceRequest"> | Date | string;
};
export type MaintenanceRequestCreateWithoutUserInput = {
    id?: string;
    title: string;
    description: string;
    imageUrl?: string | null;
    status?: $Enums.MaintenanceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Property: Prisma.PropertyCreateNestedOneWithoutMaintenanceRequestInput;
};
export type MaintenanceRequestUncheckedCreateWithoutUserInput = {
    id?: string;
    propertyId: string;
    title: string;
    description: string;
    imageUrl?: string | null;
    status?: $Enums.MaintenanceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MaintenanceRequestCreateOrConnectWithoutUserInput = {
    where: Prisma.MaintenanceRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.MaintenanceRequestCreateWithoutUserInput, Prisma.MaintenanceRequestUncheckedCreateWithoutUserInput>;
};
export type MaintenanceRequestCreateManyUserInputEnvelope = {
    data: Prisma.MaintenanceRequestCreateManyUserInput | Prisma.MaintenanceRequestCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type MaintenanceRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.MaintenanceRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.MaintenanceRequestUpdateWithoutUserInput, Prisma.MaintenanceRequestUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.MaintenanceRequestCreateWithoutUserInput, Prisma.MaintenanceRequestUncheckedCreateWithoutUserInput>;
};
export type MaintenanceRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.MaintenanceRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.MaintenanceRequestUpdateWithoutUserInput, Prisma.MaintenanceRequestUncheckedUpdateWithoutUserInput>;
};
export type MaintenanceRequestUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.MaintenanceRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.MaintenanceRequestUpdateManyMutationInput, Prisma.MaintenanceRequestUncheckedUpdateManyWithoutUserInput>;
};
export type MaintenanceRequestCreateManyPropertyInput = {
    id?: string;
    tenantId: string;
    title: string;
    description: string;
    imageUrl?: string | null;
    status?: $Enums.MaintenanceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MaintenanceRequestUpdateWithoutPropertyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutMaintenanceRequestNestedInput;
};
export type MaintenanceRequestUncheckedUpdateWithoutPropertyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MaintenanceRequestUncheckedUpdateManyWithoutPropertyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MaintenanceRequestCreateManyUserInput = {
    id?: string;
    propertyId: string;
    title: string;
    description: string;
    imageUrl?: string | null;
    status?: $Enums.MaintenanceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MaintenanceRequestUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Property?: Prisma.PropertyUpdateOneRequiredWithoutMaintenanceRequestNestedInput;
};
export type MaintenanceRequestUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    propertyId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MaintenanceRequestUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    propertyId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MaintenanceRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    propertyId?: boolean;
    title?: boolean;
    description?: boolean;
    imageUrl?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["maintenanceRequest"]>;
export type MaintenanceRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    propertyId?: boolean;
    title?: boolean;
    description?: boolean;
    imageUrl?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["maintenanceRequest"]>;
export type MaintenanceRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    propertyId?: boolean;
    title?: boolean;
    description?: boolean;
    imageUrl?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["maintenanceRequest"]>;
export type MaintenanceRequestSelectScalar = {
    id?: boolean;
    tenantId?: boolean;
    propertyId?: boolean;
    title?: boolean;
    description?: boolean;
    imageUrl?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MaintenanceRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "propertyId" | "title" | "description" | "imageUrl" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["maintenanceRequest"]>;
export type MaintenanceRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type MaintenanceRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type MaintenanceRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $MaintenanceRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MaintenanceRequest";
    objects: {
        Property: Prisma.$PropertyPayload<ExtArgs>;
        User: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tenantId: string;
        propertyId: string;
        title: string;
        description: string;
        imageUrl: string | null;
        status: $Enums.MaintenanceStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["maintenanceRequest"]>;
    composites: {};
};
export type MaintenanceRequestGetPayload<S extends boolean | null | undefined | MaintenanceRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MaintenanceRequestPayload, S>;
export type MaintenanceRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MaintenanceRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MaintenanceRequestCountAggregateInputType | true;
};
export interface MaintenanceRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MaintenanceRequest'];
        meta: {
            name: 'MaintenanceRequest';
        };
    };
    findUnique<T extends MaintenanceRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, MaintenanceRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MaintenanceRequestClient<runtime.Types.Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MaintenanceRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MaintenanceRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MaintenanceRequestClient<runtime.Types.Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MaintenanceRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, MaintenanceRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__MaintenanceRequestClient<runtime.Types.Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MaintenanceRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MaintenanceRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MaintenanceRequestClient<runtime.Types.Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MaintenanceRequestFindManyArgs>(args?: Prisma.SelectSubset<T, MaintenanceRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MaintenanceRequestCreateArgs>(args: Prisma.SelectSubset<T, MaintenanceRequestCreateArgs<ExtArgs>>): Prisma.Prisma__MaintenanceRequestClient<runtime.Types.Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MaintenanceRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, MaintenanceRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MaintenanceRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MaintenanceRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MaintenanceRequestDeleteArgs>(args: Prisma.SelectSubset<T, MaintenanceRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__MaintenanceRequestClient<runtime.Types.Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MaintenanceRequestUpdateArgs>(args: Prisma.SelectSubset<T, MaintenanceRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__MaintenanceRequestClient<runtime.Types.Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MaintenanceRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, MaintenanceRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MaintenanceRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, MaintenanceRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MaintenanceRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MaintenanceRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MaintenanceRequestUpsertArgs>(args: Prisma.SelectSubset<T, MaintenanceRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__MaintenanceRequestClient<runtime.Types.Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MaintenanceRequestCountArgs>(args?: Prisma.Subset<T, MaintenanceRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MaintenanceRequestCountAggregateOutputType> : number>;
    aggregate<T extends MaintenanceRequestAggregateArgs>(args: Prisma.Subset<T, MaintenanceRequestAggregateArgs>): Prisma.PrismaPromise<GetMaintenanceRequestAggregateType<T>>;
    groupBy<T extends MaintenanceRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MaintenanceRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: MaintenanceRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MaintenanceRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenanceRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MaintenanceRequestFieldRefs;
}
export interface Prisma__MaintenanceRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Property<T extends Prisma.PropertyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PropertyDefaultArgs<ExtArgs>>): Prisma.Prisma__PropertyClient<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    User<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MaintenanceRequestFieldRefs {
    readonly id: Prisma.FieldRef<"MaintenanceRequest", 'String'>;
    readonly tenantId: Prisma.FieldRef<"MaintenanceRequest", 'String'>;
    readonly propertyId: Prisma.FieldRef<"MaintenanceRequest", 'String'>;
    readonly title: Prisma.FieldRef<"MaintenanceRequest", 'String'>;
    readonly description: Prisma.FieldRef<"MaintenanceRequest", 'String'>;
    readonly imageUrl: Prisma.FieldRef<"MaintenanceRequest", 'String'>;
    readonly status: Prisma.FieldRef<"MaintenanceRequest", 'MaintenanceStatus'>;
    readonly createdAt: Prisma.FieldRef<"MaintenanceRequest", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"MaintenanceRequest", 'DateTime'>;
}
export type MaintenanceRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaintenanceRequestSelect<ExtArgs> | null;
    omit?: Prisma.MaintenanceRequestOmit<ExtArgs> | null;
    include?: Prisma.MaintenanceRequestInclude<ExtArgs> | null;
    where: Prisma.MaintenanceRequestWhereUniqueInput;
};
export type MaintenanceRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaintenanceRequestSelect<ExtArgs> | null;
    omit?: Prisma.MaintenanceRequestOmit<ExtArgs> | null;
    include?: Prisma.MaintenanceRequestInclude<ExtArgs> | null;
    where: Prisma.MaintenanceRequestWhereUniqueInput;
};
export type MaintenanceRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaintenanceRequestSelect<ExtArgs> | null;
    omit?: Prisma.MaintenanceRequestOmit<ExtArgs> | null;
    include?: Prisma.MaintenanceRequestInclude<ExtArgs> | null;
    where?: Prisma.MaintenanceRequestWhereInput;
    orderBy?: Prisma.MaintenanceRequestOrderByWithRelationInput | Prisma.MaintenanceRequestOrderByWithRelationInput[];
    cursor?: Prisma.MaintenanceRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MaintenanceRequestScalarFieldEnum | Prisma.MaintenanceRequestScalarFieldEnum[];
};
export type MaintenanceRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaintenanceRequestSelect<ExtArgs> | null;
    omit?: Prisma.MaintenanceRequestOmit<ExtArgs> | null;
    include?: Prisma.MaintenanceRequestInclude<ExtArgs> | null;
    where?: Prisma.MaintenanceRequestWhereInput;
    orderBy?: Prisma.MaintenanceRequestOrderByWithRelationInput | Prisma.MaintenanceRequestOrderByWithRelationInput[];
    cursor?: Prisma.MaintenanceRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MaintenanceRequestScalarFieldEnum | Prisma.MaintenanceRequestScalarFieldEnum[];
};
export type MaintenanceRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaintenanceRequestSelect<ExtArgs> | null;
    omit?: Prisma.MaintenanceRequestOmit<ExtArgs> | null;
    include?: Prisma.MaintenanceRequestInclude<ExtArgs> | null;
    where?: Prisma.MaintenanceRequestWhereInput;
    orderBy?: Prisma.MaintenanceRequestOrderByWithRelationInput | Prisma.MaintenanceRequestOrderByWithRelationInput[];
    cursor?: Prisma.MaintenanceRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MaintenanceRequestScalarFieldEnum | Prisma.MaintenanceRequestScalarFieldEnum[];
};
export type MaintenanceRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaintenanceRequestSelect<ExtArgs> | null;
    omit?: Prisma.MaintenanceRequestOmit<ExtArgs> | null;
    include?: Prisma.MaintenanceRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MaintenanceRequestCreateInput, Prisma.MaintenanceRequestUncheckedCreateInput>;
};
export type MaintenanceRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MaintenanceRequestCreateManyInput | Prisma.MaintenanceRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MaintenanceRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaintenanceRequestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MaintenanceRequestOmit<ExtArgs> | null;
    data: Prisma.MaintenanceRequestCreateManyInput | Prisma.MaintenanceRequestCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MaintenanceRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MaintenanceRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaintenanceRequestSelect<ExtArgs> | null;
    omit?: Prisma.MaintenanceRequestOmit<ExtArgs> | null;
    include?: Prisma.MaintenanceRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MaintenanceRequestUpdateInput, Prisma.MaintenanceRequestUncheckedUpdateInput>;
    where: Prisma.MaintenanceRequestWhereUniqueInput;
};
export type MaintenanceRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MaintenanceRequestUpdateManyMutationInput, Prisma.MaintenanceRequestUncheckedUpdateManyInput>;
    where?: Prisma.MaintenanceRequestWhereInput;
    limit?: number;
};
export type MaintenanceRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaintenanceRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MaintenanceRequestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MaintenanceRequestUpdateManyMutationInput, Prisma.MaintenanceRequestUncheckedUpdateManyInput>;
    where?: Prisma.MaintenanceRequestWhereInput;
    limit?: number;
    include?: Prisma.MaintenanceRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MaintenanceRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaintenanceRequestSelect<ExtArgs> | null;
    omit?: Prisma.MaintenanceRequestOmit<ExtArgs> | null;
    include?: Prisma.MaintenanceRequestInclude<ExtArgs> | null;
    where: Prisma.MaintenanceRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.MaintenanceRequestCreateInput, Prisma.MaintenanceRequestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MaintenanceRequestUpdateInput, Prisma.MaintenanceRequestUncheckedUpdateInput>;
};
export type MaintenanceRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaintenanceRequestSelect<ExtArgs> | null;
    omit?: Prisma.MaintenanceRequestOmit<ExtArgs> | null;
    include?: Prisma.MaintenanceRequestInclude<ExtArgs> | null;
    where: Prisma.MaintenanceRequestWhereUniqueInput;
};
export type MaintenanceRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MaintenanceRequestWhereInput;
    limit?: number;
};
export type MaintenanceRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaintenanceRequestSelect<ExtArgs> | null;
    omit?: Prisma.MaintenanceRequestOmit<ExtArgs> | null;
    include?: Prisma.MaintenanceRequestInclude<ExtArgs> | null;
};
