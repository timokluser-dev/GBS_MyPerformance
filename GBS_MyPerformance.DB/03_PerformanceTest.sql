-- ---------------------------
-- DATABASE: GBS_MyPerformance
-- DATE:     2022-03-31
-- AUTHOR:   Timo Kluser_INA3a
-- TYPE:     PERFORMANCE TEST
-- ORDER:    3.
-- ---------------------------

USE GBS_MyPerformance;
GO

-- timer start
SET STATISTICS TIME ON;

SELECT * FROM dbo.Note;
GO

SELECT * FROM dbo.Lernender;
GO

SELECT * FROM dbo.Klasse;
GO

SELECT * FROM dbo.Lehrer;
GO

SELECT * FROM dbo.Ausbildner;
GO

SELECT * FROM dbo.Betrieb;
GO

SELECT * FROM dbo.Bewertung;
GO

SELECT * FROM dbo.BewertungGruppe;
GO

SELECT * FROM dbo.Fach;
GO

SELECT * FROM dbo.Beruf;
GO

SELECT * FROM dbo.Lernender
	INNER JOIN dbo.Klasse ON Lernender.KlasseID = Klasse.ID
	INNER JOIN dbo.Lehrer ON Klasse.LehrerID = Lehrer.ID
    INNER JOIN dbo.Ausbildner ON Lernender.AusbildnerID = Ausbildner.ID
	INNER JOIN dbo.Betrieb ON Lernender.BetriebID = Betrieb.ID;
GO

SELECT * FROM dbo.Note 
	INNER JOIN dbo.Bewertung ON Note.ID = Note.BewertungID 
	INNER JOIN dbo.BewertungGruppe ON Bewertung.BewertungGruppeID = BewertungGruppe.ID
	INNER JOIN dbo.Fach ON Bewertung.FachID = Fach.ID
	INNER JOIN dbo.Beruf ON BewertungGruppe.BerufID = Beruf.ID;
GO

SELECT * FROM dbo.Note 
	INNER JOIN dbo.Lernender ON Note.LernenderID = Lernender.ID
	INNER JOIN dbo.Klasse ON Lernender.KlasseID = Klasse.ID
	INNER JOIN dbo.Lehrer ON Klasse.LehrerID = Lehrer.ID
	INNER JOIN dbo.Ausbildner ON Lernender.AusbildnerID = Ausbildner.ID
	INNER JOIN dbo.Betrieb ON Lernender.BetriebID = Betrieb.ID
	INNER JOIN dbo.Bewertung ON Note.ID = Note.BewertungID 
	INNER JOIN dbo.BewertungGruppe ON Bewertung.BewertungGruppeID = BewertungGruppe.ID
	INNER JOIN dbo.Fach ON Bewertung.FachID = Fach.ID
	INNER JOIN dbo.Beruf ON BewertungGruppe.BerufID = Beruf.ID;
GO

-- timer stop
SET STATISTICS TIME OFF;
