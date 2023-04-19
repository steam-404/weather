<!--author:steam-404-->
<!--weather-->
<script>
import axios from 'axios'
import {defineComponent} from "vue";
import weatherView from '@/components/weatherView.vue'

export default defineComponent({
    components:{
        weatherView
    },
    data() {
        return {
            url: 'https://api.openweathermap.org/data/2.5/weather?q=',
            city: '',
            urlMessage: '&units=metric&appid=13e786b2255800d48474a6fdbcd071dc',

            lat: '',
            // 地理位置坐标(纬度)
            lon: '',
            // 地理位置坐标(纬度)
            country: '',
            // 国家
            cityMessage: '',
            // 城市
            timezone: '',
            // 时区
            current_sunrise: '',
            // 日出时间
            current_sunset: '',
            // 日落时间
            current_temp: '',
            // 温度(华氏摄氏度)
            current_pressure: '',
            // 大气压力(hPa)
            current_humidity: '',
            // 湿度(%)
            current_clouds: '',
            // 浑浊度(%)
            current_visibility: '',
            // 能见度(米)
            current_wind_speed: '',
            // 风速(m/s)
            current_wind_deg: '',
            // 风向
            current_weather_id: '',
            // 天气状况编号
            current_weather_main: '',
            // 天气参数
            current_weather_icon: '',
            // 天气图标id
        }
    },
    methods: {
        lookWeather() {
            this.url = this.url + this.city + this.urlMessage
            axios.get(this.url, {}).then(response => {
                console.log(response)
                this.lat = response.data.coord.lat
                this.lon = response.data.coord.lon
                this.country = response.data.sys.country
                this.cityMessage = response.data.name
                this.timezone = response.data.timezone
                this.current_sunrise = response.data.sys.sunrise
                this.current_sunset = response.data.sys.sunset
                this.current_temp = response.data.main.temp
                this.current_pressure = response.data.main.pressure
                this.current_humidity = response.data.main.humidity
                this.current_clouds = response.data.clouds.all
                this.current_visibility = response.data.visibility
                this.current_wind_speed = response.data.wind.speed
                this.current_wind_deg = response.data.wind.deg
                this.current_weather_id = response.data.weather[0].id
                this.current_weather_main = response.data.weather[0].main
                this.current_weather_icon = response.data.weather[0].icon
            }).catch(error => {
                console.log(error)
            })
        }
    },
    props: [
        'lat',
        // 地理位置坐标(纬度)
        'lon',
        // 地理位置坐标(纬度)
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
    ]
})
</script>
<template>
    <el-input v-model="city" placeholder="输入城市拼音"></el-input>
    <el-button type="success" @click="lookWeather">查找</el-button>
    <weather-view
        :lat="lat" :lon="lon"
        :country="country"
        :city-message="cityMessage"
        :timezone="timezone"
        :current_sunrise="current_sunrise"
        :current_sunset="current_sunset"
        :current_temp="current_temp"
        :current_pressure="current_pressure"
        :current_humidity="current_humidity"
        :current_clouds="current_clouds"
        :current_visibility="current_visibility"
        :current_wind_speed="current_wind_speed"
        :current_wind_deg="current_wind_deg"
        :current_weather_id="current_weather_id"
        :current_weather_main="current_weather_main"
        :current_weather_icon="current_weather_icon"
    >
    </weather-view>
</template>
<style>
</style>