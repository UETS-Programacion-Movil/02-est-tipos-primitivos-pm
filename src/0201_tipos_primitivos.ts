/**
 * ============================================================================
 * RETO 0201: Tipos Primitivos, Inferencia y Arrays en TypeScript
 * Modulo: Programacion Movil - 3° Bachillerato Tecnico (UETS)
 * Semana 02 WWRR piloto (0201 tipos primitivos)
 * ============================================================================
 *
 * CONTEXTO / MISION:
 * El sistema web anterior de la UETS sumaba calificaciones en JavaScript vanilla
 * sin tipos ("10" + "8" = "108"), produciendo errores graves en los promedios.
 * Tu mision es declarar tus variables personales con tipos explicitos, formatear
 * tus datos e implementar el calculo de promedios con tipado estricto.
 *
 * INSTRUCCIONES:
 * 1. Lee atentamente cada bloque marcado con `// TODO:`.
 * 2. Escribe o completa el codigo TypeScript segun las especificaciones.
 * 3. Ejecuta en tu terminal: `pnpm run start:0201` para verificar los tests.
 */

// ============================================================================
// PASO 1: Tipado de Variables Personales e Impresion de Resumen
// ============================================================================
// TODO: Asigna valores validos a las variables con sus tipos explicitos requeridos:
// - `nombreEstudiante` (string): Debe tener al menos 1 caracter.
// - `edadEstudiante` (number): Debe ser un numero mayor a 0.
// - `promedioObjetivo` (number): Debe ser un numero decimal (ej. 9.85).
// - `estaMatriculado` (boolean): Debe ser true.

export const nombreEstudiante: string = "";       // TODO: Escribe tu nombre aqui
export const edadEstudiante: number = 0;          // TODO: Escribe tu edad aqui
export const promedioObjetivo: number = 0;        // TODO: Escribe tu promedio objetivo
export let estaMatriculado: boolean = false;    // TODO: Cambia a true

/**
 * TODO: Implementa la funcion `obtenerResumenPersonal` usando Template Strings (${...}).
 * Debe retornar una cadena con este formato exacto:
 * `👤 Estudiante: NOMBRE | 🎂 Edad: EDAD años | 🎯 Meta: PROMEDIO/10 | 📋 Estado: MATRICULADO` (o NO_MATRICULADO si es false)
 */
export function obtenerResumenPersonal(): string {
  // TODO: Escribe tu logica aqui y reemplaza el return "":
  return "";
}

// ============================================================================
// PASO 2: Funcion para Calcular el Promedio
// ============================================================================
/**
 * TODO: Implementa la funcion `calcularPromedio`.
 * Debe:
 * 1. Recibir `notas`: un arreglo inmutable de numeros (`readonly number[]`).
 * 2. Si el arreglo esta vacio, retornar `0`.
 * 3. Sumar todas las notas y dividir para la cantidad de elementos (`notas.length`).
 * 4. Retornar el resultado como numero redondeado a 2 decimales.
 *    (Pista: usa Number((suma / notas.length).toFixed(2)))
 */
export function calcularPromedio(notas: readonly number[]): number {
  // TODO: Escribe tu logica aqui y reemplaza el return 0:
  return 0;
}

// ============================================================================
// PASO 3: Formateador de Ficha Tecnica
// ============================================================================
/**
 * TODO: Implementa la funcion `formatearFichaEstudiante`.
 * Parametros requeridos:
 *  - nombre (string)
 *  - edad (number)
 *  - paralelo ("E1" | "E2") -> Literal Type
 *  - activo (boolean)
 *
 * Formato de salida requerido:
 *  `[FICHA UETS] NOMBRE_EN_MAYUSCULAS (XX años) - Paralelo: E1 - Estado: MATRICULADO` (o RETIRADO si activo es false)
 */
export function formatearFichaEstudiante(
  nombre: string,
  edad: number,
  paralelo: "E1" | "E2",
  activo: boolean
): string {
  // TODO: Escribe tu logica aqui y reemplaza el return "":
  return "";
}
