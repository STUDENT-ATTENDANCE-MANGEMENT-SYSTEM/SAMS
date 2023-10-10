import { Box, Button, Flex, Heading, Container, SimpleGrid, Text, HStack, Grid, GridItem, Show, Hide } from "@chakra-ui/react"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import topImage from '../images/image_1.png'
import easy_attendance from '../images/easy_attendance.png'
import real_time from '../images/real_time.png'
import confirm from '../images/online.png'
import easyuse from '../images/easy-to-use.png'
import data_analysis from '../images/data_analysis.png'
import check from '../images/check.png'
import line from '../images/line2.svg'
import underline5 from '../images/underline5.svg'
import arrow4 from '../images/arrow4.svg'
import punct from '../images/punctuation1.svg'
import doodle from '../images/doodle2.svg'
import arrow5 from '../images/arrow5.svg'
import cornerarrow from '../images/cornerarrow.svg'
import cookies from '../images/cookies.png'
import grading from '../images/grading.png'
import doodle4 from '../images/doodle4.svg'
import { motion } from "framer-motion";
import { useEffect} from "react"
import {Link, NavLink, Outlet } from "react-router-dom"
import '@fontsource/lato/400.css'
import '@fontsource/prompt/900.css'
import '@fontsource/raleway/500.css'
import '@fontsource/roboto/300.css'
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"

export const Home = () =>{
  useEffect(() =>{
    document.body.classList.add('bg-color')
  }, [])



  const firstRegister ={
    bgColor: '#213655',
    color: 'white',
    ':hover':{
        bgColor:'#f2575d'
    },
    borderRadius: '0'
  }

  const secondRegister ={
      color: '#213655',
      border: '3px solid #213655 ',
      bgColor: 'transparent',
      borderRadius: '0',
      ':hover':{
        bgColor: '#f2575d',
        color: 'white',
        border: '3px solid #f2575d '
    }
  }
  const cookie ={
    color: '#213655',
      border: '1px solid grey ',
      bgColor: 'transparent',
      borderRadius: '10px',
      ':hover':{
        bgColor: '#f2575d',
        color: 'white',
        border: '0px solid #f2575d '
    }
  }
  const fadeIn ={
      initial:{
        opacity:0,
        y:'300'
      },
      animate:{
        opacity:1,
        y:0,
      }
      
  }
  const fadeInto ={
    initial:{
      opacity:0,
    },
    animate:{
      opacity:1,
    }
    
}
   const SlideIn ={
      initial:{
        opacity:0,
        x: 300,
      },
      animate:{
        opacity:1,
        x:0,
      }
      
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(()=>{
    const timer = setTimeout(()=>{
      onOpen();
    }, 5000)
    const cleanup = ()=>{
      clearTimeout(timer)
      onClose()
    }
  } ,[onOpen,onClose])
  
  return(
   <div>
      <Navbar/>
      {isOpen &&
      <Drawer
        isOpen={isOpen}
        placement='bottom'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex justify={'center'} align={'center'}>
            <Heading textAlign={'center'} pr={'15px'}>
            This website uses cookies
            </Heading>
            <Box w={'30px'}>
              <img src={cookies} alt="cookie"/>
            </Box>
            </Flex>
            </DrawerHeader>

          <DrawerBody>
            <Container>
                <Text>This website uses cookies and other tracking technologies improve your experience on our website.
                By using our website, you consent to all cookies in accordance with our Cookie Policy
                </Text>
            </Container>
          </DrawerBody>
          <Flex flexDirection={'row'} justify={'center'}>
              <DrawerFooter>
                  <Button sx={cookie} mr={3} onClick={onClose}>
                    Read More
                  </Button>
                  <Button sx={cookie} mr={3} onClick={onClose}>
                    Accept
                  </Button>
              </DrawerFooter>
          </Flex>
        </DrawerContent>
      </Drawer>
}
      <SimpleGrid columns={{base:'1',lg:'2', xl:'2' }} overflowX={'hidden'} my={'40px'}>
            <Container as={motion.div}
                variants={fadeIn}
                initial={'initial'}
                whileInView={'animate'}
                transition={{delay:0.5, ease:"ease-in", type:'spring', stiffness: 120, duration: 1 }}
                viewport={{
                  once:true
                }}
                my={{base:'150px',md:'150px',lg:'140px',xl:'175px'}} px={{base:'20px',lg:'30px',xl:'30px'}} >
                <Heading
                 color={'#213655'}
                  textAlign={{base:'center', lg:'left', xl:'left'}}
                   pb={'15px'} fontSize={{base:'5xl',md:'5xl',lg:'5xl',xl:'5xl'}}>
                  Get the best way to obtain and monitor students' attendance
                </Heading>
                <Text pb={'20px'}> Say goodbye to traditional paper filling and hello 
                  to a smart, efficient and accurate solution that transforms your classroom experience. Empower Educators, Engage Students.
                  </Text>
              <Flex gap={5} flexDir={{base:'column', md:'column', lg:'row', xl:'row'}}>
                  <Button sx={firstRegister}>
                      <NavLink to={'register-institution'}>Register your Institution</NavLink>
                    </Button>
                    <Button sx={secondRegister}>
                      <NavLink to={'signin'}>Signup as Tutor/Student</NavLink>
                    </Button>
              </Flex>
            </Container>
            <Box  as={motion.div}
                variants={SlideIn}
                initial={'initial'}
                whileInView={'animate'}
                transition={{delay:0.8, ease:"ease-in", duration:1}}
                viewport={{
                  once:true
                }}
                w={'auto'} ml={'auto'} mr={'auto'} mt={{base:'-100px',lg:'40px',xl:'50px'}}>
              <img src={topImage} alt="imageOne" style={{height:'auto', width:'100%', minWidth:'400px',maxWidth:'600px'}} />
            </Box>
          </SimpleGrid>
          <Show above="lg">
           <Box as={motion.div}
                  variants={fadeIn}
                  initial={'initial'}
                  whileInView={'animate'}
                  transition={{delay: 1, ease:"ease-in", type:'tween', duration:1}}
                  viewport={{
                    once:true
                  }} 
              w={'80px'} pos={'absolute'} top={{lg:'2%',xl:'2.8%'}} left={{lg:'46%', xl:'41%'}}>
             <img src={doodle4} alt="doodle" style={{filter:'invert(34%) sepia(71%) saturate(3040%) hue-rotate(328deg) brightness(101%) contrast(89%)'}} />
           </Box>
           </Show>
           
           <Box>
             <img src={line} alt="line" width={'100%'} />
           </Box>
           
          
           <Box as="section" backgroundColor={'#fff'}>
           <Container as= 'section' backgroundColor={'#fff'} pt={'100px'}>
              <Heading as={motion.div}
                  variants={fadeIn}
                  initial={'initial'}
                  whileInView={'animate'}
                  transition={{delay:0.8, ease:"ease-in"}}
                  viewport={{
                    once:true
                  }}
                fontSize={{base:'32px', md:'34px', lg:'34px', xl:"34px"}} pos={'relative'} textAlign={{base:'center', md:'left', xl:'left'}} >Transforming Education, One Attendance at a Time</Heading>
              <Box as={motion.div}
                  variants={fadeIn}
                  initial={'initial'}
                  whileInView={'animate'}
                  transition={{delay: 0.9, ease:"ease-in"}}
                  viewport={{
                    once:true
                  }} 
                  w={{base:'250px',md:'200px',lg:'200px',xl:'200px'}} pos={'absolute'} left={{base:'20%',md:'37%',lg:'40%',xl:'45%'}}>
                    <img src={underline5} alt="loop" style={{filter:'invert(34%) sepia(71%) saturate(3040%) hue-rotate(328deg) brightness(101%) contrast(89%)'}}/>
                 </Box>
              <Text as={motion.div}
                  variants={fadeIn}
                  initial={'initial'}
                  whileInView={'animate'}
                  transition={{delay:0.8, ease:"ease-in"}}
                  viewport={{
                    once:true
                  }} 
                  pt={'40px'} pb={'20px'}>Discover a new era of attendance tracking that combines technology, 
                accuracy, and ease-of-use to transform
                 the way educational institutions manage students' attendance.</Text>
                 <Box as={motion.div}
                    variants={fadeIn}
                    initial={'initial'}
                    whileInView={'animate'}
                    transition={{delay:0.9, ease:"ease-in"}}
                    viewport={{
                      once:true
                    }} 
                  w={'50px'} mb={'-50px'} ml={'40%'}>
                        <img src={arrow4} alt="loop" style={{filter:'invert(34%) sepia(71%) saturate(3040%) hue-rotate(328deg) brightness(101%) contrast(89%)'}}/>
                </Box>
                 
                 
           </Container>
            <HStack as='flex' justifyContent={'center'}>
            
                <Heading textAlign={'center'} pb={'auto'} py={'70px'} color={'#213655'} fontFamily={'mono'} fontSize={'4xl'}>Why use S.A.M.S</Heading>
                <Box w={'14px'}>
                        <img src={punct} style={{filter:'invert(34%) sepia(71%) saturate(3040%) hue-rotate(328deg) brightness(101%) contrast(89%)'}} alt="loop"/>
                </Box>
            </HStack>
          
            <SimpleGrid columns={1}  overflowX={'hidden'} ml={'auto'} mr={'auto'}>
              <Flex align={'center'} flexDir={{base:'column', md:'column', lg:'row', xl:'row'}} mb={'50px'} ml={{base:'auto'}} mr={'auto'}>
                <Box as={motion.div}
                  variants={SlideIn}
                  initial={'initial'}
                  whileInView={'animate'}
                  transition={{delay:0.5, ease:"ease-in"}}
                  viewport={{
                    once:true
                  }}
                 w={{base:'300px', md:'400px', lg:'400px', xl:'400px'}} pb={'30px'} mr={'40px'}>
                  <img src={easy_attendance} alt="real-time" />
                </Box>
                <Container as={motion.div}
                  variants={fadeIn}
                  initial={'initial'}
                  whileInView={'animate'}
                  transition={{delay:0.8, ease:"ease-in"}}
                  viewport={{
                    once:true
                  }}
                 mt={{base:'0px', md:'0px', lg:'60px', xl:'0px'}} pb={'30px'} textAlign={{base:'center',  lg:'left', xl:'left'}}>
                  <Heading fontFamily={'solo'} pb={'10px'}>Effortless Attendance <br /> Submission</Heading>
                  <Text fontSize={{base:'13px',md:'16px', lg:'16px',xl:'16px'}}>
                    Never worry about attendance again. <br /> Lecturers can easily manage
                    and students can <br /> quickly submit their attendance with a few clicks.
                  </Text>
                </Container>
                
              </Flex>
              
              
              
              <Flex align={'center'} flexDir={{base:'column', md:'column', lg:'row', xl:'row'}} mb={'50px'} ml={'auto'} mr={'auto'}>
                  <Container as={motion.div}
                    variants={fadeIn}
                    initial={'initial'}
                    whileInView={'animate'}
                    transition={{delay:1, ease:"ease-in"}}
                    viewport={{
                      once:true
                    }}
                  mt={{base:'0px', md:'0px', lg:'70px', xl:'0px'}} mr={'40px'} pb={'30px'} textAlign={{base:'center',  lg:'left', xl:'left'}}>  
                      <Heading fontFamily={'solo'}  pb={'10px'}>Real-Time Verification</Heading>
                      <Text fontSize={{base:'13px', md:'16px', lg:'16px',xl:'16px'}}>
                        Say farewell to inaccurate and unreliable <br />means  of taking attendance.
                        Our cutting-edge<br /> geolocation technology  and proximity <br />verification ensure only
                        students physically <br />present in your class can submit attendance.
                      </Text>
                    </Container>
                  <Box as={motion.div}
                    variants={SlideIn}
                    initial={'initial'}
                    whileInView={'animate'}
                    transition={{delay:1, ease:"ease-in"}}
                    viewport={{
                      once:true
                    }}
                   w={{base:'300px', md:'300px', lg:'400px', xl:'400px'}} pb={'30px'}>
                    <img src={real_time} alt="real-time" />
                  </Box>
                  
                </Flex>
              
                
                <Flex align={'center'} flexDir={{base:'column', md:'column', lg:'row', xl:'row'}} mb={'50px'} ml={'auto'} mr={'auto'}>
                  <Box as={motion.div}
                    variants={SlideIn}
                    initial={'initial'}
                    whileInView={'animate'}
                    transition={{delay:1, ease:"ease-in"}}
                    viewport={{
                      once:true
                    }} w={{base:'300px', md:'300px', lg:'500px', xl:'500px'}} pb={'30px'} mr={'50px'}>
                    <img src={easyuse} alt="real-time" />
                  </Box>
                  <Container as={motion.div}
                    variants={fadeIn}
                    initial={'initial'}
                    whileInView={'animate'}
                    transition={{delay:1, ease:"ease-in"}}
                    viewport={{
                      once:true
                    }} mt={{base:'0px', md:'0px', lg:'70px', xl:'0px'}} pb={'30px'} textAlign={{base:'center',  lg:'left', xl:'left'}}> 
                    <Heading fontFamily={'solo'}  pb={'10px'}>User-Friendly Interface</Heading>
                    <Text fontSize={{base:'13px', md:'16px', lg:'16px',xl:'16px'}}>
                      A simple and intuitive interface that <br/> requires minimal training for <br/>lecturere and students alike
                    </Text>
                  </Container>
                </Flex>

                
                <Flex align={'center'} flexDir={{base:'column', md:'column', lg:'row', xl:'row'}} ml={'auto'} mr={'auto'}>
                <Container as={motion.div}
                  variants={fadeIn}
                  initial={'initial'}
                  whileInView={'animate'}
                  transition={{delay:1, ease:"ease-in"}}
                  viewport={{
                    once:true
                  }} mt={{base:'0px', md:'0px', lg:'100px', xl:'0px'}} mr={'40px'} pb={'30px'} textAlign={{base:'center',  lg:'left', xl:'left'}} >
                    <Heading fontFamily={'solo'} pb={'10px'}>Insights and Reporting</Heading>
                    <Text fontSize={{base:'13px', md:'16px', lg:'16px',xl:'16px'}}>
                      Gain valuable insights into attendance <br /> trends and  patterns
                      and make data-driven <br /> decisions to enhance student engagement <br /> and 
                      classroom dynamics.
                    </Text>
                  </Container>                 
                  <Box 
                  as={motion.div}
                  variants={SlideIn}
                  initial={'initial'}
                  whileInView={'animate'}
                  transition={{delay:1, ease:"ease-in"}}
                  viewport={{
                    once:true
                  }} w={{base:'300px', md:'300px', lg:'400px', xl:'400px'}} pb={'30px'}>
                    <img src={data_analysis} alt="real-time" />
                  </Box>
                  
                  
              </Flex>

      
                <Flex align={'center'} flexDir={{base:'column', md:'column', lg:'row', xl:'row'}} mb={'50px'} ml={'auto'} mr={'auto'}>
                                   
                  <Box 
                      as={motion.div}
                      variants={SlideIn}
                      initial={'initial'}
                      whileInView={'animate'}
                      transition={{delay:1, ease:"ease-in"}}
                      viewport={{
                        once:true
                      }} w={{base:'400px', md:'500px', lg:'600px', xl:'600px'}} pb={'30px'} mr={'30px'} ml={{base:'0px', xl:'150px'}}>
                        <img src={grading} alt="real-time" />
                  </Box>
                  <Container as={motion.div}
                  variants={fadeIn}
                  initial={'initial'}
                  whileInView={'animate'}
                  transition={{delay:0.8, ease:"ease-in"}}
                  viewport={{
                    once:true
                  }}
                 mt={{base:'0px', md:'0px', lg:'60px', xl:'0px'}} pb={'30px'} textAlign={{base:'center',  lg:'left', xl:'left'}}>
                  <Heading fontFamily={'solo'} pb={'10px'}>Automatic Grading</Heading>
                  <Text fontSize={{base:'13px',md:'16px', lg:'16px',xl:'16px'}}>
                    Never worry about attendance again. <br /> Lecturers can easily manage
                    and students can <br /> quickly submit their attendance with a few clicks.
                  </Text>
                </Container> 
                  
              </Flex>
                
            </SimpleGrid>
            <Flex justify={'center'}  pb={{base:'0px', md:'30px',lg:'40px',xl:'40px'}}>
              <NavLink to={'/about'}>
                <Show above="lg">
                    <Box as={motion.div}
                      variants={fadeInto}
                      initial={'initial'}
                      whileInView={'animate'}
                      transition={{delay:1, ease:"ease-in"}}
                      viewport={{
                        once:true
                      }} w={'30px'} pos={'absolute'} left={{base:'20%', md:'30%', lg:'35%', xl:'38%'}}>
                      <img src={doodle} alt="doodle" style={{filter:'invert(34%) sepia(71%) saturate(3040%) hue-rotate(328deg) brightness(101%) contrast(89%)'}}/>
                    </Box>
                </Show>
              
                <Button as={motion.div}
                  variants={fadeInto}
                  initial={'initial'}
                  whileInView={'animate'}
                  transition={{delay:1, ease:"ease-in"}}
                  viewport={{
                    once:true
                  }} 
                  sx={firstRegister} pos={'relative'} px={'60px'} my={'30px'}>
                  LEARN MORE
                  <Show below="lg">
                    <Box w={'30px'} ml={'20px'}>
                        <img src={arrow5} style={{filter:'invert(34%) sepia(71%) saturate(3040%) hue-rotate(328deg) brightness(101%) contrast(89%)'}} alt="arrow"/>
                    </Box>
                    
                  </Show>
                </Button>
                
                
              </NavLink>
            </Flex>

           </Box>
          
            <SimpleGrid columns={{base:'1', md:'1', lg:'2', xl:'2'}} pb={'40px'} my={{base:'50px',lg:'70px',xl:'70px'}} overflowX={'hidden'} >
                  <Container as={motion.div}
                    variants={fadeIn}
                    initial={'initial'}
                    whileInView={'animate'}
                    transition={{delay:1, ease:"ease-in"}}
                    viewport={{
                      once:true
                    }} 
                   mt={'0px'} ml={{base:'auto', md:'auto', lg:'50px', xl:'200px'}} mr={{base:'auto'}} >
                    <Text as={'h1'} mb={'35px'} fontSize={'25px'} ml={'30px'} fontFamily={'mono'} mt={{base:'0px',lg:'40px',xl:'60px'}}>
                      Experience the future of attendance tracking.<br/>
                      Join hundreds of educators who <br/>are already making attendance <br/>
                      management more <br/>accurate, efficient and engaging.
                    </Text>
                    <HStack as={'flex'} ml={'30px'} align={'center'}mb={'40px'}>
                      <Box w={'50px'} mr={'10px'} mb={'10px'}>
                        <img src={cornerarrow} alt="corner-arrow"/>
                      </Box>
                     <Link to={'/price'}> <Text color={'#f2575d'}>Get Started</Text></Link> 
                    </HStack>
                   
                  </Container>
                  <Box as={motion.div}
                      variants={SlideIn}
                      initial={'initial'}
                      whileInView={'animate'}
                      transition={{delay: 1, ease:"ease-in"}}
                      viewport={{
                        once:true
                      }} 
                      w={{base:'370px', md:'450px',lg:'450px',xl:'450px'}} 
                      
                      mr={'auto'} ml={'auto'} >
                          <img src={check} alt="join"/>
                  </Box>
            </SimpleGrid>
            <Footer />
            
    <Outlet />
  </div>
  )
}