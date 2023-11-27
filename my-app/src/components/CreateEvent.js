import React, { useState } from "react";
// import Calendar from 'react-calendar'
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
function CreateEvent() {


    const history=useHistory()
  const [ename,setename]=useState('')
  const [org,setorg]=useState('')
  const [sdate,setsdate]=useState('')
  const [edate,setedate]=useState('')
  const [stime,setstime]=useState('')
  const [etime,setetime]=useState('')
  const [about,setabout]=useState('')
  const [url,seturl]=useState('')
  const [fee, setfee]=useState(0)
  const [type,settype]=useState(null)
  
  
  
  async function creaevent(e){
    e.preventDefault();
    
    const data1 = {
      ename:ename,
      org:org,
      sdate:sdate,
      edate:edate,
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
        <>
            

            <div className="container-fluid" style={{ backgroundColor: "", dispay: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className="conatiner text-center"style={{ backgroundColor: "", dispay: "flex", justifyContent: "center", alignItems: "center"}} >
                    <h1 style={{ marginTop: "" }}>Create Event </h1>
                    <form onSubmit={creaevent}>
                        <div class=" input mb-3" style={{ display: "flex", flexDirection: "column",  dispay: "flex", justifyContent: "center", alignItems: "center"}}>
                            {/* <label for="name" class="form-label">Name</label> */}
                            <input value={ename} onChange={(e)=>setename(e.target.value)} type="text" placeholder="Event Title" style={{ height: "60px", width: "50%", outline: "none", padding: "0 0 0 40px", background: "rgba(255,255,255,0.1)" }} />
                        </div>

                        <div class="input mb-3" style={{ display: "flex", flexDirection: "column", dispay: "flex", justifyContent: "center", alignItems: "center"}}>
                            {/* <label for="exampleInputEmail1" class="form-label">Email address</label> */}
                            <input value={org} onChange={(e)=>setorg(e.target.value)} type="text" placeholder="Organizer" style={{ height: "60px", width: "50%", outline: "none", padding: "0 0 0 40px", background: "rgba(255,255,255,0.1)" }} />

                        </div>

                        <div class=" input mb-3" style={{ display: "flex", flexDirection: "column", dispay: "flex", justifyContent: "center", alignItems: "center"}}>
                            {/* <label for="name" class="form-label">Name</label> */}
                            <input value={fee} onChange={(e)=>setfee(e.target.value)} type="number" placeholder="Event Fee" style={{ height: "60px", width: "50%", outline: "none", padding: "0 0 0 40px", background: "rgba(255,255,255,0.1)" }} />
                        </div>

                        <div class=" input mb-3" style={{ display: "flex", flexDirection: "column", dispay: "flex", justifyContent: "center", alignItems: "center"}}>
                            {/* <label for="name" class="form-label">Name</label> */}
                            <input value={url} onChange={(e)=>seturl(e.target.value)} type="text" placeholder="Website URL" style={{height: "60px", width: "50%", outline: "none", padding: "0 0 0 40px", background: "rgba(255,255,255,0.1)" }} />
                        </div>

                        <div class=" input mb-3" style={{ display: "flex", flexDirection: "column", dispay: "flex", justifyContent: "center", alignItems: "center"}}>
                            {/* <label for="name" class="form-label">Name</label> */}
                            <input value={about} onChange={(e)=>setabout(e.target.value)} type="text" placeholder="About Event" style={{height: "130px", width: "50%", outline: "none", padding: "0 50px 50px 40px", background: "rgba(255,255,255,0.1)" }} />
                        </div>

                        <div className="box" style = {{dispay: "flex", justifyContent: "center", alignItems: "center"}}>
                            <select value={type} onChange={(e)=>settype(e.target.value)} className = "text-start" style={{ width: "170px", height: "40px", border: "solid"}}>
                                <option value="type">Promotion</option>
                                <option value="coding">Coding</option>
                                <option value="conference">Conference</option>
                                <option value="quiz">Quiz</option>
                            </select>
                        </div>

                        <hr style={{ height: "2px", borderWidth: "0", color: "gray", backgroundColor: "gray", marginLeft: "120px", marginRight: "120px", marginTop: "50px" }}></hr>

                        {/* <h1 style={{ marginTop: "50px" }}>Location</h1>
                        <div class="input mb-3" style={{ display: "flex", flexDirection: "column", dispay: "flex", justifyContent: "center", alignItems: "center"}}>
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input value={email} onChange={(e) => setemail(e.target.value)} type="text" placeholder="Location" style={{height: "60px", width: "50%", outline: "none", padding: "0 0 0 40px", background: "rgba(255,255,255,0.1)" }} />

                        </div> */}

                        <hr style={{ height: "2px", borderWidth: "0", color: "gray", backgroundColor: "gray", marginLeft: "120px", marginRight: "120px", marginTop: "50px" }}></hr>

                        <h1 style={{ marginTop: "50px" }}>Date and Time</h1>

                        <div className="row">
                            <div className="col">
                                <div class="mb-3" style={{ display: "flex", flexDirection: "column" }}>
                                    <label for="EventDate" class="form-label" style={{ marginLeft: "50px" }}>Event Start Date</label>
                                    <input value={sdate} onChange={(e)=>setsdate(e.target.value)} type="date" class="form-control" style={{ marginLeft: "320px", height: "45px", fontSize: "15px", width: "40%", outline: "none", background: "rgba(255,255,255,0.7)" }} />
                                </div>
                            </div>

                            <div className="col">
                                <div class="mb-3" style={{ display: "flex", flexDirection: "column" }}>
                                    <label for="EventEndTime" class="form-label" style={{ marginRight: "190px" }}>Event Start Time</label>
                                    <input value={stime} onChange={(e)=>setstime(e.target.value)} type="time" class="form-control" style={{ marginLeft: "30px", height: "45px", fontSize: "15px", width: "40%", outline: "none", background: "rgba(255,255,255,0.7)" }} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div class="mb-3" style={{ display: "flex", flexDirection: "column" }}>
                                    <label for="EventDate" class="form-label" style={{ marginLeft: "50px" }}>Event End Date</label>
                                    <input value={edate} onChange={(e)=>setedate(e.target.value)} type="date" class="form-control" style={{ marginLeft: "320px", height: "45px", fontSize: "15px", width: "40%", outline: "none", background: "rgba(255,255,255,0.7)" }} />
                                </div>
                            </div>
                            <div className="col">
                                <div class="mb-3" style={{ display: "flex", flexDirection: "column" }}>
                                    <label for="EventEndTime" class="form-label" style={{ marginRight: "190px" }}>Event End Time</label>
                                    <input value={etime} onChange={(e)=>setetime(e.target.value)} type="time" class="form-control" style={{ marginLeft: "30px", height: "45px", fontSize: "15px", width: "40%", outline: "none", background: "rgba(255,255,255,0.7)" }} />
                                </div>
                            </div>
                        </div>

                        <div class="input mb-3" style={{ display: "flex", flexDirection: "column" }}>
                            <input type="submit" value="Save and Continue" style={{ marginLeft: "auto", height: "45px", fontSize: "15px", width: "20%", borderRadius: "10px", outline: "none", background: "rgba(255,255,255,0.7)" }} />
                        </div>

                    </form>
                </div>
            </div>
        </>
    )

}

export default CreateEvent;