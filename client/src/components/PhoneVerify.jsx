import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';


const PhoneVerify = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefualt();
    console.log({code})
    setCode("")
    navigate("/dashboard")
  }

  return (
    <div className='verify'>
      <h2 style={{marginBottom: "30px"}}>Verify your Phone number</h2>
       <form className='verify__form' onSubmit={handleSubmit}>
        <label htmlFor='code' style={{marginBottom:"10px"}}> A  code has been sent to your phone</label>
        <input 
        type='text'
        name='code'
        className='code'
        id='code'
        value={code}
        onChange = {(e) => setCode(e.target.value)}
        require 
        />
        <button className='codeBtn'>AUTHENTICATE</button>
       </form>
    </div>
  )
}

export default PhoneVerify