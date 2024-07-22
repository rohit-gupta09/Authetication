import React,{useState} from 'react'

function Register() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    async function loginUsert(e)

    {
        e.preventDefault();
        const data1={
            mail:email,
            pass:password
        }
        const res=await fetch('http://localhost:1234/login',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data1)
        })
        const data=await res.json()
        if(data.user)
        {
            localStorage.setItem('token',data.user)
            alert('Login Successful');
            window.location.href="/Quote"
        }
        else{
            alert("please check your id password")
        }
        
        console.log(data)
    }
    return (
        <>
            <h1>Register</h1>
            <form onSubmit={loginUsert}>
                <input value={email} onChange={(e)=>setemail(e.target.value)} type="email" placeholder="Email"></input>
                <input value={password} onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="Password"></input>

                <br></br>
                <button type="submit" value="Register">Submit</button>
            </form>
        </>
    );
}

export default Register