import ImproveMenu from "../../../components/common/Header/improveMenuWithSideNav"
import React from "react"
import styles from "../../../Assets/styles/improve.module.scss"
import Select from 'react-select';
const Review = () => {
    var OptionList = [
        { value: 'one', label: 'Past Month' },
        { value: 'two', label: 'Human Resources' }
    ];
    const colourStyles = {
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      
          console.log({ data, isDisabled, isFocused, isSelected });
          return {
            ...styles,
            backgroundColor: isFocused ? "#F8F2FF" : null,
            color: "#000000;"
          };
        }
      };
    return (
        <>
            <ImproveMenu />
            <div className={styles.contentWrapper} >
                <div className={`p-4 pb-3 ${styles.bcpActivated}`}>
                    <div className="container-fluid">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-6 pl-0">
                                <h3 className="m-0">Improve</h3>
                            </div>
                            <div className="col-lg-6">
                                <div className="d-flex align-items-center justify-content-lg-end">

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={`${styles.innerSec}`}>
                    <div className={`${styles.panelSection} row mx-0`}>
                        <div className={`col-md-12 px-0`}>
                            <h2>Stay Up-to Date</h2>
                        </div>
                        <div className="col-md-9 px-0">
                            <p>Upload reviews to keep track of  your organization’s BCM</p>
                        </div>
                        <div className={`col-md-3 px-0`}>
                            <div className={styles.pending}>
                                <img src="/images/Time-Circle-pending.svg" alt="Images" />
                                <span>Pending</span>
                            </div>
                        </div>

                        <div className={styles.bottomSec}>
                            <div className={styles.LeftSec}>
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
                                    <ul className={styles.bodyarea} >
                                        <li>
                                            <img src="/images/Arrow-Down-Square-Upload.svg" alt=" " />
                                            <h5><span>Jack Hudson </span>approved Policy Doc v2.pdf</h5>
                                            <h6>on 23rd Dec, 10:20pm </h6>
                                        </li>
                                        <li>
                                            <img src="/images/Arrow-Down-Square-Upload.svg" alt=" " />
                                            <h5><span>Jack Hudson </span>approved Policy Doc v2.pdf</h5>
                                            <h6>on 23rd Dec, 10:20pm </h6>
                                        </li>
                                        <li>
                                            <img src="/images/Arrow-Down-Square-Upload.svg" alt=" " />
                                            <h5><span>Jack Hudson </span>approved Policy Doc v2.pdf</h5>
                                            <h6>on 23rd Dec, 10:20pm </h6>
                                        </li>
                                        <li>
                                            <img src="/images/Arrow-Down-Square-Upload.svg" alt=" " />
                                            <h5><span>Jack Hudson </span>approved Policy Doc v2.pdf</h5>
                                            <h6>on 23rd Dec, 10:20pm </h6>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* ----------------------bottom graph------------- */}
                    <div className={`${styles.panelSection} mt-4`}>
                        <div className="row">
                            <div className="col-8">
                                <h3>Review Notes</h3>
                            </div>
                            <div className="col-4">
                               <div className="d-flex">
                               <div className={`overview timeSelect ${styles.dropDownSelection} ml-auto`}>
                                    <Select
                                        options={OptionList}
                                        styles={colourStyles}
                                         />
                                </div>
                                <div className={`overview  departmentSelect ${styles.dropDownSelection}`}>
                                    <Select
                                        options={OptionList} 
                                        styles={colourStyles}
                                        />
                                </div>
                               </div>
                            </div>
                        </div>

                        <div className={`${styles.listSec}`}>
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-4 col-md-12 pr-0">
                                    <div className="d-flex align-items-center mb-2 mb-lg-0">
                                        <h5 className="m-0 text-capitalize">
                                            Review Notes_HR.pdf
                        </h5>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-8">
                                    <div style={{ justifyContent: "space-around" }} className="d-flex align-items-center mb-3 mb-md-0 mt-3 mt-md-0 flex-wrap">

                                        <div className={styles.dateSec}>
                                            13th March’21
                                            </div>
                                        <div className={styles.timeSec}>
                                            10:20
                            </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-4">
                                    <div className="d-flex justify-content-md-end align-items-center">
                                        <div className={`d-flex ${styles.downloadSec}`}>
                                            <a target="_blank" href="#">
                                                <img src="/images/Download_Pdf.svg" alt="" />
                                                <span>Download</span>
                                            </a>
                                        </div>

                                        <a className={`${styles.viewBtn} btn`}>View</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*-- ---------list 2------------ --*/}
                        <div className={`${styles.listSec}`}>
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-4 col-md-12 pr-0">
                                    <div className="d-flex align-items-center mb-2 mb-lg-0">
                                        <h5 className="m-0 text-capitalize">
                                            Review Notes_Impact Analysis.pdf
                        </h5>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-8">
                                    <div style={{ justifyContent: "space-around" }} className="d-flex align-items-center mb-3 mb-md-0 mt-3 mt-md-0 flex-wrap">

                                        <div className={styles.dateSec}>
                                            13th March’21
                                            </div>
                                        <div className={styles.timeSec}>
                                            10:20
                            </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-4">
                                    <div className="d-flex justify-content-md-end align-items-center">
                                        <div className={`d-flex ${styles.downloadSec}`}>
                                            <a target="_blank" href="#">
                                                <img src="/images/Download_Pdf.svg" alt="" />
                                                <span>Download</span>
                                            </a>
                                        </div>

                                        <a className={`${styles.viewBtn} btn`}>View</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.listSec}`}>
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-4 col-md-12 pr-0">
                                    <div className="d-flex align-items-center mb-2 mb-lg-0">
                                        <h5 className="m-0 text-capitalize">
                                            Test Report.pdf
                        </h5>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-8">
                                    <div style={{ justifyContent: "space-around" }} className="d-flex align-items-center mb-3 mb-md-0 mt-3 mt-md-0 flex-wrap">

                                        <div className={styles.dateSec}>
                                            13th March’21
                                            </div>
                                        <div className={styles.timeSec}>
                                            10:20
                            </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-4">
                                    <div className="d-flex justify-content-md-end align-items-center">
                                        <div className={`d-flex ${styles.downloadSec}`}>
                                            <a target="_blank" href="#">
                                                <img src="/images/Download_Pdf.svg" alt="" />
                                                <span>Download</span>
                                            </a>
                                        </div>

                                        <a className={`${styles.viewBtn} btn`}>View</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.listSec}`}>
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-4 col-md-12 pr-0">
                                    <div className="d-flex align-items-center mb-2 mb-lg-0">
                                        <h5 className="m-0 text-capitalize">
                                            BCP Activation Report.pdf
                                          </h5>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-8">
                                    <div style={{ justifyContent: "space-around" }} className="d-flex align-items-center mb-3 mb-md-0 mt-3 mt-md-0 flex-wrap">

                                        <div className={styles.dateSec}>
                                            13th March’21
                                            </div>
                                        <div className={styles.timeSec}>
                                            10:20
                            </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-4">
                                    <div className="d-flex justify-content-md-end align-items-center">
                                        <div className={`d-flex ${styles.downloadSec}`}>
                                            <a target="_blank" href="#">
                                                <img src="/images/Download_Pdf.svg" alt="" />
                                                <span>Download</span>
                                            </a>
                                        </div>

                                        <a className={`${styles.viewBtn} btn`}>View</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        {/* ---------- */}
                    </div>
                    <button className={styles.submitDetailBtn}>Submit</button>
                </div>
            </div>
        </>
    )
}
export default Review