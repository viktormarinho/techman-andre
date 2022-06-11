import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Notify } from 'notiflix';


export default function AddProduto(){
    const navigate = useNavigate()
    let formObject = {
        nome: "",
        imagem: "",
        desc: "",
        ativo: "1",
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
        fetch('/equipamentos/create/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
            .then(res => res.json().then(data => {
               if (data.status === 'success'){
                   Notify.success('Produto adicionado com sucesso.');
                   navigate('/equipamentos');
               }else{
                   Notify.failure('Algo ocorreu de errado e não pudemos adicionar seu produto.');
                   navigate('/equipamentos');
               } 
            }))
    }

    const handleChange = (e) => {
        formObject[e.target.name] =  e.target.value;
        setForm(formObject);
    }


    return (
        <section>
            <h1 style={titleStyle}>Adicionar Produto</h1>
            <form
            style={formStyle} 
            onSubmit={handleSubmit}>
                <input
                style={{fontSize: '20px'}}
                type="text"
                name="nome"
                placeholder="Nome do produto" 
                onChange={handleChange}
                />
                <input
                style={{fontSize: '20px'}}
                type="text"
                name="imagem"
                placeholder="Link da imagem do produto" 
                onChange={handleChange}
                />
                <textarea
                style={textAreaStyle}
                type="text"
                name="desc"
                placeholder="Descrição do produto" 
                onChange={handleChange}
                />
                <select 
                style={{fontSize: '20px', width: '200px'}} 
                name="ativo" 
                onChange={handleChange}
                >
                    <option value="1">Ativo</option>
                    <option value="0">Inativo</option>
                </select>
                <label style={{fontSize: '24px', display: 'flex', flexDirection: 'column', gap:'8px', alignItems: 'center'}}>
                    Data de chegada do produto
                    <br></br>
                    <input
                    style={{fontSize: '20px'}}
                    type="date"
                    name="data"
                    onChange={handleChange}
                    />
                </label>
                <button style={buttonStyle}>Adicionar</button>
            </form>
        </section>
    )
}

const buttonStyle = {
    padding: '8px 12px',
    backgroundColor: '#44bab0',
    borderRadius: '4px',
    marginTop: '30px',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer'
}

const textAreaStyle = {
    fontSize: '20px', 
    height: '150px',
    fontFamily: 'Arial'
}

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'center',
    fontFamily: 'Arial'
}

const titleStyle = {
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: '40px',
    marginTop: '20vh'
}