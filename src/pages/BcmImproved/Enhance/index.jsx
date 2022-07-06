import ImproveMenu from "../../../components/common/Header/improveMenuWithSideNav"
import React from "react"
import styles from "../../../Assets/styles/improve.module.scss"
const Enhance = () => {
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
                            <h2>Track Compliance </h2>
                        </div>
                        <div className="col-md-9 px-0">
                            <p>Track and audit your organization’s ISO22301 compliance</p>
                        </div>
                        <div className={`col-md-3 px-0`}>
                            <div className={styles.pending}>
                                <img src="/images/Time-Circle-pending.svg" alt="Images" />
                                <span>Pending</span>
                            </div>
                        </div>
                        {/* ---------enhance Section---------- */}
                        <div className={`${styles.enhanceSection} col-12 pl-0 pr-4`}>
                            <div className={styles.box}>
                                <div className={styles.boxContent}>
                                    <span className={styles.add}>+</span>
                                    <h4>Benchmarking</h4>
                                    <p>Know where you are today and how to maintain your baseline. Learn how your peers are managing their BCM program</p>
                                    <div className="text-right">
                                        <a href="#">Activate</a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.boxContent}>
                                    <span className={styles.add}>+</span>
                                    <h4>ISO22301 Certification</h4>
                                    <p>Get your program acknowledged and verified. Discover how ISO 22301 : 2019 certification validates your robustness</p>
                                    <div className="text-right">
                                        <a href="#">Activate</a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.boxContent}>
                                    <span className={styles.add}>+</span>
                                    <h4>Crisis Coordination</h4>
                                    <p>Enhance the probability of a positve outcome. Allow your teams to seamlessly coordinate during crisis</p>
                                    <div className="text-right">
                                        <a href="#">Activate</a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.boxContent}>
                                    <span className={styles.add}>+</span>
                                    <h4>Supply chain resilience</h4>
                                    <p>Strengthen your weakest link. Monitor and improve your supply chain resilience maturity in real time</p>
                                    <div className="text-right">
                                        <a href="#">Activate</a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.box}>
                                <div className={`${styles.boxContent} ${styles.active}`}>
                                    <span className={styles.add}>+</span>
                                    <h4>IT Disaster Recovery Plan</h4>
                                    <p>Grow your trust on your IT availability. Coach your BCM program to manage Data centre outages</p>
                                    <div className="text-right">
                                        <a href="#">Activate</a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.boxContent}>
                                    <span className={styles.add}>+</span>
                                    <h4> Virtual Crisis Room</h4>
                                    <p>Time, Tide and Disasters donot await. Be crisis ready anyday, everyday through on demand crisis room</p>
                                    <div className="text-right">
                                        <a href="#">Activate</a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.boxContent}>
                                    <span className={styles.add}>+</span>
                                    <h4>Expert Training module</h4>
                                    <p>Elevate your skill set. Utilize the<br /> curated workshops to enhance your <br /> BCM expertise</p>
                                    <div className="text-right">
                                        <a href="#">Activate</a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.boxContent}>
                                    <span className={styles.add}>+</span>
                                    <h4>BCM Wargaming</h4>
                                    <p>Pilot your BCP in a custom curated environment. With advanced gaming interface, experience panic, fear and decision bias</p>
                                    <div className="text-right">
                                        <a href="#">Activate</a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.boxContent}>
                                    <span className={styles.add}>+</span>
                                    <h4>Enterprise Risk Management</h4>
                                    <p>Equip your resilience tool kit to manage proactive threats. Unify risk appetites, registers and treatment plans in compliance with ISO31000</p>
                                    <div className="text-right">
                                        <a href="#">Activate</a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.boxContent}>
                                    <span className={styles.add}>+</span>
                                    <h4>BCM conference</h4>
                                    <p>Engage in likemindedness. Explore topics, network ideas and grow your horizons in a skill building set up</p>
                                    <div className="text-right">
                                        <a href="#">Activate</a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.boxContent}>
                                    <span className={styles.add}>+</span>
                                    <h4>BCM thought leadership</h4>
                                    <p>Discover ideas that invoke action. Subscribe, converse and feedback endless topics covered by thought leaders</p>
                                    <div className="text-right">
                                        <a href="#">Activate</a>
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
export default Enhance