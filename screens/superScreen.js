import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DatePicker from '../components/datePicker';
import CardRecorrido from '../components/cardReporte';
import { getReportes } from '../services/api.js';

export default function SuperScreen() {
    const [fecha, setFecha] = useState(new Date());
    const [todosLosReportes, setTodosLosReportes] = useState([]);
    const [recorridosFiltrados, setRecorridosFiltrados] = useState([]);

    const navigation = useNavigation();

    useEffect(() => {
        const cargarReportes = async () => {
            const data = await getReportes();
            setTodosLosReportes(data.reportes);
        };
        cargarReportes();
    }, []);

    useEffect(() => {
        const fechaFormateada = new Intl.DateTimeFormat('sv-SE').format(fecha);
        const filtrados = todosLosReportes.filter(
            (r) => r.fecha === fechaFormateada
        );
        setRecorridosFiltrados(filtrados);
    }, [fecha, todosLosReportes]);
    const irDetalles = (item) => {
        navigation.navigate('Detalle', { recorrido: item });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido supervisor</Text>
            <Text style={styles.titleSub}>Selecciona una fecha:</Text>
            <DatePicker value={fecha} onChange={setFecha} />
            <FlatList
                data={recorridosFiltrados}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CardRecorrido item={item} onPress={() => irDetalles(item)} />
                )}
                ListEmptyComponent={<Text>No hay reportes para esta fecha.</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
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
