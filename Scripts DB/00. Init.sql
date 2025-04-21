IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = 'englishschool')
BEGIN
  --Crear BD
  CREATE DATABASE [englishschool]
  PRINT('BD englishschool creada correctamente')
END
GO

IF NOT EXISTS 
    (SELECT name  
     FROM master.sys.server_principals
     WHERE name = '3ngl15h5ch00lU5er')
BEGIN
    -- Create login
    CREATE LOGIN englishschoolUser WITH PASSWORD = '3ngl15h5ch00lU5er'
    PRINT('Login englishschoolUser creado correctamente')
    
    use [master]
    -- Creates a database user for the login created previously.
    CREATE USER englishschoolUser FOR LOGIN englishschoolUser
    PRINT('Usuario englishschoolUser creado correctamente')
    
    USE [englishschool]
    -- Creates a database user for the login created previously.
    CREATE USER englishschoolUser FOR LOGIN englishschoolUser
    PRINT('Usuario englishschoolUser creado correctamente')

    GRANT CONTROL ON DATABASE::englishschool TO englishschoolUser
    PRINT('Permisos a englishschoolUser creados correctamente')
END
GO