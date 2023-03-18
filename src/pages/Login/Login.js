import {Corpo, Logo, InputLogin, Botao, ENDERECO} from "./LoginStyle"
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"
import {URL_LOGIN} from "../../constants/urls"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let navigate = useNavigate();

    function login(){
        const logar = {email, password}
        
        const promise = axios.post(URL_LOGIN, logar)
        promise.then(res => {            
            navigate("/hoje")
        }) 
        promise.catch(err => {
            console.log(err.responde.data)
            alert("Usuário e/ou senha inválidos!")
        })
    }

    return (
        <Corpo>
            <Logo src={logo} />
            {/* <form onSubmit={login}> */}
                <InputLogin placeholder="email" required value={email} onChange={e => setEmail(e.target.value)}/>
                <InputLogin placeholder="senha" required value={password} onChange={e => setPassword(e.target.value)}/>
                <Botao onClick={login} type="submit">Entrar</Botao>
            {/* </form> */}
            <ENDERECO>
                <Link to="/cadastro">
                    Não tem uma conta? Cadastre-se!
                </Link>
            </ENDERECO>
        </Corpo>
    )
}
