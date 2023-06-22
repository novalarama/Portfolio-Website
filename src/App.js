import {BrowserRouter, Routes, Route} from "react-router-dom"
import Main from "./pages/Main.jsx";
import AchievementList from "./pages/Achievements/AchievementList/AchievementList.jsx";
import './App.css';

function App() {
  return (
    <div className="background-image">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/achievementList" element={<AchievementList />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
