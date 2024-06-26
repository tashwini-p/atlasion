import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import "@fontsource-variable/open-sans";
import Footer from "../HomePage/Component/Footer";
import { Navbar } from "../HomePage/Component/Navbar";

const Jira: React.FC = () => {
  return (
    <>
    <Navbar/>
      <Box
        bg="rgb(9,30,66)"
        w={"100%"}
        pl={"5rem"}
        pt={7}
        pr={"-4rem"}
        color="white"
        height={500}
        display="flex"
        columnGap={8}
      >
        <Flex
          direction="column"
          justifyContent="center"
          marginLeft={100}
          fontSize={22}
          width={600}
          rowGap={"1.5rem"}
        >
          <Text style={{ fontFamily: "revert-layer" }} fontSize={"2.5rem"} fontWeight={700} pl={3}>
            Move fast, stay aligned,
            <br /> and build better - <br /> together
          </Text>
          <Text style={{ fontFamily: "revert-layer" }} pl={3}>
            The #1 software development tool used by agile teams
          </Text>
          <Button
            bg="rgb(255,171,0)"
            width={100}
            height={30}
            border="none"
            fontFamily="revert-layer"
            fontSize={16}
            padding="10px"
            ml={2}
            // borderRadius={"15px"}
          >
            Get it free
          </Button>
        </Flex>

        {/* Image */}
        <Flex justify="center" align="center" >
          <Image
            src="https://wac-cdn.atlassian.com/misc-assets/webp-images/JSW_ProductTour_DarkModeIllustration_Hero.webp"
            alt="Dan Abramov"
            height={500}
            width="100%"
          />
        </Flex>
      </Box>

      <Box
        bg="rgb(9,30,66)"
        w={"100%"}
        p={4}
        color="white"
        height={800}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
       
        position={"relative"}
      >
        <Flex as="h1" textAlign="center" fontFamily={"revert-layer"} position={"absolute"} top={"4rem"} fontSize={"1.5rem"}>
          All from a single source of truth
        </Flex>

        <Stack
          spacing={8}
          direction="row"
          align="center"
          position={"absolute"}
          top={"9rem"}
          fontFamily={`'Open Sans', sans-serif`}
        >
          <Button
            size="lg"
            borderRadius={90}
            height={"2.5rem"}
            width={"8rem"}
            border="none"
            fontFamily={"revert-layer"}
            fontSize={20}
            bg="rgb(87,217,163)"
            color={"white"}
          >
            Plan
          </Button>
          <Button
            size="lg"
            borderRadius={90}
            height={"2.5rem"}
            width={"8rem"}
            border="none"
            fontFamily={"revert-layer"}
            fontSize={20}
            bg="rgb(66,82,110)"
            color={"white"}
          >
            Track
          </Button>
          <Button
            size="lg"
            borderRadius={90}
            height={"2.5rem"}
            width={"8rem"}
            border="none"
            fontFamily={"revert-layer"}
            fontSize={20}
            bg="rgb(66,82,110)"
            color={"white"}
          >
            Release
          </Button>
          <Button
            size="lg"
            borderRadius={90}
            height={"2.5rem"}
            width={"8rem"}
            border="none"
            fontFamily={"revert-layer"}
            fontSize={20}
            bg="rgb(66,82,110)"
            color={"white"}
          >
            Report
          </Button>
          <Button
            size="lg"
            borderRadius={90}
            height={"2.5rem"}
            width={"8rem"}
            border="none"
            fontFamily={"revert-layer"}
            fontSize={20}
            bg="rgb(66,82,110)"
            color={"white"}
          >
            Automate
          </Button>
        </Stack>
      </Box>
      <Box
       // bg="rgb(9,30,66)"
        p={4}
        color="white"
        w={"100%"}
        height={600}
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop={-350}
        columnGap={8}
      >
        <Flex
          direction="column"
         
          marginTop={-500}
          fontSize={25}
          // textAlign="center"
          marginLeft={30}
          zIndex={4}
          

        >
          <Text as="h1" fontSize={40}>
            Plan
          </Text>
          <Text
            as="h5"
            fontFamily={"revert-layer"}
            fontSize={25}
          >
            {" "}
            Break the big ideas down into
          </Text>

          <Text
            as="h5"
            // marginTop="-40px"
            // marginLeft={140}
            fontFamily={"revert-layer"}
            fontSize={25}
          >
            {" "}
            manageable chunks across teams
          </Text>
          <Text
            as="h5"
            //marginTop="-40px"
            //marginLeft={157}
            fontFamily={"revert-layer"}
            fontSize={25}
          >
            with user stories, issues, and tasks.
          </Text>
        </Flex>

        <Flex justify="center" align="center" position={"relative"} top={"-14rem"}>
          <Image
            src="https://wac-cdn.atlassian.com/dam/jcr:49c215de-3b05-40f8-96e2-6dc65c70caa6/Board.png?cdnVersion=1187"
            alt="Dan Abramov"
            height={500}
            maxWidth="100%"
            mr={"7rem"}
          />
        </Flex>
      </Box>
      <Box
        bg="rgb(9,30,66)"
        w="100%"
        p={4}
        color="white"
        marginTop={"-17rem"}
        height={400}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {/* Contents */}
        <Text as="h1" align="center" fontFamily={"revert-layer"} mt={"6rem"} fontSize={"2rem"} fontWeight={700}>
          Easier than ever
        </Text>

        <Flex direction="row" align="center" fontSize={25} >
          <Flex align="center">
            <Image
              src="https://wac-cdn.atlassian.com/dam/jcr:ef95fe7f-398f-4690-83af-831ef07adf34/icon-templates.svg?cdnVersion=1216"
              width={100}
              height={100}
            />
          </Flex>

          <hr
            style={{
              width: "400px",
              height: "10px",
              border: "none",
              backgroundImage: "linear-gradient(to right, blue, white, green)",
              margin: "25px 0",
            }}
          />

          <Flex align="center">
            <Image
              src="https://wac-cdn.atlassian.com/dam/jcr:99363e04-3456-415d-b2e1-b311cc0a8444/icon-workflow.svg?cdnVersion=1216"
              width={100}
              height={100}
            />
          </Flex>
        </Flex>
      </Box>
      <Box
        bg="rgb(9,30,66)"
        w="100%"
        p={4}
        color="white"
        marginTop={-450}
        height={750}
        display="flex"
      >
        {/* Contents */}
        <Flex
          direction="column"
          justify="center"
          marginLeft={300}
          fontSize={24}
        >
          <Text
            as="h3"
            fontFamily={"revert-layer"}
            fontSize={24}
          >
            Templates give you a head start
          </Text>
          <Text
            as="p"
            fontFamily={"revert-layer"}
            fontSize={18}
          >
            Get started with ready-made templates.
          </Text>
        </Flex>
      </Box>
      
      <Box
        bg="black"
        w="20%"
        p={4}
        color="white"
        marginTop={-250}
        height={70}
        display="flex"
        marginLeft={550}
      >
        {/* Contents */}
        <Flex direction="row" justify="center" fontSize={18} marginTop={-150}>
          <Image
            src="https://wac-cdn.atlassian.com/dam/jcr:9567a40e-6541-4905-bf08-dfe201aa80e7/illustrations-spot-Agile.svg?cdnVersion=1194"
            marginLeft={-80}
            width={"17.5rem"}
          />

          <Flex direction="column" justify="center" ml={30}>
            <Text fontSize="1rem">Scrum</Text>
            <Text
              as="p"
              fontSize="1rem"
              fontFamily={"revert-layer"}
            >
              Learn more
            </Text>
          </Flex>
        </Flex>
      </Box>

      <Box
        w="20%"
        p={4}
        color="white"
        // marginTop={10}
        height={70}
        display="flex"
        marginLeft={450}
      >
        {/* Contents */}
        <Flex
          direction="row"
          justify="center"
          marginLeft={100}
          fontSize={20}
          marginTop={-150}
        >
          <Image
            src="https://wac-cdn.atlassian.com/dam/jcr:7d0e6516-361d-4ec3-bd0f-22d7c7d105b4/illustrations-spot-JIRA%20Board.svg?cdnVersion=1194"
            marginLeft={-80}
            marginTop={5}
            width="17rem"
          />

          <Flex direction="column" justify="center"  marginLeft={9} mt={"1rem"}>
            <Text fontSize="1rem">Kanban</Text>
            <Text as="p" fontSize="1rem">
              Learn more
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box
        bg="black"
        w="20%"
        p={4}
        color="white"
        marginTop={10}
        height={70}
        display="flex"
        marginLeft={300}
      >
        {/* Contents */}
        <Flex
          direction="row"
          justify="center"
          marginLeft={160}
          fontSize={20}
          marginTop={-140}
        >
          <Image
            src="https://wac-cdn.atlassian.com/dam/jcr:a2b254dd-146a-4ea9-9ae0-ec5d250a9cbf/JSW_ProductTour_DarkModeIllustration_BugTracking_Spot.svg?cdnVersion=1194"
            marginLeft={"-8rem"}
           // marginTop={5}
            h={"8rem"}
            w={"4.7rem"}
          />

          <Flex direction="column" justify="center" ml={30} mt={"-2rem"}>
            <Text fontSize="1rem" fontFamily={"revert-layer"}>
              Bug tracking
            </Text>
            <Text
              as="p"
              fontSize="1rem"
              fontFamily={"revert-layer"}
            >
              Learn more
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box
        bg="rgb(9,30,66)"
        w="20%"
        p={4}
        color="white"
        marginTop={10}
        height={70}
        display="flex"
        marginLeft={300}
      >
        {/* Contents */}
        <Flex
          direction="row"
          justify="center"
          marginLeft={30}
          fontSize={20}
          marginTop={"-11rem"}
        >
          <Image
            src="https://wac-cdn.atlassian.com/dam/jcr:6505f1fe-f628-460f-987b-c07fab309341/devops-spot-logo.svg?cdnVersion=1194"
         //   marginLeft={-10}
            marginTop={5}
            h={"9rem"}
            w={"4.7rem"}
          />

          <Flex direction="column" justify="center" ml={30} mt={"-1.5rem"}>
            <Text fontSize="1rem">DevOps</Text>
            <Text
              as="p"
              fontSize="1rem"
              fontFamily={"revert-layer"}
            >
              Learn more
            </Text>
          </Flex>
        </Flex>
      </Box>

      <Box
        bg="rgb(9,30,66)"
        w="100%"
        p={4}
        color="white"
        marginTop={-490}
        height={550}
      >
        {/* Contents */}
        <Flex
          direction="column"
          justify="center"
          marginLeft={800}
          fontSize={25}
          mt={"-2.9rem"}
        >
          <Text as="h3" fontFamily={"revert-layer"} fontSize={24}>
            Then customize as you grow
          </Text>
          <Text as="p"  fontFamily={"robot"} fontSize={18}>
            Jira adapts to the way you work, not the other way around. Start{" "}
            <br />
            simple, customize as you go.
          </Text>
          
          
        </Flex>

        {/* Image */}
        <Flex
          justify="end"
          align="end"
          height={45}
          width={500}
          marginLeft={650}
          marginTop={"23rem"}
        >
          <Image
            src="https://wac-cdn.atlassian.com/misc-assets/webp-images/JSW_ProductTour_DarkModeIllustration_Workflow.webp"
            alt="Dan Abramov"
            height={400}
            width="70%"
            // marginTop={-70}
          />
        </Flex>
      </Box>

      <Box w="100%" p={4} mt={"5rem"} height={400} display="flex">
        <Grid
          h="500px"
          w="800px"
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={-31}
          marginLeft={100}
        >
          <GridItem rowSpan={1} colSpan={1}>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlLRYD2HZXLVkqVegRBoVDws6G_97wwhiZrsYfe1MAcXwuTPeA"
              borderRadius={20}
              h="100px"
              w="100px"
              boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            ></Image>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Image
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQjDd_AD03l0nKuWav3BPfx4j8Cf8ZLDBUsb1SobOcUNhO2-lEp"
              borderRadius={20}
              h="100px"
              w="100px"
              boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            ></Image>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Image
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQgIVtmex-aWK3oxkqywux-uM6Mwg2aFMN-dwpMaAw6uGyB_NCz"
              borderRadius={20}
              h="100px"
              w="100px"
              boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            ></Image>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Image
              src="data:image/png;base64,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"
              borderRadius={20}
              h="100px"
              w="100px"
              boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            ></Image>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZYHew_CLFDAv8jYs13i0BEVcc74rHjbOxeElCnquIjDmmp-K"
              borderRadius={20}
              h="100px"
              w="100px"
              boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            ></Image>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4d1ExhKdRaMfZGn7U-MDXEAFio0ZOmrQmZKO9YTcgdW8LAtju"
              borderRadius={20}
              h="100px"
              w="100px"
              boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            ></Image>
          </GridItem>

          <GridItem rowSpan={1} colSpan={1}>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAvMxO8VgK2PYWMVM7K6miAvYWlXCzOv3_7CGGw_JT2-IOd8uN"
              borderRadius={20}
              h="100px"
              w="100px"
              boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            ></Image>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Image
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSUB60eje6F6wEPnE-gP8lhQakhMmHm9OfdROutcFSOHeEC3hUz"
              borderRadius={20}
              h="100px"
              w="100px"
              boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            ></Image>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Image
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQPAAfqBZiO3iNnEFqpwYkWdxvf87uClyuM7a9BF_bWU_b3qzzH"
              borderRadius={20}
              h="100px"
              w="100px"
              boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            ></Image>
          </GridItem>
        </Grid>

        <Box
          p={4}
           marginTop={"4rem"}
          height={200}
          display="flex"
          width="40%"
          marginLeft={50}
        >
          {/* Contents */}
          <Flex
            direction="column"
            justify="center"
            marginLeft={-100}
            fontSize={20}
          >
            <Text as="h1" whiteSpace="nowrap" fontFamily={"revert-layer"} fontWeight={700} fontSize={"2rem"}>
              We believe in open relationships
            </Text>
            <Text
              as="p"
              fontFamily={"revert-layer"}
              fontSize={22.4}
            >
              If your team uses it, we integrate with it. Easily add your tools
              from the Atlassian Marketplace, keeping Jira as your central
              source of truth.
            </Text>
            <Button
              color="rgb(1,82,204)"
              width={180}
              bg="white"
              border="1px solid rgb(1,82,204)"
              padding="8px"
              borderRadius={5}
              fontSize={16}
              marginLeft={150}
              mt={"1.5rem"}
              fontFamily={"revert-layer"}
            >
              Explore Integrations
            </Button>
          </Flex>
        </Box>
      </Box>
      <Box
        bg="rgb(9,30,66)"
        w="100%"
        p={4}
        color="white"
        marginTop={40}
        height={900}
        display="flex"
      >
        {/* Contents */}
        <Flex justify="center" align="center" w="50%" marginLeft={100} mt={"-1rem"}>
          <Image
            src="https://wac-cdn.atlassian.com/dam/jcr:7eb430e2-e868-4f2d-973d-b5d6314e3d8d/devops-diagram-compressed.png?cdnVersion=1195"
            alt="Dan Abramov"
            height={700}
            width="900px"
            marginLeft={-20}
          />
        </Flex>

        <Flex direction="column" justify="center" >
          <Text as="h2" fontSize={41} fontWeight={700}>
            Let developers focus on <br />
            code
          </Text>
          <Text as="p" fontSize={20} mt={"1rem"}>
            Developers want to focus on code, not update <br />
            issues. We get it! Open DevOps makes it easier to do <br />
            both regardless of the tools you use. Now <br />
            developers can stay focused and the business can <br /> stay
            aligned.
          </Text>
          <Button
            colorScheme="blue"
            bg="rgb(9,30,66)"
            width={"10rem"}
            height={"3rem"}
            mt={"1rem"}
            border="1px solid"
            color="white"
           // padding={20}
            fontSize={14}
           // borderRadius={5}
          >
            Explore Open DevOps
          </Button>
          <Text as="p" marginTop={"2rem"} fontSize={16}>
            HOW CUSTOMERS ARE BENEFITING.
          </Text>
          <Image
            src="https://wac-cdn.atlassian.com/dam/jcr:c137f24d-10a9-473e-bbcc-0fababfb9857/FLO_logo_horizontal_white%201.png?cdnVersion=1196"
            width="10rem"
            h="5rem"
            mt={"1rem"}
          />
          <Text as="h2" fontSize={36} mt={"1rem"} fontWeight={600}>
            900%
          </Text>
          <Text as="h2"  fontSize={25} mt={"0.5rem"} fontWeight={600}>
            increase in deployments
          </Text>
          <Text as="h2" fontSize={36} fontWeight={600}>
            50%
          </Text>
          <Text as="h2" fontSize={25} fontWeight={600}>
            decrease in cycle time
          </Text>
        </Flex>
      </Box>
      <Box w="90%" p={4} marginTop={100} height={500} display="flex">
        {/* Contents */}
        <Flex
          direction="column"
          justify="center"
          marginLeft={200}
          fontSize={25}
          w={"30%"}
        >
          <Image
            src="https://wac-cdn.atlassian.com/dam/jcr:aa8f5b1f-b8ac-4d6e-9e7c-abe573b68164/number-one.svg?cdnVersion=1198"
            height={300}
            width={300}
          ></Image>
          <Text  color={"#42526e"} fontSize={34} fontWeight={700} mt={"1rem"}>
            Why Jira is the #1 tool recommended by agile teams.*
          </Text>
          <Text as="p" fontSize={18} mt={"2rem"}>
            Trusted by more than 100,000 organizations, Jira Software comes
            out-of-the-box with the features and best practices agile teams need
            to develop and evolve their agile practices.
          </Text>
          <Text as="p" color={"#42526e"} fontSize={18} mt={"1.5rem"} fontWeight={600}>
            *2021 State of Agile Report
          </Text>
        </Flex>

        {/* Image */}
        <Grid
          h="500px"
          w="900px" 
          templateColumns="repeat(2, 1fr)"
          rowGap={"1rem"}
          columnGap={"1.2rem"}
          marginLeft={100}
        >
          <GridItem rowSpan={1} colSpan={1} boxShadow={"md"} p={4}>
            <Image
              src="https://wac-cdn.atlassian.com/dam/jcr:c30fba51-a9ab-4815-ad95-83e3f7582349/resource-agile.png?cdnVersion=1198"
              h="200px"
              w="350px"
            />
            <Text color={"blue"} fontSize={18} mt={"0.5rem"}>
              Learn agile best practices
            </Text>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} boxShadow={"md"} p={4}>
            <Image
              src="https://wac-cdn.atlassian.com/misc-assets/webp-images/resource-playbook.webp"
              h="200px"
              w="350px"
            />
            <Text color={"blue"} fontSize={18} mt={"0.5rem"}>
              Team Playbook
            </Text>
          </GridItem>
          
          <GridItem rowSpan={1} colSpan={1} boxShadow={"md"} p={4}>
            <Image
              src="https://wac-cdn.atlassian.com/misc-assets/webp-images/resource-community.webp"
              h="200px"
              w="350px"
            />
            <Text color={"blue"} fontSize={18} mt={"0.5rem"}>
            Jira Software community
            </Text>
          </GridItem>
         
          <GridItem rowSpan={1} colSpan={1} boxShadow={"md"} p={4}>
            <Image
              src="https://wac-cdn.atlassian.com/dam/jcr:1de028c2-f441-40e9-b3ee-721e35e4a649/resource-devops.png?cdnVersion=1198"
              h="200px"
              w="350px"
            />
            <Text color={"blue"} fontSize={18} mt={"0.5rem"}>
            Learn DevOps best practices
            </Text>
          </GridItem>
          
        </Grid>
      </Box>
      <Box
        bg="rgb(9,30,66)"
        w="100%"
        p={4}
        color="white"
        marginTop={130}
        height={400}
        display="flex"
      >
        <Flex
          direction="column"
          justify="center"
          marginLeft={150}
          fontSize={25}
          marginTop={-100}
        >
          <Text fontSize={36} fontWeight={700}>
            Built for teams of 1 to 35,000
          </Text>
          <Text  marginTop={5} fontSize={20}>
            A growing team doesn’t need to mean growing pains. With <br />
            best-of-breed features, security, privacy, and the right tool for{" "}
            <br />
            every step of your journey - Jira Software allows you to scale{" "}
            <br />
            without friction - regardless of your company size.
          </Text>
        </Flex>
      </Box>

      <Box
        bg="rgb(9,30,66)"
        w="100%"
        p={4}
        color="white"
        marginTop={-50}
        height={200}
        display="flex"
      >
        <Flex direction="row" gap={100} marginLeft={200}>
          <Image
            src="https://wac-cdn.atlassian.com/dam/jcr:b1013bac-01ff-4be2-827a-8a16b76d0a4b/JSW%20free-responsive.png?cdnVersion=1203"
            alt="Dan Abramov"
            height={130}
            width="15%"
          />
          <Image
            src="https://wac-cdn.atlassian.com/dam/jcr:5cae308d-24a4-40d0-8fe2-ce7f46cd7a02/JSW%20sign-responsive.png?cdnVersion=1203"
            alt="Dan Abramov"
            height={130}
            width="15%"
          />
          <Image
            src="https://wac-cdn.atlassian.com/dam/jcr:c36a7707-da80-46a7-9cc2-38abca992964/Prem%20sign-responsive.png?cdnVersion=1203"
            alt="Dan Abramov"
            height={130}
            width="15%"
          />
          <Image
            src="https://wac-cdn.atlassian.com/dam/jcr:e4223ecb-8867-46cb-b73d-4218e4807778/Ent%20sign-responsive.png?cdnVersion=1203"
            alt="Dan Abramov"
            height={130}
            width="15%"
          />
          <Image
            src="https://wac-cdn.atlassian.com/dam/jcr:c177344d-7e41-4576-b4eb-85b346d6653b/JA%20sign-responsive.png?cdnVersion=1203"
            alt="Dan Abramov"
            height={130}
            width="15%"
          />
        </Flex>
      </Box>
      <Box
        bg="rgb(9,30,66)"
        w="100%"
        p={4}
        color="white"
        height={200}
        mt={"-1rem"}
        display="flex"
      >
        <Flex
          justify="center"
          marginLeft={"9rem"}
          fontSize={18}
          columnGap={3}
        > <Box  w={"14rem"} h={"5rem"}>
          <Text textAlign={"center"}>
            Jira Software free forever <br />
            for teams up to 10
          </Text>
        </Box>

        <Box  w={"14rem"} h={"5rem"} >
          <Text textAlign={"center"}>
          Jira Software Standard for <br />
            growing teams
          </Text>
        </Box>
          
        <Box  w={"14rem"} h={"5rem"} >
          <Text textAlign={"center"}>
          Scale across teams with <br />
            Jira Software Premium
          </Text>
        </Box>
        <Box  w={"14rem"} h={"5rem"} >
          <Text textAlign={"center"}>
          Connect and accelerate <br /> your entire enterprise
          </Text>
        </Box>
        <Box  w={"14rem"} h={"5rem"}>
          <Text textAlign={"center"}>
          Enterprise agility with Jira <br />
            Align 
          </Text>
        </Box>
        </Flex>
      </Box>
      <Box
        bg="rgb(9,30,66)"
        w="100%"
        p={4}
        color="white"
        height={150}
        display="flex"
        marginTop={-50}
       
      >
        <Center flex={1} mt={"2rem"} h={"0rem"}>
          <Flex direction="column" justify="center" alignItems="center">
            <Text  fontSize={32} fontWeight={700}>
              Get Started with Jira Software
            </Text>
            <Button
              bg="rgb(255,171,0)"
              border={"none"}
              mt={5}
              fontSize={16}
              borderRadius={5}
              w={110}
            >
              Get it free
            </Button>
            <Text as="p" mt={10} fontSize={20}>
              See features
            </Text>
          </Flex>
        </Center>
      </Box>
      <Footer/>
    </>
  );
};

export default Jira;
