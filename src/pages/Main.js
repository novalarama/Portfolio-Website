import Header from "../components/Header/Header";
import Profile from "../pages/Profile/Profile";
import Educations from "../pages/Educations/Educations";

export default function Main () {
    return (
        <div className="App">
            <Header />
            <Profile />
            <Educations />
        </div>
    )
}