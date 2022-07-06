import React, { useState } from "react"
import DefineMenu from "../../../components/common/Header/defineMenuWithSideNav"
import styles from "../../../Assets/styles/define.module.scss"
import { AppetiteData } from "./tableData"
import SuperSimple from "./rangeSlider"
const Appetite = () => {

    const [status, setStatus] = useState(true)
    const [selectId, setSelectId] = useState(null)

    const editAction = (e,liId) => {
        e.preventDefault();
        setSelectId(liId)
        console.log("===========", status )
        setStatus(false)
    }
    const saveAction =(e)=>{
        e.preventDefault();
        setStatus(true)
    }
    return (
        <>
            <DefineMenu />
            <div className={styles.contentWrapper} >
                <div className={`p-4 pb-3 ${styles.bcpActivated}`}>
                    <div className="container-fluid">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-6 pl-0">
                                <h3 className="m-0">Define</h3>
                            </div>
                            <div className="col-lg-6">
                                <div className="d-flex align-items-center justify-content-lg-end">

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={`${styles.innerSec} p-4`}>
                    <div className={`${styles.panelSection} ${styles.appetiteSection}`}>
                        <div className={styles.headingSection}>
                            <div className={styles.heading}>
                                <h3>Modify the Impact Matrix</h3>
                                <h6>Edit the guide used to identify different types of impact & guidlines used to categorise the impact of a process being unavailable as either <span className={styles.nonImpact}>Non - Impactful</span> or  <span className={styles.impact}>Impactful</span></h6>
                            </div>
                            <div className={styles.addSection}>
                                <button className={styles.addBtn}>
                                    <img src="./images/plus.png" alt="" className="img-fluid" />
                                </button>
                            </div>
                        </div>
                        <div className={styles.tableBorder}>
                            <table className={styles.impactType}>
                                <thead>
                                    <tr>
                                        <th className={styles.type}>Impact Type</th>
                                        <th className={styles.nonImpact}>Non - Impact</th>
                                        <th className={styles.impact}>Impact</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {AppetiteData.map((data) => {
                                        return (
                                            <tr key={data.id} className={`${styles.editMode} ${selectId== data.id && !status ? styles.editable : ""}`}>
                                                <td className={styles.type}>
                                                {selectId== data.id && !status ? "" :<> <img src="/images/Edit-Square.svg" alt="" onClick={(e) => editAction(e,data.id)} /></>}
                                                    <textarea name="type" disabled={ selectId == data.id && !status ? false : true}>{data.type}</textarea>
                                                </td>
                                                <td className={styles.nonImpact}>
                                                    <textarea name="nonimpact" disabled={selectId == data.id && !status ? false : true}>{data.nonImpact}</textarea>

                                                </td>
                                                <td className={styles.impact}>
                                                    <textarea name="impact" disabled={selectId == data.id && !status ? false : true}>{data.impact}</textarea>
                                                    {selectId== data.id && !status ? <> 
                                                     <img className={styles.saveFile} src="/images/Complete_upload.svg" alt=""  onClick={(e)=> saveAction(e)}/>
                                                     </>
                                                     :
                                                     ""
                                                     }
                                                </td>

                                            </tr>
                                        )
                                    })
                                    }

                                </tbody>
                            </table>
                        </div>
                        {/* // ----------------Continuity Section------------ */}
                        <div className={styles.continuitySec}>
                            <div className={styles.headingSection}>
                                <div className={styles.heading}>
                                    <h3>Define the Minimum Business Continuity Objective</h3>
                                    <h6>Identify the target objective for the BCP to achieve during a disruption</h6>
                                </div>
                            </div>
                            <div className={styles.programObjective}>
                                <div className={styles.left}>
                                    <h5>Program Objective</h5>
                                    <input type="text" min="0" max='100' value="" className={styles.programObjectiveInput} placeholder="Enter the information" />
                                </div>
                                <div className={styles.right}>
                                    <h5>Time Objective</h5>
                                    <div className={`${styles.sliderPurple} mt-2`}>
                                       <SuperSimple />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <button className={styles.submitDetailBtn}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Appetite