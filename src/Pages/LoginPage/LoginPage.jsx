import Styles from './LoginPage.module.css';



export function LoginPage() {


    return (

      <div className={Styles.body}>
      
      <div className={Styles.titleBox}>
        <h1 className={Styles.title}>BIENVENIDO</h1>
      </div>

      <div className={Styles.contentBox}>
        
        <div className={Styles.content}>
          <h1 className={Styles.subtitle}>Iniciar Sesión</h1>
        </div>

        <div className={Styles.content}>
          <h1 className={Styles.whiteText}>Email</h1>
          <input type="text" className={Styles.textField} placeholder="email" />
        </div>

        <div className={Styles.content}>
          <h1 className={Styles.whiteText}>Contraseña</h1>
          <input type="text" className={Styles.textField} placeholder="email" />
        </div>

        <div className={Styles.content}>
          <button className={Styles.button}><h1 className={Styles.blackText}>Ingresar</h1></button>
        </div>

        <div className={Styles.contentGoogle}>
          <button className={Styles.buttonGoogle}><h1 className={Styles.blackText}>Continuar con Google</h1></button>
        </div>

      </div>
      
      </div>  
      
    )
  }
  
