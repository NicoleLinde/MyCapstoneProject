import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root {
    --primary: #246914;
    --middle: #DEE8DB;
    --middle-transparent:rgba(222, 232, 219, 0.9);
    --dark-middle:#96B78E;
    --grey: #647362;
    --white: #FFFFFF;
  }


*{
    box-sizing: border-box;
    


}

body {
    margin:0;
    font-family: 'Cairo';
    padding-bottom: 7rem;
    background: linear-gradient(0deg, var(--primary) 40%, var(--middle) 69%, var(--white) 100%);
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
