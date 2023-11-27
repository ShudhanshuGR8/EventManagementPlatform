import React from 'react'
import '../App.css'
import axios from 'axios'
import { useEffect } from 'react'
import jwt from 'jsonwebtoken'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import over from '../assets/icons/overview.png'
import a from '../assets/icons/analytics.png'
import b from '../assets/icons/info.png'
import c from '../assets/icons/participant.png'
import d from '../assets/icons/contactmail.png'
import e from '../assets/icons/profile.png'
import f from '../assets/icons/help-desk.png'
import logo from '../assets/icons/acm w_logo.png'



function ParticipantInfo() {

    const [datas,setdata]=useState([])

    useEffect(()=>{
        // console.log("how")
        const fetchdata= async () =>{
            console.log("how")
            const data=await axios.get('http://localhost:1234/par');
            // console.log(data.data)
            setdata(data.data)
        };

        fetchdata();
    }, [])

    console.log(datas)


  return (
    <div>

    <div className='container-fluid' style={{width:"100%",height:"100%"}}>
      <div className='row'>
        <div className='col-2' style={{height:"100vh",backgroundColor:"white",width:"",position:"sticky"}}>

        <div className='logo'>
          <a href={'https://upesacm.org/'}><img src={logo} style={{padding:"30px",width:"200px",height:"100%",cursor:"pointer"}}></img></a>
        </div>
        <hr style={{marginTop:"0px",marginLeft:"20px",color:"black",width:"150px"}}></hr>
        
        <div style={{display:"flex",marginTop:"30px",cursor:"pointer"}}>
        <div>
          <img src={over} style={{marginLeft:"30px",marginRight:"10px", width:"30px",height:"30px"}}></img>
        </div>
        <div>
          <Link to='/quote' style={{textDecoration:"none"}}><p style={{color:"black"}}>Overview</p></Link>
        </div>
        </div>

        <div style={{display:"flex",marginTop:"20px",cursor:"pointer"}}>
        <div>
          <img src={a} style={{marginLeft:"30px",marginRight:"10px", width:"30px",height:"30px"}}></img>
        </div>
        <div>
          <p>Analytics</p>
        </div>
        </div>

        <div style={{display:"flex",marginTop:"20px",cursor:"pointer"}}>
        <div>
          <img src={b} style={{marginLeft:"30px",marginRight:"10px", width:"30px",height:"30px"}}></img>
        </div>
        <div>
          <Link to='/eventinfo' style={{textDecoration:"none"}}><p style={{color:"black"}}>Event info</p></Link>
        </div>
        </div>


        <div style={{display:"flex",marginTop:"20px",cursor:"pointer"}}>
        <div>
          <img src={c} style={{marginLeft:"30px",marginRight:"10px", width:"30px",height:"30px"}}></img>
        </div>
        <div>
          <Link to='/partinfo' style={{textDecoration:"none"}}><p style={{color:"black"}}>Participant</p></Link>
        </div>
        </div>

        <a style={{textDecoration:"none"}} href={'https://upesacm.org/contact'}><div style={{display:"flex",marginTop:"20px",cursor:"pointer"}}>
        <div>
          <img src={d} style={{marginLeft:"30px",marginRight:"10px", width:"30px",height:"30px"}}></img>
        </div>
        <div>
          <p style={{color:"black"}}>Contact-Mail</p>
        </div>
        </div></a>

        <div style={{display:"flex",marginTop:"20px",cursor:"pointer"}}>
        <div>
          <img src={e} style={{marginLeft:"30px",marginRight:"10px", width:"30px",height:"30px"}}></img>
        </div>
        <div>
          <Link to="/profile" style={{textDecoration:"none"}}><p style={{color:"black"}}>Profile</p></Link>
        </div>
        </div>

        <div style={{display:"flex",marginTop:"20px",cursor:"pointer"}}>
        <div>
          <img src={f} style={{marginLeft:"30px",marginRight:"10px", width:"30px",height:"30px"}}></img>
        </div>
        <div>
          <p>HelpDesk</p>
        </div>
        </div>

        
        
        </div>
        <div className='col-10'>
        <div className='row' style={{width:"",height:"30vh",backgroundColor:"#4EB7E6"}}>
          <div className='row' style={{justifyContent:""}}>
            
          </div>
        </div>
        <div className='row' style={{display:"flex",alignItems:"center",justifyContent:'center',position:"relative",bottom:"40px"}}>
          <div className='col-10' style={{display:"flex",alignItems:"center",justifyContent:'center',height:"70vh",backgroundColor:"white",borderRadius:"20px",border:"2px solid #4EB7E6"}}>
          
          <div className='container'>
          <div className='row' style={{justifyContent:"space-evenly" ,marginTop:"20px"}}>
                <div className='col'><p><span>Email: </span></p></div>
                <div className='col'><p><span>Event ID: </span></p></div>
                <div className='col'><p><span>Event Name: </span></p></div>
                </div>
            {datas.map((data)=>{
                return (
                <div className='row' style={{justifyContent:"space-evenly",marginTop:"20px"}}>
                <div className='col'><p>{data.email}</p></div>
                <div className='col'><p>{data.eid}</p></div>
                <div className='col'><p>{data.ename}</p></div>
                </div>)
            })}
          </div>
          
          </div>
        </div>
        </div>
      </div>
    </div>
      
      {/* <h1>Your Quote: {quote || 'No quote found'}</h1>
    <form onSubmit={updateQuote}>
    <input type="text" placeholder="Quote" value={tempQuote} onChange={(e)=>setTempQuote(e.target.value)}/>
    <button type='submit' value='Update Quote'>Update</button>
    </form> */}
    </div>
  )
}

export default ParticipantInfo
