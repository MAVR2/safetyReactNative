export const getTareas = async () => {
    const res = await fetch('http://TU_BACKEND:8000/api/tareas/');
    if (!res.ok) throw new Error('No se pudo obtener tareas');
    return await res.json();
  };
  