import axios from 'axios';
import jwtDecode from 'jwt-decode'

const USER_API_BASE_URL = 'http://localhost:8080/token/';

class AuthService {

    login(credentials) {
        return axios.post(USER_API_BASE_URL + "generate-token", credentials);
    }

    getUserInfo() {
        return JSON.parse(localStorage.getItem("token"));
    }

    checkUserLoggedIn() {
        return this.getUserInfo() ? true : false
    }

    getAuthHeader() {
        return { headers: { Authorization: 'Bearer ' + this.getUserInfo().token } };
    }

    logOut() {
        localStorage.removeItem("token");
    }

    getUserRoles() {
        let decodedHeader = jwtDecode(this.getUserInfo());
        return decodedHeader.scopes;
    }

    hasRole(role){
        const roles = this.getUserRoles().split(',');
        return roles.includes(role);
    }
}

export default new AuthService();
