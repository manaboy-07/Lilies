/** @format */
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";
import OrderList from "./components/OrderList";
import Orders from "./components/Orders";
import SideMenu from "./components/SideMenu";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {

  return (
    <div className='App bg-white'>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Dashboard' element={<SideMenu />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
