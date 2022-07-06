import React from 'react'
import styles from "../../../Assets/styles/crisisactive.module.scss"
import HeaderSideMenu from '../../../components/common/Header/headerWithSideMenu'
const BCPSucess = () => {
    return (
        <>
            <HeaderSideMenu />
            {/* ------------Inner Section---------- */}
            <div className={styles.contentWrapper} >
    <div className={`p-4 pb-3 ${styles.bcpActivated}`}>
        <div className="container-fluid">
            <div className="row d-flex align-items-center">
                <div className={`col-lg-6 ${styles.colorRed} pl-0`}>
                    <h3 className="m-0">BCP Activated
                     <img
                            src="/images/bcp_icon.png" alt="" /></h3>
                </div>
            </div>
        </div>
    </div>
    <div className={`${styles.innerSec} p-4`}>
        <div className={`${styles.callFor}  text-center`}>
        <div className={`${styles.imageSec}`}>
                <img src="images/complete.png" alt="" />
            </div>
            <h2>
                Successfully Completed!
            </h2>
            <p className={styles.success}>(Department Name’s) predefined recovery steps <br/>have been completed</p>
            <div className={styles.buttonGroup}>
                <a className={styles.goBack}>
                    Go Back
                </a>
                <a href="" className={styles.finishBtn}>
                    Finish
                </a>
            </div>
        </div>
    </div>
</div>
        </>
    )
}
export default BCPSucess