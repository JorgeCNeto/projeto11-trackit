import styled from "styled-components"
import {BsTrash} from "react-icons/bs"


export default function CaixaHabitos(){
    return(
        <Caixa>
            <AjusteTexto>
                <Texto>Ler 1 capítulo de livro</Texto>
                <DivDias>
                    <ButtonDia>D</ButtonDia>
                    <ButtonDia>S</ButtonDia>
                    <ButtonDia>T</ButtonDia>
                    <ButtonDia>Q</ButtonDia>
                    <ButtonDia>Q</ButtonDia>
                    <ButtonDia>S</ButtonDia>
                    <ButtonDia>S</ButtonDia>
                </DivDias>  
            </AjusteTexto>   
            <AjusteIcone>
                <BsTrash color="#666666" size="20px"/>
            </AjusteIcone>
        </Caixa>
    )
}

const Texto = styled.h1`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;  
`

const ButtonDia = styled.button`
    width: 30px;
    height: 30px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;    
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #DBDBDB;
    padding-left: 11px;
    margin-right: 4px;

`

const Caixa = styled.div`
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;       
    
`

const DivDias = styled.div`
    width: 303px;
    margin-bottom: 30px;
`

const AjusteTexto = styled.div`
    margin-top: 13px;
    margin-left: 15px;
`

const AjusteIcone = styled.div`
    margin-top: 11px;
    margin-right: 14px; 
`
