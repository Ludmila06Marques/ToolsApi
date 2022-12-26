-- CreateTable
CREATE TABLE "tools" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "description" VARCHAR(256) NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "tools_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tools_title_key" ON "tools"("title");
