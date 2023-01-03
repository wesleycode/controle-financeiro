import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import React, {JSXElementConstructor, ReactElement} from "react";
import {Button, ComponentWithAs} from "@chakra-ui/react";
import {IconProps} from "@chakra-ui/icons";

type ButtonProps = {
    sideIcon: 'LEFT' | 'RIGHT'
    onClick: () => void,
    icon: ReactElement | undefined,
}

export function IconButton({onClick, icon, sideIcon}: ButtonProps) {

    function RightButton () {
        return (
            <Button
                rightIcon={icon}
                colorScheme='blue'
                variant='solid'
                onClick={onClick}>
            </Button>
        );
    }

    function LeftButton() {
        return (
            <Button
                leftIcon={icon}
                colorScheme='blue'
                variant='solid'
                onClick={onClick}>
            </Button>
        );
    }

    return sideIcon === 'LEFT' ? LeftButton() : RightButton();
}