import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function PickerList({label, selectedValue, onValueChange, options}) {
    return(
        <View style={styles.row}>
            <Text style={styles.label}>{label}</Text>
            <Picker
            selectedValue={selectedValue}
            onValueChange={onValueChange}
            style={styles.picker}>
            
        <Picker.Item label={`selecciona ${label.toLowerCase()}`} value="" ></Picker.Item>
            {options.map((item, index) => (
                <Picker.Item key={index} label={item.label} value={item.value}/>
            ))}
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    label:{
        fontSize: 16,
        marginRight: 10,
        width: 100,
    },
    picker: {
        flex:1,
        height: 50,
        backgroundColor: '#eee',
        borderRadius: 10,
    },
});