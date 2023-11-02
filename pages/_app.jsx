<<<<<<< HEAD
import { useEffect } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import moment from "moment"
import 'moment/locale/pt-br'

import theme from "../src/theme"

const GlobalStyle= createGlobalStyle`
* {
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  color: ${props=> props.theme.black};
  background-color: ${props=> props.theme.background}
}

a {
  color:${props=> props.theme.primary};
  font-weight:bold;
  text-decoration: none;
  transition:  0.3s;
}

a:hover{
  color:${props=> props.theme.primaryHover}
}
`
=======
import {useEffect} from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import moment from 'moment'
import 'moment/locale/pt-br'

import theme from '../src/theme'

const GlobalStyle= createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color:${props=> props.theme.black};
    background-color:${props=> props.theme.background};
  }
  
  a{
    color: ${props=> props.theme.primary};
    font-weight: bold;
    text-decoration:none;
    transition:  0.3s
  }

  a:hover{
    color:${props=> props.theme.primaryHover}
  }
  `

>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
function App ({ Component, pageProps }) {
  useEffect(()=>{
    moment.locale('pt-br')
  },[])

  return (
    <ThemeProvider theme={theme}>
<<<<<<< HEAD
      <GlobalStyle/>
=======
      <GlobalStyle/>  
>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App