import React, { useState, useEffect } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

export default function Header() {
    const [menuOpened, setMenuOpened] = useState(false);
    const [sticky, setSticky] = useState(false);

    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menuOpened && "-100%" }
        }
    }

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setSticky(true);
            console.log('masuk 1');
        } else {
            setSticky(false);
            console.log('masuk 2');
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className={`h-wrapper top-element ${sticky ? "sticky" : ""}`}>
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./assets/photo/logo.png" alt="Logo" width={100} />
                <OutsideClickHandler onOutsideClick={() => { setMenuOpened(false) }}>
                    <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                        <a href="#profile">
                            Profile
                        </a>
                        <a href="#educations">
                            Educations
                        </a>
                        <a href="#skills">
                            Skills
                        </a>
                        <a href="#achievements">
                            Achievements
                        </a>
                        <a href="#experiences">
                            Experiences
                        </a>
                        <a href="#projects">
                            Projects
                        </a>
                        <a href="#contact">
                            Contact
                        </a>
                    </div>
                    <div className="menu-icon" onClick={() => { setMenuOpened((prev) => !prev); console.log(menuOpened); }}>
                        <BiMenuAltRight size={30} />
                    </div>
                </OutsideClickHandler>
            </div>
        </section>
    )
}