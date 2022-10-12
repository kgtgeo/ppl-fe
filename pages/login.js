
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Login-form.module.css'
import LoginForm from './js-form' 
import Img from "../public/backleft.jpeg";

const Login = () => {
    return (
    
    <div className={styles.body}>
        <Head>
          <title>Login Page</title>
          <meta name="description" content="Login page" />
        </Head>
  
        <main className={styles.body}>
        <div className={styles.leftlogin}>
          
        <Image src={Img} className={styles.chart} alt="Gambar Background" />
        <link rel="background" href="/backleft.jpeg" />
        
        <div class={styles.bottomleft}>
          <h1> Selamat datang <br /> kembali</h1>
          </div>
        </div>
        
        <div className={styles.rightlogin}>
          <div className={styles.cardlogin}>
            <h1>Log In</h1>
          </div>
        <LoginForm />
        </div>
      
        </main>
    </div>
    );
}
 
export default Login;