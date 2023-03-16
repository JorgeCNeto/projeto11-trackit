import {Corpo, Logo, InputLogin, Botao, Link} from "./LoginStyle"
import logo from "../../assets/logo.svg"

export default function Login(){

    return (
        <Corpo>
            <Logo src={logo} />
            <InputLogin placeholder="email" />
            <InputLogin placeholder="senha" />
            <Botao>Entrar</Botao>
            <Link src="">Não tem uma conta? Cadastre-se!</Link>
        </Corpo>
    )
}
