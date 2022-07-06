import ImproveMenu from "../../../components/common/Header/improveMenuWithSideNav"
import React, { useState } from "react"
import styles from "../../../Assets/styles/improve.module.scss"
import { default as ReactSelect } from "react-select";
import Select,{ components } from "react-select";
import { colourOptions } from "../../BcmManager/DesignMode/impactAnalysis/AddProcess/dashboard";
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
const Testing = () => {
    const [isShow, setIsShow] = useState(false);
    var OptionList = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two'}
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
                            <h2>Run a Pilot</h2>
                        </div>
                        <div className="col-md-9 px-0">
                            <p>Set the enablers unavailable and test recovery steps</p>
                        </div>
                        <div className={`col-md-3 px-0`}>
                            <div className={styles.complete}>
                                <img src="/images/Complete_upload.svg" />
                                <span>Complete</span>
                            </div>
                        </div>
                        <div className={`${styles.formSec} col-md-10 px-0`}>
                            <form>
                                <div className="row impactAnalysis">
                                    <div className="col-lg-5">
                                        <div className={styles.customeFormGroup}>
                                            <label >
                                            Choose the enabler that is unavailable
                                                </label>
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
                                            <label>
                                            How long is it unavailable for?
                                                </label>
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
                                    <div className="col-lg-7">
                                        <div className={styles.customeFormGroup}>
                                            <label>
                                            Describe the scenario
                                            </label>
                                            <textarea name="description" placeholder="Eg : Involves processing procurement requests based on urgent business needs, all requests and approvals are performed via emails"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className={`d-flex align-item-center flex-wrap justify-content-start ${styles.buttonSec}`}>
                                <button className={styles.importBtn}>View Recovery Timeline</button>
                                <button className={styles.AddBtn}  onMouseEnter={() => setIsShow(true)}  onMouseLeave={() => setIsShow(false)}>Pilot in Crisis Mode      
                                 {isShow === true && <>  <span>*Testing currently in progress</span></>}</button>
                          
                            </div>
                        </div>

                    </div>
                    {/* ----------------------bottom graph------------- */}
                    <div className={`${styles.panelSec}`}>
                        <div className={styles.headeSec}>
                            <div className="row align-items-center">
                                <div className="col-sm-10">
                                    <h3 className="m-0">
                                    Pilot <span>Recovery Timeline</span>
                            </h3>
                                </div>
                                <div className="col-sm-2">
                                    <div className="no_border">
                                        {/* <select class="global_select2">
                                            <option value="AL">Alabama</option>
                                            <option value="WY">Wyoming</option>
                                        </select> */}
                                                      <Select
                                                options={OptionList}
                                                styles={colourStyles}
                                                // name="form-field-name"
                                                // value="one"
                                                // isMulti={true}
                                                // onChange={(e) => { handleBoLiaList(e) }}
                                            />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-0 pt-4">
                            <div className={`timeline_wrap recovery_timeline ${styles.recoveryTimeline}`}>
                                <div className={`timeline_caption ${styles.timelineCaption}`}>
                                    <span>
                                        Crisis
                            </span>
                                </div>
                                <div id="timeline">
                                    <div className={`jqTimepsaceContainer ${styles.jqTimepsaceContainer}`}>
                                        <div className="jqTimespaceErrors">
                                        </div>
                                        <div className={`jqTimespaceDataContainer jqTimespaceAnimated ${styles.jqTimespaceDataContainer}`} style={{ maxWidth: "100%", maxHeight: "500px" }}>
                                            <div className="jqTimespaceTitleClamp" style={{ top: "0px" }}></div>
                                            {/* <div className="jqTimespaceLine" title="Drag" style={{ display: "none" }}>
                                            </div> */}
                                            <aside className={`jqTimespaceAnimated ${styles.jqTimespaceAnimated} `}style={{ width: "100%", margin: " 0px", minWidth:"1024px" }}>
                                                <header title="Drag">
                                                    <div>
                                                    </div>
                                                    <div>
                                                        <time className={`critical ${styles.critical}`}>6 hrs</time>
                                                        <time  className={`critical ${styles.critical}`}>12 hrs</time>
                                                        <time  className={`critical ${styles.critical}`}>18 hrs</time>
                                                        <time className={`critical ${styles.critical}`}>24 hrs</time>
                                                        <time  className={`critical ${styles.critical}`}>30 hrs</time>
                                                        <time  className={`critical ${styles.critical}`}>36 hrs</time>
                                                        <time  className={`critical ${styles.critical}`}>42 hrs</time>
                                                        <time  className={`critical ${styles.critical}`}>48 hrs</time>
                                                        <time  className={`moderate ${styles.moderate}`}>54 hrs</time>
                                                        <time  className={`moderate ${styles.moderate}`}>60 hrs</time>
                                                        <time  className={`moderate ${styles.moderate}`}>66 hrs</time>
                                                        <time  className={`moderate ${styles.moderate}`}>72 hrs</time>
                                                        <time  className={`low ${styles.low}`}>78 hrs</time>
                                                        <time  className={`low ${styles.low}`}>84 hrs</time>
                                                        <time  className={`low ${styles.low}`}>90 hrs</time>
                                                        <time  className={`low ${styles.low}`}>96 Hours +</time>
                                                    </div>
                                                </header>
                                                <section title="Drag" className="jqTimespaceAnimated" style={{ top: "0px" }}>

                                                    <div className={`jqTimespaceColumn critical ${styles.jqTimespaceColumn} ${styles.critical}`}></div>
                                                    <div className={`jqTimespaceColumn critical ${styles.jqTimespaceColumn} ${styles.critical}`}></div>
                                                    <div className={`jqTimespaceColumn critical ${styles.jqTimespaceColumn} ${styles.critical}`}>
                                                        <div className="jqTimespaceEvent" style={{ left: "-51px", width: " 95px" }}>
                                                            <p title="18 – 24" className="jqTimespaceEventSelected critical">
                                                                <span className="jqTimespaceAnimated">
                                                                    <span className="font-12">test12</span>
                                                                    <br />
                                                                    <b>test12</b>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div className="jqTimespaceEventBorder" style={{ left: "224px" }}></div>
                                                    </div>
                                                    <div className={`jqTimespaceColumn critical ${styles.jqTimespaceColumn} ${styles.critical}`}></div>
                                                    <div className={`jqTimespaceColumn critical ${styles.jqTimespaceColumn} ${styles.critical}`}></div>
                                                    <div className={`jqTimespaceColumn critical ${styles.jqTimespaceColumn} ${styles.critical}`}>
                                                    <div className="jqTimespaceEvent" style={{ left: "-137px", width: " 181px" ,top:"83px" }}>
                                                            <p title="18 – 24" className="jqTimespaceEventSelected critical">
                                                                <span className="jqTimespaceAnimated">
                                                                    <span className="font-12">test12</span>
                                                                    <br />
                                                                    <b>Contract Management</b>
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={`jqTimespaceColumn critical ${styles.jqTimespaceColumn} ${styles.critical}`}></div>
                                                    <div className={`jqTimespaceColumn critical ${styles.jqTimespaceColumn} ${styles.critical}`}></div>
                                                    <div className={`jqTimespaceColumn moderate ${styles.jqTimespaceColumn} ${styles.moderate}`}></div>
                                                    <div className={`jqTimespaceColumn moderate ${styles.jqTimespaceColumn} ${styles.moderate}`}></div>
                                                    <div className={`jqTimespaceColumn moderate ${styles.jqTimespaceColumn} ${styles.moderate}`}></div>
                                                    <div className={`jqTimespaceColumn moderate ${styles.jqTimespaceColumn} ${styles.moderate}`}></div>
                                                    <div className={`jqTimespaceColumn low ${styles.jqTimespaceColumn} ${styles.low}`}></div>
                                                    <div className={`jqTimespaceColumn low ${styles.jqTimespaceColumn} ${styles.low}`}></div>
                                                    <div className={`jqTimespaceColumn low ${styles.jqTimespaceColumn} ${styles.low}`}></div>
                                                    <div className={`jqTimespaceColumn low ${styles.jqTimespaceColumn} ${styles.low}`}></div>
                                                </section>
                                            </aside>
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
export default Testing