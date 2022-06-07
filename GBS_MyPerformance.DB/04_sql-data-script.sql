--TODO Einschreibeschlüssel für SchoolClasses 

USE GBS_MyPerformance
--INSERT ProfessionAreas
INSERT INTO dbo.ProfessionAreas(Id, Name) VALUES('eb2ecb00-7410-47ab-ab0d-c3b3959893be', 'Informatik')
INSERT INTO dbo.ProfessionAreas(Id, Name) VALUES('43c60442-10bc-410d-a6dd-14b8abb8d645', 'Gestaltung')

--INSERT Professions
INSERT INTO dbo.Professions(Id, Name, DiplomaRoundingType, ProfessionAreaId, ActiveFrom, ActiveTo) VALUES('43c60442-10bc-410d-a6dd-14b8abb8d648', 'Informatiker Fachr. Applikation', 5, 'eb2ecb00-7410-47ab-ab0d-c3b3959893be', '2019-11-11 13:23:44', '2023-11-11 13:23:44')
INSERT INTO dbo.Professions(Id, Name, DiplomaRoundingType, ProfessionAreaId, ActiveFrom, ActiveTo) VALUES('43c60442-10bc-410d-a6dd-14b8abb8d649', 'Informatiker Fachr. Systemtechnik', 5, 'eb2ecb00-7410-47ab-ab0d-c3b3959893be', '2019-11-11 13:23:44', '2023-11-11 13:23:44')

--INSERT Companies
INSERT INTO dbo.Companies(Id, Name) VALUES('43c60442-10bc-410d-d6dd-14b8abb8d648', 'Raiffeisen')
INSERT INTO dbo.Companies(Id, Name) VALUES('718B9356-8A00-417F-A402-51E8AECB206E', 'Migros')
INSERT INTO dbo.Companies(Id, Name) VALUES('43c60442-10bc-410d-c6dd-14b8abb8d648', 'Merkle')

INSERT INTO dbo.EditTimeSpans(Id, [From], [To]) VALUES(NEWID(), '2013-11-11 13:23:44', '2023-11-11 13:23:44')

--INSERT SchoolClasses
INSERT INTO dbo.SchoolClasses(Id, Name, Starting, Ending, TeacherId, ProfessionAreaId) VALUES('43c60442-10bc-410d-a6dd-14b8abb8d644', 'INA3a', '2021-11-11 13:23:44', '2023-11-11 13:23:44', '5ABC4082-47B9-4D1D-BB2B-EC4E45363702', 'eb2ecb00-7410-47ab-ab0d-c3b3959893be')
INSERT INTO dbo.SchoolClasses(Id, Name, Starting, Ending, TeacherId, ProfessionAreaId) VALUES('43c60442-10bc-410d-a6dd-14b8abb8d646', 'INS2a', '2021-11-11 13:23:44', '2023-11-11 13:23:44', '43c60442-10bc-410d-a6dd-14b8abb8d642', 'eb2ecb00-7410-47ab-ab0d-c3b3959893be')

--INSERT Realations between USER and ROLE
INSERT INTO dbo.AspNetUserRoles(UserId, RoleId) VALUES('43c60442-10bc-410d-a6dd-14b8abb8d647', '718B9356-8A00-417F-A402-51E8AECB206B')
INSERT INTO dbo.AspNetUserRoles(UserId, RoleId) VALUES('43c60442-10bc-410d-a6dd-14b8abb8d643', '718B9356-8A00-417F-A402-51E8AECB206B')
INSERT INTO dbo.AspNetUserRoles(UserId, RoleId) VALUES('43c60442-10bc-410d-a6dd-14b8abb8d642', '9633A33F-DDFD-457F-8BF1-50B2C20B15FD')
INSERT INTO dbo.AspNetUserRoles(UserId, RoleId) VALUES('43c60442-10bc-410d-a6dd-14b8abb8d641', '4B3268D5-9671-44CA-A072-38885BFDB246')

--INSERT Students 'Bernhard und Markus'
INSERT INTO dbo.AspNetUsers(Id, UserName, FirstName, LastName, CompanyId, ProfessionId, NormalizedUserName, Email, NormalizedEmail, EmailConfirmed, PhoneNumberConfirmed, TwoFactorEnabled, LockoutEnabled, AccessFailedCount, SecurityStamp, PasswordHash, SchoolClassId, ApprenticeTrainerId) 
VALUES('43c60442-10bc-410d-a6dd-14b8abb8d647', 'bernhard@gbssg.ch', 'Bernhard', 'Weber', '718B9356-8A00-417F-A402-51E8AECB206E', '43c60442-10bc-410d-a6dd-14b8abb8d648','BERNHARD@GBSSG.CH', 'bernhard@gbssg.ch', 'BERNHARD@GBSSG.CH', 1, 0, 0, 1, 0, 'Q4EVFMI7F3GC7X5ICM2AYVPGBO4RKGBW', 'AQAAAAEAACcQAAAAEKCe396gjH6w8omgfSy+H0R4W8yO73WHdLDrB9Lqx88db3VzLcJ+3IbMxUKtsXoNbA==', '43c60442-10bc-410d-a6dd-14b8abb8d646', '43c60442-10bc-410d-a6dd-14b8abb8d641'),
('43c60442-10bc-410d-a6dd-14b8abb8d643', 'markus@gbssg.ch', 'Markus', 'Müggler', '43c60442-10bc-410d-c6dd-14b8abb8d648', '43c60442-10bc-410d-a6dd-14b8abb8d649', 'MARKUS@GBSSG.CH', 'markus@gbssg.ch', 'MARKUS@GBSSG.CH', 1, 0, 0, 1, 0, 'Q4EVFMI7F3GC7X5ICM2AYVPGBO4RKGBW', 'AQAAAAEAACcQAAAAEKCe396gjH6w8omgfSy+H0R4W8yO73WHdLDrB9Lqx88db3VzLcJ+3IbMxUKtsXoNbA==', '43c60442-10bc-410d-a6dd-14b8abb8d644', '43c60442-10bc-410d-a6dd-14b8abb8d641')

--INSERT Teacher 'Daniel'
INSERT INTO dbo.AspNetUsers(Id, UserName, FirstName, LastName, NormalizedUserName, Email, NormalizedEmail, EmailConfirmed, PhoneNumberConfirmed, TwoFactorEnabled, LockoutEnabled, AccessFailedCount, SecurityStamp, PasswordHash, SchoolClassId) 
VALUES('43c60442-10bc-410d-a6dd-14b8abb8d642', 'daniel@gbssg.ch', 'Daniel', 'Kehl', 'DANIEL@GBSSG.CH', 'daniel@gbssg.ch', 'DANIEL@GBSSG.CH', 1, 0, 0, 1, 0, 'Q4EVFMI7F3GC7X5ICM2AYVPGBO4RKGBW', 'AQAAAAEAACcQAAAAEKCe396gjH6w8omgfSy+H0R4W8yO73WHdLDrB9Lqx88db3VzLcJ+3IbMxUKtsXoNbA==', '43c60442-10bc-410d-a6dd-14b8abb8d646')

--INSERT Trainer 'Pascal'
INSERT INTO dbo.AspNetUsers(Id, UserName, FirstName, LastName, NormalizedUserName, Email, NormalizedEmail, EmailConfirmed, PhoneNumberConfirmed, TwoFactorEnabled, LockoutEnabled, AccessFailedCount, SecurityStamp, PasswordHash) 
VALUES('43c60442-10bc-410d-a6dd-14b8abb8d641', 'pascal@gbssg.ch', 'Pascal', 'Knie', 'PASCAL@GBSSG.CH', 'pascal@gbssg.ch', 'PASCAL@GBSSG.CH', 1, 0, 0, 1, 0, 'Q4EVFMI7F3GC7X5ICM2AYVPGBO4RKGBW', 'AQAAAAEAACcQAAAAEKCe396gjH6w8omgfSy+H0R4W8yO73WHdLDrB9Lqx88db3VzLcJ+3IbMxUKtsXoNbA==')

--INSERT Subjects

--INSERT Semesters
