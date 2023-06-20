import Header from "../components/Header/Header";
import Profile from "./Profile/Profile";
import Educations from "./Educations/Educations";
import Skills from "./Skills/Skills";
import Achievements from "./Achievements/Achievements";
import Experiences from "./Experiences/Experiences";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function Main () {
    return (
        <div className="App">
            <Header />
            <Profile />
            <Educations />
            <Skills />
            <Achievements />
            <Experiences />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}