import axios from "axios";

const api = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather?q=Calgary&appid=f1528275ba90d8b0f63b16b770aecc82"
})

export default api;