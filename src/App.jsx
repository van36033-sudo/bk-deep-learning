import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import AppShell from './components/AppShell';
import DashboardSiswa from './pages/DashboardSiswa';
import DashboardKonselor from './pages/DashboardKonselor';
import DashboardAdmin from './pages/DashboardAdmin';
import AssessmentForm from './pages/AssessmentForm';
import AssessmentResult from './pages/AssessmentResult';
import Chat from './pages/Chat';
import { getRole, isAuthenticated } from './utils/auth';

const RequireAuth = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const RoleRedirect = () => {
  const role = getRole();
  if (role === 'konselor') return <Navigate to="/app/konselor" replace />;
  if (role === 'admin') return <Navigate to="/app/admin" replace />;
  return <Navigate to="/app/siswa" replace />;
};

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/app"
          element={
            <RequireAuth>
              <AppShell />
            </RequireAuth>
          }
        >
          <Route index element={<RoleRedirect />} />
          <Route path="siswa" element={<DashboardSiswa />} />
          <Route path="konselor" element={<DashboardKonselor />} />
          <Route path="admin" element={<DashboardAdmin />} />
          <Route path="asesmen" element={<AssessmentForm />} />
          <Route path="hasil" element={<AssessmentResult />} />
          <Route path="chat" element={<Chat />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
