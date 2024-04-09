import React, { useEffect, useRef, useState } from "react";
import "../componets/css/drawTitle.css";

const DrawTitle = (props) => {
    const [ draw, setDraw ] = useState(false);
    const drawRef = useRef(null);

    useEffect(() => {
        const drawEffect = () => {
            const options = {
                root: null,
                rootMargin: "0px",
                threshold: 0
            }
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => setDraw(entry.isIntersecting));
            }, options);
            observer.observe(drawRef.current);
        }
        drawEffect()
        window.addEventListener("scroll", drawEffect);
        return () => {
            window.removeEventListener("scroll", drawEffect);
        };
    }, [draw])

    return (
        <div className={`${draw ? "is-draw" : ""}`} ref={drawRef}>
            {props.children}
        </div>
    )
}
export default DrawTitle