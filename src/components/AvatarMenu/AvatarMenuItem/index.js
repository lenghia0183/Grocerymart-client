import classNames from 'classnames/bind';
import styles from './AvatarMenuItem.module.scss';
import Button from '../../Button';
const cx = classNames.bind(styles);

function AvatarMenuItem({ data, onClick }) {
  return (
    <Button className={cx('item-wrapper',{"separate":data.separate})} rightIcon={data.icon} onClick={onClick} to={data.link}>
      {data.title}
    </Button>
  );
}
export default AvatarMenuItem;
