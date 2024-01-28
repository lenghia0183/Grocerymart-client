import classNames from "classnames/bind";
import style from "./NotFound.module.scss";

const cx = classNames.bind(style);
function NotFound() {
    return (
        <div className={cx("wrapper")}>
            <h1>NotFound Page</h1>
        </div>
    );
}

export default NotFound;
