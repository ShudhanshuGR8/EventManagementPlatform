import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import bg from '../assets/images/bg.jpg'
function Main() {
  console.log("wnjebjfb")
  return (
    
    
      <div className='container-fluid' style={{backgroundImage:`url(${bg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"100vh"}}>
      <div>
             <h1 className='text-center maintext' style={{color:"#00235B"}}>Welcome to Our Platform</h1>
      </div>

      <div className='container justify-content-center' style={{marginTop:"10%",display:"flex"}}>
        <div col-sm-6>
        <div className='box' style={{width:"350px",height:"350px",backgroundColor:"#ECF2FF",borderRadius:"10%",margin:"20px",alignItems:"center",display:"flex",justifyContent:"center"}}>
          <h3 className='text-center'><Link to="/register" style={{ textDecoration: 'none' }}><span style={{color:"#3F497F"}}> Login as Event creator</span></Link></h3>
          
        </div>
        </div>
        <div col-sm-6>
        <div className='box' style={{width:"350px",height:"350px",backgroundColor:"#ECF2FF",borderRadius:"10%",margin:"20px",alignItems:"center",display:"flex",justifyContent:"center"}}>
        <h3 className='text-center'><Link to="/userregister" style={{ textDecoration: 'none' }}><span style={{color:"#3F497F"}}>Login as Participant</span></Link></h3>
        </div>
        </div>
      </div>
      </div>
    
  )
}

export default Main