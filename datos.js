/*
 * DATOS DE "¿DÓNDE ALMUERZO HOY?"
 * ------------------------------------------------------------------
 * Fuentes: entrevistas P1–P5 de la Entrega 1 (oct. 2026), guía de
 * servicios de alimentación del campus San Joaquín (2020) y
 * observación del grupo. Los precios son aproximados.
 *
 * VALORES PERMITIDOS (escríbelos exactamente así):
 *   ubicacion   -> "dentro"  (en el campus)   o   "fuera"  (fuera del campus)
 *   categorias  -> "liviano", "contundente", "para-el-camino", "saludable",
 *                  "comida-casera", "antojo"
 *                  (un plato puede tener una, varias o ninguna) (se pueden agregar más categorías adelante pero hay que modificar el código)
 *   precio      -> número entero en pesos, SIN puntos ni signo $
 *                  (ej: 3500, no "$3.500"), o null si está por confirmar
 *
 * Un texto vacío ("") o un precio null se muestra en la página con la
 * etiqueta "por confirmar".
 */

const DATOS = {
  // Fecha en que revisaste los datos por última vez (formato AAAA-MM-DD).
  // Se muestra arriba en "Ver locales" como "Última fecha de actualización".
  ultimaActualizacion: "2026-10-31",

  locales: [
    {
      // Identificador único, sin espacios ni tildes. Se usa en la dirección
      // del pop-up: #local-fork
      id: "fork",

      nombre: "Fork",

      // "dentro" o "fuera": decide en qué sección aparece la tarjeta.
      ubicacion: "dentro",

      // Texto corto para la tarjeta (ej: el edificio o la zona).
      zona: "Hall Central",

      // Texto detallado para el pop-up ("Dónde").
      ubicacionExacta: "Hall Central, 1er piso",

      tipoComida: "Platos preparados y ensaladas",

      // Etiquetas libres que se ven en la tarjeta (ej: precio aproximado).
      tags: [],

      horario: "8:00 a 19:00 (según guía UC 2020, por confirmar)",

      comoComprar: "Saca tu plato del refrigerador y paga en la caja de autoservicio.",

      // Platos del local. Cada plato aparece en "Elige dónde almorzar"
      // y en el menú del pop-up con su precio (null = por confirmar).
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
      tipoComida: "Burritos, tacos, fajitas, hamburguesas y casino",
      tags: [],
      horario: "Burga: 11:30 a 16:00 (según guía UC 2020). Resto del casino por confirmar.",
      comoComprar: "Elige y paga en la caja, y luego ve al mesón donde preparan tu plato frente a ti. Hay mucho ruido: repite tu pedido y revísalo antes de que lo terminen.",
      menu: [
        { plato: "Burrito", precio: 6000, categorias: ["contundente", "para-el-camino", "antojo"] },
        { plato: "Hamburguesas (Burga)", precio: 4990, categorias: ["antojo"] },
        { plato: "Gohan", precio: null, categorias: [] },
        { plato: "Menú del casino", precio: null, categorias: [] }
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
      horario: "",
      comoComprar: "Revisa el menú del día en el papel que está en la caja.",
      menu: [
        { plato: "Menú del día", precio: 3500, categorias: ["comida-casera"] },
        { plato: "Ensalada César", precio: "", categorias: ["liviano", "saludable"] }
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
      horario: "",
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
      zona: "",
      ubicacionExacta: "",
      tipoComida: "Sándwiches y empanadas",
      tags: ["Económico"],
      horario: "",
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
      horario: "",
      comoComprar: "",
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
      ubicacionExacta: "Salida de la universidad (varios locales, por confirmar cuáles)",
      tipoComida: "Almuerzos varios",
      tags: ["Económico", "Calidad irregular"],
      horario: "",
      comoComprar: "",
      menu: [
        { plato: "Sopaipillas", precio: 1000, categorias: ["para-el-camino"] }
      ]
    },

    // Locales que solo aparecen en la guía UC (2020): falta confirmar si siguen abiertos.
    {
      id: "rock-n-rolla",
      nombre: "Rock n Rolla",
      ubicacion: "dentro",
      zona: "Hall Central",
      ubicacionExacta: "Hall Central, 2º piso",
      tipoComida: "",
      tags: [],
      horario: "8:30 a 18:00 (según guía UC 2020, por confirmar)",
      comoComprar: "",
      menu: []
    },

    {
      id: "caprioli",
      nombre: "Caprioli",
      ubicacion: "dentro",
      zona: "Construcción Civil y Ciencias Sociales",
      ubicacionExacta: "Dos locales: detrás del edificio de aulas de Construcción Civil y detrás de Ciencias Sociales",
      tipoComida: "",
      tags: [],
      horario: "8:30 a 16:00 (según guía UC 2020, por confirmar)",
      comoComprar: "",
      menu: []
    },

    {
      id: "lounge-patio",
      nombre: "Lounge Patio (Casino Pérgola)",
      ubicacion: "dentro",
      zona: "Matemáticas / Deportes UC",
      ubicacionExacta: "Entre Matemáticas y Deportes UC",
      tipoComida: "",
      tags: [],
      horario: "12:00 a 14:00 (según guía UC 2020, por confirmar)",
      comoComprar: "",
      menu: []
    },

    {
      id: "bon-apetit",
      nombre: "Bon Apetit",
      ubicacion: "dentro",
      zona: "Facultad de Odontología",
      ubicacionExacta: "Patio de la Facultad de Odontología",
      tipoComida: "",
      tags: [],
      horario: "8:30 a 16:00 (según guía UC 2020, por confirmar)",
      comoComprar: "",
      menu: []
    },

    {
      id: "el-rincon",
      nombre: "El Rincón",
      ubicacion: "dentro",
      zona: "Ingeniería Comercial y Humanidades",
      ubicacionExacta: "Casinos en Ingeniería Comercial y en Humanidades",
      tipoComida: "",
      tags: [],
      horario: "8:30 a 16:00 (según guía UC 2020, por confirmar)",
      comoComprar: "",
      menu: []
    },

    {
      id: "paradiso",
      nombre: "Paradiso",
      ubicacion: "dentro",
      zona: "Facultad de Agronomía",
      ubicacionExacta: "Detrás de la Facultad de Agronomía",
      tipoComida: "",
      tags: [],
      horario: "8:30 a 18:00 (según guía UC 2020, por confirmar)",
      comoComprar: "",
      menu: [
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
      horario: "8:00 a 18:00 (según guía UC 2020, por confirmar)",
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
      horario: "",
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
      horario: "",
      comoComprar: "",
      menu: []
    },

    {
      id: "buffalo-waffles",
      nombre: "Buffalo Waffles",
      ubicacion: "fuera",
      zona: "Av. Vicuña Mackenna 4927",
      ubicacionExacta: "Av. Vicuña Mackenna 4927, piso -1 (junto a DUOC UC)",
      tipoComida: "Waffles",
      tags: [],
      horario: "",
      comoComprar: "",
      menu: []
    }
  ]
};
