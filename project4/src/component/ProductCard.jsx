import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
 
  
  function ProductCard({Title,image,Price,Category}) {
    
    return (
      
      <Card maxW='sm'>
      <CardBody>
        <Image
        src={image}
          alt={Title}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{Title.slice(0,15)}</Heading>
          <Text>
           {Category}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            ₹{Price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='100'>
          <Button variant='outline' size="md" colorScheme='blue'>
          <MdOutlineAddShoppingCart />
          </Button>
          <Button variant='outline' size="md"  colorScheme='red'>
          <CiHeart />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
   
    );
  }
  
  export default ProductCard;