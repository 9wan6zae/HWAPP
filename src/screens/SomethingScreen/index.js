import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Alert
} from 'react-native';
export default class SomethingScreen extends Component{

    render(){
        return (
            <View style={styles.container}>
                <Text>something</Text>
                <Button
                    title='back'
                    onPress={() => Alert.alert('Test')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
})