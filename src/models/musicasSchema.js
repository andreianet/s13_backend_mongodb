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
        unique: true //pra não ser repetido

    },

    duration_ms:{
        type: String,
        required: true,       

    },

    preview_url:{
        type: String,
        required: true,       

    },

    album:[{
        type: String,
        required: true,

    }],

    artists:[{
        type: String,
        required: true,
    }],
},

    {
        collection: "musicas",
        versionKey: false
    }

    );
    
    const musicasCollection = mongoose.model('musicas', musicasSchema)

    module.exports = {musicasCollection}


