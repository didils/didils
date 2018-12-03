import React from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Dimensions
} from "react-native";
import { withNavigation } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import { PURPLE } from "../../constants";

const { width, height } = Dimensions.get("window");

const AddressItem = props => (
  <TouchableOpacity
    onPressOut={() => {
      props.setAddr(props.address.roadAddr);
    }}
  >
    <View style={styles.container}>
      <View style={{ marginBottom: 15 }}>
        <Text style={{ color: PURPLE, fontSize: 15, fontWeight: "600" }}>
          {props.address.zipNo}
        </Text>
      </View>
      <View>
        <View>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 5,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <View
                style={{
                  marginRight: 12,
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
                  도로명
                </Text>
              </View>
            </View>
            <Text style={{ flex: 5 }}>{props.address.roadAddr}</Text>
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
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <View
                style={{
                  marginRight: 12,
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
                  지번
                </Text>
              </View>
            </View>
            <Text style={{ flex: 5 }}>{props.address.jibunAddr}</Text>
          </View>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: width - 20,
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginVertical: 3,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
    borderRadius: 3
  }
});

export default withNavigation(AddressItem);
