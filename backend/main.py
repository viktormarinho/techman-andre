from fastapi import FastAPI
from models import dbFunctions

app = FastAPI()


@app.get("/login/{senha}")
async def login(senha: str):
    return dbFunctions.login(senha)

@app.get("/usuarios/{userid}")
async def getUser(userid: int):
    return dbFunctions.getUser(userid)

@app.get("/equipamentos")
async def getAllEquipamentos():
    return dbFunctions.getAllEquipamentos()


@app.get("/equipamentos/delete/{id}")
async def deleteOneEquipamento(id: int):
    return dbFunctions.deleteEquipamento(id)

@app.post("/equipamentos/create/")
async def createEquipamento(equipamento: dbFunctions.Equipamento):
    return dbFunctions.addEquipamento(equipamento)

@app.get("/comentarios/{prodid}")
async def getComentarios(prodid: int):
    return dbFunctions.getComentarios(prodid)

@app.post("/addcomentario/")
async def addComentario(comentario: dbFunctions.Comentario):
    return dbFunctions.addComentario(comentario)