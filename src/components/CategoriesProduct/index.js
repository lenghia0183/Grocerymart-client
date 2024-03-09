import classNames from "classnames/bind";
import styles from "./CategoriesProduct.module.scss";
import Wrapper from "../Proper/Wrapper";

const cx = classNames.bind(styles);

function CategoriesProduct({ data, className }) {


    return (
        <Wrapper className={cx("wrapper",className)}>
            <div className={cx("inner")}>
                <img
                    src={data.thumbnail}
                    alt={data.alt}
                    className={cx("thumbnail")}
                />

                <div className={cx("info")}>
                    <span className={cx("price")}>{data.price}</span>
                    <p className={cx("desc")}>{data.desc}</p>
                </div>
            </div>
        </Wrapper>
    );
}
export default CategoriesProduct;
