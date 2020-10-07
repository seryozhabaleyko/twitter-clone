import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

import User from './User';
import { fetchRecommended } from '../../state/modules/recommended/recommended.actions';
import { getRecommended } from '../../state/modules/recommended/recommended.selectors';

import './Recommended.scss';

function Recommended() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRecommended());
    }, [dispatch]);

    const { loading, users, error } = useSelector(getRecommended, shallowEqual);

    return (
        <aside className="recommended" aria-label="Кого читать">
            {loading && (
                <div className="recommended__loading">
                    <CircularProgress />
                </div>
            )}

            {!!users.length && (
                <>
                    <div className="recommended__header">
                        <h2 className="recommended__title">Кого читать</h2>
                    </div>
                    <div className="recommended__user-list">
                        {users.map((user) => (
                            <User key={user.id} {...user} />
                        ))}
                    </div>
                    <Link
                        to="#"
                        className="recommended__footer recommended__show-more recommended-hover-effect"
                    >
                        Показать еще
                    </Link>
                </>
            )}

            {error && <div className="recommended__error">{error.message}</div>}
        </aside>
    );
}

export default Recommended;
