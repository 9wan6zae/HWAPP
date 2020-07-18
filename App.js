// import React from 'react';
// import AppStack from './src/screens';

// const App = () => {
//   return (
//     <AppStack />
//   );
// };


// export default App;

import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RegisterKitScreen from './src/screens/RegisterKitScreens'

class HomeScreen extends Component {
  render(){
    return (
        <View style={styles.container}>
            <View style={styles.headerView}/>
            <View style={styles.titleView}>
                <Text style={styles.titleStyle}>HWAPP</Text>
            </View>
            <View style={styles.contentView}>
                <TouchableOpacity>
                  <Text
                    onPress={() => this.props.navigation.navigate('RegisterKitScreen')}>
                  test
                  </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footerView} />
        </View>
        
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    HomeScreen,
    RegisterKitScreen
  },
  {
    defaultNavigationOptions: () => ({
      headerShown: false
    }),
    initialRouteName: "HomeScreen",
  },
);
export default createAppContainer(AppNavigator);
  

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      //alignItems: 'center',
      backgroundColor: 'black',
    },
    headerView: {
      width:'100%',
      height:'9%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ff9a9a',
    },
    titleView: {
      width:'100%',
      height:'10%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9aa9ff',
    },
    contentView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#d6ca1a',
    },
    footerView: {
      width:'100%',
      height:'20%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1ad657',
    },
    titleStyle: {
        fontSize: 70,
        fontFamily: "NanumSquareRoundB"
    },
})