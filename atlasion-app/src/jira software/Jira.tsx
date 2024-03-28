import { Box, Button, Center, Flex, Grid, GridItem, Image, Stack, Text } from '@chakra-ui/react';


const Jira: React.FC = () => {
  return (
    <>
    <Box bg='rgb(9,30,66)' w='100%' p={4} color='white' marginTop={40} height={500} display='flex'>
      {/* Contents */}
      <Flex direction="column" justify="center" marginLeft={80} fontSize={25} width={800}>
        <h1 style={{fontFamily:"robot"}}>Move fast, stay aligned,<br /> and build better - <br /> together</h1>
        <h5 style={{fontFamily:"Charli Display"}}>The #1 software development tool used by agile teams</h5>
        <Button colorScheme='blue' bg="yellow" width={100} height={30}  border={'none'} fontFamily={'segoe'} >Get it free</Button>

      </Flex>
     
      
      {/* Image */}
      <Flex justify="center" align="center">
        <Image src='https://wac-cdn.atlassian.com/misc-assets/webp-images/JSW_ProductTour_DarkModeIllustration_Hero.webp' alt='Dan Abramov' height={500} width="100%" />
      </Flex>
      
    </Box>
    <Box bg='rgb(9,30,66)' w='100%' p={4} color='white' height={800} display='flex' flexDirection='column' alignItems='center' justifyContent='center'  marginTop={-300}>
      <Flex as="h1" textAlign="center">All from a single source of truth</Flex>
      
      <Stack spacing={20} direction='row' align='center' marginTop={4}>
        <Button size='lg' borderRadius={90} height={40} width={70} border='none'>Plan</Button>
        <Button size='lg' borderRadius={90} height={40} width={70} border='none'>Track</Button>
        <Button size='lg' borderRadius={90} height={40} width={70} border='none'>Release</Button>
        <Button size='lg' borderRadius={90} height={40} width={70} border='none'>Report</Button>
        <Button size='lg' borderRadius={90} height={40} width={70} border='none'>Automate</Button>
      </Stack></Box>
      <Box bg='rgb(9,30,66)' w='100%' p={4} color='white' marginTop={-300} height={500} display='flex' justifyContent='center' alignItems='center'>
      {/* Contents */}
      <Flex direction="column" justify="center" fontSize={25} textAlign="center"  marginTop={-350}>
        <Text as="h1" marginLeft={-250} >Plan</Text>
        <Text as="h5" marginTop="-10px" marginLeft={-80} > Break the big ideas down into</Text>
 
  <Text as="h5" marginTop="-20px" marginLeft={-30} > manageable chunks across teams</Text>
  <Text as="h5" marginTop="-20px" marginLeft={-20} >with user stories, issues, and tasks.</Text>

      </Flex>

      {/* Image */}
      <Flex justify="center" align="center" marginLeft={100}>
        <Image src='https://wac-cdn.atlassian.com/dam/jcr:49c215de-3b05-40f8-96e2-6dc65c70caa6/Board.png?cdnVersion=1187' alt='Dan Abramov' height={500} maxWidth="80%" marginLeft={10} />
      </Flex>
    
    </Box>
   <hr  style={{ width: '400px', height: '10px', border: 'none', backgroundImage: 'linear-gradient(to right, blue, white, green)', margin: '25px 0'}}/>
   <Box bg='rgb(9,30,66)' w='100%' p={4} color='white' marginTop={-0} height={300} display='flex' flexDirection='column' alignItems='center'>
      {/* Contents */}
      <Text as="h1" align='center'>Easier than ever</Text>
      
      <Flex direction="row" align="center" fontSize={25} mt={10}>
        {/* First Image */}
        <Flex align="center">
          <Image src='https://wac-cdn.atlassian.com/dam/jcr:ef95fe7f-398f-4690-83af-831ef07adf34/icon-templates.svg?cdnVersion=1216' width={100} height={100} />
         
        
        </Flex>
    

        {/* Horizontal Line */}
        <hr style={{ width: '400px', height: '10px', border: 'none', backgroundImage: 'linear-gradient(to right, blue, white, green)', margin: '25px 0' }} />

        {/* Second Image */}
        <Flex align="center">
          <Image src='https://wac-cdn.atlassian.com/dam/jcr:99363e04-3456-415d-b2e1-b311cc0a8444/icon-workflow.svg?cdnVersion=1216' width={100} height={100} />
        </Flex>
      </Flex>
      
    
      
      
    </Box>
    <Box bg='rgb(9,30,66)' w='100%' p={4} color='white' marginTop={-350} height={700} display='flex'>
      {/* Contents */}
      <Flex direction="column" justify="center" marginLeft={80} fontSize={25}>
        <Text as="h3">Templates give you a head start</Text>
        <Text as="h6" marginTop={-20}>Get started with ready-made templates.</Text>
        
      </Flex>
     
      
    </Box>
    <Box bg='black' w='20%' p={4} color='white' marginTop={-300} height={70} display='flex'  marginLeft={100}>
  {/* Contents */}
  <Flex direction="row" justify="center" marginLeft={80} fontSize={20}>
    <Image src='https://wac-cdn.atlassian.com/dam/jcr:9567a40e-6541-4905-bf08-dfe201aa80e7/illustrations-spot-Agile.svg?cdnVersion=1194' marginLeft={-80} />
      
    <Flex direction="column" justify="center" ml={4}>
      <Text fontSize="lg">Scrum</Text>
      <Text as='p' fontSize="sm" marginTop={-10}>Learn more</Text>
    </Flex>
  </Flex>
</Box>

    <Box bg='black' w='20%' p={4} color='white' marginTop={10} height={70} display='flex'  marginLeft={100}>
      {/* Contents */}
      <Flex direction="row" justify="center" marginLeft={80} fontSize={20}>
       <Image src='https://wac-cdn.atlassian.com/dam/jcr:7d0e6516-361d-4ec3-bd0f-22d7c7d105b4/illustrations-spot-JIRA%20Board.svg?cdnVersion=1194' marginLeft={-80}   marginTop={5} width="90px"></Image>
        
       <Flex direction="column" justify="center" ml={10} marginLeft={10}>
        <Text fontSize="lg">Kanban</Text>
        <Text as='p' fontSize="sm" marginTop={-10}>Learn more</Text>
      </Flex>
      </Flex>
    
    </Box>
    <Box bg='black' w='20%' p={4} color='white' marginTop={10} height={70} display='flex'  marginLeft={100}>
      {/* Contents */}
      <Flex direction="row" justify="center" marginLeft={80} fontSize={20}>
       <Image src='https://wac-cdn.atlassian.com/dam/jcr:a2b254dd-146a-4ea9-9ae0-ec5d250a9cbf/JSW_ProductTour_DarkModeIllustration_BugTracking_Spot.svg?cdnVersion=1194' marginLeft={-80}  marginTop={5} width="90px"></Image>
        
       <Flex direction="column" justify="center" ml={10} >
        <Text fontSize="lg">Bug tracking</Text>
        <Text as='p' fontSize="sm" marginTop={-10}>Learn more</Text>
      </Flex>
      </Flex>
    
    </Box>
    <Box bg='rgb(9,30,66)' w='20%' p={4} color='white' marginTop={10} height={70} display='flex'  marginLeft={100}>
      {/* Contents */}
      <Flex direction="row" justify="center" marginLeft={80} fontSize={20} >
       <Image src='https://wac-cdn.atlassian.com/dam/jcr:6505f1fe-f628-460f-987b-c07fab309341/devops-spot-logo.svg?cdnVersion=1194' marginLeft={-80}  marginTop={5} width="90px"></Image>
        
       <Flex direction="column" justify="center" ml={10} >
        <Text fontSize="lg">DevOps</Text>
        <Text as='p' fontSize="sm" marginTop={-10}>Learn more</Text>
      </Flex>
      </Flex>
    
    </Box>

    <Box bg='rgb(9,30,66)' w='100%' p={4} color='white' marginTop={-470} height={500}  >
      {/* Contents */}
      <Flex direction="column" justify="center" marginLeft={900} fontSize={25}>
        <Text as="h3">Then customize as you grow</Text>
        <Text as="h6" marginTop={-20}>Jira adapts to the way you work, not the other way around. Start <br />simple, customize as you go.</Text>

       
      </Flex>
     
      
      {/* Image */}
      <Flex justify="end" align="end" height={50} width={500} marginLeft={900} marginTop={300}>
        <Image src='https://wac-cdn.atlassian.com/misc-assets/webp-images/JSW_ProductTour_DarkModeIllustration_Workflow.webp' alt='Dan Abramov' height={400} width="70%"  marginTop={-100} />
      </Flex>
      
    </Box>
   
    <Box  w='100%' p={4}  marginTop={80} height={500} display='flex'>
    <Grid
      h='500px' w="800px"
      templateRows='repeat(3, 1fr)'
      templateColumns='repeat(3, 1fr)'
      gap={-31}
      marginLeft={100}
     
 
    >
      <GridItem rowSpan={1} colSpan={1} >
       <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlLRYD2HZXLVkqVegRBoVDws6G_97wwhiZrsYfe1MAcXwuTPeA'  borderRadius={20}  h='100px' w="100px" boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"></Image>
   
      
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
      <Image src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQjDd_AD03l0nKuWav3BPfx4j8Cf8ZLDBUsb1SobOcUNhO2-lEp' borderRadius={20} h='100px' w="100px" boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"></Image>
     
      </GridItem>
      <GridItem rowSpan={1} colSpan={1} >
      <Image src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQgIVtmex-aWK3oxkqywux-uM6Mwg2aFMN-dwpMaAw6uGyB_NCz'borderRadius={20} h='100px' w="100px" boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"></Image>
   
      </GridItem>
      <GridItem rowSpan={1} colSpan={1} >
    <Image src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQGaxgrU7CiwbqeNDeFVoW2JC8wlgeHRAXGWJTgpPv8Se9nWyQt' borderRadius={20} h='100px' w="100px" boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"></Image>
   
      </GridItem>
      <GridItem rowSpan={1} colSpan={1} >
    <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZYHew_CLFDAv8jYs13i0BEVcc74rHjbOxeElCnquIjDmmp-K' borderRadius={20} h='100px' w="100px" boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"></Image>
   
      </GridItem>
      <GridItem rowSpan={1} colSpan={1} >
    <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4d1ExhKdRaMfZGn7U-MDXEAFio0ZOmrQmZKO9YTcgdW8LAtju' borderRadius={20} h='100px' w="100px" boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"></Image>
   
      </GridItem>

      <GridItem rowSpan={1} colSpan={1} >
    <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAvMxO8VgK2PYWMVM7K6miAvYWlXCzOv3_7CGGw_JT2-IOd8uN' borderRadius={20}  h='100px' w="100px" boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"></Image>
   
      </GridItem>
      <GridItem rowSpan={1} colSpan={1} >
    <Image src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSUB60eje6F6wEPnE-gP8lhQakhMmHm9OfdROutcFSOHeEC3hUz' borderRadius={20} h='100px' w="100px"boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"></Image>
   
      </GridItem>
      <GridItem rowSpan={1} colSpan={1} >
    <Image src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQPAAfqBZiO3iNnEFqpwYkWdxvf87uClyuM7a9BF_bWU_b3qzzH'  borderRadius={20} h='100px' w="100px" boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"></Image>
   
      </GridItem>
    </Grid>
   
<Box   p={4}  marginTop={40} height={200} display='flex' width="40%" marginLeft={50}>
      {/* Contents */}
      <Flex direction="column" justify="center" marginLeft={-100} fontSize={20}>
    <Text as="h1" whiteSpace="nowrap">
      We believe in open relationships
    </Text>
        <Text as="p">If your team uses it, we integrate with it. Easily add your tools from the Atlassian Marketplace, keeping Jira as your central source of truth.</Text>
      <Button color="blue" width={180}   border="1px solid blue" padding="8px" borderRadius={10} fontSize={16} marginLeft={150}>Explore Integrations</Button>
      </Flex>
</Box>
</Box>
<Box bg='rgb(9,30,66)' w='100%' p={4} color='white' marginTop={40} height={900} display='flex'>
      {/* Contents */}
      <Flex justify="center" align="center" w="50%" marginLeft={100} >
        <Image src='https://wac-cdn.atlassian.com/dam/jcr:7eb430e2-e868-4f2d-973d-b5d6314e3d8d/devops-diagram-compressed.png?cdnVersion=1195' alt='Dan Abramov' height={700} width="900px" />
      </Flex>
  
      <Flex direction="column" justify="center" marginLeft={80} fontSize={25}>
        <Text as="h2">Let developers focus on code</Text>
        <Text as="p">Developers want to focus on code, not update issues. We get it! Open DevOps makes it easier to do both regardless of the tools you use. Now developers can stay focused and the business can stay aligned.</Text>
        <Button colorScheme='blue' bg="blue" width={180} height={30}  border="1px solid" color="white">Explore Open DevOps</Button>
        <Text as="p" marginTop={100}>HOW CUSTOMERS ARE BENEFITING.</Text>
      <Image src="https://wac-cdn.atlassian.com/dam/jcr:c137f24d-10a9-473e-bbcc-0fababfb9857/FLO_logo_horizontal_white%201.png?cdnVersion=1196" width="200px"></Image>
      <Text as="h2">900%</Text>
      <Text as="h2" marginTop={-30}>increase in deployments</Text>
      <Text as="h2">50%</Text>
      <Text as="h2" marginTop={-30}>decrease in cycle time</Text>
      
      </Flex>
    </Box>
    <Box  w='100%' p={4}  marginTop={200} height={500} display='flex'>
      {/* Contents */}
      <Flex direction="column" justify="center" marginLeft={80} fontSize={25}>
        <Image src='https://wac-cdn.atlassian.com/dam/jcr:aa8f5b1f-b8ac-4d6e-9e7c-abe573b68164/number-one.svg?cdnVersion=1198' height={300} width={300}></Image>
        <Text as="h2" color={'#42526e'}>Why Jira is the #1  tool<br /> recommended by agile <br />teams.*</Text>
        <Text as="p">Trusted by more than 100,000 organizations, Jira Software <br />comes out-of-the-box with the features and best practices <br /> agile teams need to develop and evolve their agile practices.</Text>
        <Text as="p" fontSize={18}>*2021 State of Agile Report</Text>
      </Flex>
     
      
      {/* Image */}
      <Grid
      h='500px' w="800px"
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(2, 1fr)'
      gap={40}
      marginLeft={160}
    >
      <GridItem rowSpan={1} colSpan={1} >
       <Image src='https://wac-cdn.atlassian.com/dam/jcr:c30fba51-a9ab-4815-ad95-83e3f7582349/resource-agile.png?cdnVersion=1198'   h='200px' w="400px"></Image>
    <Text as="a" color={"blue"} fontSize={20}>Learn agile best practices</Text>
      
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
      <Image src='https://wac-cdn.atlassian.com/misc-assets/webp-images/resource-playbook.webp'  h='200px' w="400px"></Image>
      <Text as="a" color={"blue"} fontSize={20}>Team Playbook</Text>
      </GridItem>
      <GridItem rowSpan={1} colSpan={1} >
      <Image src='https://wac-cdn.atlassian.com/misc-assets/webp-images/resource-community.webp' h='200px' w="400px"></Image>
      <Text as="a" color={"blue"} fontSize={20}>Jira Software community</Text>
      </GridItem>
      <GridItem rowSpan={1} colSpan={1} >
    <Image src='https://wac-cdn.atlassian.com/dam/jcr:1de028c2-f441-40e9-b3ee-721e35e4a649/resource-devops.png?cdnVersion=1198'  h='200px' w="400px"></Image>
    <Text as="a" color={"blue"} fontSize={20}>Learn DevOps best practices</Text>
      </GridItem>
    </Grid>
    </Box>
    <Box bg='rgb(9,30,66)' w='100%' p={4} color='white' marginTop={130} height={400} display='flex'>
  <Flex direction="column" justify="center" marginLeft={80} fontSize={25} marginTop={0}>
    <Text as="h1">Built for teams of 1 to 35,000</Text>
    <Text as="p" marginTop={-20}>A growing team doesn’t need to mean growing pains. With <br />best-of-breed features, security, privacy, and the right tool for <br />every step of your journey - Jira Software allows you to scale <br />without friction - regardless of your company size.</Text>
  </Flex>
  </Box>
  
  <Box bg='rgb(9,30,66)' w='100%' p={4} color='white' marginTop={0} height={200} display='flex'>
  
    <Flex direction="row" gap={100} marginLeft={300}>
      <Image src='https://wac-cdn.atlassian.com/dam/jcr:b1013bac-01ff-4be2-827a-8a16b76d0a4b/JSW%20free-responsive.png?cdnVersion=1203' alt='Dan Abramov' height={130} width="15%" />
      <Image src='https://wac-cdn.atlassian.com/dam/jcr:5cae308d-24a4-40d0-8fe2-ce7f46cd7a02/JSW%20sign-responsive.png?cdnVersion=1203' alt='Dan Abramov' height={130} width="15%" />
      <Image src='https://wac-cdn.atlassian.com/dam/jcr:c36a7707-da80-46a7-9cc2-38abca992964/Prem%20sign-responsive.png?cdnVersion=1203' alt='Dan Abramov' height={130} width="15%" />
      <Image src='https://wac-cdn.atlassian.com/dam/jcr:e4223ecb-8867-46cb-b73d-4218e4807778/Ent%20sign-responsive.png?cdnVersion=1203' alt='Dan Abramov' height={130} width="15%" />
      <Image src='https://wac-cdn.atlassian.com/dam/jcr:c177344d-7e41-4576-b4eb-85b346d6653b/JA%20sign-responsive.png?cdnVersion=1203' alt='Dan Abramov' height={130} width="15%" />
    </Flex>
   
</Box>
<hr style={{ width: '1100px', height: '10px', border: 'none', backgroundImage: 'linear-gradient(to right, black,  green)', margin: '-25px 0', marginLeft:'100px' }} />


<Box bg='rgb(9,30,66)' w='100%' p={4} color='white'  height={200} display='flex'>
  <Flex direction="row" justify="center" marginLeft={200} fontSize={16} marginTop={0}>
    <Text as="p" marginLeft={100} >Jira Software free forever  <br />for teams up to 10</Text>
    <Text as="p" marginTop={20} marginLeft={60}>Jira Software Standard for <br /> 
    growing teams</Text>
    <Text as="p" marginLeft={40}>Scale across teams with <br />Jira Software Premium</Text>
    <Text as="p" marginLeft={40}>Connect and accelerate <br /> your entire enterprise</Text>
    <Text as="p" marginLeft={40}>Enterprise agility with Jira  <br />Align</Text>
  </Flex>
 
  </Box>
  <Box bg='rgb(9,30,66)' w='100%' p={4} color='white' height={200} display='flex'>
  <Center flex={1}>
    <Flex direction="column" justify="center" alignItems="center">
      <Text as="h1" fontSize={40}>Get Started with Jira Software</Text>
      <Button  bg="yellow" padding={15} border={'none'} mt={4} fontSize={16} borderRadius={10}>Get it free</Button>
      <Text as="p" mt={40} fontSize={24}>See features</Text>
    </Flex>
  </Center>
</Box>
  

    </>
  );
}

export default Jira;
