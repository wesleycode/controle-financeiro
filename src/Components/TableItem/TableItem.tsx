import {ItemType} from "../../Types/ItemType";
import {categories} from "../../Data/Categories";
import {padronizarData} from "../../Utils/DateUtil";
import {Badge, Box, Td, Text, Tr} from "@chakra-ui/react";

type Props = {
    item: ItemType,
}

export function TableItem({item}: Props) {
    return (
        <Tr>
            <Td padding='10px 0'>{padronizarData(item.data)}</Td>
            <Td padding='10px 0'>
                <Badge
                    colorScheme={categories[item.categoriaIndex].cor}>
                    {categories[item.categoriaIndex].titulo}
                </Badge>
            </Td>
            <Td padding='10px 0'
                maxWidth='150px'
                paddingRight='150px'>
                <Text
                    isTruncated>
                    {item.titulo}
                </Text>
            </Td>
            <Td padding='10px 0'>
                <Badge
                    colorScheme={categories[item.categoriaIndex].despesa ? 'red' : 'green'}>
                    R$ {item.valor}
                </Badge>
            </Td>
        </Tr>
    );
}