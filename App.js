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
import RegisterKitScreen from './src/screens/RegisterKitScreens';
import CustomButton from './src/styles/CustomButton';
import KitTable from './src/components/table';
import KitInfo from './src/screens/KitInfo'

const dataSource = [
  [["Row1 Column 1 Item0"], ["Row1 Column1 Item0 "]],
  [["Row2 Column 1 Item0"], ["Row2 Column2 Item0", "Row2 Column2 Item1"]],
]

class HomeScreen extends Component {
  
  render(){
    return (
        <View style={styles.container}>
            <View style={styles.headerView}/>
            <View style={styles.titleView}>
                <Text style={styles.titleStyle}>HWAPP</Text>
            </View>
            <View style={styles.contentView}>
              <View style={styles.registerView}>
                <CustomButton
                  buttonColor={'#023e71'}
                  title={'키트 등록하기'}
                  onPress={() => this.props.navigation.navigate('RegisterKitScreen')}
                />
                
              </View>
                <KitTable dataSource={dataSource}/>

            </View>
            <View style={styles.footerView} />
        </View>
        
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    HomeScreen,
    RegisterKitScreen,
    KitInfo

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
      //backgroundColor: 'black',
    },
    headerView: {
      width:'100%',
      height:'9%',
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: '#ff9a9a',
    },
    titleView: {
      width:'100%',
      height:'10%',
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: '#9aa9ff',
    },
    contentView: {
      flex: 1,
      alignItems: 'center',
      //backgroundColor: '#d6ca1a',
      flexDirection: 'column',
    },
    registerView: {
      marginTop: 20,
      height: '12%',
      width: '96%',
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: '#FF0000',
    },
    footerView: {
      width:'100%',
      height:'2%',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#1ad657',
    },
    titleStyle: {
        fontSize: 70,
        fontFamily: "NanumSquareRoundB"
    },
})