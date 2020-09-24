import axios from 'axios';
import { Tweet } from '../store/types/tweet';

export function fetchTweetsApi() {
    const url = 'https://trycode.pw/c/2OBQ1.json';
    return axios.get(url);
}

export function fetchTopicsApi() {
    const url = 'https://trycode.pw/c/CT7FO.json';
    return axios.get(url);
}

export function addTweetApi(tweet: Tweet) {
    const url = 'https://trycode.pw/c/2OBQ1.json';
    return axios.post(url, tweet);
}
