import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const postLoginDetails = () => {
        fetch("http://localhost:4000/api/login", {
            method: "POST",
            body: JSON.stringify({
                email,
                password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
           
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.error_message){
                alert(data.error_message)
            } else {
                console.log(data.data)
                // save the username to localStorage
                localStorage.setItem("username", data.data.username);
                // Navigate to 2FA
                navigate("/phone/verify")
            }
        })
        .catch((err) => console.error(err))
    }

     const handleSubmit = (e) => {
        e.preventDefault();
       // call the fucntion
       postLoginDetails();
        setPassword("");
        setEmail("");
     }

     const gotoSignupPage = () => navigate("/register");

  return (
    <div className='login__container'>
    <h2>Login</h2>
    <form className='login__form' onSubmit={handleSubmit}>
    <label htmlFor='email'>Email</label>
    <input 
    type='text'
    name='email'
    id='email'
    value={email}
    required
    onChange={(e) => setEmail(e.target.value)}
    />
    <label htmlFor='password'>Password</label>
    <input 
    type='password'
    name='password'
    id='password'
    minLength={8}
    required
    value={password}
 onChange={(e) => setPassword(e.target.value)}
    />
    <button className='loginBtn'>SIGN IN</button>
    <p>
    Don't have an account? {" "}
    <span className='link' onClick={gotoSignupPage}>
        Sign up
    </span>
    </p>  
    </form>
    </div>
  )
}

export default Login