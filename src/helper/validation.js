const emailRegex = /\S+@\S+\.\S+/;
const alphabetRegex = /^[a-zA-Z]+$/;

export function emailValidation(input) {
    return emailRegex.test(input);
}

export function alphabetValidation(input) {
    let resul = alphabetRegex.test(input);
    return resul;
}