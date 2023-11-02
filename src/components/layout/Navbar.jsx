<<<<<<< HEAD
import styled from "styled-components"
import axios from "axios"
import { useRouter } from "next/router"


const StyledNavbar= styled.div`
  background-color: ${props=> props.theme.white};
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 100px;

  @media(max-width: 500px){
    padding: 20px;
  }


`

const StyledLogo= styled.span`
  flex: 1;
  font-weight: bold;
  font-size: 20px;

  
`
const StyledLogout= styled.a`
  cursor: pointer;
`

function Navbar(){
  const router= useRouter()

  const handleLogout= async()=> {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/logout`)
    router.push('/')
  }
  return(
    <StyledNavbar>
        <StyledLogo># Social Dev</StyledLogo>
        <div>
            <StyledLogout onClick={handleLogout}>Desconectar</StyledLogout>
        </div>

    </StyledNavbar>
  )

}

export default Navbar

=======
import styled from "styled-components";
import axios from "axios";
import { useRouter } from "next/router";
import logout from "../../../pages/api/user/logout";

const StyledNavbar= styled.div`
background-color:${props=> props.theme.white};
height: 80px;
display: flex;
align-items:center;
padding: 0 100px;

@media(max-width:500px){
    padding:0 20px;
}
`

const StyledLogo= styled.span`
flex: 1;
font-weight: bold;
font-size: 20 px;
`
const StyledLogout= styled.a`
cursor:pointer;
`

function Navbar(){
   const router= useRouter()

   const handleLogout= async ()=> {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL} /api/user/logout`)
    router.push('/')
   }

    return(
    <StyledNavbar>
        <StyledLogo># Social Dev</StyledLogo>
        <StyledLogout onClick={handleLogout}>Desconectar</StyledLogout>

    </StyledNavbar>
    )
}

export default Navbar
>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
