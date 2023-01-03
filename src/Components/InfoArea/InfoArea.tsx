import React from 'react';
import {converterMesNumeroParaMesTexto} from '../../utils/DateUtil';
import {InfoItem} from '../InfoItem/InfoItem';
import {IconButton} from "../IconButton/IconButton";
import {Spacer} from "../Spacer/Spacer";
import {MainCard} from "../MainCard/MainCard";
import {Badge, Box, Text} from "@chakra-ui/react";
import {AddIcon, ArrowBackIcon, ArrowForwardIcon, MinusIcon, RepeatIcon} from "@chakra-ui/icons";

type Props = {
    currentDate: Date
    onMonthChange: (newDate: Date) => void,
    income: number,
    expense: number,
}

export function InfoArea({currentDate, onMonthChange, income, expense}: Props) {

    function handleMesAnterior() {
        let newDate = new Date(currentDate);
        newDate.setMonth(currentDate.getMonth() - 1);
        new Date(currentDate).setMonth(currentDate.getMonth() - 1);
        onMonthChange(newDate);
    }

    function handleMesPosterior() {
        let newDate = new Date(currentDate);
        newDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(newDate);
    }

    return (
        <Box
            marginTop='-40px'
        >
            <MainCard>
                <Box
                    display='flex'
                    flexDirection='row'
                    justifyContent='space-around'
                    width='40%'
                    alignItems='center'
                    padding='20px'
                >
                    <IconButton
                        onClick={() => {
                            handleMesAnterior()
                        }}
                        sideIcon='LEFT'
                        icon={<ArrowBackIcon/>}
                    />
                    <Text>{converterMesNumeroParaMesTexto(currentDate)} - {currentDate.getFullYear()}</Text>
                    <IconButton
                        onClick={() => {
                            handleMesPosterior()
                        }}
                        sideIcon='RIGHT'
                        icon={<ArrowForwardIcon/>}
                    />
                </Box>
                <Spacer width={20}/>
                <Badge
                    display='flex'
                    flexDirection='row'
                    width='60%'
                    textAlign='center'
                    justifyContent='space-around'
                    padding='15px'
                    colorScheme='blue'
                    borderRadius='5px'>
                    <InfoItem title='Receitas' value={income} icon={AddIcon}/>
                    <InfoItem title='Despesas' value={expense} icon={MinusIcon}/>
                    <InfoItem title='Balanço' value={income - expense} icon={RepeatIcon}/>
                </Badge>
            </MainCard>
        </Box>
    );
}