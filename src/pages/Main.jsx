import React from "react";
import "../css/main.css";
import About from "../sections/about/About";
import Skill from "../sections/skill/Skill";
import Project from "../sections/project/Project";
import Contact from "../sections/contact/Contact";
import FadeEffect from "../componets/FadeEffect";
import Canvas from "../componets/background/Canvas";
import "../css/canvas.css";

const Main = ({
    aboutRef,
    skillRef,
    projectRef,
    contactRef
}) => {
    return (
        <main>
            <section>
                <div className="mainLayout">
                    <div className="mainContent">
                        <h2>
                            <FadeEffect
                                fade={"fadeRight-in-section"}
                            >
                                <span className="mainDes">Hello i'm</span>
                            </FadeEffect>
                            <FadeEffect
                                fade={"fadeRight-in-section"}
                            >
                                <span className="mainDesPoint">RickChoi</span>
                            </FadeEffect>
                            <FadeEffect
                                fade={"fadeRight-in-section"}
                            >
                                <span className="mainDes">Front-end Developer </span>
                            </FadeEffect>
                        </h2>
                    </div>
                </div>
            </section>
            <section>
                <div className="canvasLayout">
                    <div className="aboutObject01">
                        <Canvas
                            circles={[
                            { x: 217, y: 203, dy: -0.1, radius: 154, moveHeight: 400, condition: 200 },
                            { x: 83, y: 475, dy: 0.2, radius: 75, moveHeight: 550, condition: 400 },
                            { x: 298, y: 444, dy: -0.2, radius: 13, moveHeight: 500, condition: 430 },
                            { x: 392, y: 357, dy: 0.18, radius: 40, moveHeight: 400, condition: 300 },
                            ]}
                            contentWidth={440}
                            contentHeight={600}
                        />
                    </div>
                    <div className="aboutObject02">
                        <Canvas
                            circles={[
                            { x: 280, y: 300, dy: -0.2, radius: 250, moveHeight: 580, condition: 300 },
                            { x: 96, y: 484, dy: 0.12, radius: 66, moveHeight: 550, condition: 450 },
                            { x: 548, y: 144, dy: -0.18, radius: 22, moveHeight: 200, condition: 140 },
                            ]}
                            contentWidth={600}
                            contentHeight={600}
                        />
                    </div>
                </div>
                <About aboutRef={aboutRef} />
            </section>
            <section>
                <Skill skillRef={skillRef} />
            </section>
            <section>
                <div className="canvasLayout">
                    <div className="projectObject01">
                        <Canvas
                            circles={[
                                { x: 202, y: 212, dy: 0.15, radius: 170, moveHeight: 400, condition: 200 },
                                { x: 292, y: 418, dy: -0.2, radius: 75, moveHeight: 500, condition: 400 },
                                { x: 402, y: 329, dy: -0.15, radius: 14, moveHeight: 400, condition: 300 },
                                { x: 471, y: 246, dy: 0.2, radius: 47, moveHeight: 300, condition: 200 },
                                { x: 469, y: 480, dy: -0.2, radius: 27, moveHeight: 530, condition: 480 },
                            ]}
                            contentWidth={550}
                            contentHeight={550}
                        />
                    </div>
                    <div className="projectObject02">
                        <Canvas
                            circles={[
                                { x: 371, y: 298, dy: -0.1, radius: 27, moveHeight: 330, condition: 280 },
                                { x: 184, y: 335, dy: 0.18, radius: 166, moveHeight: 530, condition: 320 },
                                { x: 198, y: 163, dy: -0.12, radius: 46, moveHeight: 250, condition: 160 },
                                { x: 365, y: 149, dy: -0.2, radius: 21, moveHeight: 200, condition: 130 },
                                { x: 480, y: 99, dy: 0.1, radius: 50, moveHeight: 150, condition: 80 },
                                { x: 498, y: 198, dy: 0.12, radius: 14, moveHeight: 250, condition: 180 },
                            ]}
                            contentWidth={550}
                            contentHeight={550}
                        />
                    </div>
                    <div className="projectObject03">
                        <Canvas
                            circles={[
                                { x: 309, y: 261, dy: -0.12, radius: 131, moveHeight: 400, condition: 250 },
                                { x: 64, y: 378, dy: 0.18, radius: 14, moveHeight: 400, condition: 350 },
                                { x: 100, y: 79, dy: -0.2, radius: 50, moveHeight: 150, condition: 60 },
                                { x: 147, y: 235, dy: 0.25, radius: 31, moveHeight: 300, condition: 220 },
                                { x: 254, y: 362, dy: 0.15, radius: 30, moveHeight: 400, condition: 330 },
                                { x: 248, y: 204, dy: -0.16, radius: 10, moveHeight: 220, condition: 180 },
                                { x: 374, y: 140, dy: 0.1, radius: 18, moveHeight: 160, condition: 120 },
                                { x: 396, y: 262, dy: 0.28, radius: 61, moveHeight: 360, condition: 260 },
                            ]}
                            contentWidth={500}
                            contentHeight={450}
                        />
                    </div>
                </div>    
                <Project projectRef={projectRef} />
            </section>
            <section>
                <Contact contactRef={contactRef} />
            </section>
        </main>
    )
}
export default Main