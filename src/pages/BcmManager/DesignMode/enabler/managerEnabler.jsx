import React, { useState } from 'react'
import DesignMenu from '../../../../components/common/Header/designMenuWithSideNav'
import styles from "../../../../Assets/styles/enabler.module.scss"
import EnablerData from './AddProcess/enabler'
import HeadingSection from './HeadignSection'
const ManagerEnablerList = () => {

    return (
        <>
            <DesignMenu />
            <div className={styles.contentWrapper} >
                <HeadingSection styles={styles} />
                <div className={`${styles.tableSec}`}>
                    <table className={`table table-bordered ${styles.analysisTable}`}>
                        <thead>
                            <tr>
                                <th >
                                    Enabler <br />Label
                                </th>
                                <th >
                                    Enabler <br /> Type
                                </th>
                                <th >
                                    Processes <br /> Enabled
                                </th>
                                <th className={styles.purpleTh}>
                                    Application <br /> Availability Time
                                </th>
                                <th >
                                    Acceptable <br />Data Loss
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Headquarters Building
                                </td>
                                <td>
                                    Premises
                                </td>
                                <td className={`${styles.process} `} >
                                    Emergency Procurement Financial Planning   </td>

                                <td>
                                    12 Hours
                                </td>
                                <td>
                                    0 - 2 weeks
                                </td>

                            </tr>
                        </tbody>
                    </table>
                  
                </div>

            </div>
        </>
    )
}
export default ManagerEnablerList