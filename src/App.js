import { Fragment } from "react";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuth = useSelector((state) => state.auth.isAutenticated);

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      {isAuth && <Counter />}
      
    </Fragment>
  );
}

export default App;
