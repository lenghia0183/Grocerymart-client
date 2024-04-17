import { useState, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import { FacebookIcon, InstagramIcon, LinkedinIcon, SendIcon } from '../../components/Icon';

const cx = classNames.bind(styles);

function Footer() {
  const { t } = useTranslation();
  const [emailValue, setEmailValue] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const emailRegex = useMemo(() => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, []);

  const handleValidationEmail = useCallback(() => {
    if (emailRegex.test(emailValue)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [emailValue, emailRegex]);

  return (
    <footer className={cx('footer')}>
      <div className={cx('container gx-5')}>
        <div className={cx('footer__inner')}>
          <div className={cx('footer__row')}>
            <div className={cx('footer__col')}>
              <Logo />

              <p className={cx('footer__desc')}>{t('footer.desc01')}</p>

              <p className={cx('footer__help-text')}>{t('footer.desc01')}</p>
              <form action="" className={cx('footer__form')}>
                <input
                  value={emailValue}
                  onChange={(e) => {
                    setEmailValue(e.target.value);
                    handleValidationEmail();
                  }}
                  className={cx('footer__input')}
                  placeholder="Email address"
                />
                <Button disabled={isDisabled} primary className={cx('footer__form-btn')} rightIcon={<SendIcon />}>
                  SEND
                </Button>
              </form>
            </div>

            <div className={cx('footer__col')}>
              <h3 className={cx('footer__heading')}>{t('footer.store.title01')}</h3>
              <ul className={cx('footer__list')}>
                <li className={cx('footer__item')}>
                  <a href="#!" className={cx('footer__link')}>
                    {t('footer.store.title02')}
                  </a>
                </li>
                <li className={cx('footer__item')}>
                  <a href="#!" className={cx('footer__link')}>
                    {t('footer.store.title03')}
                  </a>
                </li>
                <li className={cx('footer__item')}>
                  <a href="#!" className={cx('footer__link')}>
                    {t('footer.store.title04')}
                  </a>
                </li>
                <li className={cx('footer__item')}>
                  <a href="#!" className={cx('footer__link')}>
                    {t('footer.store.title05')}
                  </a>
                </li>
              </ul>
            </div>

            <div className={cx('footer__col')}>
              <h3 className={cx('footer__heading')}>{t('footer.help.title01')}</h3>
              <ul className={cx('footer__list')}>
                <li className={cx('footer__item')}>
                  <a href="#!" className={cx('footer__link')}>
                    {t('footer.help.title02')}
                  </a>
                </li>
                <li className={cx('footer__item')}>
                  <a href="#!" className={cx('footer__link')}>
                    {t('footer.help.title03')}
                  </a>
                </li>
              </ul>
            </div>

            <div className={cx('footer__col')}>
              <h3 className={cx('footer__heading')}>{t('footer.company.title01')}</h3>
              <ul className={cx('footer__list')}>
                <li className={cx('footer__item')}>
                  <a href="#!" className={cx('footer__link')}>
                    {t('footer.company.title02')}
                  </a>
                </li>
                <li className={cx('footer__item')}>
                  <a href="#!" className={cx('footer__link')}>
                    {t('footer.company.title03')}
                  </a>
                </li>
                <li className={cx('footer__item')}>
                  <a href="#!" className={cx('footer__link')}>
                    {t('footer.company.title04')}
                  </a>
                </li>
              </ul>
            </div>

            <div className={cx('footer__col')}>
              <h3 className={cx('footer__heading')}>{t('footer.contact.title01')}</h3>
              <ul className={cx('footer__list')}>
                <li className={cx('footer__item')}>
                  <p className={cx('footer__label')}>{t('footer.contact.email')}</p>
                  <a href="mailto:yeusangtao96@gmail.com" className={cx('footer__link')}>
                    Lenghia0183@gmail.com
                  </a>
                </li>
                <li className={cx('footer__item')}>
                  <p className={cx('footer__label')}>{t('footer.contact.phone')}</p>
                  <a href="tel:+84982155291" className={cx('footer__link')}>
                    +84 0369 067 607
                  </a>
                </li>
                <li className={cx('footer__item')}>
                  <p className={cx('footer__label')}>{t('footer.contact.address')}</p>
                  <p className={cx('footer__text')}>Liên Phương, Thường Tín, Hà Nội</p>
                </li>
                <li className={cx('footer__item')}>
                  <p className={cx('footer__label')}>{t('footer.contact.open-time')}</p>
                  <p className={cx('footer__text')}>Thứ Hai - Thứ Bảy 08:00 sáng - 06:00 chiều</p>
                </li>
              </ul>
            </div>
          </div>

          <div className={cx('footer__bottom')}>
            <p className={cx('footer__copyright')}>© 2021 - 2025 Grocery Mart. All rights reserved.</p>

            <div className={cx('footer__socials')}>
              <a href="#!" className={cx('footer__social-link', 'footer__social-link--facebook')}>
                <FacebookIcon />
              </a>
              <a href="#!" className={cx('footer__social-link', 'footer__social-link--instagram')}>
                <InstagramIcon />
              </a>
              <a href="#!" className={cx('footer__social-link', 'footer__social-link--linkedin')}>
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
