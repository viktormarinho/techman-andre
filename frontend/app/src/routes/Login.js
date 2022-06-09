import { useNavigate } from "react-router";
import { useState } from "react";
import { Notify, Report } from "notiflix";
import TechmanLogo from "./assets/techman.png";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "./helper.css"

export default function Login(){
    const navigate = useNavigate();
    const [senha, setSenha] = useState("");

    const changeHandler = input => {
        setSenha(input);      
    }

    const handleLogin = () => {
        fetch(`/login/${senha}`)
            .then(res => res.json().then(data => {
                if (data.status){
                    navigate('/equipamentos');
                    localStorage.setItem('perm', data.perm);
                    Notify.success(
                        'Logado com sucesso.'
                    )
                }else{
                    Report.failure(
                        'Senha inválida',
                        '',
                        'Tentar novamente'
                    )
                }
            }))
    }

    return (
        <div style={loginpageStyle}>
            <img src={TechmanLogo}/>
            <h1 style={senhaStyle}>{senha}</h1>
            <div style={keyboardWrapperStyle}>
                <Keyboard
                maxLength={6}
                layout={{
                    default: ["1 2 3", "4 5 6", "7 8 9", "{bksp} 0"]
                }}
                theme={'hg-theme-default hg-layout-default myTecladoTheme'}
                buttonTheme={[
                    {
                        class: "myBtnColor",
                        buttons: "1 2 3 4 5 6 7 8 9 {bksp} 0"
                    }
                ]}
                onChange={changeHandler}
                />
            </div>
            <button style={buttonStyle} onClick={handleLogin}>CONFIRMAR</button>
        </div>
    )
}

const senhaStyle = {
    fontFamily: 'Arial',
    border: '2px solid #266a6b',
    borderRadius: '8px',
    padding: '8px 12px',
    minHeight: '36.5px',
    minWidth: '110px',
    textAlign: 'center',
    backgroundColor: '#44babc',
    color: 'whitesmoke'
}

const buttonStyle = {
    padding: '8px 12px',
    backgroundColor: '#44babc',
    color: 'white',
    borderRadius: '4px',
    marginTop: '30px',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer'
}

const keyboardWrapperStyle = {
    width: "10vw",
}

const loginpageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: '85vh',
    width: '100vw'
}