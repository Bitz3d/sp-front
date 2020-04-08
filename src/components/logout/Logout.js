import React, { useEffect } from 'react';
import AuthService from '../../service/AuthService';
import {storeContext} from '../../store/Store.js'

export default function Logout() {
    const [{ loggedIn }, {toggleLoggedIn}] = React.useContext(storeContext);

    useEffect(() => {
        AuthService.logOut()
        const li = AuthService.checkUserLoggedIn()
        toggleLoggedIn(li)
    }, [loggedIn]);


    return (<div>Logout</div>)
}