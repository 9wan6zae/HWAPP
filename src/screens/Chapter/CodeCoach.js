import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

export default class KitInfo extends Component {
  static navigationOptions = {
    title: '코드설명',
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleView} />
        <View style={styles.contentView}>
          <ScrollView style={styles.dataWrapper}>
            <Text>
              if (
              <TouchableOpacity
                onPress={() => this.Standard.open()}
                style={styles.button}>
                <Text style={styles.buttonTitle}>1</Text>
              </TouchableOpacity>
              ) {'{'} {'\n'}
              {'\t'}test{'\n'}
              {'}'}
            </Text>
            <Text>
              if (
              <TouchableOpacity
                onPress={() => this.Standard.open()}
                style={styles.button}>
                <Text style={styles.buttonTitle}>1</Text>
              </TouchableOpacity>
              ) {'{'} {'\n'}
              {'\t'}test{'\n'}
              {'}'}
            </Text>
            <Text>
              if (
              <TouchableOpacity
                onPress={() => this.Standard.open()}
                style={styles.button}>
                <Text style={styles.buttonTitle}>1</Text>
              </TouchableOpacity>
              ) {'{'} {'\n'}
              {'\t'}test{'\n'}
              {'}'}
            </Text>
            <Text>
              if (
              <TouchableOpacity
                onPress={() => this.Standard.open()}
                style={styles.button}>
                <Text style={styles.buttonTitle}>1</Text>
              </TouchableOpacity>
              ) {'{'} {'\n'}
              {'\t'}test{'\n'}
              {'}'}
            </Text>
            <Text>
              if (
              <TouchableOpacity
                onPress={() => this.Standard.open()}
                style={styles.button}>
                <Text style={styles.buttonTitle}>1</Text>
              </TouchableOpacity>
              ) {'{'} {'\n'}
              {'\t'}test{'\n'}
              {'}'}
            </Text>
            <Text>
              if (
              <TouchableOpacity
                onPress={() => this.Standard.open()}
                style={styles.button}>
                <Text style={styles.buttonTitle}>1</Text>
              </TouchableOpacity>
              ) {'{'} {'\n'}
              {'\t'}test{'\n'}
              {'}'}
            </Text>
            <Text>
              if (
              <TouchableOpacity
                onPress={() => this.Standard.open()}
                style={styles.button}>
                <Text style={styles.buttonTitle}>1</Text>
              </TouchableOpacity>
              ) {'{'} {'\n'}
              {'\t'}test{'\n'}
              {'}'}
            </Text>
            <Text>
              if (
              <TouchableOpacity
                onPress={() => this.Standard.open()}
                style={styles.button}>
                <Text style={styles.buttonTitle}>1</Text>
              </TouchableOpacity>
              ) {'{'} {'\n'}
              {'\t'}test{'\n'}
              {'}'}
            </Text>
            <Text>
              if (
              <TouchableOpacity
                onPress={() => this.Standard.open()}
                style={styles.button}>
                <Text style={styles.buttonTitle}>1</Text>
              </TouchableOpacity>
              ) {'{'} {'\n'}
              {'\t'}test{'\n'}
              {'}'}
            </Text>
            <Text>
              if (
              <TouchableOpacity
                onPress={() => this.Standard.open()}
                style={styles.button}>
                <Text style={styles.buttonTitle}>1</Text>
              </TouchableOpacity>
              ) {'{'} {'\n'}
              {'\t'}test{'\n'}
              {'}'}
            </Text>
            <Text>
              if (
              <TouchableOpacity
                onPress={() => this.Standard.open()}
                style={styles.button}>
                <Text style={styles.buttonTitle}>1</Text>
              </TouchableOpacity>
              ) {'{'} {'\n'}
              {'\t'}test{'\n'}
              {'}'}
            </Text>
            <Text>
              if (
              <TouchableOpacity
                onPress={() => this.Standard.open()}
                style={styles.button}>
                <Text style={styles.buttonTitle}>1</Text>
              </TouchableOpacity>
              ) {'{'} {'\n'}
              {'\t'}test{'\n'}
              {'}'}
            </Text>
            <Text>
              if (
              <TouchableOpacity
                onPress={() => this.Standard.open()}
                style={styles.button}>
                <Text style={styles.buttonTitle}>1</Text>
              </TouchableOpacity>
              ) {'{'} {'\n'}
              {'\t'}test{'\n'}
              {'}'}
            </Text>
            <Text>
              if (
              <TouchableOpacity
                onPress={() => this.Standard.open()}
                style={styles.button}>
                <Text style={styles.buttonTitle}>1</Text>
              </TouchableOpacity>
              ) {'{'} {'\n'}
              {'\t'}test{'\n'}
              {'}'}
            </Text>
          </ScrollView>
        </View>
        <View style={styles.footerView} />
        <RBSheet
          ref={(ref) => {
            this.Standard = ref;
          }}
          height={500}
          openDuration={250}
          customStyles={{
            container: {
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}>
          <Text>처음 조건문</Text>
        </RBSheet>
      </View>
    );
  }
}

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
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  contentView: {
    flex: 1,
    alignContent: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  footerView: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
  buttonStyle: {
    height: 100,
  },
  button: {
    minWidth: 50,
    height: 15,
    backgroundColor: '#4EB151',
    alignItems: 'center',
    borderRadius: 3,
  },
  buttonTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  dataWrapper: {
    marginTop: 0,
    marginLeft: 20,
    width: '95%',
  },
});
