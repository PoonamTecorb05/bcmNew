import React from 'react'
import styles from "../../../../../Assets/styles/impactAnalysis.module.scss"
import DesignMenu from '../../../../../components/common/Header/designMenuWithSideNav'
const AddProcessOne = () => {
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
                    <div className={styles.addSection}>
                    <button className={`float-right close mr-0 ${styles.close}`}>
                                <img src="./images/icon-close.svg" alt="" className="img-fluid" />
                            </button>
                        <div className={styles.headingSec}>
                            <h2>
                                add process
                                    </h2>
                            <p>
                                Step 1 of 3
                                    </p>

                        </div>
                        <div className={styles.formSec}>
                        <form>
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <div className={styles.customeFormGroup}>
                                                <label >
                                                    Give this process a title
                                                </label>
                                                <input type="text" name="title" placeholder="Eg : Emergency Procurement" />
                                            </div>
                                            <div className={styles.customeFormGroup}>
                                                <label>
                                                    Give this process a unique ID
                                                </label>
                                                <input type="text"  name="processes_id"  placeholder="Eg : FIN-1" />
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                        <div className={styles.customeFormGroup}>
                                            <label>
                                                Describe the process
                                            </label>
                                            <textarea  name="description"  placeholder="Eg : Involves processing procurement requests based on urgent business needs, all requests and approvals are performed via emails"></textarea>
                                        </div>
                                        </div>
                                    </div>
                                </form>
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
        </>
    )
}
export default AddProcessOne