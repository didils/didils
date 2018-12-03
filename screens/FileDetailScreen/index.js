import React, { Component } from "react";
import PropTypes from "prop-types";
import { Divider } from "react-native-elements";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert
} from "react-native";
import { PURPLE } from "../../constants";
import FadeIn from "react-native-fade-in-image";
import ImageViewer from "react-native-image-zoom-viewer";

const { width, height } = Dimensions.get("window");

class FileDetailScreen extends Component {
  render() {
    const {
      navigation: {
        state: {
          params: { casefiles }
        }
      }
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Text style={{ fontSize: 30, fontWeight: "600" }}>
            {casefiles.file_name}
          </Text>
          <Text style={{ color: "grey", fontWeight: "100" }}>
            저장하려면, 이미지를 길게 누르세요.
          </Text>
        </View>
        <Divider />
        <View style={{ flex: 7 }}>
          <ImageViewer
            imageUrls={this._imageNum(casefiles)}
            backgroundColor={"#FAFAFA"}
            enablePreload={true}
          />
        </View>
        <Divider />
        <View style={{ flex: 1 }} />
      </View>
    );
  }
  _imageNum = casefiles => {
    if (casefiles.file_page5 != null) {
      return [
        {
          url: casefiles.file_page1
        },
        {
          url: casefiles.file_page2
        },
        {
          url: casefiles.file_page3
        },
        {
          url: casefiles.file_page4
        },
        {
          url: casefiles.file_page5
        }
      ];
    } else if (casefiles.file_page4 != null) {
      return [
        {
          url: casefiles.file_page1
        },
        {
          url: casefiles.file_page2
        },
        {
          url: casefiles.file_page3
        },
        {
          url: casefiles.file_page4
        }
      ];
    } else if (casefiles.file_page3 != null) {
      return [
        {
          url: casefiles.file_page1
        },
        {
          url: casefiles.file_page2
        },
        {
          url: casefiles.file_page3
        }
      ];
    } else if (casefiles.file_page2 != null) {
      return [
        {
          url: casefiles.file_page1
        },
        {
          url: casefiles.file_page2
        }
      ];
    } else {
      return [
        {
          url: casefiles.file_page1
        }
      ];
    }
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFA",
    flex: 1
  }
});

export default FileDetailScreen;
