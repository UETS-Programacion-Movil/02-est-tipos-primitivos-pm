/**
 * ============================================================================
 * RETO 0202: Union Types, Type Narrowing & Discriminated Unions para UI Movil
 * Modulo: Programacion Movil - 3° Bachillerato Tecnico (UETS)
 * Semana 02 WWRR piloto (0202 unions + narrowing)
 * ============================================================================
 *
 * CONTEXTO / MISION:
 * En React Native, una pantalla conectada a una API puede estar: cargando con
 * un spinner, mostrando los datos obtenidos con exito, o mostrando un mensaje
 * de error si se cae la red.
 * Tu mision es modelar estos 3 estados con un 'Discriminated Union' para que
 * la app jamas explote por variables indefinidas.
 *
 * INSTRUCCIONES:
 * 1. Implementa `formatearIdentificador` usando estrechamiento de tipos (`typeof`).
 * 2. Implementa `renderizarEstadoUI` con un `switch(estado.status)`.
 * 3. Ejecuta en tu terminal: `pnpm run start:0202` para verificar los tests.
 */

// ============================================================================
// PASO 1: Type Narrowing Basico con typeof
// ============================================================================
/**
 * TODO: Implementa la funcion `formatearIdentificador`.
 * - Recibe un `id` que puede ser `string` o `number`.
 * - Si es `string`, retornar: `ID-ALFANUMERICO-` seguido del texto en MAYUSCULAS.
 * - Si es `number`, retornar: `ID-NUMERICO-#` seguido del numero relleno con ceros a 6 digitos (ej: 45 -> "000045").
 *   (Pista: usa id.toFixed(0).padStart(6, "0"))
 */
export function formatearIdentificador(id: string | number): string {
  // TODO: Escribe tu logica con if (typeof id === "string") y reemplaza el return "":
  return "";
}

// ============================================================================
// PASO 2: Modelado de Estados con Discriminated Unions
// ============================================================================
export interface EstadoCargando {
  status: "LOADING";
  porcentaje: number;
}

export interface EstadoExito<T> {
  status: "SUCCESS";
  datos: T;
  hora: string;
}

export interface EstadoError {
  status: "ERROR";
  codigo: number;
  mensaje: string;
}

// Union discriminada:
export type EstadoPantalla<T> =
  | EstadoCargando
  | EstadoExito<T>
  | EstadoError;

/**
 * TODO: Implementa `renderizarEstadoUI`.
 * Utiliza un `switch (estado.status)`:
 * - Si status === "LOADING": Retornar `⏳ Cargando datos (${estado.porcentaje}%)...`
 * - Si status === "SUCCESS": Retornar `🎉 Datos cargados con éxito a las ${estado.hora}`
 * - Si status === "ERROR": Retornar `❌ Error ${estado.codigo}: ${estado.mensaje}`
 */
export function renderizarEstadoUI<T>(estado: EstadoPantalla<T>): string {
  // TODO: Escribe tu switch(estado.status) aqui y reemplaza el return "":
  return "";
}
