import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from 'antd';
import { TwitterOutlined } from '@ant-design/icons';

import useDocumentTitle from '../../hooks/useDocumentTitle';

import './SignIn.scss';

function SignIn() {
    useDocumentTitle('Войти в Твиттер / Твиттер');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const {
            currentTarget: { name, value },
        } = event;

        if (name === 'login') {
            setLogin(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleLoginFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        console.log({ login, password });
    };

    const isDisabled = !login || !password;

    return (
        <main className="main">
            <div className="login-page">
                <div style={{ maxWidth: '600px' }}>
                    <div style={{ textAlign: 'center' }}>
                        <TwitterOutlined style={{ color: '#1da1f2', fontSize: 39 }} />
                    </div>

                    <h1 className="login-page__title">Войти в Твиттер</h1>

                    <form className="login-form" onSubmit={handleLoginFormSubmit}>
                        <div>
                            <label htmlFor="login">
                                Номер телефона, адрес электронной почты или имя пользователя
                            </label>
                            <Input
                                name="login"
                                id="login"
                                type="text"
                                size="large"
                                value={login}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Пароль</label>
                            <Input
                                name="password"
                                id="password"
                                type="text"
                                size="large"
                                value={password}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <Button
                                type="primary"
                                htmlType="submit"
                                size="large"
                                block
                                disabled={isDisabled}
                            >
                                Войти
                            </Button>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div>
                                <Link to="#">Забыли пароль?</Link>
                                <span style={{ padding: '0 5px 0 5px' }}>·</span>
                                <Link to="/signup">Зарегистрироваться в Твиттере</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default SignIn;
