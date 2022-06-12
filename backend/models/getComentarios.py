import sqlite3
from dataclasses import dataclass


@dataclass
class Comentario:
    ComentarioId: int
    Comentario: str
    EquipamentoId: int
    UsuarioId: int
    ComentarioData: str


def getComentariosByProdutoId(prodid: int):
    try:
        conn = sqlite3.connect('main.sqlite')

        cursor = conn.cursor()

        cursor.execute(f'SELECT * FROM "Comentarios" WHERE "EquipamentoId" = {prodid}')
        comentarios = cursor.fetchall()
        comentarios = [Comentario(com[0], com[1], com[2], com[3], com[4]) for com in comentarios]

        conn.commit()
        conn.close()
        return {"status": "success", "comentarios": comentarios}
    except:
        conn.rollback()
        return {"status": "failure"}