import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Button, Icon} from "react-native-elements";
import { Picker } from '@react-native-picker/picker';
import PickerList from "../components/PickerList";
import {getSupers, getAreas} from '../services/api'


export default function NewRecorridoScreen({route}) {

    const {horario} = route.params;

    useEffect(() => {
        if(horario) {
            setDiaSeleccionado(horario.Dia);
            setAreaSelecionado(horario.Área);
            setSuperSelecionado(horario.Supervisor);
            setTurnoSelecionado(horario.Turno);
            setHoraSeleccionada(horario.Hora);
        }
    }, [horario])

    const diasSemana =['lunes', 'martes','miercoles', 'jueves', 'viernes', 'sabado', 'domingo']

    const equipoOpciones = [
        { label: 'casco', icon: 'hard-hat', type:"font-awesome-5" },
        { label: 'mascarilla', icon:'face-mask-outline', type:"material-community" },
        { label: 'lentes de seguridad', icon: 'safety-goggles', type:"material-community" },
        { label: 'chaleco de seguridad', icon: 'vest', type:"font-awesome-5"},
        { label: 'Guantes de seguridad', icon: 'hand-back-left-outline', type:"material-community" },
        { label: 'botas de seguridad', icon: 'shoe-cleat', type:"material-community" },
    ];
    const [diaSeleccionado, setDiaSeleccionado] = useState('');
    const [areas, setAreas] = useState([]);
    const [areaSelecionado, setAreaSelecionado] = useState('');
    const [superSeleccionado, setSuperSelecionado] = useState('');
    const [supers, setSupers] =useState([]);
    const [turnoSelecionado, setTurnoSelecionado] = useState('');
    const [horasDisponibles, setHorasDisponibles] = useState(['9:00', '12:00', '2:00']);
    const [horaSeleccionada, setHoraSeleccionada] = useState(['9:00']);
    const [equipos, setEquipos] = useState([]);


    const toggleEquipo = (equipo) => {
        setEquipos((prev) =>
            prev.includes(equipo)
                ? prev.filter((e) => e !== equipo)
                : [...prev, equipo]
        );
    };

    const guardarHorario = () => {
        if(diaSeleccionado || areaSelecionado|| superSeleccionado|| turnoSelecionado|| horaSeleccionada|| equipos === ''){
            Alert.alert('Error', 'por favor completa los campos')
        }
        console.log("Día seleccionado:", diaSeleccionado);
        console.log("Área seleccionada:", areaSelecionado);
        console.log("Supervisor:", superSeleccionado);
        console.log("Turno:", turnoSelecionado);
        console.log("Hora de inicio:", horaSeleccionada);
        console.log("Equipos seleccionados:", equipos);
    }

    useEffect(() => {
        if (turnoSelecionado === 'matutino'){
            setHorasDisponibles(['9:00', '12:00', '2:00']);
            setHoraSeleccionada('9:00')
        }else if(turnoSelecionado === 'vespertino'){
            setHorasDisponibles(['13:00', '15:00', '17:00'])
            setHoraSeleccionada['13:00']
        }
    }, [turnoSelecionado]);

    useEffect(() => {
        const fetchAreas = async () => {
            const data = await getAreas();
            setAreas(data.areas);
        };
        fetchAreas();
    }, []);

    useEffect(() => {
        const fetchSupers = async () =>{
            const data = await getSupers();
            setSupers(data.supers);
        };
        fetchSupers();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Agregar un Recorrido</Text>
            <View style={styles.row}>
                <PickerList label={"Dias de la semana"}
                    selectedValue={diaSeleccionado} 
                    onValueChange={setDiaSeleccionado} 
                    options={diasSemana.map(dia => ({
                        label: dia.charAt(0).toUpperCase()+dia.slice(1),
                        value: dia
                    }))}
                    />
            </View>
            <View style={styles.row}>
                    <PickerList label={'Area'}
                        selectedValue={areaSelecionado}
                        onValueChange={setAreaSelecionado}
                        options={areas.map(area => ({
                            label: area.nombre.charAt(0).toUpperCase()+area.nombre.slice(1),
                            value: area.nombre
                        }))}
                    />
            </View>
            <View style={styles.row}>
                <PickerList label={'Supervisor'}
                    selectedValue={superSeleccionado}
                    onValueChange={setSuperSelecionado}
                    options={supers.map(item => ({
                        label: item.nombre,
                        value: item.nombre
                    }))}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Turno</Text>
                <Picker
                    selectedValue={turnoSelecionado}
                    onValueChange={(itemValue) => setTurnoSelecionado(itemValue)}
                    style={styles.picker}>
                    <Picker.Item label="Selecciona un Turno" value="" />
                    <Picker.Item label="Matutino" value="matutino" />
                    <Picker.Item label="Vespertino" value="vespertino" />
                </Picker>
            </View>
            <Text style={styles.label}>Hora de inicio</Text>
            <View style={styles.radioGroup}>
                {horasDisponibles.map((hora) => (
                    <TouchableOpacity
                        key={hora}
                        style={styles.radioOption}
                        onPress={() => setHoraSeleccionada(hora)}
                    >
                        <View style={styles.radioCircle}>
                            {horaSeleccionada === hora && <View style={styles.radioSelected} />}
                        </View>
                        <Text style={styles.radioText}>{hora}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Text style={styles.title}>Selecione el equipo de seguridad</Text>
            <View style={styles.grid}>
                {equipoOpciones.map((item) => {
                    const selected = equipos.includes(item.label);
                    return (
                        <TouchableOpacity
                            key={item.label}
                            style={[styles.equipoBox, selected && styles.equipoBoxSelected]}
                            onPress={() => toggleEquipo(item.label)}
                        >
                            <Icon
                                name={item.icon}
                                type={item.type}
                                size={30}
                                color={selected ? '#fff' : '#333'}
                            />
                            <Text style={[styles.equipoText, selected && { color: '#fff' }]}>
                                {item.label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
            <Button 
                title={"Guardar Horario"}
                onPress={guardarHorario}
                buttonStyle={styles.guardarBtn}></Button>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginRight: 10,
        width: 100,
    },
    picker: {
        flex: 1,
        height: 50,
        backgroundColor: '#eee',
        borderRadius: 10,
    },
    radioGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 15,
    },
    radioOption: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 6,
    },
    radioSelected: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#007AFF',
    },
    radioText: {
        fontSize: 14,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        marginVertical: 20,
        justifyContent: 'space-between',
    },
    equipoBox: {
        width: '47%',
        backgroundColor: '#D9A7A7',
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        marginBottom: 10,
    },
    equipoBoxSelected: {
        backgroundColor: '#87C8A7',
    },
    equipoText: {
        marginTop: 5,
        fontWeight: '600',
        textAlign: 'center',
        color: '#333',
    },
    guardarBtn: {
        backgroundColor: '#A4C9A6',
        padding: 12,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 20,
    },
    guardarText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});