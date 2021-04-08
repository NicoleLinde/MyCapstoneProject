import PlantCard from '../components/PlantCard'



export default function Bird({ plants, onSelectFavorites, isFavorite, favorites }) {

    const birdFilteredPlants = (plants.filter((plant) =>
        plant.vogelfreundlich === true))

    return (
        <div>

            <h2>Vögel</h2>
            {birdFilteredPlants.map((birdFilteredPlant) =>
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


        </div>

    )
}