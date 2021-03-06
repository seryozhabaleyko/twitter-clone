import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import Feed from '../../components/Feed';
import Sidebar from '../../components/Sidebar';
import { fetchTweets } from '../../state/modules/tweets/tweets.actions';
import { fetchTopics } from '../../state/modules/topics/topics.actions';

import './Home.scss';

function Home() {
    useDocumentTitle('Главная / Твиттер');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTweets());
        dispatch(fetchTopics());
    }, [dispatch]);

    return (
        <main className="main">
            <div
                className="main__container"
                style={{ display: 'flex', justifyContent: 'space-between' }}
            >
                <Feed />
                <Sidebar />
            </div>
        </main>
    );
}

export default Home;
