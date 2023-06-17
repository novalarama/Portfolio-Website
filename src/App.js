import {BrowserRouter, Routes, Route} from "react-router-dom"
import Main from "./pages/Main";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
