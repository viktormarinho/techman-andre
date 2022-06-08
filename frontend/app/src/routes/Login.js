import { useNavigate } from "react-router";
import { useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

export default function Login(){
    const navigate = useNavigate();
    const [senha, setSenha] = useState("");

    const changeHandler = input => {
        setSenha(input);
        console.log(senha);
    }

    const handleLogin = () => {
        fetch(`/login/${senha}`)
            .then(res => res.json().then(data => {
                if (data.status){
                    navigate('/equipamentos');
                }
            }))
    }

    return (
        <div style={loginpageStyle}>
            <h2>login page</h2>
            <h1>{senha}</h1>
            <div style={keyboardStyle}>
                <Keyboard
                layout={{
                    default: ["1 2 3", "4 5 6", "7 8 9", "0 {bksp} {enter}"]
                }}
                onChange={changeHandler}
                />
            </div>
            <button onClick={handleLogin}>Dale guys</button>
        </div>
    )
}

const keyboardStyle = {
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