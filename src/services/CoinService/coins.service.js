import axios from 'axios';
import { apiConfig } from '@/config/api.config';

export default {
    loadCoins: function () {
        return axios(apiConfig.coins.cryptonote)
        .then((response) => {
            return Promise.resolve(response.data);
        })
        .catch(err => err);
    }
};
