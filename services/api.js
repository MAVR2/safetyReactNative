export const getHorarios = async () => {
  return {
    horarios: [
      {
        id:1,
        Día: "lunes",
        Área: "corte laser",
        Supervisor: "Carlos Hernández Ramírez",
        Turno: "matutino",
        Hora_inicio: "9:00",
        Equipos: ["casco", "mascarilla", "lentes de seguridad", "chaleco de seguridad", "Guantes de seguridad", "botas de seguridad"]
      },
      {
        id:2,
        Día: "martes",
        Área: "ensamblaje",
        Supervisor: "Luisa Martínez",
        Turno: "vespertino",
        Hora_inicio: "15:00",
        Equipos: ["casco", "overol", "lentes de seguridad", "Guantes de seguridad", "zapatos de seguridad"]
      },
      {
        id:3,
        Día: "miércoles",
        Área: "almacén",
        Supervisor: "Javier Sánchez",
        Turno: "nocturno",
        Hora_inicio: "21:00",
        Equipos: ["casco", "Guantes de seguridad", "botas de seguridad"]
      },
      {
        id: 4,
        Día: "jueves",
        Área: "maquinado",
        Supervisor: "Ana Gabriela Torres",
        Turno: "matutino",
        Hora_inicio: "8:30",
        Equipos: ["casco", "mascarilla", "lentes de seguridad", "Guantes de seguridad"]
      },
      {
        id: 5,
        Día: "viernes",
        Área: "inspección",
        Supervisor: "Mario Jiménez",
        Turno: "vespertino",
        Hora_inicio: "14:00",
        Equipos: ["overol", "lentes de seguridad", "chaleco de seguridad", "botas de seguridad"]
      },
      {
        id: 6,
        Día: "sábado",
        Área: "empaque",
        Supervisor: "Daniela Ruiz",
        Turno: "matutino",
        Hora_inicio: "7:00",
        Equipos: ["Guantes de seguridad", "mascarilla", "overol"]
      },
      {
        id: 7,
        Día: "domingo",
        Área: "control de calidad",
        Supervisor: "Fernando Mendoza",
        Turno: "nocturno",
        Hora_inicio: "22:00",
        Equipos: ["casco", "chaleco de seguridad", "lentes de seguridad"]
      },
      {
        id: 8,
        Día: "lunes",
        Área: "pintura",
        Supervisor: "Isabel Moreno",
        Turno: "vespertino",
        Hora_inicio: "13:30",
        Equipos: ["mascarilla", "Guantes de seguridad", "overol", "botas de seguridad"]
      }
    ]
  }
}

export const getSupers = async () => {
  return {
    supers: [
      {
        id: 1,
        nombre: 'Carlos Hernández Ramírez'
      },
      {
        id: 2,
        nombre: 'María Fernanda López Díaz'
      },
      {
        id: 3,
        nombre: 'Juan Pablo Torres Vega'
      }
    ]
  }
}
export const getAreas = async () => {
  return {
    areas: [
      {
        id: 1,
        nombre: 'corte laser'
      },
      {
        id: 2,
        nombre: 'maquinado'
      },
      {
        id: 3,
        nombre: 'ensamble'
      },
    ]
  }
}

export const getReportes = async () => {
  return {
    reportes: [
      {
        id: "reporte_001",
        fecha: "2025-04-25",
        area: "Corte Laser",
        turno: "Matutino",
        supervisor: "Juan Pérez",
        inico_recorrido: "9:00 AM",
        fin_recorrido: "9:10 AM",
        personl_incompleto: 1,
        imagenes: [
          { id: "1", uri: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=420&q=80" },
          { id: "2", uri: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=420&q=80" },
          { id: "3", uri: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=420&q=80" }
        ]
      },
      {
        id: "reporte_002",
        fecha: "2025-04-26",
        area: "Ensamble",
        turno: "Vespertino",
        supervisor: "Laura Martínez",
        inico_recorrido: "2:00 PM",
        fin_recorrido: "2:45 PM",
        personl_incompleto: 3,
        imagenes: [
          { id: "4", uri: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=420&q=80" },
          { id: "5", uri: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=420&q=80" },
          { id: "6", uri: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=420&q=80" }
        ]
      },
      {
        id: "reporte_003",
        fecha: "2025-04-27",
        area: "Corte Plasma",
        turno: "Nocturno",
        supervisor: "Carlos Ruiz",
        inico_recorrido: "10:00 PM",
        fin_recorrido: "10:30 PM",
        personl_incompleto: 2,
        imagenes: [
          { id: "7", uri: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=420&q=80" }
        ]
      }
    ]
  };
};
