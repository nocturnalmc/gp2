/*
  Warnings:

  - You are about to drop the column `penjagaanKesihatanMulutNasihatPergigianIndividuPromosiPenyataAk` on the `Rawatan` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Rawatan" DROP COLUMN "penjagaanKesihatanMulutNasihatPergigianIndividuPromosiPenyataAk",
ADD COLUMN     "penjagaanKesihatanMulutNasihatPergigianIndividuPromosiPenyataAkhir2" BOOLEAN NOT NULL DEFAULT false;
