from operator import eq
from models.loginCheck import loginCheck
from models.getAllEquipamentos import returnAllEquipamentos
from models.deleteEquipamento import deleteOneEquipamento
from models.addEquipamento import addOneEquipamento
from pydantic import BaseModel


class Equipamento(BaseModel):
    nome: str
    imagem: str
    desc: str
    ativo: str
    data: str


def login(senha: str):
    return loginCheck(senha)

def getAllEquipamentos():
    return returnAllEquipamentos()

def deleteEquipamento(equipamento_id: int):
    return deleteOneEquipamento(equipamento_id)

def addEquipamento(equipamento: Equipamento):
    return addOneEquipamento(equipamento)