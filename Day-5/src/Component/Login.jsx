import {Box, Input, Stack ,Text,Image} from '@chakra-ui/react'
import React from 'react'

function Login() {
  return (
    <Box width='40%' margin='auto' height='500px' border='1px solid black'marginTop='5%'>
        <Stack>
            <Image width='50%' marginLeft='10%' src='https://id.tmetric.com/images/tmetric_logo_and_text.svg'></Image>
            <Text marginLeft='10%' >Log into TMetric</Text>
            <Text marginLeft='10%'>Email</Text>
        <Input marginLeft='10%' type='filled' placeholder='Enter Email' size='lg' bg='white' color='black'  marginTop='2%'/>
        <Text marginLeft='10%'>Password</Text>
        <Input marginLeft='10%' type='password' placeholder='Enter Email' size='lg' bg='white' color='black'  marginTop='2%'/>
        </Stack>
    </Box>
        

  )
}

export default Login