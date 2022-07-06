import React, { useState } from "react"
import DefineMenu from "../../../../components/common/Header/defineMenuWithSideNav"
import styles from "../../../../Assets/styles/define.module.scss"
import { AppetiteData } from "../../../BcmDefine/Appetite/tableData"
const CeoAppetite = () => {
    return (
        <>
            <DefineMenu />
            <div className={styles.contentWrapper} >
                <div className={`p-4 pb-3 ${styles.bcpActivated}`}>
                    <div className="container-fluid">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-6 pl-0">
                                <h3 className="m-0">Define</h3>
                            </div>
                            <div className="col-lg-6">
                                <div className="d-flex align-items-center justify-content-lg-end">

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={`${styles.innerSec} p-4`}>
                    <div className={`${styles.panelSection} ${styles.appetiteSection}`}>
                        <div className={`${styles.headingSection} row`}>
                            <div className={`${styles.heading} col-10`}>
                                <h3>Modify the Impact Matrix</h3>
                                <h6>Edit the guide used to identify different types of impact & guidlines used to categorise the impact of a process being unavailable as either <span className={styles.nonImpact}>Non - Impactful</span> or  <span className={styles.impact}>Impactful</span></h6>
                            </div>
                            <div className={`${styles.addSection} col-2 `}>
                            <a className={`${styles.approvedBtn} d-block float-right`}>
                                <img src="/images/approve.svg" alt="" />
                            </a>
                            </div>
                        </div>
                        <div className={styles.tableBorder}>
                            <table className={styles.impactType}>
                                <thead>
                                    <tr>
                                        <th className={styles.type}>Impact Type</th>
                                        <th className={styles.nonImpact}>Non - Impact</th>
                                        <th className={styles.impact}>Impact</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {AppetiteData.map((data) => {
                                        return (
                                            <tr key={data.id}>
                                                <td className={styles.type}>{data.type}</td>
                                                <td className={styles.nonImpact}>{data.nonImpact}</td>
                                                <td className={styles.impact}>{data.impact}</td>
                                            </tr>
                                        )
                                    })
                                    }

                                </tbody>
                            </table>
                        </div>
                        {/* // ----------------Continuity Section------------ */}
                        <div className={styles.continuitySec}>
                            <div className={styles.headingSection}>
                                <div className={styles.heading}>
                                    <h3>View the Minimum Business Continuity Objective</h3>
                                    <h6>Understand the target objective for the BCP to achieve during a disruption</h6>
                                </div>
                            </div>
                            <div className={styles.programObjective}>
                                <div className={styles.left}>
                                    <h5>Program Objective</h5>
                                   <h6>60%</h6>
                                </div>
                                <div className={styles.right}>
                                    <h5>Time Objective</h5>
                                    <div className={`${styles.sliderPurple} mt-0 mb-3 ml-0`}>
                                     <h6>Within 1 Week</h6>
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
export default CeoAppetite