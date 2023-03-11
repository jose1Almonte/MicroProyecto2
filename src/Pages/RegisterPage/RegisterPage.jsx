import React, { useState } from 'react'
import { registerWithEmailAndPassword, signInWithGoogle } from '../../firebase/auth-service';
import Styles from './RegisterPage.module.css'

export function RegisterPage() {

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:''
  });

  const handleOnChange = (event) =>{
    const{name, value} = event.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  
  const onSubmit = async (event) => {
    event.preventDefault();
    const {email, password, ...extraData} = formData;
    console.log(formData);
    await registerWithEmailAndPassword(formData.email, formData.password, extraData);

  }

  const handleSignWithGoogle = async () => {
    await signInWithGoogle();
  }

  return (
    <div className={Styles.body}>
    <div className={Styles.titleBox}>
      <h1 className={Styles.title}>Create Account</h1>
    </div>

    <div className={Styles.contentBox}>
      
      <form onSubmit={onSubmit}>

        <div className={Styles.content}>
          <h1 className={Styles.whiteText}> name</h1>
          <input type="text" className={Styles.textField} name = 'name' onChange={handleOnChange}/>
        </div>

        <div className={Styles.content}>
          <h1 className={Styles.whiteText}>Email</h1>
          <input type="text" className={Styles.textField} name = 'email' onChange={handleOnChange}/>
        </div>
        
        <div className={Styles.content}>
          <h1 className={Styles.whiteText}>Password</h1>
          <input type="text" className={Styles.textField} name = 'password' onChange={handleOnChange}/>
        </div>

        <div className={Styles.content}>
          <button className={Styles.button}><h1 className={Styles.blackText} onClick={onSubmit}>Create Account</h1></button>
        </div>

      </form>

      <div className={Styles.contentContinueGoogle}>
        <button className={Styles.button}><h1 className={Styles.blackText} onClick={handleSignWithGoogle}>Continue with Google</h1></button>
      </div>
    </div>

    </div>
  )
}

