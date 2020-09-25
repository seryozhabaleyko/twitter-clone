import React from 'react';
import { Link } from 'react-router-dom';

import './Subscribe.scss';

function Subscribe() {
    return (
        <aside className="subscribe" aria-label="Кого читать">
            <div className="subscribe__header subscribe-hover-effect">
                <h2 className="subscribe__title">Кого читать</h2>
            </div>
            <div className="subscribe__user-list subscribe-hover-effect"></div>
            <Link to="#" className="subscribe__footer subscribe__show-more subscribe-hover-effect">
                Показать еще
            </Link>
        </aside>
    );
}

export default Subscribe;
