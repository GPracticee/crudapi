import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../App.css"
import login from "../Images/login.png"


const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                 password
            })
        });

        const data = await res.json();
        if (data.status === 400 || !data) {
            window.alert("invalid credentials")
        } else {
            window.alert("login successfull")
            navigate("/")
        }
    }

    return (
        <>
            <section className='signup'>
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className='form-title'>Login</h2>
                            <form method='POST' className='form'>
                                <div className="form-floating mb-2">
                                    <input type="email" className="form-control" id="floatingInput" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
                                    <label for="floatingInput">Enter Email address</label>
                                </div>
                                <div className="form-floating mb-2">
                                    <input type="password" className="form-control" id="floatingPassword" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                    <label for="floatingPassword">Enter Password</label>
                                </div>
                                <button type="button" className="btn btn-primary" onClick={loginUser}>Login</button>
                                <br />
                                <br />
                                <div>
                                    <h5>for new user <NavLink to="/signup">register</NavLink>  here</h5>
                                </div>
                            </form>
                        </div>
                        <div className="limg">
                            <img className='limg1' src={login} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login