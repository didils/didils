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
import { PURPLE } from "../../constants";

const { width, height } = Dimensions.get("screen");

const CaseProgressVertical = props => {
  return (
    <View style={styles.container}>
      {props.caseInfo.progress_status == "결제 대기 중" ? (
        <EventItem
          bgColor={PURPLE}
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
          bgColor={PURPLE}
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
          bgColor={PURPLE}
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
      <EventItemBottom bgColor={"#CBCBCB"} eventName={"심사 예정일"} />
    </View>
  );
};

const EventItem = props => {
  return (
    <View
      style={{
        paddingVertical: 10,
        flexDirection: "row"
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View
          style={{
            backgroundColor: "#CBCBCB",
            width: 1,
            height: 63,
            position: "absolute",
            top: 20,
            left: 16
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: props.bgColor,
            width: 10,
            height: 10,
            borderRadius: 5
          }}
        />
      </View>
      <View
        style={{
          flex: 9,
          justifyContent: "space-between",

          paddingVertical: 5,
          paddingLeft: 10
        }}
      >
        <Text style={{ fontSize: 15, color: "#666664", fontWeight: "100" }}>
          {props.eventName}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "grey",
            fontWeight: "100"
          }}
        >
          {props.date}
        </Text>
      </View>
    </View>
  );
};

const EventItemBottom = props => {
  return (
    <View
      style={{
        paddingVertical: 10,
        flexDirection: "row"
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View
          style={{
            backgroundColor: "#CBCBCB",
            width: 1,
            height: 33,
            position: "absolute",
            top: 20,
            left: 16
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: props.bgColor,
            width: 10,
            height: 10,
            borderRadius: 5
          }}
        />
      </View>
      <View
        style={{
          flex: 9,
          justifyContent: "space-between",

          paddingVertical: 5,
          paddingLeft: 10
        }}
      >
        <Text style={{ fontSize: 15, color: "#666664", fontWeight: "100" }}>
          {props.eventName}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "grey",
            fontWeight: "100"
          }}
        >
          {props.date}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 20,

    justifyContent: "flex-start"
  }
});

export default withNavigation(CaseProgressVertical);
