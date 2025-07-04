import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSingleProductStore } from '../../store/use-product-id-store';
import { Image, Spin, Rate } from 'antd';
import style from './product-id.module.css';

const ProductID = () => {
    const { id } = useParams();
    const { product, loading, error, fetchProductById } = useSingleProductStore();

    useEffect(() => {
        if (id) {
            fetchProductById(id);
        }
    }, [id]);

    if (loading) return <Spin tip="Загрузка..." size="large" />;
    if (error) return <div>{error}</div>;
    if (!product) return null;

    return (
        <div className='container'>
            <div className={style.mainBlock}>
                <h2>{product.title}</h2>
                <div>
                    <Image src={product.images[0]} width={300} />
                    <div className={style.info}>
                        <p>{product.description}</p>
                        <div>
                            <p>Категория: {product.category}</p>
                            <p>Бренд: {product.brand}</p>
                            <Rate value={product.rating} disabled />
                        </div>
                        <p>Цена: ${product.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductID;