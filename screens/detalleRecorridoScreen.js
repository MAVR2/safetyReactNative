import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

export default function DetalleReporteScreen({ route }) {
    const { recorrido } = route.params;
    console.log('Imagenes:', recorrido.imagenes);


    return (
        <View style={styles.container}>
            {/* Encabezado */}
            <Text style={styles.title}>Reporte: {recorrido.id}</Text>

            {/* Información del reporte */}
            <View style={styles.infoRow}>
                <Text style={styles.label}>Fecha: </Text>
                <Text style={styles.value}>{recorrido.fecha} </Text>
                <Text style={styles.label}>Área:</Text>
                <Text style={styles.value}>{recorrido.area}</Text>
                <Text style={styles.label}>Turno:</Text>
                <Text style={styles.value}>{recorrido.turno}</Text>
            </View>

            <Text style={styles.label}>Supervisor asignado:</Text>
            <Text>{recorrido.supervisor}.</Text>

            <View style={styles.infoRow}>
                <View>
                    <Text style={styles.label}>Inicio del recorrido</Text>
                    <Text>{recorrido.inicio_recorrido}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Fin del recorrido</Text>
                    <Text>{recorrido.fin_recorrido}.</Text>
                </View>
            </View>

            <Text style={styles.label}>Personal con equipo incompleto: {recorrido.personal_incompleto}</Text>

            <View style={styles.galleryContainer}>
                <FlatList
                    data={recorrido.imagenes}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Image
                            source={{ uri: item.uri }}
                            style={styles.image}
                        />
                    )}
                    showsVerticalScrollIndicator={true}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 10,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        flexWrap: 'wrap',
    },
    label: {
        fontWeight: 'bold',
    },
    value: {
        marginRight: 10,
    },
    galleryContainer: {
        flex: 1,
        backgroundColor: '#ddd',
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
    },
    image: {
        width: '100%',
        aspectRatio: 1, 
        borderRadius: 10,
        marginVertical: 10,
    },
});
