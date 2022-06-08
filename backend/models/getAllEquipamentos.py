from dataclasses import dataclass
import sqlite3

@dataclass
class Equipamento:
    id: int
    nome: str
    imagem: str
    desc: str
    ativo: str
    data: str


def returnAllEquipamentos():
    conn = sqlite3.connect('main.sqlite')
    cursor = conn.cursor()

    cursor.execute("SELECT * from Equipamentos;")

    equipamentosDb = cursor.fetchall()
    equipamentos = [Equipamento(equipamento[0], equipamento[1], equipamento[2], equipamento[3], equipamento[4], equipamento[5]) for equipamento in equipamentosDb]

    return equipamentos
