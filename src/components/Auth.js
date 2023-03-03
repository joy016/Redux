import classes from "./Auth.module.css";
import { useSelector, useDispatch } from "react-redux";
import { isLogin } from "../store/index";

const Auth = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmitAuth();
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
