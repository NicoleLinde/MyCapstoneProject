import { useState, useMemo } from 'react'
import styled from 'styled-components'
import PlantCard from '../components/PlantCard'
import BurgerMenu from '../components/BurgerMenu/BurgerMenu'

export default function Bee({ plants, onSelectFavorites, isFavorite, favorites }) {

    const filteredPlants = (plants.filter((plant) =>
        plant.bienenfreundlich === true))


    const beeFilteredPlants = useMemo(() => filteredPlants.sort(() => Math.random() - Math.random()), [plants])

    const [color, setColor] = useState('all')
    const [location, setLocation] = useState('all')


    const colorFilteredPlants = beeFilteredPlants.map((plant) => plant.farbe);
    colorFilteredPlants.unshift('all');
    let chosenColor = colorFilteredPlants.filter((c, index) => {
        return colorFilteredPlants.indexOf(c) === index;
    })

    const byColor = (plant) => {
        if (color === 'all') return plant;
        return plant.farbe === color;
    }

    const locationFilter = beeFilteredPlants.map((plant) => plant.pflanzort);
    locationFilter.unshift('all');
    let chosenLocation = locationFilter.filter((c, index) => {
        return locationFilter.indexOf(c) === index;
    })

    const byLocation = (plant) => {
        if (location === 'all') return plant;
        return plant.pflanzort === location;
    }

    const data =
        beeFilteredPlants.filter(byColor).filter(byLocation);

    return (
        <>
            <BurgerMenu
                color={color}
                setColor={setColor}
                location={location}
                setLocation={setLocation}
                chosenColor={chosenColor}
                chosenLocation={chosenLocation} />
            <h2>Bienen</h2>
            <Wrapper>


                {data.map((beeFilteredPlant) =>
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
min-height: 100vh;
`
