import styled from 'styled-components'


export default function Burger({ open, setOpen }) {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)} >
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

const StyledBurger = styled.button`
  position: absolute;
  top: 17%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.12rem;
    background: var(--primary);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 0.3rem;

    :first-child {
      transform:${props => (props.open ? 'rotate(45deg)' : 'rotate(0)')}
    }

    :nth-child(2) {
      opacity: ${props => (props.open ? '0' : '1')};
    }

    :nth-child(3) {
      transform: ${props => (props.open ? 'rotate(-45deg)' : 'rotate(0)')}
    }
  }
`