import React from "react";
import { View, Text, Alert, StyleSheet } from 'react-native';
import { Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function AdminScreen({ navigation }) {

    const horarios = () => {
        Alert.alert('Redirigido a horarios');
        navigation.navigate('Horarios');
    };

    const agregarRecorrido = () => {
        Alert.alert('Redirigido a recorridos');
        navigation.navigate('Recorridos');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido Administrador</Text>

            {/* Botón Horarios */}
            <Button
                title="Ver Horarios"
                onPress={horarios}
                buttonStyle={styles.button}
                icon={
                    <Icon
                        name="schedule"
                        size={20}
                        color="white"
                        style={{ marginRight: 10 }}
                    />
                }
            />

            {/* Botón Recorridos */}
            <Button
                title="Agregar Recorrido"
                onPress={agregarRecorrido}
                buttonStyle={styles.button}
                containerStyle={{ marginTop: 20 }}
                icon={
                    <Icon
                        name="map"
                        size={20}
                        color="white"
                        style={{ marginRight: 10 }}
                    />
                }
            />
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
        fontSize: 24,
        marginBottom: 50,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    button: {
        alignItems:"flex-start",
        backgroundColor: 'rgba(141, 192, 158, 1)',
        borderRadius: 15,
        padding: 12,
    },
});
