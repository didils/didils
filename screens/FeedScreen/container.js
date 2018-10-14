import React, { Component } from "react";
import PropTypes from "prop-types";
import FeedScreen from "./presenter";
import { Image } from "react-native";

console.log(this.props);

class Container extends Component {

    static propTypes = {
        cases: PropTypes.array,
        getFeed: PropTypes.func.isRequired
    };
    state = {
        isFetching: false
    };
    componentWillReceiveProps = nextProps => {
        if (nextProps.feed) {
            this.setState({
                isFetching: false
            });
        }
    };

    componentDidMount = () => {
        const { getFeed } = this.props;
        getFeed();
    }

    render() {
        return (
            <FeedScreen {...this.props} {...this.state} />
        );
    }
}

export default Container;