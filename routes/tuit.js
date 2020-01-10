import express from 'express';
const router = express.Router();

// importando modelo Tuit
import Tuit from '../models/nota'


//nuevo tuit
router.post('/nuevo-tuit', async(req, res) => {
    const body = req.body;
    try {
        const tuitDB = await Tuit.create(body);
        res.status(200).json(tuitDB)
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error inesperado',
            error
        })
    }
});

//get con parametros
router.get('/tuit/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const tuitDB = await Tuit.findOne({_id});
        res.json(tuitDB);   
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Error inesperado',
            error
        })
    }
});

//Get con todos los parametros
router.get('/tuit', async(req, res) => {

    try {
        
        const tuitDB = await Tuit.find();
        res.json(tuitDB)


    } catch (error) {
        return res.status(400).json({
            mensaje: 'Error inesperado',
            error
        })
    }

})


//Eliminar un tuit
router.delete('/tuit/:id', async(req, res) => {
    
    const _id = req.params.id;

    try {

        const tuitDB = await Tuit.findByIdAndDelete({_id});
        res.json(tuitDB);

        if (!tuitDB) {
            return res.status(400).json({
                mensaje: 'No se encuentra el Id del Tuit',
                error
            })
        }
        
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Error inesperado',
            error
        })
    }
});

//editar un tuit
router.put('/tuit/:id', async(req, res) => {

    const _id = req.params.id;
    const body = req.body;

    try {
        
        const tuitDB = await Tuit.findByIdAndUpdate(_id, body, {new: true});
        res.json(tuitDB);


    } catch (error) {
        return res.status(400).json({
            mensaje: 'Error inesperado',
            error
        })
    }

})




//aqui exporte el router
module.exports = router;