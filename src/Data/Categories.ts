import {CategoryType} from "../Types/CategoryType";

export const categories: CategoryType[] = [
    {
        id: 0,
        titulo: 'Comida',
        descricao: 'Alimentacao',
        cor: 'yellow',
        despesa: true,
    },
    {
        id: 1,
        titulo: 'Cartão',
        descricao: 'Cartão de Crédito',
        cor: 'teal',
        despesa: true,
    },
    {
        id: 2,
        titulo: 'Hardware',
        descricao: 'Eletronicos',
        cor: 'purple',
        despesa: true,
    },
    {
        id: 3,
        titulo: 'Salario',
        descricao: 'Pagamento do Mês',
        cor: 'orange',
        despesa: false,
    },
    {
        id: 4,
        titulo: 'Valor Recebido',
        descricao: 'Dinheiro',
        cor: 'teal',
        despesa: false,
    },
]