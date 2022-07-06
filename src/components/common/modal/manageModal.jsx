import React, { Fragment, useState } from "react";
import ReactModal from "react-modal";
import styles from "../../../Assets/styles/customeModal.module.scss"

const ManageModal = ({ style }) => {
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

            <button className={style.manageBtn} onClick={openModal}>
                Manage
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
                            <h5 class="modal-title" id="modal_finish_setup_title">Finance Department</h5>
                            <p>Assign target dates for all the milestones</p>
                        </div>
                        <div className={`col-md-1 pr-0`}>
                            <button onClick={closeModal} className={`float-right close mr-0 ${styles.close}`}>
                                <img src="./images/icon-close.svg" alt="" className="img-fluid" />
                            </button>
                        </div>
                    </div>
                    <div className={styles.modalBody}>
                        <table className={styles.managefinishTable}>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className={styles.ListView}>
                                            <p>Impact Analysis</p>

                                            <div className={styles.dateDiv}>
                                                <input type="text" autocomplete="off" name="dates[]" className="datepicker" />
                                                <p>
                                                    <img src="./images/calendar.png" alt="" className="img-fluid" />
                                                    <span className={styles.dateText}>Select Date</span>
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <div className={styles.ListView}>
                                            <p>Enablers</p>
                                            <div className={styles.dateDiv}>
                                                <input type="text" autocomplete="off" name="dates[]" className="datepicker" />
                                                <p>
                                                    <img src="./images/calendar.png" alt="" className="img-fluid" />
                                                    <span className={styles.dateText}>Select Date</span>
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <div className={styles.ListView}>
                                            <p>Value Chain</p>
                                            <div className={styles.dateDiv}>
                                                <input type="text" autocomplete="off" name="dates[]" className="datepicker" />
                                                <p>
                                                    <img src="./images/calendar.png" alt="" className="img-fluid" />
                                                    <span className={styles.dateText}>Select Date</span>
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <div className={styles.ListView}>
                                            <p>Risk Assessment</p>
                                            <div className={styles.dateDiv}>
                                                <input type="text" autocomplete="off" name="dates[]" className="datepicker" />
                                                <p>
                                                    <img src="./images/calendar.png" alt="" className="img-fluid" />
                                                    <span className={styles.dateText}>Select Date</span>
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <div className={styles.ListView}>
                                            <p>Recovery Strategy</p>
                                            <div className={styles.dateDiv}>
                                                <input type="text" autocomplete="off" name="dates[]" className="datepicker" />
                                                <p>
                                                    <img src="./images/calendar.png" alt="" className="img-fluid" />
                                                    <span className={styles.dateText}>Select Date</span>
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <div className={styles.ListView}>
                                            <p>Business Continuity Plan</p>
                                            <div className={styles.dateDiv}>
                                                <input type="text" autocomplete="off" name="dates[]" className="datepicker" />
                                                <p>
                                                    <img src="./images/calendar.png" alt="" className="img-fluid" />
                                                    <span className={styles.dateText}>Select Date</span>
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                </tr>
                            </tbody>

                        </table>
                    </div>
                    <div className={styles.modalFooter}>
                        <button className={styles.nextBtn} type="submit">
                            <img src="./images/finish.png" alt="" className="img-fluid" />
                        </button>
                    </div>
                </div>
            </ReactModal>
        </Fragment>

    )
}
export default ManageModal