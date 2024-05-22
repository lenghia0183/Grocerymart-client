import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from './ComboBox.module.scss';
import { ArrowRight } from '../Icon';
const cx = classNames.bind(style);
function ComboBox({ options, className, defaultOption = false, value, onChangeOption }) {
  const [selectedOption, setSelectedOption] = useState(defaultOption || options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleSelect = (value) => {
    setSelectedOption(value);
    onChangeOption(value);
    setIsOpen(false);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cx('custom-combobox', className)} ref={inputRef}>
      <div className={cx('value-container', { 'search-container-open': isOpen })} onClick={toggleOpen}>
        <div className={cx('selected-value')}>{selectedOption?.label}</div>
        <ArrowRight className={cx('arrow', { 'arrow-show': isOpen })} />
      </div>

      <ul className={cx('options-list', { 'options-list-show': isOpen })}>
        {options?.map((option, index) => (
          <li
            className={cx({ 'selected-item': option?.label === selectedOption?.label })}
            key={index}
            onClick={() => handleSelect(option)}
          >
            {option?.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ComboBox;
