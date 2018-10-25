import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import SearchItem from "../SearchItem";

const { width } = Dimensions.get("window");

const ClassItem = props => {
  return (
    <View>
      {props.classArray.length > 0 && (
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.classText}>{`제${props.class}류`}</Text>
          </View>
          <View style={styles.productContainer}>
            {props.classArray.map((items, index) => (
              <SearchItem
                key={index}
                name={items.product}
                appendProduct={props.appendProduct}
                arrayItem={items}
                productList={props.productList}
                append={props.append}
                appendArray={props.appendArray}
                search={props.search}
                classify={props.classify}
              />
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

ClassItem.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FAFAFA",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#bbb",
    marginBottom: 5,
    paddingVertical: 10,
    width: width - 45
  },
  textContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  classText: {
    alignItems: "center"
  },
  productContainer: {
    flex: 4,
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  addIcon: {
    marginRight: 5
  }
});

export default ClassItem;
