from models.loginCheck import loginCheck
from models.getAllEquipamentos import returnAllEquipamentos
from models.deleteEquipamento import deleteOneEquipamento

def login(senha: str):
    return loginCheck(senha)

def getAllEquipamentos():
    return returnAllEquipamentos()

def deleteEquipamento(equipamento_id: int):
    return deleteOneEquipamento(equipamento_id)