import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Register.module.css'

export default function Register() {
  return (
    <div>
      <Head>
        <title>FishMark</title>
        <meta name="description" content="Register Page" />
        <link rel="icon" href="/fish-market.png" />
      </Head>
      
      <main>
        <div className={`${styles.split} ${styles.left}`}>
          <div className={styles.register_centered}>
            <h1>Fishmark</h1>
            <p>Buat akun dan dapatkan layanan spesialmu</p>
          </div>
        </div>
        <div className={`${styles.split} ${styles.right}`}>
          <div className={styles.form_centered}>
            <form action="/send-data" method="post">
              <h1>Register</h1>
              <div className={styles.form_group}>
                <label for="email">E-mail: </label>
                <input type="email" id="email" name="email" />
              </div>
              <div className={styles.form_group}>
                <label for="username">Username: </label>
                <input type="text" id="username" name="username" />
              </div>
              <div className={styles.form_group}>
                <label for="password">Password: </label>
                <input type="password" id="password" name="password" />
              </div>
              <div className={styles.form_group}>
                <label for="confirm">Confirm Password: </label>
                <input type="password" id="confirm" name="confirm" />
              </div>
              <div className={styles.form_group}>
                <input type="checkbox" id="terms" name="terms" value="terms"/>
                <label for="terms"> Saya menerima segala syarat dan ketentuan</label>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}