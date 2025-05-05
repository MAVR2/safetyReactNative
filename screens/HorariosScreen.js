import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { getHorarios, getAreas } from "../services/api";
import PickerList from "../components/PickerList";
import CardHorario from '../components/cardHorario';
import { useNavigation } from "@react-navigation/native";

export default function HorariosScreen() {

    const navigation = useNavigation();

    const diasSemana = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo']
    const [diaSeleccionado, setDiaSeleccionado] = useState('');
    const [areas, setAreas] = useState([]);
    const [areaSeleccionado, setAreaSeleccionado] = useState('');
    const [horarios, setHorarios] = useState([]);

    useEffect(() => {
        const fetchAreas = async () => {
            const data = await getAreas();
            setAreas(data.areas);
        };
        fetchAreas();
    }, []);

    useEffect(() => {
        const fetchHorarios = async () => {
            const data = await getHorarios();
            setHorarios(data.horarios);
        };
        fetchHorarios();
    }, []);

    const horariosFiltrados = horarios.filter((horario) => {
        const matchDia = diaSeleccionado ? horario.Día === diaSeleccionado : true;
        const matchArea = areaSeleccionado ? horario.Área === areaSeleccionado : true;
        return matchDia && matchArea;
    });

    const handleModificar = (horario) =>{
        navigation.navigate("Recorridos", {
            horario: horario,
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Horarios</Text>
            <PickerList label={'Dia de la semana'}
                selectedValue={diaSeleccionado}
                onValueChange={setDiaSeleccionado}
                options={diasSemana.map(dia => ({
                    label: dia.charAt(0).toUpperCase() + dia.slice(1),
                    value: dia
                }))}
            />
            <PickerList label={'Area'}
                selectedValue={areaSeleccionado}
                onValueChange={setAreaSeleccionado}
                options={areas.map(area => ({
                    label: area.nombre.charAt(0).toUpperCase() + area.nombre.slice(1),
                    value: area.nombre
                }))}
            />
            <View style={styles.horarioContainer}>
                <Text style={styles.title}>Horarios registrados</Text>
                <FlatList
                    data={horariosFiltrados

                    }
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <CardHorario item={item} onPressModificar={() => handleModificar(item)} />
                    )}
                    ListEmptyComponent={<Text>No hay reportes para esta fecha.</Text>}
                />
            </View>

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
    listContent: {

        padding: 16,
        paddingBottom: 40,
    },
    horarioContainer: {
        flex: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
    },
});