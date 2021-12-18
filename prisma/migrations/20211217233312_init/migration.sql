-- CreateTable
CREATE TABLE "tbnoticia" (
    "codigo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "Conteudo" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "autor" TEXT NOT NULL
);
