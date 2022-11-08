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
 onChange={(e) => setPassword(e.target.password)}
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