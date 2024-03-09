import Button from "../../Button";
// import { MegaMenuIcon } from "../../Icon";
import { Grocery } from "../../Icon";

import classNames from "classnames/bind";
import styles from "./MenuItem.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ icon, children, isTitle, className,onClick }) {


    // gan icon mac dinh la Grocery
    var Icon = Grocery;
    if (icon) {
        Icon = icon;
    }
    const classes = {
        [className]: className,
    };
    return (
        <div>
            {/* kiem tra xem co phai title khong */}
            {isTitle ? (
                <div onClick={onClick} className={cx("title-wrapper", classes)}>
                    <Icon />
                    <span className={cx("title")}>{children}</span>
                </div>
            ) : (
                <Button onClick={onClick} className={cx("item-content", classes)} text href="#">
                    {children}
                </Button>
            )}
        </div>
    );
}

export default MenuItem;
