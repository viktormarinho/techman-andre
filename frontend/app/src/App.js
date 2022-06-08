import { useEffect, useState } from "react"
import { Equipamento } from "./Equipamento"

function App() {

  const [equipamentos, setEquipamentos] = useState('Carregando equipamentos...')
  useEffect(() => {
    fetch('/equipamentos')
    .then(res => {
      res.json()
        .then(data => setEquipamentos(data))
    })
  }, [])


  if (equipamentos === 'Carregando equipamentos...'){
    return <div>{equipamentos}</div>
  }else{
    return (
      <div>
        {equipamentos.map(equipamento => <Equipamento equip={equipamento}/>)}
      </div>
    )
  }
}

export default App