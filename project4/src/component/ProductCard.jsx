import {Card, CardBody,Heading, Image,Text } from "@chakra-ui/react";

  function ProductCard({Title,image,Price,Description}) {
    
    return (
      
      <Card maxW='sm'>
        <Image
        src={image}
          alt={Title}
          borderTopRadius='lg'
        />
        <CardBody>
          <Heading size='md'>{Title.slice(0,15)}</Heading>
          <Text>
           {Description.slice(0,30)}
          </Text>
          <Text color='black.600' fontSize='2xl'>
            ₹{Price}
          </Text>
      </CardBody>
    </Card>
   
    );
  }
  
  export default ProductCard;