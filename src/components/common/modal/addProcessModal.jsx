import React, { Fragment, useState} from "react";
import ReactModal from "react-modal";
import styles from "../../../Assets/styles/customeModal.module.scss"
const AddProcessModal = ({ style }) => {
    const [open, setOpen] = useState(false)
    const openModal = (e) => {
        e.preventDefault()
        setOpen(true)

    }
    const closeModal = (e) => {
        e.preventDefault()
        setOpen(false)
    }
    return (
        <Fragment>

            <button className={style.editBtn} onClick={openModal}>
                <img src="./images/Edit-Square.svg" alt="" className="img-fluid" />
            </button>
            <ReactModal
                className={`${styles.customeModal}`}
                isOpen={open}
                onRequestClose={closeModal}
                onAfterOpen={() => document.body.style.overflow = 'hidden'}
                onAfterClose={() => document.body.style.overflow = 'unset'}
                // onRequestClose={closeModal}
                style={{ overflowY: "scroll" }}
            >
                <div className={styles.dialogBox}>
                    <div className="row mx-0">
                        <div class="col-11 pl-0">
                            <h5 class="modal-title  text-capitalize " id="modal_finish_setup_title">add process</h5>
                            <p className={styles.addProcessPara}>  Step 1 of 3</p>
                        </div>
                        <div className={`col-md-1 pr-0`}>
                            <button onClick={closeModal} className={`float-right close mr-0 ${styles.close}`}>
                                <img src="./images/icon-close.svg" alt="" className="img-fluid" />
                            </button>
                        </div>
                    </div>
                    <div className={styles.modalBody}>
                       
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
                              
                        </div>
                    </div>
                    <div className={`${styles.modalFooter} mt-1`}>
                    <div className={styles.stepSection}>
                                    <div className={styles.nextStep}>
                                        <label className="mb-0 mr-2">Step 2</label>
                                       <button className={styles.nextBtn}> <img src="/images/icon-next-filled.svg" alt="Thumb" class="img-fluid" /></button>
                                    </div>
                                </div>
            </div>
                </div>
            </ReactModal>
        </Fragment>

    )
}
export default AddProcessModal