import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Home from '../assets/birdhouse.svg'
import Profile from '../assets/avatar.svg'
import Favorites from '../assets/heart-active.svg'
import Calendar from '../assets/calendar.svg'

export default function FooterNavigation(plants) {
    return (
        <Footer>
            <NavContainer>
                <NavLink exact to='/'><Img src={Home} /></NavLink>
                <NavLink to='/Profile'><Img src={Profile} /></NavLink>
                <NavLink to='/Favorites' plants={plants}><Img src={Favorites} /></NavLink>
                <NavLink to='/Calendar'><Img src={Calendar} /></NavLink>
            </NavContainer>
        </Footer>
    )
}


const Footer = styled.footer`
bottom:0;
position: fixed;
width:100%
`


const NavContainer = styled.nav`
padding: 1.6rem;
display: flex;
background-color: white;
flex-direction: row;
justify-content: space-between;
margin: 1.2rem;
border-radius: 1rem;
box-shadow:9px 13px 40px #3F465785;
`


const Img = styled.img`
height:1.5rem;
`