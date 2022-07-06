import React, { Fragment, useState } from "react";
import ReactModal from "react-modal";
import styles from "../../../Assets/styles/customeModal.module.scss"
const VideoDetailModal = ({ style }) => {
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


            <button className={style.uploadBtn} onClick={openModal}><img src="/images/uploadBtn.png" /></button>
            <ReactModal
                className={`${styles.customeModal} ${styles.UploadEpisod}`}
                isOpen={open}
                onRequestClose={closeModal}
                onAfterOpen={() => document.body.style.overflow = 'hidden'}
                onAfterClose={() => document.body.style.overflow = 'unset'}
                // onRequestClose={closeModal}
                style={{ overflowY: "scroll" }}
            >
                <div className={styles.dialogBox}>
                    <button onClick={closeModal} className={`float-right close mr-0 ${styles.close}`}>
                        <img src="./images/icon-close.svg" alt="" className="img-fluid" />
                    </button>
                    <div className={`${styles.modalBody}`}>
                        <div className={styles.formArea}>
                            <h5>Video Details</h5>
                            <form>
                                <div className="row">
                                    <div className="col-md-6">

                                        <div className={styles.customeFormGroup}>
                                            <label>Title <span>*</span></label>
                                            <input name="action" placeholder="Action to be taken" />
                                        </div>
                                        <div className={`${styles.customeFormGroup} mb-0`}>
                                            <label>Describe the video</label>
                                            <textarea name="action" placeholder="Action to be taken"></textarea>
                                        </div>
                                        <div className={`d-flex align-item-center flex-wrap justify-content-start ${styles.buttonGroup}`}>
                                            <button className={styles.cancelBtn}>Cancel</button>
                                            <button className={`${styles.nextBtn}`}>Next</button>

                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className={styles.customeFormGroup}>
                                            <label>Preview</label>
                                            <div className={styles.imageBox}>
                                                <img src="/images/preview.svg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>

                </div>
            </ReactModal>
        </Fragment>

    )
}
export default VideoDetailModal