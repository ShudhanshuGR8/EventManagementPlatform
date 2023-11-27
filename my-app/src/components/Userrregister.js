import React from 'react'
import { useState,useEffect } from 'react'
import {Link,useHistory} from 'react-router-dom'
function Userrregister() {
    console.log("hBdjhdbbbdad")

    const history =useHistory()
    const [name, setname]=useState('')
    const [email,setemail]=useState('')
    const [sap,setsap]=useState()
    const [phone,setphone]=useState(0)
    const [year,setyear]=useState(1)
    const [github,setgituser]=useState('')
    const [hackerrank,sethackerrank]=useState('')
    const [linkedinurl,setlinkedin]=useState('')
    const [password,setpassword]=useState('')

    async function RegisterUsertop(e)
    {
        e.preventDefault();
        const data1 = {
            name: name,
            email:email,
            sap:sap,
            phone:phone,
            year:year,
            github:github,
            hackerrank:hackerrank,
            linkedinurl:linkedinurl,
            password: password,

        }
        
        const res = await fetch('http://localhost:1234/dip', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data1)
        })
        const data = await res.json()
        console.log(data.status)

        if (data.status === 'ok') {
            history.push('/loginparticipant')
        }
        else {
            console.log("Eror Ocuured")
        }
        console.log(data)
    }
    return (
        <>
            <div className="container-fluid" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>


                <div className="container" style={{ marginTop: "5%" }}>
                    <h1 className="text-center">User Registration</h1>
                    <div className="container text-center">
                        <form onSubmit={RegisterUsertop}>
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input value={name} onChange={(e) => setname(e.target.value)} type="text" placeholder="Name" />

                            </div>
                            <div class="mb-3">
                                <label class="form-label">Email</label>
                                <input value={email} onChange={(e) => setemail(e.target.value)}  placeholder="Email" />

                            </div>
                            <div class="mb-3">
                                <label class="form-label">SAP_ID</label>
                                <input value={sap} onChange={(e) => setsap(e.target.value)}  placeholder="SAP_ID" />

                            </div>
                            <div class="mb-3">
                                <label  class="form-label">Phone No. </label>
                                <input value={phone} onChange={(e) => setphone(e.target.value)} type="number" placeholder="Phone Number" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Graduation year</label>
                                <input value={year} onChange={(e) => setyear(e.target.value)} type="number" placeholder="Year of study" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Github UserName</label>
                                <input value={github} onChange={(e) => setgituser(e.target.value)} type="text" placeholder="UserName" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">hackerrank Username</label>
                                <input value={hackerrank} onChange={(e) => sethackerrank(e.target.value)} type="text" placeholder="HackerRank UserName" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">LinkedIn URL</label>
                                <input value={linkedinurl} onChange={(e) => setlinkedin(e.target.value)} type="text" placeholder="LinkedIn URL" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" placeholder="Password" />
                            </div>

                            <button type="submit" value="Loginp" class="btn btn-primary">Submit</button>

                        </form>
                    </div>
                    <div>
                        <div className="text-center">
                            <span className="text-center">Already have an account? <Link to="/loginparticipant">Login</Link></span>
                        </div>

                    </div>

                    {/* <ToastContainer /> */}
                </div>
            </div>
        </>
    )
}

export default Userrregister
