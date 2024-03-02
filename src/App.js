// import logo from './logo.svg';
import './App.css';
import Home from "./components/Home/Home";
import Item from "./components/Item/Item";
import Customer from "./components/Customer/customer";
import Order from "./components/Order/Order";
import OrderManage from "./components/OrderManage/OrderManage";
import {BrowserRouter, BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';

function App() {


  return (
    <div className="App">



        <BrowserRouter>
            <Routes>
                <Route path="/pos" element={<Home />} />
                <Route path="/item" element={<Item />} />
                <Route path="/customer" element={<Customer />} />
                <Route path="/order" element={<Order />} />
                <Route path="/orderManage" element={<OrderManage />} />
            </Routes>
        </BrowserRouter>

    </div>
  );
}



export default App;
