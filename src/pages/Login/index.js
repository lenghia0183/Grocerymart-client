import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import Logo from "../../components/Logo";
import { PasswordIcon, EmailIcon, GmailIcon } from "../../components/Icon";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx("wrapper")}>
            <Link to="/">
                <Logo className={cx("logo")} />
            </Link>
            <p className={cx("title")}>Hello Again!</p>
            <p className={cx("right-desc")}>
                Welcome back to sign in. As a returning customer, you have
                access to your previously saved all information.
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
                    Login
                </Button>
                <Button className={cx("gmail-btn")} leftIcon={<GmailIcon />} large outline>
                    Sign in with Gmail
                </Button>
            </div>

            <div className={cx("register-section")}>
                <span className={cx("no-account")}>
                    Don’t have an account yet?
                </span>
                <Link to="/sign-up" className={cx("sign-in-link")}>
                    Sign Up
                </Link>
            </div>
        </div>
    );
}

export default Login;
