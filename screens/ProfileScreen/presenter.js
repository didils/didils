import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const ProfileScreen = props => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={{ fontSize: 17 }}>로그아웃</Text>
        <Ionicons name={"md-exit"} size={30} />
      </View>
      <View style={styles.item}>
        <Text style={{ fontSize: 17 }}>적립금</Text>
        <Ionicons name={"ios-arrow-forward"} size={25} />
      </View>
      <View style={styles.item}>
        <Text style={{ fontSize: 17 }}>쿠폰</Text>
        <Ionicons name={"ios-arrow-forward"} size={25} />
      </View>
      <View style={styles.item}>
        <Text style={{ fontSize: 17 }}>공지사항</Text>
        <Ionicons name={"ios-arrow-forward"} size={25} />
      </View>
      <View style={styles.item}>
        <Text style={{ fontSize: 17 }}>자주하는 질문</Text>
        <Ionicons name={"ios-arrow-forward"} size={25} />
      </View>
      <View style={styles.item}>
        <Text style={{ fontSize: 17 }}>개인정보 수정</Text>
        <Ionicons name={"ios-arrow-forward"} size={25} />
      </View>
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
