-- AlterTable
ALTER TABLE "token" ALTER COLUMN "current_price" DROP NOT NULL,
ALTER COLUMN "market_cap" DROP NOT NULL,
ALTER COLUMN "market_cap_change_percentage_24h" DROP NOT NULL,
ALTER COLUMN "total_volume" DROP NOT NULL;
