import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  Alert
} from "react-native";
import { withNavigation } from "react-navigation";
import FadeIn from "react-native-fade-in-image";
import { PURPLE } from "../../constants";

const { width, height } = Dimensions.get("window");

const Photo = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: width * 0.8,
          alignItems: "center"
        }}
      >
        <Text style={styles.title}>{props.caseInfo.trademark_title}</Text>
        <View style={styles.badge}>
          <Text style={{ fontSize: 14, fontWeight: "400", color: "white" }}>
            {props.caseInfo.progress_status}
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderTopWidth: StyleSheet.hairlineWidth,
          borderColor: "lightgrey"
        }}
      >
        {props.caseInfo.file ? (
          <Image
            source={{ uri: props.caseInfo.file }}
            style={{
              width: width * 0.8,
              height: width * 0.899,
              marginHorizontal: 10,
              resizeMode: "contain"
            }}
          />
        ) : (
          <Image
            source={require("../../assets/images/photoPlaceholder.png")}
            style={{
              width: width * 0.8,
              height: width * 0.899,
              marginHorizontal: 10,
              resizeMode: "contain"
            }}
          />
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          width: width * 0.8,
          justifyContent: "flex-end",
          paddingTop: 15,
          paddingBottom: 10
        }}
      >
        <TouchableOpacity
          onPressOut={() =>
            props.navigation.navigate("caseDetail", {
              cases: props.caseInfo
            })
          }
        >
          <Text style={{ fontSize: 14, fontWeight: "500" }}>상세 보기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    marginTop: 15,
    marginBottom: 15,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.9,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
    shadowColor: "#bbb",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.9,
    shadowRadius: 2
  },
  badge: {
    justifyContent: "center",
    alignItems: "center",
    height: 26,
    borderRadius: 11,
    backgroundColor: PURPLE,
    paddingHorizontal: 8
  },
  title: {
    marginVertical: 5,
    fontSize: 26,
    fontWeight: "200"
  },
  content: {
    flex: 4,
    justifyContent: "center",
    paddingVertical: 10
  }
});

export default withNavigation(Photo);
