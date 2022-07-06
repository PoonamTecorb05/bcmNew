import React from 'react'
import styles from "../../Assets/styles/companyDashboard.module.scss"
import DashboardCard from '../../components/common/Card/DashboardCard'
import Header from '../../components/common/Header/header'
const CEODashboard = () => {
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
                                        <DashboardCard styles={styles} />
                                        <DashboardCard styles={styles} />
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* ----------ceo BottomSec--------- */}
            <div className={`container ${styles.ceoBottom}`}>
                <div className={styles.ApprovalSec}>
                    <div className="row">
                        <div className="col-8">
                            <h5>Business Continuity Plans</h5>
                        </div>
                        <div className="col-4">
                        <div className="d-flex justify-content-md-end align-items-center">
                            <a className={styles.approvedBtn}>
                                <img src="/images/approved.png" alt="" />
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
                <div className={styles.CardSection}>
                    <div className={`${styles.departmentCard} pl-0`}>
                        <div className={styles.innerSec}>
                            <h4>Finance</h4>
                            <div className={styles.dateDiv}>
                                <div className={styles.dateText}>
                                    <span>Last Updated</span>
                                    <p>10 July 2021</p>
                                </div>
                                <a href="#">
                                    <img src="/images/right.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.departmentCard}>
                        <div className={styles.innerSec}>
                            <h4>Human Resources</h4>
                            <div className={styles.dateDiv}>
                                <div className={styles.dateText}>
                                    <span>Last Updated</span>
                                    <p>10 July 2021</p>
                                </div>
                                <a href="#">
                                    <img src="/images/right.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.departmentCard}>
                        <div className={styles.innerSec}>
                            <h4>Operations</h4>
                            <div className={styles.dateDiv}>
                                <div className={styles.dateText}>
                                    <span>Last Updated</span>
                                    <p>10 July 2021</p>
                                </div>
                                <a href="#">
                                    <img src="/images/right.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.departmentCard} pr-0`}>
                        <div className={styles.innerSec}>
                            <h4>Marketing</h4>
                            <div className={styles.dateDiv}>
                                <div className={styles.dateText}>
                                    <span>Last Updated</span>
                                    <p>10 July 2021</p>
                                </div>
                                <a href="#">
                                    <img src="/images/right.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default CEODashboard