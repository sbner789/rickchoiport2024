import React, { useEffect, useState } from "react";
import "../css/header.css";
import MainLogo from "../images/main_logo.svg";
import MainMenu from "../images/main_menu.svg";
import MenuCloseBtn from "../images/main_menu_close.svg";
import MobileMunu from "./MobileMenu";

const Header = ({ aboutRef, skillRef, projectRef, contactRef, navState, scrollTo }) => {
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        window.onresize = function() {
            setMenu(false)
        }
        if (menu === true) {
            document.body.style.overflow = "hidden"
        }
        return () => document.body.style.overflow = "auto"
    }, [menu])


    return (
        <header>
            <div className="header">
                <div className="mainLogoLayout">
                    <h1>
                        <a href="/rickchoi">
                            <img src={MainLogo} alt="rickchoiweb"></img>
                        </a>
                    </h1>
                </div>
                {
                    menu ? null :
                        <button className="mobileMenuIconLayout" onClick={() => {
                            setMenu(true)
                        }}>
                            <img src={MainMenu} alt="menu_icon"></img>
                        </button>
                }
                {
                    menu ?
                        <div className="mobileMenuLayout">
                            <div className="mobileHeader">
                                <div className="mainLogoLayout">
                                    <img src={MainLogo} alt="main_logo"></img>
                                </div>
                                <button className="mobileMenuIconLayout" onClick={() => {
                                    setMenu(false)
                                }}>
                                    <img src={MenuCloseBtn} alt="main_close"></img>
                                </button>
                            </div>
                            <MobileMunu 
                                aboutRef={aboutRef}
                                skillRef={skillRef}
                                projectRef={projectRef}
                                contactRef={contactRef}
                                scrollTo={scrollTo}
                                setMenu={setMenu}
                            />
                        </div>
                        : null
                }
                <div className="menuLayout">
                    <nav>
                        <h2 className="screenOut">주메뉴 영역</h2>
                        <div className="menuItems">
                            {
                                [
                                    {
                                        seq: 0,
                                        menuName: "ABOUT",
                                        scrollRef: aboutRef
                                    },
                                    {
                                        seq: 1,
                                        menuName: "SKILL",
                                        scrollRef: skillRef
                                    },
                                    {
                                        seq: 2,
                                        menuName: "PROJECT",
                                        scrollRef: projectRef
                                    },
                                    {
                                        seq: 3,
                                        menuName: "CONTACT",
                                        scrollRef: contactRef
                                    }
                                ].map((menu) =>
                                    <a href="#rickchoi" key={menu.seq} onClick={() => {
                                        scrollTo(menu.scrollRef)
                                    }}>
                                        {menu.menuName}
                                    </a>
                                )
                            }
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Header