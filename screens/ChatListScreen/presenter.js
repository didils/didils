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
import { API_URL } from "../../constants";
import ChatRoom from "../../components/ChatRoom";

const { width, height } = Dimensions.get("window");

class ChatListScreen extends Component {
  render() {
    const { navigation } = this.props;
    const { chatrooms } = this.props;
    return (
      <View style={styles.container}>
        {this.props.user.profile.username == "didils" ? (
          <View>
            {chatrooms.map((roomitem, index) => (
              <ChatRoom
                key={index}
                user1={roomitem.user1}
                user2={roomitem.user2}
              />
            ))}
          </View>
        ) : (
          <TouchableOpacity
            style={styles.chatRoom}
            onPressOut={() => {
              this.props.createRoom();
              navigation.navigate("Chat");
            }}
          >
            <Text>실시간 문의하기!</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
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

export default ChatListScreen;
