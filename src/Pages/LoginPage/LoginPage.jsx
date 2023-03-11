import "./LoginPage.css";



export function LoginPage() {


    return (
      <div className='Container'>
        <form>
  
          <div className='bloque1'>
              <h1 className='titulo'>¡Bienvenido!</h1>
          </div>
  
          <h3 className='titulo2'>Iniciar sesión</h3>
  
          <div className='rectangulol'></div>
  
          <h5 className='subtitulo1' id='sub1'>Email</h5>


          

            <input 
            type="email" 
            name="email" 
            id="email" 
            className="search-field1"></input>
    
            <h5 className='subtitulo2'>Contraseña</h5>
    
            <input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="*******" 
            className="search-field2" 
            ></input>
    
            <button 
            type="submit" 
            className="button1L">Iniciar sesión</button>
    
          
          


            <button type="button" className="button2L" >Continuar con Google</button>
    

          <img class="logoGoogleL" src="img/google.png" alt="" />
  
   
          <h5 className='titulo4'>Todos los derechos reservados</h5>
  
        </form>
      </div>
  
      
    )
  }
  
  export default LoginPage;
