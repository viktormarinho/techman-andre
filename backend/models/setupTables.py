import sqlite3

con = sqlite3.connect('main.sqlite')

setup = ["CREATE TABLE Usuarios ( UsuarioId INTEGER PRIMARY KEY AUTOINCREMENT, UsuarioPerm TEXT (25) NOT NULL, UsuarioSenha TEXT (6) NOT NULL);",
        "Insert into Usuarios (UsuarioPerm, UsuarioSenha) values ('Comum', '111111')",
        "Insert into Usuarios (UsuarioPerm, UsuarioSenha) values ('Admin', '212121')",
        "Insert into Usuarios (UsuarioPerm, UsuarioSenha) values ('Tecnico', '414141')",
        "Insert into Usuarios (UsuarioPerm, UsuarioSenha) values ('Gerente', '313131')",
        "CREATE TABLE Equipamentos ( EquipamentoId INTEGER PRIMARY KEY AUTOINCREMENT, EquipamentoNome TEXT (200) NOT NULL, EquipamentoImagem TEXT (100) NOT NULL, "\
            "EquipamentoDesc TEXT (600) NOT NULL, EquipamentoAtivo TEXT (1) NOT NULL, EquipamentoData TEXT (50) NOT NULL);",
        "CREATE TABLE Comentarios ( ComentarioId INTEGER PRIMARY KEY AUTOINCREMENT, Comentario TEXT (300) NOT NULL, EquipamentoId INTEGER NOT NULL, UsuarioId INTEGER NOT NULL, ComentarioData TEXT (50) NOT NULL)",
        "Insert into Comentarios (Comentario, EquipamentoId, UsuarioId, ComentarioData) values ('Problema de aquecimento no processador após 1 ano de uso.', 2, 2, '2020-05-04')"]
        

equipamentos = [
    "('Torno Mecânico 500mm Modelo BV20L 220V - TTM520 - Tander', 'https://i.imgur.com/iP6Ke3l.png', 'O Torno Mecânico Tander TTM520 é uma ferramenta utilizada por vários profissionais na confecção e acabamento de inúmeras peças metálicas, tais como: eixos, polias, pinos, roscas, peças cilíndricas internas e externas, cones, esferas, entre outros. "\
    "Este torno vem com motor monofásico de 220V e 550W de potência, o que lhe confere maior torque e vida útil, menor consumo de energia e baixo índice de manutenção. "\
    "Possui interruptor magnético com a função de travagem de emergência, rotação frente/reversa e a função de proteção ao torno e aos componentes elétricos.', '1', '2019-10-01')",
    "('Processador Intel Core i9-7920X Skylake, Cache 16.5MB, 2.9GHz (4.3GHz Max Turbo), LGA 2066 - BX80673I97920X', 'https://i.imgur.com/xezBwzz.png', 'Com esse processador inovador e incrível você desfruta ao máximo o verdadeiro potencial do seu computador e desfruta da mais pura velocidade. Maximize o seu desempenho seja trabalhando, jogando, navegando ou assistindo o seu filme preferido, com esse processador você pode tudo!', '1', '2019-10-01')",
    "('Monitor, Dell, U2518D, UltraSharp, Preto e Suporte em Alumínio, 25', 'https://i.imgur.com/UTxWNSs.png', 'Dê vida ao seu trabalho com uma tela de 25 polegadas quase sem bordas que conta com detalhes em cores vívidas e consistentes graças a tecnologia hdr, resolução qhd e ângulo de visão ultra-amplo. Aumente sua performance com os recursos dell display manager, dell easy arrange e trabalhe confortavelmente graça a um suporte totalmente ajustável e recurso confortview.', '0', '2018-10-01')"
]
for equipamento in equipamentos:
    setup.append(f"Insert into Equipamentos (EquipamentoNome, EquipamentoImagem, EquipamentoDesc, EquipamentoAtivo, EquipamentoData) values {equipamento}")


try:
    cursor = con.cursor()
    
    for step in setup:
        cursor.execute(step)
    
    con.commit()
    print("Banco de dados Criado com sucesso")
except:
    print("algo deu errado")
    con.rollback()

con.close()