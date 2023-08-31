import { Button, HStack, Stack, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  const buttonSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <Stack
      bgColor={"blackAlpha.800"}
      px={["2", "6"]}
      py={["2", "4"]}
      display={"flex"}
      flexDirection={"row"}
      shadow={"base"}
      w={"full"}
      spacing={["1", "5"]}
      wrap={["wrap", "nowrap"]}
      justifyContent={["space-evenly", "space-between"]}
    >
      <HStack>
        <Button variant={"unstyled"} color={"white"} size={buttonSize}>
          <Link to={"/"}>Home</Link>
        </Button>
      </HStack>

      <HStack>
        <Button variant={"unstyled"} color={"white"} size={buttonSize}>
          <Link to={"/cart"}>
            <BsCart3 size={"20px"} />
          </Link>
        </Button>
      </HStack>
    </Stack>
  );
};

export default Header;
