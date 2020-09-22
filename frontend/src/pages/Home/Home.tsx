import React from 'react';
import { Input } from 'antd';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import Tweet from '../../components/Tweet';

import './Home.scss';

const { TextArea } = Input;

function Home() {
    useDocumentTitle('Главная / Твиттер');

    return (
        <main className="main">
            <section className="home">
                <header className="home__heading">
                    <div className="home-heading__inner">
                        <h2 className="home__title">Главная</h2>
                    </div>
                </header>

                {/* <div>
                    <TextArea
                        placeholder="Controlled autosize"
                        autoSize={{ minRows: 3, maxRows: 5 }}
                    />
                </div> */}

                <div style={{ height: '10px', backgroundColor: 'rgb(230, 236, 240)' }}></div>

                <div className="tweet-list">
                    {[...Array(10)].map((_, id) => (
                        <Tweet key={id} />
                    ))}
                </div>
            </section>
            <div>2</div>
        </main>
    );
}

export default Home;
