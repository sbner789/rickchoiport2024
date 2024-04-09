import React, { useEffect, useRef, useState } from "react";
import "../componets/css/circleChart.css";

const CircleChart = ({ percent, percentValue }) => {
    const [chartAct, setChartAct] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const chartEffect = () => {
            const options = {
                root: null,
                rootMargin: "0px",
                threshold: 0
            }
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting > 0) {
                        setChartAct(entry.isIntersecting);
                    } else {
                        setChartAct(false);
                    }
                });
            }, options);
            observer.observe(domRef.current);
        }
        chartEffect();
    }, [chartAct]);

    return (
        <div className="mobileProgress" ref={domRef}>
            <div className="percent">{percent}</div>
            <svg width="150" height="150" viewBox="0 0 150 150">
                <circle cx="75" cy="75" r="60" fill="none" stroke="#FFFFFF" strokeWidth="5" />
                <circle
                    className="chart"
                    cx="75"
                    cy="75"
                    r="60"
                    fill="none"
                    stroke="#F8B223"
                    strokeWidth="5"
                    strokeDasharray={`calc(${chartAct ? percentValue : 0} * calc(2*3.14*60) / 100) calc(2*3.14*60)`}
                />
            </svg>
        </div>
    )
}
export default CircleChart