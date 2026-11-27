/*
 * DATOS DE "¿DÓNDE ALMUERZO HOY?"
 * ------------------------------------------------------------------
 * Fuentes: entrevistas P1–P5 (Entrega 1, oct. 2026), conocimiento del
 * equipo del campus, guía de servicios de alimentación UC (2020),
 * listado de servicios de Infraestructura UC y sitios de los locales
 * o de plataformas de delivery (precios iguales a los del local).
 * Horarios sin confirmar: se usó el de un local similar.
 * Revisado por el equipo el 27 de noviembre de 2026 (Entrega 3).
 *
 * VALORES PERMITIDOS (escríbelos exactamente así):
 *   ubicacion   -> "dentro"  (en el campus)   o   "fuera"  (fuera del campus)
 *   categorias  -> "liviano", "contundente", "para-el-camino", "saludable",
 *                  "comida-casera", "antojo"
 *   precio      -> número entero en pesos, SIN puntos ni signo $
 *                  (ej: 3500, no "$3.500"), o null si está por confirmar
 *   coordenadas -> (opcional) [latitud, longitud], para el mapa
 *
 * Un texto vacío ("") o un precio null se muestra en la página con la
 * etiqueta "por confirmar".
 * El "id" no se debe cambiar: los locales marcados con "Ya lo probé"
 * se guardan en el navegador con ese id.
 */

const DATOS = {
  // Fecha en que se revisaron los datos por última vez (formato AAAA-MM-DD).
  ultimaActualizacion: "2026-11-27",

  locales: [
    {
      id: "fork",
      nombre: "Fork",
      ubicacion: "dentro",
      zona: "Hall Central",
      ubicacionExacta: "Hall Central, 1er piso",
      tipoComida: "Platos preparados y ensaladas",
      tags: ["Caro"],
      horario: "8:00 a 19:00",
      comoComprar: "Saca tu plato del refrigerador y paga en la caja de autoservicio.",
      menu: [
        { plato: "Ensalada de pollo con orzo", precio: 4500, categorias: ["liviano", "saludable", "para-el-camino"] },
        { plato: "Gnocchi a la vodka", precio: 7990, categorias: ["contundente", "antojo"] }
      ]
    },

    {
      id: "casino-k",
      nombre: "Casino Edificio K",
      ubicacion: "dentro",
      zona: "Edificio K",
      ubicacionExacta: "Edificio K (Ciencia y Tecnología, Ingeniería), 1er piso",
      tipoComida: "Burritos, tacos, fajitas y menú de casino",
      tags: ["Caro"],
      horario: "8:30 a 16:00",
      comoComprar: "Elige y paga en la caja, y luego ve al mesón donde preparan tu plato frente a ti. Hay mucho ruido: repite tu pedido y revísalo antes de que lo terminen.",
      menu: [
        { plato: "Burrito", precio: 6000, categorias: ["contundente", "para-el-camino", "saludable"] },
        { plato: "Gohan", precio: null, categorias: ["contundente", "para-el-camino", "saludable"] },
        { plato: "Menú del casino", precio: 6000, categorias: ["contundente"] }
      ]
    },

    {
      id: "burga",
      nombre: "Burga",
      ubicacion: "dentro",
      zona: "Edificio K",
      ubicacionExacta: "Edificio K (Ciencia y Tecnología, Ingeniería), 1er piso. Es un local aparte del casino.",
      tipoComida: "Hamburguesas",
      tags: [],
      horario: "11:30 a 16:00",
      comoComprar: "",
      menu: [
        { plato: "Hamburguesas", precio: 4990, categorias: ["antojo"] }
      ]
    },

    {
      id: "la-roca",
      nombre: "La Roca",
      ubicacion: "dentro",
      zona: "Facultad de Ingeniería",
      ubicacionExacta: "Facultad de Ingeniería",
      tipoComida: "Menú del día",
      tags: ["Económico", "Porciones pequeñas"],
      horario: "8:30 a 16:00",
      comoComprar: "Revisa el menú del día en el papel que está en la caja.",
      menu: [
        { plato: "Menú del día", precio: 3500, categorias: ["comida-casera"] },
        { plato: "Ensalada César", precio: null, categorias: ["liviano", "saludable"] }
      ]
    },

    {
      id: "castano",
      nombre: "Castaño",
      ubicacion: "dentro",
      zona: "Complejo Andrónico Luksic",
      ubicacionExacta: "Patio fuera del Complejo Andrónico Luksic",
      tipoComida: "Empanadas",
      tags: [],
      horario: "8:30 a 21:00",
      comoComprar: "Se pide en un mesón (ahí te calientan la empanada), se paga en otro y se retira en un tercero.",
      menu: [
        { plato: "Empanada Pino", precio: 2690, categorias: ["para-el-camino"] },
        { plato: "Lasaña Boloñesa", precio: 5990, categorias: ["contundente"] }
      ]
    },

    {
      id: "achoclonados",
      nombre: "Achoclonados",
      ubicacion: "dentro",
      zona: "Patio de Ingeniería",
      ubicacionExacta: "Patio de Ingeniería, frente a la Virgen",
      tipoComida: "Sándwiches y empanadas",
      tags: ["Económico"],
      horario: "8:00 a 19:00",
      comoComprar: "",
      menu: [
        { plato: "Sándwich", precio: 3000, categorias: ["para-el-camino"] },
        { plato: "Empanada", precio: null, categorias: ["para-el-camino"] },
        { plato: "Choclo con mayonesa", precio: 3590, categorias: ["para-el-camino"] }
      ]
    },

    {
      id: "little-caesars",
      nombre: "Little Caesars",
      ubicacion: "fuera",
      zona: "Av. Vicuña Mackenna 4927",
      ubicacionExacta: "Av. Vicuña Mackenna 4927, 1er piso (junto a DUOC UC)",
      tipoComida: "Pizza",
      tags: ["Económico"],
      horario: "Lun a jue y dom 11:00 a 22:00 · Vie y sáb 11:00 a 23:00",
      comoComprar: "",
      coordenadas: [-33.5005338, -70.6159918],
      menu: [
        { plato: "Pizza queso", precio: 5500, categorias: ["contundente", "antojo"] },
        { plato: "Pizza pepperoni", precio: 5500, categorias: ["contundente", "antojo"] },
        { plato: "Pizza italian 3 cheese", precio: 6500, categorias: ["contundente", "antojo"] }
      ]
    },

    {
      id: "salida-campus",
      nombre: "Locales a la salida del campus",
      ubicacion: "fuera",
      zona: "Salida de la universidad",
      ubicacionExacta: "Salida de la universidad (varios locales)",
      tipoComida: "Almuerzos varios",
      tags: ["Económico", "Calidad irregular"],
      horario: "11:00 a 22:00",
      comoComprar: "",
      menu: [
        { plato: "Sopaipillas", precio: 1000, categorias: ["para-el-camino"] }
      ]
    },

    {
      id: "rock-n-rolla",
      nombre: "Rock n Rolla",
      ubicacion: "dentro",
      zona: "Hall Central",
      ubicacionExacta: "Hall Central, 2º piso",
      tipoComida: "Casino: menú del día",
      tags: [],
      horario: "8:30 a 18:00",
      comoComprar: "",
      menu: [
        { plato: "Menú del casino", precio: 6000, categorias: ["contundente"] }
      ]
    },

    {
      id: "caprioli",
      nombre: "Caprioli",
      ubicacion: "dentro",
      zona: "Construcción Civil y Ciencias Sociales",
      ubicacionExacta: "Dos locales: detrás del edificio de aulas de Construcción Civil y detrás de Ciencias Sociales",
      tipoComida: "",
      tags: [],
      horario: "8:30 a 16:00",
      comoComprar: "",
      menu: []
    },

    {
      id: "lounge-patio",
      nombre: "Lounge Patio (Casino Pérgola)",
      ubicacion: "dentro",
      zona: "Matemáticas / Deportes UC",
      ubicacionExacta: "Entre Matemáticas y Deportes UC",
      tipoComida: "Casino: menú del día",
      tags: [],
      horario: "12:00 a 14:00",
      comoComprar: "",
      menu: [
        { plato: "Menú del casino", precio: 6000, categorias: ["contundente"] }
      ]
    },

    {
      id: "bon-apetit",
      nombre: "Bon Apetit",
      ubicacion: "dentro",
      zona: "Facultad de Odontología",
      ubicacionExacta: "Patio de la Facultad de Odontología",
      tipoComida: "",
      tags: [],
      horario: "8:30 a 16:00",
      comoComprar: "",
      menu: []
    },

    {
      id: "el-rincon",
      nombre: "El Rincón",
      ubicacion: "dentro",
      zona: "Ingeniería Comercial y Humanidades",
      ubicacionExacta: "Casinos en Ingeniería Comercial y en Humanidades",
      tipoComida: "Casino: menú del día",
      tags: [],
      horario: "8:30 a 16:00",
      comoComprar: "",
      menu: [
        { plato: "Menú del casino", precio: 6000, categorias: ["contundente"] }
      ]
    },

    {
      id: "paradiso",
      nombre: "Paradiso",
      ubicacion: "dentro",
      zona: "Facultad de Agronomía",
      ubicacionExacta: "Detrás de la Facultad de Agronomía",
      tipoComida: "Casino: menú del día y hot dogs",
      tags: [],
      horario: "8:30 a 18:00",
      comoComprar: "",
      menu: [
        { plato: "Menú del casino", precio: 6000, categorias: ["contundente"] },
        { plato: "Hot dog", precio: 3000, categorias: ["antojo"] }
      ]
    },

    {
      id: "fres-and-co",
      nombre: "Fres & Co",
      ubicacion: "dentro",
      zona: "Centro de Innovación",
      ubicacionExacta: "Centro de Innovación, 1er piso (primer edificio a la izquierda desde la entrada principal)",
      tipoComida: "",
      tags: [],
      horario: "8:00 a 18:00",
      comoComprar: "",
      menu: []
    },

    {
      id: "subway",
      nombre: "Subway",
      ubicacion: "dentro",
      zona: "Aulas Pataguas",
      ubicacionExacta: "Bajo las Aulas Pataguas, 1er piso",
      tipoComida: "Sándwiches",
      tags: [],
      horario: "8:00 a 18:00",
      comoComprar: "",
      menu: []
    },

    {
      id: "roof-burger",
      nombre: "Roof Burger",
      ubicacion: "fuera",
      zona: "Av. Vicuña Mackenna 4927",
      ubicacionExacta: "Av. Vicuña Mackenna 4927 (junto a DUOC UC)",
      tipoComida: "Hamburguesas",
      tags: [],
      horario: "11:00 a 23:00",
      comoComprar: "",
      menu: [
        { plato: "Basic Burger + papas", precio: 8990, categorias: ["contundente", "antojo"] },
        { plato: "Classic Burger + papas", precio: 10990, categorias: ["contundente", "antojo"] },
        { plato: "BBQ Burger + papas", precio: 12990, categorias: ["contundente", "antojo"] }
      ]
    },

    {
      id: "buffalo-waffles",
      nombre: "Buffalo Waffles",
      ubicacion: "fuera",
      zona: "Av. Vicuña Mackenna 4927",
      ubicacionExacta: "Av. Vicuña Mackenna 4927, local 1A, piso -1 (junto a DUOC UC)",
      tipoComida: "Waffles",
      tags: [],
      horario: "10:00 a 20:00",
      comoComprar: "",
      menu: [
        { plato: "Waffle salado Cheddar", precio: 5150, categorias: ["antojo", "para-el-camino"] },
        { plato: "Waffle salado Old Turkey", precio: 5150, categorias: ["antojo", "para-el-camino"] },
        { plato: "Waffle dulce Cheesecake", precio: 5150, categorias: ["antojo"] },
        { plato: "Galleta Split Junior", precio: 2400, categorias: ["antojo", "para-el-camino"] }
      ]
    },

    {
      id: "copper",
      nombre: "Copper",
      ubicacion: "dentro",
      zona: "Complejo Andrónico Luksic",
      ubicacionExacta: "Complejo Andrónico Luksic, nivel -1",
      tipoComida: "Cafetería y restaurante",
      tags: [],
      horario: "Cafetería: lun a jue 8:30 a 18:30, vie 8:30 a 18:00 · Restaurante: lun a vie 12:00 a 16:00",
      comoComprar: "",
      menu: []
    },

    {
      id: "piatto-pergola",
      nombre: "Piatto (Edificio Pérgola)",
      ubicacion: "dentro",
      zona: "Edificio Pérgola",
      ubicacionExacta: "Edificio Pérgola",
      tipoComida: "Casino: menú del día",
      tags: [],
      horario: "12:00 a 14:00",
      comoComprar: "",
      menu: [
        { plato: "Menú del casino", precio: 6000, categorias: ["contundente"] }
      ]
    },

    {
      id: "cafeton",
      nombre: "Cafetón",
      ubicacion: "dentro",
      zona: "Hall Universitario",
      ubicacionExacta: "Hall Universitario, 1er piso",
      tipoComida: "",
      tags: [],
      horario: "8:30 a 18:00",
      comoComprar: "",
      menu: []
    },

    {
      id: "meson-uc",
      nombre: "Mesón UC",
      ubicacion: "dentro",
      zona: "Hall Universitario",
      ubicacionExacta: "Hall Universitario, 1er piso",
      tipoComida: "Casino: menú del día",
      tags: [],
      horario: "8:30 a 18:00",
      comoComprar: "",
      menu: [
        { plato: "Menú del casino", precio: 6000, categorias: ["contundente"] }
      ]
    }
  ]
};
