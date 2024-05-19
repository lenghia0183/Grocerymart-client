import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from './ComboBox.module.scss';
import { ArrowRight } from '../Icon';
const cx = classNames.bind(style);
function ComboBox({
  options,
  className,
  value,
  onChangeValue,
}) {
  const [searchTerm, setSearchTerm] = useState(value);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedOption, setSelectedOption] = useState();
  const [isOpen, setIsOpen] = useState(false);

  // console.log(options);

  const inputRef = useRef();

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  useEffect(() => {
    setSearchTerm(value);
  }, [value]);

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
    setIsOpen(true);
    const term = event.target.value;
    setSearchTerm(term);
    const filtered = options.filter((option) => option?.name.toLowerCase().includes(term.toLowerCase()));
    setFilteredOptions(filtered);
  };

  const handleSelect = (value) => {
    setSelectedOption(value);
    setSearchTerm(value.name);
    setIsOpen(false);
    onChangeValue(value);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cx('custom-combobox', className)} ref={inputRef}>
      <div className={cx('search-container', { 'search-container-open': isOpen })}>
        <input type="text" value={searchTerm} onChange={handleSearch} onFocus={toggleOpen} placeholder="Search..." />
        <div className={cx('dropdown-toggle')} onClick={toggleOpen}>
          <ArrowRight className={cx('arrow', { 'arrow-show': isOpen })} />
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
              {option?.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ComboBox;
