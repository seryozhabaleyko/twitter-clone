import React from 'react';
import { Link } from 'react-router-dom';
import { SearchOutlined, TeamOutlined, MessageOutlined, TwitterOutlined } from '@ant-design/icons';

import useDocumentTitle from '../../hooks/useDocumentTitle';

import './Logout.scss';

function Logout() {
    useDocumentTitle('Твиттер. Здесь обсуждают всё, что происходит. / Твиттер');

    return (
        <main className="main logout-page">
            <section className="info-side">
                <TwitterOutlined className="icon-background" style={{ color: '#1da1f2' }} />
                <ul>
                    <li>
                        <SearchOutlined style={{ fontSize: '23px', marginRight: '15px' }} />
                        Читайте о том, что вам интересно.
                    </li>
                    <li>
                        <TeamOutlined style={{ fontSize: '23px', marginRight: '15px' }} />
                        Узнайте, о чем говорят в мире.
                    </li>
                    <li>
                        <MessageOutlined style={{ fontSize: '23px', marginRight: '15px' }} />
                        Присоединяйтесь к общению.
                    </li>
                </ul>
            </section>

            <section className="login-side">
                <div style={{ maxWidth: '380px' }}>
                    <TwitterOutlined style={{ fontSize: '2.75rem', color: '#1da1f2' }} />
                    <h1 style={{ fontSize: '30px', marginTop: '20px' }}>
                        Узнайте, что происходит в мире прямо сейчас
                    </h1>
                    <div>
                        <span>Присоединяйтесь к Твиттеру прямо сейчас!</span>
                    </div>
                    <Link to="/signup" className="signupButton">
                        Зарегистрироваться
                    </Link>
                    <Link to="/login" className="loginButton">
                        Войти
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default Logout;
