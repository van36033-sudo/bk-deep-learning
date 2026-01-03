import { Link } from 'react-router-dom';
import { getSession } from '../utils/auth';
import AssessmentHistory from '../components/AssessmentHistory';

export default function DashboardSiswa() {
  const session = getSession();

  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Selamat datang</p>
          <h2 className="mt-2 text-xl font-semibold text-slate-800">{session?.name}</h2>
          <p className="mt-2 text-sm text-slate-600">
            Lengkapi asesmen untuk mendapatkan rekomendasi modul BK yang sesuai.
          </p>
          <Link
            to="/app/asesmen"
            className="mt-4 inline-flex rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white"
          >
            Mulai Asesmen
          </Link>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-700">Status Hari Ini</h3>
          <p className="mt-3 text-3xl font-semibold text-brand-600">Stabil</p>
          <p className="mt-2 text-sm text-slate-500">Pantau keseimbangan belajar dan aktivitas positif.</p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-700">Agenda Konseling</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>• Konseling kelompok: Rabu, 10:00</li>
            <li>• Coaching belajar: Jumat, 13:00</li>
            <li>• Sharing session: Sabtu, 09:00</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-800">Riwayat Asesmen</h3>
          <Link to="/app/hasil" className="text-sm font-semibold text-brand-600">
            Lihat Hasil Terbaru
          </Link>
        </div>
        <div className="mt-4">
          <AssessmentHistory />
        </div>
      </section>
    </div>
  );
}
