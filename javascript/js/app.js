import * as ELEMENTS from './elements.js';
import {http} from './http.js';
const APP_ID = '9129cc35fedd7f427d338bd4646ab6b0';
let CITY_NAME;
const URL = `http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&units=metric&appid=${APP_ID}`;
ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);

searchWeather = () => {
    CITY_NAME = ELEMENTS.ELEMENT_SEARCH_CITY.value.trim();
    if (CITY_NAME.length == 0){
        return alert('city is empty')
    }
    
    http.fetchData(URL)
        .then(responseData => {
            alert (responseData);
        })
        .catch(error =>{
            alert(error);
        })
}