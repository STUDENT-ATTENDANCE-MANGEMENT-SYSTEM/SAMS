import {Text, Card, CardBody, CardFooter, CardHeader, GridItem, Flex, SimpleGrid, IconButton, Menu, MenuButton, MenuItem, MenuList, Spacer, Icon} from "@chakra-ui/react";

import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { color } from "framer-motion";
import { MdContentCopy, MdMoreVert, MdLockOutline, MdEdit, MdCalculate } from "react-icons/md";
export default function LecturerHome() {
    useEffect(() =>{
        document.body.classList.add('bg-color')
    }, [])

   
  return (
    <div>
        <SimpleGrid columns={3} mx={'20px'} gap={'10'} mt={'30px'}>
            <Card>
            <CardHeader>
                
                <Flex>
               
                <Text fontSize={'1.6rem'} pl={'10px'} mt={'15px'}>TME 211</Text>
                <Spacer/>
                <Menu>
                    <MenuButton> <IconButton variant={'ghost'} size={"lg"} icon={<MdMoreVert/>}/></MenuButton>
                    <MenuList ml={'-160px'} mt={'-10px'} >
                        <MenuItem icon={<MdEdit/>}>Edit Attendance</MenuItem>
                        <MenuItem icon={<MdCalculate/>}>Calculate Attendance</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
                
               
            </CardHeader>
            <CardBody >INTRODUCTION TO ENGINEERING DRAWING</CardBody>
            <CardFooter>
            
            <Spacer/>
            <IconButton variant={'ghost'} icon={<MdLockOutline/>} size={'lg'} />
            <IconButton variant={'ghost'} size={'lg'} icon={<MdContentCopy/>}/>
            </CardFooter>
            </Card>
       
        </SimpleGrid>
        
    </div>
  )
}
