import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

export default function Header() {
    const [menuOpened, setMenuOpened] = useState(false);

    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menuOpened && "-100%" }
        }
    }

    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./assets/logo.png" alt="Logo" width={100} />
                <OutsideClickHandler onOutsideClick={() => {setMenuOpened(false)}}>
                    <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                        <a href="">
                            Profile
                        </a>
                        <a href="">
                            Educations
                        </a>
                        <a href="">
                            Skills
                        </a>
                        <a href="">
                            Achievements
                        </a>
                        <a href="">
                            Experiences
                        </a>
                        <a href="">
                            Projects
                        </a>
                        <a href="">
                            Contact
                        </a>
                    </div>
                <div className="menu-icon" onClick={() => {setMenuOpened((prev) => !prev); console.log(menuOpened);}}>
                    <BiMenuAltRight size={30} />
                </div>
                </OutsideClickHandler>
            </div>
        </section>
    )
}