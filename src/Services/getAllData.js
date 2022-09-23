import http from "./httpService";

export default function getAllData(){
    return http.get("/notes");
}