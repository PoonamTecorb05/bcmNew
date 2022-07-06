import EmbedMenu from "../../../components/common/Header/embedMenuWithSideNav"
import React, { useState } from "react"
import styles from "../../../Assets/styles/embed.module.scss"
import Select from 'react-select';
const RecoveryStrategy = () => {
    var OptionList = [
        { value: 'one', label: 'Finance' },
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
        <EmbedMenu/>
        <div className={styles.contentWrapper} >
                <div className={`p-4 pb-3 ${styles.bcpActivated}`}>
                    <div className="container-fluid">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-6 pl-0">
                                <h3 className="m-0">Embed</h3>
                            </div>
                            <div className="col-lg-6">
                                <div className="d-flex align-items-center justify-content-lg-end">

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={`${styles.innerSec} p-4`}>
                    <div className={styles.panelSection}>
                        <h2>Track Progress </h2>
                        <p>Keep track of <span>recovery strategy</span> plans and related status</p>

                        <div className={`${styles.searchSec} row impactAnalysis track`}>
                            <div className={`${styles.left} col-md-4`}>
                                <Select
                                    options={OptionList} 
                                    styles={colourStyles}/>
                            </div>
                            <div className={`${styles.right} col-md-8`}>
                                <div className={styles.complete}>
                                    <img src="/images/Complete_upload.svg" />
                                    <span>Complete</span>
                                </div>
                        </div>
                    </div>
                    <div className={styles.actionCardList}>
                            <div className="row">                            
                                <div className="col-lg-4" >
                                    <div className={styles.actionCard}>
                                        <div class={styles.actionCardHeader}>
                                        <div className={`row ${styles.headingSec}`}>
                                            <div className="col-12">
                                                <h4 className="mr-1">Finance Manager</h4>
                                                <span className={`${styles.badges} ${styles.timebadges}`}>8 Hours</span>
                                            <span className={`${styles.badges} ${styles.spfbadges}`}>SPF</span>
                                            </div>                                           
                                        </div>                            
                                         
                                        </div>
                                        <div className={`${styles.actionCardBody} impactAnalysis`}>
                                        <div className="row">
                                            <div className="col-12">
                                                <h5>Recovery Strategy : Secondary Desktops</h5>
                                            </div>
                                                <div className={`col-sm-6 ${styles.dateSec}`}>
                                                    <label className="text-capitalize">
                                                        Treatment date
                                                    </label>
                                                   <p>30 May 2021</p>
                                                </div>
                                                <div className={`col-sm-6 ${styles.ownerSec}`}>
                                                    <label className="text-capitalize">
                                                        Treatment owner
                                                    </label>
                                                   <p>Amara Kyle</p>
                                                </div>
                                            </div>
                                            <div className="treatment__plan_p">
                                                <label className="text-capitalize">
                                                    Treatment plan
                                                </label>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                                            </div>

                                            <button className={styles.inProgressBtn}>In Progress</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4" >
                                    <div className={styles.actionCard}>
                                        <div class={styles.actionCardHeader}>
                                        <div className={`row ${styles.headingSec}`}>
                                            <div className="col-12">
                                                <h4 className="mr-1">Finance Manager</h4>
                                                <span className={`${styles.badges} ${styles.timebadges}`}>8 Hours</span>
                                            </div>                                           
                                        </div>                            
                                         
                                        </div>
                                        <div className={`${styles.actionCardBody} impactAnalysis`}>
                                        <div className="row">
                                            <div className="col-12">
                                                <h5>Recovery Strategy : Secondary Desktops</h5>
                                            </div>
                                                <div className={`col-sm-6 ${styles.dateSec}`}>
                                                    <label className="text-capitalize">
                                                        Treatment date
                                                    </label>
                                                   <p className={styles.delay}>30 May 2021</p>
                                                </div>
                                                <div className={`col-sm-6 ${styles.ownerSec}`}>
                                                    <label className="text-capitalize">
                                                        Treatment owner
                                                    </label>
                                                   <p>Amara Kyle</p>
                                                </div>
                                            </div>
                                            <div className="treatment__plan_p">
                                                <label className="text-capitalize">
                                                    Treatment plan
                                                </label>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                                            </div>

                                            <button className={styles.delayBtn}>Delayed</button>
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
export default RecoveryStrategy