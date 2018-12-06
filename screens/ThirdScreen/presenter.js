import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ActivityIndicator
} from "react-native";
import FadeIn from "react-native-fade-in-image";
import { PURPLE } from "../../constants";

import SelectedClassItemFinal from "../../components/SelectedClassItemFinal";

const { width, height } = Dimensions.get("window");

class ThirdScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ flex: 10 }}>
          <ScrollView>
            <View style={styles.upper}>
              <Text style={styles.text}>신청 내용 확인하기</Text>
            </View>
            <View style={styles.lower}>
              <Text style={styles.title}>지정된 상표</Text>
              <View style={{ alignItems: "center" }}>
                {navigation.state.params.url ? (
                  <Image
                    source={{ uri: navigation.state.params.url }}
                    style={styles.Image}
                  />
                ) : (
                  <Image
                    source={require("../../assets/images/photoPlaceholder.png")}
                    style={styles.Image}
                  />
                )}
              </View>
              <Text style={styles.title}>
                지정된 출원인: 총 {this.props.applicantsArray.length}명
              </Text>
              {this.props.applicantsArray.map((applicant, index) => (
                <Text
                  key={index}
                  style={{ fontSize: 16, paddingLeft: 20, marginBottom: 10 }}
                >
                  {applicant.representName}
                </Text>
              ))}
              <Text style={styles.title}>지정된 상품</Text>
              <View style={{ alignItems: "center" }}>
                {this.props.activeClass.map((search, index) => (
                  <SelectedClassItemFinal
                    key={index}
                    class={search.class}
                    classArray={search.classArray}
                  />
                ))}
              </View>
              <View style={{ alignItems: "flex-end", width }}>
                <TouchableOpacity
                  style={{
                    paddingVertical: 9,
                    borderRadius: 3,
                    backgroundColor: PURPLE,
                    paddingHorizontal: 13,
                    marginRight: 15,
                    marginTop: 15,
                    marginBottom: 30,
                    width: 70,
                    alignItems: "center"
                  }}
                  onPressOut={() => {
                    if (
                      navigation.state.params.url &&
                      this.props.trademark_title
                    ) {
                      this.props.submitCase(navigation.state.params.url);
                      this.props.changeToSubmit();
                    } else if (
                      !navigation.state.params.url &&
                      this.props.trademark_title
                    ) {
                      this.props.submitCaseWithoutImage();
                      this.props.changeToSubmit();
                    } else if (
                      navigation.state.params.url &&
                      !this.props.trademark_title
                    ) {
                      this.props.submitCaseWithoutTitle(
                        navigation.state.params.url
                      );
                      this.props.changeToSubmit();
                    } else {
                      alert("에러: 죄송합니다. 처음부터 다시 신청해 주세요.");
                    }
                  }}
                >
                  {this.props.isSubmitting ? (
                    <ActivityIndicator size="small" color="white" />
                  ) : (
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: "600",
                        color: "white"
                      }}
                    >
                      결제
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: PURPLE,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10
          }}
        >
          <Text style={styles.price}>총 결제 금액</Text>
          {this.props.isProductsSelected ? (
            <Text style={styles.price}>
              {this.props.changeFormat(this.props.totalPrice)} 원
            </Text>
          ) : (
            <Text style={styles.price}>0 원</Text>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  selectButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: 3,
    marginVertical: 3
  },
  title: {
    fontSize: 19,
    fontWeight: "600",
    marginVertical: 7,
    paddingLeft: 15,
    marginBottom: 10,
    marginTop: 20
  },
  price: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
    marginRight: 5
  },
  Image: { height: width / 3, width: width / 3, borderRadius: 3, margin: 5 },
  upper: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height: height / 6
  },
  lower: {
    flex: 4,
    backgroundColor: "white"
  },
  text: {
    fontSize: 24,
    fontWeight: "300",
    color: "black"
  },
  textHighlight: {
    fontSize: 18,
    fontWeight: "600",
    color: PURPLE,
    marginBottom: 10
  },
  container: {
    backgroundColor: "white",
    flex: 1
  },
  image: {
    width: width / 2,
    height: width / 2,
    marginHorizontal: 10,
    resizeMode: "cover",
    borderRadius: 3
  },
  textInput: {
    height: 35,
    borderColor: "#bbb",
    borderWidth: StyleSheet.hairlineWidth,
    width: width * 0.7,
    borderRadius: 2,
    backgroundColor: "#FAFAFA",
    fontSize: 15,
    paddingLeft: 10
  },
  selectButtonDescription: {
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    marginHorizontal: 10,
    borderRadius: 3,
    marginVertical: 3
  },
  textInputDescription: {
    height: 100,
    borderColor: "#bbb",
    borderWidth: StyleSheet.hairlineWidth,
    width: width * 0.9,
    borderRadius: 2,
    backgroundColor: "#FAFAFA",
    fontSize: 15,
    paddingHorizontal: 10,
    alignItems: "flex-start",
    marginTop: 10
  }
});

export default ThirdScreen;
