import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { isLogin, isLoggedOut } from "./store/index";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const showLogIn = useSelector((state) => state.auth.isAuth);

  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(isLogin());
  };

  const logOutHandler = () => {
    dispatch(isLoggedOut());
  };

  return (
    <>
      {showLogIn && <Header onLoggedOut={logOutHandler} />}
      {!showLogIn ? (
        <Auth onSubmitAuth={loginHandler} />
      ) : (
        <div>
          <UserProfile /> <Counter />
        </div>
      )}
    </>
  );
}

export default App;
