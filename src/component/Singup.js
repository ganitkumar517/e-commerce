import React, { useState } from "react";

export default function Signup() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const collectdata = async () => {

        let result = await fetch('https://localhost:4500/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'content-type': 'application/json'
            }
        })
         result=await result.json();
        console.warn(result);
    }
    return (
        <div className="sign-up">
            <h1>Register</h1>
            <input type='text' className="inp-sing" value={name} onChange={(e) => setName(e.target.value)} placeholder="ENTER THE NAME" />
            <input type='email' className="inp-sing" placeholder="ENTER THE EMAIL" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='password' className="inp-sing" placeholder="ENTER THE PASSWORD" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="btn" type="button" onClick={collectdata}>SIGN UP</button>
        </div>
    )
}