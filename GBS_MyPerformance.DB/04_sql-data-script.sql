USE GBS_MyPerformance
--INSERT ProfessionAreas
INSERT INTO dbo.ProfessionAreas(Id, Name) 
VALUES('eb2ecb00-7410-47ab-ab0d-c3b3959893be', 'Informatik'),
('43c60442-10bc-410d-a6dd-14b8abb8d645', 'Gestaltung')

--INSERT Professions
INSERT INTO dbo.Professions(Id, Name, DiplomaRoundingType, ProfessionAreaId, ActiveFrom, ActiveTo) 
VALUES('43c60442-10bc-410d-a6dd-14b8abb8d648', 'Informatiker Fachr. Applikation', 5, 'eb2ecb00-7410-47ab-ab0d-c3b3959893be', '2019-11-11 13:23:44', '2023-11-11 13:23:44'),
('43c60442-10bc-410d-a6dd-14b8abb8d649', 'Informatiker Fachr. Systemtechnik', 5, 'eb2ecb00-7410-47ab-ab0d-c3b3959893be', '2019-11-11 13:23:44', '2023-11-11 13:23:44')

--INSERT Companies
INSERT INTO dbo.Companies(Id, Name) 
VALUES('43c60442-10bc-410d-d6dd-14b8abb8d648', 'Raiffeisen'),
('718B9356-8A00-417F-A402-51E8AECB206E', 'Migros'),
('43c60442-10bc-410d-c6dd-14b8abb8d648', 'Merkle')

INSERT INTO dbo.EditTimeSpans(Id, [From], [To]) VALUES(NEWID(), '2013-11-11 13:23:44', '2023-11-11 13:23:44')

--INSERT SchoolClasses
INSERT INTO dbo.SchoolClasses(Id, Name, Starting, Ending, TeacherId, ProfessionAreaId) 
VALUES('43c60442-10bc-410d-a6dd-14b8abb8d644', 'INA3a', '2021-11-11 13:23:44', '2023-11-11 13:23:44', '5ABC4082-47B9-4D1D-BB2B-EC4E45363702', 'eb2ecb00-7410-47ab-ab0d-c3b3959893be'),
('43c60442-10bc-410d-a6dd-14b8abb8d646', 'INS2a', '2021-11-11 13:23:44', '2023-11-11 13:23:44', '43c60442-10bc-410d-a6dd-14b8abb8d642', 'eb2ecb00-7410-47ab-ab0d-c3b3959893be')

DECLARE @roleIdTrainer VARCHAR(20) = (SELECT AspNetRoles.Id FROM AspNetRoles WHERE Name = 'Trainer');
DECLARE @roleIdStudent VARCHAR(20) = (SELECT AspNetRoles.Id FROM AspNetRoles WHERE Name = 'Student');
DECLARE @roleIdAdmin VARCHAR(20) = (SELECT AspNetRoles.Id FROM AspNetRoles WHERE Name = 'Administrator');
DECLARE @roleIdTeacher VARCHAR(20) = (SELECT AspNetRoles.Id FROM AspNetRoles WHERE Name = 'Teacher');

--INSERT Realations between USER and ROLE
INSERT INTO dbo.AspNetUserRoles(UserId, RoleId) 
VALUES('43c60442-10bc-410d-a6dd-14b8abb8d647', @roleIdStudent),
('43c60442-10bc-410d-a6dd-14b8abb8d643', @roleIdStudent),
('43c60442-10bc-410d-a6dd-14b8abb8d642', @roleIdTeacher),
('43c60442-10bc-410d-a6dd-14b8abb8d641', @roleIdTrainer)

--INSERT Students 'Bernhard und Markus'
INSERT INTO dbo.AspNetUsers(Id, UserName, FirstName, LastName, CompanyId, ProfessionId, NormalizedUserName, Email, NormalizedEmail, EmailConfirmed, PhoneNumberConfirmed, TwoFactorEnabled, LockoutEnabled, AccessFailedCount, SecurityStamp, PasswordHash, SchoolClassId, ApprenticeTrainerId) 
VALUES('43c60442-10bc-410d-a6dd-14b8abb8d647', 'bernhard@gbssg.ch', 'Bernhard', 'Weber', '718B9356-8A00-417F-A402-51E8AECB206E', '43c60442-10bc-410d-a6dd-14b8abb8d648','BERNHARD@GBSSG.CH', 'bernhard@gbssg.ch', 'BERNHARD@GBSSG.CH', 1, 0, 0, 1, 0, 'Q4EVFMI7F3GC7X5ICM2AYVPGBO4RKGBW', 'AQAAAAEAACcQAAAAEKCe396gjH6w8omgfSy+H0R4W8yO73WHdLDrB9Lqx88db3VzLcJ+3IbMxUKtsXoNbA==', '43c60442-10bc-410d-a6dd-14b8abb8d646', '43c60442-10bc-410d-a6dd-14b8abb8d641'),
('43c60442-10bc-410d-a6dd-14b8abb8d643', 'markus@gbssg.ch', 'Markus', 'Müggler', '43c60442-10bc-410d-c6dd-14b8abb8d648', '43c60442-10bc-410d-a6dd-14b8abb8d649', 'MARKUS@GBSSG.CH', 'markus@gbssg.ch', 'MARKUS@GBSSG.CH', 1, 0, 0, 1, 0, 'Q4EVFMI7F3GC7X5ICM2AYVPGBO4RKGBW', 'AQAAAAEAACcQAAAAEKCe396gjH6w8omgfSy+H0R4W8yO73WHdLDrB9Lqx88db3VzLcJ+3IbMxUKtsXoNbA==', '43c60442-10bc-410d-a6dd-14b8abb8d644', '43c60442-10bc-410d-a6dd-14b8abb8d641')

--INSERT Teacher 'Daniel'
INSERT INTO dbo.AspNetUsers(Id, UserName, FirstName, LastName, NormalizedUserName, Email, NormalizedEmail, EmailConfirmed, PhoneNumberConfirmed, TwoFactorEnabled, LockoutEnabled, AccessFailedCount, SecurityStamp, PasswordHash, SchoolClassId) 
VALUES('43c60442-10bc-410d-a6dd-14b8abb8d642', 'daniel@gbssg.ch', 'Daniel', 'Kehl', 'DANIEL@GBSSG.CH', 'daniel@gbssg.ch', 'DANIEL@GBSSG.CH', 1, 0, 0, 1, 0, 'Q4EVFMI7F3GC7X5ICM2AYVPGBO4RKGBW', 'AQAAAAEAACcQAAAAEKCe396gjH6w8omgfSy+H0R4W8yO73WHdLDrB9Lqx88db3VzLcJ+3IbMxUKtsXoNbA==', '43c60442-10bc-410d-a6dd-14b8abb8d646')

--INSERT Trainer 'Pascal'
INSERT INTO dbo.AspNetUsers(Id, UserName, FirstName, LastName, CompanyId, NormalizedUserName, Email, NormalizedEmail, EmailConfirmed, PhoneNumberConfirmed, TwoFactorEnabled, LockoutEnabled, AccessFailedCount, SecurityStamp, PasswordHash) 
VALUES('43c60442-10bc-410d-a6dd-14b8abb8d641', 'pascal@gbssg.ch', 'Pascal', 'Knie', '43c60442-10bc-410d-d6dd-14b8abb8d648', 'PASCAL@GBSSG.CH', 'pascal@gbssg.ch', 'PASCAL@GBSSG.CH', 1, 0, 0, 1, 0, 'Q4EVFMI7F3GC7X5ICM2AYVPGBO4RKGBW', 'AQAAAAEAACcQAAAAEKCe396gjH6w8omgfSy+H0R4W8yO73WHdLDrB9Lqx88db3VzLcJ+3IbMxUKtsXoNbA==')

DECLARE @areaIdInformatik UNIQUEIDENTIFIER = (SELECT ProfessionAreas.Id FROM ProfessionAreas WHERE Name = 'Informatik');
--INSERT Subjects
INSERT INTO dbo.Subjects(Id, Abbreviation, Name, MarkRoundingType, ProfessionAreaId) 
VALUES('FDFCEA22-A44D-476E-89C7-98BE9D0FBB48', 'SUK', 'Sprache und Kommunikation', 1, @areaIdInformatik),
('FDFCEA22-A44D-476E-89C7-98BE9D0FBB47', 'GES', 'Gesellschaft', 1, @areaIdInformatik),
('FDFCEA22-A44D-476E-89C7-98BE9D0FBB46', 'M100', 'Daten charakterisieren', 1, @areaIdInformatik),
('FDFCEA22-A44D-476E-89C7-98BE9D0FBB45', 'M104', 'Datenmodell implementieren', 1, @areaIdInformatik),
('FDFCEA22-A44D-476E-89C7-98BE9D0FBB44', 'E', 'English', 5, @areaIdInformatik),
('FDFCEA22-A44D-476E-89C7-98BE9D0FBB43', 'NW', 'Naturwissenschaften', 5, @areaIdInformatik)

DECLARE @professionIdInformatikerApp UNIQUEIDENTIFIER = (SELECT Professions.Id FROM Professions WHERE Name = 'Informatiker Fachr. Applikation');
--INSERT RatingCategories
INSERT INTO dbo.RatingCategories(Id, Name, DiplomaFactor, CategoryAverageRoundingType, ProfessionId)
VALUES('FDFCEA22-A44D-476E-89C7-98BE9D0FBB42', 'Informatikkompetenzen BFS', 0.2, 5, @professionIdInformatikerApp),
('FDFCEA22-A44D-476E-89C7-98BE9D0FBB41', 'Informatikkompetenzen ÜK', 0.4, 5, @professionIdInformatikerApp)

--INSERT Ratings
INSERT INTO dbo.Ratings(Id, SubjectId, RatingCategoryId, Discriminator) 
VALUES('FDFCEA22-A44D-476E-89C7-98BE9D0FBB39', 'FDFCEA22-A44D-476E-89C7-98BE9D0FBB46', 'FDFCEA22-A44D-476E-89C7-98BE9D0FBB42', 'BFS'),
('FDFCEA22-A44D-476E-89C7-98BE9D0FBB38', 'FDFCEA22-A44D-476E-89C7-98BE9D0FBB45', 'FDFCEA22-A44D-476E-89C7-98BE9D0FBB42', 'BFS')

--INSERT Marks
INSERT INTO dbo.Marks(Id, [Value], StudentId, RatingId)
VALUES('FDFCEA22-A44D-476E-89C7-98BE9D0FBB29', 4.2, '43c60442-10bc-410d-a6dd-14b8abb8d647', 'FDFCEA22-A44D-476E-89C7-98BE9D0FBB39'),
('FDFCEA22-A44D-476E-89C7-98BE9D0FBB28', 5.3, '43c60442-10bc-410d-a6dd-14b8abb8d647', 'FDFCEA22-A44D-476E-89C7-98BE9D0FBB38'),
('FDFCEA22-A44D-476E-89C7-98BE9D0FBB27', 4.8, '43c60442-10bc-410d-a6dd-14b8abb8d643', 'FDFCEA22-A44D-476E-89C7-98BE9D0FBB38'),
('FDFCEA22-A44D-476E-89C7-98BE9D0FBB26', 4.5, '43c60442-10bc-410d-a6dd-14b8abb8d643', 'FDFCEA22-A44D-476E-89C7-98BE9D0FBB39')
