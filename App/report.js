import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';

import styles from './styles/report'

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

    const testType = 'Throat'

    return (
        <>
            <View style={styles.body}>
                <View style={styles.formItems}>
                    <Text>Date You Were Tested On:</Text>
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
                    <Text>Date You Were Tested On:</Text>
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
                    <Text>Test Type</Text>
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
                            testType = item
                        }
                    />
                </View>
            </View>
            <View style={styles.submitButton}>
                <Button title='Submit'/>
            </View>
        </>
    );
}

export default Report;