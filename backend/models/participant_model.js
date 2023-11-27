const mongoose=require('mongoose');
const Participant=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    sap:{
        type:Number,
        required:true,
        // unique:true
    },
    phone:{
        type:Number,
        required:true,
        // unique:true
    },
    year:{
        type:Number,
        required:false,
    },

    github:{
        type:String,
        required:false,
    },

    hackerrank:{
        type:String,
        required:false,
    },
    linkedinurl:{
        type:String,
        required:false,
    },
    password:{
        type:String,
        required:true
    },

    
},
{collection:'participant-data'}
)

const model=mongoose.model('ParticipantData',Participant);

module.exports=model