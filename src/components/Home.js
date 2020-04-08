import React, { useEffect } from 'react';
import AuthService from '../service/AuthService';


export default function Home() {

    useEffect(()=>{
        AuthService.hasRole('ROLE_USER')
    })
    return (
        <div>
            Home
        </div>
    )
}