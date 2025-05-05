import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CardRecorrido({ onPress, item }) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View style={styles.iconContainer}>
                <Icon name="clipboard-text-outline" size={40} color="#4A4A4A" />
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.idText}>Reporte: {item.id}</Text>
                <Text style={styles.detailText}>Fecha: {item.fecha}</Text>
                <Text style={styles.detailText}>Turno: {item.turno}</Text>
                <Text style={styles.detailText}>
                    Recorrido: {item.inicio_recorrido} - {item.fin_recorrido}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        padding: 15,
        marginVertical: 8,
        elevation: 2,
    },
    iconContainer: {
        marginRight: 15,
    },
    infoContainer: {
        flex: 1,
    },
    idText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    detailText: {
        fontSize: 14,
        color: '#555',
    },
});
