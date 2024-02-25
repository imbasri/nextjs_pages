import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.scss"


const LoginView = () => {
  const { push } = useRouter();
  const handleLogin = () => {
    push("/product");
  };
  return (
    <div className={styles.login}>
      <h1 className="text-3xl font-bold text-blue-300">Login Page</h1>
      <button onClick={()=>handleLogin()}>Login</button>
      <p style={{color:'tomato',border:'1px solid red',borderRadius:'10px',padding:'5px'}}>
        Belum punya akun ? register <Link href="/auth/register">disini.</Link>
      </p>
    </div>
  );
};

export default LoginView;

