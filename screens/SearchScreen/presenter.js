import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert
} from "react-native";
import Photo from "../../components/Photo";
import { PURPLE } from "../../constants";

const { width, height } = Dimensions.get("window");

const SearchScreen = props => {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 50, marginLeft: 20, marginBottom: 12 }}>
        <Text style={{ fontSize: 30, fontWeight: "600" }}>내 사건 목록</Text>
      </View>
      <View>
        {props.isLoggedIn ? (
          <View>
            {props.feed.length > 0 ? (
              <ScrollView>
                <View style={styles.containerTM}>
                  {props.feed &&
                    props.feed.map((cases, index) => (
                      <Photo caseInfo={cases} key={index} />
                    ))}
                </View>
              </ScrollView>
            ) : (
              <View
                style={{
                  alignItems: "center",
                  marginBottom: 100,
                  marginTop: 110
                }}
              >
                <View style={{ alignItems: "center", marginBottom: 20 }}>
                  <Text style={styles.text}>진행 중인 사건이 없습니다.</Text>
                  <Text style={styles.text}>사건을 추가해 주세요!</Text>
                </View>
                <TouchableOpacity
                  style={styles.buttonLogin}
                  onPressOut={() => {
                    props.navigation.navigate("LogIn");
                  }}
                >
                  <Text style={styles.loginText}>상표 출원하기</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ) : (
          <View
            style={{ alignItems: "center", marginBottom: 100, marginTop: 110 }}
          >
            <View style={{ alignItems: "center", marginBottom: 20 }}>
              <Text style={styles.text}>로그인 후 확인할 수 있습니다.</Text>
              <Text style={styles.text}>로그인 해 주세요.</Text>
            </View>
            <TouchableOpacity
              style={styles.buttonLogin}
              onPressOut={() => {
                props.navigation.navigate("LogIn");
              }}
            >
              <Text style={styles.loginText}>로그인</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
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
  loginText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF"
  },
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "flex-start"
  },
  containerTM: {
    backgroundColor: "white",
    alignItems: "center",
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 80
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

SearchScreen.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  cases: PropTypes.array
};

export default SearchScreen;
