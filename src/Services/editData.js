import http from "./httpService";

export default function editData(id , newData){
    return http.put(`/notes/${id}` , newData);
}