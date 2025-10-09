-- CreateTable
CREATE TABLE "Place" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "foundedYear" INTEGER,
    "imageUrl" TEXT,
    "description" TEXT,
    "location" TEXT,

    CONSTRAINT "Place_pkey" PRIMARY KEY ("id")
);
