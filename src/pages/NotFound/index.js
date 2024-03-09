import classNames from 'classnames/bind';
import style from './NotFound.module.scss';
import { useState } from 'react';
import ProductImageGallery from '../../components/ProductImageGallery';
import AvatarMenu from '../../components/AvatarMenu';

const cx = classNames.bind(style);
function NotFound() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={cx('container')}>
      <div className={cx('wrapper')}>
        <AvatarMenu/>
      </div>
    </div>
  );
}

export default NotFound;
