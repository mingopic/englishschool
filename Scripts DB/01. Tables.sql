USE [englishschool]
GO

IF OBJECT_ID('dbo.Tb_Person', 'U') IS NULL
BEGIN
  CREATE TABLE [dbo].[Tb_Person] (
    [PersonId] INT IDENTITY(1,1) NOT NULL
    , [Name] VARCHAR(100) NOT NULL
    , [Active] BIT NOT NULL
    , [Visible] BIT NOT NULL
    , [InsertedDate] DATETIME DEFAULT GETDATE()
    , [LastDateUpdated] DATETIME DEFAULT GETDATE()
    
    , CONSTRAINT [PK_Person] PRIMARY KEY CLUSTERED (PersonId ASC)
  )
END
GO

IF OBJECT_ID('dbo.Tb_User', 'U') IS NULL
BEGIN
  CREATE TABLE [dbo].[Tb_User] (
    [UserId] INT IDENTITY(1,1) NOT NULL
    , [UserName] VARCHAR(100) NOT NULL
    , [Password] VARCHAR(MAX) NOT NULL
    , [PersonId] INT NOT NULL
    , [Active] BIT NOT NULL
    , [InsertedDate] DATETIME DEFAULT GETDATE()
    , [LastDateUpdated] DATETIME DEFAULT GETDATE()
    
    , CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED (UserId ASC)
    , CONSTRAINT FK_User_Person FOREIGN KEY (PersonId) REFERENCES dbo.Tb_Person(PersonId)
  )
END
GO

IF OBJECT_ID('dbo.Tb_Role', 'U') IS NULL
BEGIN
  CREATE TABLE [dbo].[Tb_Role] (
    [RoleId] INT IDENTITY(1,1) NOT NULL
    , [Name] VARCHAR(100) NOT NULL
    , [Description] VARCHAR(MAX) NOT NULL
    , [InsertedDate] DATETIME DEFAULT GETDATE()
    
    , CONSTRAINT [PK_Role] PRIMARY KEY CLUSTERED (RoleId ASC)
  )
END
GO

IF OBJECT_ID('dbo.Tb_UserRole', 'U') IS NULL
BEGIN
  CREATE TABLE [dbo].[Tb_UserRole] (
    [UserRoleId] INT IDENTITY(1,1) NOT NULL
    , [UserId] INT NOT NULL
    , [RoleId] INT NOT NULL
    , [InsertedDate] DATETIME DEFAULT GETDATE()
    
    , CONSTRAINT [PK_UserRole] PRIMARY KEY CLUSTERED (UserRoleId ASC)
    , CONSTRAINT FK_UserRole_User FOREIGN KEY (UserId) REFERENCES dbo.Tb_User(UserId)
    , CONSTRAINT FK_UserRole_Role FOREIGN KEY (RoleId) REFERENCES dbo.Tb_Role(RoleId)
  )
END
GO

IF OBJECT_ID('dbo.Tb_Catalog', 'U') IS NULL
BEGIN
  CREATE TABLE [dbo].[Tb_Catalog] (
    [CatId] INT NOT NULL
    , [Name] VARCHAR(100) NOT NULL
    , [Description] VARCHAR(200) NOT NULL
    , [Active] BIT NOT NULL
    , [InsertedDate] DATETIME DEFAULT GETDATE()
    
    , CONSTRAINT [PK_Catalog] PRIMARY KEY CLUSTERED (CatId ASC)
  )
END
GO

IF OBJECT_ID('dbo.Tb_CatalogDet', 'U') IS NULL
BEGIN
  CREATE TABLE [dbo].[Tb_CatalogDet] (
    [CatDetId] INT NOT NULL
    , [Name] VARCHAR(100) NOT NULL
    , [Abbreviation] VARCHAR(20) NOT NULL
    , [Active] BIT NOT NULL
    , [AuxValue] VARCHAR(100) NOT NULL
    , [CatId] INT NOT NULL
    , [InsertedDate] DATETIME DEFAULT GETDATE()
    
    , CONSTRAINT [PK_CatalogDet] PRIMARY KEY CLUSTERED (CatDetId ASC)
    , CONSTRAINT FK_CatalogDet_Catalog FOREIGN KEY (CatId) REFERENCES dbo.Tb_Catalog(CatId)
  )
END
GO

IF OBJECT_ID('dbo.Tb_BlobStorage', 'U') IS NULL
BEGIN
  CREATE TABLE [dbo].[Tb_BlobStorage] (
    [BlobId] INT IDENTITY(1,1) NOT NULL
    , [AuxCode] VARCHAR(MAX) NOT NULL
    , [Value] VARCHAR(200) NOT NULL
    , [FileName] VARCHAR(MAX) NOT NULL
    , [Path] VARCHAR(MAX) NOT NULL
    , [CatDetFileId] INT NOT NULL
    , [CatDetSourceId] INT NOT NULL
    , [InsertedDate] DATETIME DEFAULT GETDATE()
    
    , CONSTRAINT [PK_BlobStorage] PRIMARY KEY CLUSTERED (BlobId ASC)
    , CONSTRAINT FK_BlobStorage_CatDetFile FOREIGN KEY (CatDetFileId) REFERENCES dbo.Tb_CatalogDet(CatDetId)
    , CONSTRAINT FK_BlobStorage_CatDetSource FOREIGN KEY (CatDetSourceId) REFERENCES dbo.Tb_CatalogDet(CatDetId)
  )
END
GO

IF OBJECT_ID('dbo.Tb_BlobStorageDictionary', 'U') IS NULL
BEGIN
  CREATE TABLE [dbo].[Tb_BlobStorageDictionary] (
    [BlobStDicId] INT IDENTITY(1,1) NOT NULL
    , [BlobId] INT NOT NULL
    , [AuxId] INT NOT NULL
    , [MaxPlay] INT NOT NULL
    , [CatDetTableAuxId] INT NOT NULL
    , [Active] BIT NOT NULL
    , [InsertedDate] DATETIME DEFAULT GETDATE()
    
    , CONSTRAINT [PK_BlobStorageDictionary] PRIMARY KEY CLUSTERED (BlobStDicId ASC)
    , CONSTRAINT FK_BlobStorageDictionary_BlobStorage FOREIGN KEY (BlobId) REFERENCES dbo.Tb_BlobStorage(BlobId)
    , CONSTRAINT FK_BlobStorageDictionary_CatDetTableAux FOREIGN KEY (CatDetTableAuxId) REFERENCES dbo.Tb_CatalogDet(CatDetId)
  )
END
GO

IF OBJECT_ID('dbo.Tb_Book', 'U') IS NULL
BEGIN
  CREATE TABLE [dbo].[Tb_Book] (
    [BookId] INT IDENTITY(1,1) NOT NULL
    , [Name] VARCHAR(100) NOT NULL
    , [Description] VARCHAR(200) NOT NULL
    --, [CatDetBookTypeId] INT NOT NULL
    , [Active] BIT NOT NULL
    , [InsertedDate] DATETIME DEFAULT GETDATE()
    
    , CONSTRAINT [PK_Book] PRIMARY KEY CLUSTERED (BookId ASC)
    --, CONSTRAINT FK_Book_CatDetBookType FOREIGN KEY (CatDetBookTypeId) REFERENCES dbo.Tb_CatalogDet(CatDetId)
  )
END
GO

IF OBJECT_ID('dbo.Tb_Unit', 'U') IS NULL
BEGIN
  CREATE TABLE [dbo].[Tb_Unit] (
    [UnitId] INT IDENTITY(1,1) NOT NULL
    , [Name] VARCHAR(100) NOT NULL
    , [Description] VARCHAR(200) NOT NULL
    , [Active] BIT NOT NULL
    , [BookId] INT NOT NULL
    , [InsertedDate] DATETIME DEFAULT GETDATE()
    
    , CONSTRAINT [PK_Unit] PRIMARY KEY CLUSTERED (UnitId ASC)
    , CONSTRAINT FK_Unit_Book FOREIGN KEY (BookId) REFERENCES dbo.Tb_Book(BookId)
  )
END
GO

IF OBJECT_ID('dbo.Tb_Activity', 'U') IS NULL
BEGIN
  CREATE TABLE [dbo].[Tb_Activity] (
    [ActivityId] INT IDENTITY(1,1) NOT NULL
    , [Name] VARCHAR(100) NOT NULL
    , [Description] VARCHAR(200) NOT NULL
    , [Active] BIT NOT NULL
    , [UnitId] INT NOT NULL
    , [CatDetActivityId] INT NOT NULL
    , [InsertedDate] DATETIME DEFAULT GETDATE()
    
    , CONSTRAINT [PK_Activity] PRIMARY KEY CLUSTERED (ActivityId ASC)
    , CONSTRAINT FK_Activity_Unit FOREIGN KEY (ActivityId) REFERENCES dbo.Tb_Unit(UnitId)
    , CONSTRAINT FK_Activity_CatDetActivity FOREIGN KEY (CatDetActivityId) REFERENCES dbo.Tb_CatalogDet(CatDetId)
  )
END
GO

IF OBJECT_ID('dbo.Tb_ActivityDet', 'U') IS NULL
BEGIN
  CREATE TABLE [dbo].[Tb_ActivityDet] (
    [ActivityDetId] INT IDENTITY(1,1) NOT NULL
    , [Description] VARCHAR(MAX) NOT NULL
    , [Score] INT NOT NULL
    , [CatDetContentId] INT NOT NULL
    , [ActivityId] INT NOT NULL
    , [InsertedDate] DATETIME DEFAULT GETDATE()
    
    , CONSTRAINT [PK_ActivityDet] PRIMARY KEY CLUSTERED (ActivityDetId ASC)
    , CONSTRAINT FK_ActivityDet_Activity FOREIGN KEY (ActivityId) REFERENCES dbo.Tb_Activity(ActivityId)
    , CONSTRAINT FK_ActivityDet_CatDetContent FOREIGN KEY (CatDetContentId) REFERENCES dbo.Tb_CatalogDet(CatDetId)
  )
END
GO

IF OBJECT_ID('dbo.Tb_ActivityUser', 'U') IS NULL
BEGIN
  CREATE TABLE [dbo].[Tb_ActivityUser] (
    [ActivityUserId] INT IDENTITY(1,1) NOT NULL
    , [UserId] INT NOT NULL
    , [ActivityId] INT NOT NULL
    , [Completed] BIT NOT NULL
    , [TotalScore] INT NOT NULL
    , [UserReviewId] INT NOT NULL
    , [InsertedDate] DATETIME DEFAULT GETDATE()
    , [ReviewedDate] DATETIME NULL
    
    , CONSTRAINT [PK_ActivityUser] PRIMARY KEY CLUSTERED (ActivityUserId ASC)
    , CONSTRAINT FK_ActivityUser_User FOREIGN KEY (UserId) REFERENCES dbo.Tb_User(UserId)
    , CONSTRAINT FK_ActivityUser_Activity FOREIGN KEY (ActivityId) REFERENCES dbo.Tb_Activity(ActivityId)
    , CONSTRAINT FK_ActivityUser_UserReview FOREIGN KEY (UserReviewId) REFERENCES dbo.Tb_User(UserId)
  )
END
GO


IF OBJECT_ID('dbo.Tb_ActivityDetUser', 'U') IS NULL
BEGIN
  CREATE TABLE [dbo].[Tb_ActivityDetUser] (
    [ActivityDetUserId] INT IDENTITY(1,1) NOT NULL
    , [ActivityUserId] INT NOT NULL
    , [ActivityDetId] INT NOT NULL
    , [Answer] VARCHAR(MAX) NOT NULL
    , [Score] INT NOT NULL
    , [CommentReviewer] VARCHAR(MAX)
    , [InsertedDate] DATETIME DEFAULT GETDATE()
    , [ReviewedDate] DATETIME NULL
    
    , CONSTRAINT [PK_ActivityDetUser] PRIMARY KEY CLUSTERED (ActivityDetUserId ASC)
    , CONSTRAINT FK_ActivityDetUser_ActivityUser FOREIGN KEY (ActivityUserId) REFERENCES dbo.Tb_ActivityUser(ActivityUserId)
    , CONSTRAINT FK_ActivityDetUser_ActivityDet FOREIGN KEY (ActivityDetId) REFERENCES dbo.Tb_ActivityDet(ActivityDetId)
  )
END
GO
