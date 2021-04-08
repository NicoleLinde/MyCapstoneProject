import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Bee from '../assets/bee.jpg'
import Butterfly from '../assets/butterfly.jpg'
import Bird from '../assets/gimpel.jpg'

export default function Links() {
    return (
        <Wrapper>
            <StyledLink to='/Bee'><Img src={Bee} />Biene</StyledLink>
            <StyledLink to='/Butterfly'><Img src={Butterfly} />Falter</StyledLink>
            <StyledLink to='/Bird'><Img src={Bird} />Vogel</StyledLink>
        </Wrapper>
    )

}

const Wrapper = styled.div`
height: 100vh;
display: flex;
flex-direction:column;
align-items:  center;
margin-top:1.5rem;
`

const StyledLink = styled(Link)`
height: 6rem;
width: 15rem;
padding: 1rem 0.5rem;
display: flex;
align-items: center;
gap: 3rem;
  box-shadow:8px 12px 30px var(--primary);
  border-radius: 1rem;
  margin: 1rem 1rem 1rem 1rem;
  background-color: white;
  position: relative;
  text-decoration: none;
  color: #246914;
 font-size: x-large;
 
`

const Img = styled.img`
width: 6rem;
height: 5rem;
border-radius: 1rem;
box-shadow:1px 1px 10px var(--primary);
`