import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <nav aria-label="Нижний колонтитул" role="navigation">
                <Link to="#">Условия</Link>
                <Link to="#">Политика конфиденциальности</Link>
                <Link to="#">Файлы cookie</Link>
                <Link to="#">Информация о рекламе</Link>
                <Link to="#">Еще</Link>
                <div>© Twitter, Inc., 2020.</div>
            </nav>
        </footer>
    );
}

export default Footer;
