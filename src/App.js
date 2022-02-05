import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Register from './components/register';
import DashBoard from './components/resDashBoard';

function App() {
  return (
    <div>
    <Navbar/>
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Register/>}/>
          <Route path="/restraunt" element={<DashBoard/>}/>
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
