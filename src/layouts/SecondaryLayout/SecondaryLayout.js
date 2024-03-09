import Header from "../Header";
import Footer from "../Footer";
import classNames from "classnames/bind";
import styles from "./SecondaryLayout.module.scss";

const cx = classNames.bind(styles);

function SecondaryLayout({ children }) {
    return (
        <div className={cx("main-wrapper")}>
            <Header />
            <div className={cx("content")}>{children}</div>
            <Footer />
        </div>
    );
}
export default SecondaryLayout;
