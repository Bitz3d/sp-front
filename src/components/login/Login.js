import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import i18n from '../../i18n';
import './login.css';
import AuthService from '../../service/AuthService';
import { useHistory } from "react-router-dom";
import { storeContext } from '../../store/Store.js'

export default function Login() {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const [state, { toggleLoggedIn }] = React.useContext(storeContext);
    const onSubmit = data => {

        const credentials = { username: data.username, password: data.password };
        AuthService.login(credentials).then(res => {
            if (res.status === 200) {
                localStorage.setItem("token", JSON.stringify(res.data.token));
                history.push("/home");
                const li = AuthService.checkUserLoggedIn()
                toggleLoggedIn(li)
                alert("User login");
            }
        }).catch(err => {
            alert(err.data)
        });
    };

    return (
        <div className="container">
            <div className="row d-flex justify-content-center login-form">
                <form onSubmit={handleSubmit(onSubmit)} className="col-md-6">
                    <div className="form-group">
                        <input type="text" placeholder="login" className="form-control" name="username" ref={register({ required: true })} />
                        {errors.login && errors.login.type === 'required' && <p>{i18n.t('required')}</p>}
                    </div>
                    <div className="form-group">
                        <input className="row" type="password" className="form-control" placeholder="password" name="password" ref={register({ required: true })} />
                        {errors.password && errors.password.type === 'required' && <p>{i18n.t('required')}</p>}
                    </div>
                    <button type="submit" className="btn btn-primary" >{i18n.t('login')}</button>
                </form>
            </div>
        </div>
    );
}