import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { signIn } from '../services/users';
import { useNavigate } from 'react-router-dom';
export default function Login() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const nav = useNavigate();
const OnLogin= async ()=> {
    // toast.success('test msg');
if(username.length === 0 || password.length === 0) {
    toast.warn('Please fill in all fields');
}
else{
    const result = await signIn (username, password);
    if(result.status=='success'){
        // debugger
        toast.success('Login successful');
        nav('/');
    const token = result['data']['token']
    // console.log("new",token)
    sessionStorage['token']=token;
    
    }
    else{
        toast.error('Invalid Username or Password');
        // debugger
        // console.log(result['error'])                
    }}
}

return (<>
                        <h2>Login</h2>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            
                        />
                        <button type="submit" onClick={OnLogin}>Login</button>
          </>      );
            }
        