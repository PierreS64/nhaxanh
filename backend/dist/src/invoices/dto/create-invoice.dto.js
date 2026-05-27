"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInvoiceDto = void 0;
const class_validator_1 = require("class-validator");
const client_1 = require("@prisma/client");
class CreateInvoiceDto {
    contractId;
    title;
    rentAmount;
    electricityAmount;
    waterAmount;
    serviceAmount;
    totalAmount;
    dueDate;
    issueDate;
    status;
    paymentMethod;
}
exports.CreateInvoiceDto = CreateInvoiceDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "contractId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateInvoiceDto.prototype, "rentAmount", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateInvoiceDto.prototype, "electricityAmount", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateInvoiceDto.prototype, "waterAmount", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateInvoiceDto.prototype, "serviceAmount", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateInvoiceDto.prototype, "totalAmount", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "dueDate", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "issueDate", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.InvoiceStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "paymentMethod", void 0);
//# sourceMappingURL=create-invoice.dto.js.map