import React, { Component } from "react";
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
import { SearchBar } from "react-native-elements";

import ClassItem from "../../components/ClassItem";
import SelectedClassItem from "../../components/SelectedClassItem";

const { width, height } = Dimensions.get("window");

class SecondScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upper}>
          <TouchableOpacity
            onPressOut={() => {
              Alert.alert(
                "상품지정완료?",
                "확인",
                [
                  {
                    text: "취소",
                    style: "cancel"
                  },
                  {
                    text: "확인",
                    onPress: () => {
                      this.props.setDesignatedArray(
                        this.props.pickClassifiedProduct(
                          this.props.classifiedSelected
                        )
                      );
                      this.props.setProduct(
                        this.props.makeProductString(this.props.selectedProduct)
                      );
                      this.props.setApplicantsArray([]);
                      this.props.setDescription("");
                      this.props.navigation.goBack(null);
                    }
                  }
                ],
                { cancelable: true }
              );
            }}
          >
            <Text style={{ fontSize: 20, marginTop: 10 }}>상품 지정하기</Text>
          </TouchableOpacity>
          <SearchBar
            lightTheme
            containerStyle={{
              backgroundColor: "white",
              width: width * 0.98,
              borderColor: "white",
              borderWidth: 0
            }}
            inputStyle={{
              backgroundColor: "#FAFAFA",
              paddingLeft: 35
            }}
            placeholder="검색 키워드"
            autoCorrect={false}
            autoCapitalize={"none"}
            returnKeyType={"search"}
            value={this.props.searchingBy}
            onChangeText={this.props.changeText}
            onSubmitEditing={this.props.submitSearch}
          />
        </View>
        <View style={styles.lower}>
          <ScrollView contentContainerStyle={{ alignItems: "center" }}>
            {this.props.search.length === 0 &&
            this.props.searchingBy.length > 1 ? (
              <Text style={styles.notFound}>
                No products found for {this.props.searchingBy}
              </Text>
            ) : (
              this.props.classifiedProduct.map((search, index) => (
                <ClassItem
                  key={index}
                  class={search.class}
                  classArray={search.classArray}
                />
              ))
            )}
            <View style={{ alignItems: "center", margin: 40 }}>
              <Text style={styles.examText}>검색 예시</Text>
              <Text style={styles.examText}>1. 카페</Text>
              <Text style={styles.examText}>2. 속옷</Text>
              <Text style={styles.examText}>3. 의류</Text>
            </View>
          </ScrollView>
        </View>
        {this.props.classifiedSelected.length > 0 && (
          <View style={styles.productlist}>
            <ScrollView>
              <Text style={{ marginLeft: 10, marginBottom: 5 }}>
                선택된 지정상품: {this.props.selectedProduct.length}개
              </Text>
              <View>
                {this.props.classifiedSelected.map((search, index) => (
                  <SelectedClassItem
                    key={index}
                    class={search.class}
                    classArray={search.classArray}
                    extract={this.props.extract}
                    extractArray={this.props.extractArray}
                    search={this.props.search}
                    classify={this.props.classify}
                  />
                ))}
              </View>
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  examText: {
    fontSize: 16,
    color: "grey"
  },
  upper: {
    flex: 2,
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center"
  },
  lower: {
    flex: 5,
    backgroundColor: "white"
  },
  fixed: {
    flex: 3
  },
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "flex-start"
  },
  productlist: {
    backgroundColor: "white",
    alignItems: "center",
    borderColor: "#bbb",
    width: width,
    paddingTop: 5,
    flexWrap: "wrap",
    flex: 3,
    borderTopWidth: StyleSheet.hairlineWidth
  }
});

SecondScreen.propTypes = {};

export default SecondScreen;
