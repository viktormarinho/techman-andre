import { useEffect, useState } from "react"
import { Equipamento } from "./components/Equipamento"
import { Notify } from 'notiflix'
import { useNavigate } from 'react-router-dom';

function Equipamentos() {

  const navigate = useNavigate();
  const [equipamentos, setEquipamentos] = useState('Carregando equipamentos...')
  const [plus, setPlus] = useState("")
  const [userPerm, setUserPerm] = useState("")

  function refetch(){
    fetch('/equipamentos')
    .then(res => {
      res.json()
        .then(data => setEquipamentos(data))
    })

    setUserPerm(sessionStorage.getItem('perm'))
  }

  useEffect(() => {
    if (!sessionStorage.getItem('perm')){
      navigate('/')
    }
    fetch('/equipamentos')
    .then(res => {
      res.json()
        .then(data => setEquipamentos(data))
    })

    setUserPerm(sessionStorage.getItem('perm'))
  }, [])

  const handleAddProduto = () => {
    if (userPerm === 'Admin'){
      navigate("/criarproduto")
    }else{
      Notify.failure('Somente um administrador pode adicionar produtos.')
    }
  }

  const handleHover = (e) => {
    let btn = e.target;
    btn.style.textDecoration = 'underline'
    setPlus("+ ")
  }

  const handleLeave = (e) => {
    let btn = e.target;
    btn.style.textDecoration = 'none'
    setPlus("")
  }


  if (equipamentos === 'Carregando equipamentos...'){
    return <div>{equipamentos}</div>
  }else{
    return (
      <div>
        <div style={pageStyles}>
          {equipamentos.map(equipamento => <Equipamento equip={equipamento} refetch={refetch}/>)}
        </div>
        <button 
        style={buttonStyle} 
        onMouseEnter={handleHover} 
        onMouseLeave={handleLeave}
        onClick={handleAddProduto}>
          {plus}Adicionar produto
        </button>
        <button 
        style={infoStyle}>
          Logado como: {userPerm}
          </button>
      </div>
    )
  }
}

export default Equipamentos

const infoStyle = {
  position: 'absolute',
  left: '40px',
  bottom: '40px',
  fontSize: '25px',
  color: 'white',
  backgroundColor: '#44babc',
  border: 'none',
  borderRadius: '8px',
  padding: '8px 12px',
  cursor: 'auto'
}

const buttonStyle = {
  position: 'absolute',
  right: '40px',
  bottom: '40px',
  fontSize: '35px',
  color: 'white',
  backgroundColor: '#44babc',
  border: 'none',
  borderRadius: '8px',
  padding: '8px 12px',
  cursor: 'pointer'
}

const pageStyles = {
  fontFamily: 'Helvetica'
}