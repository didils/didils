import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  CameraRoll,
  StatusBar,
  Dimensions
} from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { actionCreators as userActions } from "../../redux/modules/user";
import { API_URL } from "../../constants";

const { width, height } = Dimensions.get("window");

class ChatScreen extends Component {
  state = {
    messages: []
  };

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: this.props.user.profile.username,
          text: "안녕하세요. 궁금한 사항을 실시간으로 답변해 드립니다.",
          createdAt: new Date(),
          user: {
            _id: "didils",
            name: "pat earn",
            avatar: "https://placeimg.com/140/140/any"
          }
        }
      ]
    });
    this.getChat();
  }
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: this.props.user.profile.username
        }}
      />
    );
  }
  onSend(messages = []) {
    this.props.uploadMessage(messages);
    this.getChat();
  }

  getChat = () => {
    const { token } = this.props.user;
    requestName = "";
    if (this.props.user.profile.username == "didils") {
      requestName = this.props.navigation.state.params.receiverId;
    } else {
      requestName = this.props.user.profile.username;
    }
    fetch(`${API_URL}/chats/all/?searchName=${requestName}`, {
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
        this.setState({
          messages: []
        });
        for (i = 0; i < json.length; i++) {
          this.setState(previousState => ({
            messages: [
              {
                _id: json[i]._id,
                text: json[i].text,
                createdAt: new Date(json[i].createdAt),
                user: {
                  _id: json[i].sender_username
                }
              },
              ...previousState.messages
            ]
          }));
        }
      })
      .catch(function() {
        console.log("Promise Rejected");
      });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center"
  },
  chatRoom: {
    height: 50,
    width: width * 0.98,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgrey"
  }
});

export default ChatScreen;
