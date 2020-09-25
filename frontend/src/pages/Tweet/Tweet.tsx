import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchTweet } from '../../store/actions/tweet';
import { getTweet } from '../../store/selectors/tweet';

import './Tweet.scss';

function TweetPage() {
    const { id }: { id: string } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTweet(id));
    }, [dispatch, id]);

    const { loading, data, error } = useSelector(getTweet, shallowEqual);

    if (loading) {
        return <p>loading...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <main className="main home-page">
            <div className="feed">{data.text}</div>
        </main>
    );
}

export default TweetPage;
