import axios from 'axios';
import jwtDecode from 'jwt-decode'

class AuthService {

    login(credentials) {
        return axios.post(process.env.REACT_APP_SERVER + "/token/generate-token", credentials);
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
