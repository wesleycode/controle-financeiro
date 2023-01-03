import {Box} from "@chakra-ui/react";

type Props = {
    height?: number,
    width?: number,
}

export function Spacer({ height = 0, width = 0 }: Props) {
    return (
        // <Box
        //     height={height}
        //     width={width}
        // />
        <div style={{
            height: height,
            width: width,
        }}/>
    );
}