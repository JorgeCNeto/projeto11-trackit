import {Corpo, Logo, InputLogin, Botao, ENDERECO} from "./LoginStyle"
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import {URL_CADASTRO} from "../../constants/urls"
import { StyleSheetManager } from "styled-components"

export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")

    useEffect(() => {
       

    }, [])

    function cadastramento(){
        const cadastro = {email, name, image, password}
        console.log(cadastro)
        const promise = axios.post(URL_CADASTRO, cadastro)
        promise.then(res => alert("foi a requisição"))
        promise.catch(err => console.log(err.response.data))

        // axios.post(`${URL_CADASTRO}`)
        // .then(res => {
        //     email: email,
        //     name: name,
        //     image: image,
        //     password: password
        // })
        // .catch(err => console.log(err.respode.data))
    }
   
    return (
        <Corpo>
            <Logo src={logo} />
            <form onSubmit={cadastramento}>
                <InputLogin type="email" placeholder="email" required value={email} onChange={e => setEmail(e.target.value)}/>
                <InputLogin type="password" placeholder="senha" required value={password} onChange={e => setPassword(e.target.value)}/>
                <InputLogin type="text" placeholder="nome" required value={name} onChange={e => setName(e.target.value)}/>
                <InputLogin type="text" placeholder="foto" required value={image} onChange={e => setImage(e.target.value)}/>
                <Botao type="submit">Entrar</Botao>
            </form>
            <ENDERECO>
                <Link to="/">
                    Já tem uma conta? Faça login!
                </Link>
            </ENDERECO>
        </Corpo>
    )
}