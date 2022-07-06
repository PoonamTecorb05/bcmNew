import React, { useState } from "react"
import DefineMenu from "../../../components/common/Header/defineMenuWithSideNav"
import styles from "../../../Assets/styles/define.module.scss"
const Procedures = () => {

    const [isYes ,setIsYes] =useState(true)
    const [isNo ,setIsNo] =useState(false)

    const ShowSecOne=(event)=>{
       event.preventDefault();
       setIsYes(true)
       setIsNo(false)
    }
    const ShowSecTwo=(event)=>{
        event.preventDefault();
        setIsNo(true)
        setIsYes(false)
     }
    return (
        <>
            <DefineMenu />
            <div className={styles.contentWrapper} >
                <div className={`p-4 pb-3 ${styles.bcpActivated}`}>
                    <div className="container-fluid">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-6 pl-0">
                                <h3 className="m-0">Define</h3>
                            </div>
                            <div className="col-lg-6">
                                <div className="d-flex align-items-center justify-content-lg-end">
                                  
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={`${styles.innerSec} p-4`}>
                    <div className={styles.panelSection}>
                        <h2>Does your organization already have<br />
                            <span>BCM Procedures</span> documents ?</h2>

                        <div className={styles.policiesBox}>
                            <div className={styles.statusBox}>
                                <img src="/images/upload-illustration.svg" alt="" className={styles.status} />
                                <div className={`${styles.content} ${isYes == true && styles.active}`}>
                                    <h6> Yes, I would like to upload <br />  the BCM Procedures</h6>
                                    <label className={styles.chkBox} onClick={(e) => ShowSecOne(e)}>
                                        <input checked type="radio" name="type" value="2" checked={isYes} />
                                        <span className={styles.checkmark}></span>
                                    </label>
                                </div>
                            </div>
                            <div className={styles.statusBox}>
                                <img src="/images/download-illustration.svg" alt="" className={styles.status} />
                                <div className={`${styles.content} ${isNo == true && styles.active}`}>
                                    <h6> No, I would like to download <br /> a template & fill it out</h6>
                                    <label className={styles.chkBox} onClick={(e) => ShowSecTwo(e)}>
                                        <input type="radio" name="type" value="1" checked={isNo}/>
                                        <span className={styles.checkmark}></span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className={styles.bottomSec}>
                            <div className={styles.LeftSec}>
                            {isYes == true ? <> 
                                <div className={styles.uploadSec}>
                                    <h4>Upload your existing BCM Procedures </h4>
                                    <form className={styles.uploader}>
                                        <input id="file-upload" type="file" name="fileUpload" accept="image/*" />
                                        <label for="file-upload" id="file-drag">
                                            <img id="file-image" src="/images/Paper-Upload.svg" alt="Preview" className="hidden" />
                                            <div className={styles.start}>
                                                <p>Drag and Drop to <br /> Upload or <span>Browse</span></p>
                                            </div>
                                        </label>
                                    </form>
                                    <div className={styles.docType}>
                                        <ul>
                                            <li>
                                                <img src="/images/Doc_file.svg" alt="" />
                                                <h5>Docs</h5>
                                                <h6>PDF</h6>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={styles.FileUpload}>
                                    <div className={styles.uploadedArea}>
                                        <div className={styles.uploadedIcon}>
                                            <img src="/images/Paper.svg" alt="" />
                                            {/* <span className={styles.uploadedText}></span> */}
                                        </div>
                                        <div className={styles.uploadedInfo}>
                                            <div className="d-flex">
                                                <span className={styles.uploadedFileName}>Procedures Doc v2.pdf</span>
                                                <span className={styles.completeUpload}>
                                                    <img src="/images/Complete_upload.svg" alt="" />
                                                </span>
                                            </div>
                                            <div className={`d-flex ${styles.downloadSec}`}>
                                                <a target="_blank" href="#">
                                                    <img src="/images/Download_Pdf.svg" alt="" />
                                                    <span>Download</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              </>
                              : ""}
                                {isNo == true && <>                              
                                <div className={styles.uploadSec}>
                                    <h4>1. Download a template & fill it out</h4>
                                    <div className={styles.downloadMode}>
                                        <h5>RECOMMENDED TEMPLATE</h5>
                                        <a target="_blank" href="#">
                                            <img src="/images/Recommend-Download.svg" alt="" />
                                        </a>
                                    </div>

                                </div>

                                <div className={styles.uploadSec}>
                                    <h4>2. Upload the completed document</h4>
                                    <form className={styles.uploader}>
                                        <input id="file-upload" type="file" name="fileUpload" accept="image/*" />
                                        <label for="file-upload" id="file-drag">
                                            <img id="file-image" src="/images/Paper-Upload.svg" alt="Preview" className="hidden" />
                                            <div className={styles.start}>
                                                <p>Drag and Drop to <br /> Upload or <span>Browse</span></p>
                                            </div>
                                        </label>
                                    </form>
                                    <div className={styles.docType}>
                                        <ul>
                                            <li>
                                                <img src="/images/Doc_file.svg" alt="" />
                                                <h5>Docs</h5>
                                                <h6>PDF</h6>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={styles.FileUpload}>
                                    <div className={styles.uploadedArea}>
                                        <div className={styles.uploadedIcon}>
                                            <img src="/images/Paper.svg" alt="" />
                                            <span className={styles.uploadedText}>Your uploaded document will appear here</span>
                                        </div>
                                        {/* <div className={styles.uploadedInfo}>
                                            <div className="d-flex">
                                                <span className={styles.uploadedFileName}>Procedures Doc v2.pdf</span>
                                                <span className={styles.completeUpload}>
                                                    <img src="/images/Complete_upload.svg" alt="" />
                                                </span>
                                            </div>
                                            <div className={`d-flex ${styles.downloadSec}`}>
                                                <a target="_blank" href="#">
                                                    <img src="/images/Download_Pdf.svg" alt="" />
                                                    <span>Download</span>
                                                </a>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                </>}
                            </div>
                            <div className={styles.RightSec}>
                                <div className={styles.statusSec}>
                                    <div className={styles.headingSec}>
                                        <h5>Status Updates</h5>
                                        <span className={styles.curentStatus}>
                                            <img src="/images/Complete_upload.svg" alt=" " />
                                            <span className={styles.aproved}>Approved</span>
                                        </span>
                                    </div>
                                    <ul className={styles.bodyarea} style={isNo == true ? {height:"280px"}:{}} >
                                      <div className={styles.noUpdate}>No Updates to show</div>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <button className={styles.submitDetailBtn}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Procedures