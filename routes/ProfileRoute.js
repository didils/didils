import { createStackNavigator } from "react-navigation";
import ProfileScreen from "../screens/ProfileScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";

const ProfileRoute = createStackNavigator(
    {
        Profile: {
            screen: ProfileScreen,
            navigationOptions: ({ screenProps }) => ({
                headerTitle: `${screenProps.username}의 프로필`
            })
        },
        ...sharedRoutes
    },
    {
        ...sharedOptions
    }
);

export default ProfileRoute;