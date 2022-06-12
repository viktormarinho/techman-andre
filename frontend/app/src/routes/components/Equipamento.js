import styles from './Equipamento.module.css'
import { AiFillDelete, AiOutlineComment, AiFillCloseCircle } from 'react-icons/ai'
import { Confirm, Notify } from 'notiflix'
import ReactModal from 'react-modal';
import { useEffect, useState } from 'react';
import Comentario from './Comentario'

export function Equipamento({equip, refetch}){

    const [modalOpen, setModalOpen] = useState(false);
    const [comentarios, setComentarios] = useState([]);
    const [comentarioText, setComentarioText] = useState();

    const handleDelete = () => {
        let userPerm = sessionStorage.getItem('perm');
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

    useEffect(() => {
        fetch(`/comentarios/${equip.id}`)
            .then(res => res.json().then(data => {
                setComentarios(data)
            }))
    }, []);

    const atualizarComentarios = () => {
        fetch(`/comentarios/${equip.id}`)
        .then(res => res.json().then(data => {
            setComentarios(data)
        }))
    }

    const adicionarComentario = () => {
        let userPerm = sessionStorage.getItem('perm');
        const comentario = {
            comentario: comentarioText,
            equipid: equip.id,
            data: new Date().toLocaleDateString(),
            perm: userPerm
        }
        fetch('/addcomentario/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comentario)
        })
        .then(res => res.json().then(response => {
            if (response.status == "success"){
                Notify.success('Comentario adicionado com sucesso.')
            }else{
                Notify.failure('Algo ocorreu de errado e nao pudemos adicionar o seu comentario.')
            }
        }))
        atualizarComentarios();
    }

    const handleComment = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const handleInputChange = (e) => {
        setComentarioText(e.target.value)
    }

    if (comentarios.length == 0){
        return (
                <div className={styles.equipamento}>
                <ReactModal isOpen={modalOpen}>
                    comentarios carregando...
                </ReactModal>
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
    }else{
        return (
            <div className={styles.equipamento}>
                <ReactModal isOpen={modalOpen}>
                    <AiFillCloseCircle  onClick={closeModal} style={returnStyle}/>
                    <div style={{
                        display: 'flex', 
                        flexDirection: 'column',
                        gap: '16px',
                        margin: '16px',
                        overflowY: 'scroll'
                    }}>
                        {comentarios.comentarios.map(com => <Comentario comentario={com} />)}
                    </div>
                    <input 
                    type="text" 
                    placeholder='Comentario...'
                    style={{
                        fontSize: '22px',
                        fontFamily: 'Arial',
                        width: '80%'
                    }}
                    value={comentarioText}
                    onChange={handleInputChange}/>
                    <button 
                    onClick={adicionarComentario}
                    style={{
                        width: '18%',
                        fontSize: '22px',
                        fontFamily: 'Helvetica',
                        marginLeft: '1%',
                        backgroundColor: 'green',
                        color: 'white',
                        borderRadius: '4px',
                        border: '2px solid black',
                        cursor: 'pointer'
                    }}>
                        Adicionar Comentario
                    </button>
                </ReactModal>
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
}

const returnStyle = {
    fontSize: '40px',
    position: 'absolute',
    top: '25px',
    right: '25px',
    cursor: 'pointer'
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