import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import SearchItem from "../SearchItem";

const { width } = Dimensions.get("window");

const SelectedClassPrice = props => {
  return (
    <View>
      {props.classArray.length > 0 && (
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.classText}>{`제${props.class}류`}</Text>
          </View>
          <View style={styles.productContainer}>
            <Text>asd</Text>
          </View>
        </View>
      )}
    </View>
  );
};

SelectedClassPrice.propTypes = {};

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

export default SelectedClassPrice;
