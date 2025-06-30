import { useFavoriteStore } from '../../store/use-favorite-store';
import { Empty, Card, Image, Flex, Rate, message } from 'antd';
import style from './favorite-style.module.css';
import { MdOutlineAddShoppingCart, MdFavorite } from "react-icons/md";
import { useCartStore } from '../../store/use-cart-store';

const Favorite = () => {
  const favorite = useFavoriteStore(state => state.favorite);
  const toggleFavorite = useFavoriteStore(state => state.toggleFavorite);
  const isFavorite = useFavoriteStore(state => state.isFavorite);
  const addToCart = useCartStore(state => state.addToCart);

  const [messageApi, contextHolder] = message.useMessage();

  const handleAddToCart = (product: typeof favorite[0]) => {
    addToCart({ ...product, quantity: 1 });
    messageApi.success(`${product.title} добавлен в корзину!`);
  };

  const handleToggleFavorite = (product: typeof favorite[0]) => {
    toggleFavorite(product);
    const action = isFavorite(product.id) ? 'добавлен в избранное' : 'удалён из избранного';
    messageApi.success(`Товар "${product.title}" ${action}`);
  };

  if (favorite.length === 0) {
    return (
      <div className={style.container}>
        {contextHolder}
        <Empty
          description="Добавьте ваш любимый продукт!"
          className={style.notFound}
        />
      </div>
    );
  }

  return (
    <div className='container'>
      {contextHolder}
      <div className={style.mainBlock}>
        <h2 className={style.title}>Избранные товары</h2>
        <div className={style.cardGrid}>
          {favorite.map(product => (
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
                    <MdFavorite style={{ color: isFavorite(product.id) ? 'red' : 'gray' }} />
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
