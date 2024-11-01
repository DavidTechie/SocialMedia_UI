import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile.js";
import Message from "../screens/Message/Message";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ProfileTabTitle from "../components/ProfileTabTitile/ProflileTabTitle.js";
import ProfileTabContent from "../components/ProfileTabContent/ProfileTabContent.js";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

export const ProfileTabNavigation = () =>{
    return (
    <ProfileTabs.Navigator
     screenOptions={{
        tabBarIndicatorStyle:{
            backgroundColor:'transparent'
        },
        tabBarStyle:{
            zIndex:0,
            elevation:0
        }
     }}>
        <ProfileTabs.Screen name={'Tab1'} options={{tabBarLabel:({focused}) => <ProfileTabTitle isFocused={focused} title={'Photos'} />}}  component={ProfileTabContent} />
        <ProfileTabs.Screen name={'Tab2'} options={{tabBarLabel:({focused}) => <ProfileTabTitle isFocused={focused} title={'Videos'} />}}  component={ProfileTabContent} />
        <ProfileTabs.Screen name={'Tab3'} options={{tabBarLabel:({focused}) =>  <ProfileTabTitle isFocused={focused} title={'Saved'}  />}} component={ProfileTabContent} />
    </ProfileTabs.Navigator>
    )
};

const MainMenuNavigation = () =>{
    return(
        <Drawer.Navigator screenOptions={{header: ()=> null,
          headerShown:false,
         
        }} 
        initialRouteName={Routes.Home}>
            <Drawer.Screen name={Routes.Home} component ={Home} />
            <Drawer.Screen name={Routes.Profile} component ={Profile} />
        </Drawer.Navigator>
    );
};

const MainNavigation = () => {
    return <Stack.Navigator screenOptions={{header: ()=> null,headerShown:false}} 
    initialRouteName={Routes.Home}>
        <Stack.Screen name={'Drawer'} 
        component={MainMenuNavigation}/>
        <Stack.Screen name={Routes.Message} 
        component={Message}/>
    </Stack.Navigator>
};

export default MainNavigation;
