import classNames from "classnames/bind";
import styles from "./SignIn.module.scss";

const cx = classNames.bind(styles);

function SignIn() {
    return (
        <div className={cx("wrapper")}>
            <h1>Sign-In Page</h1>
        </div>
    );
}

export default SignIn;
