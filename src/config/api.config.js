const apiConfig = {
    coins: {
        cryptonote: 'https://raw.githubusercontent.com/ForkMaps/cryptonote/master/dist/coins.json'
    },
    benchmarks: {
        apiBase: 'https://firestore.googleapis.com/v1beta1/projects/forkmaps-dd394/databases/(default)/documents/benchmarks/',
        algos: {
            nerva: {
                displayName: 'Nerva',
                endpoint: 'nerva/benchmarks/'
            },
            blur: {
                displayName: 'Blur',
                endpoint: 'blur/benchmarks/'
            }
        }
    }
};

export { apiConfig };
