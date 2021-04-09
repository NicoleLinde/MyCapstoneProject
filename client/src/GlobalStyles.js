import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root {
    --primary: #246914;
  
  
    --white: #FFFFFF;
    
  
    --middle: #DEE8DB;
  
  }


*{
    box-sizing: border-box;
    


}

body {
    margin:0;
    font-family: 'Cairo';
    padding-bottom: 7rem;
    background: linear-gradient(0deg, var(--primary) 40%, #dee8db 69%, #FFFFFF 100%);
    background-repeat: no-repeat;
}

h2 { 
  font-weight: 500;
  color: var(--primary);
  text-align: center;
  font-size: 2.5rem;
  margin: 0rem auto 1.5rem auto;
}

h1 {
    color: var(--primary); 
}
`
