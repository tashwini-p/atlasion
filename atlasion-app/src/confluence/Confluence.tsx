import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Link,
  Stack,
  Grid, GridItem
} from "@chakra-ui/react";

const Confluence = () => {
  return (
    <Box
      //  bg={{
      //   base: 'gray',
      //   sm: 'pink',
      //   md: 'red',
      //   lg:"yellow" ,
      //     xl: 'cyan',
      //     '2xl': 'blue',
      // }}
      textAlign={"center"}
      width={"100%"}
      bgGradient="linear(to-b, #b5d5ff, white,#e6fcff,white )"
    >
      <Box fontSize={"xl"}>POWERED BY AI</Box>
      <Text fontSize={"5xl"} fontWeight={"medium"}>
        Goodbye silos, hello teamwork
      </Text>
      <Text fontSize={"2xl"}>
        Create, organize, and share work with AI by your side. Turn scattered
        information into a single source of truth.
      </Text>
      <Button bg={"blue.800"} margin={"30px"} color={"white"} padding={"28px"} fontSize={"xl"}>
        Get Confluence free
      </Button>
      <Flex
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "column",
          xl: "row",
          "2xl": "row",
        }}
        height={"auto"}
        justifyContent={{
          base: "center",
          sm: "center",
          md: "center",
        }}
        alignItems={{
          base: "center",
          sm: "center",
          md: "center",
        }}
        margin={"auto"}
        gap={"100px"}
      >
        <Flex
          direction={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "column",
            xl: "column",
            "2xl": "column",
          }}
          gap={"20px"}
        >
          <Box
            boxShadow="md"
            height={"150px"}
            width={{
              base: "95%",
              sm: "90%",
              md: "99%",
              lg: "95%",
              xl: "500px",
              "2xl": "600px",
            }}
            p="6"
            rounded="md"
            bg="white"
            margin={"auto"}
          >
            <Text fontSize={"3xl"} fontWeight={"bold"}>
              Start with Page{" "}
            </Text>
            <Text>
              Plan projects, take notes, and brainstorm. Let AI write your first
              draft.
            </Text>
          </Box>
          <Box
            boxShadow="md"
            p="6"
            height={"150px"}
            width={{
              base: "95%",
              sm: "90%",
              md: "99%",
              lg: "95%",
              xl: "500px",
              "2xl": "600px",
            }}
            rounded="md"
            bg="white"
            margin={"auto"}
          >
            <Text fontSize={"3xl"} fontWeight={"bold"}>
              Share with your teams
            </Text>
            <Text>
              Invite your teams to collaborate using real-time editing and
              inline comments.
            </Text>
          </Box>
          <Box
            boxShadow="md"
            p="6"
            height={"150px"}
            width={{
              base: "95%",
              sm: "90%",
              md: "99%",
              lg: "95%",
              xl: "500px",
              "2xl": "600px",
            }}
            rounded="md"
            bg="white"
            margin={"auto"}
          >
            <Text fontSize={"3xl"} fontWeight={"bold"}>
              Connect all your work
            </Text>
            <Text>
              Stay organized in dedicated workspaces, equipped with AI-powered
              search.
            </Text>
          </Box>
        </Flex>

        <Image
          width={{
            base: "90%",
            sm: "90%",
            md: "90%",
            lg: "90%",
            xl: "700px",
            "2xl": "1000px",
          }}
          height={"100%"}
          src="https://wac-cdn.atlassian.com/misc-assets/webp-images/confluence-create-a-page.webp"
        />
      </Flex>
      <Text fontSize={"3xl"} m={"40px"} >
        75,000+ customers rely on Confluence to share knowledge
      </Text>
      <Flex
        mb={"40px"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"100px"}
      
      >
        <Image
          backgroundPosition={"center"}
          height={"150px"}
          width={"150px"}
          src="https://wac-cdn.atlassian.com/misc-assets/svgs/canva-n50.svg"
        />
        <Image
          height={"150px"}
          width={"150px"}
          src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:35c6a74c-a259-4dac-8df8-ea8c5b12f44d/nasa-n50.svg"
        />
        <Image
          height={"150px"}
          width={"150px"}
          src="https://wac-cdn.atlassian.com/dam/jcr:0a7dd09c-7f87-4bc9-8b65-318b0a41efb8/twitter.svg"
        />
        <Image
          height={"150px"}
          width={"150px"}
          src="https://wac-cdn.atlassian.com/dam/jcr:77c2f652-ab9b-4619-b175-c3f408c3e350/kiva.svg"
        />
        {/* <Image height={"150px"} width={"145px"} src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:475f41d8-45f4-48c9-a9b2-d78215ae4b16/nyt-n50.svg"/> */}
        <Image
          height={"150px"}
          width={"150px"}
          src="https://wac-cdn.atlassian.com/misc-assets/svgs/audi-n50.svg"
        />
      </Flex>
      <Box>
        <Text fontSize={"6xl"} fontWeight={"bold"} mb={"20px"}>
          Templates for every team and task
        </Text>
        <Text fontSize={"2xl"} mb={"60px"}>
          Work smarter and draw inspiration from hundreds of customizable,
          pre-built templates.
        </Text>

        <Flex
      
          mt={"20px"}
          mb={"100px"}
          gap={"100px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button
            
            p={"25px"}
            fontSize={"xl"}
            w={"200px"}
            _hover={{ bg: "#00a3bf" }}
          >
            Project Planning
          </Button>
          <Button
            p={"25px"}
            fontSize={"xl"}
            w={"250px"}
            _hover={{ bg: "#00a3bf" }}
          >
            Software Development
          </Button>
          <Button
           p={"25px"}
            fontSize={"xl"}
            w={"250px"}
            _hover={{ bg: "#00a3bf" }}
          >
            Product management
          </Button>
          <Button
            p={"25px"}
            fontSize={"xl"}
            w={"200px"}
            _hover={{ bg: "#00a3bf" }}
          >
            Marketing and sales
          </Button>
        </Flex>
        <Flex
          width={"90%"}
          margin={"auto"}
          justifyContent="center"
          alignItems="center"
          height="250px"
          gap={"100px"}
          mb={"90px"}
        >
          <Card width={"25%"} boxShadow="md" rounded="md" bg="white" p={"20px"}>
            <Flex alignItems={"center"} justifyContent={"space-evenly"}>
              <Image src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:438d81bd-fb9b-4711-ae6d-09b51690199b/project-plan.svg?cdnVersion=1282" />
              <span>Atlasian</span>
            </Flex>
            <CardBody>
              <Text fontSize={"4xl"} fontWeight={"normal"}>
                Project Planning
              </Text>
            </CardBody>
            <CardFooter>
              <Box width={"90%"} fontSize={"xl"}>
                Define ,scope and plan milestones for your next project
              </Box>
            </CardFooter>
          </Card>
          <Card width={"25%"} boxShadow="md" rounded="md" bg="white" p={"20px"}>
            <Flex alignItems={"center"} justifyContent={"space-evenly"}>
              <Image src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:89b4a632-75c6-4476-b9d7-c65b03ad6baf/project-poster.svg?cdnVersion=1282" />
              <span>Mural</span>
            </Flex>
            <CardBody>
              <Text fontSize={"4xl"} fontWeight={"normal"}>
                BrainStorming
              </Text>
            </CardBody>
            <CardFooter>
              <Box width={"90%"} fontSize={"xl"}>
                Plan ,run and document a remote brainstorming session for your
                next great idea
              </Box>
            </CardFooter>
          </Card>
          <Card width={"25%"} boxShadow="md" rounded="md" bg="white" p={"20px"}>
            <Flex alignItems={"center"} justifyContent={"space-evenly"}>
              <Image src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:46179faa-d522-4456-84aa-5506c421b7cb/retrospective.svg?cdnVersion=1282" />
              <span>Atlasian</span>
            </Flex>
            <CardBody>
              <Text fontSize={"4xl"} fontWeight={"normal"}>
                Restospective
              </Text>
            </CardBody>
            <CardFooter>
              <Box width={"90%"} fontSize={"xl"}>
                what went well?what could have gone better
              </Box>
            </CardFooter>
          </Card>
        </Flex>
        <Text color={"blue.600"} fontSize={"2xl"}>
          <Link color="teal.500" href="#">
            see all project panning templates
          </Link>
        </Text>
        <Text fontSize={"6xl"} mt={"90px"} mb={"50px"} fontWeight={"medium"}>
          Why confluences
        </Text>
      </Box>
      <Flex
        width={"90%"}
        margin={"auto"}
        gap={"30px"}
        justifyContent={"space-evenly"}
      >
        <Card width={"23%"}>
          <CardHeader>
            {/* <i className="fa-solid fa-lightbulb"></i> */}
          </CardHeader>
          <CardBody>
            <Text fontSize={"2xl"} fontWeight={"medium"}>
              Visual communication
            </Text>
          </CardBody>
          <CardFooter>
            <Text fontSize={"2xl"} >
              Bring your ideas to life: from brainstorming in whiteboards to
              project plans in pages.
            </Text>
          </CardFooter>
        </Card>
        <Card width={"23%"}>
          <CardHeader>
            {/* <i className="fa-solid fa-building"></i> */}
          </CardHeader>
          <CardBody>
            <Text fontSize={"2xl"} fontWeight={"medium"}>
              Organization that scales
            </Text>
          </CardBody>
          <CardFooter>
            <Text fontSize={"2xl"} >
              No matter your team size, projects and company knowledge are
              always findable and up-to-date.
            </Text>
          </CardFooter>
        </Card>
        <Card width={"23%"}>
          <CardHeader>
            {/* <i className="fa-solid fa-briefcase"></i> */}
          </CardHeader>
          <CardBody>
            <Text fontSize={"2xl"} fontWeight={"medium"}>
              Information protection
            </Text>
          </CardBody>
          <CardFooter>
            <Text fontSize={"2xl"} >
              Permission settings let you control who can view or edit pages,
              keeping information private.
            </Text>
          </CardFooter>
        </Card>
      </Flex>
      <Text fontWeight={"medium"} fontSize={"5xl"} mt={"30px"}>
        Use Confluence with your favorite apps
      </Text>
      <Text fontWeight={"normal"} fontSize={"3xl"} mb={"20px"}  mt={"20px"}>
        With 3000+ integrations, we’re sure you’ll find the right tool for the
        job.
      </Text>
      <Grid templateColumns='repeat(4, 1fr)' alignItems={"center"} justifyContent={"center"}  height={"300px"} p='3' width={"75%"} margin={"auto"} bg={"pink"}>
        <Box  boxShadow='lg'  rounded='md' bg='white'   height="100px" width={"250px"}>
          <Image height={"90px"} p='4' src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:c5c9c69d-d6ce-43d2-98f6-5e0fe0f2498e/logos-Jira-blue.svg?cdnVersion=1265"/>
        
        </Box>
        <Box boxShadow='lg'  rounded='md' bg='white'   height="100px" width={"250px"}>
          <Image height={"80px"} p='4' src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:b30cea8b-b00c-4d2d-af70-1b75d7a554ce/trello-logo.svg?cdnVersion=1263"/>
         
        </Box>
        <Box boxShadow='lg'  rounded='md' bg='white'  height="100px" width={"250px"}>
        <Image  height={"80px"} p='4' src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:fabfffaa-4eff-4e7f-a763-a29f5de3c021/Slack_RGB.svg?cdnVersion=1265"/>
         
        </Box>
        <Box boxShadow='lg'  rounded='md' bg='white'   height="100px" width={"250px"}>
        <Image height={"80px"} p='4' src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:cf215f9c-fbe5-4449-84fa-cafb47ca76b8/Microsoft_Teams_Logo_2x.png?cdnVersion=1265"/>  
        </Box>
        <Box boxShadow='lg'  rounded='md' bg='white'   height="100px" width={"250px"}>
        <Image height={"80px"} p='4' src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:716ebd30-7743-4e96-a32b-621be8de86af/dropbox.svg?cdnVersion=1265"/>
        
        </Box>
        <Box boxShadow='lg'  rounded='md' bg='white'  height="100px" width={"250px"}>
        <Image height={"80px"} p='4' src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:b90ddb4c-5cb6-48bd-9661-0feaa78a703d/google_drive_wordmark.svg?cdnVersion=1265"/>
      
        </Box>
        <Box boxShadow='lg'  rounded='md' bg='white' height="100px" width={"250px"}>
        <Image height={"80px"} p='4' src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:b90ddb4c-5cb6-48bd-9661-0feaa78a703d/google_drive_wordmark.svg?cdnVersion=1265"/>
          
        </Box>
        <Box boxShadow='lg'  rounded='md' bg='white' height="100px" width={"250px"}>
        <Image height={"80px"}  p='4' src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:61dc7b6e-29f5-4a55-9316-e5662d82462d/box-logo.svg?cdnVersion=1265"/>
        
        </Box>
      </Grid>
     <Flex height={"300px"}  width={"70%"} margin={"auto"}  boxShadow='lg'  rounded='md' mt="50px"> 
      <Box mr="50px" width={"25%"} bg={"blue.100"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Image  src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:31d0af93-6279-456e-ba48-a75903141f5d/Logo_Redfin.svg?cdnVersion=1263"/>
      </Box>
      <Box width={"50%"} p='4'>
        <Text textAlign={"justify"} fontWeight={"normal"} fontSize={"2xl"}>“Confluence is our linchpin for everything. ‘How do I set up my dev box?’ ‘How do I get my work going?’ Whatever they want to know, it’s all there.”</Text>
       <Text fontWeight={"normal"} textAlign={"justify"}  mt={"20px"}fontSize={"xl"}>EVAN LERER</Text>
      
       <Text fontWeight={"normal"} textAlign={"justify"}mt={"10px"} fontSize={"xl"}> Director of Engineering, Redfin</Text>
      </Box>
     </Flex>
   <Text fontSize={"5xl"} fontWeight={"medium"} mb={"30px"} mt={"30px"}>Resources to help you get started</Text>

   <Flex width={"90%"} margin={"auto"} bg={"pink"} height={"500px"} alignItems={"center"} textAlign={"center"}  justifyContent={"center"} gap={"80px"}>
  <Card width={"26%"} height={"450px"}>
    <CardHeader>
      <Image height={"250px"} width={"100%"}  src="https://wac-cdn.atlassian.com/misc-assets/webp-images/Conf_ProductTour_BlueDemoVideo.webp"/>
    </CardHeader>
    <CardBody>
      <Text fontWeight={"medium"} fontSize={"2xl"}>Demos</Text>
    </CardBody>
    <CardFooter>
      <Text fontSize={"xl"}>See Confluence in action and learn the basics.</Text>
    </CardFooter>
  </Card>
 
   <Card width={"26%"} height={"450px"}>
    <CardHeader>
     <Image height={"250px"}  width={"100%"}   src="https://wac-cdn.atlassian.com/misc-assets/webp-images/Conf_ProductTour_BlueUseCases.webp"/>
    </CardHeader>
    <CardBody>
      <Text fontWeight={"medium"} fontSize={"2xl"}>Use Cases</Text>
    </CardBody>
    <CardFooter>
    <Text fontSize={"xl"}>Discover how Confluence can be shaped to meet your team’s needs.</Text>
    </CardFooter>
  </Card>
  <Card width={"26%"} height={"450px"}>
    <CardHeader>
     <Image height={"250px"}  width={"100%"}   src="https://wac-cdn.atlassian.com/misc-assets/webp-images/Conf_ProductTour_BlueBestPractices.webp"/>
    </CardHeader>
    <CardBody>
      <Text fontWeight={"medium"} fontSize={"2xl"}>Best practices</Text>
    </CardBody>
    <CardFooter>
    <Text fontSize={"xl"}>Learn how to get the most out of Confluence.</Text>
    </CardFooter>
  </Card>
</Flex>
    </Box>
  );
};

export { Confluence };
