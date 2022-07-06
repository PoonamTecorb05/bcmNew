import EmbedMenu from "../../../components/common/Header/embedMenuWithSideNav"
import React, { useState } from "react"
import styles from "../../../Assets/styles/embed.module.scss"
const Initiative = () => {
    return (
        <>
            <EmbedMenu />
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
                        <div className="row">
                        <p className="mb-0 col-md-8">Keep track of <span>BCM program initiatives</span> and related status</p>
                        <div className={`${styles.right} col-md-4`}>
                        <div className={styles.pending}>
                                        <img src="/images/Time-Circle-pending.svg" alt="Images" />
                                        <span>Pending</span>
                                    </div>
                        </div>
                        </div>

                        <div className={`${styles.searchSec} row impactAnalysis track mt-4`}>
                            <div className={`${styles.right} col-md-8`}>

                            </div>
                        </div>
                        <div className={styles.actionCardList}>
                            <div className="row">
                                <div className="col-lg-4" >
                                    <div className={styles.actionCard}>
                                        <div class={styles.actionCardHeader}>
                                            <div className={`row ${styles.headingSec}`}>
                                                <div className="col-md-10">
                                                    <h4 className="mr-1">Initiative Name</h4>
                                                </div>
                                                <div className='col-md-2'>
                                                    <div className={styles.editIcon}>
                                                        <a>
                                                            <img src='/images/Initiatives-Edit-Square.svg' />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${styles.actionCardBody}`}>
                                            <div className={styles.containerBox}>
                                                <h6><strong>Target Date</strong> : 30 Apr 2022</h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</p>
                                                <div className={styles.imgSec}>
                                                    <img src='/images/Initiatives-Add-User.svg' />
                                                    <span className={styles.heading}>BCM Hod</span>
                                                </div>
                                            </div>
                                            <button className={styles.treatedBtn}>Implemented</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4" >
                                    <div className={styles.actionCard}>
                                        <div class={styles.actionCardHeader}>
                                            <div className={`row ${styles.headingSec}`}>
                                                <div className="col-md-10">
                                                    <h4 className="mr-1">Initiative Name</h4>
                                                </div>
                                                <div className='col-md-2'>
                                                    <div className={styles.editIcon}>
                                                        <a>
                                                            <img src='/images/Initiatives-Edit-Square.svg' />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${styles.actionCardBody}`}>
                                            <div className={styles.containerBox}>
                                                <h6><strong>Target Date</strong> : 30 Apr 2022</h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</p>
                                                <div className={styles.imgSec}>
                                                    <img src='/images/Initiatives-Add-User.svg' />
                                                    <span className={styles.heading}>BCM Hod</span>
                                                </div>
                                            </div>
                                            <button className={styles.treatedBtn}>Implemented</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4" >
                                    <div className={styles.actionCard}>
                                        <div class={styles.actionCardHeader}>
                                            <div className={`row ${styles.headingSec}`}>
                                                <div className="col-md-10">
                                                    <h4 className="mr-1">Initiative Name</h4>
                                                </div>
                                                <div className='col-md-2'>
                                                    <div className={styles.editIcon}>
                                                        <a>
                                                            <img src='/images/Initiatives-Edit-Square.svg' />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${styles.actionCardBody}`}>
                                            <div className={styles.containerBox}>
                                                <h6><strong>Target Date</strong> : 30 Apr 2022</h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</p>
                                                <div className={styles.imgSec}>
                                                    <img src='/images/Initiatives-Add-User.svg' />
                                                    <span className={styles.heading}>BCM Hod</span>
                                                </div>
                                            </div>
                                            <button className={styles.notImplementedBtn}>Not Implemented</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4" >
                                    <div className={styles.actionCard}>
                                        <div class={styles.actionCardHeader}>
                                            <div className={`row ${styles.headingSec}`}>
                                                <div className="col-md-10">
                                                    <h4 className="mr-1">Initiative Name</h4>
                                                </div>
                                                <div className='col-md-2'>
                                                    <div className={styles.editIcon}>
                                                        <a>
                                                            <img src='/images/Initiatives-Edit-Square.svg' />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${styles.actionCardBody}`}>
                                            <div className={styles.containerBox}>
                                                <h6><strong>Target Date</strong> : 30 Apr 2022</h6>
                                                <p className={styles.delay}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</p>
                                                <div className={styles.imgSec}>
                                                    <img src='/images/Initiatives-Add-User.svg' />
                                                    <span className={styles.heading}>BCM Hod</span>
                                                </div>
                                            </div>
                                            <button className={styles.delayBtn}>Delayed</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className={styles.AddActionCard}>
                                    <div className={styles.add}>
                                    <a clasclassNames={styles.createInitiative}>
                                        <img src="/images/icon-plus.svg" alt="" />
                                        <h6>Add Initiative</h6>
                                    </a>
                                </div>
                                    </div>
                                </div>
                                <div className="col-lg-4" >
                                    <div className={styles.actionCard}>
                                        <div className={styles.FormSection}>
                                            <form>
                                                <div className={`${styles.customeFormGroup} ${styles.time}`}>
                                                    <input name="time" placeholder="Time Frame" className={styles.actionTimeElement} />
                                                </div>
                                                <div className={styles.customeFormGroup}>
                                                    <input name="action" placeholder="Action to be taken" className={styles.actionTitleDiv} />
                                                </div>
                                                <div className={styles.customeFormGroup}>
                                                    <textarea name="description" placeholder="Description of the action" className={styles.actionDescriptionDiv} />
                                                </div>
                                                <div className={`${styles.customeFormGroup} ${styles.ownerInput}`}>
                                                    <img src="/images/icon-users.svg" alt="Thumb" className="img-fluid" />
                                                    <input name="owner" placeholder="Owner of the action" className={styles.actionUserName} />
                                                </div>
                                                <button className={styles.saveBtn}>Save</button>
                                            </form>
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
export default Initiative