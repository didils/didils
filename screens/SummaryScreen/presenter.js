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
import { Ionicons } from "@expo/vector-icons";
import { Divider } from "react-native-elements";
import ClassPrice from "../../components/ClassPrice";

const { width } = Dimensions.get("window");

const SummaryScreen = props => (
  <View style={styles.container}>
    <View style={styles.title}>
      <Text style={{ fontSize: 40, fontWeight: "200", marginBottom: 5 }}>
        추가 정보 입력
      </Text>
      <Text style={{ fontSize: 17, fontWeight: "100" }}>
        신청인 정보 및 아래 신청 내역을 확인 해 주세요.
      </Text>
    </View>
    <View style={styles.svContainer}>
      <ScrollView>
        <View style={styles.applicant}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Ionicons name={"md-person"} size={30} color={"#31A5FF"} />
              <Text style={{ fontSize: 20, marginLeft: 15, color: "#31A5FF" }}>
                신청인
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 8,
                  color: "#bbb",
                  fontWeight: "100",
                  paddingTop: 4
                }}
              >
                출원인
              </Text>
            </View>
            <Text style={{ fontSize: 17, fontWeight: "100", marginRight: 10 }}>
              {props.profile.username}
            </Text>
          </View>
          <Divider
            style={{
              backgroundColor: "#bbb",
              height: StyleSheet.hairlineWidth
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
              paddingTop: 17
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "100" }}>
              공동 출원인 추가
            </Text>
            <Ionicons name={"md-add-circle"} size={27} color={"#31A5FF"} />
          </View>
        </View>
        <View style={styles.applicant}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Ionicons name={"md-images"} size={30} color={"#31A5FF"} />
              <Text style={{ fontSize: 20, marginLeft: 15, color: "#31A5FF" }}>
                상표 이미지
              </Text>
            </View>
            <Ionicons name={"md-albums"} size={27} color={"#31A5FF"} />
          </View>
          <Divider
            style={{
              backgroundColor: "#bbb",
              height: StyleSheet.hairlineWidth
            }}
          />
          <View style={{ alignItems: "center" }}>
            <Image source={{ uri: props.image }} style={styles.image} />
          </View>
        </View>
        <View>
          {props.classifiedSelected.map((search, index) => (
            <ClassPrice
              key={index}
              class={search.class}
              classArray={search.classArray}
            />
          ))}
        </View>
      </ScrollView>
    </View>
    <View style={styles.btnContainer}>
      <View style={styles.priceBar}>
        <Text style={styles.priceText}>결제예정금액</Text>
        <Text style={styles.priceText}>270,000원</Text>
      </View>
      <View style={styles.btnContainerBottom}>
        <TouchableOpacity
          style={styles.button}
          onPressOut={() => props.navigation.goBack(null)}
        >
          <Text style={{ fontSize: 18, color: "black", fontWeight: "200" }}>
            취소
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontSize: 18, color: "black", fontWeight: "200" }}>
            다음
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
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
    flex: 2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  btnContainerBottom: {
    flexDirection: "row"
  },
  title: {
    flex: 2,
    backgroundColor: "white",
    justifyContent: "center",
    paddingLeft: 30,
    paddingTop: 30
  },
  box: {
    flex: 6,
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 60
  },
  priceBar: {
    backgroundColor: "#31A5FF",
    flexDirection: "row",
    height: 35,
    width,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  },
  priceText: {
    marginHorizontal: 22,
    color: "white",
    fontWeight: "500",
    fontSize: 18
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width - 120,
    height: Dimensions.get("window").width - 120,
    backgroundColor: "#31A5FF",
    borderRadius: 10
  },
  icon: {
    position: "absolute",
    bottom: -25,
    right: -25,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: StyleSheet.hairlineWidth
  },
  applicant: {
    backgroundColor: "#FAFAFA",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#bbb",
    width: width - 10,
    paddingHorizontal: 15,
    paddingTop: 17,
    marginBottom: 15
  },
  image: {
    width: Dimensions.get("window").width - 300,
    height: Dimensions.get("window").width - 300,
    borderRadius: 10,
    marginVertical: 8
  },
  svContainer: {
    flex: 10,
    alignItems: "center"
  }
});

SummaryScreen.propTypes = {};

export default SummaryScreen;
