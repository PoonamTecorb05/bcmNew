import React from 'react'
import styles from "../../../../Assets/styles/designSummary.module.scss"
import Header from '../../../../components/common/Header/header'
import ManageModal from '../../../../components/common/modal/manageModal'
const DepartmentView = () => {
    return (
        <>
            <Header />
            <div className={styles.departmentView}>
                <div className={`p-4 pb-3 ${styles.bcpActivated}`}>
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-6 pl-1">
                                <h3 className="m-0">Company Name / Departments</h3>
                            </div>
                            <div className="col-lg-6">
                                <div className="d-flex align-items-center justify-content-lg-end">
                                    <img src="/images/icon-filter.svg" alt="Thumb" class="img-fluid" />
                                    <a href="#" class={styles.addBtn}><img src="/images/plus.svg" alt="Settings" /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/*-- ---------------company dashboard bottom Sec---------------*/}
                <div className={`${styles.dashboardBottomList} pb-4`}>
                    <div className="container">
                        <div className={`${styles.listSec} mb-4`}>
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-3 col-md-12 pr-0">
                                    <div className="d-flex align-items-center mb-2 mb-lg-0">
                                        <figure className={`${styles.dashboardTitle} mr-3 `}>
                                            F
                        </figure>
                                        <h5 className="m-0 text-capitalize">
                                        Finance
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
                                            Status : Impact Analysis
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
                        {/*-- ---------list 2------------ --*/}
                        <div className={`${styles.listSec} mb-4`}>
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-3 col-md-12 pr-0">
                                    <div className="d-flex align-items-center mb-2 mb-lg-0">
                                        <figure className={`${styles.dashboardTitle} mr-3 `}>
                                          HR
                        </figure>
                                        <h5 className="m-0 text-capitalize">
                                        Human Resources
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
                                            Status : Impact Analysis
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
                    </div>
                </div>
            </div>
        </>
    )
}
export default DepartmentView