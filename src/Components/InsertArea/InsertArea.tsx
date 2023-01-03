import {MainCard} from '../MainCard/MainCard';
import {Spacer} from '../Spacer/Spacer';
import React, {ChangeEvent, FormEvent, FormEventHandler, useState} from 'react';
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
    NumberDecrementStepper,
    Button,
    Badge,
    Flex,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton,
} from '@chakra-ui/react';
import {CategoryType} from "../../types/CategoryType";
import {converterStringEmDate} from "../../utils/DateUtil";
import {ItemType} from '../../types/ItemType';

type Props = {
    listCategoria: CategoryType[],
    addNewItem: (item: ItemType) => void,
}

export function InsertArea({listCategoria, addNewItem}: Props) {

    const itemModelDefault: ItemType = {
        id: 0,
        titulo: '',
        data: new Date(),
        valor: 0,
        categoriaIndex: 0,
    }

    const [itemModel, setItemModel] = useState<ItemType>(itemModelDefault);
    const [display, setDisplay] = useState<string>('none');

    function submitForm(formEvent: FormEvent<HTMLFormElement>) {
        addNewItem(itemModel);
        setDisplay('flex');
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

                <Alert status='success' display={display} justifyContent='space-between'>
                    <Flex>
                        <AlertIcon/>
                        <AlertDescription>Movimentação Adicionada com Sucesso!</AlertDescription>
                    </Flex>
                    <CloseButton
                        onClick={() => {
                            setDisplay('none')
                        }}
                    />
                </Alert>

                <Spacer height={30}/>

                <form onSubmit={submitForm}>
                    <FormControl isRequired>

                        <FormLabel>Título</FormLabel>
                        <Input
                            name='input-titulo'
                            type='text'
                            variant='filled'
                            // onChange={(text) => {
                            //     setTitulo(text.target.value);
                            // }}
                            onChange={(e) => setItemModel({...itemModel, titulo: e.target.value})}
                            placeholder='Entre com o texto que descreve a ocorrência'
                        />

                        <Spacer
                            height={20}
                        />

                        <FormLabel>Data</FormLabel>
                        <Input
                            type='date'
                            variant='filled'
                            // onChange={(data) => {
                            //     setData(converterStringEmDate(data.target.value));
                            // }}
                            onChange={(e) => setItemModel({
                                ...itemModel,
                                data: e.target.value === undefined ? new Date() : converterStringEmDate(e.target.value)
                            })}
                        />

                        <Spacer
                            height={20}
                        />

                        <FormLabel>Categoria</FormLabel>
                        <Select
                            id='asdasd'
                            placeholder='Selecione uma categoria'
                            variant='filled'
                            value={itemModel.categoriaIndex}
                            // onChange={(selected) => setCategoriaId(selected.target.value)}
                            onChange={(event) => {
                                setItemModel({...itemModel, categoriaIndex: parseInt(event.target.value)})
                            }}
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
                                // onChange={(valueString) => setValor(parseFloat(valueString))}
                                onChange={(value) => {
                                    setItemModel({...itemModel, valor: parseInt(value)})
                                }}
                                value={isNaN(itemModel.valor) ? 0 : itemModel.valor}
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