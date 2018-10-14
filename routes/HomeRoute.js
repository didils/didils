import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "react-navigation";
import FeedScreen from "../screens/FeedScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";
import PickPhotoScreen from "../screens/PickPhotoScreen";
import CameraScreen from "../screens/CameraScreen";
import LibraryScreen from "../screens/LibraryScreen";
import PickProductScreen from "../screens/PickProductScreen";

const HomeRoute = createStackNavigator(
    {
        Home: {
            screen: FeedScreen,
            navigationOptions: ({ navigation }) => ({
                headerTitle: (
                    <Image source={require("../assets/images/logo.png")} style={{ height: 35 }} resizeMode={"contain"} />
                )
            })
        },
        PickProduct: {
            screen: PickProductScreen,
            navigationOptions: {
                header: null
            }
        },
        PickPhoto: {
            screen: PickPhotoScreen,
            navigationOptions: {
                header: null
            }
        },
        Camera: {
            screen: CameraScreen,
            navigationOptions: {
                tabBarLabel: "카메라 촬영"
            }
        },
        Library: {
            screen: LibraryScreen,
            navigationOptions: {
                tabBarLabel: "카메라롤"
            }
        },
        ...sharedRoutes
    },
    {
        ...sharedOptions
    }
);

export default HomeRoute;