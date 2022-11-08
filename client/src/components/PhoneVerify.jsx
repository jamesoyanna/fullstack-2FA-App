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

    </div>
  )
}

export default PhoneVerify