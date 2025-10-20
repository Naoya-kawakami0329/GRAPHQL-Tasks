-- CreateEnum
CREATE TYPE "public"."Status" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED');

-- CreateTable
CREATE TABLE "public"."Task" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "dueDate" VARCHAR(10) NOT NULL,
    "status" "public"."Status" NOT NULL DEFAULT 'NOT_STARTED',
    "description" TEXT,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

