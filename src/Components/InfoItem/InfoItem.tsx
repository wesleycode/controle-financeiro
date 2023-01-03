import {Spacer} from "../Spacer/Spacer";
import {Box, ComponentWithAs, Tag, TagLabel, TagLeftIcon, Text} from "@chakra-ui/react";
import {AddIcon, IconProps} from "@chakra-ui/icons";

type Props = {
    title: string,
    value: number,
    icon: ComponentWithAs<"svg", IconProps> | undefined
}

export function InfoItem({title, value, icon}: Props) {
    return (
        <Box
            display='flex'
            flexDirection='column'
        >
            <Tag size='md' key='md' variant='subtle' colorScheme='blue'>
                <TagLeftIcon boxSize='12px' as={icon} />
                <TagLabel>{title}</TagLabel>
            </Tag>
            <Spacer
                height={10}
            />
            <Text color='white'
                  fontWeight='bold'>R$ {value.toFixed(2)}
            </Text>
        </Box>
    );
}