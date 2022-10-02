import {Box, Input, Stack ,Text,Image,Button,Heading} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <Box width='40%' margin='auto' height='500px' marginTop='5%'>
        <Stack>
            <Image width='50%' marginLeft='10%' src='https://id.tmetric.com/images/tmetric_logo_and_text.svg'></Image>
            <Heading marginLeft='10%' >Log into TMetric</Heading>
            <Text marginLeft='10%'>Email</Text>
        <Input marginLeft='10%' type='filled' placeholder='Enter Email' size='lg' bg='white' color='black'  marginTop='2%'/>
        <Text marginLeft='10%'>Password</Text>
        <Input marginLeft='10%' type='password' placeholder='Enter Password' size='lg' bg='white' color='black'  marginTop='2%'/>
        <Button bg='blue' color='white' marginTop='2%'> <Link to='/'>Login</Link></Button>
        </Stack>
    </Box>
        

  )
}

export default Login