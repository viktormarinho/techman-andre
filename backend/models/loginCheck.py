from dataclasses import dataclass
import sqlite3


@dataclass
class Usuario:
    perm: str
    senha: str

@dataclass
class DbCheck:
    status: bool
    perm: str

def loginCheck(senha: str):
    conn = sqlite3.connect('main.sqlite')
    cursor = conn.cursor()

    cursor.execute("SELECT * from Usuarios;")

    usersDb = cursor.fetchall()
    usuarios = [Usuario(user[1], user[2]) for user in usersDb]

    auth = False
    perm = ""
    for user in usuarios:
        if user.senha == senha:
            auth = True
            perm = user.perm
    
    return DbCheck(auth, perm)