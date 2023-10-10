import { Box, Button, Container, Flex, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import nodata from '../../images/no-data.png'
import { color } from "framer-motion";
export default function StudentMain() {
    useEffect(() =>{
        document.body.classList.add('bg-color')
    }, [])
  return (
    <div>
        <Container mt={'20px'}>
            <Flex justify={'center'}>
                <Box w={'500px'}>
                    <img src={nodata} alt="no-data"/>
                </Box>
            </Flex>
            <Text textAlign={'center'} fontWeight={'semibold'} mt={'-80px'}>You are yet to create an attendance tab</Text>
            <Flex justify={'center'} mt={'20px'} gap={'5'}>
                <Button colorScheme="red">Create</Button>
                <Button colorScheme="white" color={'red'}>Join</Button>
            </Flex>
        </Container>
       
        
    </div>
  )
}



  