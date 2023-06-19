import Header from "../components/Header/Header";
import Profile from "../pages/Profile/Profile";
import Educations from "../pages/Educations/Educations";
import Skills from "../pages/Skills/Skills";
import Achievements from "./Achievements/Achievements";
import Experiences from "./Experiences/Experiences";

export default function Main () {
    return (
        <div className="App">
            <Header />
            <Profile />
            <Educations />
            <Skills />
            <Achievements />
            <Experiences />
        </div>
    )
}