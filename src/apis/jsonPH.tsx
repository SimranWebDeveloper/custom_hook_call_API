import axios from "axios";
const BaseURL = "https://jsonplaceholder.typicode.com";

export default axios.create({
    baseURL: BaseURL,
    headers: {
        "Content-Type": "application/json", // gonderilen request json formatinda olsun
        'Accept': "application/json",    // qebul edilen response json formatinda olsun
    },
})
