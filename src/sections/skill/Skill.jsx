import React from "react";
import "../skill/css/skill.css";
import clientIcon from "../../images/Client_icon.svg";
import serverIcon from "../../images/Server_icon.svg";
import etcIcon from "../../images/Etc_icon.svg";
import FadeEffect from "../../componets/FadeEffect";
import ProgressAct from "../../componets/ProgressAct";
import CircleChart from "../../componets/CircleChart";
import DrawTitle from "../../componets/DrawTitle";

const Skill = ({ skillRef }) => {
   
    return (
        <div className="skill" ref={skillRef}>
            <FadeEffect
                fade={"fade-in-section"}
            >
                <h2>
                    <DrawTitle>
                        <svg className="mobileSkillTitle" width="115" height="71.572" viewBox="0 0 115 71.572">
                            <g id="mobile_skill" transform="translate(-0.5 -0.5)" fill="#FFFFFF">
                                <path id="S" d="M13.752,52.5c-4.519,0-7.8-1.126-9.769-3.347C2,46.914,1,43.261,1,38.293V33.754h9.157V39.7a6.4,6.4,0,0,0,.6,3.034,2.434,2.434,0,0,0,2.323,1.275,2.622,2.622,0,0,0,2.358-1.045,5.466,5.466,0,0,0,.623-2.971,14.855,14.855,0,0,0-.488-4.11,9.413,9.413,0,0,0-1.708-3.218,34.8,34.8,0,0,0-3.243-3.435L6.01,24.835A14.618,14.618,0,0,1,1,14.006c0-4.249.984-7.519,2.925-9.718C5.85,2.106,8.693,1,12.379,1c4.525,0,7.767,1.207,9.632,3.588,1.833,2.336,2.791,5.927,2.854,10.676H15.418V12.219A2.546,2.546,0,0,0,12.7,9.492a2.678,2.678,0,0,0-2.179.869,3.184,3.184,0,0,0-.684,2.092,6.138,6.138,0,0,0,.629,2.554,10.769,10.769,0,0,0,2.415,3.053L18.8,23.771a33.919,33.919,0,0,1,3.225,3.538,15.249,15.249,0,0,1,2.316,4.254,17.7,17.7,0,0,1,.875,5.939c0,4.724-.872,8.462-2.591,11.109-1.673,2.58-4.661,3.889-8.876,3.889" stroke="#FFFFFF" strokeWidth="1" />
                                <path id="K" d="M45.354,52.031l-5.517-24.57-.987.109V52.031H29.633V1.468H38.79V21.623l.987.113,4.7-20.268h9.3L48.144,24.583l6.822,27.448Z" stroke="#FFFFFF" strokeWidth="1" />
                                <rect id="I" width="8.924" height="50.563" transform="translate(57.391 1.468)" stroke="#FFFFFF" strokeWidth="1" />
                                <path id="L" d="M71.4,52.031V1.468h9.274V44.242H91.241v7.789Z" stroke="#FFFFFF" strokeWidth="1" />
                                <path id="L2" d="M95.16,52.031V1.468h9.274V44.242H115v7.789Z" stroke="#FFFFFF" strokeWidth="1" />
                                <rect id="사각형_2" data-name="사각형 2" width="114" height="13" transform="translate(1 58.572)" stroke="#FFFFFF" strokeWidth="1" />
                            </g>
                        </svg>
                        <svg className="skillTitle" width="231.314" height="143.144" viewBox="0 0 231.314 143.144">
                            <g id="pc_skill" transform="translate(-1 -1.001)" fill="#FFFFFF">
                                <path id="S" d="M27.6,105c-9.072,0-15.671-2.252-19.613-6.695C4.015,93.829,2,86.522,2,76.587V67.509H20.391V79.4a12.791,12.791,0,0,0,1.2,6.069,4.89,4.89,0,0,0,4.66,2.549c2.223,0,3.815-.7,4.731-2.09.841-1.273,1.25-3.217,1.25-5.942a29.74,29.74,0,0,0-.978-8.22,18.892,18.892,0,0,0-3.43-6.436,69.443,69.443,0,0,0-6.512-6.872L12.06,49.67C5.384,43.372,2,36.086,2,28.013c0-8.5,1.976-15.035,5.872-19.435C11.737,4.214,17.449,2,24.848,2c9.087,0,15.594,2.415,19.341,7.177,3.677,4.673,5.6,11.852,5.727,21.35H30.946v-6.09a5.352,5.352,0,0,0-1.5-4,5.439,5.439,0,0,0-3.95-1.457,5.377,5.377,0,0,0-4.373,1.739,6.353,6.353,0,0,0-1.373,4.183,12.209,12.209,0,0,0,1.265,5.11,21.469,21.469,0,0,0,4.847,6.1l11.89,11.422a68.093,68.093,0,0,1,6.471,7.076,30.376,30.376,0,0,1,4.649,8.51A35.225,35.225,0,0,1,50.625,75c0,9.446-1.749,16.921-5.2,22.218C42.065,102.384,36.068,105,27.6,105" stroke="#FFFFFF" strokeWidth="2"/>
                                <path id="K" d="M91.038,104.063,79.964,54.921l-1.976.22v48.922H59.48V2.938H77.871V43.247l1.974.226L89.274,2.938h18.675l-11.3,46.229,13.7,54.9Z" stroke="#FFFFFF" strokeWidth="2"/>
                                <rect id="I" width="17.922" height="101.125" transform="translate(115.203 2.938)" stroke="#FFFFFF" strokeWidth="2"/>
                                <path id="L" d="M143.328,104.063V2.938h18.625V88.485h21.211v15.578Z" stroke="#FFFFFF" strokeWidth="2"/>
                                <path id="L2" d="M191.023,104.063V2.938h18.625V88.485h21.211v15.578Z" stroke="#FFFFFF" strokeWidth="2"/>
                                <rect id="사각형_9" data-name="사각형 9" width="229" height="16" transform="translate(2.314 127.145)" stroke="#FFFFFF" strokeWidth="2"/>
                            </g>
                        </svg>
                    </DrawTitle>
                </h2>
            </FadeEffect>
            <div className="skillContent">
                {
                    [
                        {
                            seq: 0,
                            imgSrc: clientIcon,
                            title: "Client",
                            content: [
                                {
                                    seq: 0,
                                    title: "HTML5",
                                    percent: "80%",
                                    percentValue: 80
                                },
                                {
                                    seq: 1,
                                    title: "CSS3",
                                    percent: "80%",
                                    percentValue: 80
                                },
                                {
                                    seq: 2,
                                    title: "JAVASCRIPT",
                                    percent: "76%",
                                    percentValue: 76
                                },
                                {
                                    seq: 3,
                                    title: "REACT",
                                    percent: "70%",
                                    percentValue: 70
                                }
                            ]
                        },
                        {
                            seq: 1,
                            imgSrc: serverIcon,
                            title: "Server",
                            content: [
                                {
                                    seq: 0,
                                    title: "Node.js",
                                    percent: "55%",
                                    percentValue: 55
                                },
                                {
                                    seq: 1,
                                    title: "Express.js",
                                    percent: "50%",
                                    percentValue: 50
                                },
                                {
                                    seq: 2,
                                    title: "Koa",
                                    percent: "48%",
                                    percentValue: 48
                                },
                                {
                                    seq: 3,
                                    title: "Springboot",
                                    percent: "35%",
                                    percentValue: 35
                                }
                            ]
                        },
                        {
                            seq: 2,
                            imgSrc: etcIcon,
                            title: "Etc",
                            content: [
                                {
                                    seq: 0,
                                    title: "Slack",
                                    percent: "95%",
                                    percentValue: 95
                                },
                                {
                                    seq: 1,
                                    title: "Github",
                                    percent: "75%",
                                    percentValue: 75
                                },
                                {
                                    seq: 2,
                                    title: "Sourcetree",
                                    percent: "73%",
                                    percentValue: 73
                                },
                                {
                                    seq: 3,
                                    title: "SVN",
                                    percent: "50%",
                                    percentValue: 50
                                }
                            ]
                        }
                    ].map((el) =>
                        <div className="contentLayout" key={el.seq}>
                                <FadeEffect
                                    fade={"fadeRight-in-section"}
                                >
                                <div className="contentTitleWrap">
                                    <div className="contentTitle">
                                        <span style={{ background: `url(${el.imgSrc}) no-repeat center/contain`}}></span>
                                        <h3>{el.title}</h3>
                                    </div>
                                </div>    
                                </FadeEffect>
                            <FadeEffect
                                fade={"fade-in-section"}
                            >
                                <div className="contentItemsLayout">
                                    <div className="contentItems">
                                        {el.content.map((el2) =>
                                            <div className="contentWrap" key={el2.seq}>
                                                    <h4>{el2.title}</h4>
                                                    <CircleChart percent={el2.percent} percentValue={el2.percentValue} />
                                                    <div className="progressLayout">
                                                            <ProgressAct percent={el2.percent} />
                                                        <p>{el2.percent}</p>
                                                    </div>
                                            </div>  
                                        )}
                                    </div>
                                </div>
                            </FadeEffect>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Skill