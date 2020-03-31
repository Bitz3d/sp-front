import React from 'react'
import { useForm } from 'react-hook-form'
import i18n from '../../i18n'
import './register.css'
import axios from 'axios'
import { useHistory } from "react-router-dom";

export default function Register() {
    const history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = async data => {
        axios.post('http://localhost:8080/signup', { username: data.email, password: data.password })
            .then(respone => {
                history.push("/login");
                alert("User register")
            }).catch(errors => {
                console.log(errors)
            })


    }

    const confirmPasswordValidator = value => {
        return value === watch('password')
    }

    return (

        <div className="container">
            <div className="row d-flex justify-content-center register-form">
                <form onSubmit={handleSubmit(onSubmit)} className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="InputEmail1">{i18n.t('email')}</label>
                        <input type="email" name="email" className="form-control" ref={register(

                            { required: true, })} />
                        {errors.email && errors.email.type === 'required' && <p>{i18n.t('required')}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">{i18n.t('password')}</label>
                        <input type="password" name="password" className="form-control" ref={register({ required: true, minLength: 6 })} />
                        {errors.password && errors.password.type === 'required' && <p>{i18n.t('required')}</p>}
                        {errors.password && errors.password.type === 'minLength' && <p>{i18n.t('minPasswordLength')}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="repeatPassword">{i18n.t('repaedPassword')}</label>
                        <input type="password" name="confirmPassword" className="form-control" ref={register({ required: true, minLength: 6, validate: confirmPasswordValidator })} />
                        {errors.confirmPassword && errors.confirmPassword.type === 'required' && <p>{i18n.t('required')}</p>}
                        {errors.confirmPassword && errors.confirmPassword.type === 'minLength' && <p>{i18n.t('minPasswordLength')}</p>}
                        {errors.confirmPassword && errors.confirmPassword.type === 'validate' && <p>{i18n.t('passwordsNotEqual')}</p>}
                    </div>
                    <button type="submit" className="btn btn-primary" >{i18n.t('submit')}</button>
                </form>
            </div>
        </div>
    )

}