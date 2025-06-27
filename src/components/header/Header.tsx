import style from './header-style.module.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../const/Routes';
import { FaPhone, FaCaravan } from "react-icons/fa6";
import { MdFavoriteBorder, MdOutlineShoppingCart, MdLogin  } from "react-icons/md";
import { Input } from 'antd';

const Header = () => {
    return (
        <header>
            <div className={style.topHead}>
                <div className="container">
                    <div className={style.mainTopHead}>
                        <div className={style.topLeftHead}>
                            <Link to={ROUTES.HOME}>Главная</Link>
                            <Link to={ROUTES.ABOUT}>О нас</Link>
                            <Link to={ROUTES.CONTACTS}>Контакты</Link>
                        </div>
                        <div className={style.topRightHead}>
                            <Link to='+998999876543'>
                                <FaPhone />
                                <span>+(998) 99-987-65-43</span>
                            </Link>
                            <Link to={ROUTES.CART}>
                                <FaCaravan />
                                <span>Доставка</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.bottomHead}>
                <div className="container">
                    <div className={style.mainBottomHead}>
                        <Link to={ROUTES.HOME}>
                            <img src="/icon.ico" alt="logo" />
                        </Link>
                        <Input.Search placeholder="Поиск товаров" variant="filled" />
                        <ul className={style.navbars}>
                            <li>
                                <Link to={ROUTES.FAVORITES}>
                                    <MdFavoriteBorder />
                                </Link>
                            </li>
                            <li>
                                <Link to={ROUTES.CART}>
                                    <MdOutlineShoppingCart />
                                </Link>
                            </li>
                            <li>
                                <Link to={ROUTES.REGISTER}>
                                    <MdLogin  />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;