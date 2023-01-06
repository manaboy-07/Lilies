/** @format */
import CheckOut from "./components/CheckOut";
import OrderList from "./components/OrderList";
import SideMenu from "./components/SideMenu";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <div className='App bg-white'>
      <SideMenu />
      <OrderList />
      {/* <CheckOut /> */}
    </div>
  );
}

export default App;
