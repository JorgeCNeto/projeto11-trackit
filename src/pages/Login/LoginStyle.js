import styled from "styled-components";


export const Corpo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Logo = styled.img`
    width: 180px;
    margin-top: 68px;
    margin-bottom: 32px;
`

export const InputLogin = styled.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 6px;
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
export const Botao = styled.button`
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;
    margin-bottom: 25px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
`
export const ENDERECO = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;    
`
