import secondLogo from '../images/logo_2.png'
import { Box, Flex, Grid, GridItem,List, ListItem,  Text } from "@chakra-ui/react"
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import linkedIn from '../images/linkedIn.svg'
import { Link, NavLink} from "react-router-dom"
export default function Footer() {
   

    
  return (
    <div>
        <Grid overflowX='hidden' templateColumns={'repeat(6, 1fr)'} bgColor={'#213655'} p={'30px'} pt={{base:'0px', lg:'-100px', xl:'-40px'}}>
                      <GridItem colSpan={{base:'6', md:'6', lg:'2', xl:'2'}} ml={{base:'auto'}} mr={{base:'auto'}}>
                          <Box  ml={{base:'auto', md:'20px', lg:'0px', xl:'0px'}} mr={{base:'auto', md:'20px', lg:'0px', xl:'0px'}} mt={{base:'10px', lg:'100px'}}>
                              <Box py={'15px'} ml={{base:'auto'}} mr={{base:'auto'}}>
                                <img src={secondLogo} alt="second-logo" />
                              </Box>
                              <Text color={'gray.400'} pb={'20px'}>Student Attendance Management System</Text>
                              <Text color={'white'}>
                                Use S.A.M.S to get accurate, reliable, efficient, quick <br /> and make taking and tracking attendance <br /> easy for  both lectureres and students
                              </Text>
                          </Box>
                      </GridItem>
                      <GridItem colSpan={{base:'6', md:'6', lg:'4', xl:'2'}} ml={{base:'auto'}} mr={{base:'auto'}} pt={{base:'30px', lg:'90px'}} >
                          <Flex gap={{base:10, lg:20 ,xl:20}} ml={{base:'auto', md:'auto', lg:'0px', xl:'0px'}} mr={{base:'auto', md:'auto', lg:'0px', xl:'0px'}}>
                            <List color={'white'} spacing={4} mr={{base:'0px', md:'0px',lg:'0px',xl:'0px'}}>
                                <ListItem fontFamily={'heading'}>Products</ListItem>
                                <ListItem><NavLink to={'/'}>Overview</NavLink></ListItem>
                                <ListItem><NavLink to={'/'}>Features</NavLink></ListItem>
                                <ListItem><NavLink to={'/'}>Tutorial</NavLink></ListItem>
                                <ListItem><NavLink to={'/price'}>Pricing</NavLink></ListItem>
                            </List>


                            <List color={'white'} spacing={4} mr={{base:'0px', md:'0px',lg:'0px',xl:'0px'}}>
                                <ListItem fontFamily={'heading'}>Company</ListItem>
                                <ListItem><NavLink to={'/about'}>About Us</NavLink></ListItem>
                                <ListItem><NavLink to={'/contact'}>Contact</NavLink></ListItem>
                                <ListItem><NavLink to={'/'}>FAQ</NavLink></ListItem>
                                <ListItem><NavLink to={'/'}>Partnerships</NavLink></ListItem>
                            </List>


                            <List color={'white'} spacing={4}>
                                <ListItem fontFamily={'heading'}>Legal</ListItem>
                                <ListItem><NavLink to={'/'}>Terms</NavLink></ListItem>
                                <ListItem><NavLink to={'/'}>Privacy</NavLink></ListItem>
                                <ListItem><NavLink to={'/'}>Support</NavLink></ListItem>
                                <ListItem><NavLink to={'/'}>License</NavLink></ListItem>
                            </List>
                        </Flex>
                    
                      </GridItem>
                      <GridItem colSpan={{base:'6', md:'6', lg:'4', xl:'2'}}  ml={{base:'auto'}} mr={{base:'auto', lg:'-100px'}}>
                          <Box mr={{base:'auto', md:'auto', lg:'0px', xl:'150px'}}ml={{base:'auto', md:'auto', lg:'0px', xl:'0px'}}mt={{base:'60px', xl:'120px'}}>
                            <Flex flexDir={'column'} align={'center'}>
                                <Text color={'white'} pb={'10px'}>STAY CONNECTED</Text>
                                <Flex gap={3} pb={'0px'}>
                                  <Link to={'#'}><img src={facebook} alt="fb" width={'40px'} style={{filter: 'invert(99%) sepia(7%) saturate(140%) hue-rotate(223deg) brightness(114%) contrast(100%)'}}/></Link>
                                  <Link to={'#'}><img src={twitter} alt="fb" width={'40px'} style={{filter: 'invert(99%) sepia(7%) saturate(140%) hue-rotate(223deg) brightness(114%) contrast(100%)'}}/></Link>
                                  <Link to={'#'}><img src={linkedIn} alt="fb" width={'40px'} style={{filter: 'invert(99%) sepia(7%) saturate(140%) hue-rotate(223deg) brightness(114%) contrast(100%)'}}/></Link>
                                </Flex>
                            </Flex>
                            <Text color={'gray.400'}>Copyright &copy; 2023. All rights reserved</Text>
                          </Box>
                      </GridItem>
                    
            </Grid>
        
    </div>
  )
}
