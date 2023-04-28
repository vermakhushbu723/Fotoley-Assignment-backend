import styles from "./styles.module.css";
import { Link } from "react-router-dom";
const Main = () => {

    return (
        <div className={styles.button_container}>
            <Link to="/wallet"><button id={styles.btn}>Wallet</button></Link>
            <Link to="/sendmoney"><button id={styles.btn}>Send Money</button></Link>
            <Link to="/requestmoney"><button id={styles.btn}>Request Money</button></Link>
            <Link to="/listofrequest"><button id={styles.btn}>List of request</button> </Link>
        </div>
    );
};

export default Main;
