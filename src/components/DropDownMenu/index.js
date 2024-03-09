import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import Wrapper from '../Proper/Wrapper';
import MenuItem from './MenuItem';
import classNames from 'classnames/bind';
import styles from './DropDownMenu.module.scss';
import { forwardRef, useState } from 'react';

const cx = classNames.bind(styles);

const DropDownMenu = forwardRef(({ children, visible, data, offset, isMoreMenu = false, className }, ref) => {
  const [openGroup, setOpenGroup] = useState(null);

  function handleOpen(title) {
    if (openGroup === title) setOpenGroup('');
    else setOpenGroup(title);
  }

  return (
    <>
      {!isMoreMenu && (
        <Tippy
          // visible={visible}
          placement="auto"
          interactive={true}
          offset={offset}
          render={(attrs) => (
            <Wrapper className={cx('menu-wrapper')}>
              {data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={cx('menu-group', {
                      separate: item.isSeparate,
                    })}
                  >
                    <MenuItem key={index} isTitle={true} icon={item.icon}>
                      {item.title}
                    </MenuItem>

                    {item.data.map((subItem, index) => {
                      return (
                        <MenuItem className={cx(item.data.length - 1 === index ? 'last-child' : '')} key={index}>
                          {subItem}
                        </MenuItem>
                      );
                    })}
                  </div>
                );
              })}
            </Wrapper>
          )}
        >
          {children}
        </Tippy>
      )}

      {isMoreMenu && (
        <Wrapper className={cx('menu-wrapper', className)}>
          {data.map((item, index) => {
            // console.log(item);
            return (
              <div className={cx('group-item')} key={index}>
                <MenuItem
                  isTitle={true}
                  className={cx('dropdow-title')}
                  onClick={() => {
                    handleOpen(item.title);
                  }}
                >
                  {item.title}
                </MenuItem>
                {item.data.map((nameItem, index) => {
                  return (
                    <div
                      key={index}
                      className={cx('group-name-item', item.title === openGroup ? 'group-name-item-open' : '')}
                    >
                      <MenuItem className={cx(item.data.length - 1 === index ? 'last-child' : '')}>{nameItem}</MenuItem>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </Wrapper>
      )}
    </>
  );
});

export default DropDownMenu;
