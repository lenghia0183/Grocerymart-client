import Sliderjs from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Slider.module.scss";

const cx = classNames.bind(styles);

function Slider({ listImage, className }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slider = useRef(null);

    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        accessibility: true,
        infinite: true,
        speed: 3000,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: (dots) => (
            <div style={{ bottom: "20px" }}>
                <ul style={{ bottom: "10px", color: "white" }}> {dots} </ul>
            </div>
        ),

        customPaging: (i) => (
            <button
                className={cx("custom-dot")}
                style={{
                    backgroundColor: i === currentSlide ? "white" : "gray",
                    color: "transparent",
                }}
            ></button>
        ),
        beforeChange: (current, next) => setCurrentSlide(next),
    };

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setCurrentSlide(value);
        slider.current.slickGoTo(value);
    };

    return (
        <div className={cx("slider-wrapper")}>
            <Sliderjs ref={slider} {...settings}>
                {listImage.map((item, index) => {
                    return (
                        <div className={cx("slide-item")} key={index}>
                            <img
                                className={cx("slide")}
                                src={item.slide}
                                alt={item.alt}
                            />
                        </div>
                    );
                })}
            </Sliderjs>
            {/* <input
                className={cx("input")}
                type="range"
                min="0"
                max={listImage.length - 1}
                value={currentSlide}
                onChange={handleInputChange}
            ></input> */}
        </div>
    );
}
export default Slider;
