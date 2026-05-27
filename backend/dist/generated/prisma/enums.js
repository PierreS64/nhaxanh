"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = exports.PropertyType = exports.PropertyStatus = exports.MaintenanceStatus = exports.InvoiceStatus = exports.ContractStatus = void 0;
exports.ContractStatus = {
    PENDING: 'PENDING',
    ACTIVE: 'ACTIVE',
    EXPIRED: 'EXPIRED',
    TERMINATED: 'TERMINATED'
};
exports.InvoiceStatus = {
    UNPAID: 'UNPAID',
    PAID: 'PAID',
    OVERDUE: 'OVERDUE'
};
exports.MaintenanceStatus = {
    PENDING: 'PENDING',
    IN_PROGRESS: 'IN_PROGRESS',
    RESOLVED: 'RESOLVED'
};
exports.PropertyStatus = {
    AVAILABLE: 'AVAILABLE',
    RENTED: 'RENTED',
    MAINTENANCE: 'MAINTENANCE'
};
exports.PropertyType = {
    ROOM: 'ROOM',
    MINI_APARTMENT: 'MINI_APARTMENT',
    WHOLE_HOUSE: 'WHOLE_HOUSE',
    DORMITORY: 'DORMITORY'
};
exports.Role = {
    TENANT: 'TENANT',
    LANDLORD: 'LANDLORD',
    ADMIN: 'ADMIN'
};
//# sourceMappingURL=enums.js.map