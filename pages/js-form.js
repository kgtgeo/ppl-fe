import styles from '../styles/Login-form.module.css'
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

export default function LoginForm() {
    // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
      // Stop the form from submitting and refreshing the page.
      event.preventDefault()
  
      // Get data from the form.
      const data = {
        username: event.target.email.value,
        password: event.target.password.value,
      }
  
      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data)
  
      // API endpoint where we send form data.
      const endpoint = '/api/form'
  
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: 'POST',
        // Tell the server we're sending JSON.
        headers: {
          'Content-Type': 'application/json',
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      }
  
      // Send the form data to our forms API on Vercel and get a response.
      const response = await fetch(endpoint, options)
  
      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
      const result = await response.json()
      alert(`Is this your username: ${result.data}`)   
    }
    return (
      // We pass the event to the handleSubmit() function on submit.
      <form className={styles.App} onSubmit={handleSubmit}>
        <div className={styles.formgroup}>
        <label htmlFor="email" data-testid="username">Username</label>
        <input className={styles.formfield} type="email" id="email" name="email" placeholder="Email" data-testid="email" required />
        </div>

        <div className={styles.formgroup}>
        <label htmlFor="password" data-testid="password label">Password</label>
        <input className={styles.formfield} type="password" id="password" name="password" placeholder="Password" data-testid="password" required />
        </div>
        <div className={styles.formgroup}>
          <input name="ok" type="checkbox" id="" class="form-control" />
          <small>Ingat Saya</small>
          <small>
            Lupa password?{" "}
            <a href="/home">
              <b>Klik Disini</b>
              </a>
            </small>
        </div>

        <button className={styles.button} type="submit" data-testid="submit button">
          Submit
        </button>
      </form>
    )
  }