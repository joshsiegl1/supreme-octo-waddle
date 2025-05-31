import axios from 'axios'; 
import open from 'open'; 
import alert from 'alert-node'; 

const weatherstackKey = process.env.WEATHER_API_KEY; 

const getData = async () => { 
    return await axios.get('https://api.weatherstack.com/current?access_key=' + 
    weatherstackKey + '&query=Philadelphia', { responseType: 'json'}); 
}

let weatherResult = await getData();
console.log(weatherResult.data); 

open(weatherResult.data.current.weather_icons[0], function(err) { 
    console.log(err); 
}); 

alert("Congratulations on creating your first weather monitoring app, the weather is: " + weatherResult.data.current.weather_descriptions[0]); 