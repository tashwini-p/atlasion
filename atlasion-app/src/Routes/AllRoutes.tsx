
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../HomePage/Navbar'
import Jira from '../jira software/Jira'
import BitBucket from '../bitbucket/BitBucket'
import JiraServiceManagement from '../Jira Service Management/JiraServiceManagement'

import { ChakraProvider } from '@chakra-ui/react'
import { Confluence } from '../confluence/Confluence'


const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <ChakraProvider><Navbar/></ChakraProvider>
        } />
        <Route path="/jiraSoftware" element={
          <Jira/>
        } />
        <Route path="/bitBucket" element={
          <BitBucket/>
        } />
        <Route path="/confluence" element={
            <ChakraProvider><Confluence/></ChakraProvider>
        } />
        <Route
          path="/jiraServiceManagement"
          element={
            <ChakraProvider><JiraServiceManagement/></ChakraProvider>
          }
        />

      </Routes>

    </>
  )
}

export default AllRoutes