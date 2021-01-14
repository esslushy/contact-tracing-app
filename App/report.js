import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';

import styles from './styles/report';

const Report = () => {

    const [dateTested, setDateTested] = useState(new Date());

    const onChangeDateTested = (event, selectedDate) => {
        const currentDate = selectedDate || dateTested;
        setDateTested(currentDate);
    };

    const [dateReceived, setDateReceived] = useState(new Date());

    const onChangeDateReceived = (event, selectedDate) => {
        const currentDate = selectedDate || dateReceived;
        setDateReceived(currentDate);
    };

    let testType = 'Throat'

    return (
        <>
            <View style={styles.body}>
                <View style={styles.formItems}>
                    <Text style={styles.labelText}>Date You Were Tested On:</Text>
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={dateTested}
                        mode='date'
                        display="default"
                        onChange={onChangeDateTested}
                        style={{width: '100%'}}
                    />
                </View>
                <View style={styles.formItems}>
                    <Text style={styles.labelText}>Date You Received Results On:</Text>
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={dateReceived}
                        mode='date'
                        display="default"
                        onChange={onChangeDateReceived}
                        style={{width: '100%'}}
                    />
                </View>
                <View style={styles.formItems}>
                    <Text style={styles.labelText}>Test Type</Text>
                    <DropDownPicker
                        items={[
                            {label: 'Throat', value: 'Throat'},
                            {label: 'Nose', value: 'Nose'},
                            {label: 'Antibody', value: 'Antibody'},
                        ]}
                        defaultValue={testType}
                        containerStyle={{height: 40}}
                        style={{backgroundColor: '#fafafa'}}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        onChangeItem={(item, index) => 
                            testType = item.value
                        }
                    />
                </View>
            </View>
            <View style={styles.submitButton}>
                <Button title='Submit' onPress={() => {
                        let dateTestedSQL = `${dateTested.getFullYear()}-${dateTested.getMonth()+1}-${dateTested.getDate()}`;
                        let dateReceivedSQL = `${dateReceived.getFullYear()}-${dateReceived.getMonth()+1}-${dateReceived.getDate()}`;
                        fetch('http://72.182.53.47:3000/report', {
                            method: 'POST',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                dateTested: dateTestedSQL,
                                dateReceived: dateReceivedSQL,
                                testType: testType
                            })
                        })
                        .then((response) => {
                            console.log("Success")
                        })
                        .catch((error) => {
                            console.log(error);
                            console.log("Can't connect to server, trying backup local server.")
                            fetch('http://192.168.1.238:3000/report', {
                                method: 'POST',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    dateTested: dateTestedSQL,
                                    dateReceived: dateReceivedSQL,
                                    testType: testType
                                })
                            })
                            .then((response) => {
                                console.log("Success")
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                        });
                    }
                }/>
            </View>
        </>
    );
}

export default Report;