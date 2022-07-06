import React from 'react'
import DesignMenu from '../../../../../components/common/Header/designMenuWithSideNav'
import styles from "../../../../../Assets/styles/enabler.module.scss"
import { colourOptions } from '../../impactAnalysis/AddProcess/dashboard';
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import HeadingSection from '../HeadignSection';
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
const StepOne = () => {
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
                <HeadingSection styles={styles} />
                <div className={`${styles.innerSec} p-4`}>
                    <div className={styles.addSection}>
                        <button className={`float-right close mr-0 ${styles.close}`}>
                            <img src="./images/icon-close.svg" alt="" className="img-fluid" />
                        </button>
                        <div className={styles.headingSec}>
                            <h2>
                                Add Enabler
                                    </h2>
                            <p>
                                Step 1 of 2
                                    </p>

                        </div>
                        <div className={styles.formSec}>
                            <form>
                                <div className="row impactAnalysis">
                                    <div className="col-lg-5">
                                        <div className={styles.customeFormGroup}>
                                            <label >
                                                What type of enabler is it?
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
                                                Choose enabler
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
                                                Is this resource a ‘<span>Single Point of Failure</span>’?
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
                                </div>
                            </form>
                            <div className={styles.stepSection}>
                                <div className={styles.nextStep}>
                                    <label className="mb-0 mr-2">Step 2</label>
                                    <button className={styles.nextBtn}> <img src="/images/icon-next-filled.svg" alt="Thumb" class="img-fluid" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default StepOne