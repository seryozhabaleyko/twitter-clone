import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import { getTopics } from '../../store/selectors/topics';
import Topic from '../Topic';

import './Topics.scss';

function Topics() {
    const { loading, data, error } = useSelector(getTopics, shallowEqual);

    if (loading) {
        return (
            <section className="topics">
                <div className="topics__loading">
                    <CircularProgress />
                </div>
            </section>
        );
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <section className="topics">
            <header className="topics__heading">
                <h2>Актуальные темы для вас</h2>
            </header>

            {data.map((topic) => (
                <Topic key={topic.name} {...topic} />
            ))}

            <a className="topics__footer" href="#">
                Показать еще
            </a>
        </section>
    );
}

export default Topics;
