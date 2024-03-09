import classNames from 'classnames/bind';
import styles from './Filter.module.scss';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import ReactSlider from 'react-slider';
import { useEffect, useState } from 'react';
import { SelectInputArrow } from '../Icon';
import Button from '../Button';
const cx = classNames.bind(styles);

function Filter({ children }) {
  // price
  const [priceRange, setPriceRange] = useState([1000, 3000]);

  const handlePriceSliderOnChange = (values) => {
    setPriceRange(values);
  };
  console.log(priceRange);

  const handlePriceInputOnChange = (e, type) => {
    if (type == 'min') {
      console.log('min');
      setPriceRange((pre) => {
        return [e.target.value, pre[1]];
      });
    }
    if (type == 'max') {
      console.log('max');
      setPriceRange((pre) => {
        return [pre[0], e.target.value];
      });
    }
  };

  // size/weight
  const [selectUnit, setSelectUnit] = useState('g');
  const [weightOptions, setWeightOptions] = useState(['100g', '200g', '500g']);

  //brand
  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleUnitChange = (e) => {
    const unit = e.target.value;
    setSelectUnit(unit);

    if (unit === 'g') {
      // console.log('g');
      setWeightOptions(['100g', '200g', '500g']);
    } else {
      // console.log('kg');
      setWeightOptions(['1kg', '2kg', '5kg']);
    }
  };

  return (
    <div>
      <Tippy
        offset={[-500, 10]}
        placement="bottom"
        interactive={true}
        trigger="click"
        delay={[0, 500]}
        render={(attrs) => (
          <div className={cx('filter-tippy', 'container')}>
            <span className={cx('filter-title')}>Filter</span>
            <form className={cx('form-container')}>
              <div className={cx('filter-form')}>
                {/* price-container */}
                <div className={cx('form-group')}>
                  <span className={cx('label')}>Price</span>
                  <div className={cx('slider-container')}>
                    {/* price-slider */}
                    <ReactSlider
                      className={cx('horizontal-slider')}
                      thumbClassName={cx('price-thumb')}
                      value={priceRange}
                      pearling={true}
                      minDistance={10}
                      onChange={handlePriceSliderOnChange}
                      min={0}
                      max={5000}
                    />
                  </div>

                  {/* price input */}
                  <div className={cx('price-input-container')}>
                    <div className={cx('price-input-group')}>
                      <label htmlFor="min-price" className={cx('price-range-label')}>
                        Minimum
                      </label>
                      <input
                        value={priceRange[0]}
                        type="number"
                        id="min-price"
                        name="min-price"
                        onInput={(e) => {
                          handlePriceInputOnChange(e, 'min');
                        }}
                      />
                    </div>

                    <div className={cx('price-input-group')}>
                      <label htmlFor="max-price" className={cx('price-range-label')}>
                        Maximum
                      </label>
                      <input
                        value={priceRange[1]}
                        type="number"
                        id="max-price"
                        name="max-price"
                        onInput={(e) => {
                          handlePriceInputOnChange(e, 'max');
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className={cx('form-group')}>
                  <span className={cx('label')}>Size/Weight</span>
                  <div className={cx('measure-wrapper')}>
                    <div className={cx('weight-input-wrapper')}>
                      <div className={cx('select-wrapper')}>
                        <select id="weightSelect" name="unit">
                          {weightOptions.map((option, index) => {
                            return (
                              <option key={index} value={option}>
                                {option}
                              </option>
                            );
                          })}
                        </select>
                        <SelectInputArrow className={cx('select-input-arrow')} />
                      </div>
                      <div className={cx('select-wrapper')}>
                        <select
                          className={cx('unit-select')}
                          value={selectUnit}
                          id="unit-select"
                          name="unit"
                          onChange={handleUnitChange}
                        >
                          <option value="g">Gram</option>
                          <option value="kg">Kilogram</option>
                        </select>
                        <SelectInputArrow className={cx('select-input-arrow')} />
                      </div>
                    </div>
                    <div className={cx('size-radio-wrapper')}>
                      <div className={cx('size-option')}>
                        <input id="small" name="size" type="radio" />
                        <label htmlFor="small">Small</label>
                      </div>
                      <div className={cx('size-option')}>
                        <input id="medium" name="size" type="radio" />
                        <label htmlFor="medium">Medium</label>
                      </div>
                      <div className={cx('size-option')}>
                        <input id="large" name="size" type="radio" />
                        <label htmlFor="large">Large</label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* brand */}
                <div className={cx('form-group')}>
                  <span className={cx('label')}>Brand</span>
                  <div className={cx('brand-search-container')}>
                    <input
                      id="brand-search"
                      className={cx('brand-search')}
                      type="text"
                      name="brand-search"
                      placeholder=""
                    />
                    <label className={cx('label-search-input')} htmlFor="brand-search">
                      Search brand name
                    </label>
                  </div>
                  <div className={cx('brand-radio-wrapper')}>
                    <div className={cx('size-option')}>
                      <input id="lavazza" name="brand" type="radio" />
                      <label htmlFor="lavazza">Lavazza</label>
                    </div>
                    <div className={cx('size-option')}>
                      <input id="nescafe" name="brand" type="radio" />
                      <label htmlFor="nescafe">Nescafe</label>
                    </div>
                    <div className={cx('size-option')}>
                      <input id="startbuck" name="brand" type="radio" />
                      <label htmlFor="startbuck">Starbucks</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className={cx('buttons')}>
                <Button className={cx('cancel-btn')} text>
                  Cacel
                </Button>
                <Button className={cx('show-btn')} rounded>
                  Show Result
                </Button>
              </div>
            </form>
          </div>
        )}
      >
        {children}
      </Tippy>
    </div>
  );
}

export default Filter;
