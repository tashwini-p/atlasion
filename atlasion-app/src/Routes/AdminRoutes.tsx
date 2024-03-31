
import { Route, Routes } from 'react-router-dom'
import DashHome from '../Dashboard/pages/DashHome'
import DashAnalytics from '../Dashboard/pages/DashAnalytics'
import DashUsers from '../Dashboard/pages/DashUsers'

const AdminRoutes = () => {
  return (
    <Routes>
        <Route path="/admin/dash-home" element={<DashHome />} />
        <Route path="/admin/dash-users" element={<DashUsers />} />
        <Route path="/admin/dash-analytics" element={<DashAnalytics />} />
    </Routes>
  )
}

export default AdminRoutes