import { GiReceiveMoney, GiSettingsKnobs } from "react-icons/gi";
import { FaCartFlatbedSuitcase, FaRegClock } from "react-icons/fa6";
import { HiCheckCircle } from "react-icons/hi2";
import style from './about-style.module.css';

const AboutPage = () => {
    return (
        <div className="container">
            <div className={style.mainBlock}>
                <div className={style.descriptionBlock}>
                    <div className={style.leftBlock}>
                        <h2 className={style.title}>О магазине</h2>
                        <h2 className={style.titleForDesc}>
                            Интернет-магазин «E-Store»: купите хорошую товар в один клик!
                        </h2>
                        <p className={style.descForDesc}>
                            Уникальный формат интернет-магазина позволит вам купить лучшую
                            товар крупнейших фабрик максимально быстро и по
                            выгодной цене! Мы благодарим за доверие более десятка производителей, которые дали
                            нам возможность представлять лучшие образцы их продукции в
                            интернет-пространстве. Прямые договоры на поставку
                            товары с фирмы обеспечивают наиболее привлекательные условия для
                            наших покупателей.
                        </p>
                    </div>
                    <img src="/images/img-2.jpg" alt="image" />
                </div>
                <h1 className={style.mainTitle}>Покупайте с выгодой!</h1>
                <div className={style.infoBlock}>
                    <div className={style.infoBox}>
                        <GiReceiveMoney className={style.infoIcon} />
                        <div>
                            <h3 className={style.infoTite}>Лучшая цена</h3>
                            <p className={style.descInfo}>
                                Предлагаем близкие к оптовым цены, которые дают возможность приобретать товар дешевле, чем в розничных магазинах и шоу-румах.
                            </p>
                        </div>
                    </div>
                    <div className={style.infoBox}>
                        <FaCartFlatbedSuitcase className={style.infoIcon} />
                        <div>
                            <h3 className={style.infoTite}>Прямые поставки</h3>
                            <p className={style.descInfo}>
                                С ведущих маркетах уменьшают срок
                                выполнения вашего заказа, даже если речь идет об изготовлении предметов по
                                индивидуальному проекту.

                            </p>
                        </div>
                    </div>
                    <div className={style.infoBox}>
                        <FaRegClock className={style.infoIcon} />
                        <div>
                            <h3 className={style.infoTite}>Экономие времени</h3>
                            <p className={style.descInfo}>
                                Не нашли оптимальный вариант или нет
                                времени на поиски? Оставьте онлайн-заявку с критериями, и мы предложим вам
                                несколько достойных образцов.
                            </p>
                        </div>
                    </div>
                    <div className={style.infoBox}>
                        <GiSettingsKnobs className={style.infoIcon} />
                        <div>
                            <h3 className={style.infoTite}>Изготовление на заказ</h3>
                            <p className={style.descInfo}>
                                Принимаем заявки на изготовление
                                продуктов по персональному дизайн-проекту от покупателей.
                                Просим быть готовыми к авансированной оплате персональных заказов.
                            </p>
                        </div>
                    </div>
                </div>
                <h1 className={style.mainTitle}>Мы поможем сэкономить время, силы и деньги!</h1>
                <div className={style.infoCheckBlock}>
                    <div className={style.infoBox}>
                        <HiCheckCircle className={style.infoIconCheck} />
                        <div>
                            <h3 className={style.infoTite}>Время</h3>
                            <p className={style.descInfo}>
                                Примем вашу заявку в кротчайшие сроки. При необходимости
                                подберем для вас достойные варианты по заданным критериям.
                            </p>
                        </div>
                    </div>
                    <div className={style.infoBox}>
                        <HiCheckCircle className={style.infoIconCheck} />
                        <div>
                            <h3 className={style.infoTite}>Силы</h3>
                            <p className={style.descInfo}>
                                Закупим оптом или закажем на фабрике, избавив от длительных
                                обсуждений заказа с исполнителем. Курируем все этапы работы над
                                заказом.
                            </p>
                        </div>
                    </div>
                    <div className={style.infoBox}>
                        <HiCheckCircle className={style.infoIconCheck} />
                        <div>
                            <h3 className={style.infoTite}>Деньги</h3>
                            <p className={style.descInfo}>
                                Вы точно купите мебель дешевле, чем в розницу.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;