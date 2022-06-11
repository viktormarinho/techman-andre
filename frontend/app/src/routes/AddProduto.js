import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function AddProduto(){
    const navigate = useNavigate()
    let formObject = {
        nome: "",
        imagem: "",
        desc: "",
        ativo: "",
        data: ""
    }
    const [form, setForm] = useState(formObject)
    
    useEffect(() => {
        if(sessionStorage.getItem('perm') !== 'Admin'){
            navigate('/')
        }
    })

    const handleSubmit = e => {
        e.preventDefault()
        console.log(form)
    }

    const handleChange = (e) => {
        formObject[e.target.name] =  e.target.value
        console.log(formObject)
        setForm(formObject)
    }

    

    return (
        <section>
            <h1>Adicionar Produto</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="nome"
                placeholder="Nome do produto" 
                onChange={handleChange}
                />
                <input
                type="text"
                name="imagem"
                placeholder="Imagem do produto" 
                onChange={handleChange}
                />
                <button>submit</button>
            </form>
        </section>
    )
}