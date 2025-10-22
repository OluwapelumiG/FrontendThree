import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";


function LoginPage(){
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ emailError, setEmailError ] = useState('');
    const [ passwordError, setPasswordError ] = useState('');

    function submitLogin(){
        if((email == '') || (password == '')){
            alert("Email and password fields are required");
            return;
        }
        else if(email != 'admin' || password != 'password'){
            alert("Incorrect login details.");
            return;
        }
        else{
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userPassword', password);
            window.location.href = '/';
        }
        return;
    }

    // useEffect(() => {
    //     submitLogin()
    // }, [email, password]);

    useEffect(()=>{
       if(email == ''){
            setEmailError("Email field is required");
        }
        else{
            setEmailError('')
        }
    }, [email]);

    useEffect(()=>{
       if(password == ''){
            setPasswordError("Password field is required");
        }
        else{
            setPasswordError('')
        }
    }, [password]);

    return (
        <>
        <Navbar />
        <div className="mx-auto max-w-2xl w-full bg-gray-200 rounded-md p-10 ">
            <h2 className="text-2xl border-b-2 border-dashed py-2">Login Page</h2>
            

            <div className="flex flex-col my-4">
                <label className="text-xl">Email</label>
                <input onChange={(e) => {setEmail(e.target.value)}} className="text-xl w-full px-4 py-2 rounded-md bg-white" type="email" placeholder="Enter your email" />
                <span className="text-red-500">{emailError}</span>
            </div>
            <div className="flex flex-col my-4">
                <label className="text-xl">Password</label>
                <input onChange={(e) => {setPassword(e.target.value)}} className="text-xl w-full px-4 py-2 rounded-md bg-white" type="password" placeholder="Enter your password" />
                <span className="text-red-500">{passwordError}</span>
            </div>
            <button onClick={submitLogin} className="mx-2 my-4 px-4 py-2 rounded-md bg-blue-400">Login</button>
        </div>
        </>
    )
}

export default LoginPage;