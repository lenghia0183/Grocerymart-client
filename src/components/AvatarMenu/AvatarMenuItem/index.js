import classNames from 'classnames/bind';
import styles from './AvatarMenuItem.module.scss';
import { useState } from 'react';
import Button from '../../Button';
const cx = classNames.bind(styles);

function AvatarMenuItem({ data, onClick }) {
  return (
    <Button className={cx('item-wrapper',{"sparate":data.sparate})} rightIcon={data.icon} onClick={onClick} to={data.link}>
      {data.title}
    </Button>
  );
}
export default AvatarMenuItem;
