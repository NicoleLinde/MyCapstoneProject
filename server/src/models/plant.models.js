import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const plantSchema = new Schema({
    name_de: String,
    name_lat: String,
    bienenfreundlich: Boolean,
    falterfreundlich: Boolean,
    vogelfreundlich: Boolean,
    farbe: String
})

const Plant = mongoose.model('plant', plantSchema);


export default Plant;

