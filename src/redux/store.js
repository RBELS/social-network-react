import profilePageReducer from "./profile-page-reducer";
import dialogsPageReducer from "./dialogs-page-reducer";
import navBarReducer from "./nav-bar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { message: "Hello, it's my first Post!", likesCount: "5", avaSrc: "https://assets.website-files.com/5d9ba0eb5f6edb77992a99d0/5e6f353a0f8bc38b8bbcc052_iconfinder_29-Doctor_5929215.png", id: "1" },
                { message: "Hi, nice application btw :)", likesCount: "41", avaSrc: "https://cdn2.iconfinder.com/data/icons/popular-games-1/50/minecraft_squircle-512.png", id: "2" },
                { message: "Awesome result!", likesCount: "0", avaSrc: "https://cdn2.iconfinder.com/data/icons/character-avatar/64/05-people-avatar-512.png", id: "3" },
                { message: "Nice one!", likesCount: "69", avaSrc: "https://assets.website-files.com/5d9ba0eb5f6edb77992a99d0/5e6f353a0f8bc38b8bbcc052_iconfinder_29-Doctor_5929215.png", id: "4" }
            ],
            postForm: {
                newPostText: ""
            }
        },
        dialogsPage: {
            dialogs: [
                { id: "1", name: "Artyom" },
                { id: "2", name: "Dmitry" },
                { id: "3", name: "Anna" },
                { id: "4", name: "Oskar" },
                { id: "5", name: "Michael" },
                { id: "6", name: "Kirill" }
            ],
            right: {
                messages: [
                    { id: "1", name: "Dmitry", imgSrc: "https://cdn2.iconfinder.com/data/icons/character-avatar/64/05-people-avatar-512.png", text: "Hey, how are u?" },
                    { id: "2", name: "Artyom", imgSrc: "https://cdn3.iconfinder.com/data/icons/education-209/64/apple-fruit-science-school-512.png", text: "Hey, I'm okay!" },
                    { id: "3", name: "Dmitry", imgSrc: "https://cdn2.iconfinder.com/data/icons/character-avatar/64/05-people-avatar-512.png", text: "That's fine! :)" },
                    { id: "4", name: "Artyom", imgSrc: "https://cdn3.iconfinder.com/data/icons/education-209/64/apple-fruit-science-school-512.png", text: "And what about you?" },
                    { id: "5", name: "Dmitry", imgSrc: "https://cdn2.iconfinder.com/data/icons/character-avatar/64/05-people-avatar-512.png", text: "Hey, how are u?" },
                    { id: "6", name: "Artyom", imgSrc: "https://cdn3.iconfinder.com/data/icons/education-209/64/apple-fruit-science-school-512.png", text: "Hey, I'm okay!" },
                    { id: "7", name: "Dmitry", imgSrc: "https://cdn2.iconfinder.com/data/icons/character-avatar/64/05-people-avatar-512.png", text: "That's fine! :)" },
                    { id: "8", name: "Artyom", imgSrc: "https://cdn3.iconfinder.com/data/icons/education-209/64/apple-fruit-science-school-512.png", text: "And what about you?" }
                ],
                newMessageText: ""
            }
        },
        navBar: {
            friends: [
                { id: "1", name: "Artyom", avaSrc: "https://image.flaticon.com/icons/svg/2762/2762574.svg" },
                { id: "2", name: "Dmitry", avaSrc: "https://image.flaticon.com/icons/svg/2762/2762565.svg" },
                { id: "3", name: "Kirill", avaSrc: "https://image.flaticon.com/icons/svg/2762/2762582.svg" },
                { id: "4", name: "Sasha", avaSrc: "https://image.flaticon.com/icons/svg/2762/2762590.svg" },
                { id: "5", name: "Fedor", avaSrc: "https://image.flaticon.com/icons/svg/2762/2762514.svg" }
            ]
        }
    },

    renderApp() {
        console.log("State changed");
    },

    subscribe(observer) {
        this.renderApp = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) { //action - object

        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._state.navBar = navBarReducer(this._state.navBar, action);

        this.renderApp(this);
    }
};










export default store;









// if (action.type == ADD_POST) {
//     this._state.profilePage.posts.push({ message: this._state.profilePage.postForm.newPostText, likesCount: "0", avaSrc: "https://cdn3.iconfinder.com/data/icons/education-209/64/apple-fruit-science-school-512.png", id: "5" });
//     this.renderApp(this);
// } else if (action.type == NEW_POST_TEXT_CHANGE) {
//     this._state.profilePage.postForm.newPostText = action.text;
//     this.renderApp(this);
// } else if (action.type == SEND_MESSAGE) {

//     this._state.dialogsPage.right.messages.push({
//         id: "9",
//         name: "Artyom",
//         imgSrc: "https://cdn3.iconfinder.com/data/icons/education-209/64/apple-fruit-science-school-512.png",
//         text: this._state.dialogsPage.right.newMessageText
//     });

//     this._state.dialogsPage.right.newMessageText = "";

//     this.renderApp(this);
//     action.el.scrollTo(0, action.el.scrollHeight);
// } else if (action.type == MESSAGE_TEXT_CHANGE) {
//     this._state.dialogsPage.right.newMessageText = action.newText;
//     this.renderApp(this);
// } else if (action.type == SCROLL_UPDATE) {
//     action.el.scrollTo(0, action.el.scrollHeight);
// }