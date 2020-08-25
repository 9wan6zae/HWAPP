/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, AsyncStorage} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Pages} from 'react-native-pages';
import FucntionButton from '../../styles/functionButton';

export default class KitInfo extends Component {
  static navigationOptions = {
    title: '코드설명',
  };

  constructor(props) {
    super(props);
    this.state = {
      pageIndex: '',
      maxPage: 3,
      codeStep: '',
    };
  }

  storageChapterStep = () => {
    const kitCode = this.props.navigation.state.params.kitCode;
    AsyncStorage.setItem('chapterStep' + kitCode, '3');
  };

  loadCodeStep = async () => {
    const kitCode = this.props.navigation.state.params.kitCode;
    const storageCodeStep = await AsyncStorage.getItem('codeStep' + kitCode);
    if (storageCodeStep === null) {
      this.setState({codeStep: '0'});
      AsyncStorage.setItem('codeStep' + kitCode, '0');
    } else {
      this.setState({codeStep: storageCodeStep});
    }
  };

  componentDidMount() {
    this._subscribe = this.props.navigation.addListener('didFocus', () => {
      this.loadCodeStep();
      //Put your Data loading function here instead of my this.LoadData()
    });
  }

  checkCodeStep(codeStep, index) {
    const {maxPage} = this.state;
    const chapterStep = this.props.navigation.state.params.chapterStep;
    const kitCode = this.props.navigation.state.params.kitCode;
    if (codeStep < maxPage && index + 1 > codeStep) {
      this.setState({codeStep: index + 1});
      AsyncStorage.setItem('codeStep' + kitCode, String(index + 1));
    }
    if (index + 1 === 3 && chapterStep < 3) {
      this.storageChapterStep();
    }
  }

  RenderCodeIamge = (props) => {
    if (props.index === 0) {
      return <Image source={require('../../assets/Re.png')} />;
    } else if (props.index === 1) {
      return <Image source={require('../../assets/Fa.png')} />;
    } else if (props.index === 2) {
      return <Image source={require('../../assets/Su.png')} />;
    }
  };

  RenderExplain = (props) => {
    if (props.index === 0) {
      return <Text>비밀번호 틀렸을 때 상태초기화</Text>;
    } else if (props.index === 1) {
      return <Text>도어락 잠김</Text>;
    } else if (props.index === 2) {
      return <Text>도어락 열림</Text>;
    }
  };

  RenderBottomSheetBtn = (props) => {
    const {codeStep} = this.state;
    if (props.index <= codeStep && codeStep !== '') {
      return (
        <FucntionButton
          buttonColor={'#3AE5D1'}
          title={'설명보기'}
          disabled={false}
          onPress={() => {
            this.Explain.open();
            this.setState({pageIndex: props.index});
            this.checkCodeStep(codeStep, props.index);
          }}
        />
      );
    } else {
      return <FucntionButton buttonColor={'#DBDBDB'} title={'설명보기'} />;
    }
  };

  render() {
    var pages = [];
    const {maxPage} = this.state;
    const {pageIndex} = this.state;
    const {codeStep} = this.state;
    for (let i = 0; i < maxPage; i++) {
      pages.push(
        <View style={{flex: 1, backgroundColor: 'red'}}>
          <View style={styles.contentView}>
            <this.RenderCodeIamge index={i} />
          </View>
          <View style={styles.footerView}>
            <this.RenderBottomSheetBtn index={i} />
          </View>
        </View>,
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text>
            완료 개수 {codeStep} / {maxPage}
          </Text>
        </View>
        <Pages>{pages}</Pages>
        <RBSheet
          ref={(ref) => {
            this.Explain = ref;
          }}
          closeOnDragDown={true}
          height={700}
          openDuration={250}
          customStyles={{
            container: {
              borderRadius: 20,
              alignItems: 'center',
            },
          }}>
          <View style={styles.contentView}>
            <this.RenderExplain index={pageIndex} />
          </View>
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
    alignItems: 'flex-end',
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
    height: '20%',
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
  explainButton: {
    minWidth: 140,
    height: 40,
    backgroundColor: '#3AE5D1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
});
