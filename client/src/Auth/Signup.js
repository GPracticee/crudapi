import React, { useState } from 'react'
import { NavLink ,useNavigate} from 'react-router-dom'
import "../App.css"
import signup from "../Images/signup.png"
import google from "../Images/google.png"
import fb from "../Images/fb.png"
import twitter from "../Images/twitter.jpeg"



const Signup = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: ""
    })

    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }

const sendData = async (e)=>{
    e.preventDefault();

    const {name, email, phone, work, password, cpassword} = user;
    const res = await fetch('/register',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name, email, phone, work, password, cpassword
        })
    });
    const response = await res.json();
    if(response.status === 422 || !response){
        window.alert("invalid Registration")
        console.log("invalid Registration")
    }else{
        window.alert("Registration successfull")
        console.log(" successfull Registration")

        navigate('/login')
    }
}


    return (
        <>
            <section className='signup'>
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className='form-title'>Sign up</h2>
                            <form method='POST' className='form'>
                                <div className="form-floating mb-2">
                                    <input type="text" className="form-control" id="floatingInput" name="name" value={user.name} onChange={handleInputs} placeholder="name@example.com" />
                                    <label for="floatingInput">Enter Name</label>
                                </div>
                                <div className="form-floating mb-2">
                                    <input type="email" className="form-control" id="floatingInput" name="email" value={user.email} onChange={handleInputs} placeholder="name@example.com" />
                                    <label for="floatingInput">Enter Email address</label>
                                </div>
                                <div className="form-floating mb-2">
                                    <input type="work" className="form-control" id="floatingInput" name="work" value={user.work} onChange={handleInputs} placeholder="name@example.com" />
                                    <label for="floatingInput">Enter Work</label>
                                </div>
                                <div className="form-floating mb-2">
                                    <input type="number" className="form-control" id="floatingInput" name="phone" value={user.phone} onChange={handleInputs} placeholder="name@example.com" />
                                    <label for="floatingInput">Enter Phone Number</label>
                                </div>
                                <div className="form-floating mb-2">
                                    <input type="password" className="form-control" id="floatingPassword" name="password" value={user.password} onChange={handleInputs} placeholder="Password" />
                                    <label for="floatingPassword">Enter Password</label>
                                </div>
                                <div className="form-floating mb-2">
                                    <input type="password" className="form-control" id="floatingPassword" name="cpassword" value={user.cpassword} onChange={handleInputs} placeholder="Password" />
                                    <label for="floatingPassword">Enter Confirm Password</label>
                                </div>
                                <button type="button" className="btn btn-primary" to="/login" onClick={sendData}>Register</button>

                            </form>
                        </div>
                        <div className="img">
                            <img className='img1' src={signup} alt="" />
                            <div className='gtf'>
                                <NavLink to=""><img src={google} alt="" width={80} /></NavLink>
                                <NavLink to=""><img src={fb} alt="" width={80} /></NavLink>
                                <NavLink to=""><img src={twitter} alt="" width={80} /></NavLink>
                            </div>
                            <div className='side'>
                                <h5>already a user <NavLink to="/login">login</NavLink>  here</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup