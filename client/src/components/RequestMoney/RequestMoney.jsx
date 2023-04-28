import React from 'react'
import styles from "./styles.module.css"
import {Link} from "react-router-dom";
const RequestMoney = () => {
  return (
    <div className={styles.form_container}>
    <h1>Request</h1>
      <h1>Send money request user</h1>
      <form>
        <input type="text" name="username" placeholder='select user' />
        <input type="text" name="Amount" placeholder='Enter Amount' />
        {/* <input type="submit" value="Send" /> */}
        <button id={styles.btn1}>Request</button>
      </form>
      <Link to="/"><button id={styles.btn1}>Back</button></Link>
    </div>
  )
}

export default RequestMoney;
