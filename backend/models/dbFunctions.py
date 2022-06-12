from math import prod
from operator import eq
from models.loginCheck import loginCheck
from models.getAllEquipamentos import returnAllEquipamentos
from models.deleteEquipamento import deleteOneEquipamento
from models.addEquipamento import addOneEquipamento
from models.getUser import getOneUserById
from models.getComentarios import getComentariosByProdutoId
from models.addComentario import addOneComentario
from .Interfaces import Equipamento, Comentario


def login(senha: str):
    return loginCheck(senha)

def getAllEquipamentos():
    return returnAllEquipamentos()

def deleteEquipamento(equipamento_id: int):
    return deleteOneEquipamento(equipamento_id)

def addEquipamento(equipamento: Equipamento):
    return addOneEquipamento(equipamento)

def getUser(userid: int):
    return getOneUserById(userid)

def getComentarios(prodid: int):
    return getComentariosByProdutoId(prodid)

def addComentario(comentario: Comentario):
    return addOneComentario(comentario)