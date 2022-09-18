import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import EditPost from './pages/EditPost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-post' element={<EditPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
