import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import Header from '../../../../components/common/Header/header';
const ControlPanel = () => {
    const [isDefine, setIsDefine] = useState(false);
    const [isDesign, setIsDesign] = useState(false);
    const [isEmbeded, setIsEmbeded] = useState(false);
    const [isImprove, setIsImprove] = useState(false);
    useEffect(() => {
        $(".progressBar").each(function () {
            var $bar = $(this).find(".bar");
            var $bar2 = $(this).find(".bar2");
            var $val = $(this).find(".textPercent");
            var perc = parseInt($val.text(), 10);
            $({ p: 0, }).animate({ p: perc, }, {
                duration: '000',
                easing: "swing",
                step: function (p) {
                    $bar.css({
                        transform: "rotate(" + (45 + (p * 0.9)) + "deg)", // 100%=180° so: ° = % * 1.8
                        // 45 is to add the needed rotation to have the green borders at the bottom
                    });
                    $bar2.css({
                        transform: "rotate(" + (315 - (p * 0.9)) + "deg)", // 100%=180° so: ° = % * 1.8
                        // 45 is to add the needed rotation to have the green borders at the bottom
                    });
                    $val.text(p | 0);
                }
            });
        });
    })

    // const SlideSce2 = (e) => {
    //     setDefine(true);
    //     console.log("mouse" ,define )
    // }
    // const Sucess = (e) =>{        
    //     setSucessCheck(true);
    //     setWarningCheck(false);
    // }
    return (
        <>
            <Header />
            {/* -- Content Sec -- */}
            <div className="mainDashboard">
                <div className="logoSec">
                <span ><img src="./images/nasa-logo.png" alt=""  /></span>
                </div>
                <div className="downloadSec">
                    <button className="downloadBtn"><img src="./images/downloadIcon.svg" alt=""  /></button>
                </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="controlPanel">
                            <div className="customePieChart clearfix r">
                                <div className="d-flex">
                                    <div className="slideSec1 slide" 
                                                                            onMouseEnter={() => setIsDefine(true)}
                                                                            onMouseLeave={() => setIsDefine(false)}>
                                   <div className="move_rb">
                                            {/* {<!-- Slider 1 -->} */}
                                            <div className="progressBar">
                                                <div className="barOverflow">
                                                    <div className="bar " >
                                                        <span className="percentage" data-progress="40">
                                                            <span className="percent_bar">
                                                                <span className="textPercent">40</span></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* {<!-- Progress Bar :: End -->} */}
                                            {/* {<!-- Mode -->} */}
                                            <div className="mode" data-type="defineMode">
                                                <span className="hover_effect"></span>
                                            </div>
                                            {/* {< !--Mode :: End -->} */}
                                            <div className="controll control_1">
                                                <img src="./images/controll-1.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* -- Slider 2 -- */}
                                    <div className="slideSec2 slide"
                                        onMouseEnter={() => setIsDesign(true)}
                                        onMouseLeave={() => setIsDesign(false)}>
                                        <div className="move_rb">
                                            {/* -- Progress Bar -- */}
                                            <div className="progressBar">
                                                <div className="barOverflow">
                                                    <div className="bar bar2">
                                                        <span className="percentage" data-progress="50">
                                                            <span className="percent_bar">
                                                                <span className="textPercent">50</span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* -- Progress Bar :: End -- */}
                                            {/* -- Mode -- */}

                                            <div className="mode" data-type="designMode">
                                                <span className="hover_effect"></span>
                                            </div>

                                            {/* -- Mode :: End -- */}
                                            <div className="controll control_2">
                                                <img src="./images/controll-2.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    {/* -- Slider 4 -- */}
                                    <div className="slideSec4 slide"
                                                                            onMouseEnter={() => setIsImprove(true)}
                                                                            onMouseLeave={() => setIsImprove(false)}>
                                    
                                        <div className="move_rb">
                                            {/* -- Progress Bar -- */}
                                            <div className="progressBar">
                                                <div className="barOverflow">
                                                    <div className="bar bar2" >
                                                        <span className="percentage" data-progress="50">
                                                            <span className="percent_bar">
                                                                <span className="textPercent">50</span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* -- Progress Bar :: End -- */}
                                            {/* -- Mode -- */}
                                            <div className="mode" data-type="improveMode">
                                                <span className="hover_effect"></span>
                                            </div>
                                            {/* -- Mode :: End -- */}
                                            <div className="controll control_3">
                                                <img src="./images/controll-3.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* -- Slider 3 -- */}
                                    <div className="slideSec3 slide" 
                                     onMouseEnter={() => setIsEmbeded(true)}
                                     onMouseLeave={() => setIsEmbeded(false)}
                                     >
                                        <div className="move_rb">
                                            {/* -- Progress Bar -- */}
                                            <div className="progressBar">
                                                <div className="barOverflow">
                                                    <div className="bar " >
                                                        <span className="percentage" data-progress="10">
                                                            <span className="percent_bar">
                                                                <span className="textPercent">10</span></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* -- Progress Bar :: End -- */}
                                            {/* -- Mode --*/}
                                            <div className="mode" data-type="EmbedMode">
                                                <span className="hover_effect"></span>
                                            </div>
                                            {/*-- Mode :: End -- */}
                                            <div className="controll control_4">
                                                <img src="./images/controll-4.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {isDefine === true && <>
                                <div className="penal penalSlide1" id="slideShow1">
                                    <span className="titleName">Envision, define and document the goals of your BCM program</span>
                                    <ul>
                                        <li className="aprove">
                                            <strong className="title">Policy</strong>
                                            <span className="subtitle">text1</span>
                                        </li>
                                        <li className="aprove">
                                            <strong className="title">Procedures</strong>
                                            <span className="subtitle">text2</span>
                                        </li>
                                        <li className="aprove">
                                            <strong className="title">Playbook</strong>
                                            <span className="subtitle">text3</span>
                                        </li>
                                        <li className="not-aprove">
                                            <strong className="title">Appetite</strong>
                                            <span className="subtitle">text4</span>
                                        </li>
                                    </ul>
                                </div>
                            </>}

                            {isDesign === true && <>
                                <div className="penal penalSlide2" id="slideShow2">
                                    <span className="titleName">Analyze, design and document your key priorities to recover from a crisis</span>
                                    <ul>
                                        <li>
                                            <strong className="title">Departments</strong>
                                            <strong className="number"><span>A</span></strong>
                                            <span className="subtitle">Critical/Non-Critical</span>
                                        </li>
                                        <li>
                                            <strong className="title">Processes</strong>
                                            <strong className="number"><span>B</span></strong>
                                            <span className="subtitle">Critical/Non-Critical</span>
                                        </li>
                                        <li>
                                            <strong className="title">Enablers</strong>
                                            <strong className="number"><span>c</span></strong>
                                            <span className="subtitle">Critical/Non-Critical</span>
                                        </li>
                                        <li>
                                            <strong className="title">Strategies</strong>
                                            <strong className="number"><span>D</span></strong>
                                            <span className="subtitle">Identified/Implemented</span>
                                        </li>
                                    </ul>
                                </div>

                            </>}
                            {isEmbeded === true && <>
                                <div className="penal penalSlide3" id="slideShow3">
                                    <ul>
                                        <li className="aprove">
                                            <strong className="title">Risk <br /> Treatment</strong>
                                            <span className="subtitle">Completed</span>
                                        </li>
                                        <li className="pending">
                                            <strong className="title">Recovery <br /> Strategy</strong>
                                            <span className="subtitle">Pending</span>
                                        </li>
                                        <li className="pending">
                                            <strong className="title">Initiatives</strong>
                                            <span className="subtitle">Pending</span>
                                        </li>
                                        <li className="pending">
                                            <strong className="title">Training</strong>
                                            <span className="subtitle">Pending</span>
                                        </li>
                                    </ul>
                                    <span className="titleName">Action, embed and engage your plans to recover from a crisis</span>
                                </div>
                            </>}
                            {isImprove === true && <>
                                <div className="penal penalSlide4 " id="slideShow4">
                                    <ul>
                                        <li className="aprove">
                                            <strong className="title">Testing</strong>
                                            <span className="subtitle">Completed</span>
                                        </li>
                                        <li className="pending">
                                            <strong className="title">Review</strong>
                                            <span className="subtitle">Pending</span>
                                        </li>
                                        <li className="pending">
                                            <strong className="title">Audit</strong>
                                            <span className="subtitle">Pending</span>
                                        </li>
                                        <li className="inactive">
                                            <strong className="title">Enhance</strong>
                                            <span className="subtitle">Inactive</span>
                                        </li>
                                    </ul>
                                    <span className="titleName">Evaluate, improve and enhance your BCM program on a periodic basis</span>
                                </div>
                            </>}


                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default ControlPanel