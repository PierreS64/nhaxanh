import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    fullName: string | null;
    phone: string | null;
    avatarUrl: string | null;
    role: $Enums.Role | null;
    isKycVerified: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    fullName: string | null;
    phone: string | null;
    avatarUrl: string | null;
    role: $Enums.Role | null;
    isKycVerified: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    password: number;
    fullName: number;
    phone: number;
    avatarUrl: number;
    role: number;
    isKycVerified: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    fullName?: true;
    phone?: true;
    avatarUrl?: true;
    role?: true;
    isKycVerified?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    fullName?: true;
    phone?: true;
    avatarUrl?: true;
    role?: true;
    isKycVerified?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    fullName?: true;
    phone?: true;
    avatarUrl?: true;
    role?: true;
    isKycVerified?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    email: string;
    password: string;
    fullName: string;
    phone: string | null;
    avatarUrl: string | null;
    role: $Enums.Role;
    isKycVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.UuidFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    fullName?: Prisma.StringFilter<"User"> | string;
    phone?: Prisma.StringNullableFilter<"User"> | string | null;
    avatarUrl?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    isKycVerified?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    Contract_Contract_landlordIdToUser?: Prisma.ContractListRelationFilter;
    Contract_Contract_tenantIdToUser?: Prisma.ContractListRelationFilter;
    MaintenanceRequest?: Prisma.MaintenanceRequestListRelationFilter;
    Property?: Prisma.PropertyListRelationFilter;
    Review_Review_revieweeIdToUser?: Prisma.ReviewListRelationFilter;
    Review_Review_reviewerIdToUser?: Prisma.ReviewListRelationFilter;
    TenantProfile?: Prisma.XOR<Prisma.TenantProfileNullableScalarRelationFilter, Prisma.TenantProfileWhereInput> | null;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isKycVerified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    Contract_Contract_landlordIdToUser?: Prisma.ContractOrderByRelationAggregateInput;
    Contract_Contract_tenantIdToUser?: Prisma.ContractOrderByRelationAggregateInput;
    MaintenanceRequest?: Prisma.MaintenanceRequestOrderByRelationAggregateInput;
    Property?: Prisma.PropertyOrderByRelationAggregateInput;
    Review_Review_revieweeIdToUser?: Prisma.ReviewOrderByRelationAggregateInput;
    Review_Review_reviewerIdToUser?: Prisma.ReviewOrderByRelationAggregateInput;
    TenantProfile?: Prisma.TenantProfileOrderByWithRelationInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    phone?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    password?: Prisma.StringFilter<"User"> | string;
    fullName?: Prisma.StringFilter<"User"> | string;
    avatarUrl?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    isKycVerified?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    Contract_Contract_landlordIdToUser?: Prisma.ContractListRelationFilter;
    Contract_Contract_tenantIdToUser?: Prisma.ContractListRelationFilter;
    MaintenanceRequest?: Prisma.MaintenanceRequestListRelationFilter;
    Property?: Prisma.PropertyListRelationFilter;
    Review_Review_revieweeIdToUser?: Prisma.ReviewListRelationFilter;
    Review_Review_reviewerIdToUser?: Prisma.ReviewListRelationFilter;
    TenantProfile?: Prisma.XOR<Prisma.TenantProfileNullableScalarRelationFilter, Prisma.TenantProfileWhereInput> | null;
}, "id" | "email" | "phone">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isKycVerified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    password?: Prisma.StringWithAggregatesFilter<"User"> | string;
    fullName?: Prisma.StringWithAggregatesFilter<"User"> | string;
    phone?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    avatarUrl?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    role?: Prisma.EnumRoleWithAggregatesFilter<"User"> | $Enums.Role;
    isKycVerified?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    phone?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.Role;
    isKycVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Contract_Contract_landlordIdToUser?: Prisma.ContractCreateNestedManyWithoutUser_Contract_landlordIdToUserInput;
    Contract_Contract_tenantIdToUser?: Prisma.ContractCreateNestedManyWithoutUser_Contract_tenantIdToUserInput;
    MaintenanceRequest?: Prisma.MaintenanceRequestCreateNestedManyWithoutUserInput;
    Property?: Prisma.PropertyCreateNestedManyWithoutUserInput;
    Review_Review_revieweeIdToUser?: Prisma.ReviewCreateNestedManyWithoutUser_Review_revieweeIdToUserInput;
    Review_Review_reviewerIdToUser?: Prisma.ReviewCreateNestedManyWithoutUser_Review_reviewerIdToUserInput;
    TenantProfile?: Prisma.TenantProfileCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    phone?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.Role;
    isKycVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Contract_Contract_landlordIdToUser?: Prisma.ContractUncheckedCreateNestedManyWithoutUser_Contract_landlordIdToUserInput;
    Contract_Contract_tenantIdToUser?: Prisma.ContractUncheckedCreateNestedManyWithoutUser_Contract_tenantIdToUserInput;
    MaintenanceRequest?: Prisma.MaintenanceRequestUncheckedCreateNestedManyWithoutUserInput;
    Property?: Prisma.PropertyUncheckedCreateNestedManyWithoutUserInput;
    Review_Review_revieweeIdToUser?: Prisma.ReviewUncheckedCreateNestedManyWithoutUser_Review_revieweeIdToUserInput;
    Review_Review_reviewerIdToUser?: Prisma.ReviewUncheckedCreateNestedManyWithoutUser_Review_reviewerIdToUserInput;
    TenantProfile?: Prisma.TenantProfileUncheckedCreateNestedOneWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isKycVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Contract_Contract_landlordIdToUser?: Prisma.ContractUpdateManyWithoutUser_Contract_landlordIdToUserNestedInput;
    Contract_Contract_tenantIdToUser?: Prisma.ContractUpdateManyWithoutUser_Contract_tenantIdToUserNestedInput;
    MaintenanceRequest?: Prisma.MaintenanceRequestUpdateManyWithoutUserNestedInput;
    Property?: Prisma.PropertyUpdateManyWithoutUserNestedInput;
    Review_Review_revieweeIdToUser?: Prisma.ReviewUpdateManyWithoutUser_Review_revieweeIdToUserNestedInput;
    Review_Review_reviewerIdToUser?: Prisma.ReviewUpdateManyWithoutUser_Review_reviewerIdToUserNestedInput;
    TenantProfile?: Prisma.TenantProfileUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isKycVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Contract_Contract_landlordIdToUser?: Prisma.ContractUncheckedUpdateManyWithoutUser_Contract_landlordIdToUserNestedInput;
    Contract_Contract_tenantIdToUser?: Prisma.ContractUncheckedUpdateManyWithoutUser_Contract_tenantIdToUserNestedInput;
    MaintenanceRequest?: Prisma.MaintenanceRequestUncheckedUpdateManyWithoutUserNestedInput;
    Property?: Prisma.PropertyUncheckedUpdateManyWithoutUserNestedInput;
    Review_Review_revieweeIdToUser?: Prisma.ReviewUncheckedUpdateManyWithoutUser_Review_revieweeIdToUserNestedInput;
    Review_Review_reviewerIdToUser?: Prisma.ReviewUncheckedUpdateManyWithoutUser_Review_reviewerIdToUserNestedInput;
    TenantProfile?: Prisma.TenantProfileUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    phone?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.Role;
    isKycVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isKycVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isKycVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isKycVerified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isKycVerified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isKycVerified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserCreateNestedOneWithoutContract_Contract_landlordIdToUserInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutContract_Contract_landlordIdToUserInput, Prisma.UserUncheckedCreateWithoutContract_Contract_landlordIdToUserInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutContract_Contract_landlordIdToUserInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutContract_Contract_tenantIdToUserInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutContract_Contract_tenantIdToUserInput, Prisma.UserUncheckedCreateWithoutContract_Contract_tenantIdToUserInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutContract_Contract_tenantIdToUserInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutContract_Contract_landlordIdToUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutContract_Contract_landlordIdToUserInput, Prisma.UserUncheckedCreateWithoutContract_Contract_landlordIdToUserInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutContract_Contract_landlordIdToUserInput;
    upsert?: Prisma.UserUpsertWithoutContract_Contract_landlordIdToUserInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutContract_Contract_landlordIdToUserInput, Prisma.UserUpdateWithoutContract_Contract_landlordIdToUserInput>, Prisma.UserUncheckedUpdateWithoutContract_Contract_landlordIdToUserInput>;
};
export type UserUpdateOneRequiredWithoutContract_Contract_tenantIdToUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutContract_Contract_tenantIdToUserInput, Prisma.UserUncheckedCreateWithoutContract_Contract_tenantIdToUserInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutContract_Contract_tenantIdToUserInput;
    upsert?: Prisma.UserUpsertWithoutContract_Contract_tenantIdToUserInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutContract_Contract_tenantIdToUserInput, Prisma.UserUpdateWithoutContract_Contract_tenantIdToUserInput>, Prisma.UserUncheckedUpdateWithoutContract_Contract_tenantIdToUserInput>;
};
export type UserCreateNestedOneWithoutMaintenanceRequestInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMaintenanceRequestInput, Prisma.UserUncheckedCreateWithoutMaintenanceRequestInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMaintenanceRequestInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutMaintenanceRequestNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMaintenanceRequestInput, Prisma.UserUncheckedCreateWithoutMaintenanceRequestInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMaintenanceRequestInput;
    upsert?: Prisma.UserUpsertWithoutMaintenanceRequestInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutMaintenanceRequestInput, Prisma.UserUpdateWithoutMaintenanceRequestInput>, Prisma.UserUncheckedUpdateWithoutMaintenanceRequestInput>;
};
export type UserCreateNestedOneWithoutPropertyInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPropertyInput, Prisma.UserUncheckedCreateWithoutPropertyInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPropertyInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutPropertyNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPropertyInput, Prisma.UserUncheckedCreateWithoutPropertyInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPropertyInput;
    upsert?: Prisma.UserUpsertWithoutPropertyInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutPropertyInput, Prisma.UserUpdateWithoutPropertyInput>, Prisma.UserUncheckedUpdateWithoutPropertyInput>;
};
export type UserCreateNestedOneWithoutReview_Review_revieweeIdToUserInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReview_Review_revieweeIdToUserInput, Prisma.UserUncheckedCreateWithoutReview_Review_revieweeIdToUserInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReview_Review_revieweeIdToUserInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutReview_Review_reviewerIdToUserInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReview_Review_reviewerIdToUserInput, Prisma.UserUncheckedCreateWithoutReview_Review_reviewerIdToUserInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReview_Review_reviewerIdToUserInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutReview_Review_revieweeIdToUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReview_Review_revieweeIdToUserInput, Prisma.UserUncheckedCreateWithoutReview_Review_revieweeIdToUserInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReview_Review_revieweeIdToUserInput;
    upsert?: Prisma.UserUpsertWithoutReview_Review_revieweeIdToUserInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutReview_Review_revieweeIdToUserInput, Prisma.UserUpdateWithoutReview_Review_revieweeIdToUserInput>, Prisma.UserUncheckedUpdateWithoutReview_Review_revieweeIdToUserInput>;
};
export type UserUpdateOneRequiredWithoutReview_Review_reviewerIdToUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReview_Review_reviewerIdToUserInput, Prisma.UserUncheckedCreateWithoutReview_Review_reviewerIdToUserInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReview_Review_reviewerIdToUserInput;
    upsert?: Prisma.UserUpsertWithoutReview_Review_reviewerIdToUserInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutReview_Review_reviewerIdToUserInput, Prisma.UserUpdateWithoutReview_Review_reviewerIdToUserInput>, Prisma.UserUncheckedUpdateWithoutReview_Review_reviewerIdToUserInput>;
};
export type UserCreateNestedOneWithoutTenantProfileInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTenantProfileInput, Prisma.UserUncheckedCreateWithoutTenantProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTenantProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutTenantProfileNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTenantProfileInput, Prisma.UserUncheckedCreateWithoutTenantProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTenantProfileInput;
    upsert?: Prisma.UserUpsertWithoutTenantProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutTenantProfileInput, Prisma.UserUpdateWithoutTenantProfileInput>, Prisma.UserUncheckedUpdateWithoutTenantProfileInput>;
};
export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
};
export type UserCreateWithoutContract_Contract_landlordIdToUserInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    phone?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.Role;
    isKycVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Contract_Contract_tenantIdToUser?: Prisma.ContractCreateNestedManyWithoutUser_Contract_tenantIdToUserInput;
    MaintenanceRequest?: Prisma.MaintenanceRequestCreateNestedManyWithoutUserInput;
    Property?: Prisma.PropertyCreateNestedManyWithoutUserInput;
    Review_Review_revieweeIdToUser?: Prisma.ReviewCreateNestedManyWithoutUser_Review_revieweeIdToUserInput;
    Review_Review_reviewerIdToUser?: Prisma.ReviewCreateNestedManyWithoutUser_Review_reviewerIdToUserInput;
    TenantProfile?: Prisma.TenantProfileCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutContract_Contract_landlordIdToUserInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    phone?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.Role;
    isKycVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Contract_Contract_tenantIdToUser?: Prisma.ContractUncheckedCreateNestedManyWithoutUser_Contract_tenantIdToUserInput;
    MaintenanceRequest?: Prisma.MaintenanceRequestUncheckedCreateNestedManyWithoutUserInput;
    Property?: Prisma.PropertyUncheckedCreateNestedManyWithoutUserInput;
    Review_Review_revieweeIdToUser?: Prisma.ReviewUncheckedCreateNestedManyWithoutUser_Review_revieweeIdToUserInput;
    Review_Review_reviewerIdToUser?: Prisma.ReviewUncheckedCreateNestedManyWithoutUser_Review_reviewerIdToUserInput;
    TenantProfile?: Prisma.TenantProfileUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutContract_Contract_landlordIdToUserInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutContract_Contract_landlordIdToUserInput, Prisma.UserUncheckedCreateWithoutContract_Contract_landlordIdToUserInput>;
};
export type UserCreateWithoutContract_Contract_tenantIdToUserInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    phone?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.Role;
    isKycVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Contract_Contract_landlordIdToUser?: Prisma.ContractCreateNestedManyWithoutUser_Contract_landlordIdToUserInput;
    MaintenanceRequest?: Prisma.MaintenanceRequestCreateNestedManyWithoutUserInput;
    Property?: Prisma.PropertyCreateNestedManyWithoutUserInput;
    Review_Review_revieweeIdToUser?: Prisma.ReviewCreateNestedManyWithoutUser_Review_revieweeIdToUserInput;
    Review_Review_reviewerIdToUser?: Prisma.ReviewCreateNestedManyWithoutUser_Review_reviewerIdToUserInput;
    TenantProfile?: Prisma.TenantProfileCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutContract_Contract_tenantIdToUserInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    phone?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.Role;
    isKycVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Contract_Contract_landlordIdToUser?: Prisma.ContractUncheckedCreateNestedManyWithoutUser_Contract_landlordIdToUserInput;
    MaintenanceRequest?: Prisma.MaintenanceRequestUncheckedCreateNestedManyWithoutUserInput;
    Property?: Prisma.PropertyUncheckedCreateNestedManyWithoutUserInput;
    Review_Review_revieweeIdToUser?: Prisma.ReviewUncheckedCreateNestedManyWithoutUser_Review_revieweeIdToUserInput;
    Review_Review_reviewerIdToUser?: Prisma.ReviewUncheckedCreateNestedManyWithoutUser_Review_reviewerIdToUserInput;
    TenantProfile?: Prisma.TenantProfileUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutContract_Contract_tenantIdToUserInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutContract_Contract_tenantIdToUserInput, Prisma.UserUncheckedCreateWithoutContract_Contract_tenantIdToUserInput>;
};
export type UserUpsertWithoutContract_Contract_landlordIdToUserInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutContract_Contract_landlordIdToUserInput, Prisma.UserUncheckedUpdateWithoutContract_Contract_landlordIdToUserInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutContract_Contract_landlordIdToUserInput, Prisma.UserUncheckedCreateWithoutContract_Contract_landlordIdToUserInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutContract_Contract_landlordIdToUserInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutContract_Contract_landlordIdToUserInput, Prisma.UserUncheckedUpdateWithoutContract_Contract_landlordIdToUserInput>;
};
export type UserUpdateWithoutContract_Contract_landlordIdToUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isKycVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Contract_Contract_tenantIdToUser?: Prisma.ContractUpdateManyWithoutUser_Contract_tenantIdToUserNestedInput;
    MaintenanceRequest?: Prisma.MaintenanceRequestUpdateManyWithoutUserNestedInput;
    Property?: Prisma.PropertyUpdateManyWithoutUserNestedInput;
    Review_Review_revieweeIdToUser?: Prisma.ReviewUpdateManyWithoutUser_Review_revieweeIdToUserNestedInput;
    Review_Review_reviewerIdToUser?: Prisma.ReviewUpdateManyWithoutUser_Review_reviewerIdToUserNestedInput;
    TenantProfile?: Prisma.TenantProfileUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutContract_Contract_landlordIdToUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isKycVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Contract_Contract_tenantIdToUser?: Prisma.ContractUncheckedUpdateManyWithoutUser_Contract_tenantIdToUserNestedInput;
    MaintenanceRequest?: Prisma.MaintenanceRequestUncheckedUpdateManyWithoutUserNestedInput;
    Property?: Prisma.PropertyUncheckedUpdateManyWithoutUserNestedInput;
    Review_Review_revieweeIdToUser?: Prisma.ReviewUncheckedUpdateManyWithoutUser_Review_revieweeIdToUserNestedInput;
    Review_Review_reviewerIdToUser?: Prisma.ReviewUncheckedUpdateManyWithoutUser_Review_reviewerIdToUserNestedInput;
    TenantProfile?: Prisma.TenantProfileUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserUpsertWithoutContract_Contract_tenantIdToUserInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutContract_Contract_tenantIdToUserInput, Prisma.UserUncheckedUpdateWithoutContract_Contract_tenantIdToUserInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutContract_Contract_tenantIdToUserInput, Prisma.UserUncheckedCreateWithoutContract_Contract_tenantIdToUserInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutContract_Contract_tenantIdToUserInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutContract_Contract_tenantIdToUserInput, Prisma.UserUncheckedUpdateWithoutContract_Contract_tenantIdToUserInput>;
};
export type UserUpdateWithoutContract_Contract_tenantIdToUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isKycVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Contract_Contract_landlordIdToUser?: Prisma.ContractUpdateManyWithoutUser_Contract_landlordIdToUserNestedInput;
    MaintenanceRequest?: Prisma.MaintenanceRequestUpdateManyWithoutUserNestedInput;
    Property?: Prisma.PropertyUpdateManyWithoutUserNestedInput;
    Review_Review_revieweeIdToUser?: Prisma.ReviewUpdateManyWithoutUser_Review_revieweeIdToUserNestedInput;
    Review_Review_reviewerIdToUser?: Prisma.ReviewUpdateManyWithoutUser_Review_reviewerIdToUserNestedInput;
    TenantProfile?: Prisma.TenantProfileUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutContract_Contract_tenantIdToUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isKycVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Contract_Contract_landlordIdToUser?: Prisma.ContractUncheckedUpdateManyWithoutUser_Contract_landlordIdToUserNestedInput;
    MaintenanceRequest?: Prisma.MaintenanceRequestUncheckedUpdateManyWithoutUserNestedInput;
    Property?: Prisma.PropertyUncheckedUpdateManyWithoutUserNestedInput;
    Review_Review_revieweeIdToUser?: Prisma.ReviewUncheckedUpdateManyWithoutUser_Review_revieweeIdToUserNestedInput;
    Review_Review_reviewerIdToUser?: Prisma.ReviewUncheckedUpdateManyWithoutUser_Review_reviewerIdToUserNestedInput;
    TenantProfile?: Prisma.TenantProfileUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateWithoutMaintenanceRequestInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    phone?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.Role;
    isKycVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Contract_Contract_landlordIdToUser?: Prisma.ContractCreateNestedManyWithoutUser_Contract_landlordIdToUserInput;
    Contract_Contract_tenantIdToUser?: Prisma.ContractCreateNestedManyWithoutUser_Contract_tenantIdToUserInput;
    Property?: Prisma.PropertyCreateNestedManyWithoutUserInput;
    Review_Review_revieweeIdToUser?: Prisma.ReviewCreateNestedManyWithoutUser_Review_revieweeIdToUserInput;
    Review_Review_reviewerIdToUser?: Prisma.ReviewCreateNestedManyWithoutUser_Review_reviewerIdToUserInput;
    TenantProfile?: Prisma.TenantProfileCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutMaintenanceRequestInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    phone?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.Role;
    isKycVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Contract_Contract_landlordIdToUser?: Prisma.ContractUncheckedCreateNestedManyWithoutUser_Contract_landlordIdToUserInput;
    Contract_Contract_tenantIdToUser?: Prisma.ContractUncheckedCreateNestedManyWithoutUser_Contract_tenantIdToUserInput;
    Property?: Prisma.PropertyUncheckedCreateNestedManyWithoutUserInput;
    Review_Review_revieweeIdToUser?: Prisma.ReviewUncheckedCreateNestedManyWithoutUser_Review_revieweeIdToUserInput;
    Review_Review_reviewerIdToUser?: Prisma.ReviewUncheckedCreateNestedManyWithoutUser_Review_reviewerIdToUserInput;
    TenantProfile?: Prisma.TenantProfileUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutMaintenanceRequestInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutMaintenanceRequestInput, Prisma.UserUncheckedCreateWithoutMaintenanceRequestInput>;
};
export type UserUpsertWithoutMaintenanceRequestInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutMaintenanceRequestInput, Prisma.UserUncheckedUpdateWithoutMaintenanceRequestInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutMaintenanceRequestInput, Prisma.UserUncheckedCreateWithoutMaintenanceRequestInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutMaintenanceRequestInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutMaintenanceRequestInput, Prisma.UserUncheckedUpdateWithoutMaintenanceRequestInput>;
};
export type UserUpdateWithoutMaintenanceRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isKycVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Contract_Contract_landlordIdToUser?: Prisma.ContractUpdateManyWithoutUser_Contract_landlordIdToUserNestedInput;
    Contract_Contract_tenantIdToUser?: Prisma.ContractUpdateManyWithoutUser_Contract_tenantIdToUserNestedInput;
    Property?: Prisma.PropertyUpdateManyWithoutUserNestedInput;
    Review_Review_revieweeIdToUser?: Prisma.ReviewUpdateManyWithoutUser_Review_revieweeIdToUserNestedInput;
    Review_Review_reviewerIdToUser?: Prisma.ReviewUpdateManyWithoutUser_Review_reviewerIdToUserNestedInput;
    TenantProfile?: Prisma.TenantProfileUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutMaintenanceRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isKycVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Contract_Contract_landlordIdToUser?: Prisma.ContractUncheckedUpdateManyWithoutUser_Contract_landlordIdToUserNestedInput;
    Contract_Contract_tenantIdToUser?: Prisma.ContractUncheckedUpdateManyWithoutUser_Contract_tenantIdToUserNestedInput;
    Property?: Prisma.PropertyUncheckedUpdateManyWithoutUserNestedInput;
    Review_Review_revieweeIdToUser?: Prisma.ReviewUncheckedUpdateManyWithoutUser_Review_revieweeIdToUserNestedInput;
    Review_Review_reviewerIdToUser?: Prisma.ReviewUncheckedUpdateManyWithoutUser_Review_reviewerIdToUserNestedInput;
    TenantProfile?: Prisma.TenantProfileUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateWithoutPropertyInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    phone?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.Role;
    isKycVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Contract_Contract_landlordIdToUser?: Prisma.ContractCreateNestedManyWithoutUser_Contract_landlordIdToUserInput;
    Contract_Contract_tenantIdToUser?: Prisma.ContractCreateNestedManyWithoutUser_Contract_tenantIdToUserInput;
    MaintenanceRequest?: Prisma.MaintenanceRequestCreateNestedManyWithoutUserInput;
    Review_Review_revieweeIdToUser?: Prisma.ReviewCreateNestedManyWithoutUser_Review_revieweeIdToUserInput;
    Review_Review_reviewerIdToUser?: Prisma.ReviewCreateNestedManyWithoutUser_Review_reviewerIdToUserInput;
    TenantProfile?: Prisma.TenantProfileCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutPropertyInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    phone?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.Role;
    isKycVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Contract_Contract_landlordIdToUser?: Prisma.ContractUncheckedCreateNestedManyWithoutUser_Contract_landlordIdToUserInput;
    Contract_Contract_tenantIdToUser?: Prisma.ContractUncheckedCreateNestedManyWithoutUser_Contract_tenantIdToUserInput;
    MaintenanceRequest?: Prisma.MaintenanceRequestUncheckedCreateNestedManyWithoutUserInput;
    Review_Review_revieweeIdToUser?: Prisma.ReviewUncheckedCreateNestedManyWithoutUser_Review_revieweeIdToUserInput;
    Review_Review_reviewerIdToUser?: Prisma.ReviewUncheckedCreateNestedManyWithoutUser_Review_reviewerIdToUserInput;
    TenantProfile?: Prisma.TenantProfileUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutPropertyInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPropertyInput, Prisma.UserUncheckedCreateWithoutPropertyInput>;
};
export type UserUpsertWithoutPropertyInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutPropertyInput, Prisma.UserUncheckedUpdateWithoutPropertyInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPropertyInput, Prisma.UserUncheckedCreateWithoutPropertyInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutPropertyInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPropertyInput, Prisma.UserUncheckedUpdateWithoutPropertyInput>;
};
export type UserUpdateWithoutPropertyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isKycVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Contract_Contract_landlordIdToUser?: Prisma.ContractUpdateManyWithoutUser_Contract_landlordIdToUserNestedInput;
    Contract_Contract_tenantIdToUser?: Prisma.ContractUpdateManyWithoutUser_Contract_tenantIdToUserNestedInput;
    MaintenanceRequest?: Prisma.MaintenanceRequestUpdateManyWithoutUserNestedInput;
    Review_Review_revieweeIdToUser?: Prisma.ReviewUpdateManyWithoutUser_Review_revieweeIdToUserNestedInput;
    Review_Review_reviewerIdToUser?: Prisma.ReviewUpdateManyWithoutUser_Review_reviewerIdToUserNestedInput;
    TenantProfile?: Prisma.TenantProfileUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutPropertyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isKycVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Contract_Contract_landlordIdToUser?: Prisma.ContractUncheckedUpdateManyWithoutUser_Contract_landlordIdToUserNestedInput;
    Contract_Contract_tenantIdToUser?: Prisma.ContractUncheckedUpdateManyWithoutUser_Contract_tenantIdToUserNestedInput;
    MaintenanceRequest?: Prisma.MaintenanceRequestUncheckedUpdateManyWithoutUserNestedInput;
    Review_Review_revieweeIdToUser?: Prisma.ReviewUncheckedUpdateManyWithoutUser_Review_revieweeIdToUserNestedInput;
    Review_Review_reviewerIdToUser?: Prisma.ReviewUncheckedUpdateManyWithoutUser_Review_reviewerIdToUserNestedInput;
    TenantProfile?: Prisma.TenantProfileUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateWithoutReview_Review_revieweeIdToUserInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    phone?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.Role;
    isKycVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Contract_Contract_landlordIdToUser?: Prisma.ContractCreateNestedManyWithoutUser_Contract_landlordIdToUserInput;
    Contract_Contract_tenantIdToUser?: Prisma.ContractCreateNestedManyWithoutUser_Contract_tenantIdToUserInput;
    MaintenanceRequest?: Prisma.MaintenanceRequestCreateNestedManyWithoutUserInput;
    Property?: Prisma.PropertyCreateNestedManyWithoutUserInput;
    Review_Review_reviewerIdToUser?: Prisma.ReviewCreateNestedManyWithoutUser_Review_reviewerIdToUserInput;
    TenantProfile?: Prisma.TenantProfileCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutReview_Review_revieweeIdToUserInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    phone?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.Role;
    isKycVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Contract_Contract_landlordIdToUser?: Prisma.ContractUncheckedCreateNestedManyWithoutUser_Contract_landlordIdToUserInput;
    Contract_Contract_tenantIdToUser?: Prisma.ContractUncheckedCreateNestedManyWithoutUser_Contract_tenantIdToUserInput;
    MaintenanceRequest?: Prisma.MaintenanceRequestUncheckedCreateNestedManyWithoutUserInput;
    Property?: Prisma.PropertyUncheckedCreateNestedManyWithoutUserInput;
    Review_Review_reviewerIdToUser?: Prisma.ReviewUncheckedCreateNestedManyWithoutUser_Review_reviewerIdToUserInput;
    TenantProfile?: Prisma.TenantProfileUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutReview_Review_revieweeIdToUserInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutReview_Review_revieweeIdToUserInput, Prisma.UserUncheckedCreateWithoutReview_Review_revieweeIdToUserInput>;
};
export type UserCreateWithoutReview_Review_reviewerIdToUserInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    phone?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.Role;
    isKycVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Contract_Contract_landlordIdToUser?: Prisma.ContractCreateNestedManyWithoutUser_Contract_landlordIdToUserInput;
    Contract_Contract_tenantIdToUser?: Prisma.ContractCreateNestedManyWithoutUser_Contract_tenantIdToUserInput;
    MaintenanceRequest?: Prisma.MaintenanceRequestCreateNestedManyWithoutUserInput;
    Property?: Prisma.PropertyCreateNestedManyWithoutUserInput;
    Review_Review_revieweeIdToUser?: Prisma.ReviewCreateNestedManyWithoutUser_Review_revieweeIdToUserInput;
    TenantProfile?: Prisma.TenantProfileCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutReview_Review_reviewerIdToUserInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    phone?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.Role;
    isKycVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Contract_Contract_landlordIdToUser?: Prisma.ContractUncheckedCreateNestedManyWithoutUser_Contract_landlordIdToUserInput;
    Contract_Contract_tenantIdToUser?: Prisma.ContractUncheckedCreateNestedManyWithoutUser_Contract_tenantIdToUserInput;
    MaintenanceRequest?: Prisma.MaintenanceRequestUncheckedCreateNestedManyWithoutUserInput;
    Property?: Prisma.PropertyUncheckedCreateNestedManyWithoutUserInput;
    Review_Review_revieweeIdToUser?: Prisma.ReviewUncheckedCreateNestedManyWithoutUser_Review_revieweeIdToUserInput;
    TenantProfile?: Prisma.TenantProfileUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutReview_Review_reviewerIdToUserInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutReview_Review_reviewerIdToUserInput, Prisma.UserUncheckedCreateWithoutReview_Review_reviewerIdToUserInput>;
};
export type UserUpsertWithoutReview_Review_revieweeIdToUserInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutReview_Review_revieweeIdToUserInput, Prisma.UserUncheckedUpdateWithoutReview_Review_revieweeIdToUserInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutReview_Review_revieweeIdToUserInput, Prisma.UserUncheckedCreateWithoutReview_Review_revieweeIdToUserInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutReview_Review_revieweeIdToUserInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutReview_Review_revieweeIdToUserInput, Prisma.UserUncheckedUpdateWithoutReview_Review_revieweeIdToUserInput>;
};
export type UserUpdateWithoutReview_Review_revieweeIdToUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isKycVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Contract_Contract_landlordIdToUser?: Prisma.ContractUpdateManyWithoutUser_Contract_landlordIdToUserNestedInput;
    Contract_Contract_tenantIdToUser?: Prisma.ContractUpdateManyWithoutUser_Contract_tenantIdToUserNestedInput;
    MaintenanceRequest?: Prisma.MaintenanceRequestUpdateManyWithoutUserNestedInput;
    Property?: Prisma.PropertyUpdateManyWithoutUserNestedInput;
    Review_Review_reviewerIdToUser?: Prisma.ReviewUpdateManyWithoutUser_Review_reviewerIdToUserNestedInput;
    TenantProfile?: Prisma.TenantProfileUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutReview_Review_revieweeIdToUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isKycVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Contract_Contract_landlordIdToUser?: Prisma.ContractUncheckedUpdateManyWithoutUser_Contract_landlordIdToUserNestedInput;
    Contract_Contract_tenantIdToUser?: Prisma.ContractUncheckedUpdateManyWithoutUser_Contract_tenantIdToUserNestedInput;
    MaintenanceRequest?: Prisma.MaintenanceRequestUncheckedUpdateManyWithoutUserNestedInput;
    Property?: Prisma.PropertyUncheckedUpdateManyWithoutUserNestedInput;
    Review_Review_reviewerIdToUser?: Prisma.ReviewUncheckedUpdateManyWithoutUser_Review_reviewerIdToUserNestedInput;
    TenantProfile?: Prisma.TenantProfileUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserUpsertWithoutReview_Review_reviewerIdToUserInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutReview_Review_reviewerIdToUserInput, Prisma.UserUncheckedUpdateWithoutReview_Review_reviewerIdToUserInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutReview_Review_reviewerIdToUserInput, Prisma.UserUncheckedCreateWithoutReview_Review_reviewerIdToUserInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutReview_Review_reviewerIdToUserInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutReview_Review_reviewerIdToUserInput, Prisma.UserUncheckedUpdateWithoutReview_Review_reviewerIdToUserInput>;
};
export type UserUpdateWithoutReview_Review_reviewerIdToUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isKycVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Contract_Contract_landlordIdToUser?: Prisma.ContractUpdateManyWithoutUser_Contract_landlordIdToUserNestedInput;
    Contract_Contract_tenantIdToUser?: Prisma.ContractUpdateManyWithoutUser_Contract_tenantIdToUserNestedInput;
    MaintenanceRequest?: Prisma.MaintenanceRequestUpdateManyWithoutUserNestedInput;
    Property?: Prisma.PropertyUpdateManyWithoutUserNestedInput;
    Review_Review_revieweeIdToUser?: Prisma.ReviewUpdateManyWithoutUser_Review_revieweeIdToUserNestedInput;
    TenantProfile?: Prisma.TenantProfileUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutReview_Review_reviewerIdToUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isKycVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Contract_Contract_landlordIdToUser?: Prisma.ContractUncheckedUpdateManyWithoutUser_Contract_landlordIdToUserNestedInput;
    Contract_Contract_tenantIdToUser?: Prisma.ContractUncheckedUpdateManyWithoutUser_Contract_tenantIdToUserNestedInput;
    MaintenanceRequest?: Prisma.MaintenanceRequestUncheckedUpdateManyWithoutUserNestedInput;
    Property?: Prisma.PropertyUncheckedUpdateManyWithoutUserNestedInput;
    Review_Review_revieweeIdToUser?: Prisma.ReviewUncheckedUpdateManyWithoutUser_Review_revieweeIdToUserNestedInput;
    TenantProfile?: Prisma.TenantProfileUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateWithoutTenantProfileInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    phone?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.Role;
    isKycVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Contract_Contract_landlordIdToUser?: Prisma.ContractCreateNestedManyWithoutUser_Contract_landlordIdToUserInput;
    Contract_Contract_tenantIdToUser?: Prisma.ContractCreateNestedManyWithoutUser_Contract_tenantIdToUserInput;
    MaintenanceRequest?: Prisma.MaintenanceRequestCreateNestedManyWithoutUserInput;
    Property?: Prisma.PropertyCreateNestedManyWithoutUserInput;
    Review_Review_revieweeIdToUser?: Prisma.ReviewCreateNestedManyWithoutUser_Review_revieweeIdToUserInput;
    Review_Review_reviewerIdToUser?: Prisma.ReviewCreateNestedManyWithoutUser_Review_reviewerIdToUserInput;
};
export type UserUncheckedCreateWithoutTenantProfileInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    phone?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.Role;
    isKycVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Contract_Contract_landlordIdToUser?: Prisma.ContractUncheckedCreateNestedManyWithoutUser_Contract_landlordIdToUserInput;
    Contract_Contract_tenantIdToUser?: Prisma.ContractUncheckedCreateNestedManyWithoutUser_Contract_tenantIdToUserInput;
    MaintenanceRequest?: Prisma.MaintenanceRequestUncheckedCreateNestedManyWithoutUserInput;
    Property?: Prisma.PropertyUncheckedCreateNestedManyWithoutUserInput;
    Review_Review_revieweeIdToUser?: Prisma.ReviewUncheckedCreateNestedManyWithoutUser_Review_revieweeIdToUserInput;
    Review_Review_reviewerIdToUser?: Prisma.ReviewUncheckedCreateNestedManyWithoutUser_Review_reviewerIdToUserInput;
};
export type UserCreateOrConnectWithoutTenantProfileInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutTenantProfileInput, Prisma.UserUncheckedCreateWithoutTenantProfileInput>;
};
export type UserUpsertWithoutTenantProfileInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutTenantProfileInput, Prisma.UserUncheckedUpdateWithoutTenantProfileInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutTenantProfileInput, Prisma.UserUncheckedCreateWithoutTenantProfileInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutTenantProfileInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutTenantProfileInput, Prisma.UserUncheckedUpdateWithoutTenantProfileInput>;
};
export type UserUpdateWithoutTenantProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isKycVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Contract_Contract_landlordIdToUser?: Prisma.ContractUpdateManyWithoutUser_Contract_landlordIdToUserNestedInput;
    Contract_Contract_tenantIdToUser?: Prisma.ContractUpdateManyWithoutUser_Contract_tenantIdToUserNestedInput;
    MaintenanceRequest?: Prisma.MaintenanceRequestUpdateManyWithoutUserNestedInput;
    Property?: Prisma.PropertyUpdateManyWithoutUserNestedInput;
    Review_Review_revieweeIdToUser?: Prisma.ReviewUpdateManyWithoutUser_Review_revieweeIdToUserNestedInput;
    Review_Review_reviewerIdToUser?: Prisma.ReviewUpdateManyWithoutUser_Review_reviewerIdToUserNestedInput;
};
export type UserUncheckedUpdateWithoutTenantProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isKycVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Contract_Contract_landlordIdToUser?: Prisma.ContractUncheckedUpdateManyWithoutUser_Contract_landlordIdToUserNestedInput;
    Contract_Contract_tenantIdToUser?: Prisma.ContractUncheckedUpdateManyWithoutUser_Contract_tenantIdToUserNestedInput;
    MaintenanceRequest?: Prisma.MaintenanceRequestUncheckedUpdateManyWithoutUserNestedInput;
    Property?: Prisma.PropertyUncheckedUpdateManyWithoutUserNestedInput;
    Review_Review_revieweeIdToUser?: Prisma.ReviewUncheckedUpdateManyWithoutUser_Review_revieweeIdToUserNestedInput;
    Review_Review_reviewerIdToUser?: Prisma.ReviewUncheckedUpdateManyWithoutUser_Review_reviewerIdToUserNestedInput;
};
export type UserCountOutputType = {
    Contract_Contract_landlordIdToUser: number;
    Contract_Contract_tenantIdToUser: number;
    MaintenanceRequest: number;
    Property: number;
    Review_Review_revieweeIdToUser: number;
    Review_Review_reviewerIdToUser: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Contract_Contract_landlordIdToUser?: boolean | UserCountOutputTypeCountContract_Contract_landlordIdToUserArgs;
    Contract_Contract_tenantIdToUser?: boolean | UserCountOutputTypeCountContract_Contract_tenantIdToUserArgs;
    MaintenanceRequest?: boolean | UserCountOutputTypeCountMaintenanceRequestArgs;
    Property?: boolean | UserCountOutputTypeCountPropertyArgs;
    Review_Review_revieweeIdToUser?: boolean | UserCountOutputTypeCountReview_Review_revieweeIdToUserArgs;
    Review_Review_reviewerIdToUser?: boolean | UserCountOutputTypeCountReview_Review_reviewerIdToUserArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountContract_Contract_landlordIdToUserArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContractWhereInput;
};
export type UserCountOutputTypeCountContract_Contract_tenantIdToUserArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContractWhereInput;
};
export type UserCountOutputTypeCountMaintenanceRequestArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MaintenanceRequestWhereInput;
};
export type UserCountOutputTypeCountPropertyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PropertyWhereInput;
};
export type UserCountOutputTypeCountReview_Review_revieweeIdToUserArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReviewWhereInput;
};
export type UserCountOutputTypeCountReview_Review_reviewerIdToUserArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReviewWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password?: boolean;
    fullName?: boolean;
    phone?: boolean;
    avatarUrl?: boolean;
    role?: boolean;
    isKycVerified?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Contract_Contract_landlordIdToUser?: boolean | Prisma.User$Contract_Contract_landlordIdToUserArgs<ExtArgs>;
    Contract_Contract_tenantIdToUser?: boolean | Prisma.User$Contract_Contract_tenantIdToUserArgs<ExtArgs>;
    MaintenanceRequest?: boolean | Prisma.User$MaintenanceRequestArgs<ExtArgs>;
    Property?: boolean | Prisma.User$PropertyArgs<ExtArgs>;
    Review_Review_revieweeIdToUser?: boolean | Prisma.User$Review_Review_revieweeIdToUserArgs<ExtArgs>;
    Review_Review_reviewerIdToUser?: boolean | Prisma.User$Review_Review_reviewerIdToUserArgs<ExtArgs>;
    TenantProfile?: boolean | Prisma.User$TenantProfileArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password?: boolean;
    fullName?: boolean;
    phone?: boolean;
    avatarUrl?: boolean;
    role?: boolean;
    isKycVerified?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password?: boolean;
    fullName?: boolean;
    phone?: boolean;
    avatarUrl?: boolean;
    role?: boolean;
    isKycVerified?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    password?: boolean;
    fullName?: boolean;
    phone?: boolean;
    avatarUrl?: boolean;
    role?: boolean;
    isKycVerified?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "password" | "fullName" | "phone" | "avatarUrl" | "role" | "isKycVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Contract_Contract_landlordIdToUser?: boolean | Prisma.User$Contract_Contract_landlordIdToUserArgs<ExtArgs>;
    Contract_Contract_tenantIdToUser?: boolean | Prisma.User$Contract_Contract_tenantIdToUserArgs<ExtArgs>;
    MaintenanceRequest?: boolean | Prisma.User$MaintenanceRequestArgs<ExtArgs>;
    Property?: boolean | Prisma.User$PropertyArgs<ExtArgs>;
    Review_Review_revieweeIdToUser?: boolean | Prisma.User$Review_Review_revieweeIdToUserArgs<ExtArgs>;
    Review_Review_reviewerIdToUser?: boolean | Prisma.User$Review_Review_reviewerIdToUserArgs<ExtArgs>;
    TenantProfile?: boolean | Prisma.User$TenantProfileArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        Contract_Contract_landlordIdToUser: Prisma.$ContractPayload<ExtArgs>[];
        Contract_Contract_tenantIdToUser: Prisma.$ContractPayload<ExtArgs>[];
        MaintenanceRequest: Prisma.$MaintenanceRequestPayload<ExtArgs>[];
        Property: Prisma.$PropertyPayload<ExtArgs>[];
        Review_Review_revieweeIdToUser: Prisma.$ReviewPayload<ExtArgs>[];
        Review_Review_reviewerIdToUser: Prisma.$ReviewPayload<ExtArgs>[];
        TenantProfile: Prisma.$TenantProfilePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        password: string;
        fullName: string;
        phone: string | null;
        avatarUrl: string | null;
        role: $Enums.Role;
        isKycVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Contract_Contract_landlordIdToUser<T extends Prisma.User$Contract_Contract_landlordIdToUserArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$Contract_Contract_landlordIdToUserArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    Contract_Contract_tenantIdToUser<T extends Prisma.User$Contract_Contract_tenantIdToUserArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$Contract_Contract_tenantIdToUserArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    MaintenanceRequest<T extends Prisma.User$MaintenanceRequestArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$MaintenanceRequestArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    Property<T extends Prisma.User$PropertyArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$PropertyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    Review_Review_revieweeIdToUser<T extends Prisma.User$Review_Review_revieweeIdToUserArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$Review_Review_revieweeIdToUserArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    Review_Review_reviewerIdToUser<T extends Prisma.User$Review_Review_reviewerIdToUserArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$Review_Review_reviewerIdToUserArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    TenantProfile<T extends Prisma.User$TenantProfileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$TenantProfileArgs<ExtArgs>>): Prisma.Prisma__TenantProfileClient<runtime.Types.Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
    readonly fullName: Prisma.FieldRef<"User", 'String'>;
    readonly phone: Prisma.FieldRef<"User", 'String'>;
    readonly avatarUrl: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'Role'>;
    readonly isKycVerified: Prisma.FieldRef<"User", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$Contract_Contract_landlordIdToUserArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$Contract_Contract_tenantIdToUserArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$MaintenanceRequestArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$PropertyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropertySelect<ExtArgs> | null;
    omit?: Prisma.PropertyOmit<ExtArgs> | null;
    include?: Prisma.PropertyInclude<ExtArgs> | null;
    where?: Prisma.PropertyWhereInput;
    orderBy?: Prisma.PropertyOrderByWithRelationInput | Prisma.PropertyOrderByWithRelationInput[];
    cursor?: Prisma.PropertyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PropertyScalarFieldEnum | Prisma.PropertyScalarFieldEnum[];
};
export type User$Review_Review_revieweeIdToUserArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    include?: Prisma.ReviewInclude<ExtArgs> | null;
    where?: Prisma.ReviewWhereInput;
    orderBy?: Prisma.ReviewOrderByWithRelationInput | Prisma.ReviewOrderByWithRelationInput[];
    cursor?: Prisma.ReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReviewScalarFieldEnum | Prisma.ReviewScalarFieldEnum[];
};
export type User$Review_Review_reviewerIdToUserArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    include?: Prisma.ReviewInclude<ExtArgs> | null;
    where?: Prisma.ReviewWhereInput;
    orderBy?: Prisma.ReviewOrderByWithRelationInput | Prisma.ReviewOrderByWithRelationInput[];
    cursor?: Prisma.ReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReviewScalarFieldEnum | Prisma.ReviewScalarFieldEnum[];
};
export type User$TenantProfileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantProfileSelect<ExtArgs> | null;
    omit?: Prisma.TenantProfileOmit<ExtArgs> | null;
    include?: Prisma.TenantProfileInclude<ExtArgs> | null;
    where?: Prisma.TenantProfileWhereInput;
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
