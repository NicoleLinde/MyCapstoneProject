import PlantCard from '../components/PlantCard'



export default function Butterfly({ plants, onSelectFavorites, isFavorite, favorites }) {

    const butterflyFilteredPlants = (plants.filter((plant) =>
        plant.falterfreundlich === true))


    return (
        <div>
            <h2>Falter</h2>
            {butterflyFilteredPlants.map((butterflyFilteredPlant) =>
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

        </div>
    )
}