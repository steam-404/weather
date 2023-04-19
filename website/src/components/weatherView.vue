<!--author:steam-404-->
<template>
    <p>纬度:{{ lat }}</p>
    <p>经度:{{ lon }}</p>
    <p>国家:{{ country }}</p>
    <p>城市:{{ cityMessage }}</p>
    <p>时区:{{ timezone }}</p>
    <p>日出时间:{{ sunriseTime }}</p>
    <p>日落时间:{{ sunsetTime }}</p>
    <p>温度:{{ current_temp }}</p>
    <p>大气压:{{ current_pressure }}</p>
    <p>湿度:{{ current_humidity }}%</p>
    <p>云层:{{ current_clouds }}</p>
    <p>能见度:{{ current_visibility }}</p>
    <p>风速:{{ current_wind_speed }}</p>
    <p>风向:{{ current_wind_deg }}</p>
    <p>天气状况编号:{{ current_weather_id }}</p>
    <p>天气参数:{{ current_weather_main }}</p>
    <p>天气图标{{ current_weather_icon }}</p>
</template>

<script>

export default {
    name: "weatherView",
    data() {
        return {
            sunriseTime: '',
            sunsetTime: ''
        }
    },
    methods: {
        conversionDate(time) {
            // 时间戳转换器
            let date = new Date(parseInt(time) * 1000);
            let Year = date.getFullYear();
            let Moth = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
            let Day = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
            let Hour = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
            let Minute = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
            let Second = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
            return Year + '-' + Moth + '-' + Day + '   ' + Hour + ':' + Minute + ':' + Second
        }
    },
    watch: {
        current_sunrise(newTime) {
            //     日出时间转化
            this.sunriseTime=this.conversionDate(newTime)
        },
        current_sunset(newTime) {
            //     日落时间转换
            this.sunsetTime=this.conversionDate(newTime)
        }
    },
    props: [
        'lat',
        // 地理位置坐标(纬度)
        'lon',
        // 地理位置坐标(经度)
        'country',
        // 国家
        'cityMessage',
        // 城市
        'timezone',
        // 时区
        'current_sunrise',
        // 日出时间
        'current_sunset',
        // 日落时间
        'current_temp',
        // 温度(华氏摄氏度)
        'current_pressure',
        // 大气压力(hPa)
        'current_humidity',
        // 湿度(%)
        'current_clouds',
        // 浑浊度(%)
        'current_visibility',
        // 能见度(米)
        'current_wind_speed',
        // 风速(m/s)
        'current_wind_deg',
        // 风向
        'current_weather_id',
        // 天气状况编号
        'current_weather_main',
        // 天气参数
        'current_weather_icon',
        // 天气图标
    ]
}
</script>

<style scoped>

</style>