import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './Pages/HomePage/HomePage'
import { ProfilePage } from './Pages/ProfilePage/ProfilePage'
import { AboutMePage } from './Pages/AboutMePage/AboutMePage'
import { SkillsPage } from './Pages/SkillsPage/SkillsPage'
import { AboutMe_URL, HOME_URL, LOGIN_URL, PROFILE_URL, REGISTER_URL, SKILLS_URL, MOVIE_URL } from './constants/urls'
import './index.css'
import { Layout } from './components/Layout/Layout'
import { RegisterPage } from './Pages/RegisterPage/RegisterPage'
import { LoginPage } from './Pages/LoginPage/LoginPage'
import { PrivateRouteRegister } from './PrivateRoutes/PrivateRouteRegister/PrivateRouteRegister'
import { MovieDetailPage } from './Pages/MovieDetailPage/MovieDetailPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>    
    <Routes>


    <Route element = {<Layout/>}>
      
      
        {/* Solo pueden entrar los que no tengan un usuario activo */}
        <Route path={REGISTER_URL} element = {
        
        <PrivateRouteRegister>

          <RegisterPage/>

        </PrivateRouteRegister>
        }/> 

        <Route path={LOGIN_URL} element = {
        
        <PrivateRouteRegister>
          
          <LoginPage/>

        </PrivateRouteRegister>
        
        }/> 
      
      
      
      <Route path={HOME_URL} element = {<HomePage/>}/> 
      <Route path={PROFILE_URL} element = {<ProfilePage/>}/> 
      <Route path={AboutMe_URL} element = {<AboutMePage/>}/> 
      <Route path={SKILLS_URL} element = {<SkillsPage/>}/> 
      {/* <Route path={CompRegGoogle_URL} element = {<CompleteRegistrationGooglePage/>}/>  */}
      <Route path={REGISTER_URL} element = {<RegisterPage/>}/> 
      <Route path={LOGIN_URL} element = {<LoginPage/>}/> 
      <Route path={MOVIE_URL} element={<MovieDetailPage />} /> 

    </Route>


    </Routes>
    </BrowserRouter>
    
    
    {/* <App /> */}
  </React.StrictMode>,
)
