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
import AddressItem from "../../components/AddressItem";

const { width, height } = Dimensions.get("window");

class AddressScreen extends Component {
  state = {
    searchKeyword: "",
    isSelected: false,
    detailAddress: "",
    roadAddr: ""
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 10 }}>
          <ScrollView>
            <View style={styles.upper}>
              <Text style={styles.text}>주소 검색</Text>
            </View>
            <View style={styles.lower}>
              <TextInput
                placeholder="예) 판교역로 235, 분당 주공, 삼평동 681"
                style={styles.textInput}
                autoCapitalize={"none"}
                autoCorrect={false}
                onChangeText={searchKeyword => {
                  this.setState({ searchKeyword, isSelected: false });
                }}
                onSubmitEditing={() =>
                  this.props.getAddress(this.state.searchKeyword)
                }
                value={this.state.searchKeyword}
              />
              {this.props.address && !this.state.isSelected ? (
                this.props.address.map((cases, index) => (
                  <AddressItem
                    address={cases}
                    key={index}
                    setAddr={this._setAddr}
                  />
                ))
              ) : (
                <View style={styles.addContainer}>
                  <Text
                    style={{
                      color: PURPLE,
                      fontSize: 15,
                      fontWeight: "600",
                      marginBottom: 15
                    }}
                  >
                    나머지 주소를 입력해 주세요
                  </Text>
                  <Text
                    style={{
                      color: "grey",
                      fontSize: 15,
                      fontWeight: "600",
                      marginBottom: 15
                    }}
                  >
                    {this.state.roadAddr}
                  </Text>
                  <TextInput
                    placeholder="예) OO빌딩 502호"
                    style={styles.textInputDetail}
                    autoCapitalize={"none"}
                    autoCorrect={false}
                    onChangeText={detailAddress =>
                      this.setState({ detailAddress })
                    }
                    onSubmitEditing={() =>
                      console.log(this.state.detailAddress)
                    }
                    value={this.state.detailAddress}
                  />
                  <View style={{ marginTop: 15, alignItems: "flex-end" }}>
                    <TouchableOpacity
                      onPressOut={() => {
                        if (this.state.detailAddress == "") {
                          alert("상세 주소를 입력해 주세요.");
                        } else {
                          this.props.navigation.navigate("PickApplicant", {
                            roadAddr: this.state.roadAddr,
                            detailAddress: this.state.detailAddress
                          });
                        }
                      }}
                      style={{
                        borderColor: PURPLE,
                        borderWidth: StyleSheet.hairlineWidth,
                        borderRadius: 3,
                        padding: 3,
                        alignItems: "center"
                      }}
                    >
                      <Text
                        style={{
                          color: PURPLE,
                          fontSize: 13,
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        입력 완료
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
  _setAddr = addr => {
    this.setState({
      ...this.state,
      roadAddr: addr,
      isSelected: true
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white"
  },
  addContainer: {
    width: width - 20,
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginVertical: 3,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
    borderRadius: 3
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
  textInputDetail: {
    height: 35,
    borderColor: "#bbb",
    borderWidth: StyleSheet.hairlineWidth,
    width: width * 0.8,
    borderRadius: 2,
    backgroundColor: "white",
    fontSize: 15,
    paddingLeft: 10,
    marginBottom: 5
  },
  upper: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width,
    height: height / 6
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
  }
});

export default AddressScreen;
