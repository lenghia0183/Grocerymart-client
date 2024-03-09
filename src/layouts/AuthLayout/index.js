import classNames from "classnames/bind";
import styles from "./AuthLayout.module.scss";
import images from "../../assets/images";
import Logo from "../../components/Logo";
import { useState } from "react";
import { NextIcon } from "../../components/Icon";
const cx = classNames.bind(styles);

function AuthLayout({ children }) {
    const [isNext, setIsNext] = useState(false);
    return (
        <div className={cx("wrapper")}>
            <div className={cx("column-container", { "next-column": isNext })}>
                <div className={cx("left-column")}>
                    <div className={cx("left-logo")}>
                        <Logo />
                    </div>

                    <div className={cx("left-content")}>
                        <img src={images.signIn} />
                        <p className={cx("left-desc")}>
                            The best of luxury brand values, high quality
                            products, and innovative services
                        </p>
                    </div>
                </div>

                <div className={cx("right-column")}>
                    <div className={cx("right-content")}>
                        {/* <Logo className={cx("logo")} />
                        <p className={cx("sign-up")}>Sign Up</p>
                        <p className={cx("right-desc")}>
                            Let’s create your account and Shop like a pro and
                            save money.
                        </p> */}
                        {children}
                    </div>
                </div>
            </div>
            <div className={cx("indicator-container")}>
                {isNext && (
                    <button
                        className={cx("next-btn", { "pre-icon": isNext })}
                        onClick={() => {
                            if (isNext === false) {
                                setIsNext(true);
                            } else {
                                setIsNext(false);
                            }
                        }}
                    >
                        <NextIcon className={cx()} />
                    </button>
                )}
                <div className={cx("dots", { "dot-active": !isNext })}></div>
                <div className={cx("dots", { "dot-active": isNext })}></div>
                {!isNext && (
                    <button
                        className={cx("next-btn", { "pre-icon": isNext })}
                        onClick={() => {
                            if (isNext === false) {
                                setIsNext(true);
                            } else {
                                setIsNext(false);
                            }
                        }}
                    >
                        <NextIcon className={cx()} />
                    </button>
                )}
            </div>
        </div>
    );
}

export default AuthLayout;
