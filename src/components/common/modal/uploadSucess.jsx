import React, { Fragment, useState } from "react";
import ReactModal from "react-modal";
import styles from "../../../Assets/styles/customeModal.module.scss";
import ProgressBar from 'react-bootstrap/ProgressBar'
const UploadSucessModal = ({ style }) => {
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
                    <div className={`${styles.modalBody} text-center`}>
                    
                        <div className={`${styles.uploadImage} mt-5 `}>
                            <img src="./images/upload_Successfull.svg" className={styles.uploadImg} />
                            <div className={`mt-4 uploadProgress  ${styles.uploadContent}`}>
                            <h4 style={{marginBottom:"14px"}}>Uploaded Successfully!</h4>
                            <img src="/images/Vector.png" alt="sucess"/>
                            </div>
                        </div>
                       
                        <div className={`d-flex align-item-center flex-wrap justify-content-center ${styles.buttonGroup}`}>
                        <button className={styles.cancelBtn}>Cancel</button>
                        <button className={`${styles.nextBtn}`}>Next</button>

                        </div>
                    </div>

                </div>
            </ReactModal>
        </Fragment>

    )
}
export default UploadSucessModal