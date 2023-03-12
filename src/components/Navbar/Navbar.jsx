import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {  HOME_URL, LOGIN_URL,  REGISTER_URL } from '../../constants/urls'
import { UserContextProvider, useUser } from '../../context/UserContext'
import { logout } from '../../firebase/auth-service'
import Styles from './Navbar.module.css'
export function Navbar() {

    

    const{user} = useUser();
    
    const handleLogout = async() => {
        console.log('SALIENDO...');
        await logout();
    }

    

  return (
    <main>
        <UserContextProvider>

        {/* Navbar */}

        <div className={Styles.Container}>
            
            <header className={Styles.header}>

                <ul className={Styles.navLinks}>

                    <li>
                        <Link to={HOME_URL} className={Styles.Links}>
                            <span> Home </span>
                        </Link>
                    </li>

                    {/* <li>
                        <Link to = {PROFILE_URL} className={Styles.Links}>
                            <span> Profile </span>
                        </Link>
                    </li>
                    <li>
                        <Link to = {AboutMe_URL} className={Styles.Links}>
                            <span>About Me</span>
                        </Link>
                    </li>
                    <li>
                        <Link to = {SKILLS_URL} className = {Styles.Links}>
                            <span>Skills</span>
                        </Link>
                    </li> */}

                </ul>

                <ul className={Styles.navLinksRegister} >
                    
                    {!user && (
                        <>
                        
                            <li>
                                <Link to = {LOGIN_URL} className = {Styles.Links}>
                                    <span>Login</span>
                                </Link>
                            </li>
                            <li>
                                <Link to = {REGISTER_URL} className = {Styles.Links}>
                                    <span>Register</span>
                                </Link>
                            </li>
                        
                        </>
                    )}

                    {!!user &&(
                        <>
                            <li>
                                
                                <span className = {Styles.Links}> {user.name} </span>

                            </li>

                            <li>
                                    <button type = 'button' onClick={handleLogout} className = {Styles.button}>
                                        <h1 className = {Styles.logoutText} >Salir</h1>
                                        
                                    </button>
                            </li>


                        
                        </>
                    )}

                   

                </ul>

            </header>
        </div>       
        
    
        </UserContextProvider>
    </main>
 
  )
}
