import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    Button,
    Alert,
    StyleSheet
} from 'react-native';


export default class HomeScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.header}/>
                <View style={styles.title} />
                <View style={styles.content} />
                <View style={styles.footer} />
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
      header: {
        width:'100%',
        height:'9%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff9a9a',
      },
      title: {
        width:'100%',
        height:'18%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9aa9ff',
      },
      content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d6ca1a',
      },
      footer: {
        width:'100%',
        height:'20%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1ad657',
      },
})