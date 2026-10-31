/*
 * DATOS DE "¿DÓNDE ALMUERZO HOY?"
 * ------------------------------------------------------------------
 * Este es el único archivo que hay que editar para agregar locales.
 * Para agregar uno nuevo: copia un bloque { ... } completo dentro de
 * "locales", pégalo después del último (separado por una coma) y
 * cambia sus valores.
 *
 * Los dos locales de abajo son SOLO DE EJEMPLO: muestran el formato.
 * Reemplázalos por los locales reales.
 *
 * VALORES PERMITIDOS (escríbelos exactamente así):
 *   ubicacion   -> "dentro"  (en el campus)   o   "fuera"  (fuera del campus)
 *   categorias  -> "liviano", "contundente", "para-el-camino"
 *                  (un plato puede tener una, varias o ninguna)
 *   precio      -> número entero en pesos, SIN puntos ni signo $
 *                  (ej: 3500, no "$3.500")
 */

const DATOS = {
  // Fecha en que revisaste los datos por última vez (formato AAAA-MM-DD).
  // Se muestra arriba en "Ver locales" como "Última fecha de actualización".
  ultimaActualizacion: "2026-10-31",

  locales: [
    {
      // Identificador único, sin espacios ni tildes. Se usa en la dirección
      // del pop-up: #local-ejemplo-cafeteria
      id: "ejemplo-cafeteria",

      nombre: "Cafetería de ejemplo",

      // "dentro" o "fuera": decide en qué sección aparece la tarjeta.
      ubicacion: "dentro",

      // Texto corto para la tarjeta (ej: el edificio o la zona).
      zona: "Edificio de ejemplo",

      // Texto detallado para el pop-up ("Dónde").
      ubicacionExacta: "Primer piso del edificio de ejemplo, junto a la entrada principal",

      tipoComida: "Sándwiches y ensaladas",

      // Etiquetas libres que se ven en la tarjeta (ej: precio aproximado).
      tags: ["~$4.000", "Opción vegetariana"],

      horario: "Lunes a viernes, 8:30 a 17:00",

      comoComprar: "Se pide y se paga en la caja. Acepta efectivo y tarjeta.",

      // Platos del local. Cada plato aparece en "Elige dónde almorzar"
      // y en el menú del pop-up con su precio.
      menu: [
        { plato: "Sándwich de ejemplo", precio: 3200, categorias: ["liviano", "para-el-camino"] },
        { plato: "Ensalada de ejemplo", precio: 4500, categorias: ["liviano"] }
      ]
    },

    {
      id: "ejemplo-restaurante",
      nombre: "Restaurante de ejemplo",
      ubicacion: "fuera",
      zona: "Av. de ejemplo",
      ubicacionExacta: "Av. de ejemplo 1234, a dos cuadras de la salida principal",
      tipoComida: "Almuerzo casero",
      tags: ["~$6.000", "Menú del día"],
      horario: "Lunes a sábado, 12:00 a 16:00",
      comoComprar: "Se pide en la mesa y se paga al final.",
      menu: [
        { plato: "Menú del día de ejemplo", precio: 5500, categorias: ["contundente"] },
        { plato: "Plato de fondo de ejemplo", precio: 7000, categorias: ["contundente"] }
      ]
    }
  ]
};
