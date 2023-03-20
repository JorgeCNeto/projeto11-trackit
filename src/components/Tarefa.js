import { useState } from "react"
import { BsCheckLg } from "react-icons/bs"
import styled from "styled-components"

export default function Tarefa(){
    const [terminada, setTerminada] = useState(false)
    
   
    function marcarTarefa(){
        if (terminada === false){
            setTerminada(true)
        } else {
            setTerminada(false)
        }
    }

    return(
        <Quadro>
            <Texto>                
                <TextoH1>Ler 1 capítulo de livro</TextoH1>
                <div>
                    <TextoP>Sequência atual: 3 dias</TextoP>
                    <TextoP>Seu recorde: 5 dias</TextoP>
                </div>
            </Texto>
            <Botao onClick={marcarTarefa} terminada={terminada}> <BsCheckLg color="#FFFFFF" size="50px"/> </Botao>
        </Quadro>
    )
}

const Quadro = styled.div`
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`

const Texto = styled.div`
    margin-right: 35px;
`

const TextoH1 = styled.h1`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;  
    color: #666666;
    margin-bottom: 7px;
`

const TextoP = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
`

const Botao = styled.button`
    width: 69px;
    height: 69px;
    background: ${(props) => props.terminada ? "#8FC549" : "#EBEBEB"};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    
`