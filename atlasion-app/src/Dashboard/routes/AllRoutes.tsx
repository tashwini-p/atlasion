import { Routes, Route } from "react-router-dom";
import DashHome from '../pages/DashHome';
import DashUsers from '../pages/DashUsers';
import DashAnalytics from '../pages/DashAnalytics';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/admin/dash-home' element={<DashHome />} />
      <Route path='/admin/dash-users' element={<DashUsers />} />
      <Route path='/admin/dash-analytics' element={<DashAnalytics />} />
    </Routes>
  )
}

export default AllRoutes;
