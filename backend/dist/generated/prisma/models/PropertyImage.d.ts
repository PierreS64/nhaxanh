import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PropertyImageModel = runtime.Types.Result.DefaultSelection<Prisma.$PropertyImagePayload>;
export type AggregatePropertyImage = {
    _count: PropertyImageCountAggregateOutputType | null;
    _min: PropertyImageMinAggregateOutputType | null;
    _max: PropertyImageMaxAggregateOutputType | null;
};
export type PropertyImageMinAggregateOutputType = {
    id: string | null;
    propertyId: string | null;
    url: string | null;
    isVirtualStaged: boolean | null;
    createdAt: Date | null;
};
export type PropertyImageMaxAggregateOutputType = {
    id: string | null;
    propertyId: string | null;
    url: string | null;
    isVirtualStaged: boolean | null;
    createdAt: Date | null;
};
export type PropertyImageCountAggregateOutputType = {
    id: number;
    propertyId: number;
    url: number;
    isVirtualStaged: number;
    createdAt: number;
    _all: number;
};
export type PropertyImageMinAggregateInputType = {
    id?: true;
    propertyId?: true;
    url?: true;
    isVirtualStaged?: true;
    createdAt?: true;
};
export type PropertyImageMaxAggregateInputType = {
    id?: true;
    propertyId?: true;
    url?: true;
    isVirtualStaged?: true;
    createdAt?: true;
};
export type PropertyImageCountAggregateInputType = {
    id?: true;
    propertyId?: true;
    url?: true;
    isVirtualStaged?: true;
    createdAt?: true;
    _all?: true;
};
export type PropertyImageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PropertyImageWhereInput;
    orderBy?: Prisma.PropertyImageOrderByWithRelationInput | Prisma.PropertyImageOrderByWithRelationInput[];
    cursor?: Prisma.PropertyImageWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PropertyImageCountAggregateInputType;
    _min?: PropertyImageMinAggregateInputType;
    _max?: PropertyImageMaxAggregateInputType;
};
export type GetPropertyImageAggregateType<T extends PropertyImageAggregateArgs> = {
    [P in keyof T & keyof AggregatePropertyImage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePropertyImage[P]> : Prisma.GetScalarType<T[P], AggregatePropertyImage[P]>;
};
export type PropertyImageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PropertyImageWhereInput;
    orderBy?: Prisma.PropertyImageOrderByWithAggregationInput | Prisma.PropertyImageOrderByWithAggregationInput[];
    by: Prisma.PropertyImageScalarFieldEnum[] | Prisma.PropertyImageScalarFieldEnum;
    having?: Prisma.PropertyImageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PropertyImageCountAggregateInputType | true;
    _min?: PropertyImageMinAggregateInputType;
    _max?: PropertyImageMaxAggregateInputType;
};
export type PropertyImageGroupByOutputType = {
    id: string;
    propertyId: string;
    url: string;
    isVirtualStaged: boolean;
    createdAt: Date;
    _count: PropertyImageCountAggregateOutputType | null;
    _min: PropertyImageMinAggregateOutputType | null;
    _max: PropertyImageMaxAggregateOutputType | null;
};
export type GetPropertyImageGroupByPayload<T extends PropertyImageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PropertyImageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PropertyImageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PropertyImageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PropertyImageGroupByOutputType[P]>;
}>>;
export type PropertyImageWhereInput = {
    AND?: Prisma.PropertyImageWhereInput | Prisma.PropertyImageWhereInput[];
    OR?: Prisma.PropertyImageWhereInput[];
    NOT?: Prisma.PropertyImageWhereInput | Prisma.PropertyImageWhereInput[];
    id?: Prisma.UuidFilter<"PropertyImage"> | string;
    propertyId?: Prisma.UuidFilter<"PropertyImage"> | string;
    url?: Prisma.StringFilter<"PropertyImage"> | string;
    isVirtualStaged?: Prisma.BoolFilter<"PropertyImage"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"PropertyImage"> | Date | string;
    Property?: Prisma.XOR<Prisma.PropertyScalarRelationFilter, Prisma.PropertyWhereInput>;
};
export type PropertyImageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    isVirtualStaged?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    Property?: Prisma.PropertyOrderByWithRelationInput;
};
export type PropertyImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PropertyImageWhereInput | Prisma.PropertyImageWhereInput[];
    OR?: Prisma.PropertyImageWhereInput[];
    NOT?: Prisma.PropertyImageWhereInput | Prisma.PropertyImageWhereInput[];
    propertyId?: Prisma.UuidFilter<"PropertyImage"> | string;
    url?: Prisma.StringFilter<"PropertyImage"> | string;
    isVirtualStaged?: Prisma.BoolFilter<"PropertyImage"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"PropertyImage"> | Date | string;
    Property?: Prisma.XOR<Prisma.PropertyScalarRelationFilter, Prisma.PropertyWhereInput>;
}, "id">;
export type PropertyImageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    isVirtualStaged?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PropertyImageCountOrderByAggregateInput;
    _max?: Prisma.PropertyImageMaxOrderByAggregateInput;
    _min?: Prisma.PropertyImageMinOrderByAggregateInput;
};
export type PropertyImageScalarWhereWithAggregatesInput = {
    AND?: Prisma.PropertyImageScalarWhereWithAggregatesInput | Prisma.PropertyImageScalarWhereWithAggregatesInput[];
    OR?: Prisma.PropertyImageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PropertyImageScalarWhereWithAggregatesInput | Prisma.PropertyImageScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PropertyImage"> | string;
    propertyId?: Prisma.UuidWithAggregatesFilter<"PropertyImage"> | string;
    url?: Prisma.StringWithAggregatesFilter<"PropertyImage"> | string;
    isVirtualStaged?: Prisma.BoolWithAggregatesFilter<"PropertyImage"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PropertyImage"> | Date | string;
};
export type PropertyImageCreateInput = {
    id?: string;
    url: string;
    isVirtualStaged?: boolean;
    createdAt?: Date | string;
    Property: Prisma.PropertyCreateNestedOneWithoutPropertyImageInput;
};
export type PropertyImageUncheckedCreateInput = {
    id?: string;
    propertyId: string;
    url: string;
    isVirtualStaged?: boolean;
    createdAt?: Date | string;
};
export type PropertyImageUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    isVirtualStaged?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Property?: Prisma.PropertyUpdateOneRequiredWithoutPropertyImageNestedInput;
};
export type PropertyImageUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    propertyId?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    isVirtualStaged?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PropertyImageCreateManyInput = {
    id?: string;
    propertyId: string;
    url: string;
    isVirtualStaged?: boolean;
    createdAt?: Date | string;
};
export type PropertyImageUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    isVirtualStaged?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PropertyImageUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    propertyId?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    isVirtualStaged?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PropertyImageListRelationFilter = {
    every?: Prisma.PropertyImageWhereInput;
    some?: Prisma.PropertyImageWhereInput;
    none?: Prisma.PropertyImageWhereInput;
};
export type PropertyImageOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PropertyImageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    isVirtualStaged?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PropertyImageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    isVirtualStaged?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PropertyImageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    isVirtualStaged?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PropertyImageCreateNestedManyWithoutPropertyInput = {
    create?: Prisma.XOR<Prisma.PropertyImageCreateWithoutPropertyInput, Prisma.PropertyImageUncheckedCreateWithoutPropertyInput> | Prisma.PropertyImageCreateWithoutPropertyInput[] | Prisma.PropertyImageUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: Prisma.PropertyImageCreateOrConnectWithoutPropertyInput | Prisma.PropertyImageCreateOrConnectWithoutPropertyInput[];
    createMany?: Prisma.PropertyImageCreateManyPropertyInputEnvelope;
    connect?: Prisma.PropertyImageWhereUniqueInput | Prisma.PropertyImageWhereUniqueInput[];
};
export type PropertyImageUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: Prisma.XOR<Prisma.PropertyImageCreateWithoutPropertyInput, Prisma.PropertyImageUncheckedCreateWithoutPropertyInput> | Prisma.PropertyImageCreateWithoutPropertyInput[] | Prisma.PropertyImageUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: Prisma.PropertyImageCreateOrConnectWithoutPropertyInput | Prisma.PropertyImageCreateOrConnectWithoutPropertyInput[];
    createMany?: Prisma.PropertyImageCreateManyPropertyInputEnvelope;
    connect?: Prisma.PropertyImageWhereUniqueInput | Prisma.PropertyImageWhereUniqueInput[];
};
export type PropertyImageUpdateManyWithoutPropertyNestedInput = {
    create?: Prisma.XOR<Prisma.PropertyImageCreateWithoutPropertyInput, Prisma.PropertyImageUncheckedCreateWithoutPropertyInput> | Prisma.PropertyImageCreateWithoutPropertyInput[] | Prisma.PropertyImageUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: Prisma.PropertyImageCreateOrConnectWithoutPropertyInput | Prisma.PropertyImageCreateOrConnectWithoutPropertyInput[];
    upsert?: Prisma.PropertyImageUpsertWithWhereUniqueWithoutPropertyInput | Prisma.PropertyImageUpsertWithWhereUniqueWithoutPropertyInput[];
    createMany?: Prisma.PropertyImageCreateManyPropertyInputEnvelope;
    set?: Prisma.PropertyImageWhereUniqueInput | Prisma.PropertyImageWhereUniqueInput[];
    disconnect?: Prisma.PropertyImageWhereUniqueInput | Prisma.PropertyImageWhereUniqueInput[];
    delete?: Prisma.PropertyImageWhereUniqueInput | Prisma.PropertyImageWhereUniqueInput[];
    connect?: Prisma.PropertyImageWhereUniqueInput | Prisma.PropertyImageWhereUniqueInput[];
    update?: Prisma.PropertyImageUpdateWithWhereUniqueWithoutPropertyInput | Prisma.PropertyImageUpdateWithWhereUniqueWithoutPropertyInput[];
    updateMany?: Prisma.PropertyImageUpdateManyWithWhereWithoutPropertyInput | Prisma.PropertyImageUpdateManyWithWhereWithoutPropertyInput[];
    deleteMany?: Prisma.PropertyImageScalarWhereInput | Prisma.PropertyImageScalarWhereInput[];
};
export type PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: Prisma.XOR<Prisma.PropertyImageCreateWithoutPropertyInput, Prisma.PropertyImageUncheckedCreateWithoutPropertyInput> | Prisma.PropertyImageCreateWithoutPropertyInput[] | Prisma.PropertyImageUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: Prisma.PropertyImageCreateOrConnectWithoutPropertyInput | Prisma.PropertyImageCreateOrConnectWithoutPropertyInput[];
    upsert?: Prisma.PropertyImageUpsertWithWhereUniqueWithoutPropertyInput | Prisma.PropertyImageUpsertWithWhereUniqueWithoutPropertyInput[];
    createMany?: Prisma.PropertyImageCreateManyPropertyInputEnvelope;
    set?: Prisma.PropertyImageWhereUniqueInput | Prisma.PropertyImageWhereUniqueInput[];
    disconnect?: Prisma.PropertyImageWhereUniqueInput | Prisma.PropertyImageWhereUniqueInput[];
    delete?: Prisma.PropertyImageWhereUniqueInput | Prisma.PropertyImageWhereUniqueInput[];
    connect?: Prisma.PropertyImageWhereUniqueInput | Prisma.PropertyImageWhereUniqueInput[];
    update?: Prisma.PropertyImageUpdateWithWhereUniqueWithoutPropertyInput | Prisma.PropertyImageUpdateWithWhereUniqueWithoutPropertyInput[];
    updateMany?: Prisma.PropertyImageUpdateManyWithWhereWithoutPropertyInput | Prisma.PropertyImageUpdateManyWithWhereWithoutPropertyInput[];
    deleteMany?: Prisma.PropertyImageScalarWhereInput | Prisma.PropertyImageScalarWhereInput[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type PropertyImageCreateWithoutPropertyInput = {
    id?: string;
    url: string;
    isVirtualStaged?: boolean;
    createdAt?: Date | string;
};
export type PropertyImageUncheckedCreateWithoutPropertyInput = {
    id?: string;
    url: string;
    isVirtualStaged?: boolean;
    createdAt?: Date | string;
};
export type PropertyImageCreateOrConnectWithoutPropertyInput = {
    where: Prisma.PropertyImageWhereUniqueInput;
    create: Prisma.XOR<Prisma.PropertyImageCreateWithoutPropertyInput, Prisma.PropertyImageUncheckedCreateWithoutPropertyInput>;
};
export type PropertyImageCreateManyPropertyInputEnvelope = {
    data: Prisma.PropertyImageCreateManyPropertyInput | Prisma.PropertyImageCreateManyPropertyInput[];
    skipDuplicates?: boolean;
};
export type PropertyImageUpsertWithWhereUniqueWithoutPropertyInput = {
    where: Prisma.PropertyImageWhereUniqueInput;
    update: Prisma.XOR<Prisma.PropertyImageUpdateWithoutPropertyInput, Prisma.PropertyImageUncheckedUpdateWithoutPropertyInput>;
    create: Prisma.XOR<Prisma.PropertyImageCreateWithoutPropertyInput, Prisma.PropertyImageUncheckedCreateWithoutPropertyInput>;
};
export type PropertyImageUpdateWithWhereUniqueWithoutPropertyInput = {
    where: Prisma.PropertyImageWhereUniqueInput;
    data: Prisma.XOR<Prisma.PropertyImageUpdateWithoutPropertyInput, Prisma.PropertyImageUncheckedUpdateWithoutPropertyInput>;
};
export type PropertyImageUpdateManyWithWhereWithoutPropertyInput = {
    where: Prisma.PropertyImageScalarWhereInput;
    data: Prisma.XOR<Prisma.PropertyImageUpdateManyMutationInput, Prisma.PropertyImageUncheckedUpdateManyWithoutPropertyInput>;
};
export type PropertyImageScalarWhereInput = {
    AND?: Prisma.PropertyImageScalarWhereInput | Prisma.PropertyImageScalarWhereInput[];
    OR?: Prisma.PropertyImageScalarWhereInput[];
    NOT?: Prisma.PropertyImageScalarWhereInput | Prisma.PropertyImageScalarWhereInput[];
    id?: Prisma.UuidFilter<"PropertyImage"> | string;
    propertyId?: Prisma.UuidFilter<"PropertyImage"> | string;
    url?: Prisma.StringFilter<"PropertyImage"> | string;
    isVirtualStaged?: Prisma.BoolFilter<"PropertyImage"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"PropertyImage"> | Date | string;
};
export type PropertyImageCreateManyPropertyInput = {
    id?: string;
    url: string;
    isVirtualStaged?: boolean;
    createdAt?: Date | string;
};
export type PropertyImageUpdateWithoutPropertyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    isVirtualStaged?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PropertyImageUncheckedUpdateWithoutPropertyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    isVirtualStaged?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PropertyImageUncheckedUpdateManyWithoutPropertyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    isVirtualStaged?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PropertyImageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    propertyId?: boolean;
    url?: boolean;
    isVirtualStaged?: boolean;
    createdAt?: boolean;
    Property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["propertyImage"]>;
export type PropertyImageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    propertyId?: boolean;
    url?: boolean;
    isVirtualStaged?: boolean;
    createdAt?: boolean;
    Property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["propertyImage"]>;
export type PropertyImageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    propertyId?: boolean;
    url?: boolean;
    isVirtualStaged?: boolean;
    createdAt?: boolean;
    Property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["propertyImage"]>;
export type PropertyImageSelectScalar = {
    id?: boolean;
    propertyId?: boolean;
    url?: boolean;
    isVirtualStaged?: boolean;
    createdAt?: boolean;
};
export type PropertyImageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "propertyId" | "url" | "isVirtualStaged" | "createdAt", ExtArgs["result"]["propertyImage"]>;
export type PropertyImageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
};
export type PropertyImageIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
};
export type PropertyImageIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
};
export type $PropertyImagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PropertyImage";
    objects: {
        Property: Prisma.$PropertyPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        propertyId: string;
        url: string;
        isVirtualStaged: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["propertyImage"]>;
    composites: {};
};
export type PropertyImageGetPayload<S extends boolean | null | undefined | PropertyImageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PropertyImagePayload, S>;
export type PropertyImageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PropertyImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PropertyImageCountAggregateInputType | true;
};
export interface PropertyImageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PropertyImage'];
        meta: {
            name: 'PropertyImage';
        };
    };
    findUnique<T extends PropertyImageFindUniqueArgs>(args: Prisma.SelectSubset<T, PropertyImageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PropertyImageClient<runtime.Types.Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PropertyImageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PropertyImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PropertyImageClient<runtime.Types.Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PropertyImageFindFirstArgs>(args?: Prisma.SelectSubset<T, PropertyImageFindFirstArgs<ExtArgs>>): Prisma.Prisma__PropertyImageClient<runtime.Types.Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PropertyImageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PropertyImageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PropertyImageClient<runtime.Types.Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PropertyImageFindManyArgs>(args?: Prisma.SelectSubset<T, PropertyImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PropertyImageCreateArgs>(args: Prisma.SelectSubset<T, PropertyImageCreateArgs<ExtArgs>>): Prisma.Prisma__PropertyImageClient<runtime.Types.Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PropertyImageCreateManyArgs>(args?: Prisma.SelectSubset<T, PropertyImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PropertyImageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PropertyImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PropertyImageDeleteArgs>(args: Prisma.SelectSubset<T, PropertyImageDeleteArgs<ExtArgs>>): Prisma.Prisma__PropertyImageClient<runtime.Types.Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PropertyImageUpdateArgs>(args: Prisma.SelectSubset<T, PropertyImageUpdateArgs<ExtArgs>>): Prisma.Prisma__PropertyImageClient<runtime.Types.Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PropertyImageDeleteManyArgs>(args?: Prisma.SelectSubset<T, PropertyImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PropertyImageUpdateManyArgs>(args: Prisma.SelectSubset<T, PropertyImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PropertyImageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PropertyImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PropertyImageUpsertArgs>(args: Prisma.SelectSubset<T, PropertyImageUpsertArgs<ExtArgs>>): Prisma.Prisma__PropertyImageClient<runtime.Types.Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PropertyImageCountArgs>(args?: Prisma.Subset<T, PropertyImageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PropertyImageCountAggregateOutputType> : number>;
    aggregate<T extends PropertyImageAggregateArgs>(args: Prisma.Subset<T, PropertyImageAggregateArgs>): Prisma.PrismaPromise<GetPropertyImageAggregateType<T>>;
    groupBy<T extends PropertyImageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PropertyImageGroupByArgs['orderBy'];
    } : {
        orderBy?: PropertyImageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PropertyImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PropertyImageFieldRefs;
}
export interface Prisma__PropertyImageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Property<T extends Prisma.PropertyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PropertyDefaultArgs<ExtArgs>>): Prisma.Prisma__PropertyClient<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PropertyImageFieldRefs {
    readonly id: Prisma.FieldRef<"PropertyImage", 'String'>;
    readonly propertyId: Prisma.FieldRef<"PropertyImage", 'String'>;
    readonly url: Prisma.FieldRef<"PropertyImage", 'String'>;
    readonly isVirtualStaged: Prisma.FieldRef<"PropertyImage", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"PropertyImage", 'DateTime'>;
}
export type PropertyImageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropertyImageSelect<ExtArgs> | null;
    omit?: Prisma.PropertyImageOmit<ExtArgs> | null;
    include?: Prisma.PropertyImageInclude<ExtArgs> | null;
    where: Prisma.PropertyImageWhereUniqueInput;
};
export type PropertyImageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropertyImageSelect<ExtArgs> | null;
    omit?: Prisma.PropertyImageOmit<ExtArgs> | null;
    include?: Prisma.PropertyImageInclude<ExtArgs> | null;
    where: Prisma.PropertyImageWhereUniqueInput;
};
export type PropertyImageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropertyImageSelect<ExtArgs> | null;
    omit?: Prisma.PropertyImageOmit<ExtArgs> | null;
    include?: Prisma.PropertyImageInclude<ExtArgs> | null;
    where?: Prisma.PropertyImageWhereInput;
    orderBy?: Prisma.PropertyImageOrderByWithRelationInput | Prisma.PropertyImageOrderByWithRelationInput[];
    cursor?: Prisma.PropertyImageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PropertyImageScalarFieldEnum | Prisma.PropertyImageScalarFieldEnum[];
};
export type PropertyImageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropertyImageSelect<ExtArgs> | null;
    omit?: Prisma.PropertyImageOmit<ExtArgs> | null;
    include?: Prisma.PropertyImageInclude<ExtArgs> | null;
    where?: Prisma.PropertyImageWhereInput;
    orderBy?: Prisma.PropertyImageOrderByWithRelationInput | Prisma.PropertyImageOrderByWithRelationInput[];
    cursor?: Prisma.PropertyImageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PropertyImageScalarFieldEnum | Prisma.PropertyImageScalarFieldEnum[];
};
export type PropertyImageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropertyImageSelect<ExtArgs> | null;
    omit?: Prisma.PropertyImageOmit<ExtArgs> | null;
    include?: Prisma.PropertyImageInclude<ExtArgs> | null;
    where?: Prisma.PropertyImageWhereInput;
    orderBy?: Prisma.PropertyImageOrderByWithRelationInput | Prisma.PropertyImageOrderByWithRelationInput[];
    cursor?: Prisma.PropertyImageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PropertyImageScalarFieldEnum | Prisma.PropertyImageScalarFieldEnum[];
};
export type PropertyImageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropertyImageSelect<ExtArgs> | null;
    omit?: Prisma.PropertyImageOmit<ExtArgs> | null;
    include?: Prisma.PropertyImageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PropertyImageCreateInput, Prisma.PropertyImageUncheckedCreateInput>;
};
export type PropertyImageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PropertyImageCreateManyInput | Prisma.PropertyImageCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PropertyImageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropertyImageSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PropertyImageOmit<ExtArgs> | null;
    data: Prisma.PropertyImageCreateManyInput | Prisma.PropertyImageCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PropertyImageIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PropertyImageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropertyImageSelect<ExtArgs> | null;
    omit?: Prisma.PropertyImageOmit<ExtArgs> | null;
    include?: Prisma.PropertyImageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PropertyImageUpdateInput, Prisma.PropertyImageUncheckedUpdateInput>;
    where: Prisma.PropertyImageWhereUniqueInput;
};
export type PropertyImageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PropertyImageUpdateManyMutationInput, Prisma.PropertyImageUncheckedUpdateManyInput>;
    where?: Prisma.PropertyImageWhereInput;
    limit?: number;
};
export type PropertyImageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropertyImageSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PropertyImageOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PropertyImageUpdateManyMutationInput, Prisma.PropertyImageUncheckedUpdateManyInput>;
    where?: Prisma.PropertyImageWhereInput;
    limit?: number;
    include?: Prisma.PropertyImageIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PropertyImageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropertyImageSelect<ExtArgs> | null;
    omit?: Prisma.PropertyImageOmit<ExtArgs> | null;
    include?: Prisma.PropertyImageInclude<ExtArgs> | null;
    where: Prisma.PropertyImageWhereUniqueInput;
    create: Prisma.XOR<Prisma.PropertyImageCreateInput, Prisma.PropertyImageUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PropertyImageUpdateInput, Prisma.PropertyImageUncheckedUpdateInput>;
};
export type PropertyImageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropertyImageSelect<ExtArgs> | null;
    omit?: Prisma.PropertyImageOmit<ExtArgs> | null;
    include?: Prisma.PropertyImageInclude<ExtArgs> | null;
    where: Prisma.PropertyImageWhereUniqueInput;
};
export type PropertyImageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PropertyImageWhereInput;
    limit?: number;
};
export type PropertyImageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropertyImageSelect<ExtArgs> | null;
    omit?: Prisma.PropertyImageOmit<ExtArgs> | null;
    include?: Prisma.PropertyImageInclude<ExtArgs> | null;
};
