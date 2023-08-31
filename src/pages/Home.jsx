import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  HStack,
  Heading,
  Image,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import img1 from "../assets/bannerImg/1.png";
import img2 from "../assets/bannerImg/2.png";
import img3 from "../assets/bannerImg/3.png";
import img4 from "../assets/bannerImg/4.png";
import { useDispatch } from "react-redux";

const Home = () => {
  const toast = useToast();
  const dispatch = useDispatch();

  const ProductArr = [
    {
      name: "iPhone 13 Pro Max",
      price: "1299$",
      imgSrc: `${img1}`,
      id: "1",
    },
    {
      name: "iPhone 12 Pro ",
      price: "1100$",
      imgSrc: `${img3}`,
      id: "2",
    },
    {
      name: "iPhone 14 Pro Max",
      price: "1399$",
      imgSrc: `${img2}`,
      id: "3",
    },
    {
      name: "iPhone 13",
      price: "1099$",
      imgSrc: `${img4}`,
      id: "4",
    },
  ];

  const addToCart = (options) => {
    dispatch({
      type: "addToCart",
      payload: options,
    });

    toast({
      title: 'Item Added',
      description: "We've added your item.",
      status: 'success',
      duration: 2000,
      isClosable: false,
    });
  };


  return (
    <Box>
      <VStack>
        {" "}
        <Heading size={["xl", "4xl"]} my={["3", "6"]} textAlign={"center"}>
          Top Products
        </Heading>
        <HStack
          w={"full"}
          wrap={"wrap"}
          py={["2", "8"]}
          alignItems="center"
          justifyContent="center"
        >
          {ProductArr.map((i) => (
            <Card
              bgColor={"white"}
              shadow={"xl"}
              h={"64"}
              w={"52"}
              m={"6"}
              size={"lg"}
              key={i.id}
            >
              <CardBody
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  h={"10"}
                  w={"20"}
                  m={"4"}
                  objectFit={"contain"}
                  src={i.imgSrc}
                ></Image>
                <Heading size={"sm"} noOfLines={"1"} my={"2"}>
                  {i.name}
                </Heading>
                <Text>{i.price}</Text>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    addToCart({
                      id: i.id,
                      name: i.name,
                      imgSrc: i.imgSrc,
                      quantity: 1,
                      price:i.price
                    })
                  }
                >
                  Add to cart
                </Button>
              </CardBody>
            </Card>
          ))}
        </HStack>
      </VStack>

      <Divider />
      <VStack>
        {" "}
        <Heading size={["xl", "4xl"]} my={["3", "6"]} textAlign={"center"}>
          Best Product
        </Heading>{" "}
        <HStack
          w={"full"}
          wrap={"wrap"}
          py={["2", "16"]}
          alignItems="center"
          justifyContent="center"
        >
          {ProductArr.map((i) => (
            <Card
              bgColor={"white"}
              shadow={"xl"}
              h={"64"}
              w={"52"}
              m={"6"}
              size={"lg"}
              key={i.id}
            >
              <CardBody
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  h={"10"}
                  w={"20"}
                  m={"4"}
                  objectFit={"contain"}
                  src={i.imgSrc}
                ></Image>
                <Heading size={"sm"} noOfLines={"1"} my={"2"}>
                  {i.name}
                </Heading>
                <Text>{i.price}</Text>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    addToCart({
                      id: i.id,
                      name: i.name,
                      imgSrc: i.imgSrc,
                      quantity: 1,
                      price:i.price
                    })
                  }
                >
                  Add to cart
                </Button>
              </CardBody>
            </Card>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

export default Home;
