import React, { useState } from "react";
import {
  Box,
  Button,
  Image,
  Flex,
  Text,
} from "@chakra-ui/react";

interface ImageData {
  src: string;
  name: string;
  content: string;
  designation: string;
}
const buttons: String[] = [
  "Launch Darkly",
  "steel Dynamics",
  "Turnitin",
  "Warby Parker",
];
const images: ImageData[] = [
  {
    src: "https://wac-cdn.atlassian.com/dam/jcr:37d1ea0d-43c6-486b-aa51-a39c2426a1ec/jonathan-nolen.png?cdnVersion=1528",
    name: "Launch Darkly",
    content:
      "“Atlas stops my stakeholders from feeling they don’t know what’s going on, which makes it easy to champion it at my company.”",
    designation: "Jonathan Nolen, SVP of Engineering at LaunchDarkly",
  },
  {
    src: "https://wac-cdn.atlassian.com/dam/jcr:185989f5-c894-46a8-a69d-55666d4ae1c1/Jeremy%20Edwards%20Photo@2x.png?cdnVersion=1528",
    name: "steel Dynamics",
    content:
      "“Our leaders find deep value in how Atlas helps deliver the human-to-human, curated story to supplement the data.”",
    designation: "Jeremy Edwards, Leadership Development, Steel Dynamics",
  },
  {
    src: "https://wac-cdn.atlassian.com/dam/jcr:ba0ab737-541b-49a4-8144-5eabe628a7cf/kim-hanson.png?cdnVersion=1528",
    content:
      "“Atlas is a HUGE win for my global team. Any stakeholder can follow projects. No more, ‘Hey, what’s happening with Project X?’.”",
    name: "Turnitin",

    designation: "Kim Hanson, VP of Product Engineering at Turnitin",
  },
  {
    src: "https://wac-cdn.atlassian.com/dam/jcr:35bb5336-e1ff-482b-9b04-f0f77eac2560/corey-frederick.png?cdnVersion=1528",
    content:"“Atlas stops my stakeholders from feeling they don’t know what’s going on, which makes it easy to champion it at my company.”",
    name: "Warby Parker",
    designation: "Corey Frederick, Product Manager at Warby Parker"
  },
];

export const ImageGallery: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleButtonClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <Flex direction="column" align="center" mt={8} mb={"50px"}>
      <Flex mb={4} gap={"10px"} direction={{
            base: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}>
        {buttons.map((ele, index) => (
          <Button key={index} mr={2} onClick={() => handleButtonClick(index)}>
            {ele}
          </Button>
        ))}
      </Flex>
      <Flex width={"80%"} margin={"auto"} gap={"40px"} direction={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}>
        <Image
        rounded={"20px"}
        height={{
            base: "200px",
            sm: "300px",
            md: "400px",
            lg: "300px",
            xl: "300px",
            "2xl": "300px",
          }}
          width={{
            base: "350px",
            sm: "100%",
            md: "80%",
            lg: "50%",
            xl: "50%",
            "2xl": "50%",
          }}
          ml={{
            base: "0px",
            sm: "0px",
            md: "80px",
            lg: "0%",
            xl: "0%",
            "2xl": "0%",
          }}
          backgroundPosition={"cover"}
          src={images[currentImageIndex].src}
          alt={`Image ${currentImageIndex + 1}`}
        />
        <Box color={"black"} 
        height={{
            base: "350px",
            sm: "250px",
            md: "250px",
            lg: "250px",
            xl: "250px",
            "2xl": "250px",
          }}
          width={{
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "80%",
            xl: "80%",
            "2xl": "80%",
          }}
          borderRadius={"20px"} padding={"20px"} bg={"white"}mt={2} display={"flex"} justifyContent={"center"}  alignItems={"center"} flexDirection={"column"}>
            <Text textAlign={"left"}fontSize={"xl"} >{images[currentImageIndex].name}</Text>
            <Box width={"80%"} margin={"auto"}>
            <Text textAlign={"left"}  fontSize={{
              base: "15px",
              sm: "15px",
              md: "xl",
              lg: "2xl",
              xl: "2xl",
              "2xl": "2xl",
            }}>{images[currentImageIndex].content}</Text>
            </Box>
            <Box width={"80%"} margin={"auto"}>
            <Text textAlign={"left"} fontSize={{
              base: "14px",
              sm: "14px",
              md: "xl",
              lg: "xl",
              xl: "xl",
              "2xl": "xl",
            }}>{images[currentImageIndex].designation}</Text>
        </Box>
        </Box>
      </Flex>
    </Flex>
  );
};
