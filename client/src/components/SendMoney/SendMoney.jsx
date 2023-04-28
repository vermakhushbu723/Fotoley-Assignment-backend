import React from 'react'
import styles from "./styles.module.css"
import {Link} from "react-router-dom";
const SendMoney = () => {
  return (
    <div className={styles.form_container}>
      <h1>Send money user</h1>
      <form>
        <input type="text" name="username" placeholder='select user' />
        <input type="text" name="Amount" placeholder='Enter Amount' />
        {/* <input type="submit" value="Send" /> */}
        <button id={styles.btn1}>send</button>
      </form>
      <Link to="/"><button id={styles.btn1}>Back</button></Link>
    </div>
  )
}

export default SendMoney
