import React, { useState } from 'react'
import '../App.css'
import bgform from '../assets/images/bgform.avif'
import { useHistory } from 'react-router-dom'
function Form() {
  const history=useHistory()
  const [ename,setename]=useState('')
  const [org,setorg]=useState('')
  const [sdate,setsdate]=useState('')
  const [stime,setstime]=useState('')
  const [etime,setetime]=useState('')
  const [about,setabout]=useState('')
  const [url,seturl]=useState('')
  const [fee, setfee]=useState(0)
  async function createvent(e){
    e.preventDefault();

    const data1 = {
      ename:ename,
      org:org,
      sdate:sdate,
      stime:stime,
      etime:etime,
      fee:fee

  }
  const res = await fetch('http://localhost:1234/create', {
      method: "POST",
      headers: {
          "content-type": "application/json"
      },
      body: JSON.stringify(data1)
  })
  const data = await res.json()
  if (data.status === 'ok') {
      history.push('/quote')
  }
  else {
      console.log("Eror Ocuured")
  }
  console.log(data)

  }
  return (
    <div>
    <div className='container-fluid' style={{width:"100%",backgroundImage:`url(${bgform})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
      <div className = "container quiz" style={{width:"50vw",backgroundColor:"black",borderRadius:"20px",height:"110vh"}}>
    <form onSubmit={createvent}>
        <div className="mb-3">
          <label  className="form-label"><span style={{color:"white"}}>Event Name </span><span style={{color:"brown"}}>*</span> </label>
          <input value={ename} onChange={(e)=>setename(e.target.value)} type="text" className="form-control" id="EventName" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label  className="form-label"><span style={{color:"white"}}>Name of Organisation</span></label>
          <input value={org} onChange={(e)=>setorg(e.target.value)} type="text" className="form-control" id="NameofOrganisation"/>
        </div>
        <div className="mb-3">
          <label  className="form-label"><span style={{color:"white"}}>Website URL</span></label>
          <input value={url} onChange={(e)=>seturl(e.target.value)} type="url" className="form-control" id="WebsiteURL"/>
        </div>
        <div className="mb-3">
          <label  className="form-label"><span style={{color:"white"}}>About Event </span><span style ={{color:"brown"}}>*</span> </label>
          <input value={about} onChange={(e)=>setabout(e.target.value)} type="text" className="form-control" id="AboutEvent"/>
        </div>
        <div className="mb-3">
          <label className="form-label"><span style={{color:"white"}}>Event Date </span><span style ={{color:"brown"}}>*</span> </label>
          <input value={sdate} onChange={(e)=>setsdate(e.target.value)} type="date" className="form-control" id="EventDate"/>
        </div>
        <div className="mb-3">
          <label  className="form-label"><span style={{color:"white"}}>Event Start Time</span> <span style ={{color:"brown"}}>*</span> </label>
          <input value={stime} onChange={(e)=>setstime(e.target.value)} type="time" className="form-control" id="EventStartTime"/>
        </div>
        <div className="mb-3">
          <label  className="form-label"><span style={{color:"white"}}>Event End Time </span><span style ={{color:"brown"}}>*</span> </label>
          <input value={etime} onChange={(e)=>setetime(e.target.value)} type="time" className="form-control" id="EventEndTime"/>
        </div>
        <div className="mb-3">
          <label  className="form-label"><span style={{color:"white"}}>Event Fee</span> <span style ={{color:"brown"}}>*</span> </label>
          <input value={fee} onChange={(e)=>setfee(e.target.value)} type="number" className="form-control" id="EventFee"/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" ><span style={{color:"white"}}>Check me out</span></label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
  </div>
    </div>
  )
}

export default Form
