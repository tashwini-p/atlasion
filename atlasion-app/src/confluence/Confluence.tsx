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
  Grid,
  GridItem,
} from "@chakra-ui/react";

const Confluence = () => {
  return (
    <Box
      // bg={{
      //   base: "gray",
      //   sm: "pink",
      //   md: "red",
      //   lg: "yellow",
      //   xl: "cyan",
      //   "2xl": "blue",
      // }}
      textAlign={"center"}
      width={"100%"}
      bgGradient="linear(to-b, #b5d5ff, white,#e6fcff,white )"
    >
      <Box fontSize={"xl"}>POWERED BY AI</Box>
      <Box width={"95%"} margin={"auto"}>
      <Text fontSize={"5xl"} fontWeight={"medium"}>
        Goodbye silos, hello teamwork
      </Text>
      </Box>
      <Box width={"95%"} margin={"auto"}>
      <Text fontSize={"2xl"}  >
        Create, organize, and share work with AI by your side. Turn scattered
        information into a single source of truth.
      </Text>
      </Box>
      <Button
        bg={"#0052cc"}
        margin={"30px"}
        color={"white"}
        padding={"20px"}
        fontSize={"xl"}
      >
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
            height={{
              base: "190px",
              sm: "150px",
              md: "150px",
              lg: "150px",
              xl: "150px",
              "2xl": "150px",
            }}
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
            <Text fontSize={"2xl"} fontWeight={"medium"}>
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
            height={{
              base: "190px",
              sm: "150px",
              md: "150px",
              lg: "150px",
              xl: "150px",
              "2xl": "150px",
            }}
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
            <Text fontSize={"2xl"} fontWeight={"medium"}>
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
            height={{
              base: "190px",
              sm: "150px",
              md: "150px",
              lg: "150px",
              xl: "150px",
              "2xl": "150px",
            }}
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
            <Text fontSize={"2xl"} fontWeight={"medium"}>
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
      <Box width={"95%"} margin={"auto"}>
      <Text fontSize={"2xl"} m={"40px"}>
        75,000+ customers rely on Confluence to share knowledge
      </Text>
      </Box>
      <Flex
        width={{
          base: "90%",
          sm: "90%",
          md: "90%",
          lg: "90%",
          xl: "90%",
          "2xl": "90%",
        }}
        margin={"auto"}
        mb={"40px"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={{
          base: "20px",
          sm: "20px",
          md: "50px",
          lg: "80px",
          xl: "100px",
          "2xl": "100px",
        }}
        direction={{
          base: "column",
          sm: "row",
          md: "row",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
      >
        <Image
          backgroundPosition={"center"}
          height={{
            base: "120px",
            sm: "80px",
            md: "80px",
            lg: "100px",
            xl: "150px",
            "2xl": "150px",
          }}
          width={{
            base: "100px",
            sm: "80px",
            md: "80px",
            lg: "100px",
            xl: "150px",
            "2xl": "150px",
          }}
          src="https://wac-cdn.atlassian.com/misc-assets/svgs/canva-n50.svg"
        />
        <Image
          height={{
            base: "120px",
            sm: "80px",
            md: "80px",
            lg: "100px",
            xl: "150px",
            "2xl": "150px",
          }}
          width={{
            base: "100px",
            sm: "80px",
            md: "80px",
            lg: "100px",
            xl: "150px",
            "2xl": "150px",
          }}
          src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:35c6a74c-a259-4dac-8df8-ea8c5b12f44d/nasa-n50.svg"
        />
        <Image
          height={{
            base: "120px",
            sm: "80px",
            md: "80px",
            lg: "100px",
            xl: "150px",
            "2xl": "150px",
          }}
          width={{
            base: "100px",
            sm: "80px",
            md: "80px",
            lg: "100px",
            xl: "150px",
            "2xl": "150px",
          }}
          src="https://wac-cdn.atlassian.com/dam/jcr:46501297-a5e1-482a-9f8f-3718dd24376e/redfin.svg"
        />
        <Image
          height={{
            base: "120px",
            sm: "80px",
            md: "80px",
            lg: "100px",
            xl: "150px",
            "2xl": "150px",
          }}
          width={{
            base: "100px",
            sm: "80px",
            md: "80px",
            lg: "100px",
            xl: "150px",
            "2xl": "150px",
          }}
          src="https://wac-cdn.atlassian.com/dam/jcr:0a7dd09c-7f87-4bc9-8b65-318b0a41efb8/twitter.svg"
        />
        {/* <Image height={"150px"} width={"145px"} src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:475f41d8-45f4-48c9-a9b2-d78215ae4b16/nyt-n50.svg"/> */}
        <Image
          height={{
            base: "120px",
            sm: "80px",
            md: "80px",
            lg: "100px",
            xl: "150px",
            "2xl": "150px",
          }}
          width={{
            base: "100px",
            sm: "80px",
            md: "80px",
            lg: "100px",
            xl: "150px",
            "2xl": "150px",
          }}
          src="https://wac-cdn.atlassian.com/misc-assets/svgs/audi-n50.svg"
        />
      </Flex>
      <Box>
        {/* "6xl" */}
        <Box width={"95%"} margin={"auto"}>
        <Text
          fontSize={{
            base: "3xl",
            sm: "3xl",
            md: "4xl",
            lg: "4xl",
            xl: "4xl",
            "2xl": "4xl",
          }}
          fontWeight={"bold"}
          mb={"20px"}
        >
          Templates for every team and task
        </Text>
        </Box>
        <Box width={"95%"} margin={"auto"}> 
        <Text fontSize={"2xl"} mb={"60px"}>
          Work smarter and draw inspiration from hundreds of customizable,
          pre-built templates.
        </Text>
        </Box>
        <Flex
          mt={"20px"}
          gap={{
            base: "20px",
            sm: "20px",
            md: "10px",
            lg: "20px",
            xl: "80px",
            "2xl": "80px",
          }}
          direction={{
            base: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}
          width={{
            base: "95%",
            sm: "95%",
            md: "95%",
            lg: "95%",
            xl: "95%",
            "2xl": "95%",
          }}
          margin={"auto"}
          mb={{
            base: "400px",
            sm: "350px",
            md: "350px",
            lg:"80px",
            xl: "80px",
            "2xl": "80px",
          }}
          // gap={"100px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button
          
            fontSize={"xl"}
            width={{
              base: "180px",
              sm: "200px",
              md: "230px",
              lg: "230px",
              xl: "200px",
              "2xl": "200px",
            }}
            _hover={{ bg: "#00a3bf" }}
          >
            Project Planning
          </Button>
          <Button
            
            fontSize={"xl"}
            width={{
              base: "230px",
              sm: "230px",
              md: "350px",
              lg: "230px",
              xl: "250px",
              "2xl": "250px",
            }}
            _hover={{ bg: "#00a3bf" }}
          >
            Software Development
          </Button>
          <Button
           
            fontSize={"xl"}
            width={{
              base: "230px",
              sm: "230px",
              md: "350px",
              lg: "230px",
              xl: "230px",
              "2xl": "250px",
            }}
            _hover={{ bg: "#00a3bf" }}
          >
            Product management
          </Button>
          <Button
            
            fontSize={"xl"}
            width={{
              base: "200px",
              sm: "200px",
              md: "250px",
              lg: "200px",
              xl: "200px",
              "2xl": "200px",
            }}
            _hover={{ bg: "#00a3bf" }}
          >
            Marketing & sales
          </Button>
        </Flex>
        <Flex
          width={{
            base: "90%",
            sm: "90%",
            md: "80%",
            lg: "98%",
            xl: "98%",
            "2xl": "90%",
          }}
        
          margin={"auto"}
          direction={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}
          justifyContent="center"
          alignItems="center"
          height={{
            base: "200px",
            sm: "200px",
            md: "280px",
            lg: "400px",
            xl: "400px",
            "2xl": "400px",
          }}
          gap={{
            base: "20px",
            sm: "20px",
            md: "50px",
            lg: "30px",
            xl: "30px",
            "2xl": "100px",
          }}
          mb={{
            base: "400px",
            sm: "350px",
            md: "350px",
            lg:"50px",
            xl: "50px",
            "2xl": "50px",
          }}
        >
          <Card width={{
            base: "90%",
            sm: "90%",
            md: "60%",
            lg: "27%",
            xl: "25%",
            "2xl": "25%",
          }}  height={"300px"} boxShadow="md" rounded="md" bg="white" p={"10px"}>
            <Flex alignItems={"center"} justifyContent={"space-evenly"}>
              <Image src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:438d81bd-fb9b-4711-ae6d-09b51690199b/project-plan.svg?cdnVersion=1282" />
              <span>Atlasian</span>
            </Flex>
          
              <Text fontSize={"3xl"} fontWeight={"normal"} mt={"20px"} >
                Project Planning
              </Text>
            
            <CardFooter>
              <Box width={"90%"} fontSize={"xl"} textAlign={"justify"}>
                Define ,scope and plan milestones for your next project
              </Box>
            </CardFooter>
          </Card>
          <Card width={{
             base: "90%",
             sm: "90%",
             md: "60%",
             lg: "27%",
             xl: "25%",
             "2xl": "25%",
          }}   height={"300px"} boxShadow="md" rounded="md" bg="white" p={"10px"}>
            <Flex alignItems={"center"} justifyContent={"space-evenly"}>
              <Image src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:89b4a632-75c6-4476-b9d7-c65b03ad6baf/project-poster.svg?cdnVersion=1282" />
              <span>Mural</span>
            </Flex>
           
              <Text fontSize={"3xl"} fontWeight={"normal"} mt={"20px"} >
                BrainStorming
              </Text>
           
            <CardFooter>
              <Box width={"90%"} fontSize={"xl"} textAlign={"justify"}>
                Plan ,run and document a remote brainstorming session for your
                next great idea
              </Box>
            </CardFooter>
          </Card>
          <Card width={{
            base: "90%",
            sm: "90%",
            md: "60%",
            lg: "27%",
            xl: "25%",
            "2xl": "25%",
          }}  height={"300px"} boxShadow="md" rounded="md" bg="white" p={"10px"}>
            <Flex alignItems={"center"} justifyContent={"space-evenly"}>
              <Image src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:46179faa-d522-4456-84aa-5506c421b7cb/retrospective.svg?cdnVersion=1282" />
              <span>Atlasian</span>
            </Flex>
           
              <Text fontSize={"3xl"} fontWeight={"normal"} mt={"20px"} >
                Restospective
              </Text>
          
            <CardFooter>
              <Box width={"90%"} fontSize={"xl"} textAlign={"justify"}>
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
        <Text  fontSize={{
            base: "2xl",
            sm: "2xl",
            md: "3xl",
            lg: "3xl",
            xl: "4xl",
            "2xl": "4xl",
          }} mt={"40px"}
           mb={{
            base: "450px",
            sm: "430px",
            md: "430px",
            lg:"50px",
            xl: "50px",
            "2xl": "50px",
          }}
           fontWeight={"medium"}>
          Why confluences
        </Text>
      </Box>
      <Flex
        width={{
          base: "90%",
          sm: "90%",
          md: "98%",
          lg: "98%",
          xl: "98%",
          "2xl": "90%",
        }}
      
        margin={"auto"}
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
        justifyContent="center"
        alignItems="center"
        height={{
          base: "200px",
          sm: "200px",
          md: "280px",
          lg: "400px",
          xl: "400px",
          "2xl": "400px",
        }}
        gap={{
          base: "20px",
          sm: "20px",
          md: "30px",
          lg: "30px",
          xl: "50px",
          "2xl": "100px",
        }}
        mb={{
          base: "400px",
          sm: "350px",
          md: "350px",
          lg:"50px",
          xl: "50px",
          "2xl": "50px",
        }}
      >
        <Card width={{
            base: "90%",
            sm: "90%",
            md: "60%",
            lg: "28%",
            xl: "25%",
            "2xl": "25%",
          }} height={"350px"} boxShadow="md" rounded="md" bg="white" p={"10px"}>
          <CardHeader>
            {/* <i className="fa-solid fa-lightbulb"></i> */}
            <Box
              height={"120px"}
              width={"120px"}
              bg={"blue.100"}
              borderRadius={"50%"}
              p={"4"}
              marginLeft={"100px"}
            >
              <svg
                id="icon-object-lightbulb"
                width="82px"
                height="82px"
                viewBox="0 0 46 65"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g fill="currentColor">
                    <path d="M39.49,38 C47.99,29.5 47.99,15.7 39.49,7.2 C30.59,-1.7 16.15,-1.7 7.24,7.2 C6.99,7.5 6.76,7.7 6.52,8 C-1.56,16.9 -0.9,30.6 7.99,38.7 L11.98,42.3 L11.98,49.7 L34.75,49.7 L34.75,42.3 L38.75,38.7 C39,38.5 39.25,38.2 39.49,38 Z M25.49,10 C25.49,8.6 24.33,7.4 22.91,7.4 C14.53,7.4 7.74,14.2 7.74,22.6 L7.74,23.2 L7.74,23.3 C7.8,24.7 8.93,25.8 10.31,25.8 C11.74,25.8 12.89,24.6 12.89,23.2 L12.89,22.6 L12.89,22.4 C12.99,17 17.44,12.6 22.91,12.6 C24.33,12.6 25.49,11.4 25.49,10 Z"></path>
                    <path
                      d="M34.75,54.9 L34.75,54.9 L11.98,54.9 L11.98,56.9 C11.98,61.1 15.42,64.6 19.66,64.6 L27.07,64.6 C31.31,64.6 34.75,61.1 34.75,56.9 L34.75,54.9 Z"
                      opacity="0.5"
                    ></path>
                  </g>
                </g>
              </svg>
            </Box>
          </CardHeader>
          
            <Text fontSize={"2xl"} fontWeight={"medium"}>
              Visual communication
            </Text>
          
          <CardFooter>
            <Text fontSize={"xl"}>
              Bring your ideas to life: from brainstorming in whiteboards to
              project plans in pages.
            </Text>
          </CardFooter>
        </Card>
        <Card width={{
            base: "90%",
            sm: "90%",
            md: "60%",
            lg: "28%",
            xl: "25%",
            "2xl": "25%",
          }} height={"350px"} boxShadow="md" rounded="md" bg="white" p={"10px"}>
          <CardHeader>
            {/* <i className="fa-solid fa-building"></i> */}
            <Box
              height={"120px"}
              width={"120px"}
              bg={"blue.100"}
              borderRadius={"50%"}
              p={"4"}
              marginLeft={"100px"}
            >
              <svg
                id="icon-object-building"
                width="82px"
                height="82px"
                viewBox="0 0 65 41"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g fill="currentColor">
                    <path
                      d="M38.99,15.13 C40.27,15.42 41.22,16.56 41.22,17.92 C41.22,19.49 39.94,20.77 38.35,20.77 C36.76,20.77 35.48,19.49 35.48,17.92 C35.48,16.56 36.43,15.42 37.7,15.13 L27.1,15.13 C28.57,15.25 29.73,16.48 29.73,17.98 C29.73,19.56 28.44,20.84 26.86,20.84 C25.27,20.84 23.99,19.56 23.99,17.98 C23.99,16.48 25.15,15.25 26.62,15.13 L10.24,15.13 C7.7,15.13 5.34,17.18 5.34,19.7 L5.34,39.45 L60.19,39.45 L60.19,19.7 C60.19,17.18 58.13,15.13 55.59,15.13 L38.99,15.13 Z"
                      opacity="0.5"
                    ></path>
                    <path d="M16.71,37.14 L16.71,4.77 C16.71,2.24 18.77,0.19 21.3,0.19 L43.9,0.19 C46.44,0.19 48.5,2.24 48.5,4.77 L48.5,37.14 L62.67,37.14 C63.74,37.14 64.6,38 64.6,39.07 C64.6,40.14 63.74,41 62.67,41 L2.54,41 C1.47,41 0.6,40.14 0.6,39.07 C0.6,38 1.47,37.14 2.54,37.14 L16.71,37.14 Z M28.96,37.14 L28.96,31.16 C28.96,29.22 30.55,27.63 32.51,27.63 C34.47,27.63 36.06,29.22 36.06,31.16 L36.06,37.14 L28.96,37.14 Z M29.73,17.98 C29.73,16.4 28.44,15.12 26.86,15.12 C25.27,15.12 23.99,16.4 23.99,17.98 C23.99,19.56 25.27,20.84 26.86,20.84 C28.44,20.84 29.73,19.56 29.73,17.98 Z M38.35,15.06 C39.94,15.06 41.22,16.34 41.22,17.92 C41.22,19.49 39.94,20.77 38.35,20.77 C36.76,20.77 35.48,19.49 35.48,17.92 C35.48,16.34 36.76,15.06 38.35,15.06 Z M29.73,8.77 C29.73,7.19 28.44,5.91 26.86,5.91 C25.27,5.91 23.99,7.19 23.99,8.77 C23.99,10.35 25.27,11.63 26.86,11.63 C28.44,11.63 29.73,10.35 29.73,8.77 Z M38.35,5.91 C39.94,5.91 41.22,7.19 41.22,8.77 C41.22,10.35 39.94,11.63 38.35,11.63 C36.76,11.63 35.48,10.35 35.48,8.77 C35.48,7.19 36.76,5.91 38.35,5.91 Z"></path>
                  </g>
                </g>
              </svg>
            </Box>
          </CardHeader>
         
            <Text fontSize={"2xl"} fontWeight={"medium"}>
              Organization that scales
            </Text>
         
          <CardFooter>
            <Text fontSize={"xl"}>
              No matter your team size, projects and company knowledge are
              always findable and up-to-date.
            </Text>
          </CardFooter>
        </Card>
        <Card width={{
            base: "90%",
            sm: "90%",
            md: "60%",
            lg: "28%",
            xl: "25%",
            "2xl": "25%",
          }} height={"350px"} boxShadow="md" rounded="md" bg="white" p={"10px"}>
          <CardHeader>
            {/* <i className="fa-solid fa-briefcase"></i> */}
            <Box
              height={"120px"}
              width={"120px"}
              bg={"blue.100"}
              borderRadius={"50%"}
              p={"4"}
              marginLeft={"100px"}
            >
              <svg
                id="icon-object-lock"
                width="82px"
                height="82px"
                viewBox="0 0 52 64"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g fill="currentColor">
                    <path
                      d="M29.03,28.9 L22.85,28.9 C18.36,28.9 14.71,25.3 14.71,20.8 L14.71,11.2 C14.71,5 19.74,0 25.94,0 C32.14,0 37.17,5 37.17,11.2 L37.17,20.8 C37.17,25.3 33.52,28.9 29.03,28.9 Z M22.85,23.8 L29.03,23.8 C30.73,23.8 32.12,22.5 32.12,20.8 L32.12,11.2 C32.12,7.8 29.35,5 25.94,5 C22.53,5 19.77,7.8 19.77,11.2 L19.77,20.8 C19.77,22.5 21.15,23.8 22.85,23.8 Z"
                      opacity="0.5"
                    ></path>
                    <path d="M7.13,17.4 C3.41,17.4 0.4,20.4 0.4,24.1 L0.4,57.2 C0.4,61 3.41,64 7.13,64 L44.75,64 C48.47,64 51.49,61 51.49,57.2 L51.49,24.1 C51.49,20.4 48.47,17.4 44.75,17.4 L7.13,17.4 Z M25.94,48.3 C29.51,48.3 32.4,45.4 32.4,41.8 C32.4,38.2 29.51,35.4 25.94,35.4 C22.38,35.4 19.49,38.2 19.49,41.8 C19.49,45.4 22.38,48.3 25.94,48.3 Z"></path>
                  </g>
                </g>
              </svg>
            </Box>
          </CardHeader>
         
            <Text fontSize={"2xl"} fontWeight={"medium"}>
              Information protection
            </Text>
          
          <CardFooter>
            <Text fontSize={"xl"}>
              Permission settings let you control who can view or edit pages,
              keeping information private.
            </Text>
          </CardFooter>
        </Card>
      </Flex>
      <Text fontWeight={"medium"} fontSize={{
            base: "2xl",
            sm: "2xl",
            md: "3xl",
            lg: "3xl",
            xl: "4xl",
            "2xl": "4xl",
          }} mt={{
          base: "450px",
          sm: "400px",
          md: "380px",
          lg:"50px",
          xl: "50px",
          "2xl": "50px",
        }}>
        Use Confluence with your favorite apps
      </Text>
      <Text fontWeight={"normal"} fontSize={{
            base: "2xl",
            sm: "2xl",
            md: "2xl",
            lg: "2xl",
            xl: "2xl",
            "2xl": "2xl",
          }} mb={"20px"} mt={"20px"}>
        With 3000+ integrations, we’re sure you’ll find the right tool for the
        job.
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)", // on smaller screens, each element takes one full row
          sm: "repeat(2, 1fr)", // on small screens and above, distribute elements in 2 columns
          md: "repeat(2, 1fr)", // on medium screens and above, distribute elements in 3 columns
          lg: "repeat(3, 1fr)", // on large screens and above, distribute elements in 6 columns
          xl: "repeat(4, 1fr)",
          "2xl": "repeat(4, 1fr)",
        }}
        gap='4'
        alignItems={"center"}
        justifyContent={"center"}
        height={{
          base: "90%",
          sm: "90%",
          md: "60%",
          lg: "28%",
          xl: "25%",
          "2xl": "25%",
        }}
        p="3"
        width={"75%"}
        margin={"auto"}
       
      >
        <Box
          boxShadow="lg"
          rounded="md"
          bg="white"
          height="100px"
          width={"250px"}
        >
          <Image
            height={"90px"}
            p="4"
            src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:c5c9c69d-d6ce-43d2-98f6-5e0fe0f2498e/logos-Jira-blue.svg?cdnVersion=1265"
          />
        </Box>
        <Box
          boxShadow="lg"
          rounded="md"
          bg="white"
          height="100px"
          width={"250px"}
        >
          <Image
            height={"80px"}
            p="4"
            src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:b30cea8b-b00c-4d2d-af70-1b75d7a554ce/trello-logo.svg?cdnVersion=1263"
          />
        </Box>
        <Box
          boxShadow="lg"
          rounded="md"
          bg="white"
          height="100px"
          width={"250px"}
        >
          <Image
            height={"80px"}
            p="4"
            src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:fabfffaa-4eff-4e7f-a763-a29f5de3c021/Slack_RGB.svg?cdnVersion=1265"
          />
        </Box>
        <Box
          boxShadow="lg"
          rounded="md"
          bg="white"
          height="100px"
          width={"250px"}
        >
          <Image
            height={"80px"}
            p="4"
            src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:cf215f9c-fbe5-4449-84fa-cafb47ca76b8/Microsoft_Teams_Logo_2x.png?cdnVersion=1265"
          />
        </Box>
        <Box
          boxShadow="lg"
          rounded="md"
          bg="white"
          height="100px"
          width={"250px"}
        >
          <Image
            height={"80px"}
            p="4"
            src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:716ebd30-7743-4e96-a32b-621be8de86af/dropbox.svg?cdnVersion=1265"
          />
        </Box>
        <Box
          boxShadow="lg"
          rounded="md"
          bg="white"
          height="100px"
          width={"250px"}
        >
          <Image
            height={"80px"}
            p="4"
            src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:b90ddb4c-5cb6-48bd-9661-0feaa78a703d/google_drive_wordmark.svg?cdnVersion=1265"
          />
        </Box>
        <Box
          boxShadow="lg"
          rounded="md"
          bg="white"
          height="100px"
          width={"250px"}
        >
          <Image
            height={"80px"}
            p="4"
            src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:b90ddb4c-5cb6-48bd-9661-0feaa78a703d/google_drive_wordmark.svg?cdnVersion=1265"
          />
        </Box>
        <Box
          boxShadow="lg"
          rounded="md"
          bg="white"
          height="100px"
          width={"250px"}
        >
          <Image
            height={"80px"}
            p="4"
            src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:61dc7b6e-29f5-4a55-9316-e5662d82462d/box-logo.svg?cdnVersion=1265"
          />
        </Box>
      </Grid>
      <Flex
        height={{
          base: "20%",
          sm: "20%",
          md: "23%",
          lg: "25%",
          xl: "20%",
          "2xl": "300px",
        }}
        
        width={{
          base: "90%",
          sm: "75%",
          md: "75%",
          lg: "75%",
          xl: "60%",
          "2xl": "75%",
        }}
        direction={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
        margin={"auto"}
        boxShadow="lg"
        rounded="md"
        mt="50px"
      >
        <Box
         
         width={{
          base: "100%",
          sm: "100%",
          md: "75%",
          lg: "75%",
          xl: "60%",
          "2xl": "75%",
        }}
        
          bg={"blue.100"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          p="5"
          
        >
        <Image  src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:31d0af93-6279-456e-ba48-a75903141f5d/Logo_Redfin.svg?cdnVersion=1263" />
        </Box>
        <Box width={{
          base: "100%",
          sm: "100%",
          md: "75%",
          lg: "75%",
          xl: "60%",
          "2xl": "75%",
        }}   p="4" display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
          <Text textAlign={"justify"} fontWeight={"normal"} fontSize={"xl"}>
            “Confluence is our linchpin for everything. ‘How do I set up my dev
            box?’ ‘How do I get my work going?’ Whatever they want to know, it’s
            all there.”
          </Text>
          <Text
            fontWeight={"normal"}
            textAlign={"justify"}
            mt={"20px"}
            fontSize={"xl"}
          >
            EVAN LERER
          </Text>

          <Text
            fontWeight={"normal"}
            textAlign={"justify"}
            mt={"10px"}
            fontSize={"xl"}
          >
            {" "}
            Director of Engineering, Redfin
          </Text>
        </Box>
      </Flex>
      <Text fontSize={{
            base: "4xl",
            sm: "4xl",
            md: "4xl",
            lg: "4xl",
            xl: "4xl",
            "2xl": "4xl",
          }} fontWeight={"medium"} mb={"30px"} mt={"30px"}>
        Resources to help you get started
      </Text>

      <Flex
       width={{
        base: "90%",
        sm: "90%",
        md: "98%",
        lg: "98%",
        xl: "98%",
        "2xl": "90%",
      }}
    
      margin={"auto"}
      direction={{
        base: "column",
        sm: "column",
        md: "column",
        lg: "row",
        xl: "row",
        "2xl": "row",
      }}
      justifyContent="center"
      alignItems="center"
      height={{
        base: "200px",
        sm: "200px",
        md: "280px",
        lg: "500px",
        xl: "500px",
        "2xl": "500px",
      }}
      gap={{
        base: "20px",
        sm: "20px",
        md: "30px",
        lg: "30px",
        xl: "50px",
        "2xl": "100px",
      }}
     textAlign={"center"}
     mt={{
      base: "610px",
      sm: "600px",
      md: "550px",
      lg:"50px",
      xl: "50px",
      "2xl": "50px",
    }} 
      >
        <Card width={{
            base: "90%",
            sm: "90%",
            md: "60%",
            lg: "28%",
            xl: "25%",
            "2xl": "25%",
          }} height={"450px"} boxShadow="md" rounded="md" bg="white" p={"10px"}>
          <CardHeader>
            <Image
              height={"250px"}
              width={"100%"}
              src="https://wac-cdn.atlassian.com/misc-assets/webp-images/Conf_ProductTour_BlueDemoVideo.webp"
            />
          </CardHeader>
          
            <Text fontWeight={"medium"} fontSize={"2xl"}>
              Demos
            </Text>
          
          <CardFooter>
            <Text fontSize={"xl"}>
              See Confluence in action and learn the basics.
            </Text>
          </CardFooter>
        </Card>

        <Card width={{
            base: "90%",
            sm: "90%",
            md: "60%",
            lg: "28%",
            xl: "25%",
            "2xl": "25%",
          }} height={"450px"} boxShadow="md" rounded="md" bg="white" p={"10px"}>
          <CardHeader>
            <Image
              height={"250px"}
              width={"100%"}
              src="https://wac-cdn.atlassian.com/misc-assets/webp-images/Conf_ProductTour_BlueUseCases.webp"
            />
          </CardHeader>
          
            <Text fontWeight={"medium"} fontSize={"2xl"}>
              Use Cases
            </Text>
          
          <CardFooter>
            <Text fontSize={"xl"}>
              Discover how Confluence can be shaped to meet your team’s needs.
            </Text>
          </CardFooter>
        </Card>
        <Card width={{
            base: "90%",
            sm: "90%",
            md: "60%",
            lg: "28%",
            xl: "25%",
            "2xl": "25%",
          }} height={"450px"} boxShadow="md" rounded="md" bg="white" p={"10px"}>
          <CardHeader>
            <Image
              height={"250px"}
              width={"100%"}
              src="https://wac-cdn.atlassian.com/misc-assets/webp-images/Conf_ProductTour_BlueBestPractices.webp"
            />
          </CardHeader>
          
            <Text fontWeight={"medium"} fontSize={"2xl"}>
              Best practices
            </Text>
         
          <CardFooter>
            <Text fontSize={"xl"}>
              Learn how to get the most out of Confluence.
            </Text>
          </CardFooter>
        </Card>
      </Flex>
    </Box>
  );
};

export { Confluence };
