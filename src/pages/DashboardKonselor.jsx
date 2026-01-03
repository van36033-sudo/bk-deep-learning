import { Link } from 'react-router-dom';
import AssessmentHistory from '../components/AssessmentHistory';

export default function DashboardKonselor() {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">Prioritas Pendampingan</h2>
          <p className="mt-2 text-sm text-slate-600">
            Fokus pada siswa dengan risiko tinggi berdasarkan hasil asesmen terbaru.
          </p>
          <div className="mt-4 rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
            3 siswa membutuhkan follow-up intensif minggu ini.
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-700">Sesi Konseling Aktif</h3>
          <p className="mt-3 text-3xl font-semibold text-brand-600">12</p>
          <p className="mt-2 text-sm text-slate-500">Update catatan konseling dan tindak lanjut.</p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-700">Akses Cepat</h3>
          <div className="mt-3 space-y-2 text-sm">
            <Link className="block text-brand-600" to="/app/chat">
              Buka Chat Siswa
            </Link>
            <Link className="block text-brand-600" to="/app/hasil">
              Lihat Ringkasan Asesmen
            </Link>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-800">Riwayat Asesmen Terbaru</h3>
        <p className="mt-1 text-sm text-slate-500">Pantau perkembangan berdasarkan input siswa.</p>
        <div className="mt-4">
          <AssessmentHistory />
        </div>
      </section>
    </div>
  );
}
