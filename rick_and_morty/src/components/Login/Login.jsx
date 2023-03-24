import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './Login.module.css';
import morty from '../../image/morty.jpg'
import { validate } from "./validation";

const Login = (props)=>{
const [userData, setUserData] = useState({
    username: '',
    password: ''
});

const [errors, setErrors] = useState({
    username: '',
    password: ''
});

const handleInputChange = (event)=>{
    const {name, value} = event.target
    setUserData({
        ...userData,
        [name]: value
    })
    console.log(value)

    setErrors(validate({
        ...errors,
        [name]: value
    }))
};

const handleSubmit = (event)=>{
event.preventDefault()
props.login(userData)
}

    return(
        <div className={styles.contenedor} >
            <img src={morty} alt="bienvenido" className={styles.imagen} />
            <form className={styles.forma} onSubmit={handleSubmit}>
                <label className={styles.labelS} >Username</label>
                <input 
                name="username"
                value={userData.username}
                type='email' 
                placeholder="Enter email" 
                onChange={handleInputChange} />
                {errors.username ? <p className={styles.err} >{errors.username}</p> : null}
                <label className={styles.labelS}>Password</label>
                <input 
                name='password' 
                value={userData.password}
                type="password" id="" 
                placeholder="Enter Password" 
                onChange={handleInputChange} />
                {errors.password ? <p className={styles.err} >{errors.password}</p> : null}
                <button type="submit">Login</button>
                <Link to="/signup">Registrarse</Link>
            </form>
        </div>
    )
};

export default Login;