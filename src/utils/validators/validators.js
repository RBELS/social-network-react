import { validatorsAPI } from "../../api/api";

export const requiredField = (value) => {
    if (!value) return 'This field is required';
}

export const maxLength = length => value => {
    if (value.length > length) return `Max length ${length}`;
}

export const minLength = length => value => {
    if (value.length < length) return `Min length ${length}`;
}

export const passwordMatch = (value, allValues) => {
    return value == allValues.repeatPassword ? undefined : "Passwords must match!";
}

export const usernameMustNotExist = (value) => {
    return validatorsAPI.ifUsernameExists(value.username).then(response => {
        if (response) {
            throw { username: "Username exists!" };
        }
    });
}