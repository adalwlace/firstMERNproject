import axios from "axios";

const $axios=axios.create({
    basedURL:"http://localhost:8000",
});
export default $axios
