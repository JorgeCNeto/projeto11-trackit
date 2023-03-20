import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useState } from "react";

export default function Baixo(){
    const[percentage, setPercentage] = useState(0)
    let navigate = useNavigate();

    // function irParaHabitos(){
    //     navigate("/habitos")
    // }

    // function irParaHoje(){
    //     navigate("/hoje")
    // }

    // function irParaHistorico() {
    //     navigate("/historico")
    // }
    
    return(
        <Caixa>
           
            <TextoP onCLick={() => navigate("/habitos") }>Hábitos</TextoP>
         
            
            <Bola onClick={() => navigate("/hoje")}>
                    <CircularProgressbar
                    value={percentage}
                    text={`Hoje`}
                    background={true}
                    backgroundPadding={6}
                    styles={buildStyles({
                    backgroundColor: "#52B6FF",
                    textSize: '22px',
                    textColor: "#ffffff",
                    pathColor: "#ffffff",
                    trailColor: "transparent"
                    
                    })}
                    />          
            </Bola>
    
            <TextoP onCLick={() => navigate("/historico")}>Histórico</TextoP>
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
    justify-content: space-around;
    align-items: center;
    margin-top: 45%;
`

const TextoP = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
`

const Bola = styled.div`
    width: 91px;
    height: 91px;
    background: #52B6FF;
    border-radius: 100px;
    margin-bottom: 45px;
    font-family: 'Lexend Deca';
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    
`