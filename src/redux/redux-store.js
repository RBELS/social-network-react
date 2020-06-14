import { createStore, combineReducers, applyMiddleware } from "redux";
import profilePageReducer from "./profile-page-reducer";
import dialogsPageReducer from "./dialogs-page-reducer";
import navBarReducer from "./nav-bar-reducer";
import usersPageReducer from "./users-page-reducer";
import authReducer from "./auth-reducer";
import thunkMW from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";



let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    navBar: navBarReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMW));

window.store = store;


export default store;