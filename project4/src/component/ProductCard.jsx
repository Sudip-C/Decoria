import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";

  
 
  
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
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue'>
            Buy now
          </Button>
          <Button variant='ghost' colorScheme='blue'>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
   
    );
  }
  
  export default ProductCard;