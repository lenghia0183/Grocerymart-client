import classNames from "classnames/bind";
import styles from "./ProductCard.module.scss";
import { StartIcon } from "../Icon";

const cx = classNames.bind(styles);

function ProductCard({ data }) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("thumbnail-wrapper")}>
                <img
                    src={data.thumbnail}
                    className={cx("thumbnail")}
                    alt={data.alt}
                />
            </div>

            <div className={cx("info")}>
                <h2 className={cx("name-product")}>{data.nameProduct}</h2>

                <h3 className={cx("maker")}>{data.maker}</h3>

                <div className={cx("price-start")}>
                    <span className={cx("price")}>{data.price}</span>
                    <div className={cx("start-wrapper")}>
                        <StartIcon className={cx("start-icon")} />
                        <span className={cx("number-rate")}>
                            {data.startRate}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductCard;
