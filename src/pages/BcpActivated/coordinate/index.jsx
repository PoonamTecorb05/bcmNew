import React from 'react'
import styles from "../../../Assets/styles/crisisactive.module.scss"
import HeaderSideMenu from '../../../components/common/Header/headerWithSideMenu'
const Coorinate = () => {
    return (
        <>
            <HeaderSideMenu />
            {/* ------------Inner Section---------- */}
            <div className={styles.contentWrapper} >
                <div className={`p-4 pb-3 ${styles.bcpActivated}`}>
                    <div className="container-fluid">
                        <div className="row d-flex align-items-center">
                            <div className={`col-lg-6 pl-0`}>
                                <h3 className="m-0">Coordinate</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.innerSec} p-4`}>
                    <div className={`${styles.callFor} coordiantePage`}>
                        <nav>
                            <div className={`nav nav-tabs`} id="nav-tab" role="tablist">
                                <div className={`nav-item nav-link active`} id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">
                                    <div className="coordinate gold">
                                        <img src="/images/Gold.svg" alt="" />
                                        <div className="right_box">
                                            <h4>Gold</h4>
                                            <h5>5 members</h5>
                                            <a href="#" role="button">View</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">
                                    <div className="coordinate sliver">
                                        <img src="/images/Silver.svg" alt="" />
                                        <div className="right_box">
                                            <h4>Silver</h4>
                                            <h5>45 members</h5>
                                            <a href="#" role="button">View</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">
                                    <div className="coordinate bronze">
                                        <img src="/images/Bronze.svg" alt="" />
                                        <div className="right_box">
                                            <h4>Bronze</h4>
                                            <h5>50 members</h5>
                                            <a href="#" role="button">View</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <div className={`tab-content ${styles.tabContent}`} id="nav-tabContent">
                            <div className={`tab-pane fade show active ${styles.TeamMember} ${styles.goldTeamMember}`} id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className={styles.teamMember}>
                                    <div className="d-flex justify-content-between">
                                        <div className={styles.heading}>
                                            <h3>Gold Team Member</h3>
                                            <h6>Complete the below recovery steps </h6>
                                        </div>
                                        <div className={styles.serchSec}>
                                            <input type="text" placeholder="Search" />
                                        </div>
                                    </div>
                               
                                <div className={styles.member}>
                                    <div className={`${styles.leftMember} ${styles.goldTeam}`}>
                                        <div className={styles.user}>
                                            <h5>Amara Kyle</h5>
                                            <h6>CEO</h6>
                                            <div className={styles.userName}>AK</div>
                                        </div>
                                        <div className={`${styles.user} ${styles.active}`}>
                                            <h5>Amara Kyle</h5>
                                            <h6>CEO</h6>
                                            <div className={styles.userName}>AK</div>
                                        </div>
                                    </div>
                                    <div className={styles.rightMember}>
                                        <div className={styles.user}>
                                            <div>
                                                <h5>Amara Kyle</h5>
                                                <h6>CEO</h6>
                                                <div className={styles.userName}>AK</div>
                                            </div>
                                            <div className={styles.socialMedia}>
                                                <ul className="d-flex">
                                                    <li>
                                                        <a href="#"><img src="/images/Gold-phone-icon.svg" alt="" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><img src="images/Gold-waht-app.svg" alt="" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <ul className={styles.arrowSection}>
                                        <li>
                                            <a type="button" className={styles.moveBack}><img src="/images/team-member-left-arrow.svg" alt="" /></a>
                                        </li>
                                        <li>
                                            <a type="button" className={styles.moveForward}><img src="/images/team-member-right-arrow.svg" alt="" /></a>
                                        </li>
                                        
                                    </ul>
                                    </div>
                                    </div>
                                    </div>

                            </div>
                            <div className={`tab-pane fade  ${styles.sliverTeamMember} ${styles.TeamMember}`} id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div className={styles.teamMember}>
                                    <div className="d-flex justify-content-between">
                                        <div className={styles.heading}>
                                            <h3>Silver Team Member</h3>
                                            <h6>Complete the below recovery steps </h6>
                                        </div>
                                        <div className={styles.serchSec}>
                                            <input type="text" placeholder="Search" />
                                        </div>
                                    </div>
                               
                                <div className={styles.member}>
                                    <div className={`${styles.leftMember} ${styles.goldTeam}`}>
                                        <div className={styles.user}>
                                            <h5>Amara Kyle</h5>
                                            <h6>CEO</h6>
                                            <div className={styles.userName}>AK</div>
                                        </div>
                                        <div className={`${styles.user} ${styles.active}`}>
                                            <h5>Amara Kyle</h5>
                                            <h6>CEO</h6>
                                            <div className={styles.userName}>AK</div>
                                        </div>
                                    </div>
                                    <div className={styles.rightMember}>
                                        <div className={styles.user}>
                                            <div>
                                                <h5>Amara Kyle</h5>
                                                <h6>CEO</h6>
                                                <div className={styles.userName}>AK</div>
                                            </div>
                                            <div className={styles.socialMedia}>
                                                <ul className="d-flex">
                                                    <li>
                                                        <a href="#"><img src="/images/Silver-phone-icon.svg" alt="" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><img src="images/Silver-waht-app.svg" alt="" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <ul className={styles.arrowSection}>
                                        <li>
                                            <a type="button" className={styles.moveBack}><img src="/images/team-member-left-arrow.svg" alt="" /></a>
                                        </li>
                                        <li>
                                            <a type="button" className={styles.moveForward}><img src="/images/team-member-right-arrow.svg" alt="" /></a>
                                        </li>
                                        
                                    </ul>
                                    </div>
                                    </div>
                                    </div>
                            </div>
                            <div className={`tab-pane fade  ${styles.brongeTeamMember} ${styles.TeamMember}`} id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <div className={styles.teamMember}>
                                    <div className="d-flex justify-content-between">
                                        <div className={styles.heading}>
                                            <h3>Bronze Team Member</h3>
                                            <h6>Complete the below recovery steps </h6>
                                        </div>
                                        <div className={styles.serchSec}>
                                            <input type="text" placeholder="Search" />
                                        </div>
                                    </div>
                               
                                <div className={styles.member}>
                                    <div className={`${styles.leftMember} ${styles.goldTeam}`}>
                                        <div className={styles.user}>
                                            <h5>Amara Kyle</h5>
                                            <h6>CEO</h6>
                                            <div className={styles.userName}>AK</div>
                                        </div>
                                        <div className={`${styles.user} ${styles.active}`}>
                                            <h5>Amara Kyle</h5>
                                            <h6>CEO</h6>
                                            <div className={styles.userName}>AK</div>
                                        </div>
                                    </div>
                                    <div className={styles.rightMember}>
                                        <div className={styles.user}>
                                            <div>
                                                <h5>Amara Kyle</h5>
                                                <h6>CEO</h6>
                                                <div className={styles.userName}>AK</div>
                                            </div>
                                            <div className={styles.socialMedia}>
                                                <ul className="d-flex">
                                                    <li>
                                                        <a href="#"><img src="/images/Bronze-phone-icon.svg" alt="" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><img src="images/Bronze-waht-app.svg" alt="" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <ul className={styles.arrowSection}>
                                        <li>
                                            <a type="button" className={styles.moveBack}><img src="/images/team-member-left-arrow.svg" alt="" /></a>
                                        </li>
                                        <li>
                                            <a type="button" className={styles.moveForward}><img src="/images/team-member-right-arrow.svg" alt="" /></a>
                                        </li>
                                        
                                    </ul>
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
export default Coorinate