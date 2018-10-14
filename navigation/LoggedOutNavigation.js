import { createStackNavigator } from "react-navigation";
import LogInScreen from "../screens/LogInScreen";

const LoggedOutNavigation = createStackNavigator({
    LogIn: {
        screen: LogInScreen,
        navigationOptions: {
            header: null
        }
    }
});

export default LoggedOutNavigation;