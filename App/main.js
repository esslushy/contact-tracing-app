import React from 'react';
import { View, Button, Text } from 'react-native';
import styles from './styles/main'
import { NavigationContainer } from '@react-navigation/native';

const Main = ({ navigation }) => {
    return(
        <>
            <View style={styles.body}>
                <Text>Hello World</Text>
                <Text>
                    This is a stickup
                </Text>
                <Text>
                    This is a test
                </Text>
                <Button 
                    title="Report Positive Case"
                    onPress={() => navigation.navigate('Report')}
                />
            </View>
        </>
    )
}

export default Main;