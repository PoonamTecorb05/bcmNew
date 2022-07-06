import React, { useState } from 'react'
import DesignMenu from '../../../../components/common/Header/designMenuWithSideNav'
import styles from "../../../../Assets/styles/enabler.module.scss"
import EnablerData from './AddProcess/enabler'
import HeadingSection from './HeadignSection'
const EnablerList = () => {
    const [isMatrix, setIsMatrix] = useState(false);
    const ShowDiv = () => {
        setIsMatrix(true);
    }
    const HideDiv = () => {
        setIsMatrix(false);
    }
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
                                <td className={`${styles.process} ${isMatrix == true ? styles.purpleBorder : ""}`} onClick={() => ShowDiv()} >
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
                    <div className={`d-flex align-item-center flex-wrap justify-content-start ${styles.buttonSec}`}>
                        <button className={styles.importBtn}>Add Enabler</button>
                        <button className={styles.AddBtn}>Next Step</button>
                    </div>
                    {isMatrix === true &&
                        <>
                            <div className={styles.sideSection}>
                                <div className={styles.headerSec}>
                                    <div className="row mx-0">
                                        <div className="col-10">
                                            <h3>Headquarters Building</h3>
                                            <p>Premises</p>
                                            <h6>Comments (3)</h6>
                                        </div>
                                        <div className="col-2 px-0">
                                            <button className={`float-right close mr-0 ${styles.close}`} onClick={() => HideDiv()}>
                                                <img src="./images/icon-close.svg" alt="" className="img-fluid" />
                                            </button>
                                        </div>
                                    </div>

                                </div>
                                <div className={styles.contentSec}>
                                    {
                                        EnablerData.map((data) => {
                                            return (
                                                <>
                                                    <div className={styles.actionCard} key={data.id}>
                                                        <label class={styles.checkboxWrapper}>
                                                            <input type="checkbox" class={styles.checkboxInput} />
                                                            <span class={styles.checkboxTile}>
                                                                <span class={styles.checkboxIcon}>
                                                                    {data.name}
                                                                </span>
                                                                <span class={styles.checkboxLabel}>{data.title}</span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </>
                    }
                </div>

            </div>
        </>
    )
}
export default EnablerList