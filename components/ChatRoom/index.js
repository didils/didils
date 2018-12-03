import React from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Dimensions
} from "react-native";
import { withNavigation } from "react-navigation";

const { width, height } = Dimensions.get("window");

navigateToChat = () => {};

const ChatRoom = props => (
  <TouchableOpacity
    onPressOut={() =>
      props.navigation.navigate("Chat", {
        receiverId: props.user2
      })
    }
  >
    <View style={styles.container}>
      <Text>{props.user2}님과의 채팅방</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    height: 40,
    flexDirection: "row",
    backgroundColor: "red",
    width: width * 0.98
  }
});

export default withNavigation(ChatRoom);
