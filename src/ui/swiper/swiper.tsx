import style from './swipe-style.module.css';
import { Carousel } from "antd";

export const Swiper = () => {
    return (
        <Carousel autoplay autoplaySpeed={2000}>
            <div className={style.contentStyle}>
                <img src="/swiper/swiper-1.jpg" alt="swiper-image" />
            </div>
            <div className={style.contentStyle}>
                <img src="/swiper/swiper-2.jpg" alt="swiper-image" />
            </div>
            <div className={style.contentStyle}>
                <img src="/swiper/swiper-3.jpg" alt="swiper-image" />
            </div>
        </Carousel>
    )
}