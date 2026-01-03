import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { clearSession, getRole } from '../utils/auth';

const roleLabels = {
  siswa: 'Siswa',
  konselor: 'Konselor',
  admin: 'Admin'
};

const navBase = [
  { to: '/app/asesmen', label: 'Asesmen' },
  { to: '/app/hasil', label: 'Hasil' },
  { to: '/app/chat', label: 'Chat' }
];

const roleDashboards = {
  siswa: { to: '/app/siswa', label: 'Dashboard Siswa' },
  konselor: { to: '/app/konselor', label: 'Dashboard Konselor' },
  admin: { to: '/app/admin', label: 'Dashboard Admin' }
};

const linkClasses = ({ isActive }) =>
  `flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition ${
    isActive
      ? 'bg-brand-500 text-white shadow'
      : 'text-slate-600 hover:bg-brand-50 hover:text-brand-700'
  }`;

export default function AppShell() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const role = getRole();
  const navItems = useMemo(() => {
    const dashboard = role ? [roleDashboards[role]] : [];
    return [...dashboard, ...navBase];
  }, [role]);

  const handleLogout = () => {
    clearSession();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex">
        <aside
          className={`fixed inset-y-0 left-0 z-20 w-72 transform bg-white shadow-xl transition-transform lg:static lg:translate-x-0 ${
            open ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex h-full flex-col border-r border-slate-100">
            <div className="flex items-center justify-between px-6 py-6">
              <div>
                <p className="text-xs font-semibold uppercase text-brand-500">BK Deep Learning</p>
                <h2 className="text-lg font-semibold text-slate-800">Portal {roleLabels[role]}</h2>
              </div>
              <button
                className="lg:hidden"
                onClick={() => setOpen(false)}
                aria-label="Tutup navigasi"
              >
                ✕
              </button>
            </div>
            <nav className="flex-1 space-y-2 px-4">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className={linkClasses} onClick={() => setOpen(false)}>
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </nav>
            <div className="px-6 py-6">
              <button
                onClick={handleLogout}
                className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"
              >
                Logout
              </button>
            </div>
          </div>
        </aside>

        <div className="flex-1 lg:ml-0">
          <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4 lg:px-10">
            <div>
              <p className="text-sm text-slate-500">Selamat datang kembali,</p>
              <h1 className="text-xl font-semibold text-slate-800">{roleLabels[role]} Dashboard</h1>
            </div>
            <button
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 lg:hidden"
              onClick={() => setOpen(true)}
            >
              Menu
            </button>
          </header>
          <main className="px-6 py-8 lg:px-10">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
