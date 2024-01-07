import axios from "axios";
const BaseURL = "https://icanhazdadjoke.com";

export default axios.create({
    baseURL: BaseURL,
    headers: {
        "Content-Type": "application/json", // geden data json olmalidir
        'Accept': "application/json",   // gelen data json olmalidir
    },
})
