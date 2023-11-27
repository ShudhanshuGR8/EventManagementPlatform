import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import a from '../assets/images/c1.jpg'
import b from '../assets/images/c2.jpg'
import c from '../assets/images/c3.jpg'
import e from '../assets/images/Code Veda.png'
import usr from '../assets/icons/user.png'
console.log("upper")
function Events() {

    const [even,seteven]=useState([])
    const [part,setpart]=useState()

    console.log("jdfksj")
    useEffect(()=>{
        // console.log("how")
        const fetchdata= async () =>{
            console.log("how")
            const data=await axios.get('http://localhost:1234/even');
            console.log(data)
            seteven(data.data)
        };

        fetchdata();
    }, [])

    // useEffect(()=>{
    //     const partdata = async ()=>{
    //     const data=await axios.get('http://localhost:1234/part');
    //     console.log(data)

    //   }
    // })
    async function register(eve,message){
      const email=localStorage.getItem('emailid')
      // console.log(eve)
      // console.log(message)
      // console.log(email)
      const data1 = {
        email: email,
        eid:eve,
        ename:message
    }
    console.log(data1)
    const res = await fetch('http://localhost:1234/con', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data1)
        })
        const data = await res.json()
        if (data.status === 'ok') {
            // history.push('/login')
            alert("You have successfully registered in thie event")
        }
        else {
            console.log("Eror Ocuured")
        }
        console.log(data)
    

    }

  return (
    <>
    <div className='container-fluid'>
        <div className='container-fluid' style={{padding:"0",width:"100%",backgroundColor:"#0C2D4A"}}>
        <nav class="navbar">
  <div class="container-fluid">
    <a class="navbar-brand" style={{color:"white"}}>Event</a>
    <form class="d-flex" >
      <img style={{width:"40px",height:"40px"}} src={usr}></img>
    </form>
  </div>
</nav>
        </div>
        <div>
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active" style={{height:"80vh",objectFit:"cover"}}>
      <img src={a} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"  style={{height:"80vh",objectFit:"contain"}}>
      <img src={b} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"  style={{height:"80vh",objectFit:"contain"}}>
      <img src={c} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
        <div>
        {even.map((eve)=>{
            return(<div className='row text-center' style={{margin:"40px"}}>
            <div className='container' style={{display:"flex",width:"60vw",background:"white",padding:"40px",borderRadius:"30px"}}>
                <div><img src={e} style={{width:"250px",height:"300px"}}></img></div>
                <div>
                    <p style={{marginLeft:"30px",fontSize:"2rem"}}>{eve.ename}</p>
                    <p style={{marginLeft:"20px",fontSize:"1rem"}}>Organized by : {eve.org}</p>
                    <p style={{marginLeft:"10px"}}>Date: {eve.sdate}</p>
                    <div style={{display:"flex",marginLeft:"80px"}}>
                        <div><p>Start Time : {eve.stime}</p></div>
                        <div style={{marginLeft:"20px"}}><p>End Time : {eve.etime}</p></div>
                    </div>

                    <div style={{display:"flex",marginLeft:"80px"}}>
                        <div><div type="submit" onClick={()=>register(eve._id,eve.ename)} style={{cursor:"pointer",width:"100px",height:"40px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"black",borderRadius:"10px"}}><p style={{color:"white",marginTop:"15px"}}>Register</p></div></div>
                        <div style={{marginLeft:"20px"}}><p>Event Fee: {eve.fee}</p></div>
                    </div>
                </div>
            </div>
            </div>
            )
        })}
        </div>
        </div>
    </> 
  )
}

export default Events
