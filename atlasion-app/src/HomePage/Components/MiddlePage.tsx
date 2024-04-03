import * as React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Img,
  Tabs, TabList, Tab, TabPanels, Divider,TabPanel, Container,Grid,useMediaQuery,
} from "@chakra-ui/react";
import logo from "../../assets/HomePageIcon/WebsiteLogo.png";
import SplitWithImage, { AgileAndDevOps, Jira_service_management } from './TabData';

import careerLeft from "../../assets/HomePageIcon/CareersLeft.svg";
import careerRight from "../../assets/HomePageIcon/CareersRight.svg";

import castlight_logo from "../../assets/HomePageIcon/castlight_logo.svg"
import nasa_logo from "../../assets/HomePageIcon/nasa_logo.svg"
import { ChevronRightIcon } from "@chakra-ui/icons"





//HeroImage
export const VideoWithText: React.FC = () => {
  return (
    <Box m={["2rem", "4rem"]} position="relative" display={"flex"} justifyContent={"center"}  w={"90%"} overflow={"hidden"}>
      {/* Content */}
      <Box
        position="absolute"
        left={["0", "8%"]}
        top={["50%", "50%"]}
        transform="translateY(-50%)"
        textAlign={["left", "left"]}
        zIndex="1"
        p={[2, 4]}
        h={"auto"}
        w={["50%", "31%"]}
        maxW={["90%", "31%"]}
      >
        <Heading
          fontWeight={600}
          fontSize={["xl", "2xl", "3xl", "6xl"]}
        >
          <Img h={["1rem", "4.5rem"]} src={logo} alt={"website-logo"} />
          <Flex  flexDirection={"column"}>
          <Flex>
            <Text
              style={{
                display:"inline",
                color: "#1868DB",
                fontFamily: "Charlie",
              }}
              fontSize= {["1.5rem", "2rem", "7rem"]}
            >
              team
            </Text>
            <Text  fontSize= {["1.5rem", "2rem", "7rem"]} style={{ display:"inline", fontFamily: "Charlie" }}>'24</Text>
           </Flex>
            <Text
             fontSize= {["0.5rem", "1rem", "1.5rem"]}
             m={[0,"5px"]}
             style={{
                fontFamily: "Charlie",
                display: "block",
                color: "grey",
              }}
              color={"red.400"}
            >
              April 30 - May 2, 2024 | Las Vegas and digitally
            </Text>
          </Flex>
        </Heading>
        <Text
          as={"span"}
          color={"gray.500"}
          fontSize={["0.6rem", "1rem", "1.6rem"]}
          mt={[2,4]}
          w={"100%"}
          fontFamily={""}
        >
          Be the first to see how AI is powering the Atlassian portfolio to
          drive acceleration, efficiency, and excellence.
        </Text>
        <Flex mt={[2,6]}  justifyContent={["flex-start", "flex-start"]}>
          <Button
            size={"lg"}
            fontSize={["0.8rem","1.4rem"]}
            fontWeight={"normal"}
            px={[4, 6]}
            h={["2vh", "4vh"]}
            w={["5rem", "9rem"]}
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

//TabsFolder
export const TabsFolder = () => {
  
    return (
      <>
        <Tabs variant="soft-rounded">
          <Container maxW={'6xl'} mt={[7,12]}>
          <Box fontSize={["1rem","2rem"]} textAlign={"center"} color={"gray.500"} mb={[4,7]}>Atlassian solutions are designed for all types of work</Box>
          <TabList display="flex"  fontSize={["0.6rem","2rem"]} justifyContent={["space-evenly","space-between"]} columnGap={[2,6]} pl={[1,3]} pr={[1,3]}>
            <Tab
               w={["22vw","28vw"]}
               h={["4vh","12vh"]}
              _selected={{ bg: "#0065ff", color: "white" }}
              bg={"#deebff"}
              fontWeight={700}
              fontSize={["0.6rem","1.5rem"]}
              color={"#0052cc" }
             >
              Work Management
            </Tab>
            <Tab
             w={["22vw","28vw"]}
             h={["4vh","12vh"]}
              bg={"#deebff"}
              color={"#0052cc" }
              fontSize={["0.6rem","1.5rem"]}
              fontWeight={700}
              _selected={{ bg: "#0065ff", color: "white" }}
            >
              IT Service Management
            </Tab>
            <Tab
              w={["22vw","28vw"]}
              h={["4vh","12vh"]}
              bg={"#deebff"}
              color={"#0052cc"}
              fontSize={["0.6rem","1.5rem"]}
              fontWeight={700}
              _selected={{ bg: "#0065ff", color: "white" }}
            >
              Agile and DevOps
            </Tab>
          </TabList>
          </Container>
          <Container maxW={'7xl'} mt={12}>
          <TabPanels >
            <TabPanel color={"black"}>
              <SplitWithImage/>
            </TabPanel>
            <TabPanel color={"black"}>
              <Jira_service_management/>
            </TabPanel>
            <TabPanel color={"black"}>
              <AgileAndDevOps/>
            </TabPanel>
          </TabPanels>
          </Container>
        </Tabs>
        </>
    );
  };
  
//LogoPage
  export const Logo=()=>{
    return(
        <>
        <Container maxW={'6xl'}>
         <Flex flexDirection={"column"} rowGap={[3,6]}>
         <Box textAlign="center" fontSize={["0.7rem","1.5rem"]} fontWeight={500}>Join the 250,000+ companies that use our software to power team collaboration</Box>
         <Flex  justifyContent={"center"}  color="#2a6ed4" fontWeight="medium" _hover={{ transform: 'translateX(1px)', transition: 'ease-in-out 300ms'}} mb={[1,2]} >
            <Text textAlign="center" px="1" flexWrap="nowrap"  _hover={{ color: '#2a6ed4' }} >
            See all customers
            </Text>
            <ChevronRightIcon mt={1.5} _hover={{ transform: 'translateX(3px)', transition: 'ease-in-out 300ms'}} />
          </Flex>
          </Flex>
        </Container>
        <Flex w="100%"  h={["35vh","30vh"]} bgGradient="linear(to-b, #EDF4FF, #E0ECFF)"  >
        <Container maxW={'6xl'}   >
          <Flex mt={"5%"} alignItems={"center"} columnGap={8} justifyContent={"space-evenly"} wrap={"wrap"} flexDirection={["column","row"]} rowGap={4}>
            <Box w={["4rem","8rem"]}><Img src="https://wac-cdn.atlassian.com/dam/jcr:77c2f652-ab9b-4619-b175-c3f408c3e350/kiva.svg"  alt="Kiva_logo"/></Box>
            <Box w={["3rem","7rem"]}><Img src="https://wac-cdn.atlassian.com/dam/jcr:0a7dd09c-7f87-4bc9-8b65-318b0a41efb8/twitter.svg" alt="Twitter_logo"/></Box>
            <Box w={["4rem","9rem"]}><Img src="https://wac-cdn.atlassian.com/dam/jcr:46501297-a5e1-482a-9f8f-3718dd24376e/redfin.svg"  alt="RedFin_logo"/></Box>
            <Box  w={["4rem","7rem"]}><Img src={nasa_logo} alt="Nasa_logo" /></Box>
            <Box w={["4rem","8rem"]} ><Img src="https://wac-cdn.atlassian.com/dam/jcr:debe18ec-0a3d-4bfc-aa58-f11948d8d056/audi.svg" alt="Audi_logo"/></Box>
            <Box  w={["5rem","11rem"]}><Img src={castlight_logo} alt="CastLight_logo"/></Box>
          </Flex>
        </Container>
        </Flex>
        </>
    )
}


 //Card With Grids

interface BlogCardProps {
    heading: string;
    descriptiondetail: string;
    description: string;
    text:string;
    imageUrl: string;
  }
  



    export const Card: React.FC<BlogCardProps> = ({heading,descriptiondetail,description,imageUrl,text})=> {
    const [isHovered, setIsHovered] = React.useState<boolean>(false);
  
    return (
      <Box
        maxW={["16rem","25rem"]}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow={isHovered ? "xl" : "md"}
        transition="box-shadow 0.3s ease"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        cursor="pointer"
        data-aos="fade-up"
      >
        <Img  src={imageUrl}
          alt="image" />
        <Box p={["3","6"]}>
          <Text color="#091E42" fontWeight="semibold" textTransform="uppercase" fontSize={["1rem","1.3rem"]} letterSpacing="wide" textAlign={"center"}>
          {heading}
          </Text>
          <Heading mt="2" fontSize={["0.6rem","0.9rem"]} lineHeight="short" color="#6C798E" textAlign={"center"}>
            <Text as="span" >
              {descriptiondetail}
            </Text>{" "}
            <Divider/>
            <Text as="span" fontSize={["0.6rem","0.9rem"]} pl={"3%"}>
              {description}
            </Text>
          </Heading>
            <Text
              textAlign={"center"}
              color="#3F7DD9"
              lineHeight={["1.5rem","3rem"]}
              fontWeight="semibold"
              fontSize="md"
              _hover={{ textDecoration: "" }}
              transition="color 0.3s ease"
              mb={2}
              mt={2}
            >
              {text}
            </Text>
        </Box>
      </Box>
    );
  };


 export const GridCard: React.FC = () => {
    const [isHovered, setIsHovered] = React.useState<boolean>(false);
  
    return (
      <Container maxW={'6xl'} mt={[8,12]}>
      <Grid  gridGap={[3,6]} templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)"]}>
      <Box 
       maxW={["16rem","25rem"]}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow={isHovered ? "xl" : "md"}
      transition="box-shadow 0.3s ease"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      cursor="pointer"
      color="black"
      >
    <Flex flexDirection="column" mt={[7,14]} rowGap={6} pl={2}>
    <Text color="#2684ff" fontSize="1rem">EVENTS</Text>
    <Text color="#253858"  fontWeight={700} lineHeight={1}  fontSize={["2rem","2.25rem"]}>Hear from today's fearless builders and innovators</Text>
    <Text cursor="pointer" color="#0052cc" _hover={{ color: '#2a6ed4' }} fontFamily={"__Inter_20951f"} fontSize="0.9rem">Learn more</Text>
    </Flex>
     </Box>
      <Box
          maxW={["16rem","25rem"]}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow={isHovered ? "xl" : "md"}
        transition="box-shadow 0.3s ease"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        cursor="pointer"
      >
        <Img
          src={"https://wac-cdn.atlassian.com/misc-assets/webp-images/team24promobanner.webp-3262748562.webp"}
          alt="image"
          borderTopRadius="lg"
        />
      </Box>
      <Box
         maxW={["16rem","25rem"]}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow={isHovered ? "xl" : "md"}
        transition="box-shadow 0.3s ease"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        cursor="pointer"
      >
        <Img
          src={"https://wac-cdn.atlassian.com/misc-assets/webp-images/high-velocity.webp"}
          alt="image"
          borderTopRadius="lg"
        />
      </Box>
      </Grid>
      </Container>
    )
 }


export function GridListWith() {
  return (
    <Box p={4}>
      <Container maxW={'6xl'} mt={12}>
        <Grid  gridGap={6} templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)"]} >
          <Card
            heading={'Work Life'}
            imageUrl='https://wac-cdn.atlassian.com/misc-assets/webp-images/Blog_360x265%402x.webp'
            descriptiondetail={'Real-life advice, inspiration, and stories'}
            description={'stories from the working world today.'}
            text={"Read More"}
          />
          <Card
            heading={'Atlassian Team Playbook'}
            imageUrl='https://wac-cdn.atlassian.com/misc-assets/webp-images/Team%2520Playbook_360x265%402x.webp'
            descriptiondetail={'Solve common team challenges with'}
            description={'these group exercises.'}
            text={"Check team health"}
          />
          <Card
              heading={'Distributed Work'}
              imageUrl='https://wac-cdn.atlassian.com/misc-assets/webp-images/team_anywear_illo.webp'
              descriptiondetail={'Advance how your distributed teams'}
              description={'collaborate.'}
              text={"Our evidence-based approach"}
          />
        </Grid>
      </Container>
      <GridCard/>
    </Box>
    
  )
}

//PartAbove Footer

export const Career: React.FC = () => {
    const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");
    const [isSmallerThan1200] = useMediaQuery("(max-width: 1200px)");
  
    return (
      <Flex
        flexDirection={isSmallerThan768 ? "column" : "row"}
        rowGap={10}
        w="100%"
        bg="#ffffff"
        mb="30px"
        alignItems="center"
        justifyContent="center"
        py={isSmallerThan768 ? "1rem" : "0"}
      >
        {/* Left Section */}
        <Box
          w={isSmallerThan768 ? "100%" : "30%"}
          h={isSmallerThan768 ? "auto" : "100vh"}
          bgImage={`url(${careerLeft})`}
          bgPos={isSmallerThan768 ? "bottom center" : "left bottom"}
          bgRepeat="no-repeat"
          bgSize="cover"
          display="flex"
          alignItems="center"
          justifyContent="center"
  
        >
        </Box>
        <Box
          w="40%"
          h="100%"
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          mb={isSmallerThan768 ? "1rem" : "0"}
        >
          
          <Heading color="#508EFF" fontSize={isSmallerThan768 ? "1.5rem" : isSmallerThan1200 ? "1.8rem" : "2rem"} mt={isSmallerThan768 ? "1rem" : "50px"}>
            CAREERS
          </Heading>
          <Heading color="#253858" fontSize={isSmallerThan768 ? "1.8rem" : isSmallerThan1200 ? "2rem" : "2.5rem"} mt="10px">
            We can’t do it alone
          </Heading>
          <Text color="#253858" fontSize={isSmallerThan768 ? "1.2rem" : isSmallerThan1200 ? "1.5rem" : "1.6rem"} mt="10px" textAlign="center" fontWeight={400} lineHeight={isSmallerThan768 ? "20px" : "30px"}>
            We have an ambitious road ahead, and we’re <br/> looking for people to join our global team to help <br/> shape the future of Atlassian.
          </Text>
          <Button
            mt={["10px","20px"]}
            px="10px"
            py="5px"
            borderRadius="5px"
            bgColor="#0047B3"
            color="white"
            fontSize={isSmallerThan768 ? "1rem" : "1.2rem"}
            fontWeight="500"
            _hover={{ bg: "blue.500" }}
          >
            Join the team
          </Button>
        </Box>
        <Box
          w={isSmallerThan768 ? "100%" : "30%"}
          h={isSmallerThan768 ? "auto" : "100vh"}
          bgImage={`url(${careerRight})`}
          bgPos="right bottom"
          bgRepeat="no-repeat"
          bgSize="cover"
          display={isSmallerThan768 ? "none" : "flex"}
          alignItems="center"
          justifyContent="center"
        >
        </Box>
      </Flex>
    );
  };
  