import React from 'react';
import { View, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'
import styles from './styles/main'
import { generate_next_day_key, generate_new_day_key, generate_ephids_for_day } from './contact-tracing/ephid-creation'

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
                    onPress={() => {
                            let key = "hello"
                            
                            console.log(generate_ephids_for_day(key))
                        }
                    }
                />
            </View>
        </>
    )
}

export default Main;