import axios from 'axios';

export async function fetchTweetsApi() {
    const tweets = await axios.get('https://trycode.pw/c/DOLTL.json');
    return tweets;
}
