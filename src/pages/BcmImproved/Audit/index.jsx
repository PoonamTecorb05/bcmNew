import ImproveMenu from "../../../components/common/Header/improveMenuWithSideNav"
import React from "react"
import styles from "../../../Assets/styles/improve.module.scss"
import Select from 'react-select';
const Audit = () => {
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
                            <h2>Track Compliance </h2>
                        </div>
                        <div className="col-md-9 px-0">
                            <p>Track and audit your organization’s ISO22301 compliance</p>
                        </div>
                        <div className={`col-md-3 px-0`}>
                            <div className={styles.pending}>
                                <img src="/images/Time-Circle-pending.svg" alt="Images" />
                                <span>Pending</span>
                            </div>
                        </div>
                        <div className="mt-4 w-100">
                            <div className={`${styles.listSec}`}>
                                <div className="row d-flex align-items-center">
                                    <div className="col-md-6">
                                        <div className="row d-flex align-items-center">
                                            <div className="col-lg-7 col-md-12 pr-0">
                                                <div className="d-flex align-items-center mb-2 mb-lg-0">
                                                    <h5 className="m-0 text-capitalize">
                                                        BCM Policy
                                                     </h5>
                                                </div>
                                            </div>
                                            <div className="col-md-5 pl-0">
                                                <div className={`overview  departmentSelect ${styles.dropDownSelection}`}>
                                                    <Select
                                                        options={OptionList}
                                                        styles={colourStyles}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row d-flex align-items-center">
                                            <div className="col-lg-5 col-md-8 pl-0">
                                                <div style={{ justifyContent: "center" }} className="d-flex align-items-center mb-3 mb-md-0 mt-3 mt-md-0 flex-wrap">
                                                    <div className={styles.dateSec}>
                                                        Last reviewed : 13 Mar’21
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-7 col-md-4">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className={`d-flex ${styles.status} ${styles.compliant}`}>
                                                        <a target="_blank" href="#">
                                                            <img src="/images/Audit-Green-tik.png" alt="" />
                                                            <span>Compliant</span>
                                                        </a>
                                                    </div>

                                                    <a className={`${styles.viewBtn} btn`}>View</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ---------- */}
                            <div className={`${styles.listSec}`}>
                                <div className="row d-flex align-items-center">
                                    <div className="col-md-6">
                                        <div className="row d-flex align-items-center">
                                            <div className="col-lg-7 col-md-12 pr-0">
                                                <div className="d-flex align-items-center mb-2 mb-lg-0">
                                                    <h5 className="m-0 text-capitalize">
                                                        BCM Procedure
                                                     </h5>
                                                </div>
                                            </div>
                                            <div className="col-md-5 pl-0">
                                                <div className={`overview  departmentSelect ${styles.dropDownSelection}`}>
                                                    <Select
                                                        options={OptionList}
                                                        styles={colourStyles}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row d-flex align-items-center">
                                            <div className="col-lg-5 col-md-8 pl-0">
                                                <div style={{ justifyContent: "center" }} className="d-flex align-items-center mb-3 mb-md-0 mt-3 mt-md-0 flex-wrap">
                                                    <div className={styles.dateSec}>
                                                        Last reviewed : 13 Mar’21
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-7 col-md-4">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className={`d-flex ${styles.status} ${styles.compliant}`}>
                                                        <a target="_blank" href="#">
                                                            <img src="/images/Audit-Green-tik.png" alt="" />
                                                            <span>Compliant</span>
                                                        </a>
                                                    </div>

                                                    <a className={`${styles.viewBtn} btn`}>View</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* --------- */}
                            <div className={`${styles.listSec}`}>
                                <div className="row d-flex align-items-center">
                                    <div className="col-md-6">
                                        <div className="row d-flex align-items-center">
                                            <div className="col-lg-7 col-md-12 pr-0">
                                                <div className="d-flex align-items-center mb-2 mb-lg-0">
                                                    <h5 className="m-0 text-capitalize">
                                                        Impact Analysis
                                                     </h5>
                                                </div>
                                            </div>
                                            <div className="col-md-5 pl-0">
                                                <div className={`overview  departmentSelect ${styles.dropDownSelection}`}>
                                                    <Select
                                                        options={OptionList}
                                                        styles={colourStyles}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row d-flex align-items-center">
                                            <div className="col-lg-5 col-md-8 pl-0">
                                                <div style={{ justifyContent: "center" }} className="d-flex align-items-center mb-3 mb-md-0 mt-3 mt-md-0 flex-wrap">
                                                    <div className={styles.dateSec}>
                                                        Last reviewed : 13 Mar’21
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-7 col-md-4">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className={`d-flex ${styles.status} ${styles.nonCompliant}`}>
                                                        <a target="_blank" href="#">
                                                            <img src="/images/Audit-Close-Square.png" alt="" />
                                                            <span>Not Compliant</span>
                                                        </a>
                                                    </div>

                                                    <a className={`${styles.viewBtn} btn`}>View</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* -------------------------- */}
                            <div className={`${styles.listSec}`}>
                                <div className="row d-flex align-items-center">
                                    <div className="col-md-6">
                                        <div className="row d-flex align-items-center">
                                            <div className="col-lg-7 col-md-12 pr-0">
                                                <div className="d-flex align-items-center mb-2 mb-lg-0">
                                                    <h5 className="m-0 text-capitalize">
                                                        Risk Assessment
                                                     </h5>
                                                </div>
                                            </div>
                                            <div className="col-md-5 pl-0">
                                                <div className={`overview  departmentSelect ${styles.dropDownSelection}`}>
                                                    <Select
                                                        options={OptionList}
                                                        styles={colourStyles}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row d-flex align-items-center">
                                            <div className="col-lg-5 col-md-8 pl-0">
                                                <div style={{ justifyContent: "center" }} className="d-flex align-items-center mb-3 mb-md-0 mt-3 mt-md-0 flex-wrap">
                                                    <div className={styles.dateSec}>
                                                        Last reviewed : 13 Mar’21
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-7 col-md-4">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className={`d-flex ${styles.status} ${styles.nonCompliant}`}>
                                                        <a target="_blank" href="#">
                                                            <img src="/images/Audit-Close-Square.png" alt="" />
                                                            <span>Not Compliant</span>
                                                        </a>
                                                    </div>

                                                    <a className={`${styles.viewBtn} btn`}>View</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ------------ */}
                            <div className={`${styles.listSec}`}>
                                <div className="row d-flex align-items-center">
                                    <div className="col-md-6">
                                        <div className="row d-flex align-items-center">
                                            <div className="col-lg-7 col-md-12 pr-0">
                                                <div className="d-flex align-items-center mb-2 mb-lg-0">
                                                    <h5 className="m-0 text-capitalize">
                                                        Recovery strategies
                                                     </h5>
                                                </div>
                                            </div>
                                            <div className="col-md-5 pl-0">
                                                <div className={`overview  departmentSelect ${styles.dropDownSelection}`}>
                                                    <Select
                                                        options={OptionList}
                                                        styles={colourStyles}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row d-flex align-items-center">
                                            <div className="col-lg-5 col-md-8 pl-0">
                                                <div style={{ justifyContent: "center" }} className="d-flex align-items-center mb-3 mb-md-0 mt-3 mt-md-0 flex-wrap">
                                                    <div className={styles.dateSec}>
                                                        Last reviewed : 13 Mar’21
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-7 col-md-4">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className={`d-flex ${styles.status} ${styles.compliant}`}>
                                                        <a target="_blank" href="#">
                                                            <img src="/images/Audit-Green-tik.png" alt="" />
                                                            <span>Compliant</span>
                                                        </a>
                                                    </div>

                                                    <a className={`${styles.viewBtn} btn`}>View</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ----------------- */}
                            <div className={`${styles.listSec}`}>
                                <div className="row d-flex align-items-center">
                                    <div className="col-md-6">
                                        <div className="row d-flex align-items-center">
                                            <div className="col-lg-7 col-md-12 pr-0">
                                                <div className="d-flex align-items-center mb-2 mb-lg-0">
                                                    <h5 className="m-0 text-capitalize">
                                                        Business Continuity Plan
                                                     </h5>
                                                </div>
                                            </div>
                                            <div className="col-md-5 pl-0">
                                                <div className={`overview  departmentSelect ${styles.dropDownSelection}`}>
                                                    <Select
                                                        options={OptionList}
                                                        styles={colourStyles}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row d-flex align-items-center">
                                            <div className="col-lg-5 col-md-8 pl-0">
                                                <div style={{ justifyContent: "center" }} className="d-flex align-items-center mb-3 mb-md-0 mt-3 mt-md-0 flex-wrap">
                                                    <div className={styles.dateSec}>
                                                        Last reviewed : 13 Mar’21
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-7 col-md-4">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className={`d-flex ${styles.status} ${styles.compliant}`}>
                                                        <a target="_blank" href="#">
                                                            <img src="/images/Audit-Green-tik.png" alt="" />
                                                            <span>Compliant</span>
                                                        </a>
                                                    </div>

                                                    <a className={`${styles.viewBtn} btn`}>View</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ----------------------- */}
                            <div className={`${styles.listSec}`}>
                                <div className="row d-flex align-items-center">
                                    <div className="col-md-6">
                                        <div className="row d-flex align-items-center">
                                            <div className="col-lg-7 col-md-12 pr-0">
                                                <div className="d-flex align-items-center mb-2 mb-lg-0">
                                                    <h5 className="m-0 text-capitalize">
                                                        Reviews
                                                     </h5>
                                                </div>
                                            </div>
                                            <div className="col-md-5 pl-0">
                                                <div className={`overview  departmentSelect ${styles.dropDownSelection}`}>
                                                    <Select
                                                        options={OptionList}
                                                        styles={colourStyles}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row d-flex align-items-center">
                                            <div className="col-lg-5 col-md-8 pl-0">
                                                <div style={{ justifyContent: "center" }} className="d-flex align-items-center mb-3 mb-md-0 mt-3 mt-md-0 flex-wrap">
                                                    <div className={styles.dateSec}>
                                                        Last reviewed : 13 Mar’21
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-7 col-md-4">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className={`d-flex ${styles.status} ${styles.compliant}`}>
                                                        <a target="_blank" href="#">
                                                            <img src="/images/Audit-Green-tik.png" alt="" />
                                                            <span>Compliant</span>
                                                        </a>
                                                    </div>

                                                    <a className={`${styles.viewBtn} btn`}>View</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ----------------------- */}

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Audit