import AsyncStorage from '@react-native-async-storage/async-storage';

export const guardarTareasLocal = async (tareas) => {
  try {
    await AsyncStorage.setItem('tareas', JSON.stringify(tareas));
  } catch (e) {
    console.log('Error guardando localmente', e);
  }
};

export const cargarTareasLocal = async () => {
  try {
    const tareas = await AsyncStorage.getItem('tareas');
    return tareas ? JSON.parse(tareas) : [];
  } catch (e) {
    console.log('Error cargando tareas locales', e);
    return [];
  }
};
