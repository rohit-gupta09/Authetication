import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
function Login() {

    const history = useHistory()

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    async function RegisterUsert(e) {
        e.preventDefault();
        const data1 = {
            username: name,
            mail: email,
            pass: password
        }
        const res = await fetch('http://localhost:1234/api', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data1)
        })
        const data = await res.json()
        if (data.status === 'ok') {
            history.push('/login')
        }
        else {
            console.log("Eror Ocuured")
        }
        console.log(data)
    }
    return (
        <>
            <div className="container">
                <h1 className="text-center">Register Account</h1>
                <div className="container text-center">
                    <form onSubmit={RegisterUsert}>
                        <div class="mb-3">
                            <label for="name" class="form-label">Email address</label>
                            <input value={name} onChange={(e) => setname(e.target.value)} type="text" placeholder="Name" />

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input value={email} onChange={(e) => setemail(e.target.value)} type="email" placeholder="Email" />

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" placeholder="Password" />
                        </div>

                        <button type="submit" value="Login" class="btn btn-primary">Submit</button>
                        {/* <input value={name} onChange={(e)=>setname(e.target.value)} type="text" placeholder="Name"></input>
                <input value={email} onChange={(e)=>setemail(e.target.value)} type="email" placeholder="Email"></input>
                <input value={password} onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="Password"></input>

                <br></br>
                <button type="submit" value="Login">Submit</button> */}
                    </form>
                </div>
                <span className="text-center">Already have an account? <Link to="/register">Login</Link></span>
            </div>
        </>
    );
}

export default Login;
