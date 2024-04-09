import React from "react";
import "../componets/css/mobileMenu.css";

const MobileMunu = ({ 
    aboutRef, 
    skillRef, 
    projectRef, 
    contactRef,
    scrollTo,
    setMenu
}) => {
    return (
        <div className="mobileMenu">
            <div className="mobileMenuItems">
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
                            setMenu(false)
                        }}>
                            {menu.menuName}
                        </a>
                    )
                }
            </div>
        </div>
    )
}
export default MobileMunu