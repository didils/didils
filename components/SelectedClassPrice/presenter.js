import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import SearchItem from "../SearchItem";

const { width } = Dimensions.get("window");

const SelectedClassPrice = props => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.classText}>제{props.class}류</Text>
      </View>
      <View style={styles.productContainer}>
        {props.index == 0 ? (
          <View style={styles.priceNoti}>
            <Text style={styles.priceNotiText}>기본 수임료</Text>
            <Text style={styles.priceNotiText}>150,000 원</Text>
          </View>
        ) : (
          <View style={styles.priceNoti}>
            <Text style={styles.priceNotiText}>추가 수임료</Text>
            <Text style={styles.priceNotiText}>100,000 원</Text>
          </View>
        )}
        <View style={styles.priceNoti}>
          <Text style={styles.priceNotiText}>특허청 수수료</Text>
          <Text style={styles.priceNotiText}>56,000 원</Text>
        </View>
        <View style={styles.priceNoti}>
          <Text style={styles.priceNotiText}>지정상품 가산료</Text>
          {props.classArray.length > 20 ? (
            <Text style={styles.priceNotiText}>
              {props.changeFormat((props.classArray.length - 20) * 1000)} 원
            </Text>
          ) : (
            <Text style={styles.priceNotiText}>0 원</Text>
          )}
        </View>
      </View>
    </View>
  );
};

SelectedClassPrice.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FAFAFA",
    marginBottom: 5,
    paddingVertical: 10,
    width: width * 0.98
  },
  priceNoti: { flexDirection: "row", justifyContent: "space-between" },
  priceNotiText: { fontSize: 12, fontWeight: "100" },
  textContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  classText: {
    alignItems: "center"
  },
  productContainer: {
    flex: 3,
    justifyContent: "flex-start",
    flexWrap: "wrap"
  },
  addIcon: {
    marginRight: 5
  }
});

export default SelectedClassPrice;
