import React from 'react'
import DesignMenu from '../../../../components/common/Header/designMenuWithSideNav'
import styles from "../../../../Assets/styles/enabler.module.scss"
import HeadingSection from './HeadignSection'
const SuccessProcess = () => {
    return (
        <>
            <DesignMenu />
            <div className={styles.contentWrapper} >
                <HeadingSection styles={styles} />
                <div className={`${styles.innerSec} p-4`}>
                    <div className={`${styles.sucessFullProcessSection} ${styles.processSection}  text-center`}>
                        <figure className={styles.imageSection}>
                            <img src="/images/icon-thank-you.svg" />
                        </figure>
                        <h1>Successfully Added!</h1>
                        <p>Go ahead and all the enablers <br className="hidden-sm" />
                        from this department</p>
                        <div className={`d-flex align-item-center flex-wrap justify-content-center ${styles.buttonSec}`}>
                            <button className={styles.finishBtn}>Finish</button>
                            <button className={styles.AddBtn}>Add Another</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default SuccessProcess