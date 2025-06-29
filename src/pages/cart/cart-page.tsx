import { useCartStore } from '../../store/use-cart-store';
import { Card, Empty, Image, message } from 'antd';
import { MdClear } from "react-icons/md";
import style from './cart-style.module.css';

const CartPage = () => {
    const cart = useCartStore(state => state.cart);
    const removeFromCart = useCartStore(state => state.removeFromCart);

      const handleRemove = (id: number) => {
        removeFromCart(id);
        message.success('Товар удалён!');
    };

    return (
        <div className='container'>
            <h2 className={style.cartTitle}>Ваша корзина</h2>
            {
                cart.length === 0 ? (
                    <div className="container">
                        <Empty
                            description='Корзина пусто!'
                            className='not-found-block'
                        />
                    </div>
                ) : (
                    cart.map(item => (
                        <div className="container">
                            <div className={style.cartBlock}>
                                <Card key={item.id}>
                                    <div className={style.innerCartBlock}>
                                        <div>
                                            <Image width={100} src={item.images?.[0]} alt={item.title} />
                                            <p className={style.allPrice}>Общая сумма: ${item.price * item.quantity}</p>
                                        </div>
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p className={style.quantity}>Количество: {item.quantity}</p>
                                        </div>
                                        <p className={style.price}>Цена: ${item.price}</p>
                                        <button
                                            className={style.clearBtn}
                                            onClick={() => handleRemove(item.id)}
                                        ><MdClear /></button>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default CartPage;