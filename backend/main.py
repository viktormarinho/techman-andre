from fastapi import FastAPI
from models import dbFunctions

app = FastAPI()


@app.get("/login/{senha}")
async def login(senha: str):
    return dbFunctions.login(senha)


@app.get("/equipamentos")
async def getAllEquipamentos():
    return dbFunctions.getAllEquipamentos()


@app.get("/equipamentos/delete/{id}")
async def deleteOneEquipamento(id: int):
    return dbFunctions.deleteEquipamento(id)