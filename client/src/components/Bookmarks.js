import styled from 'styled-components'
import Favorites from '../assets/heart-active.svg'
import NotFavorite from '../assets/heart-inactive.svg'



export default function ({ onSelectFavorites, isFavorite }) {




    return (
        <LikeIcon src={isFavorite ? Favorites : NotFavorite} onClick={onSelectFavorites} />
    )
}



const LikeIcon = styled.img`
height:1.5rem;
align-self: flex-end;
margin: 1.5rem 1.5rem 0 0;
position: absolute;

`