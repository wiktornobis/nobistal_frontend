"use client";
import Link from "next-intl/link";
import './login.scss';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Axios from 'axios';
import { url } from '@/app/components/constants/Constants';


function Login() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    Axios.defaults.withCredentials = true;

    const login = () => {
        Axios.post(`${url}/api/login`, {
         username: username,
         password: password,
         withCredentials: true,
        },{
                 withCredentials: true,
                 headers: {
                    'Content-Type': 'application/json',
                 }
        }).then((response) => {
            if (!response.data.auth) {
                setError(() => response.data)
            } else {
                console.log(response.data)
                localStorage.setItem("token", response.data.token);
                router.push('/users');
            }
        }).catch(error => {
            throw error
        });
    };


    return (
        <>
           <div className="login">
                <h2>NOBI-STAL</h2>
                <label>Login:
                    <input
                       type="text"
                       placeholder="Login..."
                       onChange={(e) => {
                       setUsername(e.target.value)
                       }}
                    />
                </label>
                <label>Hasło:
                    <input
                       type="password"
                       placeholder="Password..."
                       onChange={(e) => {
                       setPassword(e.target.value)
                       }}
                    />
               </label>
               {error && <div className="login_error">{error.message} </div>}
               <button onClick={login}>Login</button>
           </div>

        </>
    );
}

export default Login;