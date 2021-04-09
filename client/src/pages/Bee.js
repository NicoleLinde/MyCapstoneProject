
import { useState } from 'react'
import styled from 'styled-components'
import PlantCard from '../components/PlantCard'


export default function Bee({ plants, onSelectFavorites, isFavorite, favorites }) {
    const [color, setColor] = useState('all')
    const [location, setLocation] = useState('all')

    const beeFilteredPlants = (plants.filter((plant) =>
        plant.bienenfreundlich === true))


    const colorFilter = beeFilteredPlants.map((plant) => plant.farbe);
    colorFilter.unshift('all');
    let chosenColor = colorFilter.filter((c, index) => {
        return colorFilter.indexOf(c) === index;
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

    const data = beeFilteredPlants.filter(byColor).filter(byLocation);

    return (
        <>
            <h2>Bienen</h2>
            <Wrapper>
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


`
