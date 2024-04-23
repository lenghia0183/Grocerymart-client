import className from 'classnames/bind';
import styles from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';
import { ArrowRight } from '../Icon';

const cx = className.bind(styles);

function Pagination({ onPageChange, totalPages = 10, currentPage = 1 }) {
  const handlePageChange = (e) => {
    onPageChange(e.selected + 1);
  };
  return (
    <ReactPaginate
      previousLabel={<ArrowRight className={cx('arrow', 'prev-arrow')} />}
      nextLabel={<ArrowRight className={cx('arrow', 'next-arrow')} />}
      pageClassName={cx('page-item')}
      pageLinkClassName={cx('page-link')}
      previousClassName={cx('page-item')}
      previousLinkClassName={cx('page-link')}
      nextClassName={cx('page-item')}
      nextLinkClassName={cx('page-link')}
      breakLabel="..."
      breakClassName={cx('page-item')}
      breakLinkClassName={cx('page-link')}
      pageCount={totalPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      onPageChange={handlePageChange}
      containerClassName={cx('pagination')}
      activeClassName={cx('active')}
      activeLinkClassName={cx('active-link')}
      forcePage={currentPage - 1}
    />
  );
}

export default Pagination;
