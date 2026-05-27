export declare const ContractStatus: {
    readonly PENDING: "PENDING";
    readonly ACTIVE: "ACTIVE";
    readonly EXPIRED: "EXPIRED";
    readonly TERMINATED: "TERMINATED";
};
export type ContractStatus = (typeof ContractStatus)[keyof typeof ContractStatus];
export declare const InvoiceStatus: {
    readonly UNPAID: "UNPAID";
    readonly PAID: "PAID";
    readonly OVERDUE: "OVERDUE";
};
export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus];
export declare const MaintenanceStatus: {
    readonly PENDING: "PENDING";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly RESOLVED: "RESOLVED";
};
export type MaintenanceStatus = (typeof MaintenanceStatus)[keyof typeof MaintenanceStatus];
export declare const PropertyStatus: {
    readonly AVAILABLE: "AVAILABLE";
    readonly RENTED: "RENTED";
    readonly MAINTENANCE: "MAINTENANCE";
};
export type PropertyStatus = (typeof PropertyStatus)[keyof typeof PropertyStatus];
export declare const PropertyType: {
    readonly ROOM: "ROOM";
    readonly MINI_APARTMENT: "MINI_APARTMENT";
    readonly WHOLE_HOUSE: "WHOLE_HOUSE";
    readonly DORMITORY: "DORMITORY";
};
export type PropertyType = (typeof PropertyType)[keyof typeof PropertyType];
export declare const Role: {
    readonly TENANT: "TENANT";
    readonly LANDLORD: "LANDLORD";
    readonly ADMIN: "ADMIN";
};
export type Role = (typeof Role)[keyof typeof Role];
