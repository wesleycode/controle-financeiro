import React from "react";
import {Card} from "@chakra-ui/react";

type Props = {
    children: React.ReactNode;
}

export function MainCard({children}: Props) {
    return (
        <Card
            display='flex'
            flexDirection='row'
            padding='20px'
            borderRadius='5px'
        >
            {children}
        </Card>
    );
}