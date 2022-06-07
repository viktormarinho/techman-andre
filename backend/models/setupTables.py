import sqlite3

con = sqlite3.connect('main.sqlite')

setup = ["CREATE TABLE Usuarios ( UsuarioId INTEGER PRIMARY KEY AUTOINCREMENT, UsuarioPerm TEXT (25) NOT NULL, UsuarioSenha TEXT (6) NOT NULL);",
        "Insert into Usuarios (UsuarioPerm, UsuarioSenha) values ('Comum', '111111')",
        "Insert into Usuarios (UsuarioPerm, UsuarioSenha) values ('Admin', '212121')",
        "Insert into Usuarios (UsuarioPerm, UsuarioSenha) values ('Tecnico', '414141')",
        "Insert into Usuarios (UsuarioPerm, UsuarioSenha) values ('Gerente', '313131')",
        "CREATE TABLE Equipamentos ("]

try:
    cursor = con.cursor()
    
    for step in setup:
        cursor.execute(step)
    
    con.commit()
    print("Banco de dados Criado com sucesso")
except:
    print("algo deu errado")
    con.rollback()

con.close()