import {Corpo, Logo, InputLogin, Botao, ENDERECO} from "./LoginStyle"
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"

export default function Login(){

    return (
        <Corpo>
            <Logo src={logo} />
            <InputLogin placeholder="email" />
            <InputLogin placeholder="senha" />
            <Botao>Entrar</Botao>
            <ENDERECO>
                <Link to="/cadastro">
                    Não tem uma conta? Cadastre-se!
                </Link>
            </ENDERECO>
        </Corpo>
    )
}
