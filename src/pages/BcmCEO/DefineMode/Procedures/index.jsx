import React, { useState } from "react"
import DefineMenu from "../../../../components/common/Header/defineMenuWithSideNav"
import styles from "../../../../Assets/styles/define.module.scss"
const CeoProcedures = () => {

    const [isYes, setIsYes] = useState(true)
    const [isNo, setIsNo] = useState(false)

    const ShowSecOne = (event) => {
        event.preventDefault();
        setIsYes(true)
        setIsNo(false)
    }
    const ShowSecTwo = (event) => {
        event.preventDefault();
        setIsNo(true)
        setIsYes(false)
    }
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
                    <div className={styles.panelSection}>
                        <div className="row">
                            <div className="col-8">
                        <h2>Review your organization’s <br />
                            <span>BCM Procedures</span> documents ?</h2>
                            </div>
                            <div className="col-4">
                        <div className="d-flex justify-content-md-end align-items-center">
                            <a className={styles.approvedBtn}>
                                <img src="/images/approve.svg" alt="" />
                            </a>
                            <a className={styles.downloadBtn}>
                                <img src="/images/download.png" alt="" />
                            </a>
                        </div>
                        </div>
                        </div>
                        <div className={styles.pdfViewSec}>

                        </div>

                    <div className={styles.bottomSec}>
                    <div className={`${styles.RightSec} pl-0`}>
                            <div className={styles.statusSec}>
                                <div className={styles.headingSec}>
                                    <h5>Status Updates</h5>
                                    <span className={styles.curentStatus}>
                                        <img src="/images/Complete_upload.svg" alt=" " />
                                        <span className={styles.aproved}>Approved</span>
                                    </span>
                                </div>
                                <ul className={styles.bodyarea} style={{ height: "280px" }} >
                                    <li>
                                        <img src="/images/Arrow-Down-Square-Upload.svg" alt=" " />
                                        <h5><span>Jack Hudson </span>approved Policy Doc v2.pdf</h5>
                                        <h6>on 23rd Dec, 10:20pm </h6>
                                    </li>
                                    <li>
                                        <img src="/images/Arrow-Down-Square-Upload.svg" alt=" " />
                                        <h5><span>Jack Hudson </span>approved Policy Doc v2.pdf</h5>
                                        <h6>on 23rd Dec, 10:20pm </h6>
                                    </li>
                                    <li>
                                        <img src="/images/Arrow-Down-Square-Upload.svg" alt=" " />
                                        <h5><span>Jack Hudson </span>approved Policy Doc v2.pdf</h5>
                                        <h6>on 23rd Dec, 10:20pm </h6>
                                    </li>
                                    <li>
                                        <img src="/images/Arrow-Down-Square-Upload.svg" alt=" " />
                                        <h5><span>Jack Hudson </span>approved Policy Doc v2.pdf</h5>
                                        <h6>on 23rd Dec, 10:20pm </h6>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default CeoProcedures