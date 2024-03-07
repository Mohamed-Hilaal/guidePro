import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home/Home'
import './App.css';


function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
