import axios from "axios";

export default axios.create({
    baseURL: "https://api.odcloud.kr/api",
    headers: {
        "Content-type":"application/json",
    }
});