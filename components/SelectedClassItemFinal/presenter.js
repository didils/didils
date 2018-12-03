import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const SelectedClassItemFinal = props => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.classText}>{`제${props.class}류`}</Text>
      </View>
      <View style={styles.productContainer}>
        {props.classArray.map((items, index) => (
          <Text key={index}>{items.product}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FAFAFA",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#bbb",
    marginBottom: 5,
    paddingVertical: 10,
    width: width * 0.98
  },
  textContainer: {
    alignItems: "center",
    flex: 2,
    justifyContent: "center"
  },
  classText: {
    alignItems: "center"
  },
  productContainer: {
    flex: 5,
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  addIcon: {
    marginRight: 5
  }
});

export default SelectedClassItemFinal;
