
import styled from 'styled-components'
import PlantCard from '../components/PlantCard'


export default function Bee({ plants, onSelectFavorites, isFavorite, favorites }) {

    const beeFilteredPlants = (plants.filter((plant) =>
        plant.bienenfreundlich === true))

    return (
        <>
            <h2>Bienen</h2>
            <Wrapper>


                {beeFilteredPlants.map((beeFilteredPlant) =>
                (<PlantCard
                    id={beeFilteredPlant._id}
                    image={beeFilteredPlant.image}
                    name_de={beeFilteredPlant.name_de}
                    name_lat={beeFilteredPlant.name_lat}
                    bienenfreundlich={beeFilteredPlant.bienenfreundlich}
                    falterfreundlich={beeFilteredPlant.falterfreundlich}
                    vogelfreundlich={beeFilteredPlant.vogelfreundlich}
                    standort={beeFilteredPlant.standort}
                    wasser={beeFilteredPlant.wasser}
                    onSelectFavorites={() => onSelectFavorites(beeFilteredPlant._id)}
                    isFavorite={isFavorite(favorites, beeFilteredPlant._id)} />))}

            </Wrapper>
        </>
    )
}



const Wrapper = styled.div`
display: flex;
flex-direction: column;

margin: 1rem;
grid-gap: 1rem;


`
