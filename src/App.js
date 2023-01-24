/** @format */
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";
import OrderList from "./components/OrderList";
import Orders from "./components/Orders";
import SideMenu from "./components/SideMenu";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <div className='App bg-white'>
      {/* <HomePage />
      <Login />
      <SignUp />
      <CheckOut /> */}
      <SideMenu />
      <Orders />
      {/* <CheckOut /> */}
    </div>
  );
}

export default App;
