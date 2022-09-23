import http from "./httpService";

export default function postData(data){
    return http.post("/notes" , data);
}