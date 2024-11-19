import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {Link as NavLink} from "react-router-dom"

  import { useContext, useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/action';
  const initState={
    email:"",
    password:""
  }

  

  export default function Login() {
    const [formState,setFormState]=useState(initState)

const{loginUser,logoutUser,authState}=useContext(AuthContext)

const handleChange=(e)=>{
  e.preventDefault()
  setFormState((prev)=>
  ({
    ...prev,
    [e.target.name]:e.target.value
  })

)
}

let Navigate=useNavigate()
let token=useSelector((e)=>e.auth.token)

let dispatch=useDispatch()

const handleSubmit=(e)=>{
e.preventDefault()

dispatch(login(formState))
if(token){
  Navigate('/')
}
}



const{email,password}=formState

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" name='email' value={email} onChange={handleChange} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name='password' value={password} onChange={handleChange}  />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <NavLink  to="/signup">Don't have Account</NavLink>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} onClick={(e)=>handleSubmit(e)} >
                  Sign in
                </Button>

                <Button
                  bg={authState.isAuth?'blue.400':'red.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} onClick={logoutUser} >
                  Sign out
                </Button>
              <NavLink to="/admin">  <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                 sign in as Admin
                </Button></NavLink>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }