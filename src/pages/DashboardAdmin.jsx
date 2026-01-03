import AssessmentHistory from '../components/AssessmentHistory';

export default function DashboardAdmin() {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">Monitoring Sekolah</h2>
          <p className="mt-2 text-sm text-slate-600">
            Ringkasan aktivitas BK seluruh sekolah dalam satu dashboard.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-700">Asesmen Bulan Ini</h3>
          <p className="mt-3 text-3xl font-semibold text-brand-600">86</p>
          <p className="mt-2 text-sm text-slate-500">Tren naik 12% dibanding bulan lalu.</p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-700">Konselor Aktif</h3>
          <p className="mt-3 text-3xl font-semibold text-emerald-600">5</p>
          <p className="mt-2 text-sm text-slate-500">Semua konselor terjadwal minggu ini.</p>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-800">Riwayat Asesmen Sekolah</h3>
        <p className="mt-1 text-sm text-slate-500">Gunakan data ini untuk laporan kebijakan BK.</p>
        <div className="mt-4">
          <AssessmentHistory />
        </div>
      </section>
    </div>
  );
}
