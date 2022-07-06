import React, { Fragment, useState } from "react";
import ReactModal from "react-modal";
import styles from "../../../Assets/styles/customeModal.module.scss"
const UploadEpisodModal = ({ style }) => {
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
                        <div className={styles.uploadImage}>
                            <img src="./images/episodeImg.svg" className={styles.uploadImg} />
                        </div>
                        <form className={styles.uploader}>
                                        <input id="file-upload" type="file" name="fileUpload" accept="image/*" />
                                        <label for="file-upload" id="file-drag">
                                            <img id="file-image" src="/images/Paper-Upload.svg" alt="Preview" className="hidden" />
                                            <div className={styles.start}>
                                                <p>Drag and Drop to Upload a <br /> Video</p>
                                            </div>
                                        </label>
                                    </form>
                                    <h6>Or</h6>
                                    <button className={styles.browseBtn}>Browse</button>
                    </div>

                </div>
            </ReactModal>
        </Fragment>

    )
}
export default UploadEpisodModal