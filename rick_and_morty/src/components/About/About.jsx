import React from "react";
import imageA from '../../image/rick-y-morty-5642.jpg'
import styles from './About.module.css';

const About = ()=>{
    return(
        <div className={styles.container}>
        <p className={styles.parrafo}>Esta aplicación nos trae la información de los personajes de Rick y Morty, es un proyecto integrador utilizando React, donde se ha ido aplicando estilos mediante formatos como styled-components y module. Además, se han incorporado conceptos como routing, forms y manejo de estados. En esta App, se está haciendo el llamado de información a una API mediante fetch y la interacción que permite al usuario es a través del manejo de estados y Hooks. </p>
   
        <p className={styles.parrafo}>En conclusión, es un proyecto que ha venido recopilando todos los conocimientos adquiridos en el modulo 2 del programa FullStack de soy Henry.</p>

        <img src={imageA} alt="imagen" className={styles.banner}/>
        </div>
    )
};

export default About;