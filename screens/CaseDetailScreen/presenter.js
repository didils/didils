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
import { PURPLE } from "../../constants";
import CaseProgressVertical from "../../components/CaseProgressVertical";

const { width, height } = Dimensions.get("window");

const CaseDetailScreen = props => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.top}>
          <View style={styles.topLeft}>
            <FadeIn>
              <Image source={{ uri: props.cases.file }} style={styles.image} />
            </FadeIn>
          </View>
          <View style={styles.topRight}>
            <View>
              <Text style={{ fontSize: 26, fontWeight: "100", color: "black" }}>
                {props.cases.trademark_title}
              </Text>
            </View>
            <View style={styles.textContainer}>
              <View style={styles.textContainerLeft}>
                <Text style={styles.textInfo}>출원일</Text>
              </View>
              <View style={styles.textContainerRight}>
                <Text style={styles.textInfoRight}>
                  {props.cases.filed_date}
                </Text>
              </View>
            </View>
            <View style={styles.textContainer}>
              <View style={styles.textContainerLeft}>
                <Text style={styles.textInfo}>출원번호</Text>
              </View>
              <View style={styles.textContainerRight}>
                <Text style={styles.textInfoRight}>
                  {props.cases.application_number}
                </Text>
              </View>
            </View>
            <View style={styles.textContainer}>
              <View style={styles.textContainerLeft}>
                <Text style={styles.textInfo}>진행 상태</Text>
              </View>
              <View style={styles.textContainerRight}>
                <Text style={styles.textInfoRight}>
                  {props.cases.progress_status}
                </Text>
              </View>
            </View>
            <View style={styles.textContainer}>
              <View style={styles.textContainerLeft}>
                <Text style={styles.textInfo}>지정상품</Text>
              </View>
              <View style={styles.textContainerRight}>
                <Text
                  style={styles.textInfoRight}
                  numberOfLines={3}
                  ellipsizeMode={"tail"}
                >
                  {props.cases.products}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Divider />
        <View style={{ flex: 4 }}>
          {props.cases.progress_status != "등록" && (
            <CaseProgressVertical caseInfo={props.cases} />
          )}
        </View>
        <View style={{ flex: 5, alignItems: "center", paddingTop: 20 }}>
          <TouchableOpacity
            style={styles.button}
            onPressOut={() => {
              props.navigation.navigate("FileList", { cases: props.cases });
            }}
          >
            <Text style={styles.text}>관련 </Text>
            <Text style={styles.textPurple}>파일 열람</Text>
            <Text style={styles.text}>하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>이 사건에 대해 </Text>
            <Text style={styles.textPurple}>문의</Text>
            <Text style={styles.text}>하기</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    color: "darkgrey",
    fontWeight: "300"
  },
  textInfoRight: {
    color: "black",
    fontWeight: "100"
  },
  image: {
    width: width / 4,
    height: width / 4,
    marginHorizontal: 10,
    resizeMode: "cover",
    borderRadius: 3
  },
  top: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 20,
    paddingTop: 15
  },
  topLeft: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  topRight: {
    flex: 2,
    justifyContent: "center"
  },
  text: {
    fontSize: 16,
    fontWeight: "100",
    color: "black"
  },
  textPurple: {
    fontSize: 16,
    fontWeight: "400",
    color: PURPLE
  },
  button: {
    width: Dimensions.get("window").width - 40,
    backgroundColor: "#FBFBFB",
    height: 40,
    borderRadius: 2,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    flexDirection: "row"
  }
});

CaseDetailScreen.propTypes = {};

export default CaseDetailScreen;
