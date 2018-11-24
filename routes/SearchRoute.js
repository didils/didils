import { createStackNavigator } from "react-navigation";
import SearchScreen from "../screens/SearchScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";

const SearchRoute = createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        header: null
      }
    },
    ...sharedRoutes
  },
  {
    ...sharedOptions
  }
);

export default SearchRoute;
