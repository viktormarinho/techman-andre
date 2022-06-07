from models.loginCheck import loginCheck


def login(senha: str):
    return loginCheck(senha)