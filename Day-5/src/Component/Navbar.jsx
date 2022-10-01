import React from 'react'
import { Box, Stack } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  
  
} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'
function Navbar() {
  return (
    <Box bg='white' w='100%' p={4} color='white' border='2px solid red' display='flex'>
   
      <Flex>

      <Box boxSize='auto'>
        <Flex>
        <Image src='https://tmetric.com/images/v3/tmetric_logo_with_text.svg' alt='Dan Abramov' />
          <Menu>
          <MenuButton as={Button} leftIcon={<Image src='https://tmetric.com/images/v3/icon-globe.svg' />} bg='white' color='black'>
            EN
          </MenuButton>
          <MenuList border='1px solid black' color='black'>
            <MenuItem>Deutsch</MenuItem>
          </MenuList>
        </Menu>
        </Flex>
        </Box>
      </Flex>
      <Spacer />
  

  <Popover isLazy >
  <PopoverTrigger color='black'>
    {/* <Button>Click me</Button> */}
    <Text color='black' > Why TMetric <ChevronDownIcon/></Text>




    
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader fontWeight='semibold'>Popover placement</PopoverHeader>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverBody color = 'black'>
<Flex>
<Box p='10'>
  <Stack spacing='10'>
  <Heading>Overview</Heading>
<Heading as='h4' size='md'>
    Industry
  </Heading>
  <Text>Made for all industries. Check benefits of usage</Text>
<Heading>Customers</Heading>
  <Text>See why business use TMetric for time tracking and workflow management</Text>

  </Stack>

    </Box>
    <Spacer/>



    <Box p='10'>
     <Stack spacing='10'>
    


Capture and control every task you work on
      <Heading> Features</Heading>
      <Flex>
      <Image src='https://tmetric.com/media/qojb5snq/icon-timer-gray.svg'></Image>
      <Heading as='h4' size='md'>
    Time Tracking
      </Heading>
      </Flex>
      <Text>Capture and control every task you work on</Text>
      
      <Flex>
      <Image src='https://tmetric.com/media/isxcp2ip/icon-team-gray.svg'></Image>
      <Heading as='h4' size='md'>
    Team Management
      </Heading>
      </Flex>
      <Text>Monitor productivity and activity level of your team</Text>

  </Stack>
    </Box>
    <Box p='10'>
     <Stack spacing='10'>
    


Capture and control every task you work on
      <Heading> Features</Heading>
      <Flex>
      <Image src='https://tmetric.com/media/qojb5snq/icon-timer-gray.svg'></Image>
      <Heading as='h4' size='md'>
    Time Tracking
      </Heading>
      </Flex>
      <Text>Capture and control every task you work on</Text>
      
      <Flex>
      <Image src='https://tmetric.com/media/isxcp2ip/icon-team-gray.svg'></Image>
      <Heading as='h4' size='md'>
    Team Management
      </Heading>
      </Flex>
      <Text>Monitor productivity and activity level of your team</Text>

  </Stack>
    </Box>
    <Box p='10'>
     <Stack spacing='10'>
    


Capture and control every task you work on
      <Heading> Features</Heading>
      <Flex>
      <Image src='https://tmetric.com/media/qojb5snq/icon-timer-gray.svg'></Image>
      <Heading as='h4' size='md'>
    Time Tracking
      </Heading>
      </Flex>
      <Text>Capture and control every task you work on</Text>
      
      <Flex>
      <Image src='https://tmetric.com/media/isxcp2ip/icon-team-gray.svg'></Image>
      <Heading as='h4' size='md'>
    Team Management
      </Heading>
      </Flex>
      <Text>Monitor productivity and activity level of your team</Text>

  </Stack>
    </Box>
</Flex>
      
    </PopoverBody>
  </PopoverContent>
</Popover>







<Popover isLazy>
  <PopoverTrigger color='black' >
    {/* <Button>Click me</Button> */}
    <Text color='black' > Why TMetric <ChevronDownIcon/></Text>




    
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader fontWeight='semibold'>Popover placement</PopoverHeader>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverBody color = 'black'>
<Flex>
<Box p='10'>
  <Stack spacing='10'>
  <Heading>Overview</Heading>
<Heading as='h4' size='md'>
    Industry
  </Heading>
  <Text>Made for all industries. Check benefits of usage</Text>
<Heading>Customers</Heading>
  <Text>See why business use TMetric for time tracking and workflow management</Text>

  </Stack>

    </Box>
    <Spacer/>



    <Box p='10'>
     <Stack spacing='10'>
    


Capture and control every task you work on
      <Heading> Features</Heading>
      <Flex>
      <Image src='https://tmetric.com/media/qojb5snq/icon-timer-gray.svg'></Image>
      <Heading as='h4' size='md'>
    Time Tracking
      </Heading>
      </Flex>
      <Text>Capture and control every task you work on</Text>
      
      <Flex>
      <Image src='https://tmetric.com/media/isxcp2ip/icon-team-gray.svg'></Image>
      <Heading as='h4' size='md'>
    Team Management
      </Heading>
      </Flex>
      <Text>Monitor productivity and activity level of your team</Text>

  </Stack>
    </Box>
    <Box p='10'>
     <Stack spacing='10'>
    


Capture and control every task you work on
      <Heading> Features</Heading>
      <Flex>
      <Image src='https://tmetric.com/media/qojb5snq/icon-timer-gray.svg'></Image>
      <Heading as='h4' size='md'>
    Time Tracking
      </Heading>
      </Flex>
      <Text>Capture and control every task you work on</Text>
      
      <Flex>
      <Image src='https://tmetric.com/media/isxcp2ip/icon-team-gray.svg'></Image>
      <Heading as='h4' size='md'>
    Team Management
      </Heading>
      </Flex>
      <Text>Monitor productivity and activity level of your team</Text>

  </Stack>
    </Box>
    <Box p='10'>
     <Stack spacing='10'>
    


Capture and control every task you work on
      <Heading> Features</Heading>
      <Flex>
      <Image src='https://tmetric.com/media/qojb5snq/icon-timer-gray.svg'></Image>
      <Heading as='h4' size='md'>
    Time Tracking
      </Heading>
      </Flex>
      <Text>Capture and control every task you work on</Text>
      
      <Flex>
      <Image src='https://tmetric.com/media/isxcp2ip/icon-team-gray.svg'></Image>
      <Heading as='h4' size='md'>
    Team Management
      </Heading>
      </Flex>
      <Text>Monitor productivity and activity level of your team</Text>

  </Stack>
    </Box>
</Flex>
      
    </PopoverBody>
  </PopoverContent>
</Popover>
  

  <Spacer/>

  <Box>
    <Button  bg='blue' color='white'>Login</Button>
    <Button bg='blue' color='white'>Signup</Button>
  </Box>


  </Box>
  )
}

export default Navbar