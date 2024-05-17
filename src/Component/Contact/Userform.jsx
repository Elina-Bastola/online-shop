
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
function Userform() {
    const {register, handleSubmit, error}= useForm();
    const {userInfo, setUserInfo}= useState();
    const onSubmit = (data) => {
        
    }

  return (
    <>
      <div className="container">
        
       <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
            <div className="field">
                <label> Username</label>
                <input type="text"  name='username' placeholder='Username' />
            </div>
            
            <div className="field">
                <label  > Email</label>
                <input type='email' name='Email' placeholder='Email' />
            </div>
           
            <div className="field">
                <label > password</label>
                <input type="password" name='password' placeholder='password'    />
            </div>
             
            <button className='fluid ui button blue '> Submit</button>
        </div>
       </form>
      </div>
    </>
  )
}

// export default Userform

export default Userform
