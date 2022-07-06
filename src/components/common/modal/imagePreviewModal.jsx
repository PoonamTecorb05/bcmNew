import React, { Fragment, useState } from "react";
import ReactModal from "react-modal";
import styles from "../../../Assets/styles/customeModal.module.scss"
const ImagePreviewModal = ({ style }) => {
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
    <a className={`${style.viewBtn} btn`} onClick={openModal} >View</a>
          
            <ReactModal
                className={`${styles.customeModal} ${styles.imagepreviewModal}`}
                isOpen={open}
                onRequestClose={closeModal}
                onAfterOpen={() => document.body.style.overflow = 'hidden'}
                onAfterClose={() => document.body.style.overflow = 'unset'}
                // onRequestClose={closeModal}
                style={{ overflowY: "scroll" }}
            >
                <div className={styles.dialogBox}>
                    <div className="row mx-0">
                        <div class="col-10 pl-0">
                         </div>
                        <div className={`col-md-2 text-right pr-1 pt-1`}>
                        <button  className={`${styles.download}`}>
                                <img src="/images/download.png" alt="" className="img-fluid" />
                            </button>
                            <button onClick={closeModal} className={`float-right close mr-0 ${styles.close}`}>
                                <img src="./images/Close-Modal.svg" alt="" className="img-fluid" />
                            </button>
                        </div>
                    </div>
                    <div className={styles.modalBody}>
                      <div className={styles.imageBox}>
                      <iframe src="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" width="100%" height="500px" />
                      </div>
                    </div>                  
                </div>
            </ReactModal>
        </Fragment>

    )
}
export default ImagePreviewModal