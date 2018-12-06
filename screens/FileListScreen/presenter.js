import React from "react";
import PropTypes from "prop-types";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import FileItem from "../../components/FileItem";

const FileListScreen = props => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.case_title} 사건 관련 파일</Text>
        </View>
        {props.casefiles &&
          props.casefiles.map((files, index) => (
            <FileItem key={index} casefiles={files} {...this.props} />
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  title: {
    fontSize: 25,
    fontWeight: "600"
  },
  titleContainer: {
    marginTop: 15,
    marginLeft: 20,
    marginBottom: 12
  }
});

FileListScreen.propTypes = {};

export default FileListScreen;
