import React from 'react'
import styles from "../../Assets/styles/auth.module.scss"
// import SimpleSlider from './slider'
// import Slider from "react-slick";

const Card = ({ index }) => {
    return (
        <div key={index} className={styles.leftBox}>
            <figure>
            </figure>
            <h5 className="text-capitalize mb-3 mt-3">
                Feature {index}
            </h5>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
   </p>
        </div>
    )
}
const Login = () => {

    return (
        <>
            <div className={styles.loginWrapper}>
                <div className={styles.loginHeader}>
                    <div className="container-fluid">
                        <div className={styles.logo}>
                            <img src="/images/logo-blue.svg" alt="Logo" className="img-fluid" />
                        </div>
                    </div>
                </div>

                <div className={styles.loginConent}>
                    <div className={styles.leftSec}>
                        <div className={styles.silderSec} id="slide">
                            {/* <SimpleSlider>
                                {Array(9).fill().map((item, index) => (<div key={index}> <h1  className="mr-10 ml-10">{index}</h1></div>))} 
                            </SimpleSlider> */}
                            <Card/>
                            {/* <SimpleSlider /> */}
                        </div>

                    </div>
                    <div className={styles.rightSec}>

                        <h2 className="fw-500 mb-2">Welcome Back!</h2>
                        <p>You are just a step away from experiencing seamless business continuity management</p>
                        <form >

                            <div className={styles.customeFormGroup}>
                                <input type="text" id="name" className={styles.formControl} required />
                                <label className={styles.formControlPlaceholder} for="name">Enter your Email ID</label>
                            </div>
                            <div className={styles.customeFormGroup}>
                                <input type="password" id="name" className={styles.formControl} required />
                                <label className={styles.formControlPlaceholder} for="name">Password</label>
                            </div>
                            <button type="submit" name="" id="submit" className={`btn ${styles.loginBtn}`}>Login</button>
                            <p>
                                <span className="white-semitransparent">Don’t have an account?</span> <a href="#" class="fw-500 link-white"> Sign up </a>
                            </p>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Login