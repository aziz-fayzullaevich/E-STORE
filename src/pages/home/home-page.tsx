import {Swiper} from '../../ui/swiper/swiper';
import {Categories} from '../../components/categories/categories';
import style from './home-style.module.css';
import {Product} from '../../export-ui/product/product';

const HomePage = () => {
  return (
    <div className="container">
      <div className={style.mainBlock}>
        <Swiper />
      </div>
      <Categories />
      <div>
        <Product />
      </div>
    </div>
  );
};

export default HomePage;
