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

const { width, height } = Dimensions.get("window");

const Photo = props => {
  return (
    <View style={styles.photo}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: width - 150,
          alignItems: "center"
        }}
      >
        <Text style={styles.title}>{props.caseInfo.trademark_title}</Text>
        <View style={styles.badgeClass}>
          <Text style={{ color: "grey" }}>제03류</Text>
        </View>
      </View>
      <View>
        <FadeIn>
          <Image
            source={{ uri: props.caseInfo.trademark_image }}
            style={{
              width: width - 131,
              height: width - 140,
              marginHorizontal: 10,
              resizeMode: "cover"
            }}
          />
        </FadeIn>
        <View style={styles.badge}>
          <Text style={{ fontSize: 14, fontWeight: "200" }}>
            {props.caseInfo.progress_status}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: width - 150,
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
  photo: {
    backgroundColor: "white",
    marginTop: 15,
    marginBottom: 15,
    marginHorizontal: 15,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    width: width - 130,
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    shadowColor: "#bbb",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2
  },
  badge: {
    position: "absolute",
    justifyContent: "center",
    height: 25,
    borderRadius: 5,
    backgroundColor: "white",
    left: 25,
    top: 15,
    paddingHorizontal: 6,
    borderWidth: StyleSheet.hairlineWidth
  },
  badgeClass: {
    justifyContent: "center",
    height: 25,
    borderRadius: 5,
    backgroundColor: "#FFFF00",
    paddingHorizontal: 6,
    borderWidth: StyleSheet.hairlineWidth
  },

  title: {
    marginVertical: 5,
    fontSize: 25,
    fontWeight: "200"
  },

  content: {
    flex: 4,
    justifyContent: "center",
    paddingVertical: 10
  }
});

export default withNavigation(Photo);
