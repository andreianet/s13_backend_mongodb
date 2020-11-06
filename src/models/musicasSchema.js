const mongoose = require('mongoose')
const Schema = mongoose.Schema

const musicasSchema = new Schema({
    _id: { 
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        require: true
    },

    name:{
        type: String,
        required: true,
        //unique: true //pra não ser repetido

    },

    duration_ms:{
        type: Number,
        required: true,       

    },

    preview_url:{
        type: String,
        required: true,       

    },

    //isso faz qdo for dentro de um OBJETO
    album:[{        
        id: Number,
        release_date: String,
        total_tracks: Number,
        url: String,
    }],

    artists:[{
        id: Number,
        name: String,
    }],
},

    {
        collection: "musicas",
        versionKey: false //apenas para versionar
    }

    );
    
    const musicasCollection = mongoose.model('musicas', musicasSchema)

    module.exports = {musicasCollection}


    //O correto é criar uma nova collection artista e integrar junto com musicas, para não se repetir,
    //já que temos musicas e artistas repetidos


