import {
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();


  const increment = (id) => {
    dispatch({
      type: 'addToCart',
      payload:{id},
    })
  };
  const decrement = (id) => {
    dispatch({
      type: 'decrement',
      payload:id,
    })
  };
  const deleteHandler = (id) => {
    dispatch({
      type: 'deleteFromCart',
      payload:id,
    })
  };


  return (
    <Box
      display={"flex"}
      flexDirection={["column", "row"]}
      alignItems={"center"}
      justifyContent={"space-around"}
    >
      <VStack>
        {cartItems.length > 0 ? (
          cartItems.map((i, e) => (
            <CartItem
              key={e}
              imgSrc={i.imgSrc}
              name={i.name}
              price={i.price}
              qty={i.quantity}
              id={i.id}
              increment={increment}
              decrement={decrement}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <Heading py={'100px'}>No Items Yet</Heading>
        )}
      </VStack>
      <VStack>
        <Card position={"fixed"} top={"40%"} right={"6"} h={"auto"} w={"300px"}>
          <CardBody>
            <Heading size={"sm"} p={"2"}>
              Subtotal: ${"1212"}
            </Heading>
            <Heading size={"sm"} p={"2"}>
              Shipping: ${"1212"}
            </Heading>
            <Heading size={"sm"} p={"2"}>
              Tax: ${"1212"}
            </Heading>
            <Heading size={"md"} p={"2"}>
              Total: ${"1212"}
            </Heading>
          </CardBody>
        </Card>
      </VStack>
    </Box>
  );
};
const CartItem = ({id,name,price,qty,imgSrc,increment,decrement,deleteHandler}) => (
  <Card
    bgColor={"white"}
    shadow={"xl"}
    h={"200px"}
    w={"600px"}
    m={"6"}
    size={"lg"}
    key={id}
  >
    <CardBody
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Image h={"10"} w={"20"} m={"4"} objectFit={"contain"} src={imgSrc}></Image>
      <VStack>
        <Heading size={"sm"} noOfLines={"1"} my={"2"}>
          {name}
        </Heading>
        <Text>${price}</Text>
      </VStack>

      <HStack>
        <Button
          variant={"solid"}
          bgColor={"black"}
          color={"white"}
          onClick={()=>decrement(id)}
        >
          -
        </Button>
        <Text>{qty}</Text>
        <Button
          variant={"solid"}
          bgColor={"black"}
          color={"white"}
          onClick={()=>increment(id)}
        >
          +
        </Button>
      </HStack>

      <AiFillDelete onClick={()=>deleteHandler(id)} />
    </CardBody>
  </Card>
);
export default Cart;
