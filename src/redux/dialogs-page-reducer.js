import { dialogsAPI } from "../api/api";

const ADD_MESSAGE = "SEND-MESSAGE",
    MESSAGE_TEXT_CHANGE = "MESSAGE-TEXT-CHANGE",
    SET_DIALOGS = "SET-DIALOGS",
    SET_MESSAGES = "SET-MESSAGES",
    APPEND_MESSAGES = "APPEND-DIALOGS",
    SET_TOTAL_PAGES = "SET-TOTAL-PAGES",
    SET_FETCHING = "SET-FETCHING";

let initialState = {
    dialogs: [],
    right: {
        messages: [],
        totalPages: undefined,
        isFetching: false,
        newMessageText: "",
        lastPK: undefined
    }
};


const dialogsPageReducer = (state = initialState, action) => {

    if (action.type == ADD_MESSAGE) {
        return {
            ...state,
            right: {
                ...state.right,
                messages: [action.message, ...state.right.messages]
            }
        }
    } else if (action.type == MESSAGE_TEXT_CHANGE) {
        return {
            ...state,
            right: {
                ...state.right,
                newMessageText: action.newText
            }
        }
    } else if (action.type == SET_DIALOGS) {
        return {
            ...state,
            dialogs: action.dialogs
        }
    } else if (action.type == SET_MESSAGES) {
        return {
            ...state,
            right: {
                ...state.right,
                messages: action.messages,
                lastPK: action.messages[0].pk
            }
        }
    } else if (action.type == APPEND_MESSAGES) {
        return {
            ...state,
            right: {
                ...state.right,
                messages: [...state.right.messages, ...action.messages]
            }
        }
    } else if (action.type == SET_TOTAL_PAGES) {
        return {
            ...state,
            right: {
                ...state.right,
                totalPages: action.total
            }
        }
    } else if (action.type == SET_FETCHING) {
        return {
            ...state,
            right: {
                ...state.right,
                isFetching: action.isFetching
            }
        }
    }

    return state;
}


export const addMessageAC = (message) => ({ type: ADD_MESSAGE, message });
export const onNewMessageTextChangeActionCreator = newText => ({ type: MESSAGE_TEXT_CHANGE, newText: newText });
export const setDialogsAC = dialogs => ({ type: SET_DIALOGS, dialogs });
export const setMessagesAC = messages => ({ type: SET_MESSAGES, messages });
export const appendMessagesAC = messages => ({ type: APPEND_MESSAGES, messages });
export const setTotalPagesAC = total => ({ type: SET_TOTAL_PAGES, total });
export const setFetchingAC = isFetching => ({ type: SET_FETCHING, isFetching });

export const getDialogsTC = () => dispatch => {
    dialogsAPI.getDialogs().then(response => {
        dispatch(setDialogsAC(response));
    })
}

export const setMessagesTC = (page, pageNum, recipient) => dispatch => {
    dispatch(setFetchingAC(true));
    dialogsAPI.getMessages(page, pageNum, recipient).then(response => {
        dispatch(setMessagesAC(response));
        dispatch(setFetchingAC(false));
    });

    dialogsAPI.getTotalMessages(recipient, pageNum).then(response => {
        dispatch(setTotalPagesAC(response));
    });
}

export const appendMessagesTC = (page, pageNum, recipient, pk) => dispatch => {
    dispatch(setFetchingAC(true));
    dialogsAPI.getMessages(page, pageNum, recipient, pk).then(response => {
        dispatch(appendMessagesAC(response));
        dispatch(setFetchingAC(false));
    });
}

export const sendMessageTC = (recipient, message) => dispatch => {
    // console.log(recipient + " " + message);
    dialogsAPI.sendMessage(recipient, message).then(response => {
        debugger
        if (!response.success) {
            alert("Error!");
        } else {
            dispatch(addMessageAC(response.message));
        }
    });
    dispatch(onNewMessageTextChangeActionCreator(""));
}


export default dialogsPageReducer;