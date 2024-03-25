import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home/Home'
import CustomContext from "./useContext/customContext";
import Redux from './redux/redux'

import './App.css';


function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contextTest" element={<CustomContext />} />
          <Route path="/reduxTest" element={ <Redux /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
