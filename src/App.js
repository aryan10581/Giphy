import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import Home from './Assets/Home';
import "./Assets/General.css"
import CopyRight from './Assets/CopyRight';
function App() {
  return (
    <ChakraProvider >
      <Grid w={"99.5vw"} minH={"100vh"}>
        <Home />
        <CopyRight/>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
