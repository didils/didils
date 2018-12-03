import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
  TextInput,
  ScrollView
} from "react-native";
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
              <Text style={{ marginVertical: 7, paddingLeft: 5 }}>
                지정된 출원인
              </Text>
              {this.props.applicantsArray.map((applicant, index) => (
                <Text key={index}>{applicant.representName}</Text>
              ))}
              <Text style={{ marginVertical: 7, paddingLeft: 5 }}>
                선택된 지정상품
              </Text>
              {this.props.activeClass.map((search, index) => (
                <SelectedClassItemFinal
                  key={index}
                  class={search.class}
                  classArray={search.classArray}
                />
              ))}
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
          <Text>예상 가격</Text>
          <TouchableOpacity
            onPressOut={() => {
              if (!this.props.products) {
                alert("지정상품을 지정해 주세요!");
              } else if (navigation.state.params) {
                this.props.submitCase(navigation.state.params.url);
              } else if (this.props.trademark_title) {
                this.props.submitCaseWithoutImage();
              } else {
                alert("상표명을 입력하거나 이미지를 올려주세요");
              }
            }}
          >
            {this.props.isProductsSelected ? (
              <Text style={styles.price}>
                {this.props.changeFormat(this.props.totalPrice)} 원
              </Text>
            ) : (
              <Text style={styles.price}>0 원</Text>
            )}
          </TouchableOpacity>
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
  price: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
    marginRight: 5
  },
  Image: { height: 70, width: 70, borderRadius: 3, margin: 5 },
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
