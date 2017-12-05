const axios = require('axios');
const mongoose = require('./init')
// const Rainfall = require('./rainfall')
const DailyRecord = require('./dailyrecord')

function apiForCity(latitude, longitude, date) {
    return axios.get(`https://api.darksky.net/forecast/32d0988dc1e92701571405b0121b40ef/${latitude},${longitude},${ date }?exclude=currently,flags,hourly&units=si`)
    .then((res) => { 
        // const rainfall = res.data.forecast.forecastday[0] // for apixu api
        let rainfall = 0
        if (res.data.daily.data[0].precipIntensity) {
          console.log('toprainfall', rainfall)
          console.log(res.data.daily.data[0].precipIntensity)
          rainfall = res.data.daily.data[0].precipIntensity
        }
        
        return rainfall
    })
    .catch(function (error) {
        console.log(error);
    })
}
const cities = 
[
    {name: 'melbourne', latitude: -37.8142, longitude: 144.9632 },
    {name: 'sydney', latitude: -33.8688, longitude:  151.2093 },
    {name: 'wellington', latitude:  -41.2865, longitude: 174.7762 }
]

cities.forEach((city) => {
    
    apiForCity(city.latitude, city.longitude, '2017-11-06T00:00:00+1100')
        .then((data) => {
            console.log('actual rainfall', data)
            DailyRecord.create({
                date: "2017-11-06",
                amount: data * 24,
                city: city.name + 'test2'
            },
            (data) => {
                console.log("This saved?", data)
            })
            // .then((rainfall) => {
            //     console.log('Created rainfall', rainfall)
            // })
            // .catch((error) => {
            //     console.log("the error", error)
            // })
        })
})
