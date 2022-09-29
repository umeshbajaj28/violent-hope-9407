import React from 'react'
import {Box, Flex, Heading,Image, Spacer,Text,Input} from '@chakra-ui/react'

function Home() {
  return (
    <Box bg='#fff0b8' height='400px'>
       <Flex>
        <Box width='40%' margin='auto' marginLeft='5%'>
            <Heading as='h1' size='4xl'>Make the best use of your time</Heading>
            <Spacer></Spacer>
            <Text marginTop='5%'>TMetric is a smart choice for time tracking to see work in progress and keep team, cost and quality under control</Text>
            <Input type='filled' placeholder='Enter Email' size='lg' bg='white' color='black'  marginTop='2%'/>
        </Box>
        <Spacer></Spacer>
        <Box>
            <Image src='https://tmetric.com/media/w53hmkzd/img-video-cover.png'></Image>
        </Box>
       </Flex>

        <Box>
          <Flex>
            
            <Image src='https://tmetric.com/media/zlalggkp/saasworthy_2021_main_page.png' margin='2%'></Image>
            <Image src='https://tmetric.com/media/w4mhgaul/time-tracking-software.png' margin='2%'></Image>
            <Image src='https://tmetric.com/media/mg3fi1e4/crozdesk_2022_main_page.png'  margin='2%'></Image>
            <Image src='https://tmetric.com/media/c2eewysw/g2_2022_main_page.png' margin='2%'></Image>
            <Image src='https://tmetric.com/media/a00doqsb/icon-customer-rating.png'  margin='2%'></Image>
            <Image src='https://tmetric.com/media/0mxfl3xw/icon-customer-choice.png'  margin='2%'></Image>
            <Image src='https://tmetric.com/media/jfxavlps/getapp-logotype.svg'  margin='2%'></Image>
            
            </Flex>  
        </Box>


        <Box height='500px'>

        <Flex>
            <Box>
                <Heading>Manage your team effectively</Heading>
            </Box>

            <Box>
            <Image src='https://tmetric.com/media/upkh02nn/img-activity-cases.svg'></Image>
            </Box>
        </Flex>


        </Box>


    </Box>
    
  )
}

export default Home