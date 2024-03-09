import classNames from 'classnames/bind';
import styles from './ProductDescription.module.scss';

const cx = classNames.bind(styles);

function ProductDescription() {
  return (
    <div className={cx('wrapper')}>
      <span className={cx('detail-label')}>CHI TIẾT SẢN PHẨM</span>
      <table>
        <tbody>
          <tr>
            <th>Danh mục</th>
            <td>Coffe</td>
          </tr>

          <tr>
            <th>Hạn sử dụng</th>
            <td>36 Tháng</td>
          </tr>

          <tr>
            <th>Số sản phẩm còn lại</th>
            <td>191</td>
          </tr>

          <tr>
            <th>Thương hiệu</th>
            <td>Trung nguyên</td>
          </tr>
        </tbody>
      </table>
      <div className={cx('separate')}></div>
      <span className={cx('detail-label')}>MÔ TẢ SẢN PHẨM</span>

      <p className={cx('desc')}>
        Sáp dưỡng ẩm Vaseline với được chiết xuất từ mỡ khoáng tinh khiết 100% - tức là loại mỡ khoáng đã được thanh lọc
        nên rất an toàn cho mọi loại da, có thể sử dụng cho đôi môi nhạy cảm. Chỉ cần 1 lớp mỏng để qua đêm bạn đã có
        được đôi môi mềm mượt, căng mọng đầy bất ngờ.
      </p>

      <span className={cx('sub-label')}> Thông tin thương hiệu</span>
      <p className={cx('desc')}>
        VASELINE là thương hiệu trực thuộc tập đoàn Unilever - một trong những tập đoàn sản xuất hàng tiêu dùng, mỹ
        phẩm, sản phẩm chăm sóc sức khỏe,… lớn nhất thế giới. Tại Việt Nam, bên cạnh VASELINE, Unilever còn nổi tiếng
        với những thương hiệu lớn như: Clear, Dove, Close-up, Omo, Surf và nhiều sản phẩm chất lượng cao khác,... Với
        hơn 500 công ty tại 90 quốc gia trên thế giới, Unilever luôn mang lại những sản phẩm tốt nhất cho người tiêu
        dùng.
      </p>

      <span className={cx('sub-label')}> Hướng dẫn sử dụng</span>

      <p className={cx('desc')}>
        Để pha cà phê bằng phin, bạn đơn giản chỉ cần đặt cà phê vào phin, đổ nước sôi lên và đợi khoảng 4-5 phút. Sau
        đó, đổ nước còn lại vào phin và thêm đường hoặc sữa nếu bạn thích hương vị ngọt ngào.
      </p>
    </div>
  );
}

export default ProductDescription;
