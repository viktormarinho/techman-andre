from fastapi import FastAPI
from models import dbFunctions

app = FastAPI()


@app.get("/login/{senha}")
async def login(senha: str):
    return dbFunctions.login(senha)