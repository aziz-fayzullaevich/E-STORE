import { useEffect } from 'react';
import { useProductsStore } from '../../store/use-fetch-products';
import { Card, Image, message, Skeleton } from 'antd';
import { MdFavoriteBorder, MdOutlineAddShoppingCart } from "react-icons/md";
import style from './product-style.module.css';

const Product = () => {
    const { products, loading, error, fetchProducts } = useProductsStore();
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        if (products.length === 0) {
            fetchProducts()
        }
    }, []);

    useEffect(() => {
        if (error) {
            messageApi.error(error);
        }
    }, [error]);

    if (loading) return <Skeleton />;


    return (
        <div className={style.mainBlock}>
            {contextHolder}
            <h1>Продукты</h1>
            <div className={style.cardGrid}>
                {products.map(product => (
                    <Card
                        key={product.id}
                        hoverable
                        cover={
                            <div className={style.innerCard}>
                                <span className={style.productBrand}>{product.brand}</span>
                                <MdFavoriteBorder className={style.favoriteIcon} />
                                <Image src={product.images[0]} alt={product.title} />
                                <h3 className={style.productTitle}>{product.title}</h3>
                                <p className={style.productDesc}>{product.description}</p>
                                <div className={style.productRating}>
                                    <span>{product.rating}</span>
                                    <span>${product.price}</span>
                                </div>
                                <button className={style.btn}>
                                    <MdOutlineAddShoppingCart />
                                    <span>Добавить в корзину</span>
                                </button>
                            </div>
                        }
                    >
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Product