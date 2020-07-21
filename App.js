// import React from 'react';
// import AppStack from './src/screens';

// const App = () => {
//   return (
//     <AppStack />
//   );
// };

// export default App;

import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Table, TableWrapper, Row, Cell} from 'react-native-table-component';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import CustomButton from './src/styles/CustomButton';
import KitInfoButton from './src/styles/KitItem';

import KitInfo from './src/screens/KitInfo';
import RegisterKitScreen from './src/screens/RegisterKitScreen'

const dataSource = [
  [['Row1 Column 1 Item0'], ['Row1 Column1 Item0 ']],
  [['Row2 Column 1 Item0'], ['Row2 Column2 Item0', 'Row2 Column2 Item1']],
];

class HomeScreen extends Component {
  render() {
    var {navigate} = this.props.navigation;

    const tableData = [];
    for (let i = 0; i < 30; i += 1) {
      const rowData = [];
      for (let j = 0; j < 1; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }

    return (
      <View style={styles.container}>
        <View style={styles.headerView} />
        <View style={styles.titleView}>
          <Text style={styles.titleStyle}>HWAPP</Text>
        </View>
        <View style={styles.contentView}>
          <View style={styles.registerView}>
            <CustomButton
              buttonColor={'#023e71'}
              title={'키트 등록하기'}
              onPress={() => navigate('RegisterKitScreen')}
            />
          </View>
          <View style={styles.tableContainer}>
            <View>
              <ScrollView style={styles.dataWrapper}>
                <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                  {tableData.map((rowData, index) =>
                    rowData.map((cellData, cellIndex) => (
                      <KitInfoButton
                        buttonColor={'#3F3F3F'}
                        title={'키트 ' + (index + 1)}
                        onPress={() => navigate('KitInfo')}
                      />
                    )),
                  )}
                </Table>
              </ScrollView>
            </View>
          </View>
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
    KitInfo,
  },
  {
    defaultNavigationOptions: () => ({
      headerShown: false,
      headerTintColor: '#000',
      headerStyle: {
        backgroundColor: '#FFF',
      },
    }),
    initialRouteName: 'HomeScreen',
  },
);
export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#FFF',
  },
  headerView: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleView: {
    width: '100%',
    height: '10%',
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
    width: '100%',
    height: '2%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#1ad657',
  },
  titleStyle: {
    fontSize: 70,
    fontFamily: 'NanumSquareRoundB',
  },
  tableContainer: {width: '100%', flex: 1, padding: 10, paddingTop: 30},
  header: {height: 50, backgroundColor: '#537791'},
  text: {textAlign: 'center', fontWeight: '100'},
  dataWrapper: {marginTop: -1},
  row: {height: 40, backgroundColor: '#E7E6E1'},
});
