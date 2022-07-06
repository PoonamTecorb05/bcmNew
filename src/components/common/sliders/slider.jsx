import { Component } from "react";
import Slider from "react-slick";
import styles from './slider.module.css'


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    let classStatus = className === "slick-arrow slick-next slick-disabled"
    return (
        <div
            className={`${classStatus === true ? "" : styles.owlNext} ${className}`}
            style={{ ...style, display: "block", }}
            onClick={onClick}
        >
        </div>
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    let classStatus = className === "slick-arrow slick-prev slick-disabled"
    return (
        <div
            className={`${classStatus === true ? "" : styles.owlPrev} ${className}`}
            style={{ ...style, display: "block", }}
            onClick={onClick}
        >
        </div>
    );
}

class SimpleSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        var settings = {
            // nextArrow: <SampleNextArrow />,
            // prevArrow: <SamplePrevArrow />,
            // responsive: this.props.responsive,
            // arrows: true,
            // initialSlide: 0,
            // infinite: false,
            // slidesToShow: 1,
            // slidesToScroll: 1,
            // lazyLoad: true,
            // className: "center",
            // dots: true,
         
        };
        return (
            <>
                <div className={`container`} >
                    {/* <div className={`row mx-0 `}>
                        <div className={` col-12 px-0`}> */}
                            <Slider ref={slider => (this.slider = slider)}  {...settings}>
                                {/* {console.log("-------------------->", this.props.children)} */}
                                {this.props.children}
                                {/* <div  >
                                    <p>100</p>
                                </div>
                                <div  >
                                    <p>200</p>
                                </div>
                                <div  >
                                    <p>75</p>
                                </div>
                                <div  >
                                    <p>300</p>
                                </div>
                                <div  >
                                    <p>225</p>
                                </div>
                                <div  >
                                    <p>175</p>
                                </div> */}

                            </Slider>
                        {/* </div>
                    </div> */}
                </div>
            </>
        );
    }

}

export default SimpleSlider

