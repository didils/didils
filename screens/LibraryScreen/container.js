import React, { Component } from "react";
import { CameraRoll } from "react-native";
import LibraryScreen from "./presenter";

class Container extends Component {
  state = {
    photos: null,
    pickedPhoto: null
  };

  componentWillMount = async () => {
    const { edges } = await CameraRoll.getPhotos({
      first: 2000,
      groupTypes: "SavedPhotos",
      assetType: "Photos"
    });
    this.setState({
      photos: edges,
      pickedPhoto: edges[0]
    });
  };

  render() {
    return (
      <LibraryScreen
        {...this.state}
        pickPhoto={this._pickPhoto}
        approvePhoto={this._approvePhoto}
      />
    );
  }
  _pickPhoto = photo => {
    this.setState({
      pickedPhoto: photo
    });
  };
  _approvePhoto = () => {
    const {
      navigation: { navigate }
    } = this.props;
    const { pickedPhoto } = this.state;

    console.log("approve photo");
    console.log(pickedPhoto);
    console.log(pickedPhoto.node.image.uri);
    this.props.setImg(pickedPhoto.node.image.uri);
    console.log(this.props.image);
    navigate("PickProduct", { url: pickedPhoto.node.image.uri });
  };
}

export default Container;
