export default class WeatherUtils {
    static getWeatherIconUrl(iconCode) {
        console.log(iconCode)
        return "http://openweathermap.org/img/wn/"+ iconCode + "@2x.png"
    }
}
