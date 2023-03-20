import Topo from "../../components/Topo"
import HabitosCima from "../../components/HabitosCima"
import AdicionarHabito from "../../components/AdicionarHabito"
import CaixaHabitos from "../../components/CaixaHabitos"
import Baixo from "../../components/Baixo"
import styled from "styled-components"

export default function Habitos(){

    return(
        <HojeFormatacao>
            <Topo/>
            <HabitosCima />    
            <AdicionarHabito />    
            <Texto>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Texto>    
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

const Texto = styled.p`
    width: 338px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
`