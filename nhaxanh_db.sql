-- ======================================================================
-- BƯỚC 1: TẠO CÁC KIỂU DỮ LIỆU ENUM (Cần drop trước nếu chạy lại script)
-- ======================================================================

DROP TYPE IF EXISTS "Role" CASCADE;
CREATE TYPE "Role" AS ENUM ('TENANT', 'LANDLORD', 'ADMIN');

DROP TYPE IF EXISTS "PropertyType" CASCADE;
CREATE TYPE "PropertyType" AS ENUM ('ROOM', 'MINI_APARTMENT', 'WHOLE_HOUSE', 'DORMITORY');

DROP TYPE IF EXISTS "PropertyStatus" CASCADE;
CREATE TYPE "PropertyStatus" AS ENUM ('AVAILABLE', 'RENTED', 'MAINTENANCE');

DROP TYPE IF EXISTS "ContractStatus" CASCADE;
CREATE TYPE "ContractStatus" AS ENUM ('PENDING', 'ACTIVE', 'EXPIRED', 'TERMINATED');

DROP TYPE IF EXISTS "InvoiceStatus" CASCADE;
CREATE TYPE "InvoiceStatus" AS ENUM ('UNPAID', 'PAID', 'OVERDUE');

DROP TYPE IF EXISTS "MaintenanceStatus" CASCADE;
CREATE TYPE "MaintenanceStatus" AS ENUM ('PENDING', 'IN_PROGRESS', 'RESOLVED');


-- ======================================================================
-- BƯỚC 2: TẠO CÁC BẢNG (TABLES)
-- ======================================================================

-- 1. Bảng User
CREATE TABLE "User" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "email" VARCHAR(255) NOT NULL UNIQUE,
    "password" VARCHAR(255) NOT NULL,
    "fullName" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(20) UNIQUE,
    "avatarUrl" TEXT,
    "role" "Role" NOT NULL DEFAULT 'TENANT',
    "isKycVerified" BOOLEAN NOT NULL DEFAULT FALSE,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 2. Bảng TenantProfile (Hồ sơ ở ghép)
CREATE TABLE "TenantProfile" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL UNIQUE,
    "bio" TEXT,
    "budgetMin" DOUBLE PRECISION,
    "budgetMax" DOUBLE PRECISION,
    "sleepTime" VARCHAR(50),
    "cleanliness" INTEGER CHECK ("cleanliness" >= 1 AND "cleanliness" <= 5),
    "hasPet" BOOLEAN NOT NULL DEFAULT FALSE,
    "isSmoker" BOOLEAN NOT NULL DEFAULT FALSE,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "fk_tenant_user" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE
);

-- 3. Bảng Property (Thông tin nhà/phòng)
CREATE TABLE "Property" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "landlordId" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "type" "PropertyType" NOT NULL,
    "status" "PropertyStatus" NOT NULL DEFAULT 'AVAILABLE',
    "price" DOUBLE PRECISION NOT NULL,
    "area" DOUBLE PRECISION NOT NULL,
    "depositAmount" DOUBLE PRECISION NOT NULL,
    "address" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "amenities" TEXT[], -- Mảng chuỗi trong PostgreSQL
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "fk_property_landlord" FOREIGN KEY ("landlordId") REFERENCES "User"("id") ON DELETE CASCADE
);

-- 4. Bảng PropertyImage (Ảnh nhà/phòng)
CREATE TABLE "PropertyImage" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "propertyId" UUID NOT NULL,
    "url" TEXT NOT NULL,
    "isVirtualStaged" BOOLEAN NOT NULL DEFAULT FALSE,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "fk_image_property" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE
);

-- 5. Bảng Contract (Hợp đồng thuê)
CREATE TABLE "Contract" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "tenantId" UUID NOT NULL,
    "landlordId" UUID NOT NULL,
    "propertyId" UUID NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "monthlyPrice" DOUBLE PRECISION NOT NULL,
    "depositAmount" DOUBLE PRECISION NOT NULL,
    "eSignatureUrl" TEXT,
    "status" "ContractStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "fk_contract_tenant" FOREIGN KEY ("tenantId") REFERENCES "User"("id"),
    CONSTRAINT "fk_contract_landlord" FOREIGN KEY ("landlordId") REFERENCES "User"("id"),
    CONSTRAINT "fk_contract_property" FOREIGN KEY ("propertyId") REFERENCES "Property"("id")
);

-- 6. Bảng MeterReading (Chỉ số điện nước định kỳ)
CREATE TABLE "MeterReading" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "propertyId" UUID NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "electricityUsage" DOUBLE PRECISION NOT NULL,
    "waterUsage" DOUBLE PRECISION NOT NULL,
    "meterImageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "fk_meter_property" FOREIGN KEY ("propertyId") REFERENCES "Property"("id"),
    CONSTRAINT "unique_property_month_year" UNIQUE ("propertyId", "month", "year")
);

-- 7. Bảng Invoice (Hóa đơn)
CREATE TABLE "Invoice" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "contractId" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "rentAmount" DOUBLE PRECISION NOT NULL,
    "electricityAmount" DOUBLE PRECISION NOT NULL,
    "waterAmount" DOUBLE PRECISION NOT NULL,
    "serviceAmount" DOUBLE PRECISION NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "issueDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "status" "InvoiceStatus" NOT NULL DEFAULT 'UNPAID',
    "paymentMethod" VARCHAR(50),
    "paidAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "fk_invoice_contract" FOREIGN KEY ("contractId") REFERENCES "Contract"("id") ON DELETE CASCADE
);

-- 8. Bảng Review (Đánh giá)
CREATE TABLE "Review" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "reviewerId" UUID NOT NULL,
    "revieweeId" UUID NOT NULL,
    "propertyId" UUID,
    "rating" INTEGER NOT NULL CHECK ("rating" >= 1 AND "rating" <= 5),
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "fk_review_reviewer" FOREIGN KEY ("reviewerId") REFERENCES "User"("id"),
    CONSTRAINT "fk_review_reviewee" FOREIGN KEY ("revieweeId") REFERENCES "User"("id"),
    CONSTRAINT "fk_review_property" FOREIGN KEY ("propertyId") REFERENCES "Property"("id")
);

-- 9. Bảng MaintenanceRequest (Yêu cầu sửa chữa)
CREATE TABLE "MaintenanceRequest" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "tenantId" UUID NOT NULL,
    "propertyId" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT,
    "status" "MaintenanceStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "fk_maintenance_tenant" FOREIGN KEY ("tenantId") REFERENCES "User"("id"),
    CONSTRAINT "fk_maintenance_property" FOREIGN KEY ("propertyId") REFERENCES "Property"("id")
);