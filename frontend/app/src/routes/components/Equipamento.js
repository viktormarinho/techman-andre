import styles from './Equipamento.module.css'
import { AiFillDelete, AiOutlineComment } from 'react-icons/ai'
import { Confirm, Notify } from 'notiflix'

export function Equipamento({equip, refetch}){
    console.log(equip)

    const handleDelete = () => {
        let userPerm = localStorage.getItem('perm');
        if (userPerm === 'Admin'){
            Confirm.show(
                'Deletar Produto',
                'Você tem certeza que deseja deletar o produto '+equip.nome+'?',
                'Sim, deletar',
                'Não',
                function okCb(){
                    fetch(`/equipamentos/delete/${equip.id}`)
                        .then(res => res.json().then(data => {
                            if (data.status === "success"){
                                Notify.success('Produto removido com sucesso.');
                                refetch()
                            }else{
                                Notify.failure('Algo de errado aconteceu e não pudemos deletar o produto.');
                            }
                        }));
                },
                function cancelCb(){
                    Notify.info('Operação cancelada.');
                }
            );
        }else{
            Notify.failure('Somente um administrador pode deletar produtos.');
        }
    }

    const handleComment = () => {
        
    }

    return (
        <div className={styles.equipamento}>
            <img src={equip.imagem} alt="imagem"/>
            <div style={containerStyles}>
                <h3>{equip.nome}</h3>
                <p>{equip.desc}</p>
                <footer style={footerStyles}>
                    <AiFillDelete 
                        style={iconStyle}
                        onClick={handleDelete}
                    />
                    <AiOutlineComment 
                        style={iconStyle}
                        onClick={handleComment}
                    />
                </footer>
            </div>
        </div>
    )
}

const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
}

const footerStyles = {
    display: 'flex',
    gap: '16px'
}

const iconStyle = {
    fontSize: '30px',
    cursor: 'pointer'
}