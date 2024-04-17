import classNames from 'classnames/bind';
import styles from './Logo.module.scss';
import images from '../../assets/images';
const cx = classNames.bind(styles);
function Logo({ className }) {
  return (
    <div className={cx('wrapper', className)}>
      <img src={images.logo} alt="grocerymart"></img>
      <h1 className={cx('brand')}>grocerymart</h1>
    </div>
  );
}
export default Logo;
