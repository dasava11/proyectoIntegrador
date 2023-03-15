import React from "react";
import { Link } from "react-router-dom";
import styles from './Login.module.css';
import morty from '../../image/morty.jpg'

const Login = ()=>{
    return(
        <div className={styles.contenedor} >
            <img src={morty} alt="bienvenido" className={styles.imagen} />
            <form className={styles.forma}>
                <input type='email' placeholder="Enter email"/>
                <input type="password" name="" id="" placeholder="Enter Password"/>
                <button type="submit">Login</button>
                <Link>Registrarse</Link>
            </form>
        </div>
    )
};

export default Login;