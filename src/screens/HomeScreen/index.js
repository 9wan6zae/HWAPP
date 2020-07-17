import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    Button,
    Alert,
    StyleSheet
} from 'react-native';
import {Fonts} from '../../Fonts.js';


export default class HomeScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.headerView}/>
                <View style={styles.titleView}>
                    <Text style={styles.titleStyle}>HWAPP</Text>
                </View>
                <View style={styles.contentView} />
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
        height:'15%',
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
          fontFamily: "BMDOHYEON"
      }
})