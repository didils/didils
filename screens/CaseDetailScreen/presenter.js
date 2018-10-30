import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image
} from "react-native";
import FadeIn from "react-native-fade-in-image";
import { Divider } from "react-native-elements";

const { width, height } = Dimensions.get("window");

const CaseDetailScreen = props => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.topLeft}>
          <FadeIn>
            <Image
              source={{ uri: props.cases.trademark_image }}
              style={styles.image}
            />
          </FadeIn>
        </View>
        <View style={styles.topRight}>
          <View>
            <Text style={{ fontSize: 26, fontWeight: "100", color: "#grey" }}>
              {props.cases.trademark_title}
            </Text>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textContainerLeft}>
              <Text style={styles.textInfo}>출원일</Text>
            </View>
            <View style={styles.textContainerRight}>
              <Text>{props.cases.filed_date}</Text>
            </View>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textContainerLeft}>
              <Text style={styles.textInfo}>출원번호</Text>
            </View>
            <View style={styles.textContainerRight}>
              <Text>{props.cases.application_number}</Text>
            </View>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textContainerLeft}>
              <Text style={styles.textInfo}>진행 상태</Text>
            </View>
            <View style={styles.textContainerRight}>
              <Text>{props.cases.progress_status}</Text>
            </View>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textContainerLeft}>
              <Text style={styles.textInfo}>지정상품</Text>
            </View>
            <View style={styles.textContainerRight}>
              <Text>{props.cases.products}</Text>
            </View>
          </View>
        </View>
      </View>
      <Divider />
      <View style={{ flex: 4 }}>
        <Text>{props.cases.trademark_image}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  textContainerLeft: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  textContainerRight: {
    flex: 3,
    marginLeft: 10,
    justifyContent: "center"
  },
  textContainer: {
    flexDirection: "row",
    marginTop: 5
  },
  textInfo: {
    color: "#bbb",
    fontWeight: "500"
  },
  image: {
    width: width - 300,
    height: width - 300,
    marginHorizontal: 10,
    resizeMode: "cover",
    borderRadius: 3
  },
  top: {
    flex: 1,
    flexDirection: "row"
  },
  topLeft: {
    flex: 1,
    justifyContent: "center"
  },
  topRight: {
    flex: 2,
    justifyContent: "center"
  }
});

CaseDetailScreen.propTypes = {};

export default CaseDetailScreen;
