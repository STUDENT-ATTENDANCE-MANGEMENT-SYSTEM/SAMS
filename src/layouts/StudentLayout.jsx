import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, Box, Button, Flex, Grid, GridItem, IconButton, List, ListIcon, ListItem, Menu, MenuButton, MenuItem, MenuList, Spacer, Stack, Text, Tooltip, Wrap, WrapItem } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import { MdAnalytics, MdBook, MdContactSupport, MdHome, MdSettings } from 'react-icons/md'
import { useEffect } from "react";
import logo from '../images/logo.png'
import { AddIcon, BellIcon, SearchIcon } from "@chakra-ui/icons";
export default function StudentLayout() {
    useEffect(() =>{
        document.body.classList.add('bg-color')
    }, [])

  return (
    <div>
        <Grid templateColumns={'repeat(6, 1fr)'}>
          <GridItem
          as={'aside'}
          colSpan={'1'}
          minHeight={'100vh'}
          borderRight={'2px solid black'}
          >
          <Flex mt={'40px'} ml={'10px'}>
          <Text fontWeight={'extrabold'} fontSize={'2xl'}>Hello! Segun</Text>
          </Flex>
          <Flex justify={'center'}>
            <List spacing={10} mt={'70px'} cursor={'pointer'}>
              <ListItem fontWeight={'bold'} cursor={'pointer'} pl={'20px'}>
                <ListIcon as={MdHome} boxSize={5}/>
                Home
              </ListItem>
                <Accordion  allowToggle>
                  <AccordionItem borderColor={'transparent'}>
                    <AccordionButton _expanded={{borderColor:'white'}}>
                      <Box as="span" flex={'1'} textAlign={'left'}>
                      <ListItem fontWeight={'bold'} cursor={'pointer'}>
                        <ListIcon as={MdBook} boxSize={5} />
                        Courses
                        </ListItem>
                      </Box>
                      <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel>TME 221</AccordionPanel>
                    <AccordionPanel>TME 231</AccordionPanel>
                    <AccordionPanel>MAT 224</AccordionPanel>
                    <AccordionPanel>GNS 210</AccordionPanel>
                  </AccordionItem>
                </Accordion>
               
              <ListItem fontWeight={'bold'} cursor={'pointer'} pl={'20px'}>
                <ListIcon as={MdSettings} boxSize={5} />
                Setting
              </ListItem>
              <ListItem fontWeight={'bold'} cursor={'pointer'} pl={'20px'}>
                <ListIcon as={MdContactSupport} boxSize={5} />
                Support and Help
              </ListItem>
              <ListItem>
                <Button colorScheme="red" p={'10px'} w={'75%'}>Logout</Button>
              </ListItem>
            </List>
          </Flex>
          </GridItem>
          <GridItem 
          as={'main'}
          colSpan={'5'}
          >
            <Flex  borderBottom={'1px solid grey'} p={'10px'} align={'center'}>
              <Box ml={'25px'}>
                <img src={logo} alt="logo"/>
              </Box>
              <Spacer/>
              <Flex align={'center'} gap={'10'} mr={'100px'}>
              <IconButton variant={'ghost'} colorScheme="white" icon={<BellIcon/>}/>
              <Tooltip hasArrow label='Join attendance' bg={'white'} color={'black'} p={'10px'}>
              <IconButton variant={'ghost'} colorScheme="white" icon={<AddIcon/>}/>
              </Tooltip>
              
             
              
              <Wrap>
                <WrapItem>
                 <Avatar name="Segun Showunmi" src="https://bit.ly/broken-link"/>
                </WrapItem>
              </Wrap>
              </Flex>
              
            </Flex>
          <Outlet/>
          </GridItem>
          
        </Grid>
    </div>
  )
}

