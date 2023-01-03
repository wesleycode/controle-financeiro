import * as ReactDOM from 'react-dom/client'
import {HomePage} from './Views/Homepage'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ChakraProvider>
        <HomePage/>
    </ChakraProvider>
)
