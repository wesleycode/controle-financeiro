import {ItemType} from "../../types/ItemType";
import {TableItem} from "../TableItem/TableItem";
import {MainCard} from "../MainCard/MainCard";
import React from "react";
import {Table, TableContainer, Thead, Tbody, Tr, Th} from "@chakra-ui/react";

const thStyle: React.CSSProperties = {
    padding: '10px 0',
    textAlign: 'left',
}

export function CustomTable({list}: { list: ItemType[] }) {
    return (
        <MainCard>
            <TableContainer
                width='100%'
            >
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th style={thStyle}>Data</Th>
                            <Th style={thStyle}>Categoria</Th>
                            <Th style={thStyle}>Título</Th>
                            <Th style={thStyle}>Valor</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            list.map((item, index) => (
                                <TableItem key={index} item={item}/>
                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </MainCard>
    );
}