from pydantic import BaseModel


class Equipamento(BaseModel):
    nome: str
    imagem: str
    desc: str
    ativo: str
    data: str


class Comentario(BaseModel):
    perm: str
    equipid: int
    data: str
    comentario: str