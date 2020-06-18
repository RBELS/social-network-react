import { createSelector } from "reselect";

export const getUsername = state => state.auth.username;

export const getUsernameSuper = createSelector(getUsername, username => username);

export const getUsers = state => {
    return state.usersPage.users.map(u => u);
}