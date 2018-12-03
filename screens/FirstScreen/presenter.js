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
  TextInput
} from "react-native";
import { PURPLE } from "../../constants";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import ActionSheet from "react-native-actionsheet";
import SelectedClassPrice from "../../components/SelectedClassPrice";
import { Divider } from "react-native-elements";

const { width, height } = Dimensions.get("window");

class FirstScreen extends Component {
  showActionSheet = () => {
    this.ActionSheet.show();
  };
  state = {
    text: "",
    descriptions: ""
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ flex: 10 }}>
          <ScrollView>
            <View style={styles.upper}>
              <Text style={styles.text}>출원하기</Text>
            </View>
            <View style={styles.lower}>
              <View style={styles.selectButton}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 8
                  }}
                >
                  <Ionicons name={"md-text"} size={25} color={"grey"} />
                  <View style={{ paddingLeft: 20 }}>
                    <TextInput
                      placeholder="상표명을 입력해 주세요."
                      style={styles.textInput}
                      autoCapitalize={"none"}
                      autoCorrect={false}
                      onChangeText={text => this.props.setTrademarkTitle(text)}
                      value={this.state.text}
                    />
                  </View>
                </View>
              </View>

              <TouchableOpacity
                onPressOut={() => {
                  if (navigation.state.params) {
                    Alert.alert(
                      "이미지 교체",
                      "이미지를 교체 하시겠습니까?",
                      [
                        {
                          text: "취소",
                          onPress: () => console.log("Cancel Pressed"),
                          style: "cancel"
                        },
                        {
                          text: "확인",
                          onPress: () => {
                            this.showActionSheet();
                          }
                        }
                      ],
                      { cancelable: true }
                    );
                  } else {
                    this.showActionSheet();
                  }
                }}
              >
                <View style={styles.selectButton}>
                  {navigation.state.params ? (
                    <Image
                      source={{ uri: navigation.state.params.url }}
                      style={styles.Image}
                    />
                  ) : (
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 8
                      }}
                    >
                      <Ionicons name={"md-images"} size={25} color={"grey"} />
                      <Text style={{ marginLeft: 20 }}>상표 이미지 올리기</Text>
                    </View>
                  )}
                  <Ionicons
                    name={"ios-arrow-forward"}
                    size={25}
                    color={"grey"}
                  />
                </View>
              </TouchableOpacity>
              <Divider style={{ backgroundColor: PURPLE }} />
              <View
                style={{
                  alignItems: "center",
                  paddingVertical: 10,
                  marginBottom: 15
                }}
              >
                <Text style={{ color: PURPLE, fontSize: 13, marginLeft: 10 }}>
                  상표명과 이미지 중 하나는 필수 (둘 다 입력 가능)
                </Text>
              </View>
              {this.props.applicantsArray.length > 0 ? (
                <TouchableOpacity
                  onPressOut={() => {
                    navigation.navigate("PickApplicant");
                  }}
                >
                  <View style={styles.selectButton}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 8
                      }}
                    >
                      <Ionicons name={"md-contact"} size={25} color={"grey"} />
                      <View style={{ marginLeft: 20 }}>
                        <Text style={{ marginBottom: 5 }}>
                          신청인 추가/수정하기
                        </Text>
                        {this.props.applicantsArray.length == 1 ? (
                          <Text>
                            신청인:{" "}
                            {this.props.applicantsArray[0].representName}
                          </Text>
                        ) : (
                          <Text>
                            신청인:{" "}
                            {this.props.applicantsArray[0].representName} 외{" "}
                            {this.props.applicantsArray.length - 1} 명
                          </Text>
                        )}
                      </View>
                    </View>
                    <View />
                    <Ionicons
                      name={"ios-arrow-forward"}
                      size={25}
                      color={"grey"}
                    />
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPressOut={() => {
                    navigation.navigate("PickApplicant");
                  }}
                >
                  <View style={styles.selectButton}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 8
                      }}
                    >
                      <Ionicons name={"md-contact"} size={25} color={"grey"} />
                      <Text style={{ marginLeft: 20 }}>신청인 지정하기</Text>
                      <Text
                        style={{ fontSize: 13, marginLeft: 10, color: PURPLE }}
                      >
                        필수
                      </Text>
                    </View>
                    <Ionicons
                      name={"ios-arrow-forward"}
                      size={25}
                      color={"grey"}
                    />
                  </View>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                onPressOut={() => navigation.navigate("Second")}
              >
                {this.props.isProductsSelected ? (
                  <View style={styles.selectButton}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 8
                      }}
                    >
                      <Ionicons name={"md-cube"} size={25} color={"grey"} />
                      <Text style={{ marginLeft: 20 }}>지정상품 수정하기</Text>
                    </View>
                    <Ionicons
                      name={"ios-arrow-forward"}
                      size={25}
                      color={"grey"}
                    />
                  </View>
                ) : (
                  <View style={styles.selectButton}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 8
                      }}
                    >
                      <Ionicons name={"md-cube"} size={25} color={"grey"} />
                      <Text style={{ marginLeft: 20 }}>상품 지정하기</Text>
                      <Text
                        style={{ fontSize: 13, marginLeft: 10, color: PURPLE }}
                      >
                        필수
                      </Text>
                    </View>
                    <Ionicons
                      name={"ios-arrow-forward"}
                      size={25}
                      color={"grey"}
                    />
                  </View>
                )}
              </TouchableOpacity>
              <View>
                {this.props.isProductsSelected ? (
                  <View
                    style={{
                      borderWidth: StyleSheet.hairlineWidth,
                      borderColor: "#bbb"
                    }}
                  >
                    {this.props.activeClass.map((search, index) => {
                      return (
                        <SelectedClassPrice
                          key={index}
                          index={index}
                          class={search.class}
                          classArray={search.classArray}
                          extract={this.props.extract}
                          extractArray={this.props.extractArray}
                          search={this.props.search}
                          classify={this.props.classify}
                        />
                      );
                    })}
                  </View>
                ) : null}
              </View>
            </View>
            <View style={styles.selectButtonDescription}>
              <View
                style={{
                  marginVertical: 8
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text>요구사항</Text>
                  <Text style={{ fontSize: 13, marginLeft: 10, color: PURPLE }}>
                    선택
                  </Text>
                </View>

                <TextInput
                  placeholder="기타 요구사항을 입력해 주세요."
                  style={styles.textInputDescription}
                  autoCapitalize={"none"}
                  autoCorrect={false}
                  multiline={true}
                  onChangeText={descriptions =>
                    this.props.setDescription(descriptions)
                  }
                  value={this.state.descriptions}
                />
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
          <Text>예상 가격</Text>
          <TouchableOpacity
            onPressOut={() => {
              if (!this.props.products) {
                alert("지정상품을 지정해 주세요!");
              } else if (
                navigation.state.params ||
                this.props.trademark_title
              ) {
                navigation.navigate("Third");
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

        <ActionSheet
          ref={o => (this.ActionSheet = o)}
          title={"출원하고 싶은 상표 이미지를.."}
          options={["앨범에서 고르기", "카메라로 촬영하기", "취소"]}
          cancelButtonIndex={2}
          onPress={index => {
            if (index == 0) {
              navigation.navigate("Library");
            } else if (index == 1) {
              navigation.navigate("Camera");
            }
          }}
        />
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
    backgroundColor: "white",
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

export default FirstScreen;
