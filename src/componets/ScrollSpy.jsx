import React, { useState } from "react";
import "../componets/css/scrollSpy.css";

const ScrollSpy = ({ aboutRef, skillRef, projectRef, contactRef, navState, scrollTo }) => {

    const [title, setTitle] = useState("");

    const scrollTopBtn = () => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className="scrollSpy">
            <div className="scrollSpyLayout">
                {
                    [
                        {
                            seq: 0,
                            scrollRef: aboutRef,
                            scrollId: "aboutRef",
                            title: "about"
                        },
                        {
                            seq: 1,
                            scrollRef: skillRef,
                            scrollId: "skillRef",
                            title: "skill"
                        },
                        {
                            seq: 2,
                            scrollRef: projectRef,
                            scrollId: "projectRef",
                            title: "project"
                        },
                        {
                            seq: 3,
                            scrollRef: contactRef,
                            scrollId: "contactRef",
                            title: "contact"
                        }
                    ].map((el) => (
                        <div className="navLayout" key={el.seq}>
                            {
                                title === el.title ? 
                                (
                                   <span className="navTitle">{el.title}</span>     
                                ) : null
                            }
                            <span
                                className="navDot"
                                style={{
                                    background: navState === el.scrollId ? "#FFFFFF" : "transparent",
                                }}
                                onClick={() => {
                                    scrollTo(el.scrollRef);
                                }}
                                onMouseOver={() => {
                                    setTitle(el.title)
                                }}
                                onMouseOut={() => {
                                    setTitle("")
                                }}
                                title={el.title}
                            >
                                {el.title}
                            </span>
                        </div>
                    ))
                }
                <span
                    className="scrolltop"
                    onClick={() => {
                        scrollTopBtn()
                    }}
                >
                    scrollTop
                </span>
            </div>
        </div>
    )
}
export default ScrollSpy