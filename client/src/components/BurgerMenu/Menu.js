import styled from 'styled-components'


export default function Menu({
    open,
    setColor,
    setLocation,
    chosenColor,
    chosenLocation
}) {
    return (
        <StyledMenu open={open}>
            {chosenColor.map((color, index) => (
                <button key={index} value={color} onClick={(event) => setColor(event.target.value)}>
                    {color}
                </button>
            ))}
            {chosenLocation.map((location, index) => (
                <button key={index} value={location} onClick={(event) => setLocation(event.target.value)}>
                    {location}
                </button>
            ))}
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: lightblue;
  min-height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  position:fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${props => (props.open ? 'translateX(0)' : 'translateX(-100%)')};
  z-index:4;
`;