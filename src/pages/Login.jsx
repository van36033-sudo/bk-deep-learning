import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setSession } from '../utils/auth';

const roles = [
  { value: 'siswa', label: 'Siswa' },
  { value: 'konselor', label: 'Konselor' },
  { value: 'admin', label: 'Admin' }
];

export default function Login() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('siswa');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSession({
      token: `demo-${Date.now()}`,
      name: name.trim() || 'Pengguna Demo',
      role
    });
    navigate('/app');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
          <div className="mb-6 text-center">
            <p className="text-xs font-semibold uppercase text-brand-500">Demo BK Deep Learning</p>
            <h1 className="mt-2 text-2xl font-semibold text-slate-800">Masuk ke Aplikasi</h1>
            <p className="mt-2 text-sm text-slate-500">Pilih peran untuk melihat dashboard khusus.</p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-semibold text-slate-600">Nama</label>
              <input
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-brand-400 focus:outline-none"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Nama lengkap"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-600">Peran</label>
              <select
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-brand-400 focus:outline-none"
                value={role}
                onChange={(event) => setRole(event.target.value)}
              >
                {roles.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-brand-500 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-brand-600"
            >
              Masuk Demo
            </button>
          </form>
          <div className="mt-6 rounded-2xl bg-brand-50 px-4 py-3 text-xs text-brand-700">
            Gunakan nama apa pun dan pilih peran sesuai kebutuhan demo.
          </div>
        </div>
      </div>
    </div>
  );
}
