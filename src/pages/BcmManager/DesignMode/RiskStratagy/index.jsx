import React from 'react'
import DesignMenu from '../../../../components/common/Header/designMenuWithSideNav'
import styles from "../../../../Assets/styles/riskAssesment.module.scss"
import Select from 'react-select';
const RiskStrategy = () => {
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
                        <h2>Identify a Plan B </h2>
                        <h6 style={{ marginBottom: "24px" }}>Choose best-fit strategies to achieve your recovery goals</h6>
                        <div className={`${styles.tabSection} riskStratagyTab`}>
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Equipment</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Premises</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Software Application</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tabs-4" role="tab">Staff</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tabs-5" role="tab">Supplier</a>
                                </li>
                            </ul>
                            {/* <!-- Tab panes --> */}
                            <div className="tab-content">
                                <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                    <div className="row">
                                        <div className={`col-xl-5 mb-4 ${styles.enablerRoeContainer} riskStratagyAccordion`}>
                                            <div className={`accordion ${styles.accordionSec}`} id="accordionExample">
                                                <div className={styles.card}>
                                                    <div className={styles.cardHeader} id="headingOne">
                                                        <h2 className="mb-0">
                                                            <button className={`btn btn-link ${styles.buttonSec}`} type="button" data-toggle="collapse"
                                                                data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            <span className={styles.title}>Laptop</span>
                                                                <span className={`${styles.timebadges} ${styles.badges} mr-1 ml-2 badges`}>16 Hours</span>
                                                                <span className={`${styles.spfbadges} ${styles.badges} mr-1 ml-1 badges`}>SPF</span>
                                                                <div className={`btn  btn-rounded ${styles.fancyButton} fancyButton`}>
                                                                    <span class="iconify" data-icon="akar-icons:chevron-right" data-inline="false" style={{ color: "#b57bff" }}></span>
                                                                </div>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                                        data-parent="#accordionExample">
                                                        <div className={styles.cardBody}>
                                                            <div className="row">
                                                                <div className={`col-sm-6 ${styles.dateSec}`}>
                                                                    <label className="text-capitalize mb-1">
                                                                        Implementation date
                                                                         </label>
                                                                    <input className="form-control datepicker treatment_date" />
                                                                </div>
                                                                <div className={`col-sm-6 ${styles.ownerSec}`}>
                                                                    <label className="text-capitalize mb-1">
                                                                        Implementation owner
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
                                                                    Implementation plan
                                                                 </label>
                                                                <textarea className="form-control treatment_plan" style={{ height: "100px" }}></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.card}>
                                                    <div className={styles.cardHeader}  id="headingTwo">
                                                        <h2 className="mb-0">
                                                            <button className={`btn btn-link ${styles.buttonSec} collapsed`} type="button" data-toggle="collapse"
                                                                data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                <span className={styles.title}>Computer</span> 
                                                                <span className={`${styles.timebadges} ${styles.badges} mr-1 ml-2 badges`}>16 Hours</span>
                                                                  <div className={`btn  btn-rounded ${styles.fancyButton} fancyButton`}>
                                                                    <span class="iconify" data-icon="akar-icons:chevron-right" data-inline="false" style={{ color: "#b57bff" }}></span>
                                                                </div>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                                        data-parent="#accordionExample">
                                                        <div className={styles.cardBody}>
                                                            <div className="row">
                                                                <div className={`col-sm-6 ${styles.dateSec}`}>
                                                                    <label className="text-capitalize mb-1">
                                                                        Implementation date
                                                                   </label>
                                                                    <input className="form-control datepicker treatment_date" />
                                                                </div>
                                                                <div className={`col-sm-6 ${styles.ownerSec}`}>
                                                                    <label className="text-capitalize mb-1">
                                                                        Implementation owner
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
                                                                    Implementation plan
                                                                   </label>
                                                                <textarea className="form-control treatment_plan" style={{ height: "100px" }}></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.card}>
                                                    <div className={styles.cardHeader}  id="headingThree">
                                                        <h2 className="mb-0">
                                                            <button className={`btn btn-link ${styles.buttonSec} collapsed`} type="button" data-toggle="collapse"
                                                                data-target="#collapseThree" aria-expanded="false"
                                                                aria-controls="collapseThree">
                                                               <span className={styles.title}> Test</span>
                                                                <span className={`${styles.timebadges} ${styles.badges} mr-1 ml-2 badges`}>16 Hours</span>
                                                                 <div className={`btn  btn-rounded ${styles.fancyButton} fancyButton`}>
                                                                    <span class="iconify" data-icon="akar-icons:chevron-right" data-inline="false" style={{ color: "#b57bff" }}></span>
                                                                </div>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                                        data-parent="#accordionExample">
                                                        <div className={styles.cardBody}>
                                                            <div className="row">
                                                                <div className={`col-sm-6 ${styles.dateSec}`}>
                                                                    <label className="text-capitalize mb-1">
                                                                        Implementation date
                                                                      </label>
                                                                    <input className="form-control datepicker treatment_date" />
                                                                </div>
                                                                <div className={`col-sm-6 ${styles.ownerSec}`}>
                                                                    <label className="text-capitalize mb-1">
                                                                        Implementation owner
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
                                                                    Implementation plan
                                                                </label>
                                                                <textarea className="form-control treatment_plan" style={{ height: "100px" }}></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.card}>
                                                    <div className={styles.cardHeader} id="headingFour">
                                                        <h2 className="mb-0">
                                                            <button className={`btn btn-link ${styles.buttonSec} collapsed`} type="button" data-toggle="collapse"
                                                                data-target="#collapseFour" aria-expanded="false"
                                                                aria-controls="collapseFour">
                                                                   <span className={styles.title}>Test 2</span>
                                                                <span className={`${styles.timebadges} ${styles.badges} mr-1 ml-2 badges`}>16 Hours</span>
                                                                 <div className={`btn  btn-rounded ${styles.fancyButton} fancyButton`}>
                                                                    <span class="iconify" data-icon="akar-icons:chevron-right" data-inline="false" style={{ color: "#b57bff" }}></span>
                                                                </div>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour"
                                                        data-parent="#accordionExample">
                                                        <div className={styles.cardBody}>
                                                            <div className="row">
                                                                <div className={`col-sm-6 ${styles.dateSec}`}>
                                                                    <label className="text-capitalize mb-1">
                                                                        Implementation date
                                                                      </label>
                                                                    <input className="form-control datepicker treatment_date" />
                                                                </div>
                                                                <div className={`col-sm-6 ${styles.ownerSec}`}>
                                                                    <label className="text-capitalize mb-1">
                                                                        Implementation owner
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
                                                                    Implementation plan
                                                                 </label>
                                                                <textarea className="form-control treatment_plan" style={{ height: "100px" }}></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className={`col-xl-7`}>
                                            <div className={styles.chartSec}>
                                                <div className={styles.chartHeading}>
                                                    <h5>
                                                        Recovery Strategies for 'Test 2'
                                                        
                                                    </h5>
                                                    <h6>Cost / Time Analysis</h6>
                                                </div>
                                                <div className={styles.tableWrap}>
                                                <div className="rsg_table_wrap">
                                                <button className={styles.addBtn} >
                <img src="./images/plus.png" alt="" className="img-fluid" />
            </button>
            <span className={`${styles.ctbadges} ${styles.cost}`}>
                Cost
            </span>
            <span className={`${styles.ctbadges} ${styles.time}`}>
                Time
            </span>
            <div className={styles.mainDiv}>
               <div className={styles.divRow}>     
                 <div className={`${styles.divColBox} ${styles.divLightBlueLeft}`}>
                        <div className="table_layer_3 table_layer">
            <div className="table_label_y"> $$$ </div>
        </div>
        <div id="div1" className="dropable_div">
                                </div>
                                </div>
                                <div className={`${styles.divColBox}`}>
                                <div id="div2" className="dropable_div">
                                </div>
                            </div>
                       <div className={`${styles.divColBox} ${styles.divColBoxFirst} `}>
                            <div id="div3" className="dropable_div">
                                </div>

                </div>
                           {/* ------------Second Row------------------ */}
                   <div className={`${styles.divColBox}  ${styles.divMediumBlueLeft}`} style={{backgroundColor: "#EBEFFF"}}>
                     <div className="table_layer_2 table_layer">
            <div className="table_label_y"> $$ </div>
        </div>
          <div id="div4" className="dropable_div">
                                </div>

                     </div>
                <div className={styles.divColBox}  style={{backgroundColor: "#F5F7FF"}}>
                         <div id="div5" className={`dropable_div ${styles.dropableRow2}`} >
                                </div>

                  </div>
                       <div className={styles.divColBox}  style={{backgroundColor: "#F5F7FF"}}>
                         <div id="div6" className="dropable_div">
                                </div>

               </div>
                     {/* -----------third row----------- */}
                            <div className={`${styles.divColBox}  ${styles.divDarkBlueLeft} ${styles.divDarkBlueBottom}`} style={{backgroundColor: "#EBEFFF"}}>
                              <div className="table_layer_1 table_layer">
        <div className="table_label_x">short term</div>
            <div className="table_label_y"> $ </div>
        </div>
        <div id="div7" className={`dropable_div ${styles.dropableRow3}`} >
                                </div>
                    </div>
                <div className={`${styles.divColBox} ${styles.divMediumBlueBottom}`} style={{backgroundColor: "#EBEFFF"}}>
                 <div className="table_layer_1 table_layer">
        <div className="table_label_x medium">Medium term</div>
        </div>
                </div>
                  <div className={`${styles.divColBox} ${styles.divLightBlueBottom}`}>
                       <div className="table_layer_1 table_layer">
        <div className="table_label_x long">Long term</div>
        </div>
             </div>
                </div>
                        </div>

                

                                                    </div>
                                                </div>
                                                <div className={styles.graphContentSec}>
                                                    <p>Click on the plus icon to add recovery <br className="hidden-sm"/>stratergies for the enabler. ‘HQ <br className="hidden-sm"/>Building’. You can plot them based <br className="hidden-sm"/>on  costs and time.</p>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-2" role="tabpanel">
                                    <div className="row">
                                        <div className={`col-xl-5 mb-4 ${styles.enablerRoeContainer} riskStratagyAccordion`}>
                                        <div className={`accordion ${styles.accordionSec}`} id="accordionExampleOne">
                                                {/* -------Premises card one------------- */}
                                                <div className={styles.card}>
                                                    <div className={styles.cardHeader} id="headingSix">
                                                        <h2 className="mb-0">
                                                            <button className={`btn btn-link ${styles.buttonSec}`} type="button" data-toggle="collapse"
                                                                data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                                                  <span className={styles.title}>Laptop</span>
                                                                <span className={`${styles.timebadges} ${styles.badges} mr-1 ml-2 badges`}>16 Hours</span>
                                                                <span className={`${styles.spfbadges} ${styles.badges} mr-1 ml-1 badges`}>SPF</span>
                                                                <div className={`btn  btn-rounded ${styles.fancyButton} fancyButton`}>
                                                                    <span class="iconify" data-icon="akar-icons:chevron-right" data-inline="false" style={{ color: "#b57bff" }}></span>
                                                                </div>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseSix" className="collapse show" aria-labelledby="headingSix"
                                                        data-parent="#accordionExampleOne">
                                                        <div className={styles.cardBody}>
                                                            <div className="row">
                                                                <div className={`col-sm-6 ${styles.dateSec}`}>
                                                                    <label className="text-capitalize mb-1">
                                                                        Implementation date
                                                                         </label>
                                                                    <input className="form-control datepicker treatment_date" />
                                                                </div>
                                                                <div className={`col-sm-6 ${styles.ownerSec}`}>
                                                                    <label className="text-capitalize mb-1">
                                                                        Implementation owner
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
                                                                    Implementation plan
                                                                 </label>
                                                                <textarea className="form-control treatment_plan" style={{ height: "100px" }}></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* --------card two--------- */}
                                                <div className={styles.card}>
                                                    <div className={styles.cardHeader} id="headingFive">
                                                        <h2 className="mb-0">
                                                            <button className={`btn btn-link ${styles.buttonSec} collapsed`} type="button" data-toggle="collapse"
                                                                data-target="#collapseFive" aria-expanded="false"
                                                                aria-controls="collapseFive">
                                                                   <span className={styles.title}>Test 2</span>
                                                                <span className={`${styles.timebadges} ${styles.badges} mr-1 ml-2 badges`}>16 Hours</span>
                                                                 <div className={`btn  btn-rounded ${styles.fancyButton} fancyButton`}>
                                                                    <span class="iconify" data-icon="akar-icons:chevron-right" data-inline="false" style={{ color: "#b57bff" }}></span>
                                                                </div>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseFive" className="collapse" aria-labelledby="headingFive"
                                                        data-parent="#accordionExampleOne">
                                                        <div className={styles.cardBody}>
                                                            <div className="row">
                                                                <div className={`col-sm-6 ${styles.dateSec}`}>
                                                                    <label className="text-capitalize mb-1">
                                                                        Implementation date
                                                                      </label>
                                                                    <input className="form-control datepicker treatment_date" />
                                                                </div>
                                                                <div className={`col-sm-6 ${styles.ownerSec}`}>
                                                                    <label className="text-capitalize mb-1">
                                                                        Implementation owner
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
                                                                    Implementation plan
                                                                 </label>
                                                                <textarea className="form-control treatment_plan" style={{ height: "100px" }}></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`col-xl-7`}>
                                        <div className={styles.chartSec}>
                                                <div className={styles.chartHeading}>
                                                    <h5>
                                                        Recovery Strategies for 'Test 2'
                                                        
                                                    </h5>
                                                    <h6>Cost / Time Analysis</h6>
                                                </div>
                                                <div className={styles.tableWrap}>
                                                <div className="rsg_table_wrap">
                                                <button className={styles.editBtn} >
                <img src="./images/icon-edit-circular.svg" alt="" className="img-fluid" />
            </button>                      
            <span className={`${styles.ctbadges} ${styles.cost} ${styles.darkBg}`}>
                Cost
            </span>
            <span className={`${styles.ctbadges} ${styles.time} ${styles.darkBg}`}>
                Time
            </span>
            <div className={styles.mainDiv}>
               <div className={styles.divRow}>     
                 <div className={`${styles.divColBox} ${styles.divLightBlueLeft} ${styles.twosideborder}`}>
                        <div className="table_layer_3 table_layer">
                            <div className="table_label_y"> $$$ </div>
                          </div>
                           <div id="div1" className="dropable_div">
                           <input className="strategyInput" placeholder="Enter Strategy"/>
                                </div>
                                </div>
                                <div className={`${styles.divColBox} ${styles.twosideborder}`}>
                                <div id="div2" className="dropable_div">
                                    <input className="strategyInput" placeholder="Enter Strategy"/>
                                </div>
                            </div>
                       <div className={`${styles.divColBox} ${styles.divColBoxFirst} ${styles.twosideborder} border-right-0`}>
                            <div id="div3" className="dropable_div">
                            <input className="strategyInput" placeholder="Enter Strategy"/>
                                </div>

                      </div>
                           {/* ------------Second Row------------------ */}
                   <div className={`${styles.divColBox} ${styles.divMediumBlueLeft} ${styles.twosideborder}`} style={{backgroundColor: "#EBEFFF"}}>
                     <div className="table_layer_2 table_layer">
            <div className="table_label_y"> $$ </div>
        </div>
          <div id="div4" className="dropable_div">
          <input className="strategyInput" placeholder="Enter Strategy"/>
                                </div>

                     </div>
                <div className={`${styles.divColBox} ${styles.twosideborder}`}  style={{backgroundColor: "#F5F7FF"}}>
                         <div id="div5" className={`dropable_div ${styles.dropableRow2}`} >
                         <input className="strategyInput" placeholder="Enter Strategy"/>
                                </div>

                  </div>
                       <div className={`${styles.divColBox} ${styles.twosideborder} border-right-0`}  style={{backgroundColor: "#F5F7FF"}}>
                     
                         <div id="div6" className="dropable_div">
                         <input className="strategyInput" placeholder="Enter Strategy"/>
                                </div>

               </div>
                     {/* -----------third row----------- */}
                            <div className={`${styles.divColBox} ${styles.onesideborder} ${styles.divDarkBlueLeft} ${styles.divDarkBlueBottom}`} style={{backgroundColor: "#EBEFFF"}}>
                              <div className="table_layer_1 table_layer">
        <div className="table_label_x">short term</div>
            <div className="table_label_y"> $ </div>
        </div>
        <div id="div7" className={`dropable_div ${styles.dropableRow3}`} >
        <input className="strategyInput" placeholder="Enter Strategy"/>
                                </div>
                    </div>
                <div className={`${styles.divColBox} ${styles.divMediumBlueBottom} ${styles.onesideborder}`} style={{backgroundColor: "#EBEFFF"}}>
                    
                 <div className="table_layer_1 table_layer">
        <div className="table_label_x medium">Medium term</div>
        </div>
        <div className={`dropable_div`} id="div8">
        <input className="strategyInput" placeholder="Enter Strategy"/>
        </div>
                </div>
                  <div className={`${styles.divColBox} ${styles.onesideborder} ${styles.divLightBlueBottom} border-right-0`}>
                       <div className="table_layer_1 table_layer">
        <div className="table_label_x long">Long term</div>
        </div>
        <div className={`dropable_div`} id="div9">
        <input className="strategyInput" placeholder="Enter Strategy"/>
        </div>
             </div>
                </div>
                        </div>

                

                                                    </div>
                                                </div>
                                                <div className={styles.graphContentSec}>
                                                <label>Stratergy Description</label>
            <textarea class="form-control"></textarea>
           <div className={styles.buttonArea}>
           <button type="submit" class={`${styles.cancelBtn} ml-0`}>Cancel</button>
           <button type="submit" class={styles.saveBtn}>Save</button>

           </div>
                                                           </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-3" role="tabpanel">
                                <div className="row">
                                        <div className={`col-xl-5 mb-4 ${styles.enablerRoeContainer} riskStratagyAccordion`}>
                                        <div className={`accordion ${styles.accordionSec}`} id="accordionExampleTwo">
                                                {/* -------Premises card one------------- */}
                                                <div className={styles.card}>
                                                    <div className={styles.cardHeader} id="headingSeven">
                                                        <h2 className="mb-0">
                                                            <button className={`btn btn-link ${styles.buttonSec}`} type="button" data-toggle="collapse"
                                                                data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                                                                  <span className={styles.title}>Laptop</span>
                                                                <span className={`${styles.timebadges} ${styles.badges} mr-1 ml-2 badges`}>16 Hours</span>
                                                                <span className={`${styles.spfbadges} ${styles.badges} mr-1 ml-1 badges`}>SPF</span>
                                                                <div className={`btn  btn-rounded ${styles.fancyButton} fancyButton`}>
                                                                    <span class="iconify" data-icon="akar-icons:chevron-right" data-inline="false" style={{ color: "#b57bff" }}></span>
                                                                </div>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseSeven" className="collapse show" aria-labelledby="headingSeven"
                                                        data-parent="#accordionExampleTwo">
                                                        <div className={styles.cardBody}>
                                                            <div className="row">
                                                                <div className={`col-sm-6 ${styles.dateSec}`}>
                                                                    <label className="text-capitalize mb-1">
                                                                        Implementation date
                                                                         </label>
                                                                    <input className="form-control datepicker treatment_date" />
                                                                </div>
                                                                <div className={`col-sm-6 ${styles.ownerSec}`}>
                                                                    <label className="text-capitalize mb-1">
                                                                        Implementation owner
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
                                                                    Implementation plan
                                                                 </label>
                                                                <textarea className="form-control treatment_plan" style={{ height: "100px" }}></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* --------card two--------- */}
                                                <div className={styles.card}>
                                                    <div className={styles.cardHeader} id="headingEight">
                                                        <h2 className="mb-0">
                                                            <button className={`btn btn-link ${styles.buttonSec} collapsed`} type="button" data-toggle="collapse"
                                                                data-target="#collapseEight" aria-expanded="false"
                                                                aria-controls="collapseEight">
                                                                   <span className={styles.title}>Test 2</span>
                                                                <span className={`${styles.timebadges} ${styles.badges} mr-1 ml-2 badges`}>16 Hours</span>
                                                                 <div className={`btn  btn-rounded ${styles.fancyButton} fancyButton`}>
                                                                    <span class="iconify" data-icon="akar-icons:chevron-right" data-inline="false" style={{ color: "#b57bff" }}></span>
                                                                </div>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseEight" className="collapse" aria-labelledby="headingEight"
                                                        data-parent="#accordionExampleTwo">
                                                        <div className={styles.cardBody}>
                                                            <div className="row">
                                                                <div className={`col-sm-6 ${styles.dateSec}`}>
                                                                    <label className="text-capitalize mb-1">
                                                                        Implementation date
                                                                      </label>
                                                                    <input className="form-control datepicker treatment_date" />
                                                                </div>
                                                                <div className={`col-sm-6 ${styles.ownerSec}`}>
                                                                    <label className="text-capitalize mb-1">
                                                                        Implementation owner
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
                                                                    Implementation plan
                                                                 </label>
                                                                <textarea className="form-control treatment_plan" style={{ height: "100px" }}></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`col-xl-7`}>
                                        <div className={styles.chartSec}>
                                                <div className={styles.chartHeading}>
                                                    <h5>
                                                        Recovery Strategies for 'Test 2'
                                                        
                                                    </h5>
                                                    <h6>Cost / Time Analysis</h6>
                                                </div>
                                                <div className={styles.tableWrap}>
                                                <div className="rsg_table_wrap">
                                               
            <span className={`${styles.ctbadges} ${styles.cost} ${styles.darkBg}`}>
                Cost
            </span>
            <span className={`${styles.ctbadges} ${styles.time} ${styles.darkBg}`}>
                Time
            </span>
            <div className={styles.mainDiv}>
               <div className={styles.divRow}>     
                 <div className={`${styles.divColBox} ${styles.divLightBlueLeft}`}>
                        <div className="table_layer_3 table_layer">
                            <div className="table_label_y"> $$$ </div>
                          </div>
                           <div id="div1" className="dropable_div">
                                </div>
                                </div>
                                <div className={`${styles.divColBox} `}>
                                <div id="div2" className="dropable_div">
                                </div>
                            </div>
                       <div className={`${styles.divColBox} ${styles.divColBoxFirst} border-right-0`}>
                            <div id="div3" className="dropable_div">
                                </div>

                      </div>
                           {/* ------------Second Row------------------ */}
                   <div className={`${styles.divColBox} ${styles.divMediumBlueLeft}`} style={{backgroundColor: "#EBEFFF"}}>
                     <div className="table_layer_2 table_layer">
            <div className="table_label_y"> $$ </div>
        </div>
          <div id="div4" className="dropable_div">
                                </div>

                     </div>
                <div className={`${styles.divColBox}`}  style={{backgroundColor: "#F5F7FF"}}>
                         <div id="div5" className={`dropable_div ${styles.dropableRow2}`} >
                                </div>

                  </div>
                       <div className={`${styles.divColBox} border-right-0`}  style={{backgroundColor: "#F5F7FF"}}>
                     
                         <div id="div6" className="dropable_div">
                                </div>

               </div>
                     {/* -----------third row----------- */}
                            <div className={`${styles.divColBox} ${styles.divDarkBlueLeft} ${styles.divDarkBlueBottom} `} style={{backgroundColor: "#EBEFFF"}}>
                              <div className="table_layer_1 table_layer">
        <div className="table_label_x">short term</div>
            <div className="table_label_y"> $ </div>
        </div>
        <div id="div7" className={`dropable_div ${styles.dropableRow3}`} >
                                </div>
                    </div>
                <div className={`${styles.divColBox} ${styles.divMediumBlueBottom}`} style={{backgroundColor: "#EBEFFF"}}>
                    
                 <div className="table_layer_1 table_layer">
        <div className="table_label_x medium">Medium term</div>
        </div>
        <div className={`dropable_div`} id="div8">
        <label class={styles.checkboxWrapper}>
    <input type="checkbox" class={styles.checkboxInput} />
    <span class={styles.checkboxTile}>
      
        <input class={styles.checkboxLabel} />
    </span>
</label>
        </div>
                </div>
                  <div className={`${styles.divColBox}  ${styles.divLightBlueBottom} border-right-0`}>
                       <div className="table_layer_1 table_layer">
        <div className="table_label_x long">Long term</div>
        </div>
        <div className={`dropable_div`} id="div9">
        </div>
             </div>
                </div>
                        </div>

                

                                                    </div>
                                                </div>
                                                <div className={styles.graphContentSec}>
                                           <p className={styles.success}>This strategy enables GAZT to have<br /> memorandum of understanding with <br />hotels, office centers etc. for securing<br /> office spaces during disruption.</p>
                                                           </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-4" role="tabpanel">
                                <div className="row">
                                        <div className={`col-xl-5 mb-4 ${styles.enablerRoeContainer} riskStratagyAccordion`}>
                                        <div className={`accordion ${styles.accordionSec}`} id="accordionExampleThree">
                                                {/* -------Premises card one------------- */}
                                                <div className={styles.card}>
                                                    <div className={styles.cardHeader} id="headingNine">
                                                        <h2 className="mb-0">
                                                            <button className={`btn btn-link ${styles.buttonSec}`} type="button" data-toggle="collapse"
                                                                data-target="#collapseNine" aria-expanded="true" aria-controls="collapseNine">
                                                                 <span className={styles.title}>Laptop</span>
                                                                <span className={`${styles.timebadges} ${styles.badges} mr-1 ml-2 badges`}>16 Hours</span>
                                                                <span className={`${styles.spfbadges} ${styles.badges} mr-1 ml-1 badges`}>SPF</span>
                                                                <div className={`btn  btn-rounded ${styles.fancyButton} fancyButton`}>
                                                                    <span class="iconify" data-icon="akar-icons:chevron-right" data-inline="false" style={{ color: "#b57bff" }}></span>
                                                                </div>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseNine" className="collapse show" aria-labelledby="headingNine"
                                                        data-parent="#accordionExampleThree">
                                                        <div className={styles.cardBody}>
                                                            <div className="row">
                                                                <div className={`col-sm-6 ${styles.dateSec}`}>
                                                                    <label className="text-capitalize mb-1">
                                                                        Implementation date
                                                                         </label>
                                                                    <input className="form-control datepicker treatment_date" />
                                                                </div>
                                                                <div className={`col-sm-6 ${styles.ownerSec}`}>
                                                                    <label className="text-capitalize mb-1">
                                                                        Implementation owner
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
                                                                    Implementation plan
                                                                 </label>
                                                                <textarea className="form-control treatment_plan" style={{ height: "100px" }}></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* --------card two--------- */}
                                                <div className={styles.card}>
                                                    <div className={styles.cardHeader} id="headingTen">
                                                        <h2 className="mb-0">
                                                            <button className={`btn btn-link ${styles.buttonSec} collapsed`} type="button" data-toggle="collapse"
                                                                data-target="#collapseTen" aria-expanded="false"
                                                                aria-controls="collapseTen">
                                                                   <span className={styles.title}>Test 2</span>
                                                                <span className={`${styles.timebadges} ${styles.badges} mr-1 ml-2 badges`}>16 Hours</span>
                                                                 <div className={`btn  btn-rounded ${styles.fancyButton} fancyButton`}>
                                                                    <span class="iconify" data-icon="akar-icons:chevron-right" data-inline="false" style={{ color: "#b57bff" }}></span>
                                                                </div>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseTen" className="collapse" aria-labelledby="headingTen"
                                                        data-parent="#accordionExampleThree">
                                                        <div className={styles.cardBody}>
                                                            <div className="row">
                                                                <div className={`col-sm-6 ${styles.dateSec}`}>
                                                                    <label className="text-capitalize mb-1">
                                                                        Implementation date
                                                                      </label>
                                                                    <input className="form-control datepicker treatment_date" />
                                                                </div>
                                                                <div className={`col-sm-6 ${styles.ownerSec}`}>
                                                                    <label className="text-capitalize mb-1">
                                                                        Implementation owner
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
                                                                    Implementation plan
                                                                 </label>
                                                                <textarea className="form-control treatment_plan" style={{ height: "100px" }}></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`col-xl-7`}>
                                        <div className={styles.chartSec}>
                                                <div className={styles.chartHeading}>
                                                    <h5>
                                                        Recovery Strategies for 'Test 2'
                                                        
                                                    </h5>
                                                    <h6>Cost / Time Analysis</h6>
                                                </div>
                                                <div className={styles.tableWrap}>
                                                <div className="rsg_table_wrap">
                                               
            <span className={`${styles.ctbadges} ${styles.cost} ${styles.darkBg}`}>
                Cost
            </span>
            <span className={`${styles.ctbadges} ${styles.time} ${styles.darkBg}`}>
                Time
            </span>
            <span className={`${styles.info} ${styles.cost} ${styles.darkBg}`}>
            Investment cost
            </span>
            <span className={`${styles.info} ${styles.time} ${styles.darkBg}`}>
            Implementation time
            </span>
            <div className={styles.mainDiv}>
               <div className={styles.divRow}>     
                 <div className={`${styles.divColBox} ${styles.twosideborder} ${styles.divLightBlueLeft}`}>
                        <div className="table_layer_3 table_layer">
                            <div className="table_label_y"> $$$ </div>
                          </div>
                           <div id="div1" className="dropable_div">
                           <input className="strategyInput" placeholder="Enter Strategy"/>
                                </div>
                                </div>
                                <div className={`${styles.divColBox} ${styles.twosideborder}`}>
                                <div id="div2" className="dropable_div">
                                    <input className="strategyInput" placeholder="Enter Strategy"/>
                                </div>
                            </div>
                       <div className={`${styles.divColBox} ${styles.divColBoxFirst} ${styles.twosideborder} border-right-0`}>
                            <div id="div3" className="dropable_div">
                            <input className="strategyInput" placeholder="Enter Strategy"/>
                                </div>

                      </div>
                           {/* ------------Second Row------------------ */}
                   <div className={`${styles.divColBox} ${styles.divMediumBlueLeft} ${styles.twosideborder}`} style={{backgroundColor: "#EBEFFF"}}>
                     <div className="table_layer_2 table_layer">
            <div className="table_label_y"> $$ </div>
        </div>
          <div id="div4" className="dropable_div">
          <input className="strategyInput" placeholder="Enter Strategy"/>
                                </div>

                     </div>
                <div className={`${styles.divColBox} ${styles.twosideborder}`}  style={{backgroundColor: "#F5F7FF"}}>
                         <div id="div5" className={`dropable_div ${styles.dropableRow2}`} >
                         <input className="strategyInput" placeholder="Enter Strategy"/>
                                </div>

                  </div>
                       <div className={`${styles.divColBox} ${styles.twosideborder} border-right-0`}  style={{backgroundColor: "#F5F7FF"}}>
                     
                         <div id="div6" className="dropable_div">
                         <input className="strategyInput" placeholder="Enter Strategy"/>
                                </div>

               </div>
                     {/* -----------third row----------- */}
                            <div className={`${styles.divColBox} ${styles.onesideborder} ${styles.divDarkBlueLeft} ${styles.divDarkBlueBottom}`} style={{backgroundColor: "#EBEFFF"}}>
                              <div className="table_layer_1 table_layer">
        <div className="table_label_x">short term</div>
            <div className="table_label_y"> $ </div>
        </div>
        <div id="div7" className={`dropable_div ${styles.dropableRow3}`} >
        <input className="strategyInput" placeholder="Enter Strategy"/>
                                </div>
                    </div>
                <div className={`${styles.divColBox} ${styles.onesideborder} ${styles.divMediumBlueBottom}`} style={{backgroundColor: "#EBEFFF"}}>
                    
                 <div className="table_layer_1 table_layer">
        <div className="table_label_x medium">Medium term</div>
        </div>
        <div className={`dropable_div`} id="div8">
        <input className="strategyInput" placeholder="Enter Strategy"/>
        </div>
                </div>
                  <div className={`${styles.divColBox} ${styles.onesideborder} ${styles.divLightBlueBottom} border-right-0`}>
                       <div className="table_layer_1 table_layer">
        <div className="table_label_x long">Long term</div>
        </div>
        <div className={`dropable_div`} id="div9">
        <input className="strategyInput" placeholder="Enter Strategy"/>
        </div>
             </div>
                </div>
                        </div>

                

                                                    </div>
                                                </div>
                                                <div className={styles.graphContentSec}>
                                                <label>Stratergy Description</label>
            <textarea class="form-control"></textarea>
           <div className={styles.buttonArea}>
           <button type="submit" class={`${styles.cancelBtn} ml-0`}>Cancel</button>
           <button type="submit" class={styles.saveBtn}>Save</button>

           </div>
                                                           </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-5" role="tabpanel">
                                <div className="row">
                                        <div className={`col-xl-5 mb-4 ${styles.enablerRoeContainer} riskStratagyAccordion`}>
                                        <div className={`accordion ${styles.accordionSec}`} id="accordionExampleFour">
                                                {/* -------Premises card one------------- */}
                                                <div className={styles.card}>
                                                    <div className={styles.cardHeader} id="headingEleven">
                                                        <h2 className="mb-0">
                                                            <button className={`btn btn-link ${styles.buttonSec}`} type="button" data-toggle="collapse"
                                                                data-target="#collapseEleven" aria-expanded="true" aria-controls="collapseEleven">
                                                                  <span className={styles.title}>Laptop</span>
                                                                <span className={`${styles.timebadges} ${styles.badges} mr-1 ml-2 badges`}>16 Hours</span>
                                                                <span className={`${styles.spfbadges} ${styles.badges} mr-1 ml-1 badges`}>SPF</span>
                                                                <div className={`btn  btn-rounded ${styles.fancyButton} fancyButton`}>
                                                                    <span class="iconify" data-icon="akar-icons:chevron-right" data-inline="false" style={{ color: "#b57bff" }}></span>
                                                                </div>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseEleven" className="collapse show" aria-labelledby="headingEleven"
                                                        data-parent="#accordionExampleFour">
                                                        <div className={styles.cardBody}>
                                                            <div className="row">
                                                                <div className={`col-sm-6 ${styles.dateSec}`}>
                                                                    <label className="text-capitalize mb-1">
                                                                        Implementation date
                                                                         </label>
                                                                    <input className="form-control datepicker treatment_date" />
                                                                </div>
                                                                <div className={`col-sm-6 ${styles.ownerSec}`}>
                                                                    <label className="text-capitalize mb-1">
                                                                        Implementation owner
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
                                                                    Implementation plan
                                                                 </label>
                                                                <textarea className="form-control treatment_plan" style={{ height: "100px" }}></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* --------card two--------- */}
                                                <div className={styles.card}>
                                                    <div className={styles.cardHeader} id="headingTwelve">
                                                        <h2 className="mb-0">
                                                            <button className={`btn btn-link ${styles.buttonSec} collapsed`} type="button" data-toggle="collapse"
                                                                data-target="#collapseTwelve" aria-expanded="false"
                                                                aria-controls="collapseTwelve">
                                                                   <span className={styles.title}>Test 2</span>
                                                                <span className={`${styles.timebadges} ${styles.badges} mr-1 ml-2 badges`}>16 Hours</span>
                                                                 <div className={`btn  btn-rounded ${styles.fancyButton} fancyButton`}>
                                                                    <span class="iconify" data-icon="akar-icons:chevron-right" data-inline="false" style={{ color: "#b57bff" }}></span>
                                                                </div>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseTwelve" className="collapse" aria-labelledby="headingTwelve"
                                                        data-parent="#accordionExampleFour">
                                                        <div className={styles.cardBody}>
                                                            <div className="row">
                                                                <div className={`col-sm-6 ${styles.dateSec}`}>
                                                                    <label className="text-capitalize mb-1">
                                                                        Implementation date
                                                                      </label>
                                                                    <input className="form-control datepicker treatment_date" />
                                                                </div>
                                                                <div className={`col-sm-6 ${styles.ownerSec}`}>
                                                                    <label className="text-capitalize mb-1">
                                                                        Implementation owner
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
                                                                    Implementation plan
                                                                 </label>
                                                                <textarea className="form-control treatment_plan" style={{ height: "100px" }}></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`col-xl-7`}>
                                        <div className={styles.chartSec}>
                                                <div className={styles.chartHeading}>
                                                    <h5>
                                                        Recovery Strategies for 'Test 2'
                                                        
                                                    </h5>
                                                    <h6>Cost / Time Analysis</h6>
                                                </div>
                                                
                                                <div className={styles.tableWrap}>
                                                <div className="rsg_table_wrap">
                                                <button className={styles.editBtn} >
                <img src="./images/icon-edit-circular.svg" alt="" className="img-fluid" />
            </button>                      
            <span className={`${styles.ctbadges} ${styles.cost} ${styles.darkBg}`}>
                Cost
            </span>
            <span className={`${styles.ctbadges} ${styles.time} ${styles.darkBg}`}>
                Time
            </span>
            <div className={styles.mainDiv}>
               <div className={styles.divRow}>     
                 <div className={`${styles.divColBox} ${styles.divLightBlueLeft}`}>
                        <div className="table_layer_3 table_layer">
                            <div className="table_label_y"> $$$ </div>
                          </div>
                           <div id="div1" className="dropable_div">
                                </div>
                                </div>
                                <div className={`${styles.divColBox} `}>
                                <div id="div2" className="dropable_div">
                                </div>
                            </div>
                       <div className={`${styles.divColBox} ${styles.divColBoxFirst} border-right-0`}>
                            <div id="div3" className="dropable_div">
                                </div>

                      </div>
                           {/* ------------Second Row------------------ */}
                   <div className={`${styles.divColBox} ${styles.divMediumBlueLeft}`} style={{backgroundColor: "#EBEFFF"}}>
                     <div className="table_layer_2 table_layer">
            <div className="table_label_y"> $$ </div>
        </div>
          <div id="div4" className="dropable_div">
                                </div>

                     </div>
                <div className={`${styles.divColBox}`}  style={{backgroundColor: "#F5F7FF"}}>
                         <div id="div5" className={`dropable_div ${styles.dropableRow2}`} >
                                </div>

                  </div>
                       <div className={`${styles.divColBox} border-right-0`}  style={{backgroundColor: "#F5F7FF"}}>
                     
                         <div id="div6" className="dropable_div">
                         <label class={styles.checkboxWrapper}>
    <input type="checkbox" class={styles.checkboxInput} />
    <span class={styles.checkboxTile}>
      
        <input class={styles.checkboxLabel} />
    </span>
</label>
<div className={styles.msgSec}>
    <span className={styles.line}></span>
    <span className={styles.text}>Recommanded Recovery Plan</span>
</div>
                                </div>

               </div>
                     {/* -----------third row----------- */}
                            <div className={`${styles.divColBox} ${styles.divDarkBlueLeft} ${styles.divDarkBlueBottom} `} style={{backgroundColor: "#EBEFFF"}}>
                              <div className="table_layer_1 table_layer">
        <div className="table_label_x">short term</div>
            <div className="table_label_y"> $ </div>
        </div>
        <div id="div7" className={`dropable_div ${styles.dropableRow3}`} >
                                </div>
                    </div>
                <div className={`${styles.divColBox} ${styles.divMediumBlueBottom}`} style={{backgroundColor: "#EBEFFF"}}>
                    
                 <div className="table_layer_1 table_layer">
        <div className="table_label_x medium">Medium term</div>
        </div>
        <div className={`dropable_div`} id="div8">
    
        </div>
                </div>
                  <div className={`${styles.divColBox} ${styles.divLightBlueBottom} border-right-0`}>
                       <div className="table_layer_1 table_layer">
        <div className="table_label_x long">Long term</div>
        </div>
        <div className={`dropable_div`} id="div9">
        </div>
             </div>
                </div>
                        </div>

                

                                                    </div>
                                                </div>
                                                <div className={styles.graphContentSec}>
                                           <p className={styles.success}>This strategy ensures that X company<br/> has a well-defined alternative recovery<br/> site with set up workstations for critical<br/> staff. The recovery site could be a sole<br/> business continuity center or a<br/> specified area in a branch.</p>
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
export default RiskStrategy