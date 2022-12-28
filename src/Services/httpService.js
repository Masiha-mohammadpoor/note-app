import axios from "axios";

axios.defaults.baseURL = "https://my-json-server.typicode.com/Masiha-mohammadpoor/note-app-db/db";

const http = {
    get : axios.get,
    post : axios.post,
    delete : axios.delete,
    put : axios.put
}

export default http;