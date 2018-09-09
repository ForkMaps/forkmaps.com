<template>
    <div class="bar-chart" id="forkChart">

    </div>
</template>

<script>
    import echarts from 'echarts';
    import { v4 as uuid } from 'uuid';

    export default {
        name: 'barChart',
        components: {

        },
        data: function () {
            return {
                componentId: 'barChart'
            }
        },
        props: {
            chartData: Array
        },
        methods: {},
        mounted: function () {

            this.componentId = uuid();

            let forkCountChart = echarts.init(document.getElementById('forkChart'));

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
                    axisLabel: {rotate: 50}
                },
                yAxis: {},
                series: [{
                    name: 'Forked Coins',
                    type: 'bar',
                    data: this.chartData.map(coin => coin.count),
                    itemStyle: {
                        normal: {
                            barBorderRadius: 2,
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#00C9FF'},
                                    {offset: 1, color: '#29FFC6'}
                                ]
                            )
                        },
                        emphasis: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#22E9FF'},
                                    {offset: 1, color: '#29FFC6'}
                                ]
                            )
                        }
                    }
                }]
            };
            forkCountChart.setOption(option);
        }
    };
</script>

<style scoped>
.bar-chart {

}
</style>
