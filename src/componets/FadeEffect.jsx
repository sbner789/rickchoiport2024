import { useEffect, useRef, useState } from "react";
import "../componets/css/fadeEffect.css";

const FadeEffect = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const fadeEffect = () => {
            const options = {
                root: null,
                rootMargin: "0px",
                threshold: .3,  
            }
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => setIsVisible(entry.isIntersecting));
            }, options);
            observer.observe(domRef.current);
        }
        fadeEffect();
    }, [isVisible]);

    return (
        <div
            className={`${props.fade} ${isVisible ? "is-visible" : ""}`}
            ref={domRef}
        >
            {props.children}
        </div>
    )
}
export default FadeEffect;

