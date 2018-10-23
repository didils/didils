import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchItem = props => {
  return (
    <TouchableOpacity
      style={styles.badge}
      onPressOut={() => {
        props.append(props.arrayItem.product);
        props.classify(props.search);
      }}
    >
      <Ionicons
        style={styles.addIcon}
        name={"md-add-circle"}
        size={15}
        color={"white"}
      />
      <Text style={{ color: "black" }}>{props.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  badge: {
    height: 25,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#FAFAFA",
    borderRadius: 12.5,
    backgroundColor: "#bbb",
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

export default SearchItem;
