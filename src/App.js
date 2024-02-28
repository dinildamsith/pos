// import logo from './logo.svg';
import './App.css';
import Home from "./components/Home/Home";
import Item from "./components/Item/Item";
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';

function App() {


  return (
    <div className="App">

        {/*<Home />*/}
        {/*<Item />*/}

        <Router>
            {/* Define your routes inside the Router */}
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/item" element={<Item />} />
            </Routes>
        </Router>

    </div>
  );
}



export default App;