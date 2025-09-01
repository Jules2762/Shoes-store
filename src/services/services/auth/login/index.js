import api from "@/services/api";
export const loginService = {
    login(data){
        return api.post('/login', data);
    }
}