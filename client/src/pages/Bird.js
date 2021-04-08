import PlantCard from '../components/PlantCard'



export default function Bird({ plants }) {

    const birdFilteredPlants = (plants.filter((plant) =>
        plant.vogelfreundlich === true))

    return (
        <div>

            <h2>Vögel</h2>
            {birdFilteredPlants.map((birdFilteredPlant) => (
                (<PlantCard
                    image={birdFilteredPlant.image}
                    name_de={birdFilteredPlant.name_de}
                    name_lat={birdFilteredPlant.name_lat}
                    bienenfreundlich={birdFilteredPlant.bienenfreundlich}
                    falterfreundlich={birdFilteredPlant.falterfreundlich}
                    vogelfreundlich={birdFilteredPlant.vogelfreundlich}
                    standort={birdFilteredPlant.standort}
                    wasser={birdFilteredPlant.wasser}
                />)))}


        </div>

    )
}