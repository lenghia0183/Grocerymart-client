import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from './ComboBox.module.scss';
import { ArrowRight } from '../Icon';
const cx = classNames.bind(style);
function ComboBox({ options, className }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedOption, setSelectedOption] = useState(options[0]);
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

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const filtered = options.filter((option) => option.toLowerCase().includes(term.toLowerCase()));
    setFilteredOptions(filtered);
  };

  const handleSelect = (value) => {
    setSelectedOption(value);
    setSearchTerm(value);
    setIsOpen(false);
    // console.log('Selected:', value);
    // Do something with the selected value
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cx('custom-combobox', className)} ref={inputRef}>
      <div className={cx('search-container')}>
        <input type="text" value={searchTerm} onChange={handleSearch} onFocus={toggleOpen} placeholder="Search..." />
        <div className={cx('dropdown-toggle')} onClick={toggleOpen}>
          <ArrowRight className={cx('arrow')} />
        </div>
      </div>

      {true && (
        <ul className={cx('options-list', { 'options-list-show': isOpen })}>
          {filteredOptions.map((option, index) => (
            <li
              className={cx({ 'selected-item': option === selectedOption })}
              key={index}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ComboBox;
