import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card, Button, ListItem } from 'react-native-elements'
import styles from './styles/main'
import { generate_next_day_key, generate_new_day_key, generate_ephids_for_day } from './contact-tracing/ephid-creation' 

// Bluetooth
//TODO find out how to keep permenant between app loads
let bluetoothActive = false

const exposure_reports = () => {
    // Get exposures from API
    let exposures = [
        {
            date: "1/18/2021",
            severity: "Mild"
        },
        {
            date: "1/14/2021",
            severity: "Severe"
        }
    ]

    if(exposures.length == 0){
        // return a happy message if nothing is exposed
        return(
            <Text>
                You haven't been exposed!
            </Text>
        )
    }else{
        // Return all possible exposures
        return exposures.map((item, key) => (
            <ListItem key={key} bottomDivider>
                <ListItem.Content>
                    <ListItem.Title>
                        {item.date} 
                    </ListItem.Title>
                </ListItem.Content>
                <ListItem.Content>
                    <ListItem.Title style={{alignSelf: 'flex-end'}}>
                        {item.severity} 
                    </ListItem.Title>
                </ListItem.Content>
            </ListItem>
        ))
    }
}

const Main = ({ navigation }) => {
    const [bluetoothButtonText, bluetoothButtonTextChange] = useState(bluetoothActive ? "Turn Bluetooth Off" : "Turn Bluetooth On")
    return(
        <ScrollView>
            <Card>
                <Card.Title style={{fontSize: 24}}>Exposures</Card.Title>
                <Card.Divider />
                <Card.Title style={{fontSize: 18}}>You have been exposed on:</Card.Title>
                <View style={styles.exposure}>
                    {exposure_reports()}
                </View>
            </Card>
            <Card>
                <Card.Title style={{fontSize: 24}}>Navigation</Card.Title>
                <Card.Divider />
                <Button style={{padding: 10}}
                    title="Report Positive Case"
                    onPress={() => navigation.navigate('Report')}
                />
                <Button style={{padding: 10}}
                    title="Learn More"
                    onPress={() => navigation.navigate('More Info')}
                />
            </Card>
            <Card>
                <Card.Title style={{fontSize: 24}}>Bluetooth</Card.Title>
                <Card.Divider />
                <Button style={{padding: 10}}
                    title={bluetoothButtonText}
                    onPress={() => {
                        bluetoothActive = !bluetoothActive
                        bluetoothButtonTextChange(bluetoothActive ? "Turn Bluetooth Off" : "Turn Bluetooth On")
                    }}
                />
            </Card>
        </ScrollView>
    )
}

export default Main;