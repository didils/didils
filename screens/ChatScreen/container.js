import React, { Component } from "react";
import { API_URL } from "../../constants";
import ChatScreen from "./presenter";
import { actionCreators as userActions } from "../../redux/modules/user";
import { GiftedChat } from "react-native-gifted-chat";

class Container extends Component {
  render() {
    console.log(this.props);
    return (
      <ChatScreen
        {...this.props}
        {...this.state}
        uploadMessage={this._uploadMessage}
      />
    );
  }

  _uploadMessage = messages => {
    const data = new FormData();
    const _id = messages[0]._id;
    const text = messages[0].text;
    const createdAt = messages[0].createdAt.toString();
    receiver_username = "";
    if (this.props.user.profile.username == "didils") {
      receiver_username = this.props.navigation.state.params.receiverId;
    } else {
      receiver_username = "didils";
    }
    data.append("_id", _id);
    data.append("text", text);
    data.append("createdAt", createdAt);
    data.append("sender_username", this.props.user.profile.username);
    data.append("receiver_username", receiver_username);
    const { token } = this.props.user;
    fetch(`${API_URL}/chats/upload/`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`,
        "Content-Type": "multipart/form-data"
      },
      body: data
    });
  };
}

export default Container;
