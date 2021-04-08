import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Bee from '../assets/bee.jpg'

export default function Links() {
    return (
        <Wrapper>
            <StyledLink to='/Bee'><Img src={Bee} />Biene</StyledLink>
            <StyledLink to='/Butterfly'>Falter</StyledLink>
            <StyledLink to='/Bird'>Vogel</StyledLink>
        </Wrapper>
    )

}

const Wrapper = styled.div`
height: 100vh;
display: flex;
flex-direction:column;
align-items:  center;
margin-top:2rem;
`

const StyledLink = styled(Link)`
height: 6rem;
width: 15rem;
padding: 1rem;
display: flex;
align-items: center;
gap: 2rem;
  box-shadow:9px 13px 40px var(--primary);
  border-radius: 1rem;
  margin: 1rem 1rem 1rem 1rem;
  background-color: white;
  position: relative;
  text-decoration: none;
  color: #246914;
 
`

const Img = styled.img`
width: 6rem;
height: 5rem;
border-radius: 1rem;
`

