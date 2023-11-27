const express=require('express');
const app=express();
const cors=require('cors')
const mongoose=require('mongoose');
const User=require('./models/user_model')
const jwt=require('jsonwebtoken')
const Event=require('./models/event_model')
app.use(cors());
const Participant=require('./models/participant_model');
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/Auth')
const Analytics=require('./models/analytics')
const nodemailer = require("nodemailer");

let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "upesacmpr@gmail.com",
      pass: "qknmtubsuwnpunqi",
    },
    tls:{ rejectUnauthorized: false },
  });

  


app.post('/api', async (req,res)=>{
    console.log(req.body)
    try{
            await User.create({
            name:req.body.username,
            email:req.body.email,
            password:req.body.password,
        });
        res.json({status:'ok'})
    }
    catch(err){
        res.json({status:'error',error:'Duplicate email'})
    }
})

app.post('/con', async (req,res)=>{
    console.log(req.body)
    try{
            await Analytics.create({
            email:req.body.email,
            eid:req.body.eid,
            ename:req.body.ename,
        });

        let mail = {
            from: "upesacmpr@gmail.com",
            to: "",
            bcc: req.body.email,
            subject: `Confirmation Mail`,
          
            html: `
              <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              </head>
          
              <body style="background-color:#E7ECEF; padding:5px">
              
              <p style="font-size:20px; color:black">Dear Member, Greetings of the Day!<p>
              <b style="font-size:23px; color:black">Welcome to the house of Innovation, Enthusiasm, and Enlightenment! </b>
           
              </td>
              </tr>
              <tr>
                  <td style="padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;"">
                                              We, the family at UPES ACM and ACM-W Student Chapters, welcome you onboard and promise you an altogether 
                                              different experience of learning, creation, and motivation.<br>
                                             Since 2010, UPES ACM and ACM-W Student Chapters have continued to innovate and strengthen in the tech sector and achieve higher levels year after year. We have consistently achieved notable growth over the years. Our resolve is the overall 
                                             advancement of all members with a particular focus on computing machines. <br> <br>
                                             Build an extensive network by working with some of the most experienced seniors on campus, be a part of multiple insightful webinars and become a better programmer. 
                                             Best of all, make the most of this opportunity.<br> <br>
                                             With a commitment to growth, knowledge, and constant support, we hope the best for you and your future endeavors. <br>
                                             Wishing you good fortune! <br>
                                             Team UPES ACM and ACM-W Student Chapters<br> <br>
                                              Regards, <br>
                                              Team UPES-ACM and ACM-W Student Chapters
                                              <br>
                                              <br>
                                              <br>
                                              <div style="width: 100%!important;position:fixed;bottom:0;height: 15vh;border: 2px solid black; background-color: #003459;text-align: center;">
                                                  <span style="padding-top: 20%;"> <p style="color:#E7ECEF;">Copyright ©  All right reserved | Designed and Developed by</p> <span style="color: white;">UPES ACM Web Development Team</span></span></div>
                  </body>
          
              `,
          };

          mailTransporter.sendMail(mail, function (error) {
            if (error) {
              console.log(error);
            } else {
              console.log("Succesfully sent");
            }
          });

        res.json({status:'ok'})
    }
    catch(err){
        res.json({status:'error',error:'not selected'})
    }
})

app.get('/even', async (req,res)=>{
    Event.find((err,data)=>{
        if(err){
            res.status(500).send(err.message);
            console.log(err);
        }
        else{
            console.log("hello")
            res.status(201).send(data)
        }
    })
})


app.get('/part', async (req,res)=>{
    Participant.find((err,data)=>{
        if(err){
            res.status(500).send(err.message);
            console.log(err);
        }
        else{
            console.log("hello")
            res.status(201).send(data)
        }
    })
})

app.get('/par', async (req,res)=>{
    Analytics.find((err,data)=>{
        if(err){
            res.status(500).send(err.message);
            console.log(err);
        }
        else{
            console.log("hello")
            res.status(201).send(data)
        }
    })
})

app.post('/dip', async (req,res)=>{
    console.log(req.body)
    try{
            await Participant.create({
                name: req.body.name,
                email:req.body.email,
                sap:req.body.sap,
                phone:req.body.phone,
                year:req.body.year,
                github:req.body.github,
                hackerrank:req.body.hackerrank,
                linkedinurl:req.body.linkedinurl,
                password: req.body.password,
        });
        res.json({status:'ok'})
    }
    catch(err){
        console.log(err)
        res.json({status:'error',error:'Duplicate sap'})
    }
})


app.post('/create',async (req,res)=>{
    console.log(req.body)
    
    
    try{
        // const token=req.headers['x-access-token']
        // const decoded=jwt.verify(token,'secret123')
        // const email=decoded.email

        await Event.create({
        ename:req.body.ename,
        org:req.body.org,
        sdate:req.body.sdate,
        edate:req.body.edate,
        stime:req.body.stime,
        etime:req.body.etime,
        fee:req.body.fee,
        // email:localStorage.getItem()
    });

    res.json({status:'ok'})
}
catch(err){
    res.json({status:'error'})
}
})


app.post('/login', async (req,res)=>{
    console.log(req.body)
        const user=await User.findOne({
            email:req.body.email,
            password:req.body.password
        });
        if(user){

            const token=jwt.sign(
                {
                    name:user.name,
                    email:user.email
                },
                'secret123'
            )
            console.log(token)
            return res.json({status:'ok',user:token})
           
        }
        else{
            return res.json({status:'error',user:false})
        }
})


app.post('/loginp', async (req,res)=>{
    console.log(req.body)
        const user=await Participant.findOne({
            sap:req.body.sap,
            password:req.body.password
        });
        if(user){

            const token=jwt.sign(
                {
                    sap:user.sap
                },
                'secret1234'
            )
            console.log(token)
            return res.json({status:'ok',user:token,emailid:user.email})
           
        }
        else{
            return res.json({status:'error',user:false})
        }
})


app.post('/quote', async (req,res)=>{

    const token=req.headers['x-access-token']
    try{
    const decoded=jwt.verify(token,'secret123')
    const email=decoded.email
    await User.updateOne({email:email},{$set:{quote:req.body.quote}})

    return res.json({status:'ok'})
    }
    catch(error)
    {
         console.log(error)
         res.json({status:'error',error:'invalid token'})
    }
})

app.get('/quote', async (req,res)=>{

    const token=req.headers['x-access-token']
    try{
    const decoded=jwt.verify(token,'secret123')
    const email=decoded.email
    const user=await User.findOne({email:email})

    return res.json({status:'ok',quote:user.quote})
    }
    catch(error)
    {

        console.log(error)
        res.json({status:'error',error:'invalid token'})
    }
})

app.get("/hello",(req,res)=>{
    res.send("Hello world")
})

app.listen(1234,()=>{
    console.log("Server is running on port number 1234")
})