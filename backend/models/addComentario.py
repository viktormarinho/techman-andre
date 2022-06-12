import sqlite3
from .Interfaces import Comentario

def addOneComentario(comentario: Comentario):
    conn = sqlite3.connect('main.sqlite')


    try:
        cursor = conn.cursor()
        cursor.execute(f'SELECT * FROM "Usuarios" WHERE "UsuarioPerm" == "{comentario.perm}"')
        usuario = cursor.fetchone()
        userId = usuario[0]

        comentario_tupla = f'("{comentario.comentario}", "{comentario.equipid}", "{userId}", "{comentario.data}")'
        cursor.execute(f'Insert into Comentarios ("Comentario", "EquipamentoId", "UsuarioId", "ComentarioData") values {comentario_tupla}')

        conn.commit()
        conn.close()
        return {"status": "success"}
    except:
        conn.rollback()

    conn.close()
    return {"status": "failure"}