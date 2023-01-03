export function adicionarZeroNoNumero(numero: number): string {
    return numero < 10 ? `0${numero}` : numero.toString();
}