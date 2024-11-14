import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Shop from '../Pages/Shop';
import Contact from '../Pages/Contact';
import Dashboard from '../Pages/Dashboard';

const Routing = () => {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} /> {/* 👈 Renders at /app/ */}
      <Route path="/Shop" element={<Shop/>} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
    </Routes>
  </BrowserRouter>
   
  );
}
export default Routing;

