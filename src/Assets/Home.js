import { Box, Button, ChakraProvider, Flex, Grid, Image, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import LOGO from "./Img/Logo_BG.png"
import Item from './Item';
import { Spinner } from '@chakra-ui/react'
export default function Home() {

    const [result, setResult] = useState("");
    const [loaded, setloaded] = useState(false)
    const [value, setValue] = useState("Dhoni")
    useEffect(() => {
        const url = "https://api.giphy.com/v1/gifs/search?api_key=IvQbji2wZATJIYV2PmuwM09kEjWLtay1&q=dhoni&limit=200&offset=0&rating=g&lang=en";
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setResult(json);
                setloaded(true)
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);
    const handleChange = (e) => {
        console.log(e.target.value)
        setValue(e.target.value)
    }
    const Search = () => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=IvQbji2wZATJIYV2PmuwM09kEjWLtay1&q=${value}&limit=200&offset=0&rating=g&lang=en`;
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setResult(json);
                setloaded(true)
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }

   

    if (loaded) {

        return (
            <Grid w={"99.5vw"} placeContent={"center"} bg={"#D0E3FF"}>
                <Grid h={"30vh"} placeContent={"center"} overflow={"hidden"}>
                    <Image src={LOGO} alt="LOGO" w={["100vw", "80vw"]} />
                </Grid>
                <Grid placeContent={"center"} mt={"5vh"}>
                    <Flex h={"5vh"} alignItems={"center"} flexDirection={["column", "row"]} justifyContent={"space-evenly"} w={["40vw", "80vw", "60vw", "50vw"]}>
                        <Input onInput={handleChange} placeholder='Search for GIPHY' _placeholder={{ color: "white" }} _hover={{ bg: "blue" }} _active={{ bg: "green" }} bg={"#8B97FF"} variant={"filled"} p={["2vw", "0"]} w={["90vw", "50vw", "35vw"]} />


                        <Button onClick={Search} w={["90vw", "20vw", "20vw", "10vw"]} p={["2vw", "0"]} mt={["2vh", "0"]} bg={"#6473FF"} color={"white"}>
                            Search
                        </Button>
                    </Flex>
                </Grid>
                <Grid className='container' mt={["5vh"]} placeContent={"center"}  >
                    <div className='row' style={{ placeContent: "center", minHeight: "200vh", width: "90vw" }}>


                        {result.data.map((e) => {

                            return (
                                <Grid margin={"2vw"} key={e.id} placeContent={"center"} className='col-md-3'>

                                    < Item url={e.url} title={e.title.slice(0, 25) + "..."} src={e.images.original.mp4} />
                                </Grid>

                            )

                        })}

                    </div>




                </Grid>
            </Grid>
        )
    }
    else {
        return (
            <Grid placeContent={"center"} bg={"#D0E3FF"} >
                <Spinner
                    thickness='10px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
            </Grid>
        )
    }
}
