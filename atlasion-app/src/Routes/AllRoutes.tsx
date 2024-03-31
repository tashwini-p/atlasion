import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../HomePage/Navbar'
import Jira from '../jira software/Jira'
import BitBucket from '../bitbucket/BitBucket'
import JiraServiceManagement from '../Jira Service Management/JiraServiceManagement'
import DashHome from '../Dashboard/pages/DashHome'
import DashAnalytics from '../Dashboard/pages/DashAnalytics'
import DashUsers from '../Dashboard/pages/DashUsers'
import { Confluence } from '../confluence/Confluence'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/jiraSoftware' element={<Jira/>}/>
        <Route path='/bitBucket' element={<BitBucket/>}/>
        <Route path='/confluence' element={<Confluence/>}/>
        <Route path='/jiraServiceManagement' element={<JiraServiceManagement/>}/>
        <Route path='/admin/dash-home' element={<DashHome />} />
        <Route path='/admin/dash-users' element={<DashUsers />} />
        <Route path='/admin/dash-analytics' element={<DashAnalytics />} />
    </Routes>
  )
}

export default AllRoutes