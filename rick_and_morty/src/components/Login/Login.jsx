import React from "react";
import { Link } from "react-router-dom";
import styles from './Login.module.css';
import morty from '../../image/morty.jpg'

const Login = ()=>{
const [userData, setUserData] = React.useState({
    username: '',
    password: ''
});

const handleInputChange = (event)=>{
    const {value} = event.target
    setUserData({
        ...userData,
        [event.target.name]: value
    })
}

    return(
        <div className={styles.contenedor} >
            <img src={morty} alt="bienvenido" className={styles.imagen} />
            <form className={styles.forma}>
                <label>Username</label>
                <input name="username" type='email' placeholder="Enter email" onChange={handleInputChange} />
                <label>Password</label>
                <input name='password' type="password" id="" placeholder="Enter Password" onChange={handleInputChange} />
                <button type="submit">Login</button>
                <Link>Registrarse</Link>
            </form>
        </div>
    )
};

export default Login;