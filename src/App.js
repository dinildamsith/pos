// import logo from './logo.svg';
import './App.css';
import Home from "./components/Home/Home";
import Item from "./components/Item/Item";
import Customer from "./components/Customer/customer";
import Order from "./components/Order/Order";
import OrderManage from "./components/OrderManage/OrderManage";
import {BrowserRouter as Router, Routes, Route, HashRouter} from 'react-router-dom';



function App() {


  return (
    <div className="App">



        <HashRouter>
            <Routes>
                <Route path="/pos" element={<Home />} />
                <Route path="/item" element={<Item />} />
                <Route path="/customer" element={<Customer />} />
                <Route path="/order" element={<Order />} />
                <Route path="/orderManage" element={<OrderManage />} />
            </Routes>
        </HashRouter>

    </div>
  );
}



export default App;
