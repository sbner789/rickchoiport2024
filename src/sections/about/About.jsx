import React, { useEffect } from "react";
import "../about/css/about.css";
import myImage from "../../images/myImage.png";
import birthIcon from "../../images/birth_icon.svg";
import addressIcon from "../../images/Address_icon.svg";
import collegeIcon from "../../images/Collage_icon.svg";
import carrer from "../../images/Career_icon.svg";
import education from "../../images/Education_icon.svg";
import FadeEffect from "../../componets/FadeEffect";
import DrawTitle from "../../componets/DrawTitle";

const About = ({ aboutRef }) => {

    const myInfo = [
        {
            seq: 0,
            imgSrc: birthIcon,
            infoTitle: "Birth",
            infoText: "1994.02.18",
            infoText2: ""
        },
        {
            seq: 1,
            imgSrc: addressIcon,
            infoTitle: "Address",
            infoText: "경기도 수원시",
            infoText2: ""
        },
        {
            seq: 2,
            imgSrc: collegeIcon,
            infoTitle: "College",
            infoText: "한국폴리텍대학(전자과)",
            infoText2: ""
        },
        {
            seq: 3,
            imgSrc: carrer,
            infoTitle: "Career",
            infoText: "한성컴퓨터 20.03 ~ 21.03",
            infoText2: "코드리치 22.11 ~ 23.09"
        },
        {
            seq: 4,
            imgSrc: education,
            infoTitle: "Education",
            infoText: "비트교육센터 22.02 ~ 22.08",
            infoText2: "SBSART 23.08 ~ 24.03"
        },
    ]

    const arrSpilt = (data, size) => {
        const arr = [];

        for (let i = 0; i < data.length; i += size) {
            arr.push(data.slice(i, i + size));
        }

        return arr;
    }

    return (
        <div className="about" ref={aboutRef}>
            <FadeEffect
                fade={"fade-in-section"}
            >
                <h2>
                    <DrawTitle>
                        <svg className="aboutTitleMobile" width="138.001" height="71.572" viewBox="0 0 138.001 71.572">
                            <g id="mobile_about" transform="translate(-0.55 -0.5)" fill="#FFFFFF">
                                <path id="A" d="M18.655,52.032l-.734-8.321H10.775l-.646,8.321H1.1L6,1.469h16.62l4.808,50.563ZM11.433,36.479h5.782L14.868,9.258H13.475Z" stroke="#FFFFFF" strokeWidth="1"/>
                                <path id="B" d="M31.645,52.032V1.469H45.151c3.6,0,6.236.868,7.842,2.581s2.434,4.649,2.434,8.7V15a11.23,11.23,0,0,1-1.24,5.638,5.689,5.689,0,0,1-3.673,2.727l-1.879.494,1.884.474a5.793,5.793,0,0,1,4.336,3.8,22.625,22.625,0,0,1,1.159,7.723,35.956,35.956,0,0,1-.925,8.638,10.362,10.362,0,0,1-3.243,5.57c-1.544,1.3-3.8,1.962-6.695,1.962Zm9.1-8.184.455.041c.449.041.807.061,1.072.061,2.959,0,4.523-1.491,4.523-4.309V33.2a8.122,8.122,0,0,0-.717-3.7,3.006,3.006,0,0,0-2.925-1.544H40.746Zm0-22.955H43.36a2.222,2.222,0,0,0,2.319-1.439,8.252,8.252,0,0,0,.442-2.84V11.428c0-1.929-.96-2.99-2.7-2.99H40.746Z" stroke="#FFFFFF" strokeWidth="1"/>
                                <path id="O" d="M72.252,52.5c-3.96,0-7.02-1.2-9.093-3.565-2.091-2.384-3.15-5.906-3.15-10.466V13.976c0-4.261,1.045-7.526,3.108-9.7S68.245,1,72.252,1s7.081,1.1,9.135,3.271,3.108,5.444,3.108,9.7V38.469c0,4.56-1.059,8.082-3.15,10.466C79.272,51.3,76.212,52.5,72.252,52.5M72.4,9.492c-1.407,0-3.084.763-3.084,4.4V39.025a7.769,7.769,0,0,0,.652,3.689,2.557,2.557,0,0,0,2.373,1.294c1.891,0,2.849-1.7,2.849-5.041V13.8c0-3.562-1.517-4.309-2.79-4.309" stroke="#FFFFFF" strokeWidth="1"/>
                                <path id="U" d="M101.115,52.5c-4.133,0-7.2-1.157-9.131-3.44-1.948-2.308-2.936-5.783-2.936-10.328V1.469H98.09V38.322a20.71,20.71,0,0,0,.15,2.537A4.8,4.8,0,0,0,99,43.031a2.4,2.4,0,0,0,2.114.977,2.453,2.453,0,0,0,2.141-.958A4.627,4.627,0,0,0,104,40.867a23.544,23.544,0,0,0,.135-2.545V1.469h9.042V38.732c0,4.545-.987,8.02-2.936,10.328-1.926,2.283-5,3.44-9.131,3.44" stroke="#FFFFFF" strokeWidth="1"/>
                                <path id="T" d="M122.579,52.031V10.371h-6.137v-8.9h21.609v8.9h-6.137v41.66Z" stroke="#FFFFFF" strokeWidth="1"/>
                                <rect id="사각형_1" data-name="사각형 1" width="137" height="13" transform="translate(1.051 58.572)" stroke="#FFFFFF" strokeWidth="1"/>
                            </g>
                        </svg>
                        <svg className="aboutTitle" width="275.466" height="143.144" viewBox="0 0 275.466 143.144">
                            <g id="pc_about" transform="translate(-1.102 -1.001)" fill="#FFFFFF">
                                <path id="A" d="M37.233,104.063l-1.465-16.64H21.5l-1.29,16.64H2.2L11.971,2.938H45.133l9.6,101.125ZM22.817,72.958H34.359L29.675,18.517H26.893Z" stroke="#FFFFFF" strokeWidth="2"/>
                                <path id="B" d="M63.156,104.063V2.938H90.105c7.176,0,12.44,1.737,15.647,5.162,3.223,3.445,4.857,9.3,4.857,17.393V30c0,4.643-.832,8.437-2.473,11.277a11.361,11.361,0,0,1-7.329,5.451l.01,1.937a11.567,11.567,0,0,1,8.652,7.607,45.362,45.362,0,0,1,2.312,15.446A72.129,72.129,0,0,1,109.936,89a20.73,20.73,0,0,1-6.473,11.14c-3.08,2.6-7.574,3.923-13.358,3.923ZM81.312,87.695l.909.083c.88.08,1.6.121,2.142.121,5.906,0,9.027-2.98,9.027-8.617V66.391a16.276,16.276,0,0,0-1.43-7.4c-1.06-2.05-3.025-3.09-5.839-3.09H81.312Zm0-45.909h5.219c2.948,0,4.145-1.566,4.63-2.881a16.52,16.52,0,0,0,.881-5.678V22.856c0-3.856-1.916-5.98-5.394-5.98H81.312Z" stroke="#FFFFFF" strokeWidth="2"/>
                                <path id="O" d="M144.187,105c-7.9,0-14.007-2.4-18.144-7.129-4.171-4.769-6.286-11.812-6.286-20.934V27.954c0-8.524,2.087-15.054,6.2-19.411C130.058,4.2,136.191,2,144.187,2s14.128,2.2,18.229,6.542c4.114,4.357,6.2,10.888,6.2,19.411V76.938c0,9.121-2.116,16.164-6.286,20.934C158.194,102.6,152.089,105,144.187,105m.293-86.016c-2.809,0-6.156,1.525-6.156,8.793V78.051c0,3.412.425,5.824,1.3,7.376a5.1,5.1,0,0,0,4.738,2.589c3.774,0,5.687-3.392,5.687-10.082V27.6c0-7.122-3.029-8.617-5.57-8.617" stroke="#FFFFFF" strokeWidth="2"/>
                                <path id="U" d="M201.785,105c-8.245,0-14.375-2.315-18.22-6.88-3.887-4.617-5.858-11.566-5.858-20.655V2.938h18.039V76.646a41.509,41.509,0,0,0,.3,5.074,9.615,9.615,0,0,0,1.517,4.343,4.8,4.8,0,0,0,4.221,1.954,4.889,4.889,0,0,0,4.274-1.918,9.238,9.238,0,0,0,1.5-4.364,47.086,47.086,0,0,0,.269-5.089V2.938h18.039V77.466c0,9.089-1.971,16.038-5.858,20.655-3.846,4.565-9.976,6.88-18.22,6.88" stroke="#FFFFFF" strokeWidth="2"/>
                                <path id="T" d="M244.621,104.063V20.743H232.375V2.938h43.117V20.743H263.246v83.32Z" stroke="#FFFFFF" strokeWidth="2"/>
                                <rect id="사각형_7" data-name="사각형 7" width="273" height="16" transform="translate(2.568 127.145)" stroke="#FFFFFF" strokeWidth="2"/>
                            </g>
                        </svg>
                    </DrawTitle>
                </h2>
            </FadeEffect>
            <FadeEffect
                fade={"fade-in-section"}
            >    
                <img className="myImg" src={myImage} alt="rickChoi photo"></img>
            </FadeEffect>
            <FadeEffect
                fade={"fade-in-section"}
            >
                <div className="aboutContent">
                    <h3>안녕하세요 끈기있는<br /> 개발자 최원재입니다!!</h3>
                    <p>스스로가 부끄럽지 않는 개발자가 <br />
                        되기 위해 하나를 배우더라도 확실하게 <br />
                        습득하는 습관을 가지고 프로젝트에 <br />
                        필요한 능력에 따라 항상 철저히 준비를 하는 <br />
                        항상 겸손한 마음가짐을 가진 <br />
                        그런 개발자가 되겠습니다.
                    </p>
                </div>
            </FadeEffect>
            <div className="mobileMyInfo">
                {
                    myInfo.map((info) =>
                        <FadeEffect fade={"fade-in-section"} key={info.seq}>
                            <div className="myInfoLayout">
                                <div className="myInfoTitle">
                                    <span className="infoIcon" style={{
                                        background: `url(${info.imgSrc}) no-repeat center`,
                                        width: "30px",
                                        height: "30px"
                                    }}
                                    ></span>
                                    <h4>{info.infoTitle}</h4>
                                </div>
                                <div className="myInfoText">
                                    <p>
                                        {info.infoText}
                                    </p>
                                    {info.infoText2.length > 0 ? <p>
                                        {info.infoText2}
                                    </p> :
                                        null
                                    }
                                </div>
                            </div>
                        </FadeEffect>
                    )
                }
            </div>
            <div className="myInfoContainer">
                <div className="myInfo">
                    {
                        arrSpilt(myInfo, 3)[0].map((arr) =>
                            <FadeEffect fade={"fade-in-section"} key={arr.seq}>
                                <div className="myInfoLayout">
                                    <div className="myInfoTitle">
                                        <span className="infoIcon" style={{
                                            background: `url(${arr.imgSrc}) no-repeat center`,
                                            width: "30px",
                                            height: "30px"
                                        }}
                                        ></span>
                                        <h4>{arr.infoTitle}</h4>
                                    </div>
                                    <div className="myInfoText">
                                        <p>
                                            {arr.infoText}
                                        </p>
                                        {arr.infoText2.length > 0 ? <p>
                                            {arr.infoText2}
                                        </p> :
                                            null
                                        }
                                    </div>
                                </div>
                            </FadeEffect>
                        )
                    }
                </div>
                <div className="myInfo">
                    {
                        arrSpilt(myInfo, 3)[1].map((arr) =>
                            <FadeEffect fade={"fade-in-section"} key={arr.seq}>
                                <div className="myInfoLayout">
                                    <div className="myInfoTitle">
                                        <span className="infoIcon" style={{
                                            background: `url(${arr.imgSrc}) no-repeat center`,
                                            width: "30px",
                                            height: "30px"
                                        }}
                                        ></span>
                                        <h4>{arr.infoTitle}</h4>
                                    </div>
                                    <div className="myInfoText">
                                        <p>
                                            {arr.infoText}
                                        </p>
                                        {arr.infoText2.length > 0 ? <p>
                                            {arr.infoText2}
                                        </p> :
                                            null
                                        }
                                    </div>
                                </div>
                            </FadeEffect>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default About