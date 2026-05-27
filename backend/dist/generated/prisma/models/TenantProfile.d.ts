import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TenantProfileModel = runtime.Types.Result.DefaultSelection<Prisma.$TenantProfilePayload>;
export type AggregateTenantProfile = {
    _count: TenantProfileCountAggregateOutputType | null;
    _avg: TenantProfileAvgAggregateOutputType | null;
    _sum: TenantProfileSumAggregateOutputType | null;
    _min: TenantProfileMinAggregateOutputType | null;
    _max: TenantProfileMaxAggregateOutputType | null;
};
export type TenantProfileAvgAggregateOutputType = {
    budgetMin: number | null;
    budgetMax: number | null;
    cleanliness: number | null;
};
export type TenantProfileSumAggregateOutputType = {
    budgetMin: number | null;
    budgetMax: number | null;
    cleanliness: number | null;
};
export type TenantProfileMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    bio: string | null;
    budgetMin: number | null;
    budgetMax: number | null;
    sleepTime: string | null;
    cleanliness: number | null;
    hasPet: boolean | null;
    isSmoker: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TenantProfileMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    bio: string | null;
    budgetMin: number | null;
    budgetMax: number | null;
    sleepTime: string | null;
    cleanliness: number | null;
    hasPet: boolean | null;
    isSmoker: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TenantProfileCountAggregateOutputType = {
    id: number;
    userId: number;
    bio: number;
    budgetMin: number;
    budgetMax: number;
    sleepTime: number;
    cleanliness: number;
    hasPet: number;
    isSmoker: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TenantProfileAvgAggregateInputType = {
    budgetMin?: true;
    budgetMax?: true;
    cleanliness?: true;
};
export type TenantProfileSumAggregateInputType = {
    budgetMin?: true;
    budgetMax?: true;
    cleanliness?: true;
};
export type TenantProfileMinAggregateInputType = {
    id?: true;
    userId?: true;
    bio?: true;
    budgetMin?: true;
    budgetMax?: true;
    sleepTime?: true;
    cleanliness?: true;
    hasPet?: true;
    isSmoker?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TenantProfileMaxAggregateInputType = {
    id?: true;
    userId?: true;
    bio?: true;
    budgetMin?: true;
    budgetMax?: true;
    sleepTime?: true;
    cleanliness?: true;
    hasPet?: true;
    isSmoker?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TenantProfileCountAggregateInputType = {
    id?: true;
    userId?: true;
    bio?: true;
    budgetMin?: true;
    budgetMax?: true;
    sleepTime?: true;
    cleanliness?: true;
    hasPet?: true;
    isSmoker?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TenantProfileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TenantProfileWhereInput;
    orderBy?: Prisma.TenantProfileOrderByWithRelationInput | Prisma.TenantProfileOrderByWithRelationInput[];
    cursor?: Prisma.TenantProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TenantProfileCountAggregateInputType;
    _avg?: TenantProfileAvgAggregateInputType;
    _sum?: TenantProfileSumAggregateInputType;
    _min?: TenantProfileMinAggregateInputType;
    _max?: TenantProfileMaxAggregateInputType;
};
export type GetTenantProfileAggregateType<T extends TenantProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateTenantProfile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTenantProfile[P]> : Prisma.GetScalarType<T[P], AggregateTenantProfile[P]>;
};
export type TenantProfileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TenantProfileWhereInput;
    orderBy?: Prisma.TenantProfileOrderByWithAggregationInput | Prisma.TenantProfileOrderByWithAggregationInput[];
    by: Prisma.TenantProfileScalarFieldEnum[] | Prisma.TenantProfileScalarFieldEnum;
    having?: Prisma.TenantProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TenantProfileCountAggregateInputType | true;
    _avg?: TenantProfileAvgAggregateInputType;
    _sum?: TenantProfileSumAggregateInputType;
    _min?: TenantProfileMinAggregateInputType;
    _max?: TenantProfileMaxAggregateInputType;
};
export type TenantProfileGroupByOutputType = {
    id: string;
    userId: string;
    bio: string | null;
    budgetMin: number | null;
    budgetMax: number | null;
    sleepTime: string | null;
    cleanliness: number | null;
    hasPet: boolean;
    isSmoker: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: TenantProfileCountAggregateOutputType | null;
    _avg: TenantProfileAvgAggregateOutputType | null;
    _sum: TenantProfileSumAggregateOutputType | null;
    _min: TenantProfileMinAggregateOutputType | null;
    _max: TenantProfileMaxAggregateOutputType | null;
};
export type GetTenantProfileGroupByPayload<T extends TenantProfileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TenantProfileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TenantProfileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TenantProfileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TenantProfileGroupByOutputType[P]>;
}>>;
export type TenantProfileWhereInput = {
    AND?: Prisma.TenantProfileWhereInput | Prisma.TenantProfileWhereInput[];
    OR?: Prisma.TenantProfileWhereInput[];
    NOT?: Prisma.TenantProfileWhereInput | Prisma.TenantProfileWhereInput[];
    id?: Prisma.UuidFilter<"TenantProfile"> | string;
    userId?: Prisma.UuidFilter<"TenantProfile"> | string;
    bio?: Prisma.StringNullableFilter<"TenantProfile"> | string | null;
    budgetMin?: Prisma.FloatNullableFilter<"TenantProfile"> | number | null;
    budgetMax?: Prisma.FloatNullableFilter<"TenantProfile"> | number | null;
    sleepTime?: Prisma.StringNullableFilter<"TenantProfile"> | string | null;
    cleanliness?: Prisma.IntNullableFilter<"TenantProfile"> | number | null;
    hasPet?: Prisma.BoolFilter<"TenantProfile"> | boolean;
    isSmoker?: Prisma.BoolFilter<"TenantProfile"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"TenantProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TenantProfile"> | Date | string;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type TenantProfileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    budgetMin?: Prisma.SortOrderInput | Prisma.SortOrder;
    budgetMax?: Prisma.SortOrderInput | Prisma.SortOrder;
    sleepTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    cleanliness?: Prisma.SortOrderInput | Prisma.SortOrder;
    hasPet?: Prisma.SortOrder;
    isSmoker?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    User?: Prisma.UserOrderByWithRelationInput;
};
export type TenantProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.TenantProfileWhereInput | Prisma.TenantProfileWhereInput[];
    OR?: Prisma.TenantProfileWhereInput[];
    NOT?: Prisma.TenantProfileWhereInput | Prisma.TenantProfileWhereInput[];
    bio?: Prisma.StringNullableFilter<"TenantProfile"> | string | null;
    budgetMin?: Prisma.FloatNullableFilter<"TenantProfile"> | number | null;
    budgetMax?: Prisma.FloatNullableFilter<"TenantProfile"> | number | null;
    sleepTime?: Prisma.StringNullableFilter<"TenantProfile"> | string | null;
    cleanliness?: Prisma.IntNullableFilter<"TenantProfile"> | number | null;
    hasPet?: Prisma.BoolFilter<"TenantProfile"> | boolean;
    isSmoker?: Prisma.BoolFilter<"TenantProfile"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"TenantProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TenantProfile"> | Date | string;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "userId">;
export type TenantProfileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    budgetMin?: Prisma.SortOrderInput | Prisma.SortOrder;
    budgetMax?: Prisma.SortOrderInput | Prisma.SortOrder;
    sleepTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    cleanliness?: Prisma.SortOrderInput | Prisma.SortOrder;
    hasPet?: Prisma.SortOrder;
    isSmoker?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TenantProfileCountOrderByAggregateInput;
    _avg?: Prisma.TenantProfileAvgOrderByAggregateInput;
    _max?: Prisma.TenantProfileMaxOrderByAggregateInput;
    _min?: Prisma.TenantProfileMinOrderByAggregateInput;
    _sum?: Prisma.TenantProfileSumOrderByAggregateInput;
};
export type TenantProfileScalarWhereWithAggregatesInput = {
    AND?: Prisma.TenantProfileScalarWhereWithAggregatesInput | Prisma.TenantProfileScalarWhereWithAggregatesInput[];
    OR?: Prisma.TenantProfileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TenantProfileScalarWhereWithAggregatesInput | Prisma.TenantProfileScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"TenantProfile"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"TenantProfile"> | string;
    bio?: Prisma.StringNullableWithAggregatesFilter<"TenantProfile"> | string | null;
    budgetMin?: Prisma.FloatNullableWithAggregatesFilter<"TenantProfile"> | number | null;
    budgetMax?: Prisma.FloatNullableWithAggregatesFilter<"TenantProfile"> | number | null;
    sleepTime?: Prisma.StringNullableWithAggregatesFilter<"TenantProfile"> | string | null;
    cleanliness?: Prisma.IntNullableWithAggregatesFilter<"TenantProfile"> | number | null;
    hasPet?: Prisma.BoolWithAggregatesFilter<"TenantProfile"> | boolean;
    isSmoker?: Prisma.BoolWithAggregatesFilter<"TenantProfile"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TenantProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"TenantProfile"> | Date | string;
};
export type TenantProfileCreateInput = {
    id?: string;
    bio?: string | null;
    budgetMin?: number | null;
    budgetMax?: number | null;
    sleepTime?: string | null;
    cleanliness?: number | null;
    hasPet?: boolean;
    isSmoker?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutTenantProfileInput;
};
export type TenantProfileUncheckedCreateInput = {
    id?: string;
    userId: string;
    bio?: string | null;
    budgetMin?: number | null;
    budgetMax?: number | null;
    sleepTime?: string | null;
    cleanliness?: number | null;
    hasPet?: boolean;
    isSmoker?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TenantProfileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    budgetMin?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    budgetMax?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    sleepTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cleanliness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    hasPet?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isSmoker?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutTenantProfileNestedInput;
};
export type TenantProfileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    budgetMin?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    budgetMax?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    sleepTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cleanliness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    hasPet?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isSmoker?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TenantProfileCreateManyInput = {
    id?: string;
    userId: string;
    bio?: string | null;
    budgetMin?: number | null;
    budgetMax?: number | null;
    sleepTime?: string | null;
    cleanliness?: number | null;
    hasPet?: boolean;
    isSmoker?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TenantProfileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    budgetMin?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    budgetMax?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    sleepTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cleanliness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    hasPet?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isSmoker?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TenantProfileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    budgetMin?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    budgetMax?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    sleepTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cleanliness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    hasPet?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isSmoker?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TenantProfileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    budgetMin?: Prisma.SortOrder;
    budgetMax?: Prisma.SortOrder;
    sleepTime?: Prisma.SortOrder;
    cleanliness?: Prisma.SortOrder;
    hasPet?: Prisma.SortOrder;
    isSmoker?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TenantProfileAvgOrderByAggregateInput = {
    budgetMin?: Prisma.SortOrder;
    budgetMax?: Prisma.SortOrder;
    cleanliness?: Prisma.SortOrder;
};
export type TenantProfileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    budgetMin?: Prisma.SortOrder;
    budgetMax?: Prisma.SortOrder;
    sleepTime?: Prisma.SortOrder;
    cleanliness?: Prisma.SortOrder;
    hasPet?: Prisma.SortOrder;
    isSmoker?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TenantProfileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    budgetMin?: Prisma.SortOrder;
    budgetMax?: Prisma.SortOrder;
    sleepTime?: Prisma.SortOrder;
    cleanliness?: Prisma.SortOrder;
    hasPet?: Prisma.SortOrder;
    isSmoker?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TenantProfileSumOrderByAggregateInput = {
    budgetMin?: Prisma.SortOrder;
    budgetMax?: Prisma.SortOrder;
    cleanliness?: Prisma.SortOrder;
};
export type TenantProfileNullableScalarRelationFilter = {
    is?: Prisma.TenantProfileWhereInput | null;
    isNot?: Prisma.TenantProfileWhereInput | null;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type TenantProfileCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TenantProfileCreateWithoutUserInput, Prisma.TenantProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.TenantProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.TenantProfileWhereUniqueInput;
};
export type TenantProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TenantProfileCreateWithoutUserInput, Prisma.TenantProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.TenantProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.TenantProfileWhereUniqueInput;
};
export type TenantProfileUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TenantProfileCreateWithoutUserInput, Prisma.TenantProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.TenantProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.TenantProfileUpsertWithoutUserInput;
    disconnect?: Prisma.TenantProfileWhereInput | boolean;
    delete?: Prisma.TenantProfileWhereInput | boolean;
    connect?: Prisma.TenantProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TenantProfileUpdateToOneWithWhereWithoutUserInput, Prisma.TenantProfileUpdateWithoutUserInput>, Prisma.TenantProfileUncheckedUpdateWithoutUserInput>;
};
export type TenantProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TenantProfileCreateWithoutUserInput, Prisma.TenantProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.TenantProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.TenantProfileUpsertWithoutUserInput;
    disconnect?: Prisma.TenantProfileWhereInput | boolean;
    delete?: Prisma.TenantProfileWhereInput | boolean;
    connect?: Prisma.TenantProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TenantProfileUpdateToOneWithWhereWithoutUserInput, Prisma.TenantProfileUpdateWithoutUserInput>, Prisma.TenantProfileUncheckedUpdateWithoutUserInput>;
};
export type TenantProfileCreateWithoutUserInput = {
    id?: string;
    bio?: string | null;
    budgetMin?: number | null;
    budgetMax?: number | null;
    sleepTime?: string | null;
    cleanliness?: number | null;
    hasPet?: boolean;
    isSmoker?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TenantProfileUncheckedCreateWithoutUserInput = {
    id?: string;
    bio?: string | null;
    budgetMin?: number | null;
    budgetMax?: number | null;
    sleepTime?: string | null;
    cleanliness?: number | null;
    hasPet?: boolean;
    isSmoker?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TenantProfileCreateOrConnectWithoutUserInput = {
    where: Prisma.TenantProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.TenantProfileCreateWithoutUserInput, Prisma.TenantProfileUncheckedCreateWithoutUserInput>;
};
export type TenantProfileUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.TenantProfileUpdateWithoutUserInput, Prisma.TenantProfileUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.TenantProfileCreateWithoutUserInput, Prisma.TenantProfileUncheckedCreateWithoutUserInput>;
    where?: Prisma.TenantProfileWhereInput;
};
export type TenantProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.TenantProfileWhereInput;
    data: Prisma.XOR<Prisma.TenantProfileUpdateWithoutUserInput, Prisma.TenantProfileUncheckedUpdateWithoutUserInput>;
};
export type TenantProfileUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    budgetMin?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    budgetMax?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    sleepTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cleanliness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    hasPet?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isSmoker?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TenantProfileUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    budgetMin?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    budgetMax?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    sleepTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cleanliness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    hasPet?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isSmoker?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TenantProfileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    bio?: boolean;
    budgetMin?: boolean;
    budgetMax?: boolean;
    sleepTime?: boolean;
    cleanliness?: boolean;
    hasPet?: boolean;
    isSmoker?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tenantProfile"]>;
export type TenantProfileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    bio?: boolean;
    budgetMin?: boolean;
    budgetMax?: boolean;
    sleepTime?: boolean;
    cleanliness?: boolean;
    hasPet?: boolean;
    isSmoker?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tenantProfile"]>;
export type TenantProfileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    bio?: boolean;
    budgetMin?: boolean;
    budgetMax?: boolean;
    sleepTime?: boolean;
    cleanliness?: boolean;
    hasPet?: boolean;
    isSmoker?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tenantProfile"]>;
export type TenantProfileSelectScalar = {
    id?: boolean;
    userId?: boolean;
    bio?: boolean;
    budgetMin?: boolean;
    budgetMax?: boolean;
    sleepTime?: boolean;
    cleanliness?: boolean;
    hasPet?: boolean;
    isSmoker?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TenantProfileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "bio" | "budgetMin" | "budgetMax" | "sleepTime" | "cleanliness" | "hasPet" | "isSmoker" | "createdAt" | "updatedAt", ExtArgs["result"]["tenantProfile"]>;
export type TenantProfileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TenantProfileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TenantProfileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $TenantProfilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TenantProfile";
    objects: {
        User: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        bio: string | null;
        budgetMin: number | null;
        budgetMax: number | null;
        sleepTime: string | null;
        cleanliness: number | null;
        hasPet: boolean;
        isSmoker: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["tenantProfile"]>;
    composites: {};
};
export type TenantProfileGetPayload<S extends boolean | null | undefined | TenantProfileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TenantProfilePayload, S>;
export type TenantProfileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TenantProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TenantProfileCountAggregateInputType | true;
};
export interface TenantProfileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TenantProfile'];
        meta: {
            name: 'TenantProfile';
        };
    };
    findUnique<T extends TenantProfileFindUniqueArgs>(args: Prisma.SelectSubset<T, TenantProfileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TenantProfileClient<runtime.Types.Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TenantProfileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TenantProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TenantProfileClient<runtime.Types.Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TenantProfileFindFirstArgs>(args?: Prisma.SelectSubset<T, TenantProfileFindFirstArgs<ExtArgs>>): Prisma.Prisma__TenantProfileClient<runtime.Types.Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TenantProfileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TenantProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TenantProfileClient<runtime.Types.Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TenantProfileFindManyArgs>(args?: Prisma.SelectSubset<T, TenantProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TenantProfileCreateArgs>(args: Prisma.SelectSubset<T, TenantProfileCreateArgs<ExtArgs>>): Prisma.Prisma__TenantProfileClient<runtime.Types.Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TenantProfileCreateManyArgs>(args?: Prisma.SelectSubset<T, TenantProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TenantProfileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TenantProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TenantProfileDeleteArgs>(args: Prisma.SelectSubset<T, TenantProfileDeleteArgs<ExtArgs>>): Prisma.Prisma__TenantProfileClient<runtime.Types.Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TenantProfileUpdateArgs>(args: Prisma.SelectSubset<T, TenantProfileUpdateArgs<ExtArgs>>): Prisma.Prisma__TenantProfileClient<runtime.Types.Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TenantProfileDeleteManyArgs>(args?: Prisma.SelectSubset<T, TenantProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TenantProfileUpdateManyArgs>(args: Prisma.SelectSubset<T, TenantProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TenantProfileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TenantProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TenantProfileUpsertArgs>(args: Prisma.SelectSubset<T, TenantProfileUpsertArgs<ExtArgs>>): Prisma.Prisma__TenantProfileClient<runtime.Types.Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TenantProfileCountArgs>(args?: Prisma.Subset<T, TenantProfileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TenantProfileCountAggregateOutputType> : number>;
    aggregate<T extends TenantProfileAggregateArgs>(args: Prisma.Subset<T, TenantProfileAggregateArgs>): Prisma.PrismaPromise<GetTenantProfileAggregateType<T>>;
    groupBy<T extends TenantProfileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TenantProfileGroupByArgs['orderBy'];
    } : {
        orderBy?: TenantProfileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TenantProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TenantProfileFieldRefs;
}
export interface Prisma__TenantProfileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    User<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TenantProfileFieldRefs {
    readonly id: Prisma.FieldRef<"TenantProfile", 'String'>;
    readonly userId: Prisma.FieldRef<"TenantProfile", 'String'>;
    readonly bio: Prisma.FieldRef<"TenantProfile", 'String'>;
    readonly budgetMin: Prisma.FieldRef<"TenantProfile", 'Float'>;
    readonly budgetMax: Prisma.FieldRef<"TenantProfile", 'Float'>;
    readonly sleepTime: Prisma.FieldRef<"TenantProfile", 'String'>;
    readonly cleanliness: Prisma.FieldRef<"TenantProfile", 'Int'>;
    readonly hasPet: Prisma.FieldRef<"TenantProfile", 'Boolean'>;
    readonly isSmoker: Prisma.FieldRef<"TenantProfile", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"TenantProfile", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"TenantProfile", 'DateTime'>;
}
export type TenantProfileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantProfileSelect<ExtArgs> | null;
    omit?: Prisma.TenantProfileOmit<ExtArgs> | null;
    include?: Prisma.TenantProfileInclude<ExtArgs> | null;
    where: Prisma.TenantProfileWhereUniqueInput;
};
export type TenantProfileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantProfileSelect<ExtArgs> | null;
    omit?: Prisma.TenantProfileOmit<ExtArgs> | null;
    include?: Prisma.TenantProfileInclude<ExtArgs> | null;
    where: Prisma.TenantProfileWhereUniqueInput;
};
export type TenantProfileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantProfileSelect<ExtArgs> | null;
    omit?: Prisma.TenantProfileOmit<ExtArgs> | null;
    include?: Prisma.TenantProfileInclude<ExtArgs> | null;
    where?: Prisma.TenantProfileWhereInput;
    orderBy?: Prisma.TenantProfileOrderByWithRelationInput | Prisma.TenantProfileOrderByWithRelationInput[];
    cursor?: Prisma.TenantProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TenantProfileScalarFieldEnum | Prisma.TenantProfileScalarFieldEnum[];
};
export type TenantProfileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantProfileSelect<ExtArgs> | null;
    omit?: Prisma.TenantProfileOmit<ExtArgs> | null;
    include?: Prisma.TenantProfileInclude<ExtArgs> | null;
    where?: Prisma.TenantProfileWhereInput;
    orderBy?: Prisma.TenantProfileOrderByWithRelationInput | Prisma.TenantProfileOrderByWithRelationInput[];
    cursor?: Prisma.TenantProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TenantProfileScalarFieldEnum | Prisma.TenantProfileScalarFieldEnum[];
};
export type TenantProfileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantProfileSelect<ExtArgs> | null;
    omit?: Prisma.TenantProfileOmit<ExtArgs> | null;
    include?: Prisma.TenantProfileInclude<ExtArgs> | null;
    where?: Prisma.TenantProfileWhereInput;
    orderBy?: Prisma.TenantProfileOrderByWithRelationInput | Prisma.TenantProfileOrderByWithRelationInput[];
    cursor?: Prisma.TenantProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TenantProfileScalarFieldEnum | Prisma.TenantProfileScalarFieldEnum[];
};
export type TenantProfileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantProfileSelect<ExtArgs> | null;
    omit?: Prisma.TenantProfileOmit<ExtArgs> | null;
    include?: Prisma.TenantProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TenantProfileCreateInput, Prisma.TenantProfileUncheckedCreateInput>;
};
export type TenantProfileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TenantProfileCreateManyInput | Prisma.TenantProfileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TenantProfileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantProfileSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TenantProfileOmit<ExtArgs> | null;
    data: Prisma.TenantProfileCreateManyInput | Prisma.TenantProfileCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TenantProfileIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TenantProfileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantProfileSelect<ExtArgs> | null;
    omit?: Prisma.TenantProfileOmit<ExtArgs> | null;
    include?: Prisma.TenantProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TenantProfileUpdateInput, Prisma.TenantProfileUncheckedUpdateInput>;
    where: Prisma.TenantProfileWhereUniqueInput;
};
export type TenantProfileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TenantProfileUpdateManyMutationInput, Prisma.TenantProfileUncheckedUpdateManyInput>;
    where?: Prisma.TenantProfileWhereInput;
    limit?: number;
};
export type TenantProfileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TenantProfileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TenantProfileUpdateManyMutationInput, Prisma.TenantProfileUncheckedUpdateManyInput>;
    where?: Prisma.TenantProfileWhereInput;
    limit?: number;
    include?: Prisma.TenantProfileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TenantProfileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantProfileSelect<ExtArgs> | null;
    omit?: Prisma.TenantProfileOmit<ExtArgs> | null;
    include?: Prisma.TenantProfileInclude<ExtArgs> | null;
    where: Prisma.TenantProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.TenantProfileCreateInput, Prisma.TenantProfileUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TenantProfileUpdateInput, Prisma.TenantProfileUncheckedUpdateInput>;
};
export type TenantProfileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantProfileSelect<ExtArgs> | null;
    omit?: Prisma.TenantProfileOmit<ExtArgs> | null;
    include?: Prisma.TenantProfileInclude<ExtArgs> | null;
    where: Prisma.TenantProfileWhereUniqueInput;
};
export type TenantProfileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TenantProfileWhereInput;
    limit?: number;
};
export type TenantProfileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantProfileSelect<ExtArgs> | null;
    omit?: Prisma.TenantProfileOmit<ExtArgs> | null;
    include?: Prisma.TenantProfileInclude<ExtArgs> | null;
};
