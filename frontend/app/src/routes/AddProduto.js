import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function AddProduto(){
    const navigate = useNavigate()
    const [form, setForm] = useState({
        nome: "",
        imagem: "",
        desc: "",
        ativo: "",
        data: ""
    })

    useEffect(() => {
        if(sessionStorage.getItem('perm') !== 'Admin'){
            navigate('/')
        }
    })

    const handleSubmit = e => {
        e.preventDefault()
        console.log()
    }

    

    return (
        <section>
            <h1>Adicionar Produto</h1>
            <form onSubmit={handleSubmit}>
                <input />
                <button>submit</button>
            </form>
        </section>
    )
}