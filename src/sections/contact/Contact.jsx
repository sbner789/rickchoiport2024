import React from "react";
import "../contact/css/contact.css";
import phoneIcon from "../../images/phone_icon.svg";
import githubIcon from "../../images/github-icon.svg";
import emailIcon from "../../images/email_icon.svg";
import FadeEffect from "../../componets/FadeEffect";
import DrawTitle from "../../componets/DrawTitle";

const Contact = ({ contactRef }) => {
    return (
        <div className="contact" ref={contactRef}>
            <FadeEffect
                 fade={"fade-in-section"}
            >
                <h2>
                    <DrawTitle>
                        <svg className="mobileTitle" width="189.317" height="71.572" viewBox="0 0 189.317 71.572">
                            <g id="mobile_contact" transform="translate(-0.5 -0.5)" fill="#FFFFFF">
                                <path id="C" d="M12.922,52.5a11.6,11.6,0,0,1-8.651-3.336C2.1,46.947,1,43.782,1,39.758V15.969c0-4.866.967-8.63,2.875-11.186C5.748,2.272,8.871,1,13.156,1a14.677,14.677,0,0,1,6.306,1.3,9.881,9.881,0,0,1,4.284,3.837,12.323,12.323,0,0,1,1.567,6.492v8.406H16.059V13.918a6.073,6.073,0,0,0-.682-3.414,2.577,2.577,0,0,0-2.221-1.012,2.4,2.4,0,0,0-2.384,1.324,6.976,6.976,0,0,0-.547,2.985v25.81a5.762,5.762,0,0,0,.723,3.309,2.566,2.566,0,0,0,2.208,1.088,2.416,2.416,0,0,0,2.308-1.361,6.8,6.8,0,0,0,.6-3.036V30.824H25.43V40.08c0,4.361-1.1,7.553-3.261,9.485-2.18,1.948-5.291,2.935-9.247,2.935" stroke="#FFFFFF" strokeWidth="1" />
                                <path id="O" d="M41.663,52.5c-3.952,0-7-1.2-9.072-3.565-2.086-2.384-3.143-5.906-3.143-10.466V13.976c0-4.261,1.043-7.527,3.1-9.7S37.664,1,41.663,1s7.063,1.1,9.114,3.271,3.1,5.445,3.1,9.7V38.469c0,4.56-1.057,8.082-3.143,10.466C48.665,51.3,45.613,52.5,41.663,52.5m.146-43.008c-1.4,0-3.078.763-3.078,4.4V39.025a7.8,7.8,0,0,0,.65,3.689,2.554,2.554,0,0,0,2.369,1.294c1.888,0,2.844-1.7,2.844-5.041V13.8c0-3.562-1.514-4.309-2.785-4.309" stroke="#FFFFFF" strokeWidth="1" />
                                <path id="N" d="M74.181,52.031,69.105,26.652l-.99.1V52.031H59.037V1.468h9.692L73.4,25.76l.992-.094V1.468h8.96V52.031Z" stroke="#FFFFFF" strokeWidth="1" />
                                <path id="T" d="M93.344,52.031V10.371H87.221v-8.9H108.78v8.9h-6.123v41.66Z" stroke="#FFFFFF" strokeWidth="1" />
                                <path id="A" d="M128.048,52.032l-.732-8.321h-7.132l-.645,8.321h-9.006l4.884-50.563H132l4.8,50.563ZM120.84,36.479h5.771L124.27,9.258h-1.392Z" stroke="#FFFFFF" strokeWidth="1" />
                                <path id="C2" d="M152.521,52.5a11.6,11.6,0,0,1-8.651-3.336c-2.171-2.217-3.271-5.382-3.271-9.406V15.969c0-4.866.967-8.63,2.875-11.186,1.873-2.511,5-3.783,9.281-3.783a14.677,14.677,0,0,1,6.306,1.3,9.881,9.881,0,0,1,4.284,3.837,12.322,12.322,0,0,1,1.567,6.492v8.406h-9.254V13.918a6.073,6.073,0,0,0-.682-3.414,2.577,2.577,0,0,0-2.221-1.012,2.4,2.4,0,0,0-2.384,1.324,6.976,6.976,0,0,0-.547,2.985v25.81a5.762,5.762,0,0,0,.723,3.309,2.566,2.566,0,0,0,2.208,1.088,2.416,2.416,0,0,0,2.308-1.361,6.8,6.8,0,0,0,.6-3.036V30.824h9.371V40.08c0,4.361-1.1,7.553-3.261,9.485-2.18,1.948-5.291,2.935-9.247,2.935" stroke="#FFFFFF" strokeWidth="1" />
                                <path id="T2" d="M173.881,52.031V10.371h-6.123v-8.9h21.559v8.9h-6.123v41.66Z" stroke="#FFFFFF" strokeWidth="1" />
                                <rect id="사각형_4" data-name="사각형 4" width="188" height="13" transform="translate(1.26 58.572)" stroke="#FFFFFF" strokeWidth="1" />
                            </g>
                        </svg>
                        <svg className="pcTitle" width="379" height="143.144" viewBox="0 0 379 143.144">
                            <g id="pc_contact" transform="translate(-0.98 -1.001)" fill="#FFFFFF">
                                <path id="C" d="M25.844,105c-7.148,0-12.97-2.245-17.3-6.672S2,87.567,2,79.517V31.938c0-9.732,1.935-17.259,5.749-22.37C11.495,4.547,17.741,2,26.313,2a29.362,29.362,0,0,1,12.61,2.6,19.782,19.782,0,0,1,8.568,7.674c2.08,3.4,3.134,7.767,3.134,12.984V42.071H32.117V27.837c0-3.333-.446-5.566-1.363-6.828a5.155,5.155,0,0,0-4.441-2.024c-2.894,0-4.191,1.44-4.769,2.648a13.957,13.957,0,0,0-1.1,5.97V79.224c0,3.1.474,5.26,1.448,6.618a5.132,5.132,0,0,0,4.416,2.175A4.829,4.829,0,0,0,30.928,85.3a13.626,13.626,0,0,0,1.189-6.072V61.649H50.86V80.161c0,8.724-2.195,15.107-6.522,18.971C39.979,103.026,33.756,105,25.844,105" stroke="#FFFFFF" strokeWidth="2"/>
                                <path id="O" d="M83.324,105c-7.9,0-14.007-2.4-18.144-7.129C61.01,93.1,58.894,86.06,58.894,76.938V27.954c0-8.523,2.087-15.054,6.2-19.411C69.195,4.2,75.328,2,83.324,2s14.128,2.2,18.229,6.542c4.114,4.358,6.2,10.889,6.2,19.411V76.938c0,9.121-2.116,16.164-6.286,20.934C97.33,102.6,91.225,105,83.324,105m.293-86.016c-2.809,0-6.156,1.525-6.156,8.793V78.051c0,3.413.426,5.825,1.3,7.376A5.1,5.1,0,0,0,83.5,88.016c3.774,0,5.687-3.392,5.687-10.082V27.6c0-7.122-3.029-8.617-5.57-8.617" stroke="#FFFFFF" strokeWidth="2"/>
                                <path id="N" d="M148.362,104.063,138.211,53.3l-1.981.2v50.563H118.074V2.938h19.385L146.8,51.521l1.982-.188V2.938H166.7V104.063Z" stroke="#FFFFFF" strokeWidth="2"/>
                                <path id="T" d="M186.688,104.063V20.743H174.441V2.938h43.117V20.743H205.313v83.32Z" stroke="#FFFFFF" strokeWidth="2"/>
                                <path id="A" d="M256.1,104.063l-1.465-16.64H240.368l-1.29,16.64H221.067L230.834,2.938H264l9.6,101.125ZM241.68,72.958h11.543l-4.684-54.441h-2.783Z" stroke="#FFFFFF" strokeWidth="2"/>
                                <path id="C2" d="M305.043,105c-7.148,0-12.97-2.245-17.3-6.672S281.2,87.567,281.2,79.517V31.938c0-9.732,1.935-17.259,5.749-22.37C290.694,4.547,296.94,2,305.512,2a29.363,29.363,0,0,1,12.61,2.6,19.782,19.782,0,0,1,8.568,7.674c2.08,3.4,3.134,7.767,3.134,12.984V42.071H311.316V27.837c0-3.333-.446-5.566-1.363-6.828a5.155,5.155,0,0,0-4.441-2.024c-2.894,0-4.191,1.44-4.769,2.648a13.956,13.956,0,0,0-1.1,5.97V79.224c0,3.1.474,5.26,1.448,6.618a5.132,5.132,0,0,0,4.416,2.175,4.83,4.83,0,0,0,4.615-2.721,13.626,13.626,0,0,0,1.189-6.072V61.649h18.743V80.161c0,8.724-2.195,15.107-6.522,18.971-4.359,3.894-10.582,5.869-18.494,5.869" stroke="#FFFFFF" strokeWidth="2"/>
                                <path id="T-2" data-name="T" d="M347.762,104.063V20.743H335.516V2.938h43.117V20.743H366.387v83.32Z" stroke="#FFFFFF" strokeWidth="2"/>
                                <rect id="사각형_11" data-name="사각형 11" width="377" height="16" transform="translate(1.98 127.145)" stroke="#FFFFFF" strokeWidth="2"/>
                            </g>
                        </svg>
                    </DrawTitle>
                </h2>
            </FadeEffect>
            <div className="contactLayout">
                <div className="contactWrap">
                    {
                        [
                            {
                                seq: 0,
                                conText: "010-7294-7223",
                                conHref: "tel:010-7294-7223",
                                conIcon: phoneIcon,
                                conTarget: "",
                                conTitle: "",
                                conInner: "phone" 
                            },
                            {
                                seq: 1,
                                conText: "github.com/sbner789",
                                conHref: "https://github.com/sbner789",
                                conIcon: githubIcon,
                                conTarget: "_blank",
                                conTitle: "새창",
                                conInner: "github"  
                            },
                            {
                                seq: 2,
                                conText: "sbner182@gmail.com",
                                conHref: "mailto:sbner182@gmail.com",
                                conIcon: emailIcon,
                                conTarget: "",
                                conTitle: "",
                                conInner: "email"   
                            },
                        ].map((con) => 
                            <FadeEffect  fade={"fade-in-section"} key={con.seq}>
                                <div>
                                    <a className="contactItem" href={con.conHref} target={con.conTarget} title={con.conTitle}>
                                        <span style={{ background: `url(${con.conIcon}) no-repeat center/contain`, display: "block" }}>{con.conInner}</span>
                                        <p>{con.conText}</p>
                                    </a>
                                </div>
                            </FadeEffect>    
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default Contact