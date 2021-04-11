import PlantCard from '../components/PlantCard'
import { useState, useMemo } from 'react'
import styled from 'styled-components'
import BurgerMenu from '../components/BurgerMenu/BurgerMenu'

export default function Bird({ plants, onSelectFavorites, isFavorite, favorites }) {

    const filteredPlants = (plants.filter((plant) =>
        plant.vogelfreundlich === true))

    const birdFilteredPlants = useMemo(() => filteredPlants.sort(() => Math.random() - Math.random()), [plants])


    const [color, setColor] = useState('all')
    const [location, setLocation] = useState('all')


    const colorFilteredPlants = birdFilteredPlants.map((plant) => plant.farbe);
    colorFilteredPlants.unshift('all');
    let chosenColor = colorFilteredPlants.filter((c, index) => {
        return colorFilteredPlants.indexOf(c) === index;
    })

    const byColor = (plant) => {
        if (color === 'all') return plant;
        return plant.farbe === color;
    }

    const locationFilter = birdFilteredPlants.map((plant) => plant.pflanzort);
    locationFilter.unshift('all');
    let chosenLocation = locationFilter.filter((c, index) => {
        return locationFilter.indexOf(c) === index;
    })

    const byLocation = (plant) => {
        if (location === 'all') return plant;
        return plant.pflanzort === location;
    }

    const data =
        birdFilteredPlants.filter(byColor).filter(byLocation);


    console.log('5', birdFilteredPlants)

    return (
        <Wrapper>
            <BurgerMenu
                color={color}
                setColor={setColor}
                location={location}
                setLocation={setLocation}
                chosenColor={chosenColor}
                chosenLocation={chosenLocation} />
            <h2>Vögel</h2>
            {data.map((birdFilteredPlant) =>
            (<PlantCard
                id={birdFilteredPlant._id}
                image={birdFilteredPlant.image}
                name_de={birdFilteredPlant.name_de}
                name_lat={birdFilteredPlant.name_lat}
                bienenfreundlich={birdFilteredPlant.bienenfreundlich}
                falterfreundlich={birdFilteredPlant.falterfreundlich}
                vogelfreundlich={birdFilteredPlant.vogelfreundlich}
                standort={birdFilteredPlant.standort}
                wasser={birdFilteredPlant.wasser}
                onSelectFavorites={() => onSelectFavorites(birdFilteredPlant._id)}
                isFavorite={isFavorite(favorites, birdFilteredPlant._id)}
            />))}


        </Wrapper>

    )
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
margin: 1rem;
grid-gap: 1rem;
min-height: 100vh;
`
