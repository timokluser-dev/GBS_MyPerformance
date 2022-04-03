-- ---------------------------
-- DATABASE: GBS_MyPerformance
-- DATE:     2022-03-31
-- AUTHOR:   Timo Kluser_INA3a
-- TYPE:     DATA ONLY
-- ORDER:    2.
-- ---------------------------

USE GBS_MyPerformance;
GO

INSERT INTO dbo.Lehrer(Nachname,Vorname,Email) VALUES ('Lehrer','Leonardo','Leonardo.Lehrer@gbssg.ch');
GO

DECLARE @LehrerID INT;
SELECT @LehrerID = ID FROM dbo.Lehrer WHERE Lehrer.Email = 'Leonardo.Lehrer@gbssg.ch';
INSERT INTO dbo.Klasse(Name,Eintritt,Austritt,NeuerfassungStart,NeuerfassungEnde,LehrerID) VALUES ('INA1a','2019-08-01','2023-07-31','2022-01-01','2022-01-31',@LehrerID);
GO

INSERT INTO dbo.Beruf(Name,Abteilung,HatBMS,AktivVon,AktivBis,AnzahlSemester) VALUES ('Informatiker/in EFZ','Technische Berufe',0,'2018-08-01','2024-07-31',8);
GO

INSERT INTO dbo.Betrieb(Name,PLZ,Ort) VALUES ('Web Agency SG',9000,'St.Gallen');
GO

DECLARE @BetriebID INT;
SELECT @BetriebID = ID FROM dbo.Betrieb WHERE Betrieb.Name = 'Web Agency SG';
INSERT INTO dbo.Ausbildner(Nachname,Vorname,Email,BetriebID) VALUES ('Ausbildner','Adam','aausbildner@web-sg.ch',@BetriebID);
GO

INSERT INTO dbo.Fach(Name,Kuerzel) VALUES ('ICT Modul 153: Datenmodelle entwickeln und umsetzen','M153');
GO

DECLARE @BerufID INT;
SELECT @BerufID = ID FROM dbo.Beruf WHERE Beruf.Name = 'Informatiker/in EFZ' AND AktivVon = '2018-08-01';
INSERT INTO dbo.BewertungGruppe(Name,ZeugnisGewichtung,RundungsTyp,BerufID) VALUES ('ITK - BFS',0.24,0.5,@BerufID);
GO

DECLARE @FachID INT;
DECLARE @BewertungGruppeID INT;
SELECT @FachID = ID FROM dbo.Fach WHERE Fach.Kuerzel = 'M153';
SELECT @BewertungGruppeID = BewertungGruppe.ID FROM dbo.BewertungGruppe INNER JOIN dbo.Beruf ON BewertungGruppe.BerufID = Beruf.ID WHERE BewertungGruppe.Name = 'ITK - BFS' AND Beruf.Name = 'Informatiker/in EFZ' AND AktivVon = '2018-08-01';
INSERT INTO dbo.Bewertung(Gewichtung,Semester,RundungsTyp,FachID,BewertungGruppeID) VALUES (0.04,6,0.5,@FachID,@@IDENTITY);
GO

DECLARE @BerufID INT;
DECLARE @BetriebID INT;
DECLARE @KlasseID INT;
DECLARE @AusbildnerID INT;
SELECT @BerufID = ID FROM dbo.Beruf WHERE Beruf.Name = 'Informatiker/in EFZ' AND AktivVon = '2018-08-01';
SELECT @BetriebID = ID FROM dbo.Betrieb WHERE Betrieb.Name = 'Web Agency SG';
SELECT @KlasseID = ID FROM dbo.Klasse WHERE Klasse.Name = 'INA1a' AND Klasse.Eintritt = '2019-08-01';
SELECT @AusbildnerID = ID FROM dbo.Ausbildner WHERE Ausbildner.Email = 'aausbildner@web-sg.ch';
INSERT INTO dbo.Lernender(Nachname,Vorname,Email,BerufID,BetriebID,KlasseID,AusbildnerID) VALUES ('Lernender','Luke','Luke.Lernender@edu.gbssg.ch',@BerufID,@BetriebID,@KlasseID,@AusbildnerID);
GO

DECLARE @BewertungID INT;
DECLARE @LernenderID INT;
SELECT @BewertungID = ID FROM dbo.Bewertung WHERE Bewertung.ID = 1;
SELECT @LernenderID = ID FROM dbo.Lernender WHERE Lernender.Email = 'Luke.Lernender@edu.gbssg.ch';
INSERT INTO dbo.Note(Wert,BewertungID,LernenderID) VALUES (5.5,@BewertungID,@LernenderID);
GO
