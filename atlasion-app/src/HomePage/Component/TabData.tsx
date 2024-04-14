import {
    Container,
    Image,
    Flex,
    Text,
    Box,
    Img,
    Grid
  } from '@chakra-ui/react'
  // 
  import React from 'react'
  import { ChevronRightIcon } from '@chakra-ui/icons';
  import image from "../../assets/HomePageIcon/mid_tab_image.png";
  import tab_2_image from "../../assets/HomePageIcon/mid_tab2_image.png"
  import tab_3_image from "../../assets/HomePageIcon/mid_tab3_image.png"
  import jira_Product_discovered_logo from "../../assets/HomePageIcon/Jira-Product-Discovery_logo-mark.png"
import { Link } from 'react-router-dom';

  
  interface FeatureProp{
      Product_name: string;
      description: string;
      imageUrl: string;
  }
  
  interface Top_Data_Props{
      Product_title: string;
      description: string;
  }
  
  export const Feature:React.FC<FeatureProp> = ({Product_name,description,imageUrl} ) => {
      return (
          <>
          <Flex  color={"black"} p={1} h={["3rem","4rem"]} _hover={{transform:"translate(1px)" , transition:"ease-in out 300ms"}} columnGap={[1,2]} alignItems={"center"}>
             <Box  h={"3rem"} w={"3rem"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
               <Img h={["2rem","2.8rem"]} w={["2rem","2.8rem"]}  src={imageUrl} />
             </Box>
             <Box fontSize={["0.5rem","0.7rem","0.9rem","1rem"]} fontWeight={"bold"} color={"gray.500"} display={"flex"} flexDirection={"column"} justifyContent={"center"} >
              <Text fontSize={["0.6rem","0.7rem","0.9rem","1.2rem"]} p={0} pr={["0.1rem","0.3rem"]} color={"black"} _hover={{color:"#2a6ed9"}}>{Product_name}</Text>
              <Text  pr={"0.3rem"} >{description}</Text>
             </Box>
          </Flex>
          </>
      )
    } 
  
  
  export const Top_Data:React.FC<Top_Data_Props>=({Product_title,description})=>{
      return(
          <Flex mt={[1,2,3,4]} flexDirection={"column"} rowGap={[2,3,5,7]}  w={"100%"}>
          <Box  px={1} color={"#091e42"} fontWeight={500} fontSize={["0.9rem","1rem","1.1rem","1.21rem"]}>{Product_title}
          </Box>
          <Flex  alignItems={"center"}  color="#2a6ed4" fontWeight="medium" _hover={{ transform: 'translateX(1px)', transition: 'ease-in-out 300ms'}} >
              <Text textAlign="center" px="1" flexWrap="nowrap" _hover={{ color: '#2a6ed4' }} fontSize={["0.7rem","0.8rem","0.9rem","1rem"]}>
                {description}
              </Text>
              <Flex h={"1rem"} alignItems={"center"}  justifyContent={"center"}>
              <ChevronRightIcon mt={[0,1]} />
              </Flex>
            </Flex>
            </Flex> 
      )
  }
  
  export default function SplitWithImage() {
    return (
      <Container  maxW={'6xl'} >
      <Flex flexDirection={["column","row","row","row"]} rowGap={"1rem"}>
       <Box w={["100%","60%","40%","30%"]}  color={"black"} >
         <Top_Data
           Product_title={"Make work flow across teams while connecting back to company goals"}
           description={"Work differently,together"} 
           />
          <Grid mt={7} flexDirection={"column"}  rowGap={5} gridTemplateColumns={["repeat(2,1fr)","repeat(1,1fr)","repeat(1,1fr)","repeat(1,1fr)"]}>
          <Link to={"/jiraSoftware"}>
            <Feature
             Product_name={"Jira Software"}
             description={"Project and issue tracking"}
             imageUrl={"https://tse1.mm.bing.net/th?id=OIP.3Xlbth8iI3LofCjgkU8cHwHaIC&pid=Api&P=0&h=180"}
             />
          </Link>
           <Link to={"/confluence"}>
             <Feature
             Product_name={"Confluence"}
             description={"Content collaboration"}
             imageUrl={"https://tse1.mm.bing.net/th?id=OIP.KK_wcCiud9ThyDfki_rKyAAAAA&pid=Api&P=0&h=180"}
             />
           </Link>
           <Link to={"/jiraServiceManagement"}>
             <Feature
             Product_name={"Jira Service Management"}
             description={"High-velocity ITSM"}
             imageUrl={"https://www.scoopadmin.com/theme/assets/galleries/jira-servicedesk-logo.png"}
             />
           </Link>
           <Link to={"/atlas"}>
             <Feature
             Product_name={"Atlas"}
             description={"Teamwork directory"}
             imageUrl={"https://attlasianmegamenuclone.vercel.app/logos-atlas-icon-gradient-blue.svg"}
             />
           </Link>
           </Grid>
          </Box>
          <Flex w={["100%","70%"]}>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                  image
              }
              objectFit={'cover'}
            />
          </Flex>
          </Flex>
      </Container>
    )
  }
  
  export const Feature_1:React.FC<FeatureProp> = ({Product_name,description,imageUrl} ) => {
      return (
          <>
          <Flex  color={"black"} p={1} h={["3rem","4rem"]} _hover={{transform:"translate(1px)" , transition:"ease-in out 300ms"}} columnGap={[1,2]} alignItems={"center"} >
             <Box  h={"3rem"} w={"3rem"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
               <Img h={["1.5rem","2.8rem"]} w={["1.5rem","2.8rem"]}  src={imageUrl} />
             </Box>
             <Box fontSize={["0.5rem","0.7rem","0.9rem","1rem"]} fontWeight={"bold"} color={"gray.500"} display={"flex"} flexDirection={"column"} justifyContent={"center"} >
              <Text fontSize={["0.6rem","0.7rem","0.9rem","1.2rem"]} p={0} pr={["0.1rem","0.3rem"]} color={"black"} _hover={{color:"#2a6ed9"}}>{Product_name}</Text>
              <Text  pr={"0.3rem"} >{description}</Text>
             </Box>
          </Flex>
          </>
      )
    }
    export const Top_Data_1:React.FC<Top_Data_Props>=({Product_title,description})=>{
      return(
          <Flex  mt={[1,2,3,4]} flexDirection={"column"} rowGap={[2,3,5,7]}>
          <Box px={1} color={"#091e42"} fontWeight={500} fontSize={["0.9rem","1rem","1.1rem","1.21rem"]}>{Product_title}
          </Box>
          <Flex  alignItems={"center"}  color="#2a6ed4" fontWeight="medium" _hover={{ transform: 'translateX(1px)', transition: 'ease-in-out 300ms'}} >
              <Text textAlign="center" px="1" flexWrap="nowrap" _hover={{ color: '#2a6ed4' }} fontSize={["0.7rem","0.8rem","0.9rem","1rem"]}>
                {description}
              </Text>
              <Flex h={"1rem"} alignItems={"center"}  justifyContent={"center"}>
              <ChevronRightIcon mt={[0,1]}   />
              </Flex>
            </Flex>
            </Flex> 
      )
  }
  export const Jira_service_management=()=>{
      return(
          <Container  maxW={'6xl'}>
               <Flex flexDirection={["column","row","row","row"]} rowGap={"1rem"}>
               <Box w={["100%","60%","40%","30%"]}    color={"black"} >
                  <Flex flexDirection={"column"} rowGap={[3,8]}>
                   <Top_Data_1
                       Product_title={"Enable your dev, IT ops, and business teams to deliver great service experiences"}
                       description={"Deliver at high Velocity"} 
                    />
                     <Link to={"/jiraServiceManagement"}>
                       <Feature_1
                            Product_name={"Jira Service Management"}
                            description={"High-velocity ITSM"}
                            imageUrl={"https://www.scoopadmin.com/theme/assets/galleries/jira-servicedesk-logo.png"}
                       />
                     </Link>
                     </Flex>
               </Box>
               <Flex w={["100%","70%"]} >
                  <Image
                      rounded={'md'}
                      alt={'feature image'}
                      src={tab_2_image}
                      objectFit={'cover'}
                   />
               </Flex>
              </Flex>
          </Container>
      )
  }
  
  
  export const Feature_2:React.FC<FeatureProp> = ({Product_name,description,imageUrl} ) => {
      return (
          <>
          <Flex  color={"black"} p={1} h={["3rem","4rem"]} _hover={{transform:"translate(1px)" , transition:"ease-in out 300ms"}} columnGap={[1,2]} alignItems={"center"}>
             <Box  h={["2rem","3rem"]} w={["2rem","3rem"]} display={"flex"} alignItems={"center"} justifyContent={"center"}>
               <Img h={["1.5rem","2.8rem"]} w={["1.5rem","2.8rem"]}  src={imageUrl} />
             </Box>
             <Box fontSize={["0.5rem","0.7rem","0.9rem","1rem"]} fontWeight={"bold"} color={"gray.500"} display={"flex"} flexDirection={"column"} justifyContent={"center"} >
              <Text fontSize={["0.6rem","0.7rem","0.9rem","1.2rem"]} p={0} pr={["0.1rem","","0.1rem","0.3rem"]} color={"black"} _hover={{color:"#2a6ed9"}}>{Product_name}</Text>
              <Text  pr={["0.1rem","0.3rem"]} >{description}</Text>
             </Box>
          </Flex>
          </>
      )
    } 
  
    export const Top_Data_2:React.FC<Top_Data_Props>=({Product_title,description})=>{
      return(
          <Flex mt={[1,2,3,4]} flexDirection={"column"} rowGap={[2,3,5,7]}>
          <Box px={1} color={"#091e42"} fontWeight={500} fontSize={["0.9rem","1rem","1.1rem","1.21rem"]}>{Product_title}
          </Box>
          <Flex  alignItems={"center"}  color="#2a6ed4" fontWeight="medium" _hover={{ transform: 'translateX(1px)', transition: 'ease-in-out 300ms'}} >
              <Text textAlign="center" px="1" flexWrap="nowrap" _hover={{ color: '#2a6ed4' }} fontSize={["0.7rem","0.8rem","0.9rem","1rem"]}>
                {description}
              </Text>
              <Flex h={"1rem"} alignItems={"center"}  justifyContent={"center"}>
              <ChevronRightIcon mt={[0,1]}/>
              </Flex>
            </Flex>
            </Flex> 
      )
  }
  
  export const AgileAndDevOps=()=>{
      return(
          <Container  maxW={'6xl'}>
      <Flex flexDirection={["column","row","row","row"]} rowGap={"1rem"} >
       <Box w={["100%","60%","40%","30%"]}  color={"black"} >
         <Top_Data_2
           Product_title={"Run a world-class agile software company—from discovery to delivery and operations"}
           description={"Explore Open DevOps"} 
           />
          <Grid mt={7} flexDirection={"column"}  rowGap={5} gridTemplateColumns={["repeat(2,1fr)","repeat(1,1fr)","repeat(1,1fr)","repeat(1,1fr)"]}>
          <Link to={"/jiraSoftware"}>
            <Feature_2
             Product_name={"Jira Software"}
             description={"Project and issue tracking"}
             imageUrl={"https://tse1.mm.bing.net/th?id=OIP.3Xlbth8iI3LofCjgkU8cHwHaIC&pid=Api&P=0&h=180"}
             />
          </Link>
           <Feature_2 
           Product_name={"Jira Product Discovery"}
           description={"Prioritization and roadmapping"}
           imageUrl={jira_Product_discovered_logo}
           />
           <Feature_2 
           Product_name={"Jira Align"}
           description={"Enterprise agile planning"}
           imageUrl={"data:image/png;base64,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"}
           />
           <Feature_2 
           Product_name={"Compass"}
           description={"Developer experience platform"}
           imageUrl={"https://cdn.worldvectorlogo.com/logos/atlassian-compass-1.svg"}
           />
           <Link to={"/bitBucket"}>
             <Feature_2
             Product_name={"Bitbucket"}
             description={"Code & Cl/CD"}
             imageUrl={"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/44_Bitbucket_logo_logos-512.png"}
             />
           </Link>
           </Grid>
          </Box>
          <Flex w={["100%","70%"]}  >
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={tab_3_image}
              objectFit={'cover'}
            />
          </Flex>
          </Flex>
      </Container>
      )
  }
  
  