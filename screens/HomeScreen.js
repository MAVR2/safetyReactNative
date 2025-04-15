import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getTareas, guardarTareasLocal, cargarTareasLocal } from '../storage/localStorage';

export default function HomeScreen() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const cargar = async () => {
      try {
        const tareasApi = await getTareas();
        setTareas(tareasApi);
        await guardarTareasLocal(tareasApi);
      } catch (e) {
        const locales = await cargarTareasLocal();
        setTareas(locales);
      }
    };
    cargar();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Tareas</Text>
      <FlatList
        data={tareas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>- {item.titulo}</Text>}
      />
    </View>
  );
}
