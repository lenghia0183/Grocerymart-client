import classNames from "classnames/bind";
import styles from "./Wrapper.module.scss";

const cx = classNames.bind(styles);
function Wrapper({ children, onClick, className, borderRdu = 6 }) {
    const classes = [
        "wrapper",
        {
            [className]: className,
        },
    ];

    const wrapperRadius = {
        borderRadius: `${borderRdu}`,
    };

    return (
        <div onClick={onClick} className={cx(classes)} style={wrapperRadius}>
            {children}
        </div>
    );
}
export default Wrapper;
