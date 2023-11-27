import React from 'react'
import '../App.css'
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
const Quote = () => {
  const history = useHistory()
  const [quote, setQuote] = useState('')
  const [tempQuote, setTempQuote] = useState('')

  async function populateQuote() {
    const req = await fetch('http://localhost:1234/quote', {
      headers: {
        'x-access-token': localStorage.getItem('token')
      }
    })
    const data = await req.json()
    if (data.status === 'ok') {
      setQuote(data.quote)
    }
    else {
      alert(data.error)
    }
    console.log(data)
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const user = jwt.decode(token)
      if (!user) {
        localStorage.removeItem('token')
        history.replace('/login')
      }
      else {
        populateQuote()
      }
    }
  }, [])

  async function updateQuote(event) {
    event.preventDefault()
    const req = await fetch('http://localhost:1234/quote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      },
      body: JSON.stringify({
        quote: tempQuote,
      })
    })
    const data = await req.json()
    if (data.status === 'ok') {
      setTempQuote('')
      setQuote(tempQuote)
    }
    else {
      alert(data.error)
    }
  }

  const [isshown,setIsShown]=useState(false)

  // const handleClick=el=>{

  //   setIsShown()
  // }
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
          
          <Link to="/create" style={{textDecoration:"none"}}><div type="button" className='plus' style={{border:"2px solid black",width:"50px",height:"50px",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <h1 style={{color:"black"}}>+</h1>
            </div></Link>
            <h1>Host Event</h1>
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

export default Quote