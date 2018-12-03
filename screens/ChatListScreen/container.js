import React, { Component } from "react";
import { API_URL } from "../../constants";
import ChatListScreen from "./presenter";
import { actionCreators as userActions } from "../../redux/modules/user";

class Container extends Component {
  state = {
    chatrooms: []
  };
  componentWillMount = () => {
    this._getChatRoom();
  };

  render() {
    console.log(this.props);
    return (
      <ChatListScreen
        {...this.props}
        {...this.state}
        createRoom={this._createRoom}
      />
    );
  }
  _createRoom = () => {
    const {
      profile: { username },
      token
    } = this.props.user;
    fetch(`${API_URL}/chatrooms/upload/?username=${username}`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logOut());
        }
      })
      .catch(function() {
        console.log("Promise Rejected");
      });
  };

  _getChatRoom = () => {
    const {
      profile: { username },
      token
    } = this.props.user;
    fetch(`${API_URL}/chatrooms/all/?username=${username}`, {
      method: "GET",
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logOut());
        } else {
          return response.json();
        }
      })
      .then(json => {
        return this.setState({
          chatrooms: json
        });
      })
      .catch(function() {
        console.log("Promise Rejected");
      });
  };
}

export default Container;
