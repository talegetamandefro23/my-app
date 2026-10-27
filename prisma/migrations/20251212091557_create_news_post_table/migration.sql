-- CreateTable
CREATE TABLE "NewsPost" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "content" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "author" TEXT NOT NULL DEFAULT 'Admin',
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "excerpt" VARCHAR(300),

    CONSTRAINT "NewsPost_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NewsPost_slug_key" ON "NewsPost"("slug");
