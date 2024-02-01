-- CreateTable
CREATE TABLE "token" (
    "id" SERIAL NOT NULL,
    "text" VARCHAR NOT NULL,
    "completedAt" TIMESTAMP,

    CONSTRAINT "token_pkey" PRIMARY KEY ("id")
);
