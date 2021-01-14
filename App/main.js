import React from 'react';
import { View, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'
import styles from './styles/main'
import { day_start_from_time, batch_start_from_time, generate_new_day_key } from './contact-tracing/ephid-creation'

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
                    onPress={(generate_new_day_key)}
                />
            </View>
        </>
    )
}

export default Main;