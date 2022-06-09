import sqlite3

def deleteOneEquipamento(equip_id: int) -> dict:
    conn = sqlite3.connect('main.sqlite')
    try:
        cursor = conn.cursor()

        cursor.execute(f'Delete from Equipamentos where EquipamentoId={equip_id};')

        conn.commit()
        conn.close()
        return {"status": "success"}
    except:
        conn.rollback()
        conn.close()
        return {"status": "fail"}

    