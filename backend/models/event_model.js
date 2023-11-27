const mongoose=require('mongoose');

const Event=new mongoose.Schema({

    // email:{
    //     type:String,
    //     required:true
    // },
    ename:{
        type:String,
        required:true
    },

    org:{
        type:String,
        required:true
    },

    sdate:{
        type:String,
        required:true
    },
    edate:{
        type:String,
        required:true
    },
    stime:{
        type:String,
        required:true
    },    
    etime:{
        type:String,
        required:true
    },

    fee:{
        type:String,
        required:true
    }



},
{collection:'event-data'}
)

const model=mongoose.model('eventData',Event);

module.exports=model