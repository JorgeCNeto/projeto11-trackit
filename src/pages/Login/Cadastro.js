import {Corpo, Logo, InputLogin, Botao, Link} from "./LoginStyle"
import logo from "../../assets/logo.svg"

export default function Login(){

    return (
        <Corpo>
            <Logo src={logo} />
            <InputLogin placeholder="email" />
            <InputLogin placeholder="senha" />
            <InputLogin placeholder="nome" />
            <InputLogin placeholder="foto" />
            <Botao>Entrar</Botao>
            <Link src="">Já tem uma conta? Faça login!</Link>
        </Corpo>
    )
}