import {
    Box,
   
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
   
  
  } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
  import { MdLocalShipping } from 'react-icons/md';
import { useParams } from 'react-router-dom';
  import axios from "axios"
import { AuthContext } from '../context/AuthContext';
import { API } from '../API/api';
import { useDispatch } from 'react-redux';

  export default function SingleProduct() {

const{id}=useParams()

const[singleData,setSingleData]=useState({})
const{Add_to_Cart,cart,wishlist,Add_to_Wishlist}=useContext(AuthContext)

const dispatch=useDispatch()

const Single=(id)=>{
    axios.get(`${API}/products/${id}`)
    .then((res)=>{
      console.log(res)
      setSingleData(res.data)})
      .catch((err)=>{
        console.warn(err)
      })
}

const AddToCart=()=>{
Add_to_Cart(singleData);
  localStorage.setItem("item",JSON.stringify(cart))
  alert("Product added to cart succesfully.")
  
}

const AddTowishlist=()=>{
  Add_to_Wishlist(singleData);
  localStorage.setItem("wishlist",JSON.stringify(wishlist))
  alert("Product added to wishlist.")
}

useEffect(()=>{Single(id)},[id])

const{Title,image,Category,Price,Description}=singleData

    return (
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={image
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
               {Title}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={600}
                fontSize={'2xl'}>
               ₹ {Price}
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
               <Text fontSize={'md'}>
                Category : {Category}
               </Text>
                <Text fontSize={'lg'}>
                 {Description}
                </Text>
              </VStack>
              
              
            </Stack>
  
            <Button
            onClick={AddToCart}
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
                
              }}>
              Add to cart
            </Button>
            <Button
            onClick={AddTowishlist}
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Add to WishList
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }