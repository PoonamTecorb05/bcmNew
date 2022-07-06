import React from 'react'
import DesignMenu from '../../../../../components/common/Header/designMenuWithSideNav'
import styles from "../../../../../Assets/styles/enabler.module.scss"
import EnablerData from "./enabler"
import HeadingSection from '../HeadignSection'
const StepTwo = () => {
    return (
        <>
            <DesignMenu />
            <div className={styles.contentWrapper} >
                <HeadingSection styles={styles} />
                <div className={`${styles.innerSec} p-4`}>
                    <div className={styles.addtwoSection}>
                        <button className={`float-right close mr-0 ${styles.close}`}>
                            <img src="./images/icon-close.svg" alt="" className="img-fluid" />
                        </button>
                        <div className={styles.headingSec}>
                            <h2>
                                Callout dependencies
                                    </h2>
                            <h5>
                                Choose processes that <span>Headquaters Building</span> enables
                                    </h5>
                            <div className="row">
                                <div className="col-md-9">
                                    <p>
                                        Step 2 of 2
                                    </p>
                                </div>
                                <div className="col-md-3" >

                                </div>
                            </div>
                        </div>
                        {/* -------------------Card List Sec----------------- */}
                        <div className={styles.actionCardList}>
                            <div className="row">
                                <div className="col-md-10">
                                    <div className="row">
                                        {
                                            EnablerData.map((data) => {
                                                return (
                                                    <>
                                                        <div className="col-lg-4">
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
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className={styles.stepSection}>
                                    <div className={styles.backStep}>
                                        <button className={styles.backBtn}> <img src="/images/icon-back-hallow.svg" alt="Thumb" class="img-fluid" /></button>
                                        <label className="mb-0 ml-2">Back</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className={styles.stepSection}>
                                    <div className={styles.nextStep}>
                                        <label className="mb-0 mr-2">Step 2</label>
                                        <button className={styles.nextBtn}> <img src="/images/icon-next-filled.svg" alt="Thumb" class="img-fluid" /></button>
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
export default StepTwo