import { React } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const Welcome = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Welcome to Noteify</Text>
            <Button title="Calendar" onPress={navigation.navigate('calendar', { name: 'SchoolCalendar' })}/>
            <Button title="Absences" onPress={navigation.navigate('welcome', { name: 'SchoolWelcome' })}/>
        </View>
    );
}
