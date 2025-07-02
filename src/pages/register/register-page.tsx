import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack, IoIosLogIn } from "react-icons/io";
import style from './register-style.module.css';
import { ROUTES } from "../../const/routes";

const RegisterPage = () => {
    const navigate = useNavigate();

    const onFinish = (values: string[]) => {
        console.log('Данные формы:', values);
        message.success('Вы успешно зарегистрировались!');
        navigate('/');
    };

    return (
        <div className={style.container}>
            <Form
                name="register"
                className={style.formBlock}
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
            >
                <h2 className={style.title}>Регистрация</h2>

                <Form.Item
                    label="Имя"
                    name="username"
                    rules={[{ required: true, message: 'Введите ваше имя!' }]}
                >
                    <Input className={style.input} />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: 'Введите email!' },
                        { type: 'email', message: 'Неверный формат email!' },
                    ]}
                >
                    <Input className={style.input} />
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[{ required: true, message: 'Введите пароль!' }]}
                >
                    <Input.Password className={style.input} />
                </Form.Item>

                <Form.Item
                    label="Подтвердите пароль"
                    name="confirm"
                    dependencies={['password']}
                    rules={[
                        { required: true, message: 'Подтвердите пароль!' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Пароли не совпадают!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password className={style.input} />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className={style.button}>
                        Зарегистрироваться
                    </Button>
                </Form.Item>
                <div className={style.links}>
                    <Link to={ROUTES.HOME}>
                        <IoIosArrowBack />
                        Главная
                    </Link>

                    <Link to="">
                        Войти
                        <IoIosLogIn />
                    </Link>
                </div>
            </Form>
        </div>
    );
};

export default RegisterPage;
