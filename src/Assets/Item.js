import { ChakraProvider, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function Item(props) {
    const share=()=>{
        if(navigator.share){
            navigator.share({
                title: props.title,
                url: props.url
              }).then(() => {
                console.log('Thanks for sharing!');
              })
              .catch(console.error);
            } else {
              // fallback
            }
        }
    
    return (
        <ChakraProvider>
            <Grid borderRadius={["5vw","1vw"]}  w={["90vw","50vw","25vw","20vw"]} placeItems={"center"} placeContent={"center"} h={"40vh"} bg={"#BAC1FF"}>
                <Grid placeContent={"center"} borderRadius={["5vw",".5vw"]} w={["50vw","25vw","15vw","10vw"]} overflow={"hidden"}>
                    <video src={props.src} autoPlay muted loop></video>
                </Grid>
                <Text p={"1vw"} fontWeight={"700"} textAlign={"center"} fontSize={"xl"}>{props.title}</Text>
                <a style={{fontWeight:"700",color:"blue"}} href={props.url}>View More</a>
                <Text cursor={"pointer"} p={"1vw"} onClick={share} fontWeight={"700"} textAlign={"center"} >Share</Text>

            </Grid>
        </ChakraProvider>
    )
}
