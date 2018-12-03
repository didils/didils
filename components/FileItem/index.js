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

const FileItem = props => (
  <TouchableOpacity
    onPressOut={() => {
      props.navigation.navigate("FileDetail", { casefiles: props.casefiles });
    }}
  >
    <View style={styles.container}>
      <Text style={{ fontSize: 17, flex: 6 }}>{props.casefiles.file_name}</Text>
      <View style={{ flex: 10, paddingLeft: 5 }}>
        <Text>{props.casefiles.date_of_file}</Text>
        <Text style={{ fontSize: 13, color: "grey", fontWeight: "100" }}>
          파일 입력일
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Ionicons name={"md-document"} size={25} color={PURPLE} />
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: width - 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginVertical: 3,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
    borderRadius: 3
  }
});

export default withNavigation(FileItem);
