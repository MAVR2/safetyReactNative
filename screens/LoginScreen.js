import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Loginscreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const manejarLogin = () => {
        if (!email || !password) {
        Alert.alert('Error', 'Por favor completa todos los campos.');
        return;
        }

        if (email === 'demo@email.com' && password === '1234') {
        Alert.alert('Éxito', 'Inicio de sesión correcto');
        navigation.navigate('Home');
        } else {
        Alert.alert('Error', 'Credenciales incorrectas');
        }
    };

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Bienvenido, por favor inicie sesión</Text>

        {/* Campo de correo */}
        <View style={styles.inputContainer}>
            <Icon name="email" size={20} color="#888" style={styles.icon} />
            <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            />
        </View>

        {/* Campo de contraseña */}
        <View style={styles.inputContainer}>
            <Icon name="lock" size={20} color="#888" style={styles.icon} />
            <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            />
        </View>

        <Button
            title="Ingresar"
            onPress={manejarLogin}
            buttonStyle={styles.button}
        />
        </View>
    );``
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 24,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 15,
        paddingHorizontal: 12,
        marginBottom: 12,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
    },
    button: {
        marginTop: 25,
        marginHorizontal: 50,
        backgroundColor: 'rgba(141, 192, 158, 1)',
        borderRadius: 15,
    },
});
