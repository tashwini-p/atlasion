import React, { useState, useEffect } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const NewCard: React.FC = () => {
  const images = [
    "https://wac-cdn.atlassian.com/misc-assets/webp-images/confluence-create-a-page.webp",
    "https://wac-cdn.atlassian.com/misc-assets/webp-images/confluence-share-it-with-your-team.webp",
    "https://wac-cdn.atlassian.com/misc-assets/webp-images/confluence-organize-your-work.webp",
  ];

  const cards = [
    {
      id: 1,
      content: "Start with Page",
      description:
        "Plan projects, take notes, and brainstorm. Let AI write your first draft.",
    },
    {
      id: 2,
      content: "Share with your teams",
      description:
        "Invite your teams to collaborate using real-time editing and inline comments.",
    },
    {
      id: 3,
      content: "Connect all your work",
      description:
        "Stay organized in dedicated workspaces, equipped with AI-powered search.",
    },
  ];

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
            <Text fontSize="xl">{card.content}</Text>
            <Text  textAlign="left" mt={2}>{card.description}</Text>
          </Box>
        ))}
      </Flex>
      <Box ml={{ base: 0, md: 4 }} w={{ base: "100%", md: "600px" }}>
        <Image
          src={images[currentCardIndex]}
          alt={`Image ${currentCardIndex}`}
          backgroundPosition={"center"}
          w="100%"
          h={{
            base: "90%",
            sm: "90%",
            md: "95%",
            lg: "95%",
            xl: "95%",
            "2xl": "95%",
          }}
        />
      </Box>
    </Flex>
  );
};

export { NewCard };
