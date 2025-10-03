-- CreateEnum
CREATE TYPE "public"."Status" AS ENUM ('Unknown', 'Draft', 'InProgress', 'InReview', 'Published');

-- CreateTable
CREATE TABLE "public"."Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN DEFAULT false,
    "status" "public"."Status" NOT NULL DEFAULT 'Unknown',

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
