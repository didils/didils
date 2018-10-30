import { createStackNavigator } from "react-navigation";
import TakePhotoScreen from "../screens/TakePhotoScreen";
import TabsNavigation from "./TabsNavigation";
import PickPhotoScreen from "../screens/PickPhotoScreen";
import CameraScreen from "../screens/CameraScreen";
import LibraryScreen from "../screens/LibraryScreen";
import PickProductScreen from "../screens/PickProductScreen";
import SummaryScreen from "../screens/SummaryScreen";
import CaseDetailScreen from "../screens/CaseDetailScreen";

const RootNavigation = createStackNavigator({
  Tabs: {
    screen: TabsNavigation,
    navigationOptions: {
      header: null
    }
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
  Summary: {
    screen: SummaryScreen,
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
  TakePhoto: {
    screen: TakePhotoScreen,
    navigationOptions: {
      header: null
    }
  },
  caseDetail: {
    screen: CaseDetailScreen,
    navigationOptions: {
      tabBarLabel: "상세 정보"
    }
  }
});

export default RootNavigation;
