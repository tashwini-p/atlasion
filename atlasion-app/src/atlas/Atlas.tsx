import { Box, Text, Button, Flex, Image } from "@chakra-ui/react";
import { CardInfo } from "../Utils/interfaces";
import { NewCard } from "../confluence/NewCard";
import { ImageGallery } from "./DynamicContetentWithButton";

const Atlas = () => {
  const images: string[] = [
    "https://wac-cdn.atlassian.com/dam/jcr:a5c1da67-761e-4bd9-81a5-189e2dcdda1d/01%E2%80%93Smart%20links.png?cdnVersion=1528",
    "https://wac-cdn.atlassian.com/dam/jcr:6db44039-107a-4517-a55b-3ece6c66b8f4/02%E2%80%93Universal%20profiles.png?cdnVersion=1528",
    "https://wac-cdn.atlassian.com/dam/jcr:f7ef0d6c-08c1-4790-b65c-edbde35e76fd/03%E2%80%93Linked%20epics.png?cdnVersion=1528",
    "https://wac-cdn.atlassian.com/dam/jcr:347ee2c2-ea76-4dd1-8d00-3e6165970f7b/04%E2%80%93Chat%20apps.png?cdnVersion=1528",
  ];

  const cards: CardInfo[] = [
    {
      id: 1,
      content: "Smart links",
      description:
        "Answer what we’re doing, why, and how it’s going on any page, board or space.",
    },
    {
      id: 2,
      content: "Atlas Teams Directory",
      description:
        "See who’s who, their work, where they fit in, and how they can help, inside any Atlassian product.",
    },
    {
      id: 3,
      content: "Linked epics",
      description:
        "Connect Atlas Projects to Epics in Jira Software so teams can stay in the flow and work stays in sync.",
    },
    {
      id: 4,
      content: "Apps for Slack and Microsoft Teams",
      description:
        "Get reminders, share updates, and receive digests in the channels and rooms where teams are.",
    },
  ];
  return (
    <Box
      width={"100%"}
      height={"auto"}
      bgGradient="linear(to-r, #c6e9ee , #ffebe5 ,white,#ffebe5,#c6e9ee)"
    >
      <Box
        width={"100%"}
        height={"auto"}
        bgGradient="linear(to-r, #c6e9ee , #ffebe5 ,white,#ffebe5,#c6e9ee)"
        
      >
        <Text
          fontSize={{
            base: "14px",
            sm: "15px",
            md: "17px",
            lg: "4xl",
            xl: "4xl",
            "2xl": "4xl",
          }}
          width={"60%"}
          margin={"auto"}
          textAlign={"center"}
         
          mb={"30px"}
          fontWeight={"bold"}
        >
          Stay in sync, async
        </Text>
        <Box width={"50%"} margin={"auto"}  mb={"30px"}>
          <Text
            fontSize={{
              base: "10px",
              sm: "12px",
              md: "12px",
              lg: "xl",
              xl: "xl",
              "2xl": "xl",
            }}
            textAlign={"center"}
          >
            Atlas is the first teamwork directory to connect the dots across
            teams, their apps, and work — wherever it happens.
          </Text>
        </Box>
        <Box width={{ base: "100px",
            sm: "10%",
            md: "10%",
            lg: "10%",
            xl: "10%",
            "2xl": "10%",}} margin={"auto"} mb={"20px"}>
          <Button bg={"#0052cc "} p="3" color={"white"} textAlign={"center"}>
            Get it free
          </Button>
        </Box>
        <Box width="70%" margin={"auto"}>
          <Image
           height={{
            base: "200px",
            sm: "200px",
            md: "400px",
            lg: "600px",
            xl: "600px",
            "2xl": "600px",
          }}
          width={{
            base: "100%",
            sm: "100%",
            md: "800px",
            lg: "1000px",
            xl: "1000px",
            "2xl": "1000px",
          }}
            margin={"auto"}
            backgroundPosition={"center"}
            src="https://wac-cdn.atlassian.com/dam/jcr:82d96ab5-1c3a-4e2b-8639-da2f21259cf1/AtlasWAC_Header%20Illo.png?cdnVersion=1528"
          />
        </Box>

        <Flex width={"98%"} margin={"auto"} direction={{
            base: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}  justifyContent={{
            base: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
            xl: "flex-start",
            "2xl": "flex-start",
          }}
          alignItems={"center"}
           >
          <Box 
           width={{
            base: "100%",
            sm: "80%",
            md: "33%",
            lg: "33%",
            xl: "33%",
            "2xl": "36%",
          }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            flexDirection={"column"}
            height={"200px"}
          >
            <Box mt={"20px"} >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin meet"
                viewBox="0 0 36 36"
                style={{ width: "100%", height: "50px" }}
              >
                <path d="M30,12.63a12.11,12.11,0,0,0-24.22.17A12.11,12.11,0,0,0,18,33.69,12.12,12.12,0,0,0,30,12.63Zm-6.14,7.44a12.08,12.08,0,0,0-3.3-5.68,9.27,9.27,0,0,1,3.34-.63,9.17,9.17,0,0,1,3.2.58A9.26,9.26,0,0,1,23.84,20.07ZM18,30.34a9.28,9.28,0,0,1-3.32-5.76,11.89,11.89,0,0,0,6.65-.07A9.25,9.25,0,0,1,18,30.34ZM8.67,14.43a9.19,9.19,0,0,1,6.79,0,12.15,12.15,0,0,0-3.35,5.85A9.34,9.34,0,0,1,8.67,14.43Zm9.2,7.81a9.17,9.17,0,0,1-3.2-.58A9.35,9.35,0,0,1,18,15.85a9.33,9.33,0,0,1,3.32,5.72A9.22,9.22,0,0,1,17.87,22.24Zm0-18.67a9.32,9.32,0,0,1,9.2,7.85A12,12,0,0,0,18,12.5a12.11,12.11,0,0,0-9.35-1A9.34,9.34,0,0,1,17.87,3.57ZM12.12,32.43a9.33,9.33,0,0,1-6-16.5,12.11,12.11,0,0,0,5.62,7.44,12.07,12.07,0,0,0,3.69,8.43A9.27,9.27,0,0,1,12.12,32.43Zm11.76,0a9.27,9.27,0,0,1-3.34-.63,12.08,12.08,0,0,0,3.69-8.6,12.1,12.1,0,0,0,5.41-7.44,9.33,9.33,0,0,1-5.76,16.67Z"></path>
              </svg>
            </Box>
            <Text fontSize={"xl"} fontWeight={"medium"} mb={"10px"}>
              Share context
            </Text>
            <Box width={"90%"} height={"30px"}>
              <Text textAlign={"center"} >
                Know the what, why, who, and how of your teams’ work.
              </Text>
            </Box>
          </Box>
          <Box
            width={{
              base: "100%",
              sm: "80%",
              md: "33%",
              lg: "33%",
              xl: "33%",
              "2xl": "36%",
            }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            flexDirection={"column"}
            height={"200px"}
          >
            <Box mt={"20px"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin meet"
                viewBox="0 0 36 36"
                style={{ width: "100%", height: "50px" }}
              >
                <path d="M10.84,28.07V24.36a5.57,5.57,0,0,1,1.74-4.05A5.57,5.57,0,0,0,8.7,18.75H5.61A5.61,5.61,0,0,0,0,24.36v3.71a1,1,0,0,0,1,1H11.82A1,1,0,0,1,10.84,28.07Z"></path>
                <path d="M7.16,17.47A4.12,4.12,0,1,0,3,13.35,4.12,4.12,0,0,0,7.16,17.47Z"></path>
                <path d="M30.39,18.75H27.3a5.57,5.57,0,0,0-3.88,1.56,5.57,5.57,0,0,1,1.74,4.05v3.71a1,1,0,0,1-1,1H35a1,1,0,0,0,1-1V24.36A5.61,5.61,0,0,0,30.39,18.75Z"></path>
                <path d="M28.84,17.47a4.12,4.12,0,1,0-4.12-4.12A4.11,4.11,0,0,0,28.84,17.47Z"></path>
                <path d="M14.85,10.72a4.08,4.08,0,0,0-.92,2.58.43.43,0,0,1,0,0h4a.65.65,0,0,0,.52-.26l.93-1.24a.22.22,0,0,1,.35,0l.93,1.24a.68.68,0,0,0,.53.26h.91a.43.43,0,0,1,0,0A4.07,4.07,0,0,0,18,9.23a4.41,4.41,0,0,0-.52,0,2,2,0,0,0,0-.36,2,2,0,1,0-2.66,1.82Z"></path>
                <path d="M23.42,20.31a5.55,5.55,0,0,0-3.87-1.57H16.46a5.65,5.65,0,0,0-5.62,5.62v4.69H24.18a1,1,0,0,0,1-1V24.36A5.57,5.57,0,0,0,23.42,20.31Z"></path>
                <path d="M20.62,13.09l-.93-1.24a.22.22,0,0,0-.35,0l-.93,1.24a.65.65,0,0,1-.52.26h-4a1,1,0,0,0,0,.17,1.62,1.62,0,0,0,0,.22l0,.19,0,.21c0,.06,0,.12.05.19s0,.13,0,.2l.07.18.07.19.09.17.08.18.11.17a1.4,1.4,0,0,0,.1.16l.12.17a1.71,1.71,0,0,0,.11.14l.14.16.12.13.16.15a.69.69,0,0,1,.13.11l.19.14.12.09.21.13.13.07a1.67,1.67,0,0,0,.23.12l.12.05.28.11.09,0,.35.09h0a4.47,4.47,0,0,0,.82.08,4,4,0,0,0,1.21-.18h0l.34-.13.06,0,.3-.15.06,0,.27-.16.07-.05.24-.18.08-.07.21-.19.07-.08.19-.21.07-.09.17-.22.06-.11.14-.22.06-.13a1.63,1.63,0,0,0,.11-.23s0-.09.05-.13l.09-.24a.83.83,0,0,1,0-.15l.06-.24L22,14l0-.24a.91.91,0,0,0,0-.17,1.48,1.48,0,0,0,0-.21h-.91A.68.68,0,0,1,20.62,13.09Z"></path>
              </svg>
            </Box>
            <Text fontSize={"xl"} fontWeight={"medium"} mb={"10px"}>
              Get aligned
            </Text>
            <Box width={"90%"} height={"40px"} >
              <Text textAlign={"center"}>
                A shared practice of communication between teams.
              </Text>
            </Box>
          </Box>
          <Box
           width={{
            base: "100%",
            sm: "80%",
            md: "33%",
            lg: "33%",
            xl: "33%",
            "2xl": "36%",
          }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            flexDirection={"column"}
            height={"200px"}
          >
            <Box mt={"20px"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin meet"
                viewBox="0 0 36 36"
                style={{ width: "100%", height: "50px" }}
              >
                <path d="M31.5,23.1a3.47,3.47,0,0,0-3.45,3.45s0,.06,0,.09A3.45,3.45,0,1,0,31.5,23.1Z"></path>
                <path d="M13.74,16.09,7.68,9.88a3.45,3.45,0,0,1-1.94,1.88l6.14,6.29A5.23,5.23,0,0,1,13.74,16.09Z"></path>
                <path d="M7.68,9.88A3.45,3.45,0,1,0,4.5,12a3.38,3.38,0,0,0,1.24-.24A3.45,3.45,0,0,0,7.68,9.88Z"></path>
                <path d="M28.06,26.64s0-.06,0-.09a3.4,3.4,0,0,1,1-2.42L21.7,21.22a5.28,5.28,0,0,1-1,2.5Z"></path>
                <path d="M22,9.14,18,15.53A5.35,5.35,0,0,1,20.32,17l4.07-6.57A5.25,5.25,0,0,1,22,9.14Z"></path>
                <path d="M25.5,10.5a5.25,5.25,0,1,0-1.11-.12A5.1,5.1,0,0,0,25.5,10.5Z"></path>
                <path d="M12,23.18,5.79,29.35A3.45,3.45,0,0,1,7.7,31.26l6.17-6.17A5.3,5.3,0,0,1,12,23.18Z"></path>
                <path d="M20.32,17A5.35,5.35,0,0,0,18,15.53a5.27,5.27,0,0,0-6.15,2.52,5.27,5.27,0,0,0-.63,2.5A5.2,5.2,0,0,0,12,23.18a5.3,5.3,0,0,0,1.91,1.91,5.24,5.24,0,0,0,6.81-1.37,5.28,5.28,0,0,0,1-2.5,4.91,4.91,0,0,0,.05-.67A5.27,5.27,0,0,0,20.32,17Z"></path>
                <path d="M5.79,29.35A3.45,3.45,0,1,0,7.7,31.26,3.45,3.45,0,0,0,5.79,29.35Z"></path>
              </svg>
            </Box>
            <Text fontSize={"xl"} fontWeight={"medium"}  textAlign={"center"} mb={"10px"}>
              Connect everything
            </Text>
            <Box width={"90%"} height={"30px"}>
              <Text textAlign={"center"}>
                Connect to where work happens with embeds.
              </Text>
            </Box>
          </Box>
          <Box
            width={{
              base: "100%",
              sm: "80%",
              md: "33%",
              lg: "33%",
              xl: "33%",
              "2xl": "36%",
            }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            flexDirection={"column"}
            height={"200px"}
          >
            <Box mt={"20px"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin meet"
                viewBox="0 0 36 36"
                style={{ width: "100%", height: "50px" }}
              >
                <path d="M14.22,27.79a3.69,3.69,0,0,1,3.69-3.69h.17a3.69,3.69,0,0,1,3.68,3.69V28a3.69,3.69,0,0,1-3.69,3.68h-.16A3.69,3.69,0,0,1,14.22,28Z"></path>
                <path d="M1.37,11.27a23.5,23.5,0,0,1,33.26,0l0,0,0,0,.1.12.81.81a1.41,1.41,0,0,1,0,1.95l0,.05a1.43,1.43,0,0,1-2,0l0,0-1-1-.13-.15v0l-.1-.1A20.68,20.68,0,0,0,3.61,13l-.24.24-1,1a1.41,1.41,0,0,1-2,0,1.43,1.43,0,0,1,0-2l0,0Z"></path>
                <path d="M5.94,18.66a17.06,17.06,0,0,1,24.12,0,1.41,1.41,0,0,1-2,2,14.24,14.24,0,0,0-20.12,0,1.41,1.41,0,0,1-2-2Z"></path>
              </svg>
            </Box>
            <Text textAlign={"center"} fontSize={"xl"} fontWeight={"medium"} mb={"10px"}>
              Find signal
            </Text>
            <Box width={"90%"} height={"30px"}>
              <Text textAlign={"center"} fontSize={{
                base: "12px",
                sm: "12px",
                md: "xl",
                lg: "xl",
                xl: "xl",
                "2xl": "xl",
              }}>
                Get updates on the projects, goals, and topics relevant to you.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box bg={"#091e42 "} width={"100%"} height={"auto"}>
        <Box width={"90%"} margin={"auto"} mt={"5px"} mb={"20px"} p={"4"}>
          <Text
            textAlign={"center"}
            color={"white"}
            fontSize={{
              base: "xl",
              sm: "2xl",
              md: "3xl",
              lg: "3xl",
              xl: "4xl",
              "2xl": "4xl",
            }}
            fontWeight={"medium"}
          >
            From FOMO to in-the-know
          </Text>
          <Text textAlign={"center"} color={"white"} fontSize={{
              base: "15px",
              sm: "15px",
              md: "xl",
              lg: "xl",
              xl: "xl",
              "2xl": "xl",
            }}>
            Unblock teams with the answers they need to align and move work
            forward.
          </Text>
          <Box
          
            display={"flex"}
            width={"100%"}
            mt={"60px"}
            gap={"20px"}
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
              "2xl": "row",
            }}
            justifyContent={"space-evenly"}
            alignItems={"center"}
          >
            <Image
              height={{
                base: "180px",
                sm: "210px",
                md: "250px",
                lg: "300px",
                xl: "400px",
                "2xl": "400px",
              }}
              width={{
                base: "70%",
                sm: "70%",
                md: "50%",
                lg: "50%",
                xl: "50%",
                "2xl": "50%",
              }}
              backgroundPosition={"cover"}
              src="https://wac-cdn.atlassian.com/dam/jcr:bb93b8ad-14b8-4942-a81b-1f1f42993ae3/AtlasWAC_Goal%20Tracking.png?cdnVersion=1528"
            />
            <Box
             
              color={"white"}
              width={{
                base: "100%",
                sm: "100%",
                md: "50%",
                lg: "50%",
                xl: "50%",
                "2xl": "50%",
              }}
              display={"flex"}
              flexDirection={"column"}
              gap={"20px"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Box width={"60%"} margin={"auto"}>
                <Text fontSize={"13px"} textAlign={"left"}>
                  WHAT ARE WE DOING & WHY?
                </Text>
              </Box>
              <Box width={"60%"} margin={"auto"}>
                <Text fontSize={"2xl"} fontWeight={"bold"} textAlign={"left"}>
                  Goal tracking that empowers teams
                </Text>
              </Box>
              <Box>
                <Text
                  width={"60%"}
                  fontSize={"17px"}
                  textAlign={"left"}
                  margin={"auto"}
                >
                  Understand how teams' work contributes to shared goals, and
                  how it’s tracking over time.
                </Text>
              </Box>
            </Box>
          </Box>
          {/*  */}
          <Box
            display={"flex"}
            width={"100%"}
            mt={"60px"}
            gap={"20px"}
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
              "2xl": "row",
            }}
            justifyContent={"space-evenly"}
            alignItems={"center"}
          >
            <Box
              color={"white"}
              width={{
                base: "100%",
                sm: "100%",
                md: "50%",
                lg: "50%",
                xl: "50%",
                "2xl": "50%",
              }}
              display={"flex"}
              flexDirection={"column"}
              gap={"20px"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Box width={"60%"} margin={"auto"}>
                <Text fontSize={"13px"} textAlign={"left"}>
                  HOW’S IT GOING?
                </Text>
              </Box>
              <Box width={"60%"} margin={"auto"}>
                <Text fontSize={"2xl"} fontWeight={"bold"} textAlign={"left"}>
                  Get updates with just enough context
                </Text>
              </Box>
              <Box>
                <Text
                  width={"60%"}
                  fontSize={"17px"}
                  textAlign={"left"}
                  margin={"auto"}
                >
                  Tweet-sized updates save everyone time and engage in ways that
                  status meetings can’t.
                </Text>
              </Box>
            </Box>
            <Image
              height={{
                base: "180px",
                sm: "210px",
                md: "250px",
                lg: "300px",
                xl: "400px",
                "2xl": "400px",
              }}
              width={{
                base: "70%",
                sm: "70%",
                md: "50%",
                lg: "50%",
                xl: "50%",
                "2xl": "50%",
              }}
              backgroundPosition={"cover"}
              src="https://wac-cdn.atlassian.com/dam/jcr:51717023-7833-43e6-bc0e-28269a0a466a/q2-Hows%20it%20going.png?cdnVersion=1528"
            />
          </Box>
          {/*  */}
          <Box
            display={"flex"}
            width={"100%"}
            mt={"60px"}
            gap={"20px"}
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
              "2xl": "row",
            }}
            justifyContent={"space-evenly"}
            alignItems={"center"}
          >
            <Image
             height={{
              base: "180px",
              sm: "210px",
              md: "250px",
              lg: "300px",
              xl: "400px",
              "2xl": "400px",
            }}
            width={{
              base: "70%",
              sm: "70%",
              md: "50%",
              lg: "50%",
              xl: "50%",
              "2xl": "50%",
            }}
              backgroundPosition={"cover"}
              src="https://wac-cdn.atlassian.com/dam/jcr:78d294f2-8af9-4771-9542-85f551863ec6/q3-Whos%20working%20on%20it.png?cdnVersion=1528"
            />
            <Box
              color={"white"}
              width={{
                base: "100%",
                sm: "100%",
                md: "50%",
                lg: "50%",
                xl: "50%",
                "2xl": "50%",
              }}
              display={"flex"}
              flexDirection={"column"}
              gap={"20px"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Box width={"60%"} margin={"auto"}>
                <Text fontSize={"13px"} textAlign={"left"}>
                  WHO’S WORKING ON IT?
                </Text>
              </Box>
              <Box width={"60%"} margin={"auto"}>
                <Text fontSize={"2xl"} fontWeight={"bold"} textAlign={"left"}>
                  Connect teams and work - all in one place
                </Text>
              </Box>
              <Box>
                <Text
                  width={"60%"}
                  fontSize={"17px"}
                  textAlign={"left"}
                  margin={"auto"}
                >
                  Easily visualize, browse, and connect teams and work right
                  from the all-new teams directory experience on Atlas.
                </Text>
              </Box>
            </Box>
          </Box>
          {/*  */}
          <Box
            display={"flex"}
            width={"100%"}
            mt={"60px"}
            gap={"20px"}
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
              "2xl": "row",
            }}
            justifyContent={"space-evenly"}
            alignItems={"center"}
          >
            <Box
              color={"white"}
              width={{
                base: "100%",
                sm: "100%",
                md: "50%",
                lg: "50%",
                xl: "50%",
                "2xl": "50%",
              }}
              display={"flex"}
              flexDirection={"column"}
              gap={"20px"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Box width={"60%"} margin={"auto"}>
                <Text fontSize={"13px"} textAlign={"left"}>
                  WHAT DO WE KNOW?
                </Text>
              </Box>
              <Box width={"60%"} margin={"auto"}>
                <Text fontSize={"2xl"} fontWeight={"bold"} textAlign={"left"}>
                  Learn without knowing who to ask
                </Text>
              </Box>
              <Box>
                <Text
                  width={"60%"}
                  fontSize={"17px"}
                  textAlign={"left"}
                  margin={"auto"}
                >
                  Atlas automatically aggregates teams, their projects, goals,
                  and knowledge by topic.
                </Text>
              </Box>
            </Box>
            <Image
             height={{
              base: "180px",
              sm: "210px",
              md: "250px",
              lg: "300px",
              xl: "400px",
              "2xl": "400px",
            }}
            width={{
              base: "70%",
              sm: "70%",
              md: "50%",
              lg: "50%",
              xl: "50%",
              "2xl": "50%",
            }}
              backgroundPosition={"cover"}
              src="https://wac-cdn.atlassian.com/dam/jcr:13c56464-e75e-48a3-a6b3-52dc5a7c6c0d/AtlasWAC_What%20do%20we%20know.png?cdnVersion=1528"
            />
          </Box>
        </Box>
      </Box>
      {/*  */}
      <Box width={"90%"} margin={"auto"} mb={"80px"}>
        <Text
          mb={"10px"}
          mt={"20px"}
          textAlign={"center"}
          fontSize={{
            base: "xl",
            sm: "2xl",
            md: "3xl",
            lg: "3xl",
            xl: "4xl",
            "2xl": "4xl",
          }}
          fontWeight={"medium"}
        >
          Get complete context, wherever work happens
        </Text>
        <NewCard images={images} cards={cards} />
        <Text
          mb={"10px"}
          mt={"20px"}
          textAlign={"center"}
          fontSize={{
            base: "xl",
            sm: "2xl",
            md: "3xl",
            lg: "3xl",
            xl: "4xl",
            "2xl": "4xl",
          }}
          fontWeight={"medium"}
        >
          A win/win for every team
        </Text>
        <Text textAlign={"center"} fontSize={"xl"}>
          Atlas empowers teams to work in the tools that let them thrive.
        </Text>
        <Flex width={"80%"} margin={"auto"} mt={"20px"}>
          <Box>
            <Image src="https://wac-cdn.atlassian.com/dam/jcr:ef3037e5-9142-4640-b8a9-86663dbf3560/logos-desktop.png?cdnVersion=1528" />
          </Box>
        </Flex>
      </Box>
      <Box bg={"#091e42 "} width={"100%"} height={"auto"} color={"white"} p={'4'}>
        <Text
          mb={"10px"}
          mt={"20px"}
          textAlign={"center"}
          fontSize={{
            base: "xl",
            sm: "2xl",
            md: "3xl",
            lg: "3xl",
            xl: "4xl",
            "2xl": "4xl",
          }}
          fontWeight={"medium"}
        >
          Don’t just take our word for it
        </Text>
        <Text textAlign={"center"} fontSize={"xl"}>
          Companies of all shapes and sizes use Atlas to achieve alignment
          across teams and enable exceptional outcomes.
        </Text>
        <ImageGallery  />
        <Box display={"flex"}  alignItems={"center"}justifyContent={"space-around"} flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
              "2xl": "row",
            }}  height={{
              base: "600px",
              sm: "350px",
              md: "250px",
              lg: "200px",
              xl: "200px",
              "2xl": "200px",
            }}
            p="4"
            width={{
              base: "100%",
              sm: "100%",
              md: "90%",
              lg: "70%",
              xl: "70%",
              "2xl": "70%",
            }} margin={"auto"} border={"1px solid #00c4e4"}>
            <Image  height={"100px"} width={"100px"} backgroundPosition={"cover"} src="https://wac-cdn.atlassian.com/dam/jcr:16b09471-f4a7-4414-a6ff-20428c0349cf/the-loop.png?cdnVersion=1528"/>
       <Box height={"200px"}  display={"flex"} flexDirection={"column"}  gap={"20px"}alignItems={"center"} justifyContent={"center"}>
            <Box width={"90%"}>
            <Text textAlign={"left"} fontWeight={"medium"} fontSize={"2xl"}>A system of communication for modern work</Text>
            </Box>
            <Box width={"90%"}>
              <Text textAlign={"left"}fontSize={"17px"} >You’ve heard of Agile. Now there’s The Loop, a no BS system of communication for teams of teams. Designed for you from best practices of high performing teams.</Text>
            </Box>
       </Box>
        </Box>
      </Box>

      {/*  */}
    </Box>
  );
};

export { Atlas };
