import { Box, Button, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';

const BitBucket: React.FC = () => {
  return (
    <>
    <Box  bg='rgb(222,235,255)' w='100%' p={4} color='black' height={500}>
 <Text as='h1' align={'center'} color={'#42526e'}>Code & CI/CD, built for teams using Jira</Text>
 <Text as='h3' align={'center'} color={'#42526e'} fontFamily="Charlie Display">With best-in-class Jira integration, and built-in CI/CD, Bitbucket Cloud connects <br /> developer workflows from planning to incident management. Join millions of <br /> developers who choose to build on Bitbucket. </Text>
 <Button textAlign={'center'} marginLeft={700} bg={'blue'} color={'white'} padding={10} border={'none'} borderRadius={10}>Get it free</Button>
<Image src='https://wac-cdn.atlassian.com/dam/jcr:d37f290f-7d83-42e1-8eef-e6c65e995e21/Product-UI-001B_2x.png?cdnVersion=1512' width="80%" marginLeft={130}></Image>
<Flex direction="row">
  <Image src='https://wac-cdn.atlassian.com/dam/jcr:fbd117fc-0fcf-43f2-9a92-005b5159e361/illustrations-spot-Cloud.svg?cdnVersion=1512' height="100px" marginLeft={300} marginTop={100} />
  <Text marginLeft={30} as='h2' marginTop={100} color={'#42526e'} fontFamily="Charlie Display">Migrating to cloud? Listen to this webinar on 
  <br />Bitbucket Cloud's enterprise strategy + get <br /> migration tips.</Text>
  <Text marginLeft={-460} as='h4' marginTop={200} color={'blue'}>Learn more</Text>
</Flex>
  </Box>

  <Box bg='rgb(9,30,66)' w='100%' p={4} color='white' marginTop={700} height={300} display='flex'>
  {/* Contents */}
  <Flex direction="column" justify="center" align="center" width="100%" marginTop={-100}>
    <Image src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSr8JuH7uaxK2_D2wIZja4B8K3ZH-G37Z-h-slzhgPXcQzXSF4S' height={50} width={50} />
    <Text as="p" marginTop={4}>PRODUCT FEATURES</Text>
    <Text as="h1">Why choose Bitbucket Cloud?</Text>
  </Flex>
  
</Box>


<Box bg='rgb(9,30,66)' w='100%' p={4} color='white' height={600} display='flex' alignItems="center" justifyContent="center" marginTop={-150}>
  {/* Contents */}
  <Flex width="80%" justifyContent="space-between" alignItems="center">
  <Image src='https://wac-cdn.atlassian.com/dam/jcr:573ed78d-0a62-4932-9c6c-4f3fab8d78d5/bitbucket-cloud-features-003_2x.png?cdnVersion=1512' height={400} width='60%'  />
    <Box width="50%">
      <Text as="h1" marginTop={4}>Ship quality code</Text>
      <Text as="h4" marginBottom={4}>Comprehensive code review features to help you find and fix bugs before you deploy. Review large diffs with ease, view third-party code reports, and open Jira tickets right from the PR screen.</Text>
      <Text as="h5" marginTop={20}>Learn More</Text>
    
    </Box>
    {/* Image */}
   
  </Flex>
</Box>

<Box bg='rgb(9,30,66)' w='100%' p={4} color='white' height={600} display='flex' alignItems="center" justifyContent="center" marginTop={-150}>
  {/* Contents */}
  <Flex width="80%" justifyContent="space-between" alignItems="center">
    {/* Text Content */}
    <Box width="50%">
      <Text as="h1" marginTop={4} color='#ffffff'>Automate deployments</Text>
      <Text as="h4" marginBottom={4} color='#ffffff'>Use our built-in CI/CD tool, Bitbucket Pipelines, to create powerful, automated workflows. Or connect Bitbucket Cloud to on-prem CI/CD tools like Bamboo or Jenkins.</Text>
      <Text as="h5" marginTop={20}>Learn More</Text>
    
    </Box>
    {/* Image */}
    <Image src='https://wac-cdn.atlassian.com/dam/jcr:19c20014-198b-49d7-a8b9-5240bd1f3eb7/bitbucket-cloud-features-004_2x.png?cdnVersion=1512' height={400} width='60%'  />
  </Flex>
</Box>


<Box  w='100%' p={4}  marginTop={300} height={300} display='flex'>
  {/* Contents */}
  <Flex direction="column" justify="center" align="center" width="100%" marginTop={-100}>
    <Image src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTzA14uCAkl4RHcqQ4EtAVYi3ZR5oe1hMDU79LWNpqM120k-8UV' height={50} width={50} />
    <Text as="p" fontSize={13} marginTop={4}>WATCH THE DEMO</Text>
    <Text as="h1">See how Bitbucket Cloud works with Atlassian tools?</Text>
    <Text as="p" fontSize={20}>This video demos a code change workflow using Jira Software and Bitbucket Pipelines. </Text>
    <Box >
    <iframe width="1000px" height="500px" src="https://www.youtube.com/embed/kr2zkyxnhAk?si=OorHcIgFK7AbxW7R" 
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </Box>
  </Flex>
  
</Box>
<Box  w='100%' p={4}  marginTop={500} height={300} display='flex'>
  {/* Contents */}
  <Flex direction="column" justify="center" align="center" width="100%" marginTop={-100}>
    <Image src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRVM1Xm5fPhhqVhsxUTv6zySEYcvfmKnbDwLEZRYAbJccZtWSbU' height={50} width={50} />
    <Text as="p" fontSize={13} marginTop={4}>SECURE YOUR CODE</Text>
    <Text as="p" fontSize={20}>Run automatic security scans with out-of-the-box integration with Snyk, or connect to <br />other providers. Simply open an existing repository or create a new one and navigate to <br /> the Security tab to install the Snyk integration.</Text>
    <Image src='https://wac-cdn.atlassian.com/dam/jcr:1cb022f7-3223-4376-b281-9c5889ee5cc6/bitbucket-cloud-features-005_2x.png?cdnVersion=1512' height={400} width='60%' marginTop={30} />

    </Flex>
  
  
  
    </Box>
    <Box  w='70%' p={4} marginLeft={250} height={600} display='flex' alignItems="center" justifyContent="center" marginTop={200} boxShadow= "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px">
  {/* Contents */}
  <Flex width="80%" justifyContent="space-between" alignItems="center">
    {/* Text Content */}
    <Box width="50%">
      <Text as="h1" marginTop={4}>Collaborate with IT Ops</Text>
      <Text as="h4" marginBottom={4}>Enable automated change approval processes and resolve incidents faster by mapping incidents to deployments with Bitbucket and Jira Service Management.</Text>
      <Text as="h5" marginTop={20}>Learn More</Text>
    
    </Box>
    {/* Image */}
    <Image src='https://wac-cdn.atlassian.com/dam/jcr:b6b639ff-45d6-4f92-98d1-f45477ef38b0/bitbucket-cloud-features-006_2x.png?cdnVersion=1512' height={400} width='60%'  />
  </Flex>
</Box>
<Box bg='rgb(9,30,66)' w='100%' p={4} color='white' height={300} display='flex' alignItems="center" justifyContent="center" marginTop={150}>
  {/* Contents */}
  <Flex width="80%" justifyContent="space-between" alignItems="center">
  <Image src='https://wac-cdn.atlassian.com/dam/jcr:13f7a2fd-a1db-4d22-baa3-8f29a8b31390/Spot-Illo_CodeFolder_2x.png?cdnVersion=1512' height={200} width='200px' marginLeft={200}  />
    <Box width="50%" >
      <Text as="h1" marginTop={4}>Secure & compliant</Text>
      <Text as="h3" marginBottom={4}>Bitbucket Cloud is compliant with SOC2/3, ISO, and GDPR.  2FA and IP allowlisting keep your code accessible only by authorized users. All code is encrypted in transit and at rest.</Text>
      <Text as="h3" marginTop={20}>Learn More</Text>
    
    </Box>
    {/* Image */}
   
  </Flex>
</Box>

<Box  w='100%' p={4}  marginTop={80} height={500} display='flex'>
<Box   p={4}  marginTop={40} height={200} display='flex' width="40%" marginLeft={100}>
<GridItem rowSpan={1} colSpan={1} >
    <Image src='https://wac-cdn.atlassian.com/dam/jcr:5a71e162-8e5f-4e22-be26-f7b767313e96/Logo-Circle_Mabl_2x.png?cdnVersion=1512' borderRadius={'50%'} h='100px' w="100px" marginLeft={-130}  marginTop={-60}
     boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"></Image>
   
      </GridItem>
      <GridItem rowSpan={1} colSpan={1} >
    <Image src='https://wac-cdn.atlassian.com/dam/jcr:791a62a9-25be-46e1-9ae6-27e8c212536c/Logo-Circle_Jenkins_2x.png?cdnVersion=1512' borderRadius={'50%'} h='100px' w="100px" marginTop={300} marginLeft={-60}
    boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"></Image>
   
      </GridItem>
      {/* Contents */}
      <Flex direction="column" justify="center"  fontSize={20}>
        <Text as='p'>INTEGRATIONS FOR EVERY TEAM</Text>
    <Text as="h1" whiteSpace="nowrap">
    Build a DevOps toolchain that works for you
    </Text>
        <Text as="p">Don’t settle for an all-in-one DevOps tool. Start by connecting Bitbucket and Jira Software via Atlassian’s Open DevOps solution, then build out your custom DevOps stack with market-leading partner tools across security, testing and monitoring. </Text>
     <Text color={'blue'}>Explore the Marketplace</Text>
      </Flex>
</Box>
    <Grid
      h='500px' w="800px"
      templateRows='repeat(3, 1fr)'
      templateColumns='repeat(3, 1fr)'
      gap={10}
      marginLeft={200}
     
 
    >
      <GridItem rowSpan={1} colSpan={1} >
       <Image src='https://wac-cdn.atlassian.com/dam/jcr:f11640c6-fe6b-4350-8a57-bfd8111aa07d/Logo-Circle_DataDog_2x.png?cdnVersion=1512' borderRadius={'50%'}  h='100px' w="100px" marginTop={-300} marginLeft={-60}
        boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"></Image>
   
      
      </GridItem>
      
      <GridItem rowSpan={1} colSpan={1} >
      <Image src='https://wac-cdn.atlassian.com/dam/jcr:5e1e8165-bb0b-4de2-b4e7-1329397f0f2e/Logo-Circle_LaunchDarkly_2x.png?cdnVersion=1512'borderRadius={'50%'} h='100px' w="100px"  marginLeft={100} marginTop={100}
      boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"></Image>
   
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
      <Image src='https://wac-cdn.atlassian.com/dam/jcr:1347d383-cf17-42af-b21f-652e56de9629/Logo-Circle_AWS_2x.png?cdnVersion=1512' borderRadius={'50%'} h='100px' w="100px"  marginLeft={50} marginTop={-100}
      boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"></Image>
     
      </GridItem>
      <GridItem rowSpan={1} colSpan={1} >
    <Image src='https://wac-cdn.atlassian.com/dam/jcr:6ce5b38c-2b22-4754-9655-19434a55b8c6/Logo-Circle_Split_2x.png?cdnVersion=1512' borderRadius={'50%'} h='100px' w="100px"  marginLeft={-400} marginTop={130}
    boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"></Image>
   
      </GridItem>
      
      <GridItem rowSpan={1} colSpan={1} >
    <Image src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQGaxgrU7CiwbqeNDeFVoW2JC8wlgeHRAXGWJTgpPv8Se9nWyQt' borderRadius={'50%'} h='100px' w="100px" marginLeft={200} 
     boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"></Image>
   
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
      <Image src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQjDd_AD03l0nKuWav3BPfx4j8Cf8ZLDBUsb1SobOcUNhO2-lEp'marginLeft={-400} marginTop={130} borderRadius={'50%'} h='100px' w="100px"  boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"></Image>
     
      </GridItem>
      

    
    </Grid>
    </Box>
    <Box boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' marginTop={-90} height={700}>
    <Box  w='100%' p={4} color='black' height={500} >
 <Text as='h1' align={'center'} marginTop={100}>15 million developers from over a million teams love Bitbucket</Text>
 

<Flex direction="row" marginTop={-90}>
  <Image src='https://wac-cdn.atlassian.com/dam/jcr:262ef9c0-f07a-4459-9ac7-ec23d7000e9f/Logo-Grey-Nextiva_2x.png?cdnVersion=1512' height="30px" marginLeft={200} marginTop={100} width={150} />
  <Image src='https://wac-cdn.atlassian.com/dam/jcr:3bc7739e-a367-4021-9e55-efaa70a09b0b/Logo-Grey-AirCanada2_2x.png?cdnVersion=1512' height="50px" marginLeft={30} marginTop={100}  width={150}/>
  <Image src='https://wac-cdn.atlassian.com/dam/jcr:6f961303-7cc1-48e7-b3b8-f748d336f859/Logo-Grey-Fugro_2x.png?cdnVersion=1512' height="50px" marginLeft={30} marginTop={100}  width={150}/>
  <Image src='https://wac-cdn.atlassian.com/dam/jcr:044864a4-31ef-41c0-bb53-2dd47af071e2/Logo-Grey-Flo_2x.png?cdnVersion=1512' height="50px" marginLeft={30} marginTop={100}  width={150}/>
  <Image src='https://wac-cdn.atlassian.com/dam/jcr:70f08c00-2520-4df3-8fa6-eb19af34bdca/Logo-Grey-Invesco_2x.png?cdnVersion=1512' height="30px" marginLeft={30} marginTop={100}  width={150}/>
  <Image src='https://wac-cdn.atlassian.com/dam/jcr:0731cc0f-d2b3-4107-83b6-def20f8dc7cd/Logo-Grey-Rappi_2x.png?cdnVersion=1512' height="30px" marginLeft={30} marginTop={100}  width={150}/>
</Flex>
  </Box>
  <Box bg='rgb(9,30,66)' w='50%' p={4} color='white' height={300} display='flex' alignItems="center" justifyContent="center" marginTop={-200} marginLeft={400}>
  {/* Contents */}
  <Flex width="80%" justifyContent="space-between" alignItems="center" direction='column'>
 

      <Text as="h2" marginBottom={4}>“We’ve gone from one big-bang release every month to 10-20 production deployments per day. We also reduced the average development cycle time from 5.8 days to 2.9 days and the standard deviation from 19.8 days to 3.5 days.</Text>
      <Text marginLeft={-450}>Roman Bugaev, CTO </Text>
     <Image src='https://wac-cdn.atlassian.com/dam/jcr:4f9fb3e9-ccf7-4506-884b-d57ea8d83372/Logo-Carousel_001-Flo_2x.png?cdnVersion=1512' height={30} marginLeft={-550}></Image>
    
   
  
  </Flex>
</Box>
</Box>
<Box  w='100%' p={4}  marginTop={10} height={300} display='flex'>
  {/* Contents */}
  <Flex direction="column" justify="center" align="center" width="100%" marginTop={-100}>
  
   
    <Text as="h1">Learn more</Text>
  </Flex>
  
</Box>
<Grid templateColumns="repeat(3, 1fr)" gap={6} marginTop={-150}>
        {/* Grid Item 1 */}
        <GridItem>
         
          <Image src='https://wac-cdn.atlassian.com/dam/jcr:a4c1bb58-a486-4505-b78f-5ce6828ccbde/LearnMore-001_2x.png?cdnVersion=1512' height={200} marginLeft={80}></Image>
         
        </GridItem>
        
        {/* Grid Item 2 */}
        <GridItem>
          <Image src='https://wac-cdn.atlassian.com/dam/jcr:cc7be397-59c9-4de8-a5e3-b0fd7bc61619/LearnMore-002_2x.png?cdnVersion=1512'  height={200} marginLeft={30}></Image>
        </GridItem>
        
        {/* Grid Item 3 */}
        <GridItem>
          <Image src='https://wac-cdn.atlassian.com/dam/jcr:86178190-ddc0-4f9b-9a4e-ae004c69fa6b/LearnMore-003_2x.png?cdnVersion=1512' height={200}></Image>
        </GridItem>
        
        <GridItem>
         <Text  as='h2'marginLeft={80}>Need a self-hosted option?</Text>
         <Text marginLeft={80} fontSize={20}>Bitbucket Data Center is our code collaboration tool built for teams who need to host code behind the firewall. </Text>
         <Text marginLeft={80} fontSize={19} color={"blue"}>Learn more</Text>
        </GridItem>
        <GridItem>
        <Text  as='h2'marginLeft={40}>Considering migrating to <br /> Bitbucket Cloud?</Text>
         <Text marginLeft={40} fontSize={20}>Our free migration app automates moving your code and users from Bitbucket Server or Data Center to Bitbucket Cloud. </Text>
         <Text marginLeft={40} fontSize={19} color={"blue"}>Learn more</Text>
        </GridItem>
        <GridItem>
        <Text  as='h2'marginLeft={40}>New features on the horizon</Text>
         <Text marginLeft={40} fontSize={20}>Learn more about what we’ve recently shipped and what we’re building next for your team. </Text>
         <Text marginLeft={40} fontSize={19} color={"blue"}>Learn more</Text>
        </GridItem>
      </Grid>
      <Box bg='rgb(9,30,66)' w='100%' p={4} color='white' height={300} display='flex' alignItems="center" justifyContent="center" marginTop={50}>
  {/* Contents */}
  <Flex width="80%" justifyContent="space-between" alignItems="center" flexDirection={'column'}>
 
      <Text as="h1" marginTop={4}>Take Bitbucket Cloud for a spin</Text>
      <Button colorScheme='blue' bg="blue" width={130} height={40}  border={'none'}  color={'white'} borderRadius={10}>Start for free</Button>

    

   
  </Flex>
</Box>
      
  </>
  
  )
}

export default BitBucket