import { useState } from 'react'
import styled from 'styled-components'


export default function Menu({
    open,
    setColor,
    setLocation,
    chosenColor,
    chosenLocation
}) {
    const [active, setActive] = useState([])

    function handleClick(event, index) {
        setColor(event.target.value)
        const activeButton = chosenColor.find(button => button.index === index)
        setActive(activeButton)
        console.log(activeButton)

    }

    return (
        <StyledMenu open={open}>
            <label>Farben</label>
            {chosenColor.map((color, index) => (
                <Button key={index} value={color} onClick={(event) => handleClick(event, index)}>
                    {color}
                </Button>
            ))}
            <label>Pflanzort</label>
            {chosenLocation.map((location, index) => (
                <Button key={index} value={location} onClick={(event) => setLocation(event.target.value)}>
                    {location}
                </Button>
            ))}
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: var(--middle-transparent);
  min-height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  position:fixed;
  top: 0;
  left: 0;
rigth: auto;
  transition: transform 0.3s ease-in-out;
  transform: ${props => (props.open ? 'translateX(0)' : 'translateX(-100%)')};
  z-index:4;
`;

const Button = styled.button`
box-shadow: 3px 3px 20px var(--primary);
	border-radius:8px;
	display:inline-block;
	cursor:pointer;
	color: ${props => (props.active ? '#fff' : 'var(--primary)')};
	padding:0.7rem;
	text-decoration:none;
	text-shadow:0px 1px 0px #92b879;
    border: none;
    outline: none;
width: 4rem;
margin: 0.5rem;
background-color: ${props => (props.active ? 'var(--primary)' : 'inherit')};
xbackground-image: linear-gradient(to top, var(--white) 8%, var(--dark-middle) 67%,  100%);

`


