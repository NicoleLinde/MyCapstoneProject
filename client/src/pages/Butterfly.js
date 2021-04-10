import { useState } from 'react'
import styled from 'styled-components'
import PlantCard from '../components/PlantCard'
import BurgerMenu from '../components/BurgerMenu/BurgerMenu'


export default function Butterfly({ plants, onSelectFavorites, isFavorite, favorites }) {

    const filteredPlants = (plants.filter((plant) =>
        plant.falterfreundlich === true))

    const butterflyFilteredPlants = filteredPlants.sort(() => Math.random() - Math.random())

    const [color, setColor] = useState('all')
    const [location, setLocation] = useState('all')


    const colorFilteredPlants = butterflyFilteredPlants.map((plant) => plant.farbe);
    colorFilteredPlants.unshift('all');
    let chosenColor = colorFilteredPlants.filter((c, index) => {
        return colorFilteredPlants.indexOf(c) === index;
    })

    const byColor = (plant) => {
        if (color === 'all') return plant;
        return plant.farbe === color;
    }

    const locationFilter = butterflyFilteredPlants.map((plant) => plant.pflanzort);
    locationFilter.unshift('all');
    let chosenLocation = locationFilter.filter((c, index) => {
        return locationFilter.indexOf(c) === index;
    })

    const byLocation = (plant) => {
        if (location === 'all') return plant;
        return plant.pflanzort === location;
    }

    const data =
        butterflyFilteredPlants.filter(byColor).filter(byLocation);

    return (
        <Wrapper>
            <BurgerMenu
                color={color}
                setColor={setColor}
                location={location}
                setLocation={setLocation}
                chosenColor={chosenColor}
                chosenLocation={chosenLocation} />
            <h2>Falter</h2>
            {data.map((butterflyFilteredPlant) =>
            (<PlantCard
                id={butterflyFilteredPlant._id}
                image={butterflyFilteredPlant.image}
                name_de={butterflyFilteredPlant.name_de}
                name_lat={butterflyFilteredPlant.name_lat}
                bienenfreundlich={butterflyFilteredPlant.bienenfreundlich}
                falterfreundlich={butterflyFilteredPlant.falterfreundlich}
                vogelfreundlich={butterflyFilteredPlant.vogelfreundlich}
                standort={butterflyFilteredPlant.standort}
                wasser={butterflyFilteredPlant.wasser}
                onSelectFavorites={() => onSelectFavorites(butterflyFilteredPlant._id)}
                isFavorite={isFavorite(favorites, butterflyFilteredPlant._id)}
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
