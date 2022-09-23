import http from "./httpService";

export default function getOneData(id){
    return http.get(`/notes/${id}`);
}