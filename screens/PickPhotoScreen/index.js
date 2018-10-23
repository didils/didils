import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ActionSheet from "react-native-actionsheet";

class PickPhotoScreen extends Component {
  showActionSheet = () => {
    this.ActionSheet.show();
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={{ fontSize: 40, fontWeight: "200", marginBottom: 5 }}>
            상표 정하기
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "100" }}>
            출원하고자 하는 상표를 정하셨나요?
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "100" }}>
            이미지를 업로드 해 주세요.
          </Text>
        </View>
        <View style={styles.box}>
          <TouchableOpacity
            style={styles.image}
            onPressOut={this.showActionSheet}
          >
            <Text style={{ fontSize: 30, color: "#FFFF00", fontWeight: "200" }}>
              상표
            </Text>
            <Text style={{ fontSize: 30, color: "#FFFF00", fontWeight: "200" }}>
              이미지
            </Text>
            <View style={styles.icon}>
              <MaterialIcons name={"photo-camera"} size={40} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.button}
            onPressOut={() => navigation.goBack(null)}
          >
            <Text style={{ fontSize: 18, color: "black", fontWeight: "200" }}>
              취소
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{ fontSize: 18, color: "black", fontWeight: "200" }}>
              다음
            </Text>
          </TouchableOpacity>
        </View>
        <ActionSheet
          ref={o => (this.ActionSheet = o)}
          title={"출원하고 싶은 상표 이미지를.."}
          options={[
            "앨범에서 고르기",
            "카메라로 촬영하기",
            "텍스트로 입력하기",
            "취소"
          ]}
          cancelButtonIndex={3}
          onPress={index => {
            if (index == 0) {
              navigation.navigate("Library");
            } else if (index == 1) {
              navigation.navigate("Camera");
            }
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    width: Dimensions.get("window").width / 2 - 20,
    backgroundColor: "white",
    marginHorizontal: 2,
    borderRadius: 4,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: StyleSheet.hairlineWidth
  },
  btnContainer: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    flex: 2,
    backgroundColor: "white",
    justifyContent: "center",
    paddingLeft: 30,
    paddingTop: 30
  },
  box: {
    flex: 6,
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 60
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width - 120,
    height: Dimensions.get("window").width - 120,
    backgroundColor: "#31A5FF",
    borderRadius: 10
  },
  icon: {
    position: "absolute",
    bottom: -25,
    right: -25,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: StyleSheet.hairlineWidth
  }
});

export default PickPhotoScreen;
