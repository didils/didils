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

const { width, height } = Dimensions.get("window");

const Photo = props => (
    <View style={styles.photo}>
        <View style={{ flex: 1 }}>
            <FadeIn>
                <Image
                    source={{ uri: props.trademark_image }}
                    style={{ width: 100, height: 100, marginHorizontal: 10, borderRadius: 5, resizeMode: "contain", borderWidth: StyleSheet.hairlineWidth }} />
            </FadeIn>
        </View>
        <View style={{ flexDirection: "column", flex: 2 }}>
            <View>
                <Text style={styles.title}>{props.trademark_title}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={styles.contentTitle}>
                    <Text style={styles.text}>출원일:</Text>
                    <Text style={styles.text}>출원번호:</Text>
                    <Text style={styles.text}>현재상태:</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.text}>{props.filed_date}</Text>
                    <Text style={styles.text}>{props.application_number}</Text>
                    <Text style={styles.text}>{props.progress_status}</Text>
                </View>
            </View>
        </View>
    </View>
);

console.log(this.props);

const styles = StyleSheet.create({
    photo: {
        backgroundColor: "white",
        flexDirection: "row",
        marginTop: 15,
        marginBottom: 15,
        paddingVertical: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 13,
        fontWeight: "100",
        marginBottom: 2
    },
    title: {
        marginVertical: 5,
        fontSize: 20,
        fontWeight: "100"
    },
    contentTitle: {
        flex: 1,
        paddingLeft: 20,
        paddingVertical: 5,
        alignItems: "flex-end",
        paddingRight: 4,
        justifyContent: "flex-start"
    },
    content: {
        flex: 3,
        paddingVertical: 5,
        justifyContent: "flex-start"
    }
});

export default withNavigation(Photo);