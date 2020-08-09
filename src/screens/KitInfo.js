import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import ChapterButton from '../styles/ChapterButton';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import VideoScreen from './Chapter/VideoScreen';
import CodeCoach from './Chapter/CodeCoach';
import CustomCode from './Chapter/CustomCode';
import Quiz from './Chapter/Quiz';

class KitInfo extends Component {
  render() {
    var {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        {/* <View style={styles.headerView}>
          <TouchableOpacity style={styles.backButtonStyle}>
            <Text onPress={() => this.props.navigation.goBack()}>뒤로가기</Text>
          </TouchableOpacity>
        </View> */}
        <View style={styles.titleView}>
          <Text style={styles.titleStyle}>키트 정보</Text>
        </View>
        <View style={styles.contentView}>
          <View style={styles.ChapterButtonStyle}>
            <ChapterButton
              buttonColor={'#FFF'}
              title={'조립영상'}
              onPress={() => navigate('VideoScreen')}
            />
            <ChapterButton
              buttonColor={'#FFF'}
              title={'코드설명'}
              onPress={() => navigate('CodeCoach')}
            />
          </View>
          <View style={styles.ChapterButtonStyle}>
            <ChapterButton
              buttonColor={'#FFF'}
              title={'커스터마이징'}
              onPress={() => navigate('CustomCode')}
            />
            <ChapterButton
              buttonColor={'#FFF'}
              title={'퀴즈'}
              onPress={() => navigate('Quiz')}
            />
          </View>
        </View>
        <View style={styles.footerView} />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    KitInfo,
    VideoScreen,
    CodeCoach,
    CustomCode,
    Quiz,
  },
  {
    defaultNavigationOptions: () => ({
      headerShown: true,
      headerTintColor: '#000',
      headerStyle: {
        backgroundColor: '#FFF',
      },
    }),
    initialRouteName: 'KitInfo',
  },
);
export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'white',
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
    backgroundColor: '#9aa9ff',
  },
  contentView: {
    flex: 1,
    alignContent: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d6ca1a',
  },
  footerView: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1ad657',
  },
  titleStyle: {
    fontSize: 50,
    fontFamily: 'NanumSquareRoundB',
  },
  backButtonStyle: {
    position: 'absolute',
    left: 10,
    top: '50%',
  },
  ChapterButtonStyle: {
    width: '80%',
    height: 190,
    alignItems: 'center',
    backgroundColor: 'powderblue',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
