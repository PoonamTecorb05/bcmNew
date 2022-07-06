import React from 'react'
import DesignMenu from '../../../../components/common/Header/designMenuWithSideNav'
import styles from "../../../../Assets/styles/designSummary.module.scss"
import PieChartComp from '../../../../components/common/Card/pieChart'
const Card = () => {
    return (
        <div className={`${styles.allCard}`}>
            <div className={`${styles.processCards} d-flex align-items-center`}>
                <div>
                    <h3>1</h3>
                    <h4>Processes</h4>
                    <ul>
                        <li>Non Critical</li>
                        <li>Critical</li>
                    </ul>
                    <span className={styles.percents}><img src="./images/icon-trending-up.png" alt="" />
                        <span>4.07%</span></span>
                </div>
                <div className={styles.pieChart}>
                    {/* <canvas   id="myChart" className={styles.pieChart} width="110" height="110"></canvas> */}
                    <PieChartComp />
                </div>
            </div>
        </div>
    )
}

const DepartmentSummary = () => {
    let cardList = Array(4).fill().map((index) => <Card/>)
    return (
        <>
            <DesignMenu />
            {/* ------------Inner Section---------- */}
            <div className={styles.contentWrapper} >
                <div className={`p-4 pb-3 ${styles.bcpActivated}`}>
                    <div className="container-fluid">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-6 pl-0">
                                <h3 className="m-0">Test Department</h3>
                            </div>
                            <div className="col-lg-6">
                                <div className="d-flex align-items-center justify-content-lg-end">
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={`${styles.innerSec} p-4`}>
                    <div className={styles.departmentSummary}>
                        <div className={styles.moduleDiv}>
                            <h4>Imapct Analysis</h4>
                            <h6 className={styles.date}>
                                <span>Milestone 1 :</span>
                                11 June 2021
                            </h6>
                            <div className={styles.multiProgess}>
                                <div className={styles.progressDiv}>
                                    <div className={`${styles.progessBar} ${styles.stepOne}`}>

                                    </div>
                                    <span>Kick Off</span>
                                </div>
                                <div className={styles.progressDiv}>
                                <div className={`${styles.progessBar} ${styles.stepTwo}`}>

                                    </div>
                                    <span>In Progress</span>
                                </div>
                                <div className={styles.progressDiv}>
                                    <div className={`${styles.progessBar} ${styles.stepThree}`}>

                                    </div>
                                    <span>Finished</span>
                                </div>
                                <div className={styles.progressDiv}>
                                    <h6>100 % Completed</h6>
                                </div>
                            </div>
                        </div>
                        <div className={styles.moduleDiv}>
                            <h4>Enablers</h4>
                            <h6 className={styles.date}>
                                <span>Milestone 2 :</span>
                                11 June 2021
                            </h6>
                            <div className={styles.multiProgess}>
                                <div className={styles.progressDiv}>
                                <div className={`${styles.progessBar} ${styles.stepOne}`}>

                                    </div>
                                    <span>Kick Off</span>
                                </div>
                                <div className={styles.progressDiv}>
                                <div className={`${styles.progessBar} ${styles.stepTwo}`}>

                                    </div>
                                    <span>In Progress</span>
                                </div>
                                <div className={styles.progressDiv}>
                                    <div className={styles.progessBar}>

                                    </div>
                                    <span>Finished</span>
                                </div>
                                <div className={styles.progressDiv}>
                                    <h6>100 % Completed</h6>
                                </div>
                            </div>
                        </div>
                        <div className={styles.moduleDiv}>
                            <h4>Value Chain</h4>
                            <h6 className={styles.date}>
                                <span>Milestone 3 :</span>
                                11 June 2021
                            </h6>
                            <div className={styles.multiProgess}>
                                <div className={styles.progressDiv}>
                                <div className={`${styles.progessBar} ${styles.stepOne}`}>

                                    </div>
                                    <span>Kick Off</span>
                                </div>
                                <div className={styles.progressDiv}>
                                <div className={`${styles.progessBar} ${styles.stepTwo}`}>

                                    </div>
                                    <span>In Progress</span>
                                </div>
                                <div className={styles.progressDiv}>
                                <div className={`${styles.progessBar} ${styles.stepThree}`}>
                                    </div>
                                    <span>BC Manager Verified</span>
                                </div>
                                <div className={styles.progressDiv}>
                                <div className={`${styles.progessBar} ${styles.stepFour}`}>

                                    </div>
                                    <span>Silver Approved </span>
                                </div>
                                <div className={styles.progressDiv}>
                                <div className={`${styles.progessBar} ${styles.stepFive}`}>

                                    </div>
                                    <span>Finished</span>
                                </div>
                                <div className={styles.progressDiv}>
                                    <h6 className={styles.stepFive}>100 % Completed</h6>
                                </div>
                            </div>
                        </div>

                        <div className={styles.moduleDiv}>
                            <h4>Risk Strategy</h4>
                            <h6 className={styles.date}>
                                <span>Milestone 4 :</span>
                                11 June 2021
                            </h6>
                            <div className={styles.multiProgess}>
                                <div className={styles.progressDiv}>
                                <div className={`${styles.progessBar} ${styles.stepOne}`}>

                                    </div>
                                    <span>Kick Off</span>
                                </div>
                                <div className={styles.progressDiv}>
                                <div className={`${styles.progessBar} ${styles.stepTwo}`}>

                                    </div>
                                    <span>In Progress</span>
                                </div>
                                
                                <div className={styles.progressDiv}>
                                <div className={`${styles.progessBar} ${styles.stepThree}`}>

                                    </div>
                                    <span>Finished</span>
                                </div>
                                <div className={styles.progressDiv}>
                                    <h6>100 % Completed</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* -----------------Deapartment summary chart---------------- */}
                    <div className={styles.departmentSummaryCart}>
                          {cardList}
                    </div>
                </div>
            </div>

        </>

    )
}
export default DepartmentSummary