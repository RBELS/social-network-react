import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import { Route, Redirect } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import UsersPage from './components/UsersPage/UsersPage';
import ProfileContentAPIContainer from './components/ProfileContent/ProfileContentAPIContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FriendsPage from './components/Friends/FriendsPage';
import RegistrationPage from './components/RegistrationPage/RegistrationPage';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initAppTC } from './redux/app-reducer';
import FetchingSign from './components/FetchingSign/FetchingSign';



class App extends React.Component {

  componentDidMount() {
    this.props.init(this.props.logged);
  }

  render() {
    if(!this.props.inited) {
      return <FetchingSign />
    }


    return (
      <div className="App">
        <Header />
        {this.props.location.pathname != "/registration" && <NavBar store={this.props.store} />}
        <div className="app-wrapper-content">
          <Route render={() => <ProfileContentAPIContainer />} path="/profile/:username?" />
          <Route render={() => <DialogsContainer />} path="/messages/:username?" />
          <Route render={() => <Music />} path="/music" />
          <Route render={() => <News />} path="/news" />
          <Route render={() => <Settings />} path="/settings" />
          <Route render={() => <UsersPage />} path="/users" />
          <Route render={() => <FriendsPage />} path="/friends" />
          <Route render={() => <RegistrationPage />} path="/registration" />
          {/* <Route render={() => <Redirect to="/registration" />} path="/" /> */}
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    logged: state.auth.logged,
    inited: state.app.init
  };
}



export default compose(
  withRouter,
  connect(mapStateToProps, { init: initAppTC })
)(App);