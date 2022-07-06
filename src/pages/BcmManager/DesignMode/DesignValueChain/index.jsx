import React, { useEffect } from 'react'
import DesignMenu from '../../../../components/common/Header/designMenuWithSideNav'
import styles from "../../../../Assets/styles/designMode.module.scss"
import Select from 'react-select';
const DesignValueChain = () => {
    useEffect(() => {
        // $('.global_select2').select2();
    }, [])
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
            <DesignMenu />
            {/* ------------Inner Section---------- */}
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
                    <div className={`${styles.panelSec} mb-5`}>
                        <div className={styles.headeSec}>
                            <div className="row align-items-center">
                                <div className="col-sm-10">
                                    <h3 className="m-0">
                                        Recovery Timeline
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
                    {/* ----------------------BottomSec--------------------- */}

                    <div className="row">
                        <div className="col-xl-6">
                            <div className={styles.panelSec2}>
                                <div className={`${styles.panelHeadWhite} py-3 px-4`}>

                                    <div className="row align-items-center">
                                        <div className="col-sm-8">
                                            <h3 className="m-0">
                                                Overview
                                    </h3>
                                        </div>
                                        <div className="col-sm-4 text-left " style={{ color: "#91979d" }}>
                                            <div className="overview">
                                            <Select
                                                options={OptionList} 
                                                styles={colourStyles}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`${styles.progressBarArea} p-4 `}>
                                    <div className="radial_progressbars_wrap">
                                        <div className="radial_progressbars">

                                            <div className="progress_percentage">
                                                100%
                                        <small>
                                                    Critical
                                        </small>
                                            </div>

                                            <div className="progress" data-percentage="20">
                                                <span className="progress-left">
                                                    <span className="progress-bar progress-bar-green"></span>
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar progress-bar-green"></span>
                                                </span>
                                            </div>

                                            <div className="progress progress2" data-percentage="10">
                                                <span className="progress-left">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar"></span>
                                                </span>
                                            </div>

                                            <div className="progress progress3" data-percentage="5">
                                                <span className="progress-left">
                                                    <span className="progress-bar progress-bar-red"></span>
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar progress-bar-red"></span>
                                                </span>

                                            </div>

                                        </div>

                                        <div className="progress_parameters">
                                            <div className="pr_prmtr_box">
                                                <div className="pr_prmtr_box_upper" style={{ color: "#000" }}>
                                                    11
                                        </div>
                                                <p>
                                                    Processes
                                        </p>
                                            </div>

                                            <div className="pr_prmtr_box">
                                                <div className="pr_prmtr_box_upper" style={{ color: "#F03738" }}>
                                                    <figure>
                                                        <img src="/images/icon-info-red2.svg" alt="Icon" />
                                                    </figure>
                                                </div>
                                                <p className="disabled">
                                                    Critical Risk
                                        </p>
                                            </div>

                                            <div className="pr_prmtr_box">
                                                <div className="pr_prmtr_box_upper" style={{ color: "#F3BB1C" }}>
                                                    <figure>
                                                        <img src="/images/icon-info-yellow.svg" alt="Icon" />
                                                    </figure>
                                                </div>
                                                <p className="disabled">
                                                    Moderate Risk
                                        </p>
                                            </div>

                                            <div className="pr_prmtr_box">
                                                <div className="pr_prmtr_box_upper" style={{ color: "#3CC13B" }}>
                                                    <figure>
                                                        <img src="/images/icon-info-green.svg" alt="Icon" />
                                                    </figure>
                                                </div>
                                                <p className="disabled">
                                                    Low Risk
                                        </p>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <div className={styles.panelSec3}>
                                <input type="hidden" id="impact_id" name="impact_id" value="28" />
                                <div className={`${styles.panelRedHead} py-3 px-4`}>
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <h3 className="m-0">t</h3>
                                        </div>
                                        <div className="col-sm-4 text-left text-sm-right">
                                            <p className="mt-3 mt-sm-1 mb-0">
                                                24 Hours
                                                 </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`p-4 pb-5  ${styles.panelInnerArea}`}>
                                    {/* <!-- slider box content --> */}
                                    <h6 className="mb-3">enablers</h6>
                                    <ul className={`${styles.buttonList} mb-5`}>
                                        <li>
                                            <button type="button" className={`btn ${styles.solidfilled}`}>Premises</button>
                                            <button type="button" className={`${styles.redBorder} btn`}>test</button>
                                            <button type="button" className={`${styles.spfBtn} btn`}>SPF</button>
                                            <label className={`cbcontainer cbred d-inline-block`}>
                                                <input type="checkbox" name="spf[]" value="47" checked="checked" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                    </ul>
                                    {/* <!-- slider box content ends --> */}
                                </div>
                                <div className={styles.panelFooter}>
                                    <div>
                                        <button className={styles.moveLeft} title="Previous Event">
                                            <span className="iconify" data-icon="akar-icons:chevron-left" data-inline="false"></span>
                                        </button>

                                        <span id="mv_fr_span" className={`mx-2 ${styles.textSpan}`}>1/6</span>

                                        <button className={styles.moveRight} title="Next Event">
                                            <span className="iconify" data-icon="akar-icons:chevron-right" data-inline="false"></span>
                                        </button>
                                    </div>

                                    <div>
                                        <div className="clearfix">
                                        <div className="pull-right">
                        <div className="form-group d-flex align-items-center my-2 treat_risk_parrent">
                            <label className="mb-0 mr-2 content">Treat Risk</label>
                            <div className="custom-control custom-switch">
                                <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                                <label className="custom-control-label" for="customSwitch1"></label>
                            </div>
                        </div>
                    </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- ends panel_footer --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DesignValueChain