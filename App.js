
import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Search from './screens/Search'
import Home from './screens/Home'
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons'



const Tab = createBottomTabNavigator();
const App = () => {
  
  return (
    <>
      <StatusBar barStyle= "dark-content"  backgroundColor="#00aaff" />

<NavigationContainer>
  <Tab.Navigator 
  screenOptions={({route}) =>({
    tabBarIcon:({color}) =>{
      let iconName;
      if(route.name==='home'){
        iconName = 'home-city-outline'
      }else if(route.name==='search' ){
        iconName ='city'
      }
      return <View><MaterialCommunityIcons name={iconName} size={25} color={color} /></View>
    }
  })}

  tabBarOptions={{
    activeTintColor:'white',
    inactiveTintColor:'gray',
    activeBackgroundColor:'#00aaff',
     inactiveBackgrounfColor:'#00aaff'
  }}
  >
    <Tab.Screen name='home' component={Home}
    
    initialParams={{city:"kathmandu"}}
    />
    <Tab.Screen name='search' component={Search}/>
  </Tab.Navigator>
</NavigationContainer>

    </>
      );
};



export default App;
