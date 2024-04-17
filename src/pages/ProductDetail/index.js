import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';

import { HeartIcon, StartIcon } from '../../components/Icon';
import { CompareIcon, DeliveryIcon, PickupIcon, SelectInputArrow } from '../../components/Icon';
import Button from '../../components/Button';
import CustomReviewList from '../../components/CustomReviewList';
import SimilarProductList from '../../components/SimilarProductList';
import ProductDescription from '../../components/ProductDescription';
import ProductImageGallery from '../../components/ProductImageGallery';
import Breadcrumb from '../../components/BreadcrumbBar';

const cx = classNames.bind(styles);
const tabs = ['Mô tả', 'Đánh giá', 'liên quan'];

function ProductDetail() {
  const [selectUnit, setSelectUnit] = useState('g');
  const [weightOptions, setWeightOptions] = useState(['100g', '200g', '500g']);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <div className={cx('wrapper')}>
        <div className={cx('container')}>
          <Breadcrumb />
          {/* <div className={cx('breadcrumb')}></div> */}

          <div className={cx('container')}>
            <div className={cx('main-content row')}>
              <div className={cx('col-xl-5 col-lg-6 col-12')}>
                <div className={cx('thumbnail-container')}>
                  {/* <img src={images.productImage1} alt=""></img> */}
                  <ProductImageGallery />
                </div>
              </div>

              <div className={cx('col-xl-7 col-lg-6 col-12')}>
                <div className={cx('main-info-wrapper')}>
                  <div className={cx('main-info')}>
                    <span className={cx('name-product')}>Coffee Beans - Espresso Arabica and Robusta Beans</span>

                    <div className={cx('info-body')}>
                      {/* infor left */}
                      <div className={cx('info-left')}>
                        <div className={cx('info-reviews')}>
                          <StartIcon className={cx('infor-start-icon')} />
                          <span className={cx('infor-start-rate')}>(3.5) 1100 reviews</span>
                        </div>
                        <div className={cx('size-weight-lable')}>Size/Weight</div>

                        <form className={cx('measure-wrapper')}>
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
                          <div className={cx('size-input-wrapper')}>
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
                        </form>
                      </div>

                      {/* infor right */}
                      <div className={cx('info-right')}>
                        <ul className={cx('menu-option')}>
                          <li className={cx('option-item')}>
                            <CompareIcon />
                            <div className={cx('item-label')}>Compare</div>
                          </li>
                          <li className={cx('option-item')}>
                            <DeliveryIcon />
                            <div className={cx('item-info')}>
                              <div className={cx('item-label')}>Delivery</div>
                              <div className={cx('item-desc')}>From $6 for 1-3 days</div>
                            </div>
                          </li>
                          <li className={cx('option-item')}>
                            <PickupIcon />
                            <div className={cx('item-info')}>
                              <div className={cx('item-label')}>Pickup</div>
                              <div className={cx('item-desc')}>Out of 2 store, today</div>
                            </div>
                          </li>
                        </ul>

                        <div className={cx('add-card-wrapper')}>
                          <div className={cx('price-wrapper')}>
                            <span className={cx('price')}>$500.00</span>
                            <span className={cx('percent')}>10%</span>
                          </div>
                          <span className={cx('final-price')}>$540.00</span>

                          <div className={cx('btn-add-wrapper')}>
                            <button className={cx('add-btn')}>Add to cart</button>
                            <Button btnIcon className={cx('heart-icon')}>
                              <HeartIcon />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cx('wrapper-tabs')}>
        <div className={cx('container')}>
          <ul className={cx('tab-container')}>
            {tabs.map((tab, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    setSelectedTab(tabs[index]);
                  }}
                  className={cx('tab-item', { 'tab-active': selectedTab === tab })}
                >
                  {tab}
                </li>
              );
            })}
          </ul>

          <div className={cx('tab-content-wrapper')}>
            {selectedTab === tabs[0] && <ProductDescription />}
            {selectedTab === tabs[1] && <CustomReviewList />}
            {selectedTab === tabs[2] && <SimilarProductList />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
