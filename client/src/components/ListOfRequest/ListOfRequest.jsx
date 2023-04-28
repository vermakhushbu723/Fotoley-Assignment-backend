import React from 'react'
import styles from "./styles.module.css";
import {Link} from "react-router-dom";
const ListOfRequest = () => {
  return (
   <>
   <div className={styles.main_container}>
    <div class={styles.table_container}>
        <h1>Received Requests</h1>
    </div>
    <div>
    <table>
  <tr>
    <th>Date</th>
    <th>Amount</th>
    <th>Requested By</th>
    <th>Status</th>
    <th>Action</th>
  </tr>
  <tr>
    <td>23-dec</td>
    <td>50</td>
    <td>Nidhi</td>
    <td>Accepted</td>
    <td>NA</td>
  </tr>
  <tr>
    <td>24-dec</td>
    <td>509</td>
    <td>Khushboo</td>
    <td>Deny</td>
    <td>N.A</td>
  </tr>
  <tr>
    <td>27-april</td>
    <td>230</td>
    <td>Manish</td>
    <td>Accepted</td>
    <td>NA</td>
  </tr>
</table>
    </div>
    <Link to="/"><button id={styles.btn1}>Back</button></Link>
    </div>
   </>
  )
}

export default ListOfRequest;
