import {MainCard} from '../MainCard/MainCard';
import {Spacer} from '../Spacer/Spacer';
import React, {FormEvent, FormEventHandler, useState} from 'react';
import {
    FormControl,
    FormLabel,
    Select,
    Input,
    Box,
    Text,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper, Button, Badge, Flex
} from '@chakra-ui/react';
import {CategoryType} from "../../Types/CategoryType";
import {converterStringEmDate} from "../../Utils/DateUtil";
import { ItemType } from '../../Types/ItemType';

type Props = {
    listCategoria: CategoryType[],
    addNewItem: (item: ItemType) => void,
}

export function InsertArea({listCategoria, addNewItem}: Props) {

    const [titulo, setTitulo] = useState<string>('');
    const [newData, setData] = useState<Date>();
    const [categoriaId, setCategoriaId] = useState<string>('');
    const [valor, setValor] = useState<number>(0);

    function submitForm(formEvent: FormEvent<HTMLFormElement>) {

        const data: ItemType = {
            id: 50,
            categoriaIndex: parseInt(categoriaId),
            data: newData === undefined ? new Date() : newData,
            titulo: titulo,
            valor: valor,
        }

        addNewItem(data);

        alert('Salvo com sucesso!');

        formEvent.preventDefault();

    }

    return (
        <MainCard>
            <Box
                display='flex'
                flexDirection='column'
                width='100%'
                padding='20px'>
                <Box
                    display='flex'
                    flexDirection='row'>
                    <Badge
                        fontWeight='bold'
                        padding='15px'
                        borderRadius='5px'
                        colorScheme='blue'>Adicionando Movimentação</Badge>
                </Box>

                <Spacer height={30}/>

                <form onSubmit={submitForm}>
                    <FormControl isRequired>

                        <FormLabel>Título</FormLabel>
                        <Input
                            type='text'
                            variant='filled'
                            onChange={(text) => {
                                setTitulo(text.target.value);
                            }}
                            placeholder='Entre com o texto que descreve a ocorrência'
                        />

                        <Spacer
                            height={20}
                        />

                        <FormLabel>Data</FormLabel>
                        <Input
                            type='date'
                            variant='filled'
                            onChange={(data) => {
                                setData(converterStringEmDate(data.target.value));
                            }}
                        />

                        <Spacer
                            height={20}
                        />

                        <FormLabel>Categoria</FormLabel>
                        <Select
                            id='asdasd'
                            placeholder='Selecione uma categoria'
                            variant='filled'
                            value={categoriaId}
                            onChange={(selected) => setCategoriaId(selected.target.value)}
                        >
                            {
                                listCategoria.map((item, index) => (
                                    <option key={index} value={item.id}>{item.titulo}</option>
                                ))
                            }
                        </Select>

                        <Spacer
                            height={20}
                        />

                        <FormLabel>Insira o valor</FormLabel>
                        <Flex
                            alignItems='center'
                            gap={2}
                        >
                            <Text>R$</Text>
                            <NumberInput
                                onChange={(valueString) => setValor(parseFloat(valueString))}
                                value={isNaN(valor) ? 0 : valor}
                                min={0}
                                defaultValue={0}
                                precision={2}
                                max={99999.99}
                                step={0.01}
                                width='97%'
                                variant='filled'
                            >
                                <NumberInputField/>
                                <NumberInputStepper>
                                    <NumberIncrementStepper/>
                                    <NumberDecrementStepper/>
                                </NumberInputStepper>
                            </NumberInput>
                        </Flex>

                        <Spacer
                            height={20}
                        />

                        <Box
                            display='flex'
                            flexDirection='row'
                            justifyContent='end'
                        >
                            <Button
                                type='submit'
                                title='Enviar'
                                colorScheme='green'
                                value='Submit'>
                                Salvar
                            </Button>
                        </Box>

                    </FormControl>
                </form>

            </Box>
        </MainCard>
    );
}