import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Logo from '../../components/Logo';
import { PasswordIcon, EmailIcon, GmailIcon } from '../../components/Icon';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

const cx = classNames.bind(styles);

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isShowPassword, setIsShowPassword] = useState(false);

  const inputRefs = {
    email: useRef(null),
    password: useRef(null),
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
        break;
      case 'password':
        setPassword(value);
        setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
        break;
      default:
        break;
    }
  };

  const validateInput = () => {
    let newErrors = {};
    const email = inputRefs.email.current.value;
    const password = inputRefs.password.current.value;
    const passwordRegex = /^(?=.*[!@#$%^&*])(?=.{6,})/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '') {
      //   newErrors = { ...newErrors, email: '' };
    } else {
      if (!emailRegex.test(email)) {
        newErrors = { ...newErrors, email: 'Email không hợp lệ' };
      } else {
        newErrors = { ...newErrors, email: '' };
      }
    }

    if (password === '') {
      //   newErrors = { ...newErrors, password: '' };
    } else {
      if (!passwordRegex.test(password)) {
        newErrors = { ...newErrors, password: 'Password phải có ít nhất 6 ký tự và chứa ít nhất một ký tự đặc biệt' };
      } else {
        newErrors = { ...newErrors, password: '' };
      }
    }

    setErrors(newErrors);
  };

  const handleLogin = () => {
    let isSignUp = true;
    validateInput();
    if (email === '') {
      isSignUp = false;
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Email không được để trống' }));
    }
    if (password === '') {
      isSignUp = false;
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password không được để trống' }));
    }
    if (isSignUp === false) {
      return;
    }

    if (Object.values(errors).every((error) => error === '')) {
      isSignUp = true;
    } else {
      isSignUp = false;
    }

    if (isSignUp === true) {
      alert('danh nhap thanh cong');
    }
  };

  return (
    <div className={cx('wrapper')}>
      <Link to="/">
        <Logo className={cx('logo')} />
      </Link>
      <p className={cx('title')}>Hello Again!</p>
      <p className={cx('right-desc')}>
        Welcome back to sign in. As a returning customer, you have access to your previously saved all information.
      </p>
      <form className={cx('form')}>
        <div>
          <div className={cx('form-group', { 'form-error': errors.email })}>
            <input
              id="email"
              type="text"
              placeholder="Email"
              name="email"
              ref={inputRefs.email}
              value={email}
              onChange={(e) => {
                handleInputChange(e);
                validateInput();
              }}
              onBlur={validateInput}
            ></input>
            <label htmlFor="email">Email</label>
            <EmailIcon className={cx('icon')} />
          </div>
          {errors.email && <p className={cx('error-message')}>{errors.email}</p>}
        </div>

        <div>
          <div className={cx('form-group', { 'form-error': errors.password })}>
            <input
              id="password"
              type={isShowPassword ? 'text' : 'password'}
              placeholder="password"
              name="password"
              ref={inputRefs.password}
              value={password}
              onChange={(e) => {
                handleInputChange(e);
                validateInput();
              }}
              onBlur={validateInput}
            ></input>
            <label htmlFor="password">Password</label>
            <PasswordIcon className={cx('icon')} />
          </div>
          {errors.password && <p className={cx('error-message')}>{errors.password}</p>}
        </div>
      </form>

      <div className={cx('option-group')}>
        <div className={cx('option-left')}>
          <label htmlFor="showPassword">
            <input
              type="checkbox"
              className={cx('show-password-checkbox')}
              id="showPassword"
              onClick={() => {
                if (isShowPassword === false) {
                  setIsShowPassword(true);
                } else {
                  setIsShowPassword(false);
                }
              }}
            />
            Hiển thị mật khẩu
          </label>
        </div>

        <div className={cx('option-right')}>
          <Link href="#">Recovery Password</Link>
        </div>
      </div>

      <div className={cx('buttons')}>
        <Button
          className={cx('sign-up-btn')}
          large
          onClick={() => {
            handleLogin();
          }}
        >
          Login
        </Button>
        <Button className={cx('gmail-btn')} leftIcon={<GmailIcon className={cx('gmail-icon')} />} large outline>
          Sign in with Gmail
        </Button>
      </div>

      <div className={cx('register-section')}>
        <span className={cx('no-account')}>Don’t have an account yet?</span>
        <Link to="/sign-up" className={cx('sign-in-link')}>
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Login;
