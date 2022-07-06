import React from 'react'
import styles from "../../../Assets/styles/crisisactive.module.scss"
import HeaderSideMenu from '../../../components/common/Header/headerWithSideMenu'
import ImagePreviewModal from '../../../components/common/modal/imagePreviewModal'
const Refer = () => {
    return (
        <>
            <HeaderSideMenu />
            {/* ------------Inner Section---------- */}
            <div className={styles.contentWrapper} >
                <div className={`p-4 pb-3 ${styles.bcpActivated}`}>
                    <div className="container-fluid">
                        <div className="row d-flex align-items-center">
                            <div className={`col-lg-6 pl-0`}>
                                <h3 className="m-0">Refer
                   </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.innerSec} p-4`}>
                    <div className={styles.panelSection}>
                        <div className={styles.headingSec}>
                            <h2>Crisis Playbook</h2>
                            <p>View defined crisis actions</p>
                        </div>
                        <div className={`${styles.ListArea} pt-0 pb-4`}>

                            {/*-- ---------list 2------------ --*/}
                            <div className={`${styles.listSec} mb-4`}>
                                <div className="row d-flex align-items-center">
                                    <div className="col-lg-3 col-md-12">
                                        <div className="d-flex align-items-center mb-2 mb-lg-0">
                                        <img src="/images/pdf_view.svg" alt="" className={styles.pdfIcon} />
                                            <h5 className="m-0 text-capitalize">
                                                Urs.ppt
                                               </h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-8">
                                        <div style={{ justifyContent: "space-around" }} className="d-flex align-items-center mb-3 mb-md-0 mt-3 mt-md-0 flex-wrap">

                                            <div className={styles.dateSec}>
                                                21-04-22
                                              </div>
                                            <div className={styles.satusSec}>
                                                Status : Approved
                                             </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="d-flex justify-content-md-end align-items-center">
                                            <button className={styles.manageBtn} >
                                                Manage
                                                </button>
                                                <ImagePreviewModal style={styles} />
                                        
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
export default Refer