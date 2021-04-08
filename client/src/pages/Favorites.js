import Plantcard from '../components/PlantCard'
import styled from 'styled-components'


export default function Favorites({ favorites, onSelectFavorites, isFavorite }) {



    return (
        <Wrapper>
            <h2>Favoriten</h2>
            {favorites.map((favorite) =>
            (<Plantcard

                image={favorite.image}
                name_de={favorite.name_de}
                name_lat={favorite.name_lat}
                bienenfreundlich={favorite.bienenfreundlich}
                falterfreundlich={favorite.falterfreundlich}
                vogelfreundlich={favorite.vogelfreundlich}
                standort={favorite.standort}
                wasser={favorite.wasser}
                onSelectFavorites={() => onSelectFavorites(favorite._id)}
                isFavorite />))}

        </Wrapper>
    )
}

const Wrapper = styled.div`
height:100vh;
`