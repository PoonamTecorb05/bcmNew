import React from 'react'
import styles from "../../../Assets/styles/crisisactive.module.scss"
import HeaderSideMenu from '../../../components/common/Header/headerWithSideMenu'
const TestingTrack = () => {
    return (
        <>
            <HeaderSideMenu />
            {/* ------------Inner Section---------- */}
            <div className={styles.contentWrapper} >
                <div className={`p-4 pb-3 ${styles.bcpActivated}`}>
                    <div className="container-fluid">
                        <div className="row d-flex align-items-center">
                            <div className={`col-lg-6 ${styles.warning} pl-0`}>
                                <h3 className="m-0">BCP Pilot
                                   <img
                                        src="/images/warning.png" alt="" /></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.innerSec} p-4`}>
                    <div className={styles.callFor}>
                        <h2>Recover HQ Building</h2>
                        <div className="row">
                            <h6 className="col-md-8">Complete the below recovery steps</h6>
                            <div className="col-md-4 text-right"><a className={styles.goPrevious} >Go Back</a></div>
                        </div>
                        <div className={`${styles.recoveryTable} ${styles.tableSec}`}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className={styles.subItemName}>
                                            <a href="#">Alternate Recovery BC Site</a>
                                        </td>
                                        <td className={styles.statusBadge}>
                                            <a href="#" className={styles.staff}>Staff</a>
                                            <a href="#" className={styles.hours}>12 hours</a>
                                            <a href="#" className={styles.spf}>SPF</a>
                                        </td>
                                        <td className={styles.statusPending}>
                                            <img src="/images/Pending_scope.svg" alt="" />
                                            <span>Pending</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className={styles.recoverySection}>
                                <h5 className={styles.heading}>Recovery Steps (2)</h5>
                                <h6 className={styles.enablesHeading}>Enables the Process : Test c</h6>
                                <div className={styles.recoveryStatus}>
                                    <div className={`${styles.pendingStatus} ${styles.status}`}>Pending</div>
                                    <div className={styles.pendingContainer}>
                                        <div className={`${styles.statusBox} ${styles.pending}`}>
                                            <div className={styles.time}>
                                                <h5 className={styles.key}>1</h5>
                                                <h6>15 minutes</h6>
                                            </div>
                                            <div className={styles.statusMsg}>
                                                <h4>Damage Assessment</h4>
                                                <p>Conduct a damage assessment of the impacted premises and identify the following<br />
                                                    • Extent of damage<br />
                                                    • Anticipated time to repair</p>
                                            </div>
                                            <div className={styles.statusCheck}>
                                                <div>
                                                    <label className={styles.check}>
                                                        <input type="checkbox" data-id="1" />
                                                        <span className={styles.checkmark}></span>
                                                    </label>
                                                </div>
                                                <h6 className={styles.completStatus}>Pending as of</h6>
                                                <span className={styles.date}>09 Mar  at  10:14am</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className={styles.recoveryStatus}>
                                    <div className={`${styles.completeStatus} ${styles.status}`}>Completed</div>
                                    <div className={styles.pendingContainer}>
                                        <div className={`${styles.statusBox} ${styles.completed}`}>
                                            <div className={styles.time}>
                                                <h5 className={styles.key}>1</h5>
                                                <h6>15 minutes</h6>
                                            </div>
                                            <div className={styles.statusMsg}>
                                                <h4>Damage Assessment</h4>
                                                <p>Conduct a damage assessment of the impacted premises and identify the following<br />
                                                    • Extent of damage<br />
                                                    • Anticipated time to repair</p>
                                            </div>
                                            <div className={styles.statusCheck}>
                                                <div>
                                                    <label className={styles.check}>
                                                        <input type="checkbox" data-id="1" />
                                                        <span className={styles.checkmark}></span>
                                                    </label>
                                                </div>
                                                <h6 className={styles.completStatus}>Completed on</h6>
                                                <span className={styles.date}>09 Mar  at  10:14am</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.pendingContainer}>
                                        <div className={`${styles.statusBox} ${styles.completed}`}>
                                            <div className={styles.time}>
                                                <h5 className={styles.key}>1</h5>
                                                <h6>15 minutes</h6>
                                            </div>
                                            <div className={styles.statusMsg}>
                                                <h4>Damage Assessment</h4>
                                                <p>Conduct a damage assessment of the impacted premises and identify the following<br />
                                                    • Extent of damage<br />
                                                    • Anticipated time to repair</p>
                                            </div>
                                            <div className={styles.statusCheck}>
                                                <div>
                                                    <label className={styles.check}>
                                                        <input type="checkbox" data-id="1" />
                                                        <span className={styles.checkmark}></span>
                                                    </label>
                                                </div>
                                                <h6 className={styles.completStatus}>Completed on</h6>
                                                <span className={styles.date}>09 Mar  at  10:14am</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className={styles.pendingContainer}>
                                        <div className={`${styles.statusBox} ${styles.completed}`}>
                                            <div className={styles.time}>
                                                <h5 className={styles.key}>1</h5>
                                                <h6>15 minutes</h6>
                                            </div>
                                            <div className={styles.statusMsg}>
                                                <h4>Damage Assessment</h4>
                                                <p>Conduct a damage assessment of the impacted premises and identify the following<br />
                                                    • Extent of damage<br />
                                                    • Anticipated time to repair</p>
                                            </div>
                                            <div className={styles.statusCheck}>
                                                <div>
                                                    <label className={styles.check}>
                                                        <input type="checkbox" data-id="1" />
                                                        <span className={styles.checkmark}></span>
                                                    </label>
                                                </div>
                                                <h6 className={styles.completStatus}>Completed on</h6>
                                                <span className={styles.date}>09 Mar  at  10:14am</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TestingTrack