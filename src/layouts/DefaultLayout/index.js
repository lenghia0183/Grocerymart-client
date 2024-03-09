import Header from "../Header";
import Footer from "../Footer";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx("main-wrapper")}>
            <Header />
            <div className={cx("container")}>{children}</div>
            <Footer />
        </div>
    );
}
export default DefaultLayout;
