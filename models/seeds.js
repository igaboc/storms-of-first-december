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
const dates = 
[
    "2017-11-05",
    "2017-11-06",
    "2017-11-07",
    "2017-11-08",
    "2017-11-09",
    "2017-11-10",
    "2017-11-11",
    "2017-11-12",
    "2017-11-13",
    "2017-11-14",
    "2017-11-15",
    "2017-11-16",
    "2017-11-17",
    "2017-11-18",
    "2017-11-19",
    "2017-11-20",
    "2017-11-21",
    "2017-11-22",
    "2017-11-23",
    "2017-11-24",
    "2017-11-25",
    "2017-11-26",
    "2017-11-27",
    "2017-11-28",
    "2017-11-29",
    "2017-11-30",
    "2017-12-01",
    "2017-12-02",
    "2017-12-03",
    "2017-12-04",
    "2017-12-05"
]
dates.forEach((date) => {
  let dateFormat = date + 'T00:00:00+1100'
  cities.forEach((city) => {
    
    apiForCity(city.latitude, city.longitude, dateFormat)
        .then((data) => {
            console.log('actual rainfall', data)
            DailyRecord.create({
                date: date,
                amount: data * 24,
                city: city.name
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
})