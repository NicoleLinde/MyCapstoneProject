import { useState } from 'react'
import Burger from '../BurgerMenu/Burger'
import Menu from '../BurgerMenu/Menu'



export default function BurgerMenu({
    color,
    setColor,
    location,
    setLocation,
    chosenColor,
    chosenLocation
}) {
    const [open, setOpen] = useState(false)

    // const [color, setColor] = useState('all')
    // const [location, setLocation] = useState('all')

    // const colorFilteredPlants = selectedPlants.map((plant) => plant.farbe);
    // colorFilteredPlants.unshift('all');
    // let chosenColor = colorFilteredPlants.filter((c, index) => {
    //     return colorFilteredPlants.indexOf(c) === index;
    // })

    // const byColor = (plant) => {
    //     if (color === 'all') return plant;
    //     return plant.farbe === color;
    // }

    // const locationFilter = selectedPlants.map((plant) => plant.pflanzort);
    // locationFilter.unshift('all');
    // let chosenLocation = locationFilter.filter((c, index) => {
    //     return locationFilter.indexOf(c) === index;
    // })

    // const byLocation = (plant) => {
    //     if (location === 'all') return plant;
    //     return plant.pflanzort === location;
    // }

    // const getdata =
    //     selectedPlants.filter(byColor).filter(byLocation)
    // console.log('7', getdata)

    // const newData = () =>
    //     setBurgerPlant(getdata);


    return (
        <>
            <Burger open={open} setOpen={setOpen} />
            <Menu
                open={open}
                setOpen={setOpen}
                color={color}
                setColor={setColor}
                location={location}
                setLocation={setLocation}
                chosenColor={chosenColor}
                chosenLocation={chosenLocation} />
        </>
    )
}
