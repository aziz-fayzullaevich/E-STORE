import { Link } from 'react-router-dom';
import style from './footer-style.module.css';
import { ROUTES } from '../../const/routes';
import { FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={style.mainFooterBlock}>
          <div className={style.footerLeftBlock}>
            <h2 className={style.title}>Навигации</h2>
            <div className={style.navbars}>
              <Link to={ROUTES.HOME}>Главная</Link>
              <Link to={ROUTES.PRODUCT}>Продукты</Link>
              <Link to={ROUTES.CATALOG}>Каталог</Link>
              <Link to={ROUTES.CART}>Корзина</Link>
              <Link to={ROUTES.ABOUT}>О нас</Link>
              <Link to={ROUTES.CONTACTS}> Контакты</Link>
            </div>
          </div>
          <div className={style.footerRightBlock}>
            <div className={style.logo}>
              <img src="/icon.ico" alt="logo" />

            </div>
            <div className={style.socialsBlock}>
              <Link to='+998999876543'>
                <FaPhoneAlt />
                <span>+(998) 99-987-65-43</span>
              </Link>
              <Link to='#'>
                <FaInstagram />
                <span>INSTAGRAM</span>
              </Link>
              <Link to='#'>
                <MdEmail />
                <span>e_store@gmail.com</span>
              </Link>
            </div>
          </div>
        </div >
      </div >
    </footer >
  )
}

export default Footer