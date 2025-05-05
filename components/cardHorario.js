import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CardHorario({ onPressModificar, onPressBorrar, item }) {
    return (
        <View style={styles.card}>
            <Text style={styles.label}>Hora de inicio</Text>
            <Text style={styles.value}>{item.Hora_inicio}</Text>

            <Text style={styles.label}>Configuracion de equipo</Text>
            {item.Equipos.map ((equipo, index) =>(
                <Text key={index} style={styles.value}>• {equipo}</Text>
            ))}
            <View style={styles.buttonRow}>
                <TouchableOpacity style={[styles.button, styles.modifyButton]} onPress={onPressModificar}>
                    <Text style={styles.buttonText}>Modificar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={onPressBorrar}>
                    <Text style={styles.buttonText}>Borrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#dcdcdc',
        borderRadius: 16,
        padding: 16,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        width: '90%',
        alignSelf: 'center',
    },
    label: {
        fontSize: 14,
        color: '#444',
        marginBottom: 2,
    },
    value: {
        fontSize: 16,
        color: '#000',
        marginBottom: 12,
        fontWeight: '500',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    modifyButton: {
        backgroundColor: '#92D5A6',
    },
    deleteButton: {
        backgroundColor: '#C18383',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
