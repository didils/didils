import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const ProfileScreen = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPressOut={() =>
          Alert.alert(
            "사용자 로그아웃",
            "로그아웃 하시겠습니까?",
            [
              {
                text: "취소",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "확인", onPress: () => props.userLogOut() }
            ],
            { cancelable: true }
          )
        }
      >
        <Text style={{ fontSize: 17 }}>로그아웃</Text>
        <Ionicons name={"md-exit"} size={30} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={{ fontSize: 17 }}>적립금</Text>
        <Ionicons name={"ios-arrow-forward"} size={25} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={{ fontSize: 17 }}>쿠폰</Text>
        <TouchableOpacity name={"ios-arrow-forward"} size={25} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={{ fontSize: 17 }}>공지사항</Text>
        <Ionicons name={"ios-arrow-forward"} size={25} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={{ fontSize: 17 }}>자주하는 질문</Text>
        <Ionicons name={"ios-arrow-forward"} size={25} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={{ fontSize: 17 }}>개인정보 수정</Text>
        <Ionicons name={"ios-arrow-forward"} size={25} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFA",
    alignItems: "center"
  },
  item: {
    width: width - 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginVertical: 3
  }
});

export default ProfileScreen;
