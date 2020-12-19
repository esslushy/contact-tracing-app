import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        margin: 30,
    },
    formItems: {
        width: '100%',
        padding: 10,
    },
    labelText: {
        fontSize: 16,
        paddingBottom: 10,
    },
    submitButton: {
        height: 100,
        width: '90%',
        alignSelf: 'center',
    }
})

export default styles;