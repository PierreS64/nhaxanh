import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MeterReadingModel = runtime.Types.Result.DefaultSelection<Prisma.$MeterReadingPayload>;
export type AggregateMeterReading = {
    _count: MeterReadingCountAggregateOutputType | null;
    _avg: MeterReadingAvgAggregateOutputType | null;
    _sum: MeterReadingSumAggregateOutputType | null;
    _min: MeterReadingMinAggregateOutputType | null;
    _max: MeterReadingMaxAggregateOutputType | null;
};
export type MeterReadingAvgAggregateOutputType = {
    month: number | null;
    year: number | null;
    electricityUsage: number | null;
    waterUsage: number | null;
};
export type MeterReadingSumAggregateOutputType = {
    month: number | null;
    year: number | null;
    electricityUsage: number | null;
    waterUsage: number | null;
};
export type MeterReadingMinAggregateOutputType = {
    id: string | null;
    propertyId: string | null;
    month: number | null;
    year: number | null;
    electricityUsage: number | null;
    waterUsage: number | null;
    meterImageUrl: string | null;
    createdAt: Date | null;
};
export type MeterReadingMaxAggregateOutputType = {
    id: string | null;
    propertyId: string | null;
    month: number | null;
    year: number | null;
    electricityUsage: number | null;
    waterUsage: number | null;
    meterImageUrl: string | null;
    createdAt: Date | null;
};
export type MeterReadingCountAggregateOutputType = {
    id: number;
    propertyId: number;
    month: number;
    year: number;
    electricityUsage: number;
    waterUsage: number;
    meterImageUrl: number;
    createdAt: number;
    _all: number;
};
export type MeterReadingAvgAggregateInputType = {
    month?: true;
    year?: true;
    electricityUsage?: true;
    waterUsage?: true;
};
export type MeterReadingSumAggregateInputType = {
    month?: true;
    year?: true;
    electricityUsage?: true;
    waterUsage?: true;
};
export type MeterReadingMinAggregateInputType = {
    id?: true;
    propertyId?: true;
    month?: true;
    year?: true;
    electricityUsage?: true;
    waterUsage?: true;
    meterImageUrl?: true;
    createdAt?: true;
};
export type MeterReadingMaxAggregateInputType = {
    id?: true;
    propertyId?: true;
    month?: true;
    year?: true;
    electricityUsage?: true;
    waterUsage?: true;
    meterImageUrl?: true;
    createdAt?: true;
};
export type MeterReadingCountAggregateInputType = {
    id?: true;
    propertyId?: true;
    month?: true;
    year?: true;
    electricityUsage?: true;
    waterUsage?: true;
    meterImageUrl?: true;
    createdAt?: true;
    _all?: true;
};
export type MeterReadingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MeterReadingWhereInput;
    orderBy?: Prisma.MeterReadingOrderByWithRelationInput | Prisma.MeterReadingOrderByWithRelationInput[];
    cursor?: Prisma.MeterReadingWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MeterReadingCountAggregateInputType;
    _avg?: MeterReadingAvgAggregateInputType;
    _sum?: MeterReadingSumAggregateInputType;
    _min?: MeterReadingMinAggregateInputType;
    _max?: MeterReadingMaxAggregateInputType;
};
export type GetMeterReadingAggregateType<T extends MeterReadingAggregateArgs> = {
    [P in keyof T & keyof AggregateMeterReading]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMeterReading[P]> : Prisma.GetScalarType<T[P], AggregateMeterReading[P]>;
};
export type MeterReadingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MeterReadingWhereInput;
    orderBy?: Prisma.MeterReadingOrderByWithAggregationInput | Prisma.MeterReadingOrderByWithAggregationInput[];
    by: Prisma.MeterReadingScalarFieldEnum[] | Prisma.MeterReadingScalarFieldEnum;
    having?: Prisma.MeterReadingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MeterReadingCountAggregateInputType | true;
    _avg?: MeterReadingAvgAggregateInputType;
    _sum?: MeterReadingSumAggregateInputType;
    _min?: MeterReadingMinAggregateInputType;
    _max?: MeterReadingMaxAggregateInputType;
};
export type MeterReadingGroupByOutputType = {
    id: string;
    propertyId: string;
    month: number;
    year: number;
    electricityUsage: number;
    waterUsage: number;
    meterImageUrl: string | null;
    createdAt: Date;
    _count: MeterReadingCountAggregateOutputType | null;
    _avg: MeterReadingAvgAggregateOutputType | null;
    _sum: MeterReadingSumAggregateOutputType | null;
    _min: MeterReadingMinAggregateOutputType | null;
    _max: MeterReadingMaxAggregateOutputType | null;
};
export type GetMeterReadingGroupByPayload<T extends MeterReadingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MeterReadingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MeterReadingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MeterReadingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MeterReadingGroupByOutputType[P]>;
}>>;
export type MeterReadingWhereInput = {
    AND?: Prisma.MeterReadingWhereInput | Prisma.MeterReadingWhereInput[];
    OR?: Prisma.MeterReadingWhereInput[];
    NOT?: Prisma.MeterReadingWhereInput | Prisma.MeterReadingWhereInput[];
    id?: Prisma.UuidFilter<"MeterReading"> | string;
    propertyId?: Prisma.UuidFilter<"MeterReading"> | string;
    month?: Prisma.IntFilter<"MeterReading"> | number;
    year?: Prisma.IntFilter<"MeterReading"> | number;
    electricityUsage?: Prisma.FloatFilter<"MeterReading"> | number;
    waterUsage?: Prisma.FloatFilter<"MeterReading"> | number;
    meterImageUrl?: Prisma.StringNullableFilter<"MeterReading"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"MeterReading"> | Date | string;
    Property?: Prisma.XOR<Prisma.PropertyScalarRelationFilter, Prisma.PropertyWhereInput>;
};
export type MeterReadingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    electricityUsage?: Prisma.SortOrder;
    waterUsage?: Prisma.SortOrder;
    meterImageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    Property?: Prisma.PropertyOrderByWithRelationInput;
};
export type MeterReadingWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    propertyId_month_year?: Prisma.MeterReadingPropertyIdMonthYearCompoundUniqueInput;
    AND?: Prisma.MeterReadingWhereInput | Prisma.MeterReadingWhereInput[];
    OR?: Prisma.MeterReadingWhereInput[];
    NOT?: Prisma.MeterReadingWhereInput | Prisma.MeterReadingWhereInput[];
    propertyId?: Prisma.UuidFilter<"MeterReading"> | string;
    month?: Prisma.IntFilter<"MeterReading"> | number;
    year?: Prisma.IntFilter<"MeterReading"> | number;
    electricityUsage?: Prisma.FloatFilter<"MeterReading"> | number;
    waterUsage?: Prisma.FloatFilter<"MeterReading"> | number;
    meterImageUrl?: Prisma.StringNullableFilter<"MeterReading"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"MeterReading"> | Date | string;
    Property?: Prisma.XOR<Prisma.PropertyScalarRelationFilter, Prisma.PropertyWhereInput>;
}, "id" | "propertyId_month_year">;
export type MeterReadingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    electricityUsage?: Prisma.SortOrder;
    waterUsage?: Prisma.SortOrder;
    meterImageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MeterReadingCountOrderByAggregateInput;
    _avg?: Prisma.MeterReadingAvgOrderByAggregateInput;
    _max?: Prisma.MeterReadingMaxOrderByAggregateInput;
    _min?: Prisma.MeterReadingMinOrderByAggregateInput;
    _sum?: Prisma.MeterReadingSumOrderByAggregateInput;
};
export type MeterReadingScalarWhereWithAggregatesInput = {
    AND?: Prisma.MeterReadingScalarWhereWithAggregatesInput | Prisma.MeterReadingScalarWhereWithAggregatesInput[];
    OR?: Prisma.MeterReadingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MeterReadingScalarWhereWithAggregatesInput | Prisma.MeterReadingScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"MeterReading"> | string;
    propertyId?: Prisma.UuidWithAggregatesFilter<"MeterReading"> | string;
    month?: Prisma.IntWithAggregatesFilter<"MeterReading"> | number;
    year?: Prisma.IntWithAggregatesFilter<"MeterReading"> | number;
    electricityUsage?: Prisma.FloatWithAggregatesFilter<"MeterReading"> | number;
    waterUsage?: Prisma.FloatWithAggregatesFilter<"MeterReading"> | number;
    meterImageUrl?: Prisma.StringNullableWithAggregatesFilter<"MeterReading"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MeterReading"> | Date | string;
};
export type MeterReadingCreateInput = {
    id?: string;
    month: number;
    year: number;
    electricityUsage: number;
    waterUsage: number;
    meterImageUrl?: string | null;
    createdAt?: Date | string;
    Property: Prisma.PropertyCreateNestedOneWithoutMeterReadingInput;
};
export type MeterReadingUncheckedCreateInput = {
    id?: string;
    propertyId: string;
    month: number;
    year: number;
    electricityUsage: number;
    waterUsage: number;
    meterImageUrl?: string | null;
    createdAt?: Date | string;
};
export type MeterReadingUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.IntFieldUpdateOperationsInput | number;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    electricityUsage?: Prisma.FloatFieldUpdateOperationsInput | number;
    waterUsage?: Prisma.FloatFieldUpdateOperationsInput | number;
    meterImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Property?: Prisma.PropertyUpdateOneRequiredWithoutMeterReadingNestedInput;
};
export type MeterReadingUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    propertyId?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.IntFieldUpdateOperationsInput | number;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    electricityUsage?: Prisma.FloatFieldUpdateOperationsInput | number;
    waterUsage?: Prisma.FloatFieldUpdateOperationsInput | number;
    meterImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeterReadingCreateManyInput = {
    id?: string;
    propertyId: string;
    month: number;
    year: number;
    electricityUsage: number;
    waterUsage: number;
    meterImageUrl?: string | null;
    createdAt?: Date | string;
};
export type MeterReadingUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.IntFieldUpdateOperationsInput | number;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    electricityUsage?: Prisma.FloatFieldUpdateOperationsInput | number;
    waterUsage?: Prisma.FloatFieldUpdateOperationsInput | number;
    meterImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeterReadingUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    propertyId?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.IntFieldUpdateOperationsInput | number;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    electricityUsage?: Prisma.FloatFieldUpdateOperationsInput | number;
    waterUsage?: Prisma.FloatFieldUpdateOperationsInput | number;
    meterImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeterReadingPropertyIdMonthYearCompoundUniqueInput = {
    propertyId: string;
    month: number;
    year: number;
};
export type MeterReadingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    electricityUsage?: Prisma.SortOrder;
    waterUsage?: Prisma.SortOrder;
    meterImageUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MeterReadingAvgOrderByAggregateInput = {
    month?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    electricityUsage?: Prisma.SortOrder;
    waterUsage?: Prisma.SortOrder;
};
export type MeterReadingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    electricityUsage?: Prisma.SortOrder;
    waterUsage?: Prisma.SortOrder;
    meterImageUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MeterReadingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    electricityUsage?: Prisma.SortOrder;
    waterUsage?: Prisma.SortOrder;
    meterImageUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MeterReadingSumOrderByAggregateInput = {
    month?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    electricityUsage?: Prisma.SortOrder;
    waterUsage?: Prisma.SortOrder;
};
export type MeterReadingListRelationFilter = {
    every?: Prisma.MeterReadingWhereInput;
    some?: Prisma.MeterReadingWhereInput;
    none?: Prisma.MeterReadingWhereInput;
};
export type MeterReadingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type MeterReadingCreateNestedManyWithoutPropertyInput = {
    create?: Prisma.XOR<Prisma.MeterReadingCreateWithoutPropertyInput, Prisma.MeterReadingUncheckedCreateWithoutPropertyInput> | Prisma.MeterReadingCreateWithoutPropertyInput[] | Prisma.MeterReadingUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: Prisma.MeterReadingCreateOrConnectWithoutPropertyInput | Prisma.MeterReadingCreateOrConnectWithoutPropertyInput[];
    createMany?: Prisma.MeterReadingCreateManyPropertyInputEnvelope;
    connect?: Prisma.MeterReadingWhereUniqueInput | Prisma.MeterReadingWhereUniqueInput[];
};
export type MeterReadingUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: Prisma.XOR<Prisma.MeterReadingCreateWithoutPropertyInput, Prisma.MeterReadingUncheckedCreateWithoutPropertyInput> | Prisma.MeterReadingCreateWithoutPropertyInput[] | Prisma.MeterReadingUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: Prisma.MeterReadingCreateOrConnectWithoutPropertyInput | Prisma.MeterReadingCreateOrConnectWithoutPropertyInput[];
    createMany?: Prisma.MeterReadingCreateManyPropertyInputEnvelope;
    connect?: Prisma.MeterReadingWhereUniqueInput | Prisma.MeterReadingWhereUniqueInput[];
};
export type MeterReadingUpdateManyWithoutPropertyNestedInput = {
    create?: Prisma.XOR<Prisma.MeterReadingCreateWithoutPropertyInput, Prisma.MeterReadingUncheckedCreateWithoutPropertyInput> | Prisma.MeterReadingCreateWithoutPropertyInput[] | Prisma.MeterReadingUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: Prisma.MeterReadingCreateOrConnectWithoutPropertyInput | Prisma.MeterReadingCreateOrConnectWithoutPropertyInput[];
    upsert?: Prisma.MeterReadingUpsertWithWhereUniqueWithoutPropertyInput | Prisma.MeterReadingUpsertWithWhereUniqueWithoutPropertyInput[];
    createMany?: Prisma.MeterReadingCreateManyPropertyInputEnvelope;
    set?: Prisma.MeterReadingWhereUniqueInput | Prisma.MeterReadingWhereUniqueInput[];
    disconnect?: Prisma.MeterReadingWhereUniqueInput | Prisma.MeterReadingWhereUniqueInput[];
    delete?: Prisma.MeterReadingWhereUniqueInput | Prisma.MeterReadingWhereUniqueInput[];
    connect?: Prisma.MeterReadingWhereUniqueInput | Prisma.MeterReadingWhereUniqueInput[];
    update?: Prisma.MeterReadingUpdateWithWhereUniqueWithoutPropertyInput | Prisma.MeterReadingUpdateWithWhereUniqueWithoutPropertyInput[];
    updateMany?: Prisma.MeterReadingUpdateManyWithWhereWithoutPropertyInput | Prisma.MeterReadingUpdateManyWithWhereWithoutPropertyInput[];
    deleteMany?: Prisma.MeterReadingScalarWhereInput | Prisma.MeterReadingScalarWhereInput[];
};
export type MeterReadingUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: Prisma.XOR<Prisma.MeterReadingCreateWithoutPropertyInput, Prisma.MeterReadingUncheckedCreateWithoutPropertyInput> | Prisma.MeterReadingCreateWithoutPropertyInput[] | Prisma.MeterReadingUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: Prisma.MeterReadingCreateOrConnectWithoutPropertyInput | Prisma.MeterReadingCreateOrConnectWithoutPropertyInput[];
    upsert?: Prisma.MeterReadingUpsertWithWhereUniqueWithoutPropertyInput | Prisma.MeterReadingUpsertWithWhereUniqueWithoutPropertyInput[];
    createMany?: Prisma.MeterReadingCreateManyPropertyInputEnvelope;
    set?: Prisma.MeterReadingWhereUniqueInput | Prisma.MeterReadingWhereUniqueInput[];
    disconnect?: Prisma.MeterReadingWhereUniqueInput | Prisma.MeterReadingWhereUniqueInput[];
    delete?: Prisma.MeterReadingWhereUniqueInput | Prisma.MeterReadingWhereUniqueInput[];
    connect?: Prisma.MeterReadingWhereUniqueInput | Prisma.MeterReadingWhereUniqueInput[];
    update?: Prisma.MeterReadingUpdateWithWhereUniqueWithoutPropertyInput | Prisma.MeterReadingUpdateWithWhereUniqueWithoutPropertyInput[];
    updateMany?: Prisma.MeterReadingUpdateManyWithWhereWithoutPropertyInput | Prisma.MeterReadingUpdateManyWithWhereWithoutPropertyInput[];
    deleteMany?: Prisma.MeterReadingScalarWhereInput | Prisma.MeterReadingScalarWhereInput[];
};
export type MeterReadingCreateWithoutPropertyInput = {
    id?: string;
    month: number;
    year: number;
    electricityUsage: number;
    waterUsage: number;
    meterImageUrl?: string | null;
    createdAt?: Date | string;
};
export type MeterReadingUncheckedCreateWithoutPropertyInput = {
    id?: string;
    month: number;
    year: number;
    electricityUsage: number;
    waterUsage: number;
    meterImageUrl?: string | null;
    createdAt?: Date | string;
};
export type MeterReadingCreateOrConnectWithoutPropertyInput = {
    where: Prisma.MeterReadingWhereUniqueInput;
    create: Prisma.XOR<Prisma.MeterReadingCreateWithoutPropertyInput, Prisma.MeterReadingUncheckedCreateWithoutPropertyInput>;
};
export type MeterReadingCreateManyPropertyInputEnvelope = {
    data: Prisma.MeterReadingCreateManyPropertyInput | Prisma.MeterReadingCreateManyPropertyInput[];
    skipDuplicates?: boolean;
};
export type MeterReadingUpsertWithWhereUniqueWithoutPropertyInput = {
    where: Prisma.MeterReadingWhereUniqueInput;
    update: Prisma.XOR<Prisma.MeterReadingUpdateWithoutPropertyInput, Prisma.MeterReadingUncheckedUpdateWithoutPropertyInput>;
    create: Prisma.XOR<Prisma.MeterReadingCreateWithoutPropertyInput, Prisma.MeterReadingUncheckedCreateWithoutPropertyInput>;
};
export type MeterReadingUpdateWithWhereUniqueWithoutPropertyInput = {
    where: Prisma.MeterReadingWhereUniqueInput;
    data: Prisma.XOR<Prisma.MeterReadingUpdateWithoutPropertyInput, Prisma.MeterReadingUncheckedUpdateWithoutPropertyInput>;
};
export type MeterReadingUpdateManyWithWhereWithoutPropertyInput = {
    where: Prisma.MeterReadingScalarWhereInput;
    data: Prisma.XOR<Prisma.MeterReadingUpdateManyMutationInput, Prisma.MeterReadingUncheckedUpdateManyWithoutPropertyInput>;
};
export type MeterReadingScalarWhereInput = {
    AND?: Prisma.MeterReadingScalarWhereInput | Prisma.MeterReadingScalarWhereInput[];
    OR?: Prisma.MeterReadingScalarWhereInput[];
    NOT?: Prisma.MeterReadingScalarWhereInput | Prisma.MeterReadingScalarWhereInput[];
    id?: Prisma.UuidFilter<"MeterReading"> | string;
    propertyId?: Prisma.UuidFilter<"MeterReading"> | string;
    month?: Prisma.IntFilter<"MeterReading"> | number;
    year?: Prisma.IntFilter<"MeterReading"> | number;
    electricityUsage?: Prisma.FloatFilter<"MeterReading"> | number;
    waterUsage?: Prisma.FloatFilter<"MeterReading"> | number;
    meterImageUrl?: Prisma.StringNullableFilter<"MeterReading"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"MeterReading"> | Date | string;
};
export type MeterReadingCreateManyPropertyInput = {
    id?: string;
    month: number;
    year: number;
    electricityUsage: number;
    waterUsage: number;
    meterImageUrl?: string | null;
    createdAt?: Date | string;
};
export type MeterReadingUpdateWithoutPropertyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.IntFieldUpdateOperationsInput | number;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    electricityUsage?: Prisma.FloatFieldUpdateOperationsInput | number;
    waterUsage?: Prisma.FloatFieldUpdateOperationsInput | number;
    meterImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeterReadingUncheckedUpdateWithoutPropertyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.IntFieldUpdateOperationsInput | number;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    electricityUsage?: Prisma.FloatFieldUpdateOperationsInput | number;
    waterUsage?: Prisma.FloatFieldUpdateOperationsInput | number;
    meterImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeterReadingUncheckedUpdateManyWithoutPropertyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.IntFieldUpdateOperationsInput | number;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    electricityUsage?: Prisma.FloatFieldUpdateOperationsInput | number;
    waterUsage?: Prisma.FloatFieldUpdateOperationsInput | number;
    meterImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeterReadingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    propertyId?: boolean;
    month?: boolean;
    year?: boolean;
    electricityUsage?: boolean;
    waterUsage?: boolean;
    meterImageUrl?: boolean;
    createdAt?: boolean;
    Property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["meterReading"]>;
export type MeterReadingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    propertyId?: boolean;
    month?: boolean;
    year?: boolean;
    electricityUsage?: boolean;
    waterUsage?: boolean;
    meterImageUrl?: boolean;
    createdAt?: boolean;
    Property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["meterReading"]>;
export type MeterReadingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    propertyId?: boolean;
    month?: boolean;
    year?: boolean;
    electricityUsage?: boolean;
    waterUsage?: boolean;
    meterImageUrl?: boolean;
    createdAt?: boolean;
    Property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["meterReading"]>;
export type MeterReadingSelectScalar = {
    id?: boolean;
    propertyId?: boolean;
    month?: boolean;
    year?: boolean;
    electricityUsage?: boolean;
    waterUsage?: boolean;
    meterImageUrl?: boolean;
    createdAt?: boolean;
};
export type MeterReadingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "propertyId" | "month" | "year" | "electricityUsage" | "waterUsage" | "meterImageUrl" | "createdAt", ExtArgs["result"]["meterReading"]>;
export type MeterReadingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
};
export type MeterReadingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
};
export type MeterReadingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
};
export type $MeterReadingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MeterReading";
    objects: {
        Property: Prisma.$PropertyPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        propertyId: string;
        month: number;
        year: number;
        electricityUsage: number;
        waterUsage: number;
        meterImageUrl: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["meterReading"]>;
    composites: {};
};
export type MeterReadingGetPayload<S extends boolean | null | undefined | MeterReadingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MeterReadingPayload, S>;
export type MeterReadingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MeterReadingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MeterReadingCountAggregateInputType | true;
};
export interface MeterReadingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MeterReading'];
        meta: {
            name: 'MeterReading';
        };
    };
    findUnique<T extends MeterReadingFindUniqueArgs>(args: Prisma.SelectSubset<T, MeterReadingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MeterReadingClient<runtime.Types.Result.GetResult<Prisma.$MeterReadingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MeterReadingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MeterReadingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MeterReadingClient<runtime.Types.Result.GetResult<Prisma.$MeterReadingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MeterReadingFindFirstArgs>(args?: Prisma.SelectSubset<T, MeterReadingFindFirstArgs<ExtArgs>>): Prisma.Prisma__MeterReadingClient<runtime.Types.Result.GetResult<Prisma.$MeterReadingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MeterReadingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MeterReadingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MeterReadingClient<runtime.Types.Result.GetResult<Prisma.$MeterReadingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MeterReadingFindManyArgs>(args?: Prisma.SelectSubset<T, MeterReadingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MeterReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MeterReadingCreateArgs>(args: Prisma.SelectSubset<T, MeterReadingCreateArgs<ExtArgs>>): Prisma.Prisma__MeterReadingClient<runtime.Types.Result.GetResult<Prisma.$MeterReadingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MeterReadingCreateManyArgs>(args?: Prisma.SelectSubset<T, MeterReadingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MeterReadingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MeterReadingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MeterReadingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MeterReadingDeleteArgs>(args: Prisma.SelectSubset<T, MeterReadingDeleteArgs<ExtArgs>>): Prisma.Prisma__MeterReadingClient<runtime.Types.Result.GetResult<Prisma.$MeterReadingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MeterReadingUpdateArgs>(args: Prisma.SelectSubset<T, MeterReadingUpdateArgs<ExtArgs>>): Prisma.Prisma__MeterReadingClient<runtime.Types.Result.GetResult<Prisma.$MeterReadingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MeterReadingDeleteManyArgs>(args?: Prisma.SelectSubset<T, MeterReadingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MeterReadingUpdateManyArgs>(args: Prisma.SelectSubset<T, MeterReadingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MeterReadingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MeterReadingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MeterReadingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MeterReadingUpsertArgs>(args: Prisma.SelectSubset<T, MeterReadingUpsertArgs<ExtArgs>>): Prisma.Prisma__MeterReadingClient<runtime.Types.Result.GetResult<Prisma.$MeterReadingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MeterReadingCountArgs>(args?: Prisma.Subset<T, MeterReadingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MeterReadingCountAggregateOutputType> : number>;
    aggregate<T extends MeterReadingAggregateArgs>(args: Prisma.Subset<T, MeterReadingAggregateArgs>): Prisma.PrismaPromise<GetMeterReadingAggregateType<T>>;
    groupBy<T extends MeterReadingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MeterReadingGroupByArgs['orderBy'];
    } : {
        orderBy?: MeterReadingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MeterReadingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeterReadingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MeterReadingFieldRefs;
}
export interface Prisma__MeterReadingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Property<T extends Prisma.PropertyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PropertyDefaultArgs<ExtArgs>>): Prisma.Prisma__PropertyClient<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MeterReadingFieldRefs {
    readonly id: Prisma.FieldRef<"MeterReading", 'String'>;
    readonly propertyId: Prisma.FieldRef<"MeterReading", 'String'>;
    readonly month: Prisma.FieldRef<"MeterReading", 'Int'>;
    readonly year: Prisma.FieldRef<"MeterReading", 'Int'>;
    readonly electricityUsage: Prisma.FieldRef<"MeterReading", 'Float'>;
    readonly waterUsage: Prisma.FieldRef<"MeterReading", 'Float'>;
    readonly meterImageUrl: Prisma.FieldRef<"MeterReading", 'String'>;
    readonly createdAt: Prisma.FieldRef<"MeterReading", 'DateTime'>;
}
export type MeterReadingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeterReadingSelect<ExtArgs> | null;
    omit?: Prisma.MeterReadingOmit<ExtArgs> | null;
    include?: Prisma.MeterReadingInclude<ExtArgs> | null;
    where: Prisma.MeterReadingWhereUniqueInput;
};
export type MeterReadingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeterReadingSelect<ExtArgs> | null;
    omit?: Prisma.MeterReadingOmit<ExtArgs> | null;
    include?: Prisma.MeterReadingInclude<ExtArgs> | null;
    where: Prisma.MeterReadingWhereUniqueInput;
};
export type MeterReadingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeterReadingSelect<ExtArgs> | null;
    omit?: Prisma.MeterReadingOmit<ExtArgs> | null;
    include?: Prisma.MeterReadingInclude<ExtArgs> | null;
    where?: Prisma.MeterReadingWhereInput;
    orderBy?: Prisma.MeterReadingOrderByWithRelationInput | Prisma.MeterReadingOrderByWithRelationInput[];
    cursor?: Prisma.MeterReadingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MeterReadingScalarFieldEnum | Prisma.MeterReadingScalarFieldEnum[];
};
export type MeterReadingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeterReadingSelect<ExtArgs> | null;
    omit?: Prisma.MeterReadingOmit<ExtArgs> | null;
    include?: Prisma.MeterReadingInclude<ExtArgs> | null;
    where?: Prisma.MeterReadingWhereInput;
    orderBy?: Prisma.MeterReadingOrderByWithRelationInput | Prisma.MeterReadingOrderByWithRelationInput[];
    cursor?: Prisma.MeterReadingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MeterReadingScalarFieldEnum | Prisma.MeterReadingScalarFieldEnum[];
};
export type MeterReadingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeterReadingSelect<ExtArgs> | null;
    omit?: Prisma.MeterReadingOmit<ExtArgs> | null;
    include?: Prisma.MeterReadingInclude<ExtArgs> | null;
    where?: Prisma.MeterReadingWhereInput;
    orderBy?: Prisma.MeterReadingOrderByWithRelationInput | Prisma.MeterReadingOrderByWithRelationInput[];
    cursor?: Prisma.MeterReadingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MeterReadingScalarFieldEnum | Prisma.MeterReadingScalarFieldEnum[];
};
export type MeterReadingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeterReadingSelect<ExtArgs> | null;
    omit?: Prisma.MeterReadingOmit<ExtArgs> | null;
    include?: Prisma.MeterReadingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MeterReadingCreateInput, Prisma.MeterReadingUncheckedCreateInput>;
};
export type MeterReadingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MeterReadingCreateManyInput | Prisma.MeterReadingCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MeterReadingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeterReadingSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MeterReadingOmit<ExtArgs> | null;
    data: Prisma.MeterReadingCreateManyInput | Prisma.MeterReadingCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MeterReadingIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MeterReadingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeterReadingSelect<ExtArgs> | null;
    omit?: Prisma.MeterReadingOmit<ExtArgs> | null;
    include?: Prisma.MeterReadingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MeterReadingUpdateInput, Prisma.MeterReadingUncheckedUpdateInput>;
    where: Prisma.MeterReadingWhereUniqueInput;
};
export type MeterReadingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MeterReadingUpdateManyMutationInput, Prisma.MeterReadingUncheckedUpdateManyInput>;
    where?: Prisma.MeterReadingWhereInput;
    limit?: number;
};
export type MeterReadingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeterReadingSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MeterReadingOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MeterReadingUpdateManyMutationInput, Prisma.MeterReadingUncheckedUpdateManyInput>;
    where?: Prisma.MeterReadingWhereInput;
    limit?: number;
    include?: Prisma.MeterReadingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MeterReadingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeterReadingSelect<ExtArgs> | null;
    omit?: Prisma.MeterReadingOmit<ExtArgs> | null;
    include?: Prisma.MeterReadingInclude<ExtArgs> | null;
    where: Prisma.MeterReadingWhereUniqueInput;
    create: Prisma.XOR<Prisma.MeterReadingCreateInput, Prisma.MeterReadingUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MeterReadingUpdateInput, Prisma.MeterReadingUncheckedUpdateInput>;
};
export type MeterReadingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeterReadingSelect<ExtArgs> | null;
    omit?: Prisma.MeterReadingOmit<ExtArgs> | null;
    include?: Prisma.MeterReadingInclude<ExtArgs> | null;
    where: Prisma.MeterReadingWhereUniqueInput;
};
export type MeterReadingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MeterReadingWhereInput;
    limit?: number;
};
export type MeterReadingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeterReadingSelect<ExtArgs> | null;
    omit?: Prisma.MeterReadingOmit<ExtArgs> | null;
    include?: Prisma.MeterReadingInclude<ExtArgs> | null;
};
