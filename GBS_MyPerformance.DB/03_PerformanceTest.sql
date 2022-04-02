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

SELECT * FROM dbo.Bewertung RIGHT JOIN dbo.Note ON Bewertung.ID = Note.BewertungID INNER JOIN dbo.Lernender ON Note.LernenderID = Lernender.ID;
GO

-- timer stop
SET STATISTICS TIME OFF;
