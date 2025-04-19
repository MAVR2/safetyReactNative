// components/CustomDatePicker.js
import React, { useState } from 'react';
import { View, TextInput, Platform, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function DatePicker({ value, onChange }) {
    const [mostrar, setMostrar] = useState(false);

    const mostrarPicker = () => setMostrar(true);

    const selecDate = (event, selectedDate) => {
        setMostrar(Platform.OS === 'ios');
        if (selectedDate) onChange(selectedDate);
    };

    return (
        <View style={styles.row}>
            <Icon name='calendar-today' size={24} color="#888" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder='Fecha'
                value={value.toLocaleDateString()}
                editable={false}
            />
            <Button onPress={mostrarPicker} title='Seleccionar' buttonStyle={styles.button} />

            {mostrar && (
                <DateTimePicker
                    value={value}
                    mode='date'
                    display='default'
                    onChange={selecDate}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
    },
    icon: {
        marginRight: 8,
    },
    button: {
        margin: 5,
        backgroundColor: 'rgba(141, 192, 158, 1)',
        borderRadius: 15,
    },
});
