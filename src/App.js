import { Route, Router,BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/register';
import DashBoard from './components/resDashBoard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register/>}></Route>
        <Route path="/restraunt" element={<DashBoard/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
