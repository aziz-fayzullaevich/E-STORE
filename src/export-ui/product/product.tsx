import { useEffect } from 'react';
import { useProductsStore } from '../../store/use-fetch-products';
import { useCartStore } from '../../store/use-cart-store';
import { Card, Image, message, Skeleton, Flex, Rate } from 'antd';
import { MdFavoriteBorder, MdOutlineAddShoppingCart, MdFavorite } from "react-icons/md";
import { useFavoriteStore } from '../../store/use-favorite-store';
import style from './product-style.module.css';

export const Product = () => {
  const { products, loading, error, selectedCategory } = useProductsStore();
  const addToCart = useCartStore(state => state.addToCart);
  const { toggleFavorite, isFavorite } = useFavoriteStore();

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (error) {
      messageApi.error(error);
    }
  }, [error]);

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({ ...product, quantity: 1 });
    messageApi.success(`${product.title} добавлен в корзину!`);
  };

  const handleToggleFavorite = (product: typeof products[0]) => {
    toggleFavorite(product);
    const action = isFavorite(product.id) ? 'добавлен в избранное' : 'удалён из избранного';
    messageApi.success(`Товар "${product.title}" ${action}`);
  };

  return (
    <div className={style.mainBlock}>
      {contextHolder}
      <h1>{selectedCategory}</h1>
      <div className={style.cardGrid}>
        {loading ? (
          Array.from({ length: 10 }).map((_, index) => (
            <Card key={index} className={style.skeletonCard}>
              <Skeleton.Image className={style.skeletonImage} active />
              <Skeleton active paragraph={{ rows: 3 }} />
            </Card>
          ))
        ) : (
          products.map(product => (
            <Card
              key={product.id}
              hoverable
              cover={
                <div className={style.innerCard}>
                  <span className={style.productBrand}>{product.brand}</span>
                  <div
                    className={style.favoriteIcon}
                    onClick={() => handleToggleFavorite(product)}
                  >
                    {isFavorite(product.id) ? (
                      <MdFavorite style={{ color: 'red' }} />
                    ) : (
                      <MdFavoriteBorder />
                    )}
                  </div>
                  <Image src={product.images[0]} alt={product.title} />
                  <h3 className={style.productTitle}>{product.title}</h3>
                  <p className={style.productDesc}>{product.description}</p>
                  <div className={style.productRating}>
                    <Flex gap="middle" vertical className={style.ratingFlex}>
                      <Rate value={product.rating} disabled />
                      <span>{product.rating}</span>
                    </Flex>
                    <span>${product.price}</span>
                  </div>
                  <button className={style.btn} onClick={() => handleAddToCart(product)}>
                    <MdOutlineAddShoppingCart />
                    <span>Добавить в корзину</span>
                  </button>
                </div>
              }
            />
          ))
        )}
      </div>
    </div>
  );
};