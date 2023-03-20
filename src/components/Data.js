import styled from "styled-components"

export default function Data(){
    return(
        <AjusteTexto>
            <DataShow>Segunda, 17/05</DataShow>     
            <Texto>Nenhum hábito concluído ainda</Texto>      
        </AjusteTexto>
    )
}

const DataShow = styled.h1`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
`

const Texto = styled.h2`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #BABABA;
`
const AjusteTexto = styled.div`
    width: 340px;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-bottom: 28px;
`