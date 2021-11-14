import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Table from "./component/Table"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

<Router>
      <div>
       
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/table" exact element={<Table />} />
        </Routes>
      </div>
    </Router>

      
     
    </div>
  );
}

export default App;
