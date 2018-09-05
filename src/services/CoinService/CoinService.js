import axios from 'axios';

export default {
    loadCoins: function () {
        return axios('https://raw.githubusercontent.com/ForkMaps/cryptonote/master/dist/coins.json')
        .then((response) => {
            return Promise.resolve(response.data);
        })
        .catch(err => err);
    }
};
