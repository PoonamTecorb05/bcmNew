
import React from "react"
import styles from "../../Assets/styles/improve.module.scss"
import Select from 'react-select';
import ImproveMenu from "../../components/common/Header/improveMenuWithSideNav";
const ImproveReview = () => {
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
                            <h2>Keep Track</h2>
                        </div>
                        <div className="col-md-12 px-0">
                            <p>View & download past review notes for reference </p>
                        </div>
                        <div className={`col-md-12 px-0`}>
                            <div className="d-flex">
                                <div className={`overview timeSelect ${styles.dropDownSelection} ml-auto`}>
                                    <Select
                                        options={OptionList}
                                        placeholder='Select an option'
                                        styles={colourStyles}
                                    />
                                </div>
                                <div className={`overview  departmentSelect ${styles.dropDownSelection}`}>
                                    <Select
                                        options={OptionList}
                                        placeholder='Select an option'
                                        styles={colourStyles} />
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
                    </div>
                    {/* ----------------------bottom graph------------- */}

                </div>
            </div>
        </>
    )
}
export default ImproveReview