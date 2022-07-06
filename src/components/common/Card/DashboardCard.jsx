import React from 'react'
import PieChartComp from './pieChart'
// import PieChart from "./pieChart"

const DashboardCard =({styles})=>{
    return(
        <div className={`${styles.allCard}`}>
        <div className={`${styles.processCards}  d-flex align-items-center`}>
            <div>
                <h3>1</h3>
                <h4>Processes</h4>
                <ul>
                    <li>Non Critical</li>
                    <li>Critical</li>
                </ul>
                <span className={`${styles.percents} `}><img src="./images/icon-trending-up.png" alt="" />
                    <span>4.07%</span></span>
            </div>
            <div className={styles.pieChart}>
                {/* <canvas className={styles.pieChart} width="110" height="110"></canvas> */}
                {/* <PieChart /> */}
                <PieChartComp />
            </div>
        </div>
    </div>
    )
}
export default DashboardCard