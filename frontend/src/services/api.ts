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
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(tweet);
        }, 5000);
    });
}

export async function fetchTweetApi(id: Tweet['id']) {
    const url = 'https://trycode.pw/c/2OBQ1.json';
    const response = await axios.get(url);
    return response.data.filter((tweet: { _id: string }) => tweet._id === id);
}

export function fetchRecommendedApi() {
    const url = 'https://trycode.pw/c/OD0ER.json';
    return axios.get(url);
}
