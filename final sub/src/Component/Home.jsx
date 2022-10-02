import React from 'react'
import {Box, Flex, Heading,Image, Spacer,Text,Input, Button} from '@chakra-ui/react'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
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
        <Box width='40%' margin='auto' marginLeft='5%'>
            <Heading as='h1' size='4xl'>Manage your team effectively</Heading>
            <Spacer></Spacer>
            <UnorderedList>
              <ListItem>timekeeping</ListItem>
              <ListItem>sites and apps monitoring</ListItem>
              <ListItem>activity tracking</ListItem>
              <ListItem>screenshots capturing</ListItem>
              <ListItem>task management</ListItem>
              <ListItem>50+ integrations</ListItem>
              <ListItem>work schedule</ListItem>
            </UnorderedList>
            <Button bg='blue' color='white' >Start Free Trail</Button>
        </Box>
        <Spacer></Spacer>
        <Box>
            <Image width='1000px' height='1000px' src='https://tmetric.com/media/upkh02nn/img-activity-cases.svg'></Image>
        </Box>
       </Flex>

        </Box>


        <Box marginTop='30%' heigth='500px'>


        <Flex>
        <Box width='40%' margin='auto' marginLeft='5%'>
        <Image width='1000px' heigth='1000px' src='https://tmetric.com/media/hx0j4hno/img-report-cases-svg.svg'></Image>
        </Box>
        <Spacer></Spacer>
        <Box p='10'>

            <Heading as='h1' size='4xl'>Ensure the profitability of your business</Heading>
           
            {/* project management
project budgeting
billing and invoicing
accurate payroll
detailed reports */}

            <Spacer p='10'></Spacer>

              <UnorderedList>
              <ListItem> project management</ListItem>
              <ListItem>project budgeting</ListItem>
              <ListItem>billing and invoicing</ListItem>
              <ListItem>accurate payroll</ListItem>
              <ListItem>detailed reports</ListItem>
            </UnorderedList>

            <Spacer p='10'></Spacer>
            <Button bg='blue' color='white'>Start Free Trail</Button>

        </Box>
       </Flex>

        </Box>



        <Box height='500px'>

          <Flex>
        <Box width='40%' margin='auto' marginLeft='5%'>
            <Heading as='h1' size='4xl'>Monitor attendance and time-off requests</Heading>
            <Spacer p='1'></Spacer>
            <UnorderedList>
              <ListItem>flexible time off policy</ListItem>
              <ListItem>time off requests management</ListItem>
              <ListItem>time off calendar</ListItem>
              <ListItem>pto calculations</ListItem>
            </UnorderedList>
            <Button p='1' bg='blue' color='white' >Start Free Trail</Button>
        </Box>
        <Spacer></Spacer>
        <Box>
            <Image src='https://tmetric.com/media/0sapzfi1/time-off-calendar-case.png'></Image>
        </Box>
       </Flex>

        </Box>


    </Box>
    
  )
}

export default Home