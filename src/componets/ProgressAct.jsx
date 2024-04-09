import React, { useEffect, useRef, useState } from "react";
import "../componets/css/progress.css";

const ProgressAct = ({percent}) => {
    const [startAct, setStartAct] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const progressEffect = () => {
            const options = {
                root: null,
                rootMargin: "0px",
                threshold: 0
            }
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting > 0) {
                        setStartAct(entry.isIntersecting);
                    } else {
                        setStartAct(false);
                    }                
                }
                );
            }, options);
            observer.observe(domRef.current);
        }
        progressEffect()
    }, [startAct]);

    return (
        <div className="progress" ref={domRef}>
            <div className="progressBar"
                style={{
                    backgroundColor: "#F8B223",
                    height: "12px",
                    borderRadius: "12px",
                    width: startAct ? `${percent}` : "0px"
                }}
            >
            </div>
        </div>
    )
}
export default ProgressAct