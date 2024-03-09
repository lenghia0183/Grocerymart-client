import classNames from 'classnames/bind';
import styles from './CustomReviewList.module.scss';
// import { StartIcon } from '../../Icon';
import images from '../../assets/images';
import CustomReviewCard from './CustomReviewCard';
const cx = classNames.bind(styles);

const data = [
  {
    name: 'Jakir Hussen',
    comment: 'Great product, I love this Coffee Beans ',
    review: '(3.5) Review',
    avatar: images.avatar1,
  },

  {
    name: 'Jubed Ahmed',
    comment: 'Awesome Coffee, I love this Coffee Beans ',
    review: '(4.5) Review',
    avatar: images.avatar2,
  },

  {
    name: 'Delwar Hussain',
    comment: 'Great product, I like this Coffee Beans ',
    review: '(5.0) Review',
    avatar: images.avatar3,
  },
];

function CustomReviewList() {
  return (
    <div>
      <div className={cx('review-list-tilte')}>What our customers are saying</div>
      <div className={cx('row g-5')}>
        {data.map((item, index) => {
          return (
            <div className={cx('col-md-4 col-sm-12')}>
              <CustomReviewCard key={index} data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CustomReviewList;
