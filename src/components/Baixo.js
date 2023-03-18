import styled from "styled-components"

export default function Baixo(){
    return(
        <Caixa>
            <h1>Hábitos</h1>
            <button>Hoje</button>
            <h1>Histórico</h1>
        </Caixa>
    )
}

const Caixa = styled.div`
    width: 100%;
    height: 70px;
    background: #FFFFFF;
    display: flex;
    position: sticky;
    bottom: 0;
    left: 0;
`