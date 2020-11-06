const { model } = require('mongoose');
const musicas = require('../models/musicasSchema')

//Obtem todas as musicas
const getMusicas = (req, res) => {
    console.log(req.url);
    musicas.musicasCollection.find((error, musics) => {
        if (error) {
            res.status(500).send(error);
        }else{
            res.status(200).send(musics)
        }
    })
}

//Pelo ID
const getMusicasById = (req, res) => {
    const idParam = req.params.id
    musicas.musicasCollection.findById(idParam,(error, musics) => {
        if (error) {
            return res.status(500).send(error);            
        }else{
            if (musics){
                res.status(200).send(musics)
            }else{
                return res.status(404).send('Music not found: ( ')
            }
        }
    })
}

//Add
const addMusicas = (req,res) => {
    console.log(req.url);
    const musicasBody = req.body
    const musica = new musicas.musicasCollection(musicasBody)

    musica.save((error) => {
        if(error) {
            return res.status(400).send(error);
        } else {
            return res.status(201).send(musicas)
        } 
    })
    
}

//UPDATE
const musicasUpdate = (req, res) => {
    const idParam = req.params.id
    const musicasBody = req.body
    const novo = {new: true} //retorna valor modificado

    musicas.musicasCollection.findByIdAndUpdate(
        idParam,
        {$set: musicasBody}, //com os colchetes não funciona
        novo,
        (error, musics) => {
            if (error){
                return res.status(500).send(error)
            }else if(musics){
                return res.status(200).send(musics)
            }else{
                return res.sendStatus(404)
            }
        }             

    )
}

//DELETE
const deleteMusicas = (req, res) => {
    const idParam = req.params.id
    musicas.musicasCollection.findByIdAndDelete(idParam,(error, musics) =>{
        if (error) {
            return res.status(500).send(error)
        }else{
            if (musics) {
                return res.status(200).send("Music Deleted!")
            }else{
                return res.status(404)
            }
        }
    })
}

module.exports = {
    getMusicas,
    getMusicasById,
    addMusicas,
    musicasUpdate,
    deleteMusicas
}