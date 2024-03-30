import * as React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Img,
} from "@chakra-ui/react";
// import logo from "../assets/WebsiteLogo.png";



export default function CallToActionWithVideo() {
  return (
    <Box  m={"4rem"} position="relative" display={"flex"} justifyContent={"center"} bg={"pink"} w={"90%"} overflow={"hidden"}>
      {/* Content */}
      <Box
        position="absolute"
        left="4.7%"
        top="50%"
        transform="translateY(-50%)"
        textAlign="left"
        zIndex="10"
        p={4}
        h={"80vh"}
        w={"31%"}
        
      >
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        >
          <Img h={"4.5rem"} src={logo} alt={"website-logo"} />
          <Box>
            <span
              style={{
                color: "#1868DB",
                fontSize: "7rem",
                fontFamily: "Charlie",
              }}
            >
              team
            </span>
            <span style={{ fontSize: "7rem", fontFamily: "Charlie" }}>'24</span>

            <span
              style={{
                fontFamily: "Charlie",
                fontSize: "1rem",
                display: "block",
                color: "grey",
                margin: "5px",
              }}
              color={"red.400"}
            >
              April 30 - May 2, 2024 | Las Vegas and digitally
            </span>
          </Box>
        </Heading>
        <Text
          as={"span"}
          color={"gray.500"}
          fontSize={"1.6rem"}
          mt={4}
          w={"100%"}
          fontFamily={""}
        >
          Be the first to see how AI is powering the Atlassian portfolio to
          drive acceleration, efficiency, and excellence.
        </Text>
        <Flex mt={6} align={"center"} justifyContent="flex-start">
          <Button
            size={"lg"}
            fontWeight={"normal"}
            px={6}
            h={"4vh"}
            w={"7.2rem"}
            colorScheme={"#0C66E4"}
            bg={"#0C66E4"}
            _hover={{ bg: "#1A7ED5" }}
          >
            Learn More
          </Button>
        </Flex>
      </Box>
      {/* Video */}
      <Box flex="1" position="relative">
        <video
          style={{ backgroundColor: "red" }}
          width="100%"
          autoPlay
          loop
          muted
        >
          <source
            src="https://wac-cdn.atlassian.com/misc-assets/webp-images/CSD-8431-FY24-Team-24-Animated-Website-Hero_v03.webm"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </Box>
    </Box>
  );
}
