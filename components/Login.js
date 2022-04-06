import { useMetamask } from "@thirdweb-dev/react";
import styles from "../styles/Login.module.css";

const Login = () => {
  const connectWithMetamask = useMetamask();

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Welcome to WebX DAO</h1>
      <button className={styles.button} onClick={connectWithMetamask}>
        🧬 Sign in using MetaMask
      </button>
    </div>
  );
};
export default Login;
