from models.loginCheck import loginCheck
from models.getAllEquipamentos import returnAllEquipamentos

def login(senha: str):
    return loginCheck(senha)

def getAllEquipamentos():
    return returnAllEquipamentos()