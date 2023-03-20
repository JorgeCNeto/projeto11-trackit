import styled from "styled-components"

export default function AdicionarHabito(){
    return(
        <Caixa>
            <InputNome placeholder="nome do hábito"/>
            <DivDias>
                <ButtonDia>D</ButtonDia>
                <ButtonDia>S</ButtonDia>
                <ButtonDia>T</ButtonDia>
                <ButtonDia>Q</ButtonDia>
                <ButtonDia>Q</ButtonDia>
                <ButtonDia>S</ButtonDia>
                <ButtonDia>S</ButtonDia>
            </DivDias>
            <DivBotoes>
                <Cancelar>Cancelar</Cancelar>
                <Salvar>Salvar</Salvar>
            </DivBotoes>
        </Caixa>
    )
}

const InputNome = styled.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 8px;
    margin-top: 18px;
    ::placeholder{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
        padding-left: 11px;
    }
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

const Cancelar = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52B6FF;
    margin-right: 23px;
`

const Salvar = styled.button`
width: 84px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #FFFFFF;
`

const Caixa = styled.div`
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 29px;
`

const DivDias = styled.div`
    width: 303px;
    margin-bottom: 30px;
`

const DivBotoes = styled.div`
    width: 303px;
    display: flex;
    justify-content: right;
    align-items: center;
`
