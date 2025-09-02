import React, { useState } from 'react'
import { signUp } from '../services/users';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Register() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [contact, setContact] = useState('');

const nav = useNavigate();
const onLogin= async ()=> {
if(username.length === 0 || password.length === 0 || contact.length === 0) 
    toast.warning('Please fill in all fields');
else{
    const result = await signUp (username, contact, password);
    if(result.status=='success'){
    toast.success('Registration successful');
        nav('/login');
    }
    else{
        toast.error('Registration failed');
    }
}
}

return (        
                    <div  >
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
                        <input 
                            type="text"
                            placeholder="Contact"
                            value={contact}
                            onChange={e => setContact(e.target.value)}
                            />
                            
                        <button type="submit"
                        onClick={onLogin}>Sign Up</button>
                    </div>
                );
        }
        