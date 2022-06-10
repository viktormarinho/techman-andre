from ast import Eq
from dbFunctions import Equipamento
import sqlite3

def addOneEquipamento(equipamento: Equipamento):
    conn = sqlite3.connect('main.sqlite')
    try:
        cursor = conn.cursor()

        tupla = f'({equipamento.nome}, {equipamento.imagem}, {equipamento.desc}, {equipamento.ativo}, {equipamento.data})'
        cursor.execute(f'Insert into Equipamentos (EquipamentoNome, EquipamentoImagem, EquipamentoDesc, EquipamentoAtivo, EquipamentoData) values {tupla}')

        conn.commit()
        return {"status": "success"}
    except:
        conn.rollback()
    
    conn.close()
    return {"status": "failure"}
    