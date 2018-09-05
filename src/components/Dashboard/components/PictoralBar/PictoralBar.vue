<template>
    <div class="bar-chart" id="pictoralBar">

    </div>
</template>

<script>
    import echarts from 'echarts';
    import { v4 as uuid } from 'uuid';

    export default {
        name: 'pictoralBar',
        components: {

        },
        data: function () {
            return {
                componentId: 'barChart'
            }
        },
        props: ['chartData'],
        methods: {},
        mounted: function () {

            this.componentId = uuid();
            console.log(this.componentId);

            console.log(this.chartData);
            let forkCountChart = echarts.init(document.getElementById('pictoralBar'));


            let option = {
                title: {
                    text: 'Coins with Forks'
                },
                legend: {
                    show: false
                },
                tooltip: {},
                xAxis: {
                    data: this.chartData.map(coin => {

                        return {
                            textStyle: {

                            },
                            value: coin.name
                        };
                    }),
                    axisTick: {show: false},
                    axisLine: {show: false},
                    axisLabel: {rotate: 50}
                },
                yAxis: {
                    splitLine: {show: false},
                    axisTick: {show: false},
                    axisLine: {show: false},
                    axisLabel: {show: false}
                },
                series: [{
                    name: 'Forked Coins',
                    type: 'pictorialBar',
                    barGap: '-100%',
                    symbolPosition: 'end',
                    symbolSize: 30,
                    symbolOffset: [0, '-120%'],
                    data: this.chartData.map((coin) => {
                        return {
                            value: coin.count,
                            symbol: 'image://' + coin.icon,
                            symbolSize: [30, 30]
                        };
                    })
                },
                {
                    name: 'Forked Coins',
                    type: 'pictorialBar',
                    barCategoryGap: '-130%',
                    symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                    data: this.chartData.map(coin => coin.count),
                    itemStyle: {
                        normal: {
                            opacity: 0.6,
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#00C9FF'},
                                    {offset: 1, color: '#29FFC6'}
                                ]
                            )
                        },
                        emphasis: {
                            opacity: 1
                        }
                    },
                    z: 10
                }
            ]
            };
            forkCountChart.setOption(option);

        }
    };
</script>

<style scoped>
.bar-chart {

}
</style>
