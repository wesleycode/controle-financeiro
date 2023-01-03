import { useEffect, useState } from "react";
import { items } from "../data/Items";
import { ItemType } from "../types/ItemType";
import { CustomTable } from "../components/CustomTable/CustomTable";
import { InfoArea } from "../components/InfoArea/InfoArea";
import { filtrarListaPorMes } from "../filters/DateFilter";
import { getDataAtual } from "../utils/DateUtil";
import { APPLICATION_NAME } from "../constants/ApplicationConstants";
import { categories } from '../data/Categories';
import { InsertArea } from "../components/InsertArea/InsertArea";
import { Spacer } from "../components/Spacer/Spacer";
import { Box, Heading } from "@chakra-ui/react";

export function HomePage() {

    const [listItems, setListItems] = useState<ItemType[]>(items);
    const [filteredItems, setFilteredItems] = useState<ItemType[]>([]);
    const [currentDate, setCurrentDate] = useState(getDataAtual());
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);

    function handleMonthChange(newDate: Date) {
        setCurrentDate(newDate)
    }

    function handleAddItem(item: ItemType) {
        setListItems((oldListItems) => [...oldListItems, item]);
    }

    useEffect(() => {
        setFilteredItems(filtrarListaPorMes(listItems, currentDate));
    }, [listItems, currentDate]);

    useEffect(() => {

        let incomeCount: number = 0;
        let expenseCount: number = 0;

        for (let item of filteredItems) {
            if (categories[item.categoriaIndex].despesa) {
                expenseCount += item.valor;
            } else {
                incomeCount += item.valor;
            }
        }

        setIncome(incomeCount);
        setExpense(expenseCount);

    }, [filteredItems]);

    return (
        <Box>
            <Box
                backgroundColor='#1E80C1'
                height='150px'
                textAlign='center'>
                <Heading
                    margin='0px'
                    color='#FFF'
                    fontSize='25px'
                    paddingTop='30px'
                > {APPLICATION_NAME}
                </Heading>
            </Box>
            <Box
                margin='auto'
                maxWidth='980px'
                marginBottom='50px'>
                <InfoArea
                    currentDate={currentDate}
                    onMonthChange={handleMonthChange}
                    income={income}
                    expense={expense}
                />

                <Spacer height={20} />

                <CustomTable list={filteredItems} />

                <Spacer height={20} />

                <InsertArea listCategoria={categories} addNewItem={handleAddItem}/>

            </Box>
        </Box>
    );
}