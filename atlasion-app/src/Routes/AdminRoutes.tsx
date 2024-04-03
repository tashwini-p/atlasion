
import { Route, Routes} from 'react-router-dom'
import DashHome from '../Dashboard/pages/DashHome'
import DashAnalytics from '../Dashboard/pages/DashAnalytics'
import DashUsers from '../Dashboard/pages/DashUsers'

import { PrivateRoute } from '../AuthContext/PrivateRoute'

const AdminRoutes = () => {
 
  return (
    <Routes>
        <Route path="/admin/dash-home" element={<PrivateRoute><DashHome /></PrivateRoute>} />
        <Route path="/admin/dash-users" element={<DashUsers />} />
        <Route path="/admin/dash-analytics" element={<DashAnalytics />} />
    </Routes>
  )
}

export default AdminRoutes