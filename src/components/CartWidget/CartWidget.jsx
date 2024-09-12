import { Flex, Text } from "@chakra-ui/react"
import { TbShoppingCartHeart } from "react-icons/tb";


export const CartWidget = () => {
    return (
        <Flex alignItems={"center"} height={"100%"} justifyContent={"center"} width={100}>
            <Text><TbShoppingCartHeart size={45} /></Text>
            <Text>0</Text>
        </Flex>
    )
}
