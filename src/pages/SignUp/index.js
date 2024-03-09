import classNames from "classnames/bind";
import styles from "./SignIn.module.scss";
import { PasswordIcon, EmailIcon, GmailIcon } from "../../components/Icon";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";

const cx = classNames.bind(styles);

function SignUp() {
    return (
        <div className={cx("wrapper")}>
            <Link to="/">
                <Logo className={cx("logo")} />
            </Link>
            <p className={cx("title")}>Sign Up</p>
            <p className={cx("right-desc")}>
                Let’s create your account and Shop like a pro and save money.
            </p>
            <form className={cx("form")}>
                <div className={cx("form-group")}>
                    <input
                        id="email"
                        type="text"
                        placeholder="Email"
                        name="email"
                    ></input>
                    <label htmlFor="email">Email</label>
                    <EmailIcon className={cx("icon")} />
                </div>

                <div className={cx("form-group")}>
                    <input
                        id="password"
                        type="password"
                        placeholder="password"
                        name="password"
                    ></input>
                    <label htmlFor="password">Password</label>
                    <PasswordIcon className={cx("icon")} />
                </div>

                <div className={cx("form-group")}>
                    <input
                        type="text"
                        id="confirm-password"
                        placeholder="Confirm Password"
                        name="confirm-password"
                    ></input>
                    <label htmlFor="confirm-password">Confirm password</label>
                    <PasswordIcon className={cx("icon")} />
                </div>
            </form>

            <div className={cx("option-group")}>
                <div className={cx("option-left")}>
                    <input
                        type="checkbox"
                        className={cx("show-password-checkbox")}
                        id="showPassword"
                    ></input>
                    <label htmlFor="showPassword">Set as default card</label>
                </div>

                <div className={cx("option-right")}>
                    <Link href="#">Recovery Password</Link>
                </div>
            </div>

            <div className={cx("buttons")}>
                <Button className={cx("sign-up-btn")} large>
                    Sign Up
                </Button>
                <Button
                    className={cx("gmail-btn")}
                    leftIcon={<GmailIcon />}
                    large
                    outline
                >
                    Sign in with Gmail
                </Button>
            </div>

            <div className={cx("register-section")}>
                <span className={cx("no-account")}>
                    You have an account yet?
                </span>
                <Link to="/login" className={cx("sign-in-link")}>
                    Sign In
                </Link>
            </div>
        </div>
    );
}

export default SignUp;
