import React, { useEffect, useState } from "react";
import "../componets/css/mobileMenu.css";
import MainMenu from "../images/mobile_menu.svg";
import MobileMunu from "./MobileMenu";
import MobileClose from "../images/main_menu_close.svg";
import ScrollTopBtn from "../images/scroll_top.svg";

const MobileMenuBtn = ({
    aboutRef,
    skillRef,
    projectRef,
    contactRef,
    scrollTo
}) => {
    const [showMenu, setShowMenu] = useState(false);

    const scrollTopBtn = () => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        window.onresize = function() {
            setShowMenu(false)
        }
        if (showMenu === true) {
            document.body.style.overflow = "hidden"
        }
        return () => document.body.style.overflow = "auto"
    }, [showMenu])

    return (
        <div>
            {
                showMenu ? null :
                    <button
                        className="mobileMenubtn"
                        onClick={() => {
                            setShowMenu(true)
                        }}
                    >
                        <img src={MainMenu} alt="mobile menu open"></img>
                    </button>
            }
            {
                showMenu ?
                    <div
                        style={{
                            position: "fixed",
                            top: "0px",
                            left: "0px",
                            background: "rgba(0, 0, 0, 0.7)",
                            width: "100%",
                            height: "100%",
                            zIndex: "9999",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <MobileMunu
                            aboutRef={aboutRef}
                            skillRef={skillRef}
                            projectRef={projectRef}
                            contactRef={contactRef}
                            scrollTo={scrollTo}
                            setMenu={setShowMenu}
                        />
                        <button
                            className="mobileMenuClose"
                            onClick={() => {
                                setShowMenu(false)
                            }}
                        >
                            <img src={MobileClose} alt="mobile menu close"></img>
                        </button>
                        <button 
                            className="mobileScrollTop"
                            onClick={() => {
                                scrollTopBtn()
                                setShowMenu(false)
                            }}
                        >
                            <img src={ScrollTopBtn} alt="mobile scroll top button"></img>
                        </button>
                    </div>
                    : null
            }
        </div>
    )
}
export default MobileMenuBtn