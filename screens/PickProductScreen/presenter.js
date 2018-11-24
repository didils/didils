import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
  ScrollView,
  Alert
} from "react-native";
import ActionSheet from "react-native-actionsheet";
import ClassItem from "../../components/ClassItem";
import SelectedItem from "../../components/SelectedItem";

const { width, height } = Dimensions.get("window");

class PickProductScreen extends Component {
  showActionSheet = () => {
    this.ActionSheet.show();
  };

  render() {
    const { navigation } = this.props;
    const {
      navigation: {
        state: {
          params: { url }
        }
      }
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.svContainer}>
          <ScrollView>
            <View style={styles.title}>
              <Text
                style={{ fontSize: 40, fontWeight: "200", marginBottom: 5 }}
              >
                지정상품 입력하기
              </Text>
              <Text style={{ fontSize: 17, fontWeight: "100" }}>
                상표의 '사용범위'를 지정해야 합니다.
              </Text>
              <Text style={{ fontSize: 17, fontWeight: "100" }}>
                어디에 사용하실건가요?
              </Text>
              <Text style={{ fontSize: 22, fontWeight: "200", marginTop: 20 }}>
                지정상품 검색 키워드
              </Text>
              <TextInput
                style={styles.textInput}
                placeholder="검색 키워드"
                autoCorrect={false}
                autoCapitalize={"none"}
                returnKeyType={"search"}
                value={this.props.searchingBy}
                onChangeText={this.props.changeText}
                onSubmitEditing={this.props.submitSearch}
              />
              {this.props.selectedProduct.length > 0 && (
                <View style={styles.productlist}>
                  <Text style={{ marginLeft: 10, flex: 1, marginBottom: 5 }}>
                    선택된 지정상품: {this.props.selectedProduct.length}개
                  </Text>
                  <View
                    style={{ flexDirection: "row", flex: 1, flexWrap: "wrap" }}
                  >
                    {this.props.selectedProduct.map((search, index) => (
                      <SelectedItem
                        key={index}
                        extract={this.props.extract}
                        extractArray={this.props.extractArray}
                        productName={search}
                        search={this.props.search}
                        classify={this.props.classify}
                      />
                    ))}
                  </View>
                </View>
              )}
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
              <View style={styles.box}>
                <Image source={{ uri: url }} style={styles.image} />
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.button}
            onPressOut={() => navigation.goBack(null)}
          >
            <Text style={{ fontSize: 18, color: "black", fontWeight: "200" }}>
              뒤로
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPressOut={() => navigation.navigate("Summary")}
          >
            <Text style={{ fontSize: 18, color: "black", fontWeight: "200" }}>
              다음
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  svContainer: {
    flex: 10
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
    flex: 5,
    backgroundColor: "white",
    justifyContent: "flex-start",
    paddingLeft: 30,
    paddingTop: 30
  },
  box: {
    flex: 3,
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 60,
    paddingLeft: 40
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width - 200,
    height: Dimensions.get("window").width - 200,
    backgroundColor: "#31A5FF",
    borderRadius: 10,
    marginBottom: 100
  },
  textInput: {
    height: 50,
    borderColor: "#bbb",
    borderWidth: StyleSheet.hairlineWidth,
    width: width - 60,
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 15,
    paddingHorizontal: 10,
    backgroundColor: "#FAFAFA",
    fontSize: 17
  },
  notFound: {
    color: "#bbb",
    fontWeight: "600",
    alignSelf: "center",
    textAlign: "center",
    width,
    marginTop: 20
  },
  productlist: {
    backgroundColor: "#FAFAFA",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#bbb",
    marginBottom: 5,
    paddingVertical: 10,
    width: width - 45,
    paddingHorizontal: 10,
    flexWrap: "wrap"
  }
});

export default PickProductScreen;
