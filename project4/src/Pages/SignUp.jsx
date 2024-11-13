  import {
    Flex, Box, FormControl, FormLabel, Input, Stack, Link, Button, Heading, Text, useColorModeValue,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import axios from 'axios';
  import {Link as NavLink} from "react-router-dom";
  import { useNavigate } from "react-router-dom";


  export default function SignUp() {
      const [formData,setFormData]=useState({name:'',email:'',password:''})
      
      const navigate=useNavigate()

      const handleChange=(e)=>{
        e.preventDefault()
        setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value
        }));
      }

      const handleSubmit=(e)=>{
          e.preventDefault()
          axios.post('https://decoria-backend.onrender.com/api/users/signup',formData)
          .then(
            (data)=>data.data.token?navigate('/login'):alert("smething wrong")
          )
          .catch(
            (err)=>alert(err.message)
          )
          }


    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign Up for your new account</Heading>
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
            <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  type="name" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input 
                name='email'
                value={formData.email}
                onChange={handleChange}
                type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input 
                name='password'
                value={formData.password}
                onChange={handleChange}
                type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'center'}>
                  {/* <Checkbox>Remember me</Checkbox> */}
                  <NavLink color={'blue.600'} to="/login" >Already have account</NavLink>
                </Stack>
                <Button
                onClick={(e)=>handleSubmit(e)}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign Up
                </Button>
              
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }