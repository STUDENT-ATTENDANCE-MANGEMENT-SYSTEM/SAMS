import {  Avatar, Box, Button, Flex, Grid, GridItem, IconButton, List, ListIcon, ListItem, Menu, MenuButton, MenuItem, MenuList, Spacer, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import { MdAnnouncement, MdBook, MdHelp,MdSettingsSuggest, MdSsidChart, MdVisibility } from 'react-icons/md'
import { useEffect } from "react";
import logo from '../images/logo.png'
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
export default function InstitutionLayout() {
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
            <Link to={'home'}>
              <ListItem fontWeight={'bold'} cursor={'pointer'} pl={'20px'}>
                <ListIcon as={MdVisibility} boxSize={5}/>
                Overview
              </ListItem>
            </Link>
                
           <ListItem fontWeight={'bold'} cursor={'pointer'} pl={'20px'}>
              <ListIcon as={MdBook} boxSize={5} />
                Courses
              </ListItem> 
              <ListItem fontWeight={'bold'} cursor={'pointer'} pl={'20px'}>
              <ListIcon as={MdSsidChart} boxSize={5} />
                Insight
              </ListItem> 
                  
              <ListItem fontWeight={'bold'} cursor={'pointer'} pl={'20px'}>
                <ListIcon as={MdSettingsSuggest} boxSize={5} />
                Setting
              </ListItem>
              <ListItem fontWeight={'bold'} cursor={'pointer'} pl={'20px'}>
                <ListIcon as={MdHelp} boxSize={5} />
                Support and Help
              </ListItem>
              <ListItem fontWeight={'bold'} cursor={'pointer'} pl={'20px'}>
                <ListIcon as={MdAnnouncement} boxSize={5} />
                Annoucement
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
              <IconButton variant={'ghost'} colorScheme="white" icon={<SearchIcon/>}/>
              <Menu>
              <MenuButton>
              <IconButton variant={'ghost'} colorScheme="white" icon={<AddIcon/>}/>
              </MenuButton>
              <MenuList>
              <MenuItem>Create Attendance</MenuItem>
              <MenuItem>Join Attendance</MenuItem>
              </MenuList>
              </Menu>
              
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
