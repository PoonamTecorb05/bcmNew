import React, { useState } from 'react'
import styles from "../../../../Assets/styles/impactAnalysis.module.scss"
import DesignMenu from '../../../../components/common/Header/designMenuWithSideNav'
import AddProcessModal from '../../../../components/common/modal/addProcessModal'
import { colourOptions, ImapactDependancy } from './AddProcess/dashboard';
import { default as ReactSelect } from "react-select";
import { components } from "react-select";

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
const AnalysisList = () => {
    const [isMatrix, setIsMatrix] = useState(false);
    // const [isId, setIsId] = useState("null")
    const ShowDiv = () => {
        setIsMatrix(true);
    }
    const HideDiv = () => {
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
            <div className={styles.contentWrapper} >
                <div className={`p-4 pb-3 ${styles.bcpActivated}`}>
                    <div className="container-fluid">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-6 pl-0">
                                <h3 className="m-0">Test Department</h3>
                            </div>
                            <div className="col-lg-6">
                                <div className="d-flex align-items-center justify-content-lg-end">
                                    <img src="/images/icon-filter.svg" alt="Thumb" class="img-fluid" />
                                    <a href="#" class={styles.addBtn} onClick={() => ShowDiv()}><img src="/images/plus.svg" alt="Settings" /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={`${styles.tableSec}`}>
                    <table className={`table table-bordered ${styles.analysisTable}`}>
                        <thead>
                            <tr>
                                <th >
                                    Process <br />Reference
                                    <span className={styles.dotIcon}></span>
                                </th>
                                <th >
                                    Business <br /> Process
                                    <span className={styles.dotIcon}></span>
                                </th>
                                <th >
                                    Process <br /> Description
                                    <span className={styles.dotIcon}></span>
                                </th>
                                <th className={styles.purpleTh}>
                                    Impact <br /> Assessment
                                </th>
                                <th >
                                    MAO
                                    <span className={styles.dotIcon}></span>
                                </th>
                                <th >
                                    RTO
                                    <span className={styles.dotIcon}></span>
                                </th>
                                <th >
                                    RTO <br />Justification
                                    <span className={styles.dotIcon}></span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    FIN - 1
                                </td>
                                <td>
                                    Emergency Procurement
                                </td>
                                <td>
                                    Involves processing procurement requests based on urgent business needs, all requests and approvals are performed via emails
                                </td>
                                <td className={styles.editBtnSec}>
                                    <AddProcessModal style={styles} />
                                </td>
                                <td className={styles.Maq}>
                                    12 Hours
                                </td>
                                <td>
                                    <input type="text" name="hrs" value="3 Hours" />
                                </td>
                                <td>
                                    Involves processing procurement requests based on urgent business needs, all requests and approvals are performed via emails
                                </td>

                            </tr>
                        </tbody>
                    </table>
                    <div className={`d-flex align-item-center flex-wrap justify-content-start ${styles.buttonSec}`}>
                        <button className={styles.importBtn}>Add Process</button>
                        <button className={styles.AddBtn}>Next Step</button>
                    </div>
                    {isMatrix === true &&
                        <>
                            <div className={styles.sideSection}>
                                <div className={styles.headerSec}>
                                    <div className="row mx-0">
                                        <div className="col-10">
                                            <h3>Emergency Procurement</h3>
                                            <p>Impact Assessment</p>
                                            <h6>Comments (3)</h6>
                                        </div>
                                        <div className="col-2 px-0">
                                            <button className={`float-right close mr-0 ${styles.close}`} onClick={() => HideDiv()}>
                                                <img src="./images/icon-close.svg" alt="" className="img-fluid" />
                                            </button>
                                        </div>
                                    </div>

                                </div>
                                <div className={`${styles.contentSec} `} id="">
                                    <div className={`impactAnalysis`}>
                                        <div className={`accordion ${styles.accordionSec}`} id="accordionExampleTwo">
                                            {/* -------Premises card one------------- */}
                                            {
                                                ImapactDependancy.map((data) => {
                                                    return (
                                                        <>
                                                            <div className={styles.card}>
                                                                <div className={styles.cardHeader} id={`heading${data.id}`}>
                                                                    <h2 className="mb-0">
                                                                        <button className={`btn btn-link ${styles.buttonSec}`} type="button" data-toggle="collapse"
                                                                            data-target={`#collapse${data.id}`} aria-expanded="true"
                                                                            aria-controls={`#collapse${data.id}`} >
                                                                            <figure>
                                                                                <img src={data.img} alt="Thumb" class="img-fluid" />
                                                                            </figure>
                                                                            <span>{data.title}</span>
                                                                            <div className={`btn  btn-rounded ${styles.fancyButton} fancyButton`}>
                                                                                <span class="iconify" data-icon="akar-icons:chevron-right" data-inline="false" style={{ color: "#b57bff" }}></span>
                                                                            </div>
                                                                        </button>
                                                                    </h2>
                                                                </div>
                                                                <div id={`#collapse${data.id}`} className="collapse show" aria-labelledby={`heading${data.id}`}
                                                                    data-parent="#accordionExampleTwo">
                                                                    <div className={styles.cardBody}>
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

                                </div>
                            </div>
                        </>
                    }
                </div>

            </div>
        </>
    )
}
export default AnalysisList