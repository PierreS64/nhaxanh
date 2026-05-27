"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.UserScalarFieldEnum = exports.TenantProfileScalarFieldEnum = exports.ReviewScalarFieldEnum = exports.PropertyImageScalarFieldEnum = exports.PropertyScalarFieldEnum = exports.MeterReadingScalarFieldEnum = exports.MaintenanceRequestScalarFieldEnum = exports.InvoiceScalarFieldEnum = exports.ContractScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.8.0",
    engine: "3c6e192761c0362d496ed980de936e2f3cebcd3a"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Contract: 'Contract',
    Invoice: 'Invoice',
    MaintenanceRequest: 'MaintenanceRequest',
    MeterReading: 'MeterReading',
    Property: 'Property',
    PropertyImage: 'PropertyImage',
    Review: 'Review',
    TenantProfile: 'TenantProfile',
    User: 'User'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.ContractScalarFieldEnum = {
    id: 'id',
    tenantId: 'tenantId',
    landlordId: 'landlordId',
    propertyId: 'propertyId',
    startDate: 'startDate',
    endDate: 'endDate',
    monthlyPrice: 'monthlyPrice',
    depositAmount: 'depositAmount',
    eSignatureUrl: 'eSignatureUrl',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.InvoiceScalarFieldEnum = {
    id: 'id',
    contractId: 'contractId',
    title: 'title',
    rentAmount: 'rentAmount',
    electricityAmount: 'electricityAmount',
    waterAmount: 'waterAmount',
    serviceAmount: 'serviceAmount',
    totalAmount: 'totalAmount',
    issueDate: 'issueDate',
    dueDate: 'dueDate',
    status: 'status',
    paymentMethod: 'paymentMethod',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.MaintenanceRequestScalarFieldEnum = {
    id: 'id',
    tenantId: 'tenantId',
    propertyId: 'propertyId',
    title: 'title',
    description: 'description',
    imageUrl: 'imageUrl',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.MeterReadingScalarFieldEnum = {
    id: 'id',
    propertyId: 'propertyId',
    month: 'month',
    year: 'year',
    electricityUsage: 'electricityUsage',
    waterUsage: 'waterUsage',
    meterImageUrl: 'meterImageUrl',
    createdAt: 'createdAt'
};
exports.PropertyScalarFieldEnum = {
    id: 'id',
    landlordId: 'landlordId',
    title: 'title',
    description: 'description',
    type: 'type',
    status: 'status',
    price: 'price',
    area: 'area',
    depositAmount: 'depositAmount',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    amenities: 'amenities',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PropertyImageScalarFieldEnum = {
    id: 'id',
    propertyId: 'propertyId',
    url: 'url',
    isVirtualStaged: 'isVirtualStaged',
    createdAt: 'createdAt'
};
exports.ReviewScalarFieldEnum = {
    id: 'id',
    reviewerId: 'reviewerId',
    revieweeId: 'revieweeId',
    propertyId: 'propertyId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
};
exports.TenantProfileScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    bio: 'bio',
    budgetMin: 'budgetMin',
    budgetMax: 'budgetMax',
    sleepTime: 'sleepTime',
    cleanliness: 'cleanliness',
    hasPet: 'hasPet',
    isSmoker: 'isSmoker',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    password: 'password',
    fullName: 'fullName',
    phone: 'phone',
    avatarUrl: 'avatarUrl',
    role: 'role',
    isKycVerified: 'isKycVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map