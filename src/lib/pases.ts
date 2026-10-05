// Frases que dependen de la cantidad de pases.
// Las usa Pase.astro al armar la página y también el script que
// después carga el nombre y los pases desde el sistema: así no se repiten.

export const NOMBRE_POR_DEFECTO = "Nuestro invitado especial";

export function etiquetaPases(numero: number): string {
    return numero === 1 ? "Pase" : "Pases";
}

export function frasePresenciaPases(numero: number): string {
    if (numero === 1) return "Esperamos contar con tu presencia";
    return "Esperamos contar con su presencia";
}
