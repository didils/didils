import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Alert
} from "react-native";
import { withNavigation } from "react-navigation";
import { PURPLE } from "../../constants";

const { width } = Dimensions.get("window");

const ApplicantItem = props => (
  <View style={styles.container}>
    <View
      style={{
        flexDirection: "row",
        marginBottom: 5,
        justifyContent: "space-between"
      }}
    >
      <Text style={{ color: PURPLE, fontSize: 15, fontWeight: "600" }}>
        출원인 #{props.number}
      </Text>
      <TouchableOpacity
        onPressOut={() => {
          Alert.alert(
            "출원인을 목록에서 빼시겠습니까?",
            "확인",
            [
              {
                text: "취소",
                style: "cancel"
              },
              {
                text: "확인",
                onPress: () => {
                  props.extractApplicant(props.applicant.representName);
                }
              }
            ],
            { cancelable: true }
          );
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
          <Text style={{ color: PURPLE, fontSize: 13 }}>목록에서 빼기</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "center"
            }}
          >
            <View
              style={{
                marginRight: 12,
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
                성함
              </Text>
            </View>
          </View>
          <Text style={styles.detailText}>{props.applicant.representName}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "center"
            }}
          >
            <View
              style={{
                marginRight: 12,
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
                영문 성함
              </Text>
            </View>
          </View>
          <Text style={styles.detailText}>
            {props.applicant.representNameEn}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "center"
            }}
          >
            <View
              style={{
                marginRight: 12,
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
                주소
              </Text>
            </View>
          </View>
          <Text style={styles.detailText}>{props.applicant.address}</Text>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: width - 20,
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 3,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
    borderRadius: 3
  },
  detailText: { flex: 4, fontWeight: "100", fontSize: 13 }
});

export default withNavigation(ApplicantItem);
