// import logo from './logo.svg';
import './App.css';
import Home from "./components/Home/Home";
import Item from "./components/Item/Item";
import Customer from "./components/Customer/customer";
import Order from "./components/Order/Order";
import OrderManage from "./components/OrderManage/OrderManage";
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';

function App() {
// Import necessary modules
    const express = require('express');
    const path = require('path');

// Create an Express app
    const app = express();
    const PORT = process.env.PORT || 3000;

// Serve static files from the 'build' directory
    app.use(express.static(path.join(__dirname, 'build')));

// Handle all routes by serving the 'index.html' file
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });

// Start the server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });


  return (
    <div className="App">



        <Router>
            <Routes>
                <Route path="/pos" element={<Home />} />
                <Route path="/item" element={<Item />} />
                <Route path="/customer" element={<Customer />} />
                <Route path="/order" element={<Order />} />
                <Route path="/orderManage" element={<OrderManage />} />
            </Routes>
        </Router>

    </div>
  );
}



export default App;
