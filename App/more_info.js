import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'
import styles from './styles/more_info'

const MoreInfo = ({ navigation }) => {
    return(
        <ScrollView>
            <Card>
                <Card.Title style={{fontSize: 24}}>About This App</Card.Title>
                <Card.Divider />
                <Text style={{fontSize: 18}}>
                    COVID-19 is a deadly pandemic as you are aware, but one of the major challenges facing
                    countries is controlling the spread. One way is to contact trace and find everyone
                    who interacted with an infected person and alert them to get tested. Going by people's
                    memories is inefficient and slow, but having apps that track a person's every move is
                    a violation of privacy. This app works to solve both these issues by providing a private
                    contact tracing solution. Rather than working off GPS, this app uses bluetooth technology
                    to monitor interactions between two users. The user's apps share no personal information 
                    other than a random id. When a user tests positive, they submit that result to a database 
                    along with a key that other users' apps can use to identify if they have come in contact
                    with the infected person. All data is destroyed after 2 weeks and there is no need to
                    gather any personal data to do the tracking. Additionally, the infected person can 
                    remain anonymous securing everyone's privacy. The bluetooth system can be turned on
                    and off by user choice in case they ever wish to stop using the app.
                </Text>
            </Card>
            <Card>
                <Card.Title style={{fontSize: 24}}>About COVID-19</Card.Title>
                <Card.Divider />
                <Text style={{fontSize: 18}}>
                    This is only a brief overview of the COVID-19 virus. For a more complete explanation 
                    please see the CDC's website. COVID-19 is an airborn virus that is highly contagius and
                    very deadly. Some common symptoms include fever, body ache, dry cough, fatigue, chills, headache, 
                    sore throat, loss of appetite, and loss of smell. In some people, COVID-19 causes more severe 
                    symptoms like high fever, severe cough, and shortness of breath. If you have any of these 
                    symptoms please contact your doctor and remain quarantined.
                </Text>
                <Text style={{fontSize: 18, paddingTop: 10}}>
                    It is recommended to stay at least 6 feet away from other people as well as wear a mask
                    in order to prevent the spread of COVID-19. A mask should cover both the nose and mouth 
                    while you are wearing it. Additionally, avoid touching your eyes, mouth, or face and
                    wash your hands often. 
                </Text>
            </Card>
        </ScrollView>
    )
}

export default MoreInfo;