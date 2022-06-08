import styles from './Equipamento.module.css'

export function Equipamento({equip}){
    return (
        <div className={styles.equipamento}>
            <img src={equip.imagem} alt="imagem"/>
            <div>
                <h3>{equip.nome}</h3>
                <p>{equip.desc}</p>
            </div>
        </div>
    )
}