import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import ORDERS from './components/orders';
import Register from './components/register';
import DashBoard from './components/resDashBoard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Register/>}/>
          <Route path="/restraunt" element={<DashBoard/>}/>
          <Route path="/orders" element={<ORDERS/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
