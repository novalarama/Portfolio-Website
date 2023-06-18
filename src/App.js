import {BrowserRouter, Routes, Route} from "react-router-dom"
import Main from "./pages/Main.js";
import './App.css';

function App() {
  return (
    <div className="background-image">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
