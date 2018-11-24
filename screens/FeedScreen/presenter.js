import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert
} from "react-native";
import Photo from "../../components/Photo";
import { PURPLE } from "../../constants";

const { width, height } = Dimensions.get("window");

const FeedScreen = props => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginBottom: 15 }}>
        <Image
          source={require("../../assets/images/icon.png")}
          style={{ width: 100 }}
          resizeMode={"contain"}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.textHighlight}>변리사</Text>
          <Text style={styles.text}>가 직접 만들고 운영하는</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.text}>대한민국 </Text>
          <Text style={styles.textHighlight}>최초</Text>
          <Text style={styles.text}> 상표 관리 어플</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonLogin}
        onPressOut={() => {
          if (props.isLoggedIn) {
            props.resetCase();
            props.navigation.navigate("First");
          } else {
            Alert.alert(
              "상표 출원은",
              "로그인이 필요합니다.",
              [
                {
                  text: "취소",
                  style: "cancel"
                },
                {
                  text: "로그인",
                  onPress: () => {
                    props.navigation.navigate("LogIn");
                  }
                }
              ],
              { cancelable: true }
            );
          }
        }}
      >
        <Text style={styles.loginText}>상표 출원하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "100",
    color: "black",
    marginBottom: 10
  },
  textHighlight: {
    fontSize: 18,
    fontWeight: "600",
    color: PURPLE,
    marginBottom: 10
  },
  loginText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white"
  },
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  containerTM: {
    backgroundColor: "#FBFBFB",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    flexDirection: "row",
    marginLeft: 30,
    marginRight: 30
  },
  topBtn: {
    backgroundColor: "#31A5FF",
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: Dimensions.get("window").width - 70,
    backgroundColor: "#FBFBFB",
    height: 40,
    borderRadius: 2,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "grey",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonLogin: {
    width: (width * 36) / 100,
    backgroundColor: PURPLE,
    height: (width * 14) / 100,
    borderRadius: (width * 7) / 100,
    justifyContent: "center",
    alignItems: "center"
  }
});

FeedScreen.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  cases: PropTypes.array
};

export default FeedScreen;
