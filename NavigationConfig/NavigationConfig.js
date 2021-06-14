import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import FormScreen from "../Screen/FormScreen";
import MainScreen from "../Screen/MainScreen";
import EditScreen from "../Screen/EditScreen";


const defaultConfiguration = {
  headerStyle: {
    backgroundColor: "rgb(164, 136, 98)",
  },
  headerTintColor: "white",
};

const Screens = createStackNavigator(
  {
    MainScreen: {
      screen: MainScreen,
    },
    FormScreen: {
      screen: FormScreen,
    },
 
    EditScreen: {
      screen: EditScreen,
    },
   
  },

  {
    defaultNavigationOptions: defaultConfiguration,
  }
);

// const settingScreen = createStackNavigator(
//   {
//     Setting: {
//       screen: Setting,
//     },
//   },
//   {
//     defaultNavigationOptions: defaultConfiguration,
//   }
// );

// const DrawerNavigation = createDrawerNavigator(
//   {
//     StartScreen: {
//       screen: Screens,
//       navigationOptions: {
//         drawerLabel: "Notes",
//         color: " white",
//       },
//     },
//     Setting: {
//       screen: settingScreen,
//       navigationOptions: {
//         drawerLabel: "Setting",
//       },
//     },
//   },
//   {
//     drawerBackgroundColor: "rgb(250, 249, 196)",
//     contentOptions: {
//       itemStyle: {
//         padding: 5,
//         marginTop: -5,
//         backgroundColor: "rgb(164, 136, 98)",
//       },
//       activeTintColor: "white",
//     },
//   }
// );

export default createAppContainer(Screens);
