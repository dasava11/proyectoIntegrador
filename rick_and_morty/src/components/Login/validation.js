
const regexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2}$/i;

const regexPassword = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{6,10}$/

export const validate = (inputs)=>{
    let errors = {};
console.log(inputs,regexEmail.test(inputs.username));

    if (!regexEmail.test(inputs.username)) {
        errors.usernameErr = 'Ingrese un correo electronico valido'
    };
    if (inputs.username === '') {
        errors.usernameErr =  'El nombre de usuario no puede estar vacío'
    };
    if (inputs.username?.length > 35) {
        errors.usernameErr = 'El nombre de usuario no puede tener más de 35 caracteres' + inputs.username.length + inputs.username
    };
    if (!regexPassword.test(inputs.password)) {
        errors.passwordErr = 'la contraseña tiene que tener al menos un número y debe tener entre 6 y 10 caracteres'
    };
    if (inputs.password?.length === 0) {
        errors.passwordErr = 'Ingrese una contraseña'
    };

    return errors;
};