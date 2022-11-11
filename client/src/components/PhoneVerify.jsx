import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';


const PhoneVerify = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();


  const postVerification = async () => {
    fetch("http://localhost:4000/api/verification", {
      method: "POST",
      body:JSON.stringify({
       code, 
      }),
      headers: {
        "Content-Type": "application/json"
      },

    })
    .then((res) => res.json())
    .then((data) => {
      if(data.error_message){
        alert(data.error_message)
      } else {
        // Navigate to the dashboard page
        navigate("/dashboard")
      }
    })
    .catch((err) => console.error(err));
  }

  const handleSubmit = (e) => {
    e.preventDefualt();
    // Call the function
   postVerification();
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