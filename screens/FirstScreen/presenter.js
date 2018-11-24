import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert
} from "react-native";
import Photo from "../../components/Photo";
import { PURPLE } from "../../constants";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import ActionSheet from "react-native-actionsheet";
import SelectedClassPrice from "../../components/SelectedClassPrice";

const { width, height } = Dimensions.get("window");

class FirstScreen extends Component {
  showActionSheet = () => {
    this.ActionSheet.show();
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
                  <View style={{ height: 500 }}>
                    {this.props.classifiedSelected.map((search, index) => (
                      <SelectedClassPrice
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
                ) : null}
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
            alignItems: "center"
          }}
        >
          <Text>Fixed View</Text>
          <TouchableOpacity
            onPressOut={() => {
              this.props.submitCase();
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "600",
                fontSize: 20
              }}
            >
              200,000 원
            </Text>
          </TouchableOpacity>
        </View>
        <ActionSheet
          ref={o => (this.ActionSheet = o)}
          title={"출원하고 싶은 상표 이미지를.."}
          options={[
            "앨범에서 고르기",
            "카메라로 촬영하기",
            "텍스트로 입력하기",
            "취소"
          ]}
          cancelButtonIndex={3}
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
  }
});

export default FirstScreen;
