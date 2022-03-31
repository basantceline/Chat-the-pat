import React from "react";
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cook from "./Pages/Cook";
import Cashier from "./Pages/Cashier";
import NavBar from "./Components/NavBar";
const App = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cook" element={<Cook />} />
                    <Route path="/cashier" element={<Cashier />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;