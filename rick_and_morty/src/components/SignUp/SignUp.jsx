import React from "react";
import styles from './SignUp.module.css'

const SignUp = ()=>{
    return(
        <div className={styles} >
            <form>
                <label>Usuario:</label>
                <input type="text" placeholder="Defina un usuario"/>
                <label>Correo electónico:</label>
                <input type='email' placeholder="Enter Email"/>
                <label>Contraseña:</label>
                <input type='password' placeholder="Ingrese una contraseña"/>
                <label>Confirme contraseña:</label>
                <input type='password' placeholder="Valide contraseña"/>
                <label>Fecha de nacimiento</label>
                <input type='date' placeholder="Escriba su fecha de nacimiento"/>
                <button type="submit">Registrarse</button>
            </form>

        </div>
    )
};

export default SignUp;