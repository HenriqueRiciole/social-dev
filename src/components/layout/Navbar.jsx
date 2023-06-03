import styled from "styled-components";

const StyledNavbar= styled.div`
background-color:${props=> props.theme.white};
height: 80px;
display: flex;
align-items:center;
padding: 0 100px;
`

const StyledLogo= styled.span`
flex: 1;
font-weight: bold;
font-size: 20 px;
`

function Navbar(){
    return(
    <StyledNavbar>
        <StyledLogo># Social Dev</StyledLogo>
        <a href="#">Desconectar</a>

    </StyledNavbar>
    )
}

export default Navbar