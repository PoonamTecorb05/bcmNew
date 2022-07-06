import React from 'react'
import styles from "../../../Assets/styles/crisisactive.module.scss"
import HeaderSideMenu from '../../../components/common/Header/headerWithSideMenu'
const BCPActive = () => {
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
        <div className={styles.callFor}>
            <h2>Call for action </h2>
            <h6>Monitor the below (department name’s) recovery step</h6>
            <div className={styles.tableSec}>
                <table border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                        <tr>
                            <td className={styles.itemName}>Test </td>
                            <td className={styles.subItemName}>
                                <a href="#">Secondary Desktops</a>
                            </td>
                            <td className={styles.statusBadge}>
                                <a href="#" className={styles.staff}>Equipment</a>
                                <a href="#" className={styles.hours}>12 hours</a>
                                <a href="#" className={styles.spf}>SPF</a>
                            </td>
                            <td className={styles.spanText}>
                                <span className={styles.blue}>1 </span>
                                <span className={styles.gray}>/ </span>
                                <span className={styles.gray}>1</span>
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.itemName}>Test </td>
                            <td className={styles.subItemName}>
                                <a href="#">Breakdown Maintenance</a>
                            </td>
                            <td className={styles.statusBadge}>
                                <a href="#" className={styles.staff}>Software App</a>
                                <a href="#" className={styles.hours}>12 hours</a>
                                <a href="#" className={styles.spf}>SPF</a>
                            </td>
                            <td className={styles.spanText}>
                            <span className={styles.blue}>1 </span>
                                <span className={styles.gray}>/ </span>
                                <span className={styles.gray}>1</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
        </>
    )
}
export default BCPActive