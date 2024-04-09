import React, { useEffect ,useRef, useState } from "react";
import "../../css/canvas.css"

const Canvas = ({ circles, contentWidth, contentHeight }) => {

    const canvasRef = useRef(null);
    const containerRef = useRef(null);
   
    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = contentWidth;
        const container = containerRef.current;
        canvas.height = container.clientHeight;
        const context = canvas.getContext('2d');

        window.onresize = function() {
          canvas.width = contentWidth;
          canvas.height = container.clientHeight;
        }

        function drawCircle(circle) {
          context.beginPath();
          context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
          context.fillStyle = '#F8B223';
          // context.shadowColor = "rgba(0,0,0,0.3)";
          // context.shadowBlur = 10;
          context.fill();
          context.closePath();
        }
    
        function updateCirclePosition(circle) {
          circle.y += circle.dy;
    
          if (circle.y + circle.dy > circle.moveHeight - circle.radius || circle.y + circle.dy < circle.condition) {
            circle.dy = -circle.dy;
          }
    
          drawCircle(circle);
        }
    
        function draw() {
          context.clearRect(0, 0, canvas.width, canvas.height);
    
          circles.forEach(circle => {
            updateCirclePosition(circle);
          });
        }

        const animationFrame = setInterval(draw, 10);
    
        return () => clearInterval(animationFrame);

      }, []);

    return (
      <div ref={containerRef} style={{ height: `${contentHeight}px` }}>
        <canvas ref={canvasRef}>      
        </canvas>
        <svg style={{ display: "none" }}>
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation=".05" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
      </div>   
    )
}
export default Canvas