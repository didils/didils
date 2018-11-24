import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PURPLE } from "../../constants";

const SelectedItem = props => {
  return (
    <TouchableOpacity
      style={styles.badge}
      onPressOut={() => {
        props.extract(props.productName);
        props.extractArray(props.productName);
        props.classify(props.search);
        props.setClassifySelected();
      }}
    >
      <Ionicons
        style={styles.addIcon}
        name={"md-close-circle"}
        size={15}
        color={"white"}
      />
      <Text style={{ color: "white" }}>{props.productName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  badge: {
    height: 25,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#FAFAFA",
    borderRadius: 12.5,
    backgroundColor: PURPLE,
    justifyContent: "center",
    paddingHorizontal: 5,
    flexDirection: "row",
    marginRight: 5,
    alignItems: "center"
  },
  addIcon: {
    marginRight: 5
  }
});

export default SelectedItem;
