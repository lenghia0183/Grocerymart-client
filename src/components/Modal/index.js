import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Modal({ isOpen, onClose, label, children }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // if (!isOpen) return null;

  return (
    <div className={cx('modal-overlay', { 'overlay-show': isOpen })} onClick={onClose}>
      <div className={cx('modal-content', { 'content-show': isOpen })} onClick={(e) => e.stopPropagation()}>
        <div className={cx('modal-header')}>
          <span className={cx('modal-label')}>{label}</span>
          <span className={cx('close-modal-btn')} onClick={onClose}>
            &times;
          </span>
        </div>
        <div className={cx('modal-body')}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
