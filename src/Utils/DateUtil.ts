import {adicionarZeroNoNumero} from "./StringUtil";

export function converterMesNumeroParaMesTexto(data: Date): string {
    let mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return `${mes[data.getMonth()]}`;
}

export function getMesAtual(): number {
    return new Date().getMonth();
}

export function getAnoAtual(): number {
    return new Date().getFullYear();
}

export function getDataAtual(): Date {
    return new Date();
}

export function padronizarData(data: Date): string {
    let text: string = ``;
    text += `${adicionarZeroNoNumero(data.getDate())}`;
    text += `/`;
    text += `${adicionarZeroNoNumero(data.getMonth() + 1)}`;
    text += `/`;
    text += `${data.getFullYear()}`;
    return text;
}

export function converterStringEmDate(date: string): Date {
    const [year, month, day] = date.split('-');
    return new Date(+year, +month - 1, +day);
}