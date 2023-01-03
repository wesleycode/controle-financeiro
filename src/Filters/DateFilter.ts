import { ItemType } from "../types/ItemType";

export function filtrarListaPorMes(list: ItemType[], currentDate: Date): ItemType[] {
    let novaLista: ItemType[] = [];
    for (let item in list) {
        if (list[item].data.getFullYear() === currentDate.getFullYear() && list[item].data.getMonth() === currentDate.getMonth()) {
            novaLista.push(list[item]);
        }
    }
    return novaLista;
}