// screens/SuperScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DatePicker from '../components/datePicker'

export default function SuperScreen() {
    const [fecha, setFecha] = useState(new Date());

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido supervisor</Text>
            <Text style={styles.titleSub}>Selecciona una fecha:</Text>

            <DatePicker value={fecha} onChange={setFecha} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    titleSub: {
        fontSize: 20,
        marginBottom: 12,
    },
});
