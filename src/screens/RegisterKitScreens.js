import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    Button,
    Alert,
		StyleSheet,
		TouchableOpacity
} from 'react-native';


export default class RegisterKitScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.headerView}>
									<TouchableOpacity
										
										style={styles.backButtonStyle}
									>
										<Text onPress={() => this.props.navigation.goBack()}>
											뒤로가기
										</Text>
									</TouchableOpacity>
								</View>
                <View style={styles.titleView}>
                    <Text style={styles.titleStyle}>키트 등록하기</Text>
                </View>
                <View style={styles.contentView}>
                    
                </View>
                <View style={styles.footerView} />
            </View>
            
        );
    }
}

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
				fontSize: 50,
				fontFamily: "NanumSquareRoundB"
			},
			backButtonStyle: {
				position: 'absolute',
				left: 10,
				top: '50%'
			}
})