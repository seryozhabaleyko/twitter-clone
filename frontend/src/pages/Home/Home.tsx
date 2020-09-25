import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Affix from 'antd/lib/affix';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import Search from '../../components/Search';
import Topics from '../../components/Topics';
import Feed from '../../components/Feed';
import { fetchTweets } from '../../store/actions/tweets';
import { fetchTopics } from '../../store/actions/topics';

import './Home.scss';
import Sidebar from '../../components/Sidebar';

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

            {/*
            <div className="home-page__sidebar">
                <Affix offsetTop={10}>
                    <Search />
                    <Topics />
                </Affix>
            </div> */}
        </main>
    );
}

export default Home;
