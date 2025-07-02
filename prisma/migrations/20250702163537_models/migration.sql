-- CreateEnum
CREATE TYPE "courseCategory" AS ENUM ('FULL_STACK_DEVELOPMENT', 'PYTHON_PROGRAMMING', 'DATA_SCIENCE', 'UI_UX_DESIGN', 'DIGITAL_MARKETING', 'WEB_DEVELOPMENT', 'MOBILE_APP_DEVELOPMENT');

-- CreateEnum
CREATE TYPE "paymentCategory" AS ENUM ('CASH', 'UPI', 'CARD', 'BANK_TRANSFER', 'CHEQUE');

-- CreateEnum
CREATE TYPE "expenseCategory" AS ENUM ('INFRASTRUCTURE', 'UTILITIES', 'OFFICE_SUPPLIES', 'EQUIPMENT', 'MARKETING', 'MAINTANANCE', 'OTHER');

-- CreateEnum
CREATE TYPE "collectedByCategory" AS ENUM ('MANAGER', 'HR');

-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "address" TEXT,
    "joinDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "course" "courseCategory" NOT NULL,
    "courseFee" DECIMAL(65,30) NOT NULL,
    "initialPayment" DECIMAL(65,30) NOT NULL,
    "remainingBalance" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fee" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "paymentAmount" DECIMAL(65,30) NOT NULL,
    "paymentMode" "paymentCategory" NOT NULL,
    "paymentDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "collectedBy" "collectedByCategory" NOT NULL,
    "notes" TEXT,

    CONSTRAINT "Fee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Expense" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" DECIMAL(65,30) NOT NULL,
    "purpose" TEXT NOT NULL,
    "paidTo" TEXT NOT NULL,
    "paymentMode" "paymentCategory" NOT NULL,
    "category" "expenseCategory" NOT NULL,
    "description" TEXT,

    CONSTRAINT "Expense_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- AddForeignKey
ALTER TABLE "Fee" ADD CONSTRAINT "Fee_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
