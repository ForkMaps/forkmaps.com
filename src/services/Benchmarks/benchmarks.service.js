import axios from 'axios';
import { apiConfig } from '@/config/api.config';

export default class BenchmarkService {

    constructor () {

        this.httpClient = axios.create({
            baseURL: apiConfig.benchmarks.apiBase
        });
    }

    getBenchmarks (algo) {

        let endpoint = apiConfig.benchmarks.algos[algo].endpoint + '?pageSize=1000';
        return this.httpClient(endpoint).then((response) => {

            if (response.data && response.data.documents) {

                return response.data.documents.map((benchData) => {

                    let bench = {};
                    let fields = benchData.fields;
                    Object.keys(fields).forEach((key) => {

                        if (fields[key].stringValue) {

                            bench[key] = fields[key].stringValue;
                        } else if (fields[key].integerValue) {

                            bench[key] = parseInt(fields[key].integerValue);
                        }
                    });
                    return bench;
                });
            }
            return [];
        });
    };
};
