import logo from './logo.svg';
import './App.css';
import { Signup } from './pages/signup.js';
import {Route, Routes} from 'react-router-dom'
import { Login } from './pages/login.js';
import { Dashboard } from './pages/dashboard.js';
import { Landingpage } from './pages/landingpage.js';
import Map from './components/map.js';

function App() {
  return (
    <div className="App">
      <Routes >
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/landingpage" element={<Landingpage/>} />
      <Route path='/map' element={<Map/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
