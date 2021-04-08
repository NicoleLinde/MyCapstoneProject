import Plant from '../models/plant.models.js';


const getPlants = (req, res) => {
    Plant.find()
        .then(plant => res.json(plant))
        .catch(err => res.status(400).json('Error:' + err))

}


const postPlants = (req, res) => {
    const newPlant = new Plant({
        name_de: req.body.name_de,
        name_lat: req.body.name_lat,
        bienenfreundlich: req.body.bienenfreundlich,
        falterfreundlich: req.body.falterfreundlich,
        vogelfreundlich: req.body.vogelfreundlich,
        farbe: req.body.farbe
    });

    newPlant.save()
        .then((plant) => res.json(`${plant.name_de} added!`))
        .catch(err => res.status(400).json('Error' + err));


}

export { getPlants, postPlants };