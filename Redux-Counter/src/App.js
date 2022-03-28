import { useSelector } from "react-redux";
import { Fragment } from "react";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import Auth from "./components/Auth";
import Header from "./components/Header";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}

      <Counter />
    </Fragment>
  );
}

export default App;
