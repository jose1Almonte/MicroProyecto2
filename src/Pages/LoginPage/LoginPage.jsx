import "./LoginPage.css";



export function LoginPage() {


    return (
      <div className='Container'>
        <form>
  
          <h3 className='titulo2'>Iniciar sesión</h3>
  
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
    
      
        </form>
      </div>
  
      
    )
  }
  
  export default LoginPage;
