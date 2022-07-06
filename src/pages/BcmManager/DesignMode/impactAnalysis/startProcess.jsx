import React from 'react'
import styles from "../../../../Assets/styles/impactAnalysis.module.scss"
import DesignMenu from '../../../../components/common/Header/designMenuWithSideNav'
const StartProcess = () => {
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
                                <a href="#" class={styles.addBtn}><img src="/images/plus.svg" alt="Settings" /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={`${styles.innerSec} p-4`}>
                    <div className={`${styles.startProcessSection} ${styles.processSection} text-center`}>
                        <figure className={styles.imageSection}>
                            <img src="/images/icon-get-started.svg" />
                        </figure>
                        <h1>Get Started!</h1>
                        <p>Looks like, you are yet to give details of the different<br className="hidden-sm" />
                         processes and its impact in this department</p>
                        <div className={`d-flex align-item-center flex-wrap justify-content-center ${styles.buttonSec}`}>
                            <button className={styles.importBtn}>Import Enablers</button>
                            <button className={styles.AddBtn}>Add Enablers</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default StartProcess