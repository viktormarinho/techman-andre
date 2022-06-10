from pydantic import BaseModel


class Equipamento(BaseModel):
    nome: str
    imagem: str
    desc: str
    ativo: str
    data: str