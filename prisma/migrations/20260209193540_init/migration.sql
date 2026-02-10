-- CreateTable
CREATE TABLE "ContactSubmission" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "source" TEXT,
    "clientIp" TEXT,
    "userAgent" TEXT,
    "status" TEXT NOT NULL DEFAULT 'new',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContactSubmission_pkey" PRIMARY KEY ("id")
);
