
import React, { useState } from 'react'
import styles from "../Assets/styles/helpcenter.module.scss"
import { Link } from "react-router-dom"
import Header from '../components/common/Header/header'
const HelpCenter = ()=>{
    const[warningCheck , setWarningCheck] = useState(false)
    const[sucessCheck , setSucessCheck] = useState(false)
   
    const Warning = (e) =>{        
        setWarningCheck(true);
        setSucessCheck(false);
    }
    const Sucess = (e) =>{        
        setSucessCheck(true);
        setWarningCheck(false);
    }
    return(
        <>
    <Header />
 {/* ----Content Sec--------- */}
<div className="container">
  <div className="row">
    <div className="col-md-12">
      <div className={styles.contentSec}>
        <h6>Choose an option below to continue</h6>
        <h5>How would you like us to <br/>help you today?</h5>
        <div className={`${styles.boxSec} d-flex justify-content-between`}>
          <div className={`${styles.crisis} ${styles.warning} crisis warning`}>
          <div className={`${styles.bgWhite} bg-white`}>
                  <img src="./images/crisis-icon-1.svg" alt="" />
                  <div className={styles.bottomSec}>
                      <h4>ACTIVATE BCP</h4>
                      <p>Initiate call tree for business continuity plans to be actioned</p>
                      <label className={`${styles.checkBox} checkBox ${warningCheck === true ? styles.active : ""}`} >
                          <input type="radio" name="type" value="1"  onClick={(e) =>{Warning(e)}}/>
                          <span className={styles.checkmark}></span>
                      </label>
                  </div>
              </div>
          </div>
          <div className={`${styles.crisis} ${styles.sucess} crisis sucess`}>
          <div className={`${styles.bgWhite} bg-white`}>
                  <img src="./images/crisis-icon-2.svg" alt="" />
                  <div className={styles.bottomSec}>
                      <h4>BE CRISIS READY</h4>
                      <p>Help me build and maintain a plan of action in case of a crisis</p>
                      <label className={`${styles.checkBox} checkBox ${sucessCheck === true ? styles.active : ""}`}>
                          <input type="radio" name="type" value="2" onClick={(e) =>{Sucess(e)}}/>
                          <span className={styles.checkmark}></span>
                      </label>
                  </div>
              </div>
          </div>
      </div>
      <div className={`${styles.buttonSec} text-right`}>
      <Link to="/crisisReady" >NEXT <img src="/images/right-arrow.svg" alt="" /></Link>
    </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}
export default HelpCenter