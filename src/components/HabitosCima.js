import styled from "styled-components"
import {AiOutlinePlus} from "react-icons/ai"

export default function HabitosCima(){
    return(
        <Caixa>
            <Texto>Meus hábitos</Texto>
            <Botao><AiOutlinePlus  color="#FFFFFF" size="25px"/></Botao>
        </Caixa>
    )
}

const Caixa = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`

const Texto = styled.h1`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    color: #126BA5;
    margin-right: 152px;
`

const Botao = styled.button`
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 27px;
    line-height: 34px;    
    color: #FFFFFF;
    
`