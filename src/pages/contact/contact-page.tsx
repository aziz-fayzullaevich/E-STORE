import { Input } from 'antd';
import style from './contact-style.module.css';
import TextArea from 'antd/es/input/TextArea';
import { Link } from 'react-router-dom';
import { MdOutlinePhone, MdOutlineMailOutline } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";

const ContactPage = () => {
    return (
        <div className="container">
            <div className={style.mainBlock}>
                <h3 className={style.title}>Свяжитесь с нами</h3>
                <div className={style.contactBlock}>
                    <div className={style.leftBlock}>
                        <Input
                            placeholder='Ваш имя'
                        />
                        <Input
                            placeholder='Ваш e-mail'
                            type='email'
                        />
                        <TextArea
                            showCount
                            maxLength={200}
                            placeholder="Сооющение"
                            style={{ height: 120, resize: 'none' }}
                        />
                        <button>Отправить</button>
                    </div>
                    <div className={style.rightBlock}>
                        <div className={style.callInfo}>
                            <div>
                                <MdOutlinePhone className={style.icon} />
                                <Link to='+998999876543'>+(998)99-987-65-43</Link>
                            </div>
                            <div>
                                <MdOutlineMailOutline className={style.icon} />
                                <Link to='#'>e_store@gmail.com</Link>
                            </div>
                        </div>
                        <div className={style.instaInfo}>
                            <IoLogoInstagram className={style.icon} />
                            <span>INSTAGRAM</span>
                        </div>
                        <p>
                            Торговый центр «Мега Нукус» по адресу Республика Каракалпакстан, Нукус, улица Ерназара Алакоза, 60A.
                        </p>
                    </div>
                </div>
                <h3 className={style.title}>Адрес нашего торгового центра</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.92547062907!2d59.600137175976236!3d42.47187377118269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dd9b6839364a37%3A0x10663f8b765156fe!2z0KLQvtGA0LPQvtCy0L4t0YDQsNC30LLQu9C10LrQsNGC0LXQu9GM0L3Ri9C5INGG0LXQvdGC0YAgItCc0LXQs9CwINCd0YPQutGD0YEi!5e0!3m2!1sru!2s!4v1751559146017!5m2!1sru!2s" width="100%" height="450"  ></iframe>
            </div>
        </div>
    )
}

export default ContactPage;