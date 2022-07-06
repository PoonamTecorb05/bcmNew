import React, { useState } from 'react'
import styles from "../../../../Assets/styles/impactAnalysis.module.scss"
import DesignMenu from '../../../../components/common/Header/designMenuWithSideNav'
import AddProcessModal from '../../../../components/common/modal/addProcessModal'

const ManagerAnalysisList = () => {

    return (
        <>
            <DesignMenu />
            <div className={styles.contentWrapper} >
                <div className={`p-4 pb-3 ${styles.bcpActivated}`}>
                    <div className="container-fluid">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-6 pl-0">
                                <h3 className="m-0">Test Department</h3>
                            </div>
                            <div className="col-lg-6">
                                <div className="d-flex align-items-center justify-content-lg-end">
                                    <img src="/images/icon-filter.svg" alt="Thumb" class="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={`${styles.tableSec}`}>
                    <table className={`table table-bordered ${styles.analysisTable}`}>
                        <thead>
                            <tr>
                                <th >
                                    Process <br />Reference
                                    <span className={styles.dotIcon}></span>
                                </th>
                                <th >
                                    Business <br /> Process
                                    <span className={styles.dotIcon}></span>
                                </th>
                                <th >
                                    Process <br /> Description
                                    <span className={styles.dotIcon}></span>
                                </th>
                                <th className={styles.purpleTh}>
                                    Impact <br /> Assessment
                                </th>
                                <th >
                                    MAO
                                    <span className={styles.dotIcon}></span>
                                </th>
                                <th >
                                    RTO
                                    <span className={styles.dotIcon}></span>
                                </th>
                                <th >
                                    RTO <br />Justification
                                    <span className={styles.dotIcon}></span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    FIN - 1
                                </td>
                                <td>
                                    Emergency Procurement
                                </td>
                                <td>
                                    Involves processing procurement requests based on urgent business needs, all requests and approvals are performed via emails
                                </td>
                                <td className={styles.editBtnSec}>
                                    {/* <AddProcessModal style={styles} /> */}
                                    <button className={styles.editBtn} type="button" disabled>
                                        <img src="./images/Edit-Square.svg" alt="" className="img-fluid" />
                                    </button>
                                </td>
                                <td className={styles.Maq}>
                                    12 Hours
                                </td>
                                <td>
                                    <input type="text" name="hrs" value="3 Hours" />
                                </td>
                                <td>
                                    Involves processing procurement requests based on urgent business needs, all requests and approvals are performed via emails
                                </td>

                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>
        </>
    )
}
export default ManagerAnalysisList