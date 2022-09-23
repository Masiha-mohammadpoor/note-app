import http from "./httpService";

export default function deleteData(id){
    return http.delete(`/notes/${id}`);
}