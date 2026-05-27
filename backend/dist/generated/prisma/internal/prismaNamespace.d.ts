import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: any;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: any;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: any;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: any;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: any;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: any;
export declare const empty: any;
export declare const join: any;
export declare const raw: any;
export declare const Sql: any;
export type Sql = runtime.Sql;
export declare const Decimal: any;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: any;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: any;
export declare const JsonNull: any;
export declare const AnyNull: any;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly Contract: "Contract";
    readonly Invoice: "Invoice";
    readonly MaintenanceRequest: "MaintenanceRequest";
    readonly MeterReading: "MeterReading";
    readonly Property: "Property";
    readonly PropertyImage: "PropertyImage";
    readonly Review: "Review";
    readonly TenantProfile: "TenantProfile";
    readonly User: "User";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "contract" | "invoice" | "maintenanceRequest" | "meterReading" | "property" | "propertyImage" | "review" | "tenantProfile" | "user";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Contract: {
            payload: Prisma.$ContractPayload<ExtArgs>;
            fields: Prisma.ContractFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ContractFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContractPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ContractFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContractPayload>;
                };
                findFirst: {
                    args: Prisma.ContractFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContractPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ContractFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContractPayload>;
                };
                findMany: {
                    args: Prisma.ContractFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContractPayload>[];
                };
                create: {
                    args: Prisma.ContractCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContractPayload>;
                };
                createMany: {
                    args: Prisma.ContractCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ContractCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContractPayload>[];
                };
                delete: {
                    args: Prisma.ContractDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContractPayload>;
                };
                update: {
                    args: Prisma.ContractUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContractPayload>;
                };
                deleteMany: {
                    args: Prisma.ContractDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ContractUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ContractUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContractPayload>[];
                };
                upsert: {
                    args: Prisma.ContractUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContractPayload>;
                };
                aggregate: {
                    args: Prisma.ContractAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateContract>;
                };
                groupBy: {
                    args: Prisma.ContractGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContractGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ContractCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContractCountAggregateOutputType> | number;
                };
            };
        };
        Invoice: {
            payload: Prisma.$InvoicePayload<ExtArgs>;
            fields: Prisma.InvoiceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InvoiceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>;
                };
                findFirst: {
                    args: Prisma.InvoiceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>;
                };
                findMany: {
                    args: Prisma.InvoiceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>[];
                };
                create: {
                    args: Prisma.InvoiceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>;
                };
                createMany: {
                    args: Prisma.InvoiceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>[];
                };
                delete: {
                    args: Prisma.InvoiceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>;
                };
                update: {
                    args: Prisma.InvoiceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>;
                };
                deleteMany: {
                    args: Prisma.InvoiceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InvoiceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>[];
                };
                upsert: {
                    args: Prisma.InvoiceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>;
                };
                aggregate: {
                    args: Prisma.InvoiceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInvoice>;
                };
                groupBy: {
                    args: Prisma.InvoiceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InvoiceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InvoiceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InvoiceCountAggregateOutputType> | number;
                };
            };
        };
        MaintenanceRequest: {
            payload: Prisma.$MaintenanceRequestPayload<ExtArgs>;
            fields: Prisma.MaintenanceRequestFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MaintenanceRequestFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MaintenanceRequestFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>;
                };
                findFirst: {
                    args: Prisma.MaintenanceRequestFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MaintenanceRequestFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>;
                };
                findMany: {
                    args: Prisma.MaintenanceRequestFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>[];
                };
                create: {
                    args: Prisma.MaintenanceRequestCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>;
                };
                createMany: {
                    args: Prisma.MaintenanceRequestCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MaintenanceRequestCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>[];
                };
                delete: {
                    args: Prisma.MaintenanceRequestDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>;
                };
                update: {
                    args: Prisma.MaintenanceRequestUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>;
                };
                deleteMany: {
                    args: Prisma.MaintenanceRequestDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MaintenanceRequestUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MaintenanceRequestUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>[];
                };
                upsert: {
                    args: Prisma.MaintenanceRequestUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>;
                };
                aggregate: {
                    args: Prisma.MaintenanceRequestAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMaintenanceRequest>;
                };
                groupBy: {
                    args: Prisma.MaintenanceRequestGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MaintenanceRequestGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MaintenanceRequestCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MaintenanceRequestCountAggregateOutputType> | number;
                };
            };
        };
        MeterReading: {
            payload: Prisma.$MeterReadingPayload<ExtArgs>;
            fields: Prisma.MeterReadingFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MeterReadingFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MeterReadingPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MeterReadingFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MeterReadingPayload>;
                };
                findFirst: {
                    args: Prisma.MeterReadingFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MeterReadingPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MeterReadingFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MeterReadingPayload>;
                };
                findMany: {
                    args: Prisma.MeterReadingFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MeterReadingPayload>[];
                };
                create: {
                    args: Prisma.MeterReadingCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MeterReadingPayload>;
                };
                createMany: {
                    args: Prisma.MeterReadingCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MeterReadingCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MeterReadingPayload>[];
                };
                delete: {
                    args: Prisma.MeterReadingDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MeterReadingPayload>;
                };
                update: {
                    args: Prisma.MeterReadingUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MeterReadingPayload>;
                };
                deleteMany: {
                    args: Prisma.MeterReadingDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MeterReadingUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MeterReadingUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MeterReadingPayload>[];
                };
                upsert: {
                    args: Prisma.MeterReadingUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MeterReadingPayload>;
                };
                aggregate: {
                    args: Prisma.MeterReadingAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMeterReading>;
                };
                groupBy: {
                    args: Prisma.MeterReadingGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MeterReadingGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MeterReadingCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MeterReadingCountAggregateOutputType> | number;
                };
            };
        };
        Property: {
            payload: Prisma.$PropertyPayload<ExtArgs>;
            fields: Prisma.PropertyFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PropertyFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyPayload>;
                };
                findFirst: {
                    args: Prisma.PropertyFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyPayload>;
                };
                findMany: {
                    args: Prisma.PropertyFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyPayload>[];
                };
                create: {
                    args: Prisma.PropertyCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyPayload>;
                };
                createMany: {
                    args: Prisma.PropertyCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PropertyCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyPayload>[];
                };
                delete: {
                    args: Prisma.PropertyDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyPayload>;
                };
                update: {
                    args: Prisma.PropertyUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyPayload>;
                };
                deleteMany: {
                    args: Prisma.PropertyDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PropertyUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PropertyUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyPayload>[];
                };
                upsert: {
                    args: Prisma.PropertyUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyPayload>;
                };
                aggregate: {
                    args: Prisma.PropertyAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProperty>;
                };
                groupBy: {
                    args: Prisma.PropertyGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PropertyGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PropertyCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PropertyCountAggregateOutputType> | number;
                };
            };
        };
        PropertyImage: {
            payload: Prisma.$PropertyImagePayload<ExtArgs>;
            fields: Prisma.PropertyImageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PropertyImageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyImagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PropertyImageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyImagePayload>;
                };
                findFirst: {
                    args: Prisma.PropertyImageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyImagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PropertyImageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyImagePayload>;
                };
                findMany: {
                    args: Prisma.PropertyImageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyImagePayload>[];
                };
                create: {
                    args: Prisma.PropertyImageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyImagePayload>;
                };
                createMany: {
                    args: Prisma.PropertyImageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PropertyImageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyImagePayload>[];
                };
                delete: {
                    args: Prisma.PropertyImageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyImagePayload>;
                };
                update: {
                    args: Prisma.PropertyImageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyImagePayload>;
                };
                deleteMany: {
                    args: Prisma.PropertyImageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PropertyImageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PropertyImageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyImagePayload>[];
                };
                upsert: {
                    args: Prisma.PropertyImageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyImagePayload>;
                };
                aggregate: {
                    args: Prisma.PropertyImageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePropertyImage>;
                };
                groupBy: {
                    args: Prisma.PropertyImageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PropertyImageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PropertyImageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PropertyImageCountAggregateOutputType> | number;
                };
            };
        };
        Review: {
            payload: Prisma.$ReviewPayload<ExtArgs>;
            fields: Prisma.ReviewFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ReviewFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                findFirst: {
                    args: Prisma.ReviewFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                findMany: {
                    args: Prisma.ReviewFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>[];
                };
                create: {
                    args: Prisma.ReviewCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                createMany: {
                    args: Prisma.ReviewCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>[];
                };
                delete: {
                    args: Prisma.ReviewDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                update: {
                    args: Prisma.ReviewUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                deleteMany: {
                    args: Prisma.ReviewDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ReviewUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>[];
                };
                upsert: {
                    args: Prisma.ReviewUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                aggregate: {
                    args: Prisma.ReviewAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReview>;
                };
                groupBy: {
                    args: Prisma.ReviewGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReviewGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ReviewCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReviewCountAggregateOutputType> | number;
                };
            };
        };
        TenantProfile: {
            payload: Prisma.$TenantProfilePayload<ExtArgs>;
            fields: Prisma.TenantProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TenantProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TenantProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantProfilePayload>;
                };
                findFirst: {
                    args: Prisma.TenantProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TenantProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantProfilePayload>;
                };
                findMany: {
                    args: Prisma.TenantProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantProfilePayload>[];
                };
                create: {
                    args: Prisma.TenantProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantProfilePayload>;
                };
                createMany: {
                    args: Prisma.TenantProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TenantProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantProfilePayload>[];
                };
                delete: {
                    args: Prisma.TenantProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantProfilePayload>;
                };
                update: {
                    args: Prisma.TenantProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.TenantProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TenantProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TenantProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantProfilePayload>[];
                };
                upsert: {
                    args: Prisma.TenantProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantProfilePayload>;
                };
                aggregate: {
                    args: Prisma.TenantProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTenantProfile>;
                };
                groupBy: {
                    args: Prisma.TenantProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TenantProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TenantProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TenantProfileCountAggregateOutputType> | number;
                };
            };
        };
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: any;
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const ContractScalarFieldEnum: {
    readonly id: "id";
    readonly tenantId: "tenantId";
    readonly landlordId: "landlordId";
    readonly propertyId: "propertyId";
    readonly startDate: "startDate";
    readonly endDate: "endDate";
    readonly monthlyPrice: "monthlyPrice";
    readonly depositAmount: "depositAmount";
    readonly eSignatureUrl: "eSignatureUrl";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ContractScalarFieldEnum = (typeof ContractScalarFieldEnum)[keyof typeof ContractScalarFieldEnum];
export declare const InvoiceScalarFieldEnum: {
    readonly id: "id";
    readonly contractId: "contractId";
    readonly title: "title";
    readonly rentAmount: "rentAmount";
    readonly electricityAmount: "electricityAmount";
    readonly waterAmount: "waterAmount";
    readonly serviceAmount: "serviceAmount";
    readonly totalAmount: "totalAmount";
    readonly issueDate: "issueDate";
    readonly dueDate: "dueDate";
    readonly status: "status";
    readonly paymentMethod: "paymentMethod";
    readonly paidAt: "paidAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum];
export declare const MaintenanceRequestScalarFieldEnum: {
    readonly id: "id";
    readonly tenantId: "tenantId";
    readonly propertyId: "propertyId";
    readonly title: "title";
    readonly description: "description";
    readonly imageUrl: "imageUrl";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MaintenanceRequestScalarFieldEnum = (typeof MaintenanceRequestScalarFieldEnum)[keyof typeof MaintenanceRequestScalarFieldEnum];
export declare const MeterReadingScalarFieldEnum: {
    readonly id: "id";
    readonly propertyId: "propertyId";
    readonly month: "month";
    readonly year: "year";
    readonly electricityUsage: "electricityUsage";
    readonly waterUsage: "waterUsage";
    readonly meterImageUrl: "meterImageUrl";
    readonly createdAt: "createdAt";
};
export type MeterReadingScalarFieldEnum = (typeof MeterReadingScalarFieldEnum)[keyof typeof MeterReadingScalarFieldEnum];
export declare const PropertyScalarFieldEnum: {
    readonly id: "id";
    readonly landlordId: "landlordId";
    readonly title: "title";
    readonly description: "description";
    readonly type: "type";
    readonly status: "status";
    readonly price: "price";
    readonly area: "area";
    readonly depositAmount: "depositAmount";
    readonly address: "address";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly amenities: "amenities";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum];
export declare const PropertyImageScalarFieldEnum: {
    readonly id: "id";
    readonly propertyId: "propertyId";
    readonly url: "url";
    readonly isVirtualStaged: "isVirtualStaged";
    readonly createdAt: "createdAt";
};
export type PropertyImageScalarFieldEnum = (typeof PropertyImageScalarFieldEnum)[keyof typeof PropertyImageScalarFieldEnum];
export declare const ReviewScalarFieldEnum: {
    readonly id: "id";
    readonly reviewerId: "reviewerId";
    readonly revieweeId: "revieweeId";
    readonly propertyId: "propertyId";
    readonly rating: "rating";
    readonly comment: "comment";
    readonly createdAt: "createdAt";
};
export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum];
export declare const TenantProfileScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly bio: "bio";
    readonly budgetMin: "budgetMin";
    readonly budgetMax: "budgetMax";
    readonly sleepTime: "sleepTime";
    readonly cleanliness: "cleanliness";
    readonly hasPet: "hasPet";
    readonly isSmoker: "isSmoker";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TenantProfileScalarFieldEnum = (typeof TenantProfileScalarFieldEnum)[keyof typeof TenantProfileScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password: "password";
    readonly fullName: "fullName";
    readonly phone: "phone";
    readonly avatarUrl: "avatarUrl";
    readonly role: "role";
    readonly isKycVerified: "isKycVerified";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type EnumContractStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContractStatus'>;
export type ListEnumContractStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContractStatus[]'>;
export type EnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus'>;
export type ListEnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus[]'>;
export type EnumMaintenanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaintenanceStatus'>;
export type ListEnumMaintenanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaintenanceStatus[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type EnumPropertyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyType'>;
export type ListEnumPropertyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyType[]'>;
export type EnumPropertyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyStatus'>;
export type ListEnumPropertyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyStatus[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>;
export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    contract?: Prisma.ContractOmit;
    invoice?: Prisma.InvoiceOmit;
    maintenanceRequest?: Prisma.MaintenanceRequestOmit;
    meterReading?: Prisma.MeterReadingOmit;
    property?: Prisma.PropertyOmit;
    propertyImage?: Prisma.PropertyImageOmit;
    review?: Prisma.ReviewOmit;
    tenantProfile?: Prisma.TenantProfileOmit;
    user?: Prisma.UserOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
