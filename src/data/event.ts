// Datos de ejemplo (placeholder). Reemplazar con la información real del evento.

export const event = {
  quinceañera: 'Rosa Nayeli',
  fecha: '2026-11-07T19:00:00-06:00', // ISO con timezone del evento
  fechaLegible: '7 de Noviembre, 2026',
  hora: '7:00 PM', // placeholder, ajustar a la hora real

  bienvenida:
    'Con la bendición de Dios y el cariño de mis padres, quiero compartir contigo uno de los días más especiales de mi vida.',

  padres: {
    titulo: 'Mis papás',
    nombres: ['Wilfrido Rivera', 'Rosa Hernández'],
  },

  padrinos: {
    titulo: 'Mis padrinos',
    nombres: ['Carlos Ramírez', 'Ana Torres'],
  },

  itinerario: [
    { hora: '6:00 PM', actividad: 'Misa de acción de gracias', lugar: 'Parroquia San José', icono: 'iglesia' },
    { hora: '8:00 PM', actividad: 'Recepción', lugar: 'Quinta las Rosas', icono: 'recepcion' },
    { hora: '9:00 PM', actividad: 'Vals y brindis', icono: 'brindis' },
    { hora: '10:00 PM', actividad: 'Cena y baile', icono: 'fiesta' },
  ] as { hora: string; actividad: string; lugar?: string; icono: 'iglesia' | 'recepcion' | 'brindis' | 'fiesta' }[],

  ubicacion: {
    nombre: 'Quinta las Rosas',
    direccion: 'S. Ignacio 11, Mártires del 68, 35157 Lerdo, Dgo.',
    mapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d561.6367292171307!2d-103.51932965580015!3d25.565450379662952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fd842621bf593%3A0xa161652d83c4951d!2sS.%20Ignacio%2011%2C%20M%C3%A1rtires%20del%2068%2C%2035157%20Lerdo%2C%20Dgo.!5e0!3m2!1ses-419!2smx!4v1787541365015!5m2!1ses-419!2smx',
    mapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=25.565450379662952,-103.51932965580015',
  },

  vestimenta: {
    tipo: 'Etiqueta',
    nota: 'Evitar el color blanco, rojo y verde olivo (reservados para la quinceañera).',
  },

  soloAdultos: {
    titulo: 'Solo adultos',
    intro: 'Con respeto...',
    mensaje: 'Aunque apreciamos a sus pequeños, hemos decidido celebrar este momento sin niños.',
    cierre: 'Deseamos que esta decisión no les impida asistir y celebrar este evento.',
  },

  regalo: {
    titulo: 'Opciones de Regalo',
    mensaje:
      'Mi mejor regalo es compartir contigo este gran día... Sin embargo, si deseas obsequiarme algo puedo sugerir:',
    sugerencia: 'Lluvia de sobres',
    cierre: '¡Gracias, me encantará!',
  },

  rsvp: {
    whatsapp: '5218711239289', // sin '+', formato internacional (México lleva 52 + 1 + 10 dígitos)
    fechaLimite: '30 de Octubre, 2026',
  },

  musica: {
    // Coloca el archivo de la canción en public/audio/ y pon aquí su nombre.
    src: '/audio/Ma-Belle-Evangeline-Letra-Latino.mp3',
  },
};
