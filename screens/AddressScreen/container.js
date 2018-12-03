import React, { Component } from "react";
import AddressScreen from "./presenter";

class Container extends Component {
  state = {
    address: []
  };
  render() {
    return (
      <AddressScreen
        {...this.props}
        {...this.state}
        getAddress={this._getAddress}
      />
    );
  }
  _getAddress = async keyword => {
    const address = await this._callApi(keyword);
    this.setState({
      address
    });
  };

  _callApi = keyword => {
    return fetch(
      `http://www.juso.go.kr/addrlink/addrLinkApi.do?currentPage=1&countPerPage=10&keyword=${keyword}&confmKey=U01TX0FVVEgyMDE4MTIwMzAxMTU1OTEwODM0MjY=&resultType=json`
    )
      .then(response => response.json())
      .then(json => json.results.juso)
      .catch(err => console.log(err));
  };
}

export default Container;
