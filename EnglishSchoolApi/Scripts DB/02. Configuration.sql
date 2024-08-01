/* Crear personas y usuarios en BD */
IF NOT EXISTS (SELECT 1 FROM dbo.Tb_Person WHERE PersonId IN (1,2,3))
BEGIN
  INSERT INTO dbo.Tb_Person (Name, Active, Visible) VALUES ('Administrador',1,1)
  INSERT INTO dbo.Tb_User (UserName, Password, PersonId, Active) VALUES ('admin','$2a$10$SLR2sPM9M7086EH81ApbQemKJxCeRb3iOrPb0XN8Pvon1AX9MUDF.',1,1)
  --P: Admin2024
  
  INSERT INTO dbo.Tb_Person (Name, Active, Visible) VALUES ('Teacher Leaders',1,1)
  INSERT INTO dbo.Tb_User (UserName, Password, PersonId, Active) VALUES ('teacher','$2a$10$v68USLXuB9SOq3j4lEh.JevcyNVfsd0Hf3je6W9fqDwqY62.8sY2.',2,1)
  --P: Teacher2024
  
  INSERT INTO dbo.Tb_Person (Name, Active, Visible) VALUES ('Student Leaders',1,1)
  INSERT INTO dbo.Tb_User (UserName, Password, PersonId, Active) VALUES ('student','$2a$10$ByskYDsJ3SKYpiWGFnkOOumZm6zF9816E5elggmHln9jPbq7pboVC',3,1)
  --P: Student2024
END
GO

/* Crear roles en BD */
IF NOT EXISTS (SELECT 1 FROM dbo.Tb_Role WHERE Name = 'Admin')
BEGIN
  INSERT INTO dbo.Tb_Role (Name, Description)
  VALUES ('Admin', 'Rol con privilegio de acceso a módulo de catálogos, plantillas, usuarios y estudiantes'),
         ('Teacher', 'Rol con privilegio de acceso a módulo de estudiantes'),
         ('Student', 'Rol con privilegio de acceso a módulo de myLearning')
END
GO

/* Crear rolesXusuario en BD */
IF NOT EXISTS (SELECT 1 FROM dbo.Tb_UserRole)
BEGIN
  INSERT INTO dbo.Tb_UserRole (UserId, RoleId)
  VALUES (1, 1), --Admin
         (2, 2), --Teacher
         (3, 3) --Student
END
GO

/* Crear catálogos */
IF NOT EXISTS (SELECT 1 FROM dbo.Tb_Catalog WHERE CatId = 1)
BEGIN
  INSERT INTO dbo.Tb_Catalog (CatId, Name, Description, Active) 
  VALUES (1, 'Tipo de Archivos', 'tipos de archivos almacenados en el servidor (audio e imágenes)', 1),
         (2, 'Origen de archivos', 'Origen de almacenamiento de archivos de la aplicación', 1),
         (3, 'Tipo de actividad', 'Tipo de actividad (studentbook, workbook, extra practice, quiz)', 1),
         (4, 'Tipo Contenido', 'Contenido de actividad (descripción, pregunta)', 1),
         (5, 'Tabla diccionario de archivos', 'Tabla origen de dónde se toma la key para mostrar archivos', 1)
END
GO

/* Crear detalle de catálogo de tipo de archivos */
IF NOT EXISTS (SELECT 1 FROM dbo.Tb_CatalogDet WHERE CatId = 1)
BEGIN
  INSERT INTO dbo.Tb_CatalogDet (CatDetId, Name, Abbreviation, Active, AuxValue, CatId) 
  VALUES (1, 'Image', '', 1, 'png|jpeg|jpg|tiff', 1),
         (2, 'Audio', '', 1, 'mp3|aac|wav|wma', 1)
END
GO

/* Crear detalle de catálogo de tipo de origen de archivos */
IF NOT EXISTS (SELECT 1 FROM dbo.Tb_CatalogDet WHERE CatId = 2)
BEGIN
  INSERT INTO dbo.Tb_CatalogDet (CatDetId, Name, Abbreviation, Active, AuxValue, CatId) 
  VALUES (3, 'servidor', 'SRV', 1, '\\193.203.167.137', 2),
         (4, 'Base de datos', 'BD', 1, 'englishschool', 2)
END
GO


/* Crear detalle de catálogo de tipo de actividad */
IF NOT EXISTS (SELECT 1 FROM dbo.Tb_CatalogDet WHERE CatId = 3)
BEGIN
  INSERT INTO dbo.Tb_CatalogDet (CatDetId, Name, Abbreviation, Active, AuxValue, CatId) 
  VALUES (7, 'StudentBook', 'SB', 1, '', 3),
         (8, 'WorkBook', 'WB', 1, '', 3),
         (9, 'Quiz', 'QZ', 1, '', 3)
END
GO

/* Crear detalle de catálogo de tipo de contenido */
IF NOT EXISTS (SELECT 1 FROM dbo.Tb_CatalogDet WHERE CatId = 4)
BEGIN
  INSERT INTO dbo.Tb_CatalogDet (CatDetId, Name, Abbreviation, Active, AuxValue, CatId) 
  VALUES (10, 'Description', '', 1, '', 4),
         (11, 'Instruction', '', 1, '', 4),
         (12, 'Task', '', 1, '', 4)
END
GO

/* Crear detalle de catálogo de tipo de contenido */
IF NOT EXISTS (SELECT 1 FROM dbo.Tb_CatalogDet WHERE CatId = 5)
BEGIN
  INSERT INTO dbo.Tb_CatalogDet (CatDetId, Name, Abbreviation, Active, AuxValue, CatId) 
  VALUES (13, 'Tb_Activity', '', 1, '', 5),
         (14, 'Tb_ActivityDet', '', 1, '', 5)
END
GO