import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

     const handleSubmit = (e) => {
        e.preventDefault();
        console.log({email, password})
        setPassword("");
        setEmail("");
     }

     const gotoSignupPage = () => navigate("/register");

  return (
    <div className='login__container'>
    <h2>Login</h2>
    <label htmlFor='email'>Email</label>
    <input 
    type='text'
    name='email'
    value={email}
    required
    onChange={(e) => setEmail(e.target.value)}
    />
    <button className='loginBtn'>SIGN IN</button>
    <p>
    Don't have an account? {" "}
    <span className='link' onClick={gotoSignupPage}>
        Sign up
    </span>
    </p>
    </div>
  )
}

export default Login