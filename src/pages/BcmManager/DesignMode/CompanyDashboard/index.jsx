import React, { useEffect } from 'react'
import styles from "../../../../Assets/styles/companyDashboard.module.scss"
import $ from 'jquery';
import ManageModal from '../../../../components/common/modal/manageModal';
import SetUpDefineModal from '../../../../components/common/modal/setupDefineModal';
import Header from '../../../../components/common/Header/header';
import DashboardCard from '../../../../components/common/Card/DashboardCard';

const CompanyDashboard = () => {
    useEffect(() => {
        // Progress bar
        $(".progressBar").each(function () {
            var $bar2 = $(this).find(".bar2");
            var $val = $(this).find(".textPercent");
            var perc = parseInt($val.text(), 10);
            $({
                p: 0,
            }).animate({
                p: perc,
            }, {
                duration: '000',
                easing: "swing",
                step: function (p) {
                    $bar2.css({
                        transform: "rotate(" + (315 - (p * 0.9)) + "deg)", // 100%=180° so: ° = % * 1.8
                        // 45 is to add the needed rotation to have the green borders at the bottom
                    });
                    $val.text(p | 0);
                }
            });

        });

    })

    return (
        <>
            <Header />
            {/* -- Company dashboard top section --*/}
            <div className={`container ${styles.companyDashboard}`}>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 col-sm-12">
                        <div className="companyDashboard d-flex bd-highlight">
                            <div className="controlPanel" style={{ marginBottom: "0", marginTop: "87px" }}>
                                <div className="customePieChart no_before clearfix">
                                    <a href="#">
                                        {/* -- Slider  --*/}
                                        <div className="slideSec2 slide">
                                            <div className="move_rb">
                                                {/* -- Progress Bar --*/}
                                                <div className="progressBar">
                                                    <div className="barOverflow">
                                                        <div className="bar bar2">
                                                            <span className="percentage" data-progress="40">
                                                                <span className="percent_bar">
                                                                    <span className="textPercent">40</span>
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* -- Progress Bar :: End --*/}
                                                {/* -- Mode --*/}
                                                <div className="mode" data-type="designMode">
                                                    <span className="hover_effect"></span>
                                                </div>
                                                {/* -- Mode :: End --*/}
                                                <div className="controll control_2">
                                                    <img src="./images/controll-2.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    {/* -- Slider :: End  --*/}
                                </div>
                            </div>
                            {/* ------------------------------------Company Status------------------------------------ */}
                            <div className={styles.companyStatus}>
                                <div className={`${styles.companyStatusLogo} d-flex justify-content-between align-items-center`} >
                                    <div className={styles.companyHeading}>
                                        <h4>NASA</h4>
                                        <h6>Company Wide Status</h6>
                                    </div>
                                    <div className={styles.companyLogo}>
                                        <span><img src="./images/nasa-logo.png" alt="" /></span>
                                    </div>
                                </div>

                                <div className={styles.progressBarslider}>
                                    <DashboardCard styles={styles} />
                                    <DashboardCard  styles={styles}/>
                                    <DashboardCard  styles={styles}/>
                                    <DashboardCard  styles={styles}/>
                                    <DashboardCard styles={styles} />

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* -- ---------------company dashboard bottom Sec---------------*/}
            {/*-- ---------------company dashboard bottom Sec---------------*/}
            <div className={`${styles.dashboardBottomList} pt-0 pb-4`}>
                <div className="container">
                    <div className={`${styles.listSec} mb-4`}>
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-3 col-md-12">
                                <div className="d-flex align-items-center mb-2 mb-lg-0">
                                    <figure className={`${styles.dashboardTitle} mr-3 `}>
                                        T
                        </figure>
                                    <h5 className="m-0 text-capitalize">
                                        Test
                        </h5>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-8">
                                <div style={{ justifyContent: "space-around" }} className="d-flex align-items-center mb-3 mb-md-0 mt-3 mt-md-0 flex-wrap">
                                    <div className={styles.idSec}>
                                        ID: 0010
                        </div>
                                    <div className={styles.dateSec}>
                                        21-04-22
                        </div>
                                    <div className={styles.statusSec}>
                                        Champion 1
                            </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="d-flex justify-content-md-end align-items-center">
                                    <img src="./images/info.png" alt="" className="img-fluid" />
                                    <a className={`${styles.finishSetupBtn} btn`}>Finish Setup</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-- ---------list 2------------ --*/}
                    <div className={`${styles.listSec} mb-4`}>
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-3 col-md-12">
                                <div className="d-flex align-items-center mb-2 mb-lg-0">
                                    <figure className={`${styles.dashboardTitle} mr-3 `}>
                                        T
                        </figure>
                                    <h5 className="m-0 text-capitalize">
                                        Test
                        </h5>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-8">
                                <div style={{ justifyContent: "space-around" }} className="d-flex align-items-center mb-3 mb-md-0 mt-3 mt-md-0 flex-wrap">
                                    <div className={styles.idSec}>
                                        ID: 0010
                        </div>
                                    <div className={styles.dateSec}>
                                        21-04-22
                        </div>
                                    <div className={styles.statusSec}>
                                        Champion 1
                            </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="d-flex justify-content-md-end align-items-center">
                                    <ManageModal style={styles} />

                                    <a className={`${styles.viewBtn} btn`}>View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-- ---------- --*/}
                    {/* <SetUpDefineModal style={styles} /> */}
                </div>
            </div>
            {/*-- end Content Sec --*/}
        </>
    )
}
export default CompanyDashboard