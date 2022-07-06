import React, { useState } from 'react'
import DesignMenu from '../../../../components/common/Header/designMenuWithSideNav'
import styles from "../../../../Assets/styles/riskAssesment.module.scss"
import Select from 'react-select';
const RiskAssesment = () => {
    const [isShow ,setIsShow] =useState(false)
    const [isShowTwo ,setIsShowTwo] =useState(false)
 const ShowSec=(event)=>{
    event.preventDefault();
    setIsShow(!isShow)
    setIsShowTwo(false)
 }
 const ShowSecTwo=(event)=>{
    event.preventDefault();
    setIsShowTwo(!isShowTwo)
    setIsShow(false)
 }
    var OptionList = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two', clearableValue: false }
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
                        <h2>Take Action</h2>
                        <h6>Choose to treat ‘Single point of failures’ identified for critical processes</h6>
                        <div className={`row ${styles.actionPanelSec} mt-5`}>
                            {/* ----------critical------------- */}
                            <div className="col-lg-6 col-md-6 col-xl-4">
                                <div className={styles.panelBox}>
                                    <div className={styles.panelHead}>
                                        <div className={`row ${styles.headingSec}`}>
                                            <div className="col-8">
                                                <h6>Tendering & Awarding</h6>
                                            </div>
                                            <div className="col-4 text-right">
                                                <p>FIN-1T</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.panelBody}>
                                    <h4 className={`${styles.subHeading} ${styles.critical}`} >
                                        <span className={`${styles.badges}`}>Critical</span>
                                        <span className={styles.heading}>Finance Manager</span>
                                    </h4>

                                    {isShow === true && <> 
                                    {/* <!-- Collapsed content --> */}
                                    <div className={`  ${styles.collapseBody}`} id="">
                                        <div className="">
                                            <div className="row">
                                                <div className={`col-sm-6 ${styles.dateSec}`}>
                                                    <label className="text-capitalize mb-1">
                                                        Treatment date
                                                    </label>
                                                    <input className="form-control datepicker treatment_date" />
                                                </div>
                                                <div className={`col-sm-6 ${styles.ownerSec}`}>
                                                    <label className="text-capitalize mb-1">
                                                        Treatment owner
                                                    </label>
                                                    <div className="treatmentOwner">
                                                     <Select
                                                options={OptionList}
                                                isMulti={true}
                                                styles={colourStyles}
                                                // onChange={(e) => { handleBoLiaList(e) }}
                                            />
                                               </div>
                                                </div>
                                            </div>
                                            <div className="treatment__plan_p">
                                                <label className="text-capitalize mb-1">
                                                    Treatment plan
                                                </label>
                                                <textarea className="form-control treatment_plan" style={{height: "100px"}}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    </>}
                                        <div className="row mt-5">
                                            <div className="col-sm-6">
                                                <div className="d-flex align-items-center">
                                                    <figure className="mb-0 mr-2">
                                                        <img src="/images/icon-recommended.svg" alt="Icon" className="icon-24" />
                                                    </figure>
                                                    <p className={`m-0 ${styles.recomandedText}`}>
                                                        Recommended
                                                        <br />
                                                        <span>Based on Criticality</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className={styles.placeRight}>
                                                    <div className="form-group d-flex align-items-center m-0 mt-1 treat_risk_parrent">
                                                        <label className="mb-0 mr-2 content">Treat Risk</label>
                                                        <div className="custom-control custom-switch" onClick={(e) => ShowSec(e)}>
                                                            <input type="checkbox" checked={isShow} className="custom-control-input treat_risk" id="customSwitch1" />
                                                            <label className="custom-control-label" for="customSwitch1"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                </div>
                            </div>
                            {/* ---------Moderate-------- */}
                            <div className="col-lg-6 col-md-6 col-xl-4">
                                <div className={styles.panelBox}>
                                    <div className={styles.panelHead}>
                                        <div className={`row ${styles.headingSec}`}>
                                            <div className="col-8">
                                                <h6>Tendering & Awarding</h6>
                                            </div>
                                            <div className="col-4 text-right">
                                                <p>FIN-2T</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.panelBody}>
                                    <h4 className={`${styles.subHeading} ${styles.moderate}`}  >
                                        <span className={`${styles.badges}`}>Moderate</span>
                                        <span className={styles.heading}>Finance Manager</span>
                                    </h4>
                                    {/* <!-- Collapsed content --> */}
                                    {isShowTwo === true && <> 
                                    <div className={`  ${styles.collapseBody}`} id="">
                                        <div className="">
                                            <div className="row">
                                                <div className={`col-sm-6 ${styles.dateSec}`}>
                                                    <label className="text-capitalize mb-1">
                                                        Treatment date
                                                    </label>
                                                    <input className="form-control datepicker treatment_date" />
                                                </div>
                                                <div className={`col-sm-6 ${styles.ownerSec}`}>
                                                    <label className="text-capitalize mb-1">
                                                        Treatment owner
                                                    </label>
                                                    <div className="treatmentOwner">
                                                     <Select
                                                options={OptionList}
                                                isMulti={true}
                                                styles={colourStyles}
                                                // onChange={(e) => { handleBoLiaList(e) }}
                                            />
                                               </div>
                                                </div>
                                            </div>
                                            <div className="treatment__plan_p">
                                                <label className="text-capitalize mb-1">
                                                    Treatment plan
                                                </label>
                                                <textarea className="form-control treatment_plan" style={{height: "100px"}}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    </>}

                                        <div className="row mt-5">
                                            <div className="col-sm-6">
                                                <div className="d-flex align-items-center">
                                                    <figure className="mb-0 mr-2">
                                                        <img src="/images/icon-recommended.svg" alt="Icon" className="icon-24" />
                                                    </figure>
                                                    <p className={`m-0 ${styles.recomandedText}`}>
                                                        Recommended
                                                        <br />
                                                        <span>Based on Criticality</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className={styles.placeRight}>
                                                    <div className="form-group d-flex align-items-center m-0 mt-1 treat_risk_parrent">
                                                        <label className="mb-0 mr-2 content">Treat Risk</label>
                                                        <div className="custom-control custom-switch" onClick={(e) => ShowSecTwo(e)}>
                                                            <input type="checkbox"  checked={isShowTwo} className="custom-control-input treat_risk" id="customSwitch1" />
                                                            <label className="custom-control-label" for="customSwitch1"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RiskAssesment