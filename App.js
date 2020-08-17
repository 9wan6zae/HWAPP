import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  Platform,
} from 'react-native';

import axios from 'axios';

import {Table} from 'react-native-table-component';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import CustomButton from './src/styles/CustomButton';
import KitInfoButton from './src/styles/KitItem';

import KitInfo from './src/screens/KitInfo';
import RegisterKitScreen from './src/screens/RegisterKitScreen';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

class HomeScreen extends Component {
  state = {
    kitInfo: [],
  };

  loadKitInfo = async () => {
    axios
      .get('https://hwapp-2020.herokuapp.com/kit/getKitinfo?userId=bang')
      .then((response) => this.setState({kitInfo: response.data}));
  };

  constructor(props) {
    super(props);
    console.log('ccc');
  }

  componentWillMount() {
    this._subscribe = this.props.navigation.addListener('didFocus', () => {
      this.loadKitInfo();
      //Put your Data loading function here instead of my this.LoadData()
    });
  }

  componentDidMount() {
    console.log('mounted');
    this.loadKitInfo();
  }

  render() {
    const {kitInfo} = this.state;
    console.log(kitInfo);

    var {navigate} = this.props.navigation;

    const tableData = [];
    for (let i = 0; i < kitInfo.length; i += 1) {
      const rowData = [];
      rowData.push(`${i}`);

      tableData.push(rowData);
    }

    return (
      <View style={styles.container}>
        <View style={styles.statusBar}>
          <StatusBar backgroundColor="#fff" barStyle="dark-content" ax />
        </View>
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
                <Table>
                  {tableData.map((rowData, index) =>
                    rowData.map(() => (
                      <KitInfoButton
                        buttonColor={'#3F3F3F'}
                        title={kitInfo[index].kitName}
                        onPress={() => navigate('KitInfo')}
                      />
                    )),
                  )}
                </Table>
              </ScrollView>
            </View>
          </View>
          <View>
            <Text>{this.state.children}</Text>
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
      headerBackTitle: ' ',
    }),
    initialRouteName: 'HomeScreen',
  },
);
export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
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
  borderStyle: {
    borderWidth: 1,
    borderColor: '#C1C0B9',
  },
});
