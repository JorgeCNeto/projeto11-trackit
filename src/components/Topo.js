
import styled from "styled-components"

export default function Topo(){
    
    return(
        <Top>
            <Logo>TrackIt</Logo>
            <Foto src="https://www.futuraexpress.com.br/blog/wp-content/uploads/2020/03/JPG-Alta-Qualidade.jpg"/>
        </Top>
        
    )
}

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    width: 375px;
    height: 70px;
    position: sticky;
    left: 0px;
    top: 0px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding-left: 18px;
    padding-right: 18px;
    align-items: center;
    margin-bottom: 28px;
`
const Logo = styled.h2`
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
    margin-left: 18px;
`

const Foto = styled.img`
    width: 51px;
    height: 51px;    
    border-radius: 100px;
    margin-right: 18px;
`