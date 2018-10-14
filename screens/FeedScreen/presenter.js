import React from "react";
import PropTypes from "prop-types";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from "react-native";
import Photo from "../../components/Photo";


const FeedScreen = props => (

    <ScrollView>
        <View style={styles.topBtn}>
            <TouchableOpacity style={styles.button} onPressOut={() => props.navigation.navigate("PickPhoto")}>
                <Text style={styles.text}>상표 출원하기</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
            {props.feed &&
                props.feed.map((cases, index) => <Photo {...cases} key={index} />)}
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: "100",
        color: "#31A5FF"
    },
    container: {
        flex: 1,
        backgroundColor: "#FBFBFB"
    },
    topBtn: {
        backgroundColor: "#31A5FF",
        height: 70,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        width: Dimensions.get('window').width - 70,
        backgroundColor: "#FBFBFB",
        height: 40,
        borderRadius: 2,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#FBFBFB",
        justifyContent: "center",
        alignItems: "center"
    }
});

FeedScreen.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    cases: PropTypes.array
};

export default FeedScreen;