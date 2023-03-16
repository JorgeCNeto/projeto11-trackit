import {Corpo, Logo, InputLogin, Botao, ENDERECO} from "./LoginStyle"
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import {URL_CADASTRO} from "../../constants/urls"

export default function Login(){
    const[cadastro, setCadastro] = useState(undefined)

    useEffect(() => {
       

    }, [])

    function cadastramento(){
        axios.post(`${URL_CADASTRO}`)
        .then(res => console.log(res))
        .catch(err => console.log(err.respode.data))
    }
   
    return (
        <Corpo>
            <Logo src={logo} />
            <InputLogin placeholder="email" />
            <InputLogin placeholder="senha" />
            <InputLogin placeholder="nome" />
            <InputLogin placeholder="foto" />
            <Botao onClick={cadastramento}>Entrar</Botao>
            <ENDERECO>
                <Link to="/">
                    Já tem uma conta? Faça login!
                </Link>
            </ENDERECO>
        </Corpo>
    )
}