import React from 'react'
import DesignMenu from '../../../../components/common/Header/designMenuWithSideNav'
import styles from "../../../../Assets/styles/enabler.module.scss"
import HeadingSection from './HeadignSection'
const StartEnablerProcess = () => {
    return (
        <>
            <DesignMenu />
            <div className={styles.contentWrapper} >
                <HeadingSection styles={styles} />
                <div className={`${styles.innerSec} p-4`}>
                    <div className={`${styles.startProcessSection} ${styles.processSection} text-center`}>
                        <figure className={styles.imageSection}>
                            <img src="/images/icon-keepgoing.svg" />
                        </figure>
                        <h1>Keep Going!</h1>
                        <p>Now let’s identify the enablers needed<br className="hidden-sm" />
                        to achieve the recovery goals.</p>
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
export default StartEnablerProcess