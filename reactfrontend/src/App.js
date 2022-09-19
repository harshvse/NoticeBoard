import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EditPost from "./pages/EditPost";
import FullPost from "./pages/FullPost";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/posts/:id" element={<FullPost />} />
                    <Route path="/create-post" element={<EditPost />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
