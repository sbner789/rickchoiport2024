import React, { useEffect, useState } from "react";
import "../project/css/project.css";
import html5Icon from "../../images/HTML5_logo.svg";
import css3Icon from "../../images/CSS3_logo.svg";
import javascriptIcon from "../../images/Javascript_logo.svg";
import reactIcon from "../../images/REACT_logo.svg";
import mysqlIcon from "../../images/MySQL_logo.svg";
import nodejsIcon from "../../images/Node.js_logo.svg";
import csharpIcon from "../../images/CSharp_logo.svg";
import koaIcon from "../../images/Koa_logo.svg";
import FadeEffect from "../../componets/FadeEffect";
import DrawTitle from "../../componets/DrawTitle";

const Project = ({ projectRef }) => {

    const [detail, setDetail] = useState("");

    useEffect(() => {
        if (detail !== "") {
            document.body.style.overflow = "hidden"
        }
        return () => document.body.style.overflow = "auto"
    }, [detail])

    return (
        <div className="project" ref={projectRef}>
            <FadeEffect
                fade={"fade-in-section"}
            >
                <h2>
                    <DrawTitle>
                        <svg className="mobileTitle" width="188.36" height="71.572" viewBox="0 0 188.36 71.572">
                            <g id="mobile_project" transform="translate(-0.226 -0.5)" fill="#FFFFFF">
                                <path id="P" d="M1,52.032V1.469H14.123a10.516,10.516,0,0,1,6.48,1.8,9.972,9.972,0,0,1,3.413,5.169,28.251,28.251,0,0,1,1.062,8.231,32.163,32.163,0,0,1-.892,8.034,9.512,9.512,0,0,1-3.07,5.115,9.758,9.758,0,0,1-6.29,1.791H10.137v20.42Zm9.137-28.678h1.086c2.13,0,3.469-.647,3.98-1.926a13.755,13.755,0,0,0,.68-4.931,13.144,13.144,0,0,0-.664-4.71c-.5-1.27-1.659-1.913-3.439-1.913H10.137Z" stroke="#FFFFFF" strokeWidth="1" />
                                <path id="R" d="M43.656,52.031V32.345c0-1.711-.383-2.766-1.17-3.228a6.516,6.516,0,0,0-3.227-.611h-.5V52.031H29.33V1.468H44.65c2.5,0,4.4.564,5.644,1.675a8.591,8.591,0,0,1,2.553,4.771,36.586,36.586,0,0,1,.678,7.5,17.147,17.147,0,0,1-1.03,6.543,5.658,5.658,0,0,1-3.723,3.206l-1.794.587,1.849.379A4.106,4.106,0,0,1,51.9,28.281a10.472,10.472,0,0,1,.927,4.738V52.031ZM38.818,20.57h2.99c1.751,0,2.639-1.735,2.639-5.158a10.768,10.768,0,0,0-.522-4.179,2.254,2.254,0,0,0-2.2-1.214h-2.9Z" stroke="#FFFFFF" strokeWidth="1" />
                                <path id="O" d="M69.729,52.5c-3.952,0-7-1.2-9.072-3.565-2.086-2.384-3.143-5.906-3.143-10.466V13.976c0-4.261,1.043-7.527,3.1-9.7S65.73,1,69.729,1s7.063,1.1,9.114,3.271,3.1,5.445,3.1,9.7V38.469c0,4.56-1.057,8.082-3.143,10.466C76.731,51.3,73.679,52.5,69.729,52.5m.146-43.008c-1.4,0-3.078.763-3.078,4.4V39.025a7.8,7.8,0,0,0,.65,3.689,2.554,2.554,0,0,0,2.369,1.294c1.888,0,2.844-1.7,2.844-5.041V13.8c0-3.562-1.514-4.309-2.785-4.309" stroke="#FFFFFF" strokeWidth="1" />
                                <path id="J" d="M98.029,52.5a14.346,14.346,0,0,1-6.145-1.3,10.2,10.2,0,0,1-4.346-3.815,11.481,11.481,0,0,1-1.607-6.25V28.715h9.2V40.52a4.37,4.37,0,0,0,.625,2.444,2.415,2.415,0,0,0,2.16,1.044c1.051,0,2.814-.435,2.814-3.342V1.469h9.4V39.641a14.4,14.4,0,0,1-1.552,6.868,11,11,0,0,1-4.261,4.431,12.479,12.479,0,0,1-6.285,1.56" stroke="#FFFFFF" strokeWidth="1" />
                                <path id="E" d="M115.082,52.031V1.468h19.625v8.961H124.57V21.478H134.3v8.7H124.57V42.982h10.811v9.049Z" stroke="#FFFFFF" strokeWidth="1" />
                                <path id="C" d="M151.291,52.5a11.6,11.6,0,0,1-8.651-3.336c-2.171-2.217-3.271-5.382-3.271-9.406V15.969c0-4.866.967-8.63,2.875-11.186,1.873-2.511,5-3.783,9.281-3.783a14.677,14.677,0,0,1,6.306,1.3,9.881,9.881,0,0,1,4.284,3.837,12.322,12.322,0,0,1,1.567,6.492v8.406h-9.254V13.918a6.073,6.073,0,0,0-.682-3.414,2.577,2.577,0,0,0-2.221-1.012,2.4,2.4,0,0,0-2.384,1.324,6.976,6.976,0,0,0-.547,2.985v25.81a5.762,5.762,0,0,0,.723,3.309,2.566,2.566,0,0,0,2.208,1.088,2.416,2.416,0,0,0,2.308-1.361,6.8,6.8,0,0,0,.6-3.036V30.824H163.8V40.08c0,4.361-1.1,7.553-3.261,9.485-2.18,1.948-5.291,2.935-9.247,2.935" stroke="#FFFFFF" strokeWidth="1" />
                                <path id="T" d="M172.65,52.031V10.371h-6.123v-8.9h21.559v8.9h-6.123v41.66Z" stroke="#FFFFFF" strokeWidth="1" />
                                <rect id="사각형_3" data-name="사각형 3" width="187" height="13" transform="translate(0.726 58.572)" stroke="#FFFFFF" strokeWidth="1" />
                            </g>
                        </svg>
                        <svg className="pcTitle" width="377" height="143.144" viewBox="0 0 377 143.144">
                            <g id="pc_project" transform="translate(-0.666 -1.001)" fill="#ffffff">
                                <path id="P" d="M2,104.063V2.938H28.246c5.452,0,9.812,1.213,12.959,3.605a19.969,19.969,0,0,1,6.827,10.338,56.555,56.555,0,0,1,2.124,16.464A64.336,64.336,0,0,1,48.372,49.41a19.015,19.015,0,0,1-6.14,10.231c-2.907,2.377-7.14,3.583-12.58,3.583H20.273v40.839ZM20.273,46.708h2.172c4.26,0,6.937-1.3,7.96-3.852.915-2.29,1.36-5.517,1.36-9.863a26.271,26.271,0,0,0-1.329-9.419c-1-2.54-3.317-3.827-6.878-3.827H20.273Z" stroke="#FFFFFF" strokeWidth="2"/>
                                <path id="R" d="M87.313,104.063V64.692c0-3.421-.765-5.533-2.339-6.458-1.4-.822-3.512-1.222-6.454-1.222h-1v47.051H58.66V2.938H89.3c5,0,8.794,1.127,11.288,3.35a17.183,17.183,0,0,1,5.107,9.54,73.278,73.278,0,0,1,1.355,15c0,5.464-.692,9.866-2.06,13.086-1.32,3.109-3.755,5.207-7.446,6.412l-3.588,1.172,3.7.758a8.228,8.228,0,0,1,6.136,4.31,20.93,20.93,0,0,1,1.854,9.476v38.024ZM77.637,41.141h5.98c3.5,0,5.278-3.471,5.278-10.316,0-4.218-.341-6.951-1.043-8.357a4.511,4.511,0,0,0-4.41-2.429H77.637Z" stroke="#FFFFFF" strokeWidth="2"/>
                                <path id="O" d="M139.457,105c-7.9,0-14.007-2.4-18.144-7.129-4.17-4.769-6.286-11.812-6.286-20.934V27.954c0-8.523,2.087-15.054,6.2-19.411C125.328,4.2,131.461,2,139.457,2s14.128,2.2,18.229,6.542c4.114,4.358,6.2,10.889,6.2,19.411V76.938c0,9.121-2.116,16.164-6.286,20.934C153.463,102.6,147.358,105,139.457,105m.293-86.016c-2.809,0-6.156,1.525-6.156,8.793V78.051c0,3.413.426,5.825,1.3,7.376a5.1,5.1,0,0,0,4.738,2.589c3.774,0,5.687-3.392,5.687-10.082V27.6c0-7.122-3.029-8.617-5.57-8.617" stroke="#FFFFFF" strokeWidth="2"/>
                                <path id="J" d="M196.059,105a28.7,28.7,0,0,1-12.29-2.6,20.389,20.389,0,0,1-8.692-7.628,22.965,22.965,0,0,1-3.213-12.5V57.431h18.39V81.04a8.745,8.745,0,0,0,1.25,4.888,4.827,4.827,0,0,0,4.321,2.089c2.1,0,5.629-.869,5.629-6.684V2.938h18.8V79.282a28.806,28.806,0,0,1-3.1,13.737,21.982,21.982,0,0,1-8.523,8.862A24.971,24.971,0,0,1,196.059,105" stroke="#FFFFFF" strokeWidth="2"/>
                                <path id="E" d="M230.164,104.063V2.938h39.25V20.86H249.141v22.1h19.453V60.352H249.141V85.965h21.621v18.1Z" stroke="#FFFFFF" strokeWidth="2"/>
                                <path id="C" d="M302.582,105c-7.148,0-12.97-2.245-17.3-6.672s-6.541-10.762-6.541-18.812V31.938c0-9.732,1.935-17.259,5.749-22.37C288.233,4.547,294.479,2,303.051,2a29.363,29.363,0,0,1,12.61,2.6,19.782,19.782,0,0,1,8.568,7.674c2.08,3.4,3.134,7.767,3.134,12.984V42.071H308.855V27.837c0-3.333-.446-5.566-1.363-6.828a5.155,5.155,0,0,0-4.441-2.024c-2.894,0-4.191,1.44-4.769,2.648a13.956,13.956,0,0,0-1.1,5.97V79.224c0,3.1.474,5.26,1.448,6.618a5.132,5.132,0,0,0,4.416,2.175,4.829,4.829,0,0,0,4.615-2.721,13.626,13.626,0,0,0,1.189-6.072V61.649H327.6V80.161c0,8.724-2.195,15.107-6.522,18.971-4.359,3.894-10.582,5.869-18.494,5.869" stroke="#FFFFFF" strokeWidth="2"/>
                                <path id="T" d="M345.3,104.063V20.743H333.055V2.938h43.117V20.743H363.926v83.32Z" stroke="#FFFFFF" strokeWidth="2"/>
                                <rect id="사각형_10" data-name="사각형 10" width="375" height="16" transform="translate(1.666 127.145)" stroke="#FFFFFF" strokeWidth="2"/>
                            </g>
                        </svg>
                    </DrawTitle>
                </h2>
            </FadeEffect>
            <div className="projectLayout">
                {
                    [
                        {
                            seq: 0,
                            proNumber: "01",
                            proTitle: "코드리치 대회 런처 개발",
                            proSchedule: "(22.12 ~ 23.03)",
                            proDesc: "초등학교 저학년을 타겟으로 만든 게임 컨텐츠를 다른 초등학교와 대회를 통해 서로 우열을 가리는 코드리치 대회를 일정 관리 및 진행을 할 수 있게 도와주는 대회 런처를 개발 진행",
                            proMainPoint: "회사 내 개발한 다양한 XR 게임 콘텐츠를 보다 쉽게 실행할 수 있고 대회 일정 관리 및 대회 참여를 Web Desktop application 을 통해 실시간으로 확인 및 참여를 할 수 있게 개발을 하였습니다. 기존 회사에서 운용 중인 게임 런처는 실시간 데이터를 처리할 수 없는 환경이라 개발사와 클라이언트 간 소통이 원활하지 못한 점에서 한계를 느껴 개발하였습니다. 기존 방식에서 탈피하여 웹 클라이언트를 적용, 게임 콘텐츠에 맞는 UI/UX를 통해 사용자 경험을 이끌어 냈으며 빠른 통신과 대회 진행에 문제가 되지 않게 하는 것을 목표로 개발하였습니다.",
                            proIcons: [
                                {
                                    seq: 0,
                                    icon: html5Icon,
                                    title: "HTML5"
                                },
                                {
                                    seq: 1,
                                    icon: css3Icon,
                                    title: "CSS3"
                                },
                                {
                                    seq: 2,
                                    icon: javascriptIcon,
                                    title: "JAVASCRIPT"
                                },
                                {
                                    seq: 3,
                                    icon: reactIcon,
                                    title: "REACT"
                                },
                                {
                                    seq: 4,
                                    icon: mysqlIcon,
                                    title: "MYSQL"
                                },
                                {
                                    seq: 5,
                                    icon: csharpIcon,
                                    title: "C#"
                                },
                            ],
                            proDetail: [
                                {
                                    seq: 0,
                                    app: "Windowform C#",
                                    server: "PHP",
                                    database: "MySQL",
                                    client: "HTML5, CSS3, JavaScript(ES6), React",
                                    description: "기존 회사에서 운용한 게임 런처는 C# 을 이용한 런처이다. 실시간으로 데이터를 처리를 못하는 상태의 런처이기에 기존 대회는 항상 현장에 직원이 게임 진행 및 실행을 하는 구조로서 불필요한 인력이 항상 낭비가 되는 구조였다. 그래서 기존 앱 환경에 서버의 연동과 클라이언트 구조를 웹구조로 재구축, 전체적인 프로젝트의 구조를 React 를 활용했으며 여러 UI 와 UX 를 효과적으로 개발 및 관리를 할 수 있게 구축했습니다."
                                }
                            ],
                            role: [
                                {
                                    seq: 0,
                                    work: "RESTful API 형식의 데이터를 호출 및 요청 작업"
                                },
                                {
                                    seq: 1,
                                    work: "디자인 적용 및 UI/UX 개발"
                                },
                                {
                                    seq: 2,
                                    work: "Desktop app UI/UX 테스트 및 유지 보수"
                                },
                            ]
                        },
                        {
                            seq: 1,
                            proNumber: "02",
                            proTitle: "코드리치 통합 플랫폼 런처 개발",
                            proSchedule: "(23.04 ~ 23.07)",
                            proDesc: "기존 Windowform 으로 만든 통합 런처를 라이브 서버와 DB 를 이용한 효과적인 컨텐츠 관리를 하기 위해 개발 진행.",
                            proMainPoint: "기존 회사의 게임 런처는 라이브 서버 통신이 안되는 환경의 게임 런처였다. 그래서 게임 내 데이터 관리와 게임 업데이트를 보다 쉽게 하고 서버를 통해 실시간 데이터를 관리를 목적으로 개발에 주안점을 두고 개발을 하였다. 그리고 유저 데이터 관리와 향후 BM 관리를 하기 위해 서버부터 시작해 DB까지 새로 구축을 진행하였다. 디자인 또한 해외 게임 런처를 참고하여 반응형 레이아웃을 가지는 디자인을 데스크톱 애플리케이션에 맞게 개발했습니다.",
                            proIcons: [
                                {
                                    seq: 0,
                                    icon: html5Icon,
                                    title: "HTML5"
                                },
                                {
                                    seq: 1,
                                    icon: css3Icon,
                                    title: "CSS3"
                                },
                                {
                                    seq: 2,
                                    icon: javascriptIcon,
                                    title: "JAVASCRIPT"
                                },
                                {
                                    seq: 3,
                                    icon: reactIcon,
                                    title: "REACT"
                                },
                                {
                                    seq: 4,
                                    icon: mysqlIcon,
                                    title: "MYSQL"
                                },
                                {
                                    seq: 5,
                                    icon: nodejsIcon,
                                    title: "NODEJS"
                                },
                            ],
                            proDetail: [
                                {
                                    seq: 0,
                                    app: "DesktopApp(Electron JavaScript)",
                                    server: "node.js, Koa, TypeORM",
                                    database: "MySQL, SQLite",
                                    client: "HTML5, CSS3, JavaScript(ES6), React, Chakra UI",
                                    description: "기존 회사의 게임 런처는 C#으로 개발된 게임 런처였다. 이번 프로젝트에서는 클라이언트 작업을 React로 하기에 React에 최적화된 Electron 을 활용하여 개발 진행을 했다. Electron 은 기존 웹 환경과 거의 비슷하여 기존 웹 프로젝트에서 할 수 있는 것들을 거의 다 할 수 있다. 서버 또한 기존 서버는 PHP로 구축되여 있었는데 node.js로 바꿈으로써 한 가지 개발 언어로 프로젝트 내 서버, 클라이언트를 개발할 수 있어 좋은 경험이 되었다."
                                }
                            ],
                            role: [
                                {
                                    seq: 0,
                                    work: "디자인 리소스가 없는 상태에서 기획을 기준으로 기본적인 UI 레이아웃 구성 및 UX 개발."
                                },
                                {
                                    seq: 1,
                                    work: "라우터를 사용하여 페이지 분기와 세부 페이지 분기."
                                },
                                {
                                    seq: 2,
                                    work: "검색 기능, 데이터 필터링, 페이징 처리 등 콘텐츠 정보 관련 UI/UX 개발."
                                },
                                {
                                    seq: 3,
                                    work: "상세 페이지 구현 기획 기준 레이아웃 및 데이터 호출."
                                },
                                {
                                    seq: 4,
                                    work: "즐겨찾기 기능 활성화, RESTful API 로 즐겨찾기 등록 삭제 기능 개발."
                                },
                                {
                                    seq: 5,
                                    work: "플레이어 선택 모달 구현 n명 선택 가능 구현. "
                                },
                            ]
                        },
                        {
                            seq: 2,
                            proNumber: "03",
                            proTitle: "코드리치 통합 플랫폼 어드민 페이지 개발",
                            proSchedule: "(23.06 ~ 23.07)",
                            proDesc: "다른 개발사들이 개발한 콘텐츠를 보다 쉽게 관리하기 위해 개발 진행",
                            proMainPoint: "회사 내 프로젝트가 진행될수록 많은 콘텐츠를 효과적으로 관리를 해야겠다는 필요성을 느껴 어드민 페이지를 개발 진행했습니다. 또한 관리자와 개발자의 일을 분담하여 각 여러 타 회사 개발자들이 콘텐츠 개발에만 집중할 수 있도록 피로도를 줄이는 목적으로 개발을 진행했습니다. REST API 형식의 데이터를 보다 직관적인 UI/UX를 통해 쉽고 빠르게 수정을 할 수 있게 개발을 진행했습니다.",
                            proIcons: [
                                {
                                    seq: 0,
                                    icon: html5Icon,
                                    title: "HTML5"
                                },
                                {
                                    seq: 1,
                                    icon: css3Icon,
                                    title: "CSS3"
                                },
                                {
                                    seq: 2,
                                    icon: javascriptIcon,
                                    title: "JAVASCRIPT"
                                },
                                {
                                    seq: 3,
                                    icon: reactIcon,
                                    title: "REACT"
                                },
                                {
                                    seq: 4,
                                    icon: mysqlIcon,
                                    title: "MYSQL"
                                },
                                {
                                    seq: 5,
                                    icon: koaIcon,
                                    title: "KOA"
                                },
                            ],
                            proDetail: [
                                {
                                    seq: 0,
                                    app: "Web PC",
                                    server: "node.js, Koa, TypeORM",
                                    database: "MySQL",
                                    client: "HTML5, JavaScript(ES6), React, Chakra UI, React-table, React-icons",
                                    description: "REST API 형식의 데이터를 호출, 수정, 삭제할 수 있게 대시보드 형태의 UI로 개발했습니다. 데이터 핸들링을 개발자가 아닌 관리자가 쉽게 다룰 수 있게 직관적인 UI/UX를 제공하기 것을 중점으로 개발했습니다."
                                }
                            ],
                            role: [
                                {
                                    seq: 0,
                                    work: "사이드 메뉴 바 구현, 슬라이드 메뉴 형식으로 펼쳤을 때 UI/UX 와 닫았을  때 UI/UX 구현, 새로고침 시 슬라이드 메뉴가 초기화 되지 않게 전역 설정."
                                },
                                {
                                    seq: 1,
                                    work: "검색 기능 구현, 데이터 필터링 등 커스텀 훅으로 관리."
                                },
                                {
                                    seq: 2,
                                    work: "로그인 페이지 UI 구현."
                                },
                            ]
                        },
                    ].map((pro) =>
                        <div key={pro.seq} style={{ width: "100%" }}>
                            {pro.seq % 2 === 0 ?
                                <FadeEffect
                                    fade={"fadeLeft-in-section"} 
                                >
                                    <div className="projectWrap">
                                        <h3>
                                            <b className="projectNumber">{pro.proNumber}</b>
                                            <span>
                                                {pro.proTitle}
                                            </span>
                                            <span>
                                                {pro.proSchedule}
                                            </span>
                                            <p>{pro.proTitle}{pro.proSchedule}</p>
                                        </h3>
                                        <div className="projectDescrip">
                                            <p>
                                                {pro.proDesc}
                                            </p>
                                        </div>
                                        <div className="projectContent">
                                            <div className="projectConWrap">
                                                {pro.proIcons.map((el) =>
                                                    <span key={el.seq} style={{ background: `url(${el.icon}) no-repeat center/contain` }}>{el.title}</span>
                                                )}
                                            </div>
                                            <button onClick={() => {
                                                setDetail(pro.seq)
                                            }}>
                                                View More
                                            </button>
                                        </div>
                                    </div>
                                </FadeEffect>
                                :
                                <FadeEffect
                                    fade={"fadeRight-in-section"}             
                                >
                                    <div className="projectWrap">
                                        <h3>
                                            <b className="projectNumber">{pro.proNumber}</b>
                                            <span>
                                                {pro.proTitle}
                                            </span>
                                            <span>
                                                {pro.proSchedule}
                                            </span>
                                            <p>{pro.proTitle}{pro.proSchedule}</p>
                                        </h3>
                                        <div className="projectDescrip">
                                            <p>
                                                {pro.proDesc}
                                            </p>
                                        </div>
                                        <div className="projectContent">
                                            <div className="projectConWrap">
                                                {pro.proIcons.map((el) =>
                                                    <span key={el.seq} style={{ background: `url(${el.icon}) no-repeat center/contain` }}>{el.title}</span>
                                                )}
                                            </div>
                                            <button onClick={() => {
                                                setDetail(pro.seq)
                                            }}>
                                                View More
                                            </button>
                                        </div>
                                    </div>
                                </FadeEffect>
                            }
                            {
                                detail === pro.seq ? (
                                    <div className="detailBackground">
                                         <button className="mobileDetailClose" onClick={() => {
                                                setDetail("")
                                            }}>닫기</button>
                                        <div className="detailLayout">
                                            <div className="detailTitle">
                                                <div className="detailTitleWrap">
                                                    <h2>
                                                        {pro.proTitle}
                                                    </h2>
                                                    <p>
                                                        개발기간 : {pro.proSchedule}
                                                    </p>
                                                </div>
                                                <button className="detailClose" onClick={() => {
                                                    setDetail("")
                                                }}>닫기</button>
                                            </div>
                                            <div className="detailContentLayout">
                                                <div className="projectDetail">
                                                    <h3>프로젝트 개요</h3>
                                                    <p>{pro.proDesc}</p>
                                                </div>
                                                <div className="projectDetail">
                                                    <h3>프로젝트 주안점</h3>
                                                    <p>{pro.proMainPoint}</p>
                                                </div>
                                                {pro.proDetail.map((det) => (
                                                    <div className="projectDetail" key={det.seq}>
                                                        <h3>활용 기술</h3>
                                                        <ul>
                                                            <li>앱 환경 : {det.app}</li>
                                                            <li>서버 : {det.server}</li>
                                                            <li>DB : {det.database}</li>
                                                            <li>클라이언트 : {det.client}</li>
                                                        </ul>
                                                        <p>{det.description}</p>
                                                    </div>
                                                ))}
                                                <div className="projectDetail">
                                                    <h3>수행 업무</h3>
                                                    <ul>
                                                        {
                                                            pro.role.map((rol) => (
                                                                <li key={rol.seq}>{rol.work}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : null
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Project