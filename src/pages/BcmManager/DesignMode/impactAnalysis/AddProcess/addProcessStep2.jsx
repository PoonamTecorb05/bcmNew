import React, { useState } from 'react'
import styles from "../../../../../Assets/styles/impactAnalysis.module.scss"
import DesignMenu from '../../../../../components/common/Header/designMenuWithSideNav'
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import { colourOptions, ImapactDependancy } from './dashboard';
import $ from "jquery"
const Option = (props) => {
    return (
        <div className={styles.optionDivSec}>
            <components.Option {...props}>
                <label>Loss of <span>less than</span> $40,000</label>
                <input
                    type="checkbox"
                    checked={props.isSelected}
                    onChange={() => null}
                    className={styles.styledCheckbox}
                    id="styled-checkbox-1"
                /> <label for="styled-checkbox-1"></label>
            </components.Option>
        </div>
    );
};
const AddProcessTwo = () => {
    const [isMatrix, setIsMatrix] = useState(false);
//     const toggleDropdown = () => {
//         document.getElementById("dropdownMenu").style.display = document.getElementById("dropdownMenu").style.display === "" ? "block" : "";
//     };

//     const toggleDropdownClose = () => {
//         document.getElementById("dropdownMenu").style.display = document.getElementById("dropdownMenu").style.display === "" ? "none" : "";
//     };
const ShowTable= ()=>{
    setIsMatrix(true);
}
const HideTable= () =>{
    setIsMatrix(false); 
}

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
            <div className={`${styles.contentWrapper} ${ isMatrix && styles.overlay}`}>
                <div className={`p-4 pb-3 ${styles.bcpActivated}`}>
                    <div className="container-fluid">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-6 pl-0">
                                <h3 className="m-0">Test Department</h3>
                            </div>
                            <div className="col-lg-6">
                                <div className="d-flex align-items-center justify-content-lg-end">
                                    <img src="/images/icon-filter.svg" alt="Thumb" class="img-fluid" />
                                    <a href="#" class={styles.addBtn}><img src="/images/plus.svg" alt="Settings" /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={`${styles.innerSec} p-4`}>
                    <div className={styles.addtwoSection}>
                        <button className={`float-right close mr-0 ${styles.close}`}>
                            <img src="./images/icon-close.svg" alt="" className="img-fluid" />
                        </button>
                        <div className={styles.headingSec}>
                            <h2>
                                Assess the impact
                                    </h2>
                            <h5>
                                In the event of a crisis, estimate the impact of <br />
                                <span>Emergency Procurement</span> being unavailable
                                    </h5>
                            <div className="row">
                                <div className="col-md-9">
                                    <p>
                                        Step 2 of 3
                                    </p>
                                </div>
                                <div className="col-md-3" >
                                    <div id="disabledropdown" className={`text-capitalize d-flex justify-content-md-end align-items-center ${styles.impactMaterix}`}
                                    >
                                        Impact Matrix
                                        {/* <img src="/images/icon-info.svg" alt="Thumb" class="img-fluid ml-2"   className="dropdown-toggle"/> */}
                                        <a  className="nav-link"   href="#" onClick={() => ShowTable()}>
                                            <img src="/images/icon-info.svg" alt="Thumb" class="img-fluid ml-2" />
                                        </a>
                                        {/* <div id="dropdownMenu" className="dropdown-menu dropdown-menu-lg dropdown-menu-right"> */}
                                    </div>
                                </div>
                            </div>
                             {/* -------------------Impact table----------------- */}
                             {isMatrix === true &&
                                            <>
                                            <div className={`${styles.matrixTableSec}`}>
                                                <div className={styles.panelSec}>
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <h6 class="fw-500">
                                                            Impact Matrix
                                                        </h6>
                                                        <div >
                                                            <img src="/images/icon-close.svg" alt="Thumb" class="img-fluid" onClick={() => HideTable()}/>
                                                        </div>
                                                    </div>

                                                    <p>
                                                        A guide used to identify different types of impact & categorise the
                                                    impact of a process being unavailable as either <span>Impactful</span> or <span>Non
                                                    Impactful</span>
                                                    </p>

                                                    {/* ----------- -table--------------- */}
                                                    <div className="table-responsive">
                                                        <table className={`${styles.impactMatrixTable} table m-0`}>
                                                            <thead>
                                                                <tr>
                                                                    <th className={styles.grayBg} width="40%">
                                                                        impact type
                                                            </th>
                                                                    <th className={styles.greenBg} width="30%">
                                                                        Non - Impact
                                                            </th>
                                                                    <th className={styles.redBg} width="30%">
                                                                        impact
                                                            </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="fw-10">
                                                                        Financial
                                                            </td>
                                                                    <td className={styles.greenBgLight}>
                                                                        Loss of less than $40,000
                                                            </td>
                                                                    <td className={styles.redBgLight}>
                                                                        Loss of more than $40,000
                                                            </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="fw-10">
                                                                        Reputation & Image
                                                            </td>
                                                                    <td className={styles.greenBgLight}>
                                                                        Negative media coverage by non influential entities
                                                            </td>
                                                                    <td className={styles.redBgLight}>
                                                                        Outage in critical services for more than 4 hours
                                                            </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="fw-10">
                                                                        Operational
                                                            </td>
                                                                    <td className={styles.greenBgLight}>
                                                                        Outage in critical services for less than 4 hours
                                                            </td>
                                                                    <td className={styles.redBgLight}>
                                                                        Outage in critical services for more than 4 hours
                                                            </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="fw-10">
                                                                        Health & Safety
                                                            </td>
                                                                    <td className={styles.greenBgLight}>
                                                                        Severe injury 5 or more individuals
                                                            </td>
                                                                    <td className={styles.redBgLight}>
                                                                        Death or fatality of one individual
                                                            </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="fw-10">
                                                                        Regulatory & Legal
                                                            </td>
                                                                    <td className={styles.greenBgLight}>
                                                                        Penalties less than $10,000
                                                            </td>
                                                                    <td className={styles.redBgLight}>
                                                                        Penalties more than $10,000
                                                            </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="fw-10">
                                                                        Strategic Growth
                                                            </td>
                                                                    <td className={styles.greenBgLight}>
                                                                        Decline of  less than 12% year on year growth
                                                            </td>
                                                                    <td className={styles.redBgLight}>
                                                                        Decline of  more than 12% year on year growth
                                                            </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                </div>

                                            {/* </div> */}

                                            {/* -------------------End Impact table----------------- */}
                                        </div>
                                        </>}
                        </div>
                        {/* -------------------Card List Sec----------------- */}
                        <div className={styles.actionCardList}>
                            <div className="row">
                            {
                            ImapactDependancy.map((data) => {
                                return (
                                    <>
                                <div className="col-lg-4" key={data.id}>
                                    <div className={styles.actionCard}>
                                        <div class={styles.actionCardHeader}>
                                            <h4>{data.title}</h4>
                                            <figure>
                                                <img src={data.img} alt="Thumb" class="img-fluid" />
                                            </figure>
                                        </div>
                                        <div className={`${styles.actionCardBody} impactAnalysis`}>
                                            <div className={styles.customeFormGroup}>
                                                <label>{data.firstQues}</label>
                                                <span
                                                    class="d-block"
                                                    data-toggle="popover"
                                                    data-trigger="focus"
                                                    data-content="Please selecet account(s)"
                                                >
                                                    <ReactSelect
                                                        options={colourOptions}
                                                        isMulti
                                                        closeMenuOnSelect={false}
                                                        hideSelectedOptions={false}
                                                        components={{
                                                            Option
                                                        }}
                                                        // onChange={this.handleChange}
                                                        allowSelectAll={true}
                                                        value=""
                                                        placeholder='Select an option'
                                                        styles={colourStyles}
                                                    />
                                                </span>
                                            </div>
                                            <div className={styles.customeFormGroup}>
                                                <label>{data.secondQues}</label>
                                                <span
                                                    class="d-block"
                                                    data-toggle="popover"
                                                    data-trigger="focus"
                                                    data-content="Please selecet account(s)"
                                                >
                                                    <ReactSelect
                                                        options={colourOptions}
                                                        isMulti
                                                        closeMenuOnSelect={false}
                                                        hideSelectedOptions={false}
                                                        components={{
                                                            Option
                                                        }}
                                                        // onChange={this.handleChange}
                                                        allowSelectAll={true}
                                                        value=""
                                                        placeholder='Select an option'
                                                        styles={colourStyles}
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </>
                                )
                              })
                            }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className={styles.stepSection}>
                                    <div className={styles.backStep}>
                                        <button className={styles.backBtn}> <img src="/images/leftarrow.png" alt="Thumb" class="img-fluid" /></button>
                                        <label className="mb-0 ml-2">Back</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className={styles.stepSection}>
                                    <div className={styles.nextStep}>
                                        <label className="mb-0 mr-2">Step 2</label>
                                        <button className={styles.nextBtn}> <img src="/images/rightarrow.png" alt="Thumb" class="img-fluid" /></button>
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
export default AddProcessTwo