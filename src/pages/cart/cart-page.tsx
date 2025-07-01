import { useState } from 'react';
import { useCartStore } from '../../store/use-cart-store';
import { Card, Empty, Image, message, Button, Modal, Input, Form } from 'antd';
import { MdClear, MdAdd, MdRemove } from "react-icons/md";
import style from './cart-style.module.css';

const CartPage = () => {
    const cart = useCartStore(state => state.cart);
    const removeFromCart = useCartStore(state => state.removeFromCart);
    const clearCart = useCartStore(state => state.clearCart);
    const increaseQuantity = useCartStore(state => state.increaseQuantity);
    const decreaseQuantity = useCartStore(state => state.decreaseQuantity);
    const [form] = Form.useForm();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const handleRemove = (id: number) => {
        removeFromCart(id);
        messageApi.success('Товар удалён!');
    };

    const handleClearCart = () => {
        clearCart();
        messageApi.success('Корзина очищена!');
    };

    const handleIncrease = (id: number) => {
        increaseQuantity(id);
    };

    const handleDecrease = (id: number) => {
        decreaseQuantity(id);
    };

    const handleOrder = () => {
        setIsModalOpen(true);
    };

    const onFinish = (values: any) => {
        console.log('Данные заказа:', values);

        clearCart();
        setIsModalOpen(false);
        form.resetFields();

        messageApi.success('Заказ успешно оформлен!');
    };


    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (cart.length === 0) {
        return (
            <div className="container">
                {contextHolder}
                <Empty description="Корзина пуста!" className="not-found-block" />
            </div>
        );
    }

    return (
        <div className="container">
            {contextHolder}
            <h2 className={style.cartTitle}>Ваша корзина</h2>
            <div className={style.cartBlock}>
                {cart.map(item => (
                    <Card key={item.id}>
                        <div className={style.innerCartBlock}>
                            <div>
                                <Image width={100} src={item.images?.[0]} alt={item.title} />
                                <p className={style.allPrice}>
                                    Общая сумма: ${Math.round(item.price * item.quantity).toLocaleString()}
                                </p>
                            </div>
                            <div>
                                <h3>{item.title}</h3>
                                <div className={style.quantityControl}>
                                    <Button onClick={() => handleDecrease(item.id)} icon={<MdRemove />} />
                                    <span className={style.quantity}>{item.quantity}</span>
                                    <Button onClick={() => handleIncrease(item.id)} icon={<MdAdd />} />
                                </div>
                            </div>
                            <p className={style.price}>
                                Цена за штуку: ${Math.round(item.price).toLocaleString()}
                            </p>
                            <button className={style.clearBtn} onClick={() => handleRemove(item.id)}>
                                <MdClear />
                            </button>
                        </div>
                    </Card>
                ))}
            </div>

            <div className={style.totalBlock}>
                <div>
                    <h3>Итого: ${Math.round(total).toLocaleString()}</h3>
                    <button onClick={handleOrder}>Оформить заказ</button>
                </div>
                <button onClick={handleClearCart}>Очистить корзину</button>
            </div>
            <Modal
                title="Оформление заказа"
                open={isModalOpen}
                onOk={() => form.submit()}
                onCancel={() => setIsModalOpen(false)}
                okText="Подтвердить"
                cancelText="Отмена"
            >
                <div className={style.modalContent}>
                    {cart.map(item => (
                        <div key={item.id} className={style.modalItem}>
                            <img
                                src={item.images[0]}
                                alt={item.title}
                                className={style.modalImage}
                            />
                            <div>
                                <div className={style.modalTitle}>{item.title}</div>
                                <div className={style.modalDetails}>
                                    {item.quantity} × ${Math.round(item.price)} = ${Math.round(item.quantity * item.price).toLocaleString()}
                                </div>
                            </div>
                        </div>
                    ))}
                    <Form
                        form={form}
                        layout="vertical"
                        style={{ marginTop: '1.5rem' }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label="Имя"
                            name="name"
                            rules={[{ required: true, message: 'Пожалуйста, введите имя!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Телефон"
                            name="phone"
                            rules={[{ required: true, message: 'Введите номер телефона!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Адрес"
                            name="address"
                            rules={[{ required: true, message: 'Укажите адрес доставки!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item label="Доп. информация" name="info">
                            <Input.TextArea rows={3} />
                        </Form.Item>
                    </Form>
                </div>
                <h3 className={style.modalTotal}>Итого: ${Math.round(total).toLocaleString()}</h3>
            </Modal>



        </div>
    );
};

export default CartPage;