import React, { useState } from 'react'
import {ToastContainer,toast} from 'react-toastify'
import { Link } from 'react-router-dom';
import loginadmin from '../assets/images/login_admin.avif';
function Register() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    async function loginUsert(e) {
        e.preventDefault();
        const data1 = {
            email: email,
            password: password
        }
        const res = await fetch('http://localhost:1234/login', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data1)
        })
        const data = await res.json()
        if (data.user) {
            localStorage.setItem('token', data.user)
            alert('Login Successful');
            window.location.href = "/Quote"
        }
        else {
            alert("please check your id password")
        }

        console.log(data)
    }
    return (
        <>
        <section style= {{width: '100%', height: "100vh", backgroundColor: ""}}>
            <div className="container" style = {{height: "80vh", backgroundColor: '#EFEFEF', position: "relative", top: "100px", borderRadius: "5vh"}}>
            <div className = "row" style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
        <div className = "col text-center">
        <div className='box text-center'>
            <img src = {loginadmin} style = {{width: "100%", height: "80vh", objectFit: "contain", position: "relative", bottom: "40px", borderRadius: "5vh"}}></img>
            </div>
        </div>
        <div className = "col text-center">
        <div className="container-fluid" style={{display:"flex",justifyContent:"center",alignItems:"center", minHeight: '90vh'}}>
            <div className="container" style={{marginTop:"10%", display: "flex", flexDirection: "column", padding: "0 15px 0 15px"}}> 
                <h1 className="text-center" style = {{fontFamily: 'Playfair Display', fontSize: "30px", isplay: "flex", justifyContent: "center", padding: "10px 0 10px 0px"}}>Hello!</h1>
                <div className="container text-center">
                    <form onSubmit={loginUsert}>
                        <div class="input mb-3" style = {{display: "flex", flexDirection: "column"}}>
                            {/* <label for="exampleInputEmail1" class="form-label">Email address</label> */}
                            <input value={email} onChange={(e) => setemail(e.target.value)} type="email" placeholder="Email" style = {{height: "45px", width: "87%", outline: "none", borderRadius: "100px", padding: "0 0 0 45px", background: "rgba(255,255,255,0.1)"}}/>
                            <i class='bx bx-envelope' style = {{position: "relative", top: "-33px", left: "180px"}}></i>
                        </div>
                        <div class="input mb-3" style = {{display: "flex", flexDirection: "column"}}>
                            {/* <label for="exampleInputPassword1" class="form-label">Password</label> */}
                            <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" placeholder="Password" style = {{height: "45px", width: "87%", outline: "none", borderRadius: "100px", padding: "0 0 0 45px", background: "rgba(255,255,255,0.1)"}}/>
                            <i class='bx bx-lock-alt' style = {{position: "relative", top: "-33px", left: "180px"}} ></i>
                        </div>
                        <div class="input mb-3" style = {{display: "flex", flexDirection: "column"}}>
                        <input type="submit" value="Login" style = {{height: "45px", fontSize: "15px", width: "87%", border: "none", borderRadius: "30px", outline: "none", background: "rgba(255,255,255,0.7)"}}/>
                        </div>
                        {/* <input value={name} onChange={(e)=>setname(e.target.value)} type="text" placeholder="Name"></input>
                <input value={email} onChange={(e)=>setemail(e.target.value)} type="email" placeholder="Email"></input>
                <input value={password} onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="Password"></input>

                <br></br>
                <button type="submit" value="Login">Submit</button> */}
                        <div className="bottom" style = {{display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: "small", marginTop: "10px"}}>
                            <div className="left " style = {{display : "flex"}}>
                                <input type = "checkbox"/>
                                <label for = "check">Remember Me</label>
                            </div>
                            <div className = "right">
                                <label><a href = "#" style = {{color: "black"}}>Forgot Password?</a></label>
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                {/* <div className="text-center">
                <span className="text-center">Already have an account? <Link to="/login">Login</Link></span>
                </div> */}
                
                </div>
                
                
                </div>
            </div>
        </div>
        </div>
        </div>
        
            </section>
        {/* <div className='container-fluid' style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"whitesmoke"}}>

        
            <div className="container" style={{marginTop:"10px"}}>
                <h1 className="text-center">User Login</h1>
                <div className="container text-center">
                    <form onSubmit={loginUsert}>

                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input value={email} onChange={(e) => setemail(e.target.value)} type="email" placeholder="Email" />

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" placeholder="Password" />
                        </div>

                        <button type="submit" value="Register" class="btn btn-primary">Submit</button>

                    </form>
                </div>
               <div className='text-center'>
               <span className='text-center'>New here?  <Link to="/register">Register</Link></span>
               </div>
                
                <ToastContainer />
            </div>
            </div> */}
            
        </>
    );
}

export default Register