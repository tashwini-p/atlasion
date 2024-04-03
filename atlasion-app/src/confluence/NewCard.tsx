import React, { useState, useEffect } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { CardInfo } from "../Utils/interfaces";
interface Props {
  images: string[];
  cards: CardInfo[];
}
const NewCard: React.FC<Props> = ({images,cards}) => {
 
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      alignItems="center"
      mt={10}
      gap={"40px"}
      justifyContent="space-evenly"
      height={"auto"}
      width={{
        base: "90%",
        sm: "90%",
        md: "95%",
        lg: "95%",
        xl: "95%",
        "2xl": "95%",
      }}
      margin={"auto"}
    >
      <Flex direction="column" gap={"20px"}>
        {cards.map((card, index) => (
          <Box
            key={card.id}
            bg={currentCardIndex === index ? "white" : "transparent"}
            p={4}
            borderRadius="md"
            boxShadow={currentCardIndex === index ? "md" : "none"}
            transition="background-color 0.3s ease, box-shadow 0.3s ease"
            _hover={{
              bg: "white",
              boxShadow: "md",
            }}
            mb={{ base: 4, md: 0 }}
            mr={{ base: 0, md: 4 }}
            w={{ base: "100%", md: "auto" }}
            maxW={{ base: "100%", md: "400px" }}
          >
            <Text fontWeight={"medium"} fontSize="2xl">{card.content}</Text>
            <Text fontSize="17px" textAlign="left" mt={2}>{card.description}</Text>
          </Box>
        ))}
      </Flex>
      <Box  w={{ sm: "90%",
        md: "95%",
        lg: "95%",
        xl: "95%",
        "2xl": "95%", }}>
        <Image
          src={images[currentCardIndex]}
          alt={`Image ${currentCardIndex}`}
          backgroundPosition={"center"}
          w="100%"
          
        />
      </Box>
    </Flex>
  );
};

export { NewCard };
