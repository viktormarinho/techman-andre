import { useEffect, useState } from "react"


export default function Comentario({comentario}){

    const [user, setUser] = useState();

    useEffect(() => {
        fetch(`/usuarios/${comentario.UsuarioId}`)
            .then(res => res.json().then(usuario => setUser(usuario.user)))
    }, [])

    if (!user){
        return (
            <div style={comentarioStyle}>
                <h3>carregando usuario... - {comentario.ComentarioData}</h3>
                <p>{comentario.Comentario}</p>
            </div>
        )
    }else{
        return (
            <div style={comentarioStyle}>
                <h3>{user.nome} - {comentario.ComentarioData}</h3>
                <p>{comentario.Comentario}</p>
            </div>
        )
    }

}

const comentarioStyle = {
    borderRadius: '8px',
    backgroundColor: 'whitesmoke',
    padding: '8px'
}