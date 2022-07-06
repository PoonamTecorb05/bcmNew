import React, { Fragment, useState } from "react";
import ReactModal from "react-modal";
import styles from "../../../Assets/styles/customeModal.module.scss"
const SetUpDefineModal = ({ style }) => {
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

            <button className={style.addBtn} onClick={openModal}>
                <img src="./images/plus.png" alt="" className="img-fluid" />
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
                            <h5 class="modal-title" id="modal_finish_setup_title">Set up Define mode</h5>
                            <p>Add Departments and assign Champions</p>
                        </div>
                        <div className={`col-md-1 pr-0`}>
                            <button onClick={closeModal} className={`float-right close mr-0 ${styles.close}`}>
                                <img src="./images/icon-close.svg" alt="" className="img-fluid" />
                            </button>
                        </div>
                    </div>
                    <div className={styles.modalBody}>
                        <table className={styles.designModalTable}>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className={styles.inputDiv}>
                                            <label for="">Department Name</label>
                                            <input name="deapertmentName" type="text" placeholder="Eg : Finance" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className={styles.inputDiv}>
                                            <label for="">Champion Name</label>
                                            <img src="./images/addUser.png" alt="" className="img-fluid" />
                                            <select style={{ paddingLeft: "36px" }} >
                                                <option value="">Assign a Champion</option>
                                                <option value="1" >
                                                    Please Select
                                                 </option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <button className={styles.addBtn} >
                                            <img src="./images/plus.png" alt="" className="img-fluid" />
                                        </button>
                                        {/* <img className={styles.addBtn} src="./images/Plus.png" alt="" /> */}
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                    <div className={styles.modalFooter}>
                        <button className={styles.nextBtn} type="submit">
                            <img src="./images/next.png" alt="" className="img-fluid" />
                        </button>
                    </div>
                </div>
            </ReactModal>
        </Fragment>

    )
}
export default SetUpDefineModal