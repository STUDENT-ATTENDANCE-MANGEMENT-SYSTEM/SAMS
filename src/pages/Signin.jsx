import React from 'react'

import { Box, Button, Container, Flex, Heading, Spacer } from "@chakra-ui/react"
import student from '../images/student.png'
import lecturer from '../images/tutor.png'
import { NavLink, Outlet } from "react-router-dom"
import { useEffect } from "react"


export default function Signin() {
    useEffect(() =>{
        document.body.classList.add('bg-color')
    }, [])
 
  return (
    <div>
      <Heading textAlign={'center'} mt={'100px'} fontSize={'5xl'} color={'#213655'}>Register Based on Your Role</Heading>
       <Flex my={'80px'} flexDir={{base:"column", lg:'row', xl:'row'}}gap={10} mr={{base:'auto', lg:'80px', xl:'300px'}} ml={{base:'auto', lg:'80px', xl:'300px'}}>
          <NavLink to={'student'}>
            <Container>
                <Flex align={'center'} flexDir={'column'}>
                        <Box w={'400px'} pb={'20px'}><img src={student} alt="student"/></Box>
                        <Button variant={'ghost'} color={'#213655'} fontSize={'4xl'}>STUDENT</Button>        
                  </Flex>
              </Container>
          </NavLink>
          <Spacer/>
          <NavLink to={'lecturer'}>
            <Container>
                <Flex align={'center'}flexDir={'column'}>
                        <Box w={'400px'}pb={'20px'}><img src={lecturer} alt="student"/></Box>
                        <Button variant={'ghost'} fontSize={'4xl'} color={'#213655'}>LECTURER</Button>        
                  </Flex>
              </Container>
          </NavLink>
        </Flex>
     
    </div>
  )
}

