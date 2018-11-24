import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet
} from "react-native";
import { withNavigation } from "react-navigation";
import FadeIn from "react-native-fade-in-image";

const { width, height } = Dimensions.get("screen");

const CaseProgress = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#CBCBCB",
          width: width - 150,
          height: 1,
          position: "absolute",
          top: 36,
          left: 60
        }}
      />
      {props.caseInfo.progress_status == "결제 대기 중" ? (
        <EventItem
          bgColor={"#31A5FF"}
          eventName={"접수"}
          date={props.caseInfo.request_date}
        />
      ) : (
        <EventItem
          bgColor={"#CBCBCB"}
          eventName={"접수"}
          date={props.caseInfo.request_date}
        />
      )}
      {props.caseInfo.progress_status == "출원 준비 중" ? (
        <EventItem
          bgColor={"#31A5FF"}
          eventName={"결제완료"}
          date={props.caseInfo.payment_date}
        />
      ) : (
        <EventItem
          bgColor={"#CBCBCB"}
          eventName={"결제완료"}
          date={props.caseInfo.payment_date}
        />
      )}
      {props.caseInfo.progress_status == "심사 중" ? (
        <EventItem
          bgColor={"#31A5FF"}
          eventName={"출원"}
          date={props.caseInfo.filed_date}
        />
      ) : (
        <EventItem
          bgColor={"#CBCBCB"}
          eventName={"출원"}
          date={props.caseInfo.filed_date}
        />
      )}
      <EventItem bgColor={"#CBCBCB"} eventName={"심사 예정일"} />
    </View>
  );
};

const EventItem = props => {
  return (
    <View
      style={{
        flex: 1,
        width: 50,
        alignItems: "center",
        paddingVertical: 10
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 10,
            color: "black",
            fontWeight: "100",
            marginBottom: 5
          }}
        >
          {props.date}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: props.bgColor,
            width: 10,
            height: 10,
            borderRadius: 5
          }}
        />
      </View>
      <View>
        <Text style={{ fontSize: 13, color: "#666664", fontWeight: "100" }}>
          {props.eventName}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 30,
    width: width - 70,
    borderRadius: 10,
    alignItems: "center"
  }
});

export default withNavigation(CaseProgress);
