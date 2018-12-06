import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
  TextInput
} from "react-native";
import { PURPLE } from "../../constants";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import ApplicantItem from "../../components/ApplicantItem";
import { Divider } from "react-native-elements";

const { width, height } = Dimensions.get("window");

class PickApplicantScreen extends Component {
  state = {
    representName: "",
    representAddress: "",
    representNameEn: ""
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 10 }}>
          <ScrollView>
            <View style={styles.upper}>
              <Text style={styles.text}>신청인 지정하기</Text>
              <Text style={styles.textApp}>출원인 지정하기</Text>
            </View>
            <View style={styles.lower}>
              <View style={styles.applicant}>
                <Text style={{ marginBottom: 7, paddingLeft: 5 }}>성함</Text>
                <TextInput
                  placeholder="홍길동"
                  style={styles.textInput}
                  autoCapitalize={"none"}
                  autoCorrect={false}
                  onChangeText={representName =>
                    this.setState({ representName })
                  }
                  value={this.state.representName}
                />
                <Text style={{ marginVertical: 7, paddingLeft: 5 }}>
                  영문 성함
                </Text>
                <TextInput
                  placeholder="Hong, gil dong"
                  style={styles.textInput}
                  autoCapitalize={"none"}
                  autoCorrect={false}
                  onChangeText={representNameEn =>
                    this.setState({ representNameEn })
                  }
                  value={this.state.representNameEn}
                />
                <Text style={{ marginVertical: 7, paddingLeft: 5 }}>주소</Text>
                {this.props.navigation.state.params ? (
                  <View>
                    <TouchableOpacity
                      onPressOut={() =>
                        this.props.navigation.navigate("Address")
                      }
                    >
                      <View
                        style={{
                          backgroundColor: "#FAFAFA",
                          borderRadius: 3,
                          marginVertical: 3
                        }}
                      >
                        <View style={styles.selectButton}>
                          <View
                            style={{
                              alignItems: "flex-start",
                              marginVertical: 8,
                              justifyContent: "flex-start"
                            }}
                          >
                            <Ionicons
                              name={"ios-pin"}
                              size={25}
                              color={"grey"}
                            />
                            <View>
                              <Text
                                style={{
                                  color: "grey",
                                  fontSize: 15,
                                  fontWeight: "600",
                                  marginTop: 10
                                }}
                              >
                                {this.props.navigation.state.params.roadAddr}
                              </Text>
                              <Text
                                style={{
                                  color: "grey",
                                  fontSize: 15,
                                  fontWeight: "600"
                                }}
                              >
                                {
                                  this.props.navigation.state.params
                                    .detailAddress
                                }
                              </Text>
                            </View>
                          </View>
                          <Ionicons
                            name={"ios-arrow-forward"}
                            size={25}
                            color={"grey"}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                    <View style={{ alignItems: "flex-end" }}>
                      <TouchableOpacity
                        onPressOut={() => {
                          this.props.setApplicantsArray([
                            ...this.props.applicantsArray,
                            {
                              representName: this.state.representName,
                              representNameEn: this.state.representNameEn,
                              address: `${
                                this.props.navigation.state.params.roadAddr
                              } ${
                                this.props.navigation.state.params.detailAddress
                              }`
                            }
                          ]);
                          this.setState({
                            representName: "",
                            representNameEn: ""
                          });
                        }}
                      >
                        <View
                          style={{
                            marginRight: 12,
                            marginBottom: 5,
                            borderColor: PURPLE,
                            borderWidth: StyleSheet.hairlineWidth,
                            borderRadius: 3,
                            padding: 3
                          }}
                        >
                          <Text style={{ color: PURPLE, fontSize: 13 }}>
                            목록에 추가
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                ) : (
                  <TouchableOpacity
                    onPressOut={() => this.props.navigation.navigate("Address")}
                  >
                    <View style={styles.selectButton}>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginVertical: 8
                        }}
                      >
                        <Ionicons name={"ios-pin"} size={25} color={"grey"} />
                        <Text style={{ marginLeft: 20 }}>주소 검색</Text>
                      </View>
                      <Ionicons
                        name={"ios-arrow-forward"}
                        size={25}
                        color={"grey"}
                      />
                    </View>
                  </TouchableOpacity>
                )}
                <Divider />
                <View
                  style={{
                    alignItems: "flex-start",
                    paddingTop: 30,
                    width
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      color: PURPLE,
                      marginBottom: 15,
                      paddingLeft: 15
                    }}
                  >
                    선택된 출원인(신청인) 목록 :{" "}
                    {this.props.applicantsArray.length}명 선택됨
                  </Text>
                  <View style={{ alignItems: "center", width }}>
                    {this.props.applicantsArray.length > 0 ? (
                      <View style={{ alignItems: "center" }}>
                        {this.props.applicantsArray.map((applicant, index) => (
                          <ApplicantItem
                            applicant={applicant}
                            key={index}
                            number={index}
                            extractApplicant={this.props.extractApplicant}
                          />
                        ))}
                        <View style={{ alignItems: "flex-end", width }}>
                          <TouchableOpacity
                            style={{
                              paddingVertical: 7,
                              borderRadius: 3,
                              backgroundColor: PURPLE,
                              paddingHorizontal: 10,
                              marginRight: 15,
                              marginVertical: 15
                            }}
                            onPressOut={() => {
                              Alert.alert(
                                "신청인 정보 입력 완료?",
                                "확인",
                                [
                                  {
                                    text: "취소",
                                    style: "cancel"
                                  },
                                  {
                                    text: "확인",
                                    onPress: () => {
                                      this.props.navigation.goBack(null);
                                    }
                                  }
                                ],
                                { cancelable: true }
                              );
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 17,
                                fontWeight: "600",
                                color: "white"
                              }}
                            >
                              지정 완료
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    ) : (
                      <Text style={{ paddingLeft: 10 }}>
                        현재 선택된 신청인이 없습니다.
                      </Text>
                    )}
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    backgroundColor: "white"
  },
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
  upper: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height: height / 6
  },
  textInput: {
    height: 35,
    borderColor: "#bbb",
    borderWidth: StyleSheet.hairlineWidth,
    width: width * 0.97,
    borderRadius: 2,
    backgroundColor: "white",
    fontSize: 15,
    paddingLeft: 10,
    marginBottom: 5
  },
  lower: {
    flex: 4,
    backgroundColor: "white",
    alignItems: "center"
  },
  text: {
    fontSize: 24,
    fontWeight: "300",
    color: "black"
  },
  textApp: {
    fontSize: 14,
    fontWeight: "100",
    color: "grey"
  },
  applicant: {
    width: width * 0.98,
    borderRadius: 2
  }
});

export default PickApplicantScreen;
