import EmbedMenu from "../../../components/common/Header/embedMenuWithSideNav"
import React, { useState } from "react"
import styles from "../../../Assets/styles/embed.module.scss"
import UploadEpisodModal from "../../../components/common/modal/uploadEpisodeModal"
import UploadProcessModal from "../../../components/common/modal/uploadProcessModal"
import UploadSucessModal from "../../../components/common/modal/uploadSucess"
import VideoDetailModal from "../../../components/common/modal/videoDetailModal"
const Training = () => {
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
                    <div className={`${styles.panelSection} ${styles.TraingpanelSection}`}>
                        <div className={styles.embedTraining}>
                            <div className="d-flex">
                                <div className={styles.leftSec}>
                                    <div>
                                        <h4>EPISODE 3</h4>
                                        <h5>Identifying actionable Recovery<br /> Steps for a Recovery Strategy</h5>
                                    </div>
                                    <div className={styles.time}>2:45 mins</div>
                                </div>
                                <div className={styles.rightSec}>
                                <div className="w-100">
                                    <div className={styles.pending}>
                                        <img src="/images/Time-Circle-pending.svg" alt="Images" />
                                        <span>Pending</span>
                                    </div>
                                    </div>
                                    <div className="w-100">
                                   {/* <UploadEpisodModal style={styles} /> */}
                                   {/* <UploadProcessModal style={styles} /> */}
                                   {/* <UploadSucessModal style={styles}/> */}
                                   <VideoDetailModal style={styles} />
                                    </div>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                        {/* ----------bottom------------ */}
                        <div className={styles.embedTrainingMode}>
                            <div className={styles.leftSide}>
                                <div className={styles.videoPlay}>
                                    <div className={styles.iframeBorder}>
                                        <video controls style={{ width: "100%", height: "100%" }}>
                                            <source src="" type="video/mp4" />
                                        </video>
                                    </div>
                                    <div className={styles.aboutMode}>
                                        <h4>About the Episode</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                                deserunt mollit anim id est laborum.</p>
                                        <h4>Rating</h4>
                                        <ul className="d-flex align-items-center">
                                            <li className={styles.count}>
                                                <span>4</span>
                                            </li>
                                            <li className={styles.star}>
                                                <img src="/images/Star.png" alt="" />
                                            </li>
                                            <li className={styles.star}>
                                                <img src="/images/Star.png" alt="" />
                                            </li>
                                            <li className={styles.star}>
                                                <img src="/images/Star.png" alt="" />
                                            </li>
                                            <li className={styles.star}>
                                                <img src="/images/Star.png" alt="" />
                                            </li>
                                            <li className={styles.star}>
                                                <img src="/images/Stat-unfill.png" alt="" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.rightSide}>
                                <div className={styles.watchlist}>
                                    <h4 className={styles.heading}>Watchlist</h4>
                                    <div className={styles.ListSec}>
                                        <div className={`${styles.list} ${styles.complete}`}>
                                            <img src="/images/Video-1.png" alt="" />
                                            <div className={styles.content}>
                                                <button className={styles.editBtn}>
                                                    <img src="/images/EditSquare.svg" alt="" />
                                                 </button>
                                                <h5>EPISODE 1</h5>
                                                <h6>Identifying actionable Recovery Steps for a Recovery Strategy</h6>
                                                <span className={styles.time}>2:45 mins</span>
                                            </div>
                                        </div>
                                        <div className={`${styles.list} ${styles.active}`}>
                                            <img src="/images/Video-1.png" alt="" />
                                            <div className={styles.content}>
                                            <button className={styles.editBtn}>
                                                    <img src="/images/EditSquare.svg" alt="" />
                                                 </button>
                                                <h5>EPISODE 1</h5>
                                                <h6>Identifying actionable Recovery Steps for a Recovery Strategy</h6>
                                                <span className={styles.time}>2:45 mins</span>
                                            </div>
                                        </div>
                                        <div className={styles.list}>
                                            <img src="/images/Video-1.png" alt="" />
                                            <div className={styles.content}>
                                            <button className={styles.editBtn}>
                                                    <img src="/images/EditSquare.svg" alt="" />
                                                 </button>
                                                <h5>EPISODE 1</h5>
                                                <h6>Identifying actionable Recovery Steps for a Recovery Strategy</h6>
                                                <span className={styles.time}>2:45 mins</span>
                                            </div>
                                        </div>
                                        <div className={styles.list}>
                                            <img src="/images/Video-1.png" alt="" />
                                            <div className={styles.content}>
                                            <button className={styles.editBtn}>
                                                    <img src="/images/EditSquare.svg" alt="" />
                                                 </button>
                                                <h5>EPISODE 1</h5>
                                                <h6>Identifying actionable Recovery Steps for a Recovery Strategy</h6>
                                                <span className={styles.time}>2:45 mins</span>
                                            </div>
                                        </div>
                                        <div className={styles.list}>
                                            <img src="/images/Video-1.png" alt="" />
                                            <div className={styles.content}>
                                            <button className={styles.editBtn}>
                                                    <img src="/images/EditSquare.svg" alt="" />
                                                 </button>
                                                <h5>EPISODE 1</h5>
                                                <h6>Identifying actionable Recovery Steps for a Recovery Strategy</h6>
                                                <span className={styles.time}>2:45 mins</span>
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
export default Training