import React from 'react';
import { View, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'
import styles from './styles/main'

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
                <Button 
                    title="Test"
                    onPress={() => navigation.navigate('Report')}
                />
            </View>
        </>
    )
}

export default Main;