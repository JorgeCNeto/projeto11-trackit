import Topo from "../../components/Topo"
import Data from "../../components/Data"
import Tarefa from "../../components/Tarefa"
import Baixo from "../../components/Baixo"
import styled from "styled-components"

export default function Hoje(){

    return(
        <HojeFormatacao>
            <Topo/>
            <Data />
            <Tarefa/>
            <Tarefa/>
            <Tarefa/>
            <Baixo />
        </HojeFormatacao>
    )
}

const HojeFormatacao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E5E5E5;
    overflow-y: scroll;
    
`