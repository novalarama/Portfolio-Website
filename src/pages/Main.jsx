import Header from "../components/Header/Header";
import Profile from "./Profile/Profile";
import Educations from "./Educations/Educations";
import Skills from "./Skills/Skills";
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