/*
 * DATOS DE "¿DÓNDE ALMUERZO HOY?"
 * ------------------------------------------------------------------
 * Este es el único archivo que hay que editar para agregar locales.
 * Para agregar uno nuevo: copia un bloque { ... } completo dentro de
 * "locales", pégalo después del último (separado por una coma) y
 * cambia sus valores.
 *
 * Fuentes: entrevistas P1–P5 de la Entrega 1 (oct. 2026), guía de
 * servicios de alimentación del campus San Joaquín (2020) y
 * observación del grupo. Los precios son aproximados.
 *
 * VALORES PERMITIDOS (escríbelos exactamente así):
 *   ubicacion   -> "dentro"  (en el campus)   o   "fuera"  (fuera del campus)
 *   categorias  -> "liviano", "contundente", "para-el-camino", "saludable"
 *                  (un plato puede tener una, varias o ninguna)
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
      tags: ["~$4.500", "Fila hacia las 13:30"],

      horario: "8:00 a 19:00 (según guía UC 2020, por confirmar)",

      comoComprar: "Saca tu plato del refrigerador, haz la fila de autoservicio y paga. Cerca de las 12:00 está tranquilo; hacia las 13:30 hay fila.",

      // Platos del local. Cada plato aparece en "Elige dónde almorzar"
      // y en el menú del pop-up con su precio (null = por confirmar).
      menu: [
        { plato: "Ensalada de pollo con orzo", precio: 4500, categorias: ["liviano", "saludable", "para-el-camino"] },
        { plato: "Gnocchi a la vodka", precio: null, categorias: ["contundente"] }
      ]
    },

    {
      id: "casino-k",
      nombre: "Casino Edificio K",
      ubicacion: "dentro",
      zona: "Edificio K",
      ubicacionExacta: "Edificio K (Ciencia y Tecnología, Ingeniería), 1er piso",
      tipoComida: "Burritos, tacos, fajitas, hamburguesas y casino",
      tags: ["~$6.000", "Se llena a la hora de almuerzo"],
      horario: "Burga: 11:30 a 16:00 (según guía UC 2020). Resto del casino por confirmar.",
      comoComprar: "Haz la fila común para todos los productos, elige y paga en la caja, y ve al mesón donde preparan tu plato frente a ti. Hay mucho ruido: repite tu pedido y revísalo antes de que lo terminen.",
      menu: [
        { plato: "Burrito", precio: null, categorias: ["contundente", "para-el-camino"] },
        { plato: "Fajitas de pollo BBQ con verduras", precio: null, categorias: ["liviano", "saludable"] },
        { plato: "Tacos", precio: 6000, categorias: [] },
        { plato: "Hamburguesas (Burga)", precio: null, categorias: [] },
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
        { plato: "Menú del día", precio: null, categorias: [] }
      ]
    },

    {
      id: "castano",
      nombre: "Castaño",
      ubicacion: "dentro",
      zona: "Complejo Andrónico Luksic",
      ubicacionExacta: "Patio fuera del Complejo Andrónico Luksic",
      tipoComida: "Empanadas",
      tags: ["Muy lleno a la hora de almuerzo"],
      horario: "",
      comoComprar: "Hay tres filas: una para pedir (ahí te calientan la empanada), otra para pagar y otra para retirar. El local es pequeño y se llena rápido.",
      menu: [
        { plato: "Empanada", precio: null, categorias: ["para-el-camino"] }
      ]
    },

    {
      id: "achoclonados",
      nombre: "Achoclonados",
      ubicacion: "dentro",
      zona: "",
      ubicacionExacta: "",
      tipoComida: "Sándwiches y empanadas",
      tags: ["~$3.000", "Económico"],
      horario: "",
      comoComprar: "",
      menu: [
        { plato: "Sándwich", precio: 3000, categorias: ["para-el-camino"] },
        { plato: "Empanada", precio: null, categorias: ["para-el-camino"] }
      ]
    },

    {
      id: "cafeteria-ingenieria",
      nombre: "Cafetería de Ingeniería",
      ubicacion: "dentro",
      zona: "Facultad de Ingeniería",
      ubicacionExacta: "Facultad de Ingeniería",
      tipoComida: "Almuerzo casero",
      tags: ["Económico"],
      horario: "",
      comoComprar: "",
      menu: [
        { plato: "Almuerzo casero del día", precio: null, categorias: [] }
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
        { plato: "Pizza para compartir", precio: null, categorias: ["contundente"] }
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
        { plato: "Almuerzos varios", precio: null, categorias: [] }
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
      tags: ["Solo en guía UC 2020"],
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
      tags: ["Solo en guía UC 2020"],
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
      tags: ["Solo en guía UC 2020"],
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
      tags: ["Solo en guía UC 2020"],
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
      tags: ["Solo en guía UC 2020"],
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
      tags: ["Solo en guía UC 2020"],
      horario: "8:30 a 18:00 (según guía UC 2020, por confirmar)",
      comoComprar: "",
      menu: []
    },

    {
      id: "fres-and-co",
      nombre: "Fres & Co",
      ubicacion: "dentro",
      zona: "Centro de Innovación",
      ubicacionExacta: "Centro de Innovación, 1er piso (primer edificio a la izquierda desde la entrada principal)",
      tipoComida: "",
      tags: ["Solo en guía UC 2020"],
      horario: "8:00 a 18:00 (según guía UC 2020, por confirmar)",
      comoComprar: "",
      menu: []
    },

    {
      id: "subway",
      nombre: "Subway",
      ubicacion: "fuera",
      zona: "Av. Vicuña Mackenna 4927",
      ubicacionExacta: "Av. Vicuña Mackenna 4927 (junto a DUOC UC)",
      tipoComida: "Sándwiches",
      tags: ["Solo en guía UC 2020"],
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
      tipoComida: "",
      tags: ["Solo en guía UC 2020"],
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
      tipoComida: "",
      tags: ["Solo en guía UC 2020"],
      horario: "",
      comoComprar: "",
      menu: []
    }
  ]
};
