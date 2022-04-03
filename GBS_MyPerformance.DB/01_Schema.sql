-- ---------------------------
-- DATABASE: GBS_MyPerformance
-- DATE:     2022-03-31
-- AUTHOR:   Timo Kluser_INA3a
-- TYPE:     SCHEMA ONLY
-- ORDER:    1.
-- ---------------------------

USE master;
GO

-- --- INIT DB ---

-- fix: database locked when deleting
IF EXISTS(SELECT * FROM sys.databases WHERE name = 'GBS_MyPerformance')
    ALTER DATABASE GBS_MyPerformance SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
GO

DROP DATABASE IF EXISTS GBS_MyPerformance;
GO

-- COLLATION: German (Switzerland) -> Latin1_General_CI_AS
CREATE DATABASE GBS_MyPerformance COLLATE Latin1_General_CI_AS;
GO

USE GBS_MyPerformance;
GO

-- fix: unlock database
ALTER DATABASE GBS_MyPerformance SET MULTI_USER;
GO

-- --- TABLES ---

-- Table: Lehrer
CREATE TABLE dbo.Lehrer
(
    ID INT NOT NULL IDENTITY(1,1),
    Nachname NVARCHAR(100) NOT NULL,
    Vorname NVARCHAR(100) NOT NULL,
    Email NVARCHAR(255) NOT NULL,

    CONSTRAINT PK_Lehrer PRIMARY KEY (ID),

    CONSTRAINT UQ_Lehrer UNIQUE (Email),
);
GO

-- Table: Klasse
CREATE TABLE dbo.Klasse
(
    ID INT NOT NULL IDENTITY(1,1),
    Name NVARCHAR(5) NOT NULL,
    Eintritt DATE NOT NULL,
    Austritt DATE NOT NULL,
    NeuerfassungStart DATE NULL,
    NeuerfassungEnde DATE NULL,
    LehrerID INT NOT NULL,

    CONSTRAINT PK_Klasse PRIMARY KEY (ID),
    CONSTRAINT FK_LehrerKlasse FOREIGN KEY (LehrerID) REFERENCES dbo.Lehrer(ID),
    CONSTRAINT UQ_Klasse UNIQUE (Name, Eintritt),

    CONSTRAINT CK_EintrittAustrittKlasse CHECK(Eintritt < Austritt),
    CONSTRAINT CK_NeuerfassungKlasse CHECK(NeuerfassungStart < NeuerfassungEnde)
);
GO

-- Table: Beruf
CREATE TABLE dbo.Beruf
(
    ID INT NOT NULL IDENTITY(1,1),
    Name NVARCHAR(100) NOT NULL,
    Abteilung NVARCHAR(100) NOT NULL,
    AktivVon DATE NOT NULL,
    AktivBis DATE NULL,
    AnzahlSemester TINYINT NOT NULL,

    CONSTRAINT PK_Beruf PRIMARY KEY (ID),
    CONSTRAINT UQ_Beruf UNIQUE (Name, AktivVon),

    CONSTRAINT CK_AktivBeruf CHECK(AktivVon < AktivBis),
);
GO

-- Table: Betrieb
CREATE TABLE dbo.Betrieb
(
    ID INT NOT NULL IDENTITY(1,1),
    Name NVARCHAR(100) NOT NULL,
    PLZ SMALLINT NOT NULL,
    Ort NVARCHAR(100),

    CONSTRAINT PK_Betrieb PRIMARY KEY (ID),
    CONSTRAINT UQ_Betrieb UNIQUE (Name),
);
GO

-- Table: Ausbildner
CREATE TABLE dbo.Ausbildner
(
    ID INT NOT NULL IDENTITY(1,1),
    Nachname NVARCHAR(100) NOT NULL,
    Vorname NVARCHAR(100) NOT NULL,
    Email NVARCHAR(255) NOT NULL,
    BetriebID INT NOT NULL,

    CONSTRAINT PK_Ausbildner PRIMARY KEY (ID),
    CONSTRAINT FK_BetriebAusbildner FOREIGN KEY (BetriebID) REFERENCES dbo.Betrieb(ID),
    CONSTRAINT UQ_Ausbildner UNIQUE (Email),
);
GO

-- Table: Fach
CREATE TABLE dbo.Fach
(
    ID INT NOT NULL IDENTITY(1,1),
    Name NVARCHAR(100) NOT NULL,
    Kuerzel NVARCHAR(10) NOT NULL,

    CONSTRAINT PK_Fach PRIMARY KEY (ID),
    CONSTRAINT UQ_Fach UNIQUE (Kuerzel),
);
GO

-- Table: BewertungGruppe
CREATE TABLE dbo.BewertungGruppe
(
    ID INT NOT NULL IDENTITY(1,1),
    Name NVARCHAR(100) NOT NULL,
    ZeugnisGewichtung DECIMAL(6,5) NOT NULL,
    RundungsTyp DECIMAL(3,2) NOT NULL,
    BerufID INT NOT NULL,

    CONSTRAINT PK_BewertungGruppe PRIMARY KEY (ID),
    CONSTRAINT FK_BerufBewertungGruppe FOREIGN KEY (BerufID) REFERENCES dbo.Beruf(ID),
    CONSTRAINT UQ_BewertungGruppe UNIQUE (Name, BerufID),

    CONSTRAINT CK_RundungsTypBewertungGruppe CHECK (RundungsTyp IN(1.0,0.5,0.25,0.1))
);
GO

-- Table: Bewertung
CREATE TABLE dbo.Bewertung
(
    ID INT NOT NULL IDENTITY(1,1),
    Gewichtung DECIMAL(6,5) NOT NULL,
    RundungsTyp DECIMAL(3,2) NOT NULL,
    Semester TINYINT NULL,
    FachID INT NOT NULL,
    BewertungGruppeID INT NOT NULL,

    CONSTRAINT PK_Bewertung PRIMARY KEY (ID),
    CONSTRAINT FK_FachBewertung FOREIGN KEY (FachID) REFERENCES dbo.Fach(ID),
    CONSTRAINT FK_BewertungGruppe FOREIGN KEY (BewertungGruppeID) REFERENCES dbo.BewertungGruppe(ID),

    CONSTRAINT CK_RundungsTypBewertung CHECK (RundungsTyp IN(1.0,0.5,0.25,0.1))
);
GO

-- Table: Lernender
CREATE TABLE dbo.Lernender
(
    ID INT NOT NULL IDENTITY(1,1),
    Nachname NVARCHAR(100) NOT NULL,
    Vorname NVARCHAR(100) NOT NULL,
    Email NVARCHAR(255) NOT NULL,
    BerufID INT NOT NULL,
    BetriebID INT NOT NULL,
    KlasseID INT NOT NULL,
    AusbildnerID INT NOT NULL,

    CONSTRAINT PK_Lernender PRIMARY KEY (ID),
    CONSTRAINT FK_BerufLernender FOREIGN KEY (BerufID) REFERENCES dbo.Beruf(ID),
    CONSTRAINT FK_BetriebLernender FOREIGN KEY (BetriebID) REFERENCES dbo.Betrieb(ID),
    CONSTRAINT FK_KlasseLernender FOREIGN KEY (KlasseID) REFERENCES dbo.Klasse(ID),
    CONSTRAINT FK_AusbildnerLernender FOREIGN KEY (AusbildnerID) REFERENCES dbo.Ausbildner(ID),
    CONSTRAINT UQ_Lernender UNIQUE (Email),
);
GO

-- Table: Note
CREATE TABLE dbo.Note
(
    ID INT NOT NULL IDENTITY(1,1),
    Wert DECIMAL(4,3) NOT NULL,
    BewertungID INT NOT NULL,
    LernenderID INT NOT NULL,

    CONSTRAINT PK_Note PRIMARY KEY (ID),
    CONSTRAINT FK_LernenderNote FOREIGN KEY (LernenderID) REFERENCES dbo.Lernender(ID),
    CONSTRAINT FK_BewertungNote FOREIGN KEY (BewertungID) REFERENCES dbo.Bewertung(ID),
    CONSTRAINT UQ_Note UNIQUE (LernenderID, BewertungID),

    CONSTRAINT CK_WertNote CHECK(Wert >= 1.0 AND Wert <= 6.0),
);
GO

-- --- USERS ---

-- Applikation User: DQL, DML
IF NOT EXISTS(SELECT * FROM sys.server_principals WHERE name = 'ApplicationUser')
    CREATE LOGIN ApplicationUser WITH PASSWORD = 'GBS_2022', -- CHANGE ME
        DEFAULT_DATABASE = GBS_MyPerformance;
GO
CREATE USER Application FOR LOGIN ApplicationUser;
GO

GRANT SELECT, INSERT, UPDATE, DELETE TO Application;
GO

-- Technical User: ALL
IF NOT EXISTS(SELECT * FROM sys.server_principals WHERE name = 'TechnicalUser')
    CREATE LOGIN TechnicalUser WITH PASSWORD = 'GBS_2022', -- CHANGE ME
        DEFAULT_DATABASE = GBS_MyPerformance;
GO
CREATE USER Technical FOR LOGIN TechnicalUser;
GO

GRANT SELECT, INSERT, UPDATE, DELETE, REFERENCES, BACKUP DATABASE, BACKUP LOG, CREATE DEFAULT, CREATE FUNCTION, CREATE PROCEDURE, CREATE RULE, CREATE TABLE, CREATE VIEW, EXECUTE, REFERENCES TO Technical;
GO
