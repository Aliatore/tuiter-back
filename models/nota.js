import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const tuitSchema = new Schema({

    tuit: {type: String, required: [true, 'Tuit Obligatorio']},
    descripcion: String,
    usuarioId: String,
    date: {type: Date, default: Date.now},
    activo: {type:Boolean, default: true}

})

//convertir a modelo
const Tuit = mongoose.model('Tuit', tuitSchema);

export default Tuit;