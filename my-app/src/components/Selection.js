import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Selection() {
  return (
    <div className='container justify-content-center' style={{marginTop:"30px"}} >
      <div className='container inner' style={{borderRadius:"30px",width:'50%',backgroundColor:"#3A1078"}}>
        <div className='row'>
        <Link to="formcoding" style={{ textDecoration: 'none' }}>
            <div className='selectiontext text-center'>
                <h3 className='selecttext' style={{color:"white"}}>Coding Event</h3>
                <hr style={{color:"whitesmoke"}}></hr>
            </div>
            </Link>
        </div>

        <div className='row'>
        <Link to="formcoding" style={{ textDecoration: 'none' }}>
            <div className='selectiontext text-center'>
                <h3 className='selecttext' style={{color:"white"}}>Conference</h3>
                <hr style={{color:"whitesmoke"}}></hr>
            </div>
        </Link>
        </div>

        <div className='row'>
        <Link to="formcoding" style={{ textDecoration: 'none' }}>
            <div className='selectiontext text-center'>
                <h3 className='selecttext' style={{color:"white"}}>Quiz Event</h3>
                <hr style={{color:"whitesmoke"}}></hr>
            </div>
            </Link>
        </div>

       

        <div className='row'>
        <Link to="formcoding" style={{ textDecoration: 'none' }}>
            <div className='selectiontext text-center'>
                <h3 className='selecttext' style={{color:"white"}}>Fest's</h3>
                <hr style={{color:"whitesmoke"}}></hr>
            </div>
            </Link>
        </div>

        <div className='row'>
        <Link to="formcoding" style={{ textDecoration: 'none' }}>
            <div className='selectiontext text-center'>
                <h3 className='selecttext' style={{color:"white"}}>Technical Event</h3>
                <hr style={{color:"whitesmoke"}}></hr>
            </div>
            </Link>
        </div>

        <div className='row'>
        <Link to="formcoding" style={{ textDecoration: 'none' }}>
            <div className='selectiontext text-center'>
                <h3 className='selecttext' style={{color:"white"}}>Gaming Events</h3>
                <hr style={{color:"whitesmoke"}}></hr>
            </div>

            </Link>
        </div>
      </div>
    </div>
  )
}

export default Selection
