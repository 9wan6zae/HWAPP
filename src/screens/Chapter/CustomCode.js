// @flow

// import React from 'react';
// import {Provider} from 'react-redux';
// import {store} from '../Bluetooth/Store';
// import SensorTag from '../Bluetooth/SensorTag';

// export default function App() {
//   return (
//     <Provider store={store}>
//       <SensorTag />
//     </Provider>
//   );
// }

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import YouTube from 'react-native-youtube';

export default class KitInfo extends Component {
  static navigationOptions = {
    title: '조립 영상',
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentView}>
          <YouTube
            videoId="gQHD0vSYW9g" // The YouTube video ID
            play // control playback of video with true/false
            fullscreen // control whether the video should play in fullscreen or inline
            loop // control whether the video should loop when ended
            onReady={(e) => this.setState({isReady: true})}
            onChangeState={(e) => this.setState({status: e.state})}
            onChangeQuality={(e) => this.setState({quality: e.quality})}
            onError={(e) => this.setState({error: e.error})}
            style={styles.videoStyle}
          />
        </View>
        <View style={styles.footerView} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  videoStyle: {
    alignSelf: 'stretch',
    height: 300,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
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
    backgroundColor: '#FFF',
  },
  footerView: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  titleStyle: {
    fontSize: 50,
    //fontFamily: 'NanumSquareRoundB',
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
