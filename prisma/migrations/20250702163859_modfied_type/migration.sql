/*
  Warnings:

  - You are about to alter the column `amount` on the `Expense` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `paymentAmount` on the `Fee` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `courseFee` on the `Student` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `initialPayment` on the `Student` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `remainingBalance` on the `Student` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Expense" ALTER COLUMN "amount" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Fee" ALTER COLUMN "paymentAmount" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Student" ALTER COLUMN "courseFee" SET DATA TYPE INTEGER,
ALTER COLUMN "initialPayment" SET DATA TYPE INTEGER,
ALTER COLUMN "remainingBalance" SET DATA TYPE INTEGER;
