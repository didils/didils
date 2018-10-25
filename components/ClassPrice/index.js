import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { Divider, CheckBox } from "react-native-elements";

const { width } = Dimensions.get("window");

class ClassPrice extends Component {
  state = {
    priceClass: 206000,
    additionalPrice: 0
  };

  componentDidMount = () => {
    const number = this.props.classArray.length - 20;
    if (number > 0) {
      this.setState({
        additionalPrice: number * 4000,
        priceClass: number * 4000 + this.state.priceClass
      });
    }
  };

  render() {
    return (
      <View>
        {this.props.classArray.length > 0 && (
          <View style={styles.container}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <View>
                <CheckBox
                  checked={false}
                  title={`제${this.props.class}류`}
                  width={Dimensions.get("window").width}
                  checkedColor={"#31A5FF"}
                  containerStyle={{
                    width: 300,
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 0,
                    marginBottom: 0,
                    borderWidth: 0
                  }}
                />
                <View style={styles.productContainer}>
                  {this.props.classArray.map((items, index) => (
                    <View style={styles.productText} key={index}>
                      <Text style={{ color: "grey" }}>{items.product}</Text>
                    </View>
                  ))}
                </View>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontWeight: "100", color: "grey" }}>
                  지정상품
                </Text>
                <Text style={{ fontWeight: "100", color: "grey" }}>
                  {this.props.classArray.length} 개
                </Text>
                <Text
                  style={{
                    fontWeight: "600",
                    marginTop: 15,
                    fontSize: 16
                  }}
                >
                  {this.state.priceClass} 원
                </Text>
              </View>
            </View>
            <Divider />
            <View style={styles.priceContainer}>
              <View style={styles.priceDetail}>
                <Text style={styles.priceDetailText}>기본 수임료</Text>
                <Text style={styles.priceDetailText}>150,000 원</Text>
              </View>
              <View style={styles.priceDetail}>
                <Text style={styles.priceDetailText}>특허청 기본료</Text>
                <Text style={styles.priceDetailText}>56,000 원</Text>
              </View>
              {this.props.classArray.length > 20 && (
                <View style={styles.priceDetail}>
                  <Text style={styles.priceDetailText}>지정상품 가산료</Text>
                  <Text style={styles.priceDetailText}>4,000 원</Text>
                </View>
              )}
            </View>
          </View>
        )}
      </View>
    );
  }
}

ClassPrice.propTypes = {};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFA",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#bbb",
    marginBottom: 15,
    width: width - 10,
    paddingRight: 10
  },
  productText: {
    backgroundColor: "#FAFAFA",
    borderColor: "grey",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
    height: 18,
    paddingHorizontal: 3,
    marginHorizontal: 2,
    marginVertical: 1
  },
  priceContainer: {
    marginBottom: 5
  },
  priceDetailText: {
    fontWeight: "100",
    color: "grey",
    marginTop: 2,
    marginBottom: 2
  },
  priceDetail: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: 40,
    marginRight: 20,
    marginTop: 3
  },
  classText: {
    alignItems: "center"
  },
  productContainer: {
    flex: 4,
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 10,
    width: width - 120,
    paddingBottom: 7
  },
  addIcon: {
    marginRight: 5
  }
});

export default ClassPrice;
