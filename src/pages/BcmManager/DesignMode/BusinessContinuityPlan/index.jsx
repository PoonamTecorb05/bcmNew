import React from 'react'
import DesignMenu from '../../../../components/common/Header/designMenuWithSideNav'
import styles from "../../../../Assets/styles/businessContinuity.module.scss"
import Select from 'react-select';
const BusinessContinuityForm = () => {
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
            color: "#000000;",
            fontSize:"10px",
            zIndex:"1"
          };
        }
      };
    return (
        <div className={`${styles.FormSection} bcpForm`}>
            <form>
                <div className={`${styles.customeFormGroup} ${styles.time}`}>
                    <input name="time" placeholder="Time Frame" className={styles.actionTimeElement} />
                </div>
                <div className={styles.customeFormGroup}>
                    <input name="action" placeholder="Action to be taken" className={styles.actionTitleDiv}/>
                </div>
                <div className={styles.customeFormGroup}>
                    <textarea name="description" placeholder="Description of the action" className={styles.actionDescriptionDiv} />
                </div>
                <div className={`${styles.customeFormGroup} ${styles.ownerInput}`}>
                <img src="/images/icon-users.svg" alt="Thumb" className="img-fluid" />
                    {/* <input name="owner" placeholder="Owner of the action" className={styles.actionUserName} /> */}
                    <Select
                                        options={OptionList}
                                        styles={colourStyles}
                                         />
                </div>
                <button className={styles.saveBtn}>Save</button>
            </form>
        </div>
    )
}
const BusinessContinuity = () => {
  
    return (
        <>
            <DesignMenu />
            <div className={styles.contentWrapper} >
                <div className={`p-4 pb-3 ${styles.bcpActivated}`}>
                    <div className="container-fluid">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-6 pl-0">
                                <h3 className="m-0">Test Department</h3>
                            </div>
                            <div className="col-lg-6">
                                <div className="d-flex align-items-center justify-content-lg-end">
                                    <button className={styles.afterApproved} >
                                        <img src="/images/verified.png" alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={`${styles.innerSec} p-4`}>
                    <div className={styles.panelSection}>
                        <h2>Recover </h2>
                        <h6 style={{ marginBottom: "17px" }}>Steps to retrieve enablers incase of a crisis </h6>
                        <div className="row">
                            <div className={`col-xl-12 mb-4 ${styles.enablerRoeContainer} riskStratagyAccordion BusinessContiuniyAccordion`}>
                                <div className={`accordion ${styles.accordionSec}`} id="accordionExample">
                                    <div className={styles.card}>
                                        <div className={styles.cardHeader} id="headingOne">
                                            <h2 className="mb-0">
                                                <button className={`btn btn-link ${styles.buttonSec}`} type="button" data-toggle="collapse"
                                                    data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    <span className={styles.title}>HQ Building</span>
                                                    <span className={`${styles.staff} ${styles.badges} mr-1 ml-2 badges`}>Equipment</span>
                                                    <span className={`${styles.timebadges} ${styles.badges} mr-1 ml-2 badges`}>16 Hours</span>
                                                    <span className={`${styles.spfbadges} ${styles.badges} mr-1 ml-1 badges`}>SPF</span>
                                                    {/* <div className={`btn  btn-rounded ${styles.fancyButton} fancyButton`}>
                                                        <span class="iconify" data-icon="akar-icons:chevron-right" data-inline="false" style={{ color: "#b57bff" }}></span>
                                                    </div> */}
                                                    <div className={`${styles.rightSec} rightTxt`}>
                                                        <div className={styles.tickSec}>
                                                            <img src="/images/tick.png" />
                                                        </div>
                                                        <h6>Alternate Recovery BC Site</h6>
                                                    </div>
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                            data-parent="#accordionExample">
                                            <div className={styles.cardBody}>
                                                <div className={`row my-3 ${styles.startProcess}`}>
                                                    <div className="col-lg-5 offset-lg-1 text-center">
                                                        <figure>
                                                            <img src="/images/start-process.svg" alt="Thumb" className="img-fluid" />
                                                        </figure>
                                                    </div>
                                                    <div className="col-lg-6 text-center text-lg-left">
                                                        <h4 className="fw-500">
                                                            HQ Building enables the process
                                                    </h4>
                                                        <p className="text-muted">
                                                            Process 1, Process 2 & Process 3                                                 </p>
                                                        <button type="button" className={`btn ${styles.recoveryBtn}`}>
                                                            Add recovery steps
                                                    </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ----------second card--------------- */}
                                    <div className={styles.card}>
                                        <div className={styles.cardHeader} id="headingTwo">
                                            <h2 className="mb-0">
                                                <button className={`btn btn-link ${styles.buttonSec} collapsed`} type="button" data-toggle="collapse"
                                                    data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    <span className={styles.title}>Laptop</span>
                                                    <span className={`${styles.staff} ${styles.badges} mr-1 ml-2 badges`}>Equipment</span>
                                                    <span className={`${styles.timebadges} ${styles.badges} mr-1 ml-2 badges`}>16 Hours</span>
                                                    <span className={`${styles.spfbadges} ${styles.badges} mr-1 ml-1 badges`}>SPF</span>
                                                    {/* <div className={`btn  btn-rounded ${styles.fancyButton} fancyButton`}>
                                                        <span class="iconify" data-icon="akar-icons:chevron-right" data-inline="false" style={{ color: "#b57bff" }}></span>
                                                    </div> */}
                                                    <div className={`${styles.rightSec} rightTxt`}>
                                                        <div className={styles.tickSec}>
                                                            <img src="/images/tick.png" />
                                                        </div>
                                                        <h6>Secondary Desktops</h6>
                                                    </div>
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseTwo" className="collapse " aria-labelledby="headingTwo"
                                            data-parent="#accordionExample">
                                            <div className={styles.cardBody}>
                                                <div className={`${styles.processSection}`}>
                                                    <div className={styles.headingSec}>
                                                        <h5>Recovery Steps (5)</h5>
                                                        <p>Enables the Process : Process 1, Process 2 & Process</p>
                                                    </div>
                                                    <div className={styles.recoverySteps}>
                                                        <button className={styles.addBtn} >
                                                            <img src="./images/plus.png" alt="" className="img-fluid" />
                                                        </button>
                                                        <ul className={styles.recoveryStepsList}>
                                                            <li className={styles.liCounter}>
                                                                <span className={styles.listcounter}>1</span>
                                                                <div className={styles.dataSec}>
                                                                    <h6 className={`${styles.blueColor}`}>
                                                                        <span className={styles.actionTimeElement}>15 minutes</span>
                                                                        <span>
                                                                            <img className={styles.imgEdit} src="/images/icon-edit.svg" alt="Edit" style={{ width: "16px" }} /></span>
                                                                    </h6>
                                                                    <div className={styles.contentArea}>
                                                                        <p className={styles.actionTitleDiv}>Departmental Notifcation</p>
                                                                        <div className={styles.actionDescriptionDiv}>
                                                                            Once directed by the GRCC that there is a disruption, begin departmental notification procedures via call tree to inform staff to work from alternative recovery site.
                                                                        </div>
                                                                    </div>
                                                                    <p className={`${styles.textPurple} mt-3 mb-2`}>
                                                                        <img src="/images/icon-users.svg" alt="Thumb" className="img-fluid" style={{ width: "20px" }} />
                                                                        <span className={styles.actionUserName}>Operations Head</span>
                                                                    </p>
                                                                </div>
                                                            </li>
                                                            {/* -----second----- */}
                                                            <li className={styles.liCounter}>
                                                                <span className={styles.listcounter}>2</span>
                                                                <div className={styles.dataSec}>
                                                                    <h6 className={`${styles.blueColor}`}>
                                                                        <span className={styles.actionTimeElement}>15 minutes</span>
                                                                        <span>
                                                                            <img className={styles.imgEdit} src="/images/icon-edit.svg" alt="Edit" style={{ width: "16px" }} /></span>
                                                                    </h6>
                                                                    <div className={styles.contentArea}>
                                                                        <p className={styles.actionTitleDiv}>Departmental Notifcation</p>
                                                                        <div className={styles.actionDescriptionDiv}>
                                                                            Once directed by the GRCC that there is a disruption, begin departmental notification procedures via call tree to inform staff to work from alternative recovery site.
                                                                        </div>
                                                                    </div>
                                                                    <p className={`${styles.textPurple} mt-3 mb-2`}>
                                                                        <img src="/images/icon-users.svg" alt="Thumb" className="img-fluid" style={{ width: "20px" }} />
                                                                        <span className={styles.actionUserName}>Operations Head</span>
                                                                    </p>
                                                                </div>
                                                            </li>
                                                            <li className={styles.liCounter}>
                                                                <span className={styles.listcounter}>2</span>
                                                                <div className={styles.dataSec}>
                                                                    <h6 className={`${styles.blueColor}`}>
                                                                        <span className={styles.actionTimeElement}>15 minutes</span>
                                                                        <span>
                                                                            <img className={styles.imgEdit} src="/images/icon-edit.svg" alt="Edit" style={{ width: "16px" }} /></span>
                                                                    </h6>
                                                                    <div className={styles.contentArea}>
                                                                        <p className={styles.actionTitleDiv}>Departmental Notifcation</p>
                                                                        <div className={styles.actionDescriptionDiv}>
                                                                            Once directed by the GRCC that there is a disruption, begin departmental notification procedures via call tree to inform staff to work from alternative recovery site.
                                                                        </div>
                                                                    </div>
                                                                    <p className={`${styles.textPurple} mt-3 mb-2`}>
                                                                        <img src="/images/icon-users.svg" alt="Thumb" className="img-fluid" style={{ width: "20px" }} />
                                                                        <span className={styles.actionUserName}>Operations Head</span>
                                                                    </p>
                                                                </div>
                                                            </li>
                                                            <li className={styles.liCounter}>
                                                                <span className={styles.listcounter}>2</span>
                                                                <div className={styles.dataSec}>
                                                                    <h6 className={`${styles.blueColor}`}>
                                                                        <span className={styles.actionTimeElement}>15 minutes</span>
                                                                        <span>
                                                                            <img className={styles.imgEdit} src="/images/icon-edit.svg" alt="Edit" style={{ width: "16px" }} /></span>
                                                                    </h6>
                                                                    <div className={styles.contentArea}>
                                                                        <p className={styles.actionTitleDiv}>Departmental Notifcation</p>
                                                                        <div className={styles.actionDescriptionDiv}>
                                                                            Once directed by the GRCC that there is a disruption, begin departmental notification procedures via call tree to inform staff to work from alternative recovery site.
                                                                        </div>
                                                                    </div>
                                                                    <p className={`${styles.textPurple} mt-3 mb-2`}>
                                                                        <img src="/images/icon-users.svg" alt="Thumb" className="img-fluid" style={{ width: "20px" }} />
                                                                        <span className={styles.actionUserName}>Operations Head</span>
                                                                    </p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ----------second card--------------- */}
                                    <div className={styles.card}>
                                        <div className={styles.cardHeader} id="headingThree">
                                            <h2 className="mb-0">
                                                <button className={`btn btn-link ${styles.buttonSec} collapsed`} type="button" data-toggle="collapse"
                                                    data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    <span className={styles.title}>Dongle</span>
                                                    <span className={`${styles.staff} ${styles.badges} mr-1 ml-2 badges`}>Equipment</span>
                                                    <span className={`${styles.timebadges} ${styles.badges} mr-1 ml-2 badges`}>16 Hours</span>
                                                    <span className={`${styles.spfbadges} ${styles.badges} mr-1 ml-1 badges`}>SPF</span>
                                                    {/* <div className={`btn  btn-rounded ${styles.fancyButton} fancyButton`}>
                                                        <span class="iconify" data-icon="akar-icons:chevron-right" data-inline="false" style={{ color: "#b57bff" }}></span>
                                                    </div> */}
                                                    <div className={`${styles.rightSec} rightTxt`}>
                                                        <div className={styles.tickSec}>
                                                            <img src="/images/tick.png" />
                                                        </div>
                                                        <h6>Breakdown maintenance</h6>
                                                    </div>
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseThree" className="collapse " aria-labelledby="headingThree"
                                            data-parent="#accordionExample">
                                            <div className={styles.cardBody}>
                                                <div className={`${styles.processSection}`}>
                                                    <div className={styles.headingSec}>
                                                        <h5>Recovery Steps (5)</h5>
                                                        <p>Enables the Process : Process 1, Process 2 & Process</p>
                                                    </div>
                                                    <div className={styles.recoverySteps}>
                                                        <button className={styles.addBtn} >
                                                            <img src="./images/plus.png" alt="" className="img-fluid" />
                                                        </button>
                                                        <ul className={styles.recoveryStepsList}>
                                                            <li className={styles.liCounter}>
                                                                <span className={styles.listcounter}>1</span>
                                                                <div className={styles.dataSec}>
                                                                    <h6 className={`${styles.blueColor}`}>
                                                                        <span className={styles.actionTimeElement}>15 minutes</span>
                                                                        <span>
                                                                            <img className={styles.imgEdit} src="/images/icon-edit.svg" alt="Edit" style={{ width: "16px" }} /></span>
                                                                    </h6>
                                                                    <div className={styles.contentArea}>
                                                                        <p className={styles.actionTitleDiv}>Departmental Notifcation</p>
                                                                        <div className={styles.actionDescriptionDiv}>
                                                                            Once directed by the GRCC that there is a disruption, begin departmental notification procedures via call tree to inform staff to work from alternative recovery site.
                                                                        </div>
                                                                    </div>
                                                                    <p className={`${styles.textPurple} mt-3 mb-2`}>
                                                                        <img src="/images/icon-users.svg" alt="Thumb" className="img-fluid" style={{ width: "20px" }} />
                                                                        <span className={styles.actionUserName}>Operations Head</span>
                                                                    </p>
                                                                </div>
                                                            </li>
                                                            {/* -----second----- */}
                                                            <li className={styles.liCounter}>
                                                                <span className={styles.listcounter}>2</span>
                                                                <div className={styles.dataSec}>
                                                                    <h6 className={`${styles.blueColor}`}>
                                                                        <span className={styles.actionTimeElement}>15 minutes</span>
                                                                        <span>
                                                                            <img className={styles.imgEdit} src="/images/icon-edit.svg" alt="Edit" style={{ width: "16px" }} /></span>
                                                                    </h6>
                                                                    <div className={styles.contentArea}>
                                                                        <p className={styles.actionTitleDiv}>Departmental Notifcation</p>
                                                                        <div className={styles.actionDescriptionDiv}>
                                                                            Once directed by the GRCC that there is a disruption, begin departmental notification procedures via call tree to inform staff to work from alternative recovery site.
                                                                        </div>
                                                                    </div>
                                                                    <p className={`${styles.textPurple} mt-3 mb-2`}>
                                                                        <img src="/images/icon-users.svg" alt="Thumb" className="img-fluid" style={{ width: "20px" }} />
                                                                        <span className={styles.actionUserName}>Operations Head</span>
                                                                    </p>
                                                                </div>
                                                            </li>
                                                            <li className={styles.liCounter}>
                                                                <span className={styles.listcounter}>2</span>
                                                                <BusinessContinuityForm/>
                                                            </li>


                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className={styles.submitDetailBtn}>Submit</button>
                </div>

            </div>
        </>
    )
}
export default BusinessContinuity