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

    return (
        <div style={loginpageStyle}>
            <h2>login page</h2>
            <div style={keyboardStyle}>
                <Keyboard
                layout={{
                    default: ["1 2 3", "4 5 6", "7 8 9", "0 {bksp} {enter}"]
                }}
                onChange={changeHandler}
                />
            </div>
            <button onClick={() => {
                navigate('/equipamentos')
            }}>Dale guys</button>
        </div>
    )
}

const keyboardStyle = {
    width: "10vw"
}

const loginpageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: '100vw'
}