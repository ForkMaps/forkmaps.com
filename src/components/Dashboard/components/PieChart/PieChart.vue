<template>
    <div class="bar-chart" id="pieChart">

    </div>
</template>

<script>
    import echarts from 'echarts';
    import { v4 as uuid } from 'uuid';

    export default {
        name: 'pieChart',
        components: {

        },
        data: function () {
            return {
                componentId: 'pieChart'
            }
        },
        props: ['chartData'],
        methods: {},
        mounted: function () {

            this.componentId = uuid();
            console.log(this.componentId);

            console.log(this.chartData);
            let forkCountChart = echarts.init(document.getElementById('pieChart'));


            let option = {
                title: {
                    text: 'Algorithms'
                },
                legend: {
                    show: false
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                visualMap: {
                    show: false,
                    min: 80,
                    max: 600,
                    inRange: {
                        colorLightness: [0, 1]
                    }
                },
                series: [{
                    name: 'Coins',
                    type: 'pie',
                    avoidLabelOverlap: true,
                    radius : ['30%', '50%'],
                    center: ['50%', '50%'],
                    clockwise: false,
                    data: this.chartData.map(algo => {
                        return {
                            value: algo.count,
                            name: algo.algorithm
                        };
                    }),
                    itemStyle: {
                        normal: {
                            color: ['#111, #222, #333'],
                            borderColor: '#FFF'
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
