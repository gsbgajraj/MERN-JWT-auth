import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/authSlice";
import "../scss/home.scss";

const Home = () => {
  const dispatch = useDispatch();

  const logoutHandler = (e) => {
    dispatch(logoutUser());
  };

  return (
    <div className="home">
      <h1>Welcome to the Gajraj Auth App</h1>
      <p>Thank you for using the service.</p>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Home;
