import sqlite3
from dataclasses import dataclass

@dataclass
class User:
    nome: str


def getOneUserById(userid: int):
    conn = sqlite3.connect('main.sqlite')

    try:
        cursor = conn.cursor()
        cursor.execute(f'SELECT * FROM "Usuarios" WHERE "UsuarioId" = {userid};')
        usuario = cursor.fetchone()

        conn.commit()
        return {"status": "success", "user": User(usuario[1])}
    except:
        conn.rollback()

    conn.close()
    return {"status": "failure"}