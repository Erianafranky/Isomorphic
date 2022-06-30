import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return ( 
    <BrowserRouter> 
        <Routes>
          {/* render Register Component when we hit /register */}
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
         
        </Routes>
    </BrowserRouter>
  );
}

export default App;
