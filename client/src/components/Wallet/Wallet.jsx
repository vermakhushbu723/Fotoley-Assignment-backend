// import { useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Wallet = () => {
  // const [balance, setBalance] = useState(0);
  // const getdata = async (res) => {
  //   try {
  //     const url = "http://localhost:8080/api/users";
  //     const data = await axios.get(url, res)
  //     setBalance(data.balance)
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }



  return (
    <>
      <div className={styles.main_container}>
        <div class={styles.table_container}>
          <h1>Balance : 3000 </h1>
        </div>
        <div>
          <table>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Cr/Dr</th>
              <th>Balance</th>
              <th>Remarks</th>
            </tr>
            <tr>
              <td>5-may</td>
              <td>500</td>
              <td>Cr</td>
              <td>40000</td>
              <td>Accept</td>
            </tr>
            <tr>
              <td>27-jan</td>
              <td>500</td>
              <td>Cr</td>
              <td>50000</td>
              <td>Accept</td>
            </tr>
            <tr>
              <td>28-april</td>
              <td>500</td>
              <td>Cr</td>
              <td>50000</td>
              <td>Deny</td>
            </tr>
            <tr>
              <td>28-jun</td>
              <td>3000</td>
              <td>Dr</td>
              <td>60000</td>
              <td>Reject</td>
            </tr>
          </table>
        </div>
        <Link to="/"><button id={styles.btn1}>Back</button></Link>
      </div>
    </>
  )
}

export default Wallet
