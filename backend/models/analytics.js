const mongoose=require('mongoose');

const Analytics=new mongoose.Schema({

    
    email:{
        type:String,
        required:true
    },

    eid:{
        type:String,
        required:true
    },

    ename:{
        type:String,
        required:true
    }



},
{collection:'analytics-data'}
)

const model=mongoose.model('analyticsData',Analytics);

module.exports=model